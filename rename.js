


var body = $response.body; // 获取响应体内容
var obj = JSON.parse(body); // 将响应体内容解析为JSON对象

function formatTimestamp(timestamp) {
    var date = new Date(timestamp * 1000); // 转换为毫秒
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // 月份补零
    var day = ('0' + date.getDate()).slice(-2); // 日期补零
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function formatDistance(distance) {
    return distance.toFixed(2); // 保留两位小数
}

if (obj.data && obj.data.length > 0) {
    for (var i = 0; i < obj.data.length; i++) {
        var user = obj.data[i];
        // 将last_operate时间戳转换为人类可读的时间
        var formattedTime = formatTimestamp(user.last_operate);
        // 将distance格式化为两位小数
        var formattedDistance = formatDistance(user.distance);
        console.log(`用户名为：${user.name},上次操作时间为：${formattedTime},距离为：${formattedTime}`);
        $notify(user.name,formattedTime , formattedDistance)
        // 拼接到name后面
        user.name += `${formattedTime},${formattedDistance}km`;
    }
}

body = JSON.stringify(obj); // 将修改后的JSON对象重新转为字符串
$done({ body }); // 返回修改后的响应体
