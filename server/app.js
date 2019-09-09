const config = require("../config/config");
const electron = require('electron');
const Logger = require('mini-logger');

const path = require("path");



const { app, BrowserWindow,Menu } = electron;

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


// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

let onlineStatusWindow


function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setProgressBar(0.5)
  // 加载index.html文件
  if(process.env.NODE_ENV === 'development'){
    win.loadURL("http://localhost:8080/")
  }else{
    win.loadFile(path.join(config.viewDir,"index.html"))
  }
  

  // 打开开发者工具
  win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', () => {
  createWindow();
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(path.join(config.viewDir,"online-status.html"))
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。