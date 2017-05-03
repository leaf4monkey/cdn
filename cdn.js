/**
 * Created on 2017/5/2.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
import {WebAppInternals} from 'meteor/webapp';

let {CDN_URL} = process.env;

if (CDN_URL) {
    console.log({CDN_URL});
    WebAppInternals.setBundledJsCssPrefix(CDN_URL.replace(/\/$/, ''));
}
