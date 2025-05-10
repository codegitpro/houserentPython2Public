const base = {
    get() {
        return {
            url : "http://localhost:8080/housePython2/",
            name: "housePython2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Django的智能租房系统的设计与实现"
        } 
    }
}
export default base
