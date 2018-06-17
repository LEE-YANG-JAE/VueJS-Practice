module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/bootstrap/dist/css/bootstrap.css'}
    ]
  },
  /*
  ** Customize the progress bar color
    loading: { color: '#3B8070' },
  */
  loading: { 
    color: 'blue',
    height : "5px",
    failedColor : "red",
    duration : 1000 * 10 // 10초
    // 기본값 5초 
   },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  cache : {
    max : 1000, // 캐시되는 컴포넌트 수
    maxAge : 1000 * 60 * 60 // 1000(1초) * 60 = 1분, 1분 * 60 = 1시간 // 캐시되는 시간
    // 기본값 15분
  }
}
