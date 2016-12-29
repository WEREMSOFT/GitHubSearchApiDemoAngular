/**
 * Created by pabloweremczuk on 12/28/16.
 */
import url         from 'url';
import https       from 'https';
export default function(client_req, client_res, next) {
    let fileHref = url.parse(client_req.url).href;

    if(fileHref.indexOf('/api/') == 0){
        var options = {
            hostname: 'api.github.com' ,
            path: '/' + fileHref.split('/api/')[1],
            port: 443,
            method: 'GET',
            headers: {'user-agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
            //headers: client_req.header
        };

        var proxy = https.request(options, function (res) {
            res.pipe(client_res, {
                end: true
            });
        });

        client_req.pipe(proxy, {
            end: true
        });

    }else {
        return next();
    }

};
