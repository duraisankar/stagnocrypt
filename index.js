const {
    app,
    BrowserWindow
} = require('electron');
const url = require('url');
var path= require('path')
function boot() {
    win = new BrowserWindow({
	width: 1000, height: 500,
        frame:false
	})
    win.loadURL(url.format({
        pathname: 'index.html',
        slashes: true
    }))
}

app.on('ready', boot)
