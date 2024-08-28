var url =$request.url;
let headers = $request.headers;

function notify(title = "", subtitle = "", content = "", open_url) {
    let opts = {};
        if (open_url) {
            open_url = open_url.replace(/!o\.[^!o\.]*$/, ""); // Remove !o. and everything after it
            opts["open-url"] = open_url;
            console.log(`🐓闪照链接:${open_url}`)
        }
        opts["open-url"] = open_url;
        if (JSON.stringify(opts) == "{}") {
            $notify(title, subtitle, content);
        } else {
            $notify(title, subtitle, content, opts);

    } 
}

async function launch (){
    if(headers['User-Agent'].indexOf("Blued")!=-1){
        notify("🐓", "点击跳转到浏览器打开看图", url, url);
    }
     if(headers['User-Agent'].indexOf("Media")!=-1){
        notify("🐓", "点击跳转到浏览器打开看图", url, url);
    }
    $done();
}
launch()
