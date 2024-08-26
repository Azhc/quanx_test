// 获取响应体内容
var body = $response.body;
// 将响应体内容解析为JSON对象
var obj = JSON.parse(body);

if (obj.data && obj.data.length > 0) {
    for (var i = 0; i < obj.data.length; i++) {
        // 修改 is_vip 为 1
        obj.data[i].is_vip = 1;
        // 修改 free_times 为 999
        obj.data[i].free_times = 999;
        obj.data[i].flash_left_time=999;
    }
}

// 将修改后的JSON对象重新转为字符串
body = JSON.stringify(obj);
// 返回修改后的响应体
$done({ body });
