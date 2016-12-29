/**
 * Created by pabloweremczuk on 12/28/16.
 */
import url         from 'url';
import config      from './../../config';

const DEFAULT_FILE = 'index.html';
const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

export default function(req, res, next) {
    let fileHref = url.parse(req.url).href;

    if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
        req.url = '/' + DEFAULT_FILE;
    }
    console.log('cock cock!');

    return next();
};

