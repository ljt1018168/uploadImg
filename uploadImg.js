//index.js
//获取应用实例
var app = getApp()
Page( {
  data: { 
    images: {},

  },
   
  uploads: function() {
    var that =this
    wx.chooseImage( {
      count: 1, // 默认9
      sizeType: [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
      success: function( res ) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
       // console.log( res )
       that.setData({
         img:res.tempFilePaths[ 0 ]
       })
        wx.uploadFile( {
          url: 'http://www.tp5.com/index.php/Api/File/uploadImage',
          filePath: res.tempFilePaths[ 0 ],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function( res ) {
            console.log( res )
          }
        })
      }
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
  }
})
