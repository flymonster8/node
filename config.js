module.exports = {
	name : 'public',
    devPath : 'D:/nodejs/global/public', //项目根路径，根路径下可以包含多个项目
    prodPath : 'D:/nodejs/global/public/dist', //生产路径根路径
    sassPath : 'D:/nodejs/global/public/sass', //SASS包含文件路径
    rmHtmlWhitespace : false,//html中是否去除空格
    webpackEntry : {
        index : 'index.js'//js合并
    },
    server : {
        port : 8088
    }
};
