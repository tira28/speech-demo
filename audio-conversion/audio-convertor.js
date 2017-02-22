/**
 * Created by yudistira on 2/22/17.
 */


let linear16 = require('linear16');

let fileInput = '../resources/test.m4a';
let fileOutput = '../resources/test.raw';

linear16(fileInput, fileOutput)
    .then(outPath);

function outPath(outpath){
    console.log('outpath: ', outpath);
}


