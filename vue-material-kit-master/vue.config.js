module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  devServer:{
    proxy: {
      '/*':{
        target:'internal-L25004-Internal-ALB-470319970.ap-northeast-2.elb.amazonaws.com:8090',
        changeOrigin: true
      }
    }
  }


};
