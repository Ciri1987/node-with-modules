'use strict';

var os = require('os');
var colors = require('colors');
var timeConvert = require('../modules/timeConverter');

function getOSinfo() { //funkcja pokazująca info o sytemie
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model; //tablica - pobiera info o pierwszym rdzeniu procesora
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.rainbow, cpu);
    console.log('Uptime: ~'.gray, timeConvert.timeCon(uptime));
    console.log('User name:'.blue, userInfo.username);
    console.log('Home dir:'.yellow, userInfo.homedir);
}

exports.print = getOSinfo;