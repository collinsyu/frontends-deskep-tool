const Logger = require('mini-logger');
const config = require("../../config/config");


// NOTE: 2019-09-09 17:33:20 目前本地开发使用日志是记录在本地，一会会创建一个在线获取app运行情况

var _logger = Logger({
    dir: config.logDir,
    timestamp:true,
    format: 'YYYY-MM-DD-[{category}][.log]'
});
var logger = _logger.error;
if(process.env.NODE_ENV === 'development'){
logger = console.log
}
module.exports = logger;