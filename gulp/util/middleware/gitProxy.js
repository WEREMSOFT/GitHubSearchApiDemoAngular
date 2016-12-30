/**
 * Created by pabloweremczuk on 12/28/16.
 * This is a GIT Proxy that implements a simple cache to avoid tampering.
 */
import url         from 'url';
import https       from 'https';



export default function(client_req, client_res, next) {
    var callCache = [];
    let fileHref = url.parse(client_req.url).href;
    if(fileHref.indexOf('/api/') == 0){
        if(callCache[fileHref] == null){
            var options = {
                hostname: 'api.github.com' ,
                path: '/' + fileHref.split('/api/')[1],
                port: 443,
                method: 'GET',
                headers: {'user-agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
                    'Authorization': 'token TOTALLY_FALE_TOKEN'}//You must put your own oauth token here.
            };

            var proxy = https.request(options, function (res) {
                var rawData = '';
                res.on('data',(d)=>{
                    rawData += d;
                });

                res.on('end', (e)=>{
                   callCache[fileHref] = rawData;
                });


                res.pipe(client_res, {
                    end: true
                });
            });
            client_req.pipe(proxy, {
                end: true
            });
        }else{
            console.log('call cached');
            client_res.write(callCache[fileHref]);
            client_res.end();
        }


    }else {
        return next();
    }

};
