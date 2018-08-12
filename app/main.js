var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
const path = require('path')
var ipc = electron.ipcMain;
var Menu = electron.Menu;
var appWindow;

app.on('ready', function () {

    appWindow = new BrowserWindow({
        show: true,
        frame: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    appWindow.loadURL(path.join(__dirname, '/index.html'));
    appWindow.once('ready-to-show', function () {
        appWindow.show();
    });
});