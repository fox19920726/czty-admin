module.exports = {
	dev:{
		// 启动项目时是否新打开页面
		open: false,
		// 配置代理ip
		proxy: {
      '**':'http://192.168.110.210:8080'
    },
    // 端口号默认3000，如果跟其他项目冲突，可以重新配端口号
    // port: '3001'
	},
  url:{
    pub:{
      baseUrl:'http://192.168.110.210212:8080'
    },
    dev:{
      baseUrl:'http://192.168.110.210:8080'
    },
    start:{
      baseUrl:''
    }
  },
  sassGlobal:['color.scss','transition.scss']
}
