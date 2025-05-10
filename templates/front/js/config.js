
var projectName = '基于Django的智能租房系统的设计与实现';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '房屋信息',
	url: './pages/fangwuxinxi/list.html'
}, 

{
	name: '网站公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/housePython2/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"租客","menuJump":"列表","tableName":"zuke"}],"menu":"租客管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"房主","menuJump":"列表","tableName":"fangzhu"}],"menu":"房主管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"房屋类型","menuJump":"列表","tableName":"fangwuleixing"}],"menu":"房屋类型管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除","审核","查看评论"],"menu":"房屋信息","menuJump":"列表","tableName":"fangwuxinxi"}],"menu":"房屋信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"预约看房","menuJump":"列表","tableName":"yuyuekanfang"}],"menu":"预约看房管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"租客租房","menuJump":"列表","tableName":"zukezufang"}],"menu":"租客租房管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除"],"menu":"在线咨询","menuJump":"列表","tableName":"zaixianzixun"}],"menu":"在线咨询管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","删除"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"网站公告","tableName":"news"},{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["预约看房","租客租房","在线咨询","查看"],"menu":"房屋信息列表","menuJump":"列表","tableName":"fangwuxinxi"}],"menu":"房屋信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"预约看房","menuJump":"列表","tableName":"yuyuekanfang"}],"menu":"预约看房管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除","支付"],"menu":"租客租房","menuJump":"列表","tableName":"zukezufang"}],"menu":"租客租房管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除"],"menu":"在线咨询","menuJump":"列表","tableName":"zaixianzixun"}],"menu":"在线咨询管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","审核","用户评价"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["预约看房","租客租房","在线咨询","查看"],"menu":"房屋信息列表","menuJump":"列表","tableName":"fangwuxinxi"}],"menu":"房屋信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"租客","tableName":"zuke"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"房屋信息","menuJump":"列表","tableName":"fangwuxinxi"}],"menu":"房屋信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","删除","审核"],"menu":"预约看房","menuJump":"列表","tableName":"yuyuekanfang"}],"menu":"预约看房管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","审核","签订合同"],"menu":"租客租房","menuJump":"列表","tableName":"zukezufang"}],"menu":"租客租房管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","审核"],"menu":"在线咨询","menuJump":"列表","tableName":"zaixianzixun"}],"menu":"在线咨询管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["预约看房","租客租房","在线咨询","查看"],"menu":"房屋信息列表","menuJump":"列表","tableName":"fangwuxinxi"}],"menu":"房屋信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"房主","tableName":"fangzhu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
