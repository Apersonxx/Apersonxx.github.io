function jsonp(url, data, cb, fn){
    //1.随机生成一个函数(函数名是随机的);
    var fnName = "jquery_" + parseInt(Math.random() * 1000);
    window[fnName] = fn;
    //.2创建一个script标签,利用他的src去请求数据
    var sc = document.createElement("script");
    sc.src = url + "?" + getParam(data) + cb + "=" + fnName;
    document.body.appendChild(sc);
    //数据加载完成后,会触发 onload事件
    //3.请求完成后,删除script标签
    sc.onload = function(){
        this.remove();
    }
}
function getParam(obj){
    var str = "";
    for(var key in obj){
        str += key + "=" + obj[key] + "&";
    }
    return str;
}