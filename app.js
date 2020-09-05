App({

    //生命周期函数
    //当小程序初始化完成时,会执行的生命周期函数
    onLaunch(){
        wx.getUserInfo({
          success: function(res){
            console.log(res)
          }

        })
    },

    //小程序界面显示出来之后会执行的生命周期函数
    onShow(options){
        //判断小程序的进入场景
        switch(options.scene){
            case 1001:
                break
            case 1005:
                break
        }
    },

    //界面被隐藏的时候会执行
    onHide(){

    },

    //当小程序发生一些错误的时候会执行
    onError(){

    },

    //定义全局数据
globalData:{
    name:"流浪的军刀",
    age:18

}

})