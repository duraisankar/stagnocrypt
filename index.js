const {
    app,
    BrowserWindow
} = require('electron');
const url = require('url');
var path= require('path')
function boot() {
    win = new BrowserWindow({
	width: 1100, height: 700,
        frame:false
	})
    win.loadURL(url.format({
        pathname: 'index.html',
        slashes: true
    }))
}

app.on('ready', boot)
