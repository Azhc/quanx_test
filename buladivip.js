var objc = JSON.parse($response.body);

// 获取到 vip_split 中的所有值并修改为 1
for (var key in objc.data[0].vip_split) {
    if (objc.data[0].vip_split.hasOwnProperty(key)) {
        objc.data[0].vip_split[key] = 1;
    }
}


// 转换为字符串并返回
objc = JSON.stringify(objc);
console.log(objc);
$done({
    body: objc
});
