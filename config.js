var newObjc = JSON.parse($response.body);

//
newObjc.is_global_view_secretly = 1;
newObjc.is_hide_last_operate = 1;
newObjc.is_hide_distance = 1;
newObjc.is_invisible_all = 1;
newObjc.is_invisible_half = 1;
newObjc.is_show_vip_page = 1;
newObjc.is_hide_vip_look = 1;
newObjc.is_traceless_access = 1;
newObjc.is_traceless_access = 1;
newObjc.is_show_msg_txt = 999;


// 转换为字符串并返回
newObjc = JSON.stringify(newObjc);
console.log(newObjc);
$done({
    body: newObjc
});
