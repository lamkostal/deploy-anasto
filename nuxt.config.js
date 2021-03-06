const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity : "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
        crossorigin : "anonymous",
        
       },
       {href:"https://fonts.googleapis.com/css?family=Roboto" ,rel:"stylesheet"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
   
  },
  transition:{
    name:'fade',
    mode:'out-in'
  },
  sitemap:{
    generate: true,
    path: '/sitemap.xml',
    hostname: 'https://anastopoulos-orthopedikos.gr',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
  },
  robots:{
    Sitemap: "https://anastopoulos-orthopedikos.gr/sitemap.xml"
  },
  generate: {
    fallback: true,
},
  
}
