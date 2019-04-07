const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "ΓΙΩΡΓΟΣ ΑΝΑΣΤΟΠΟΥΛΟΣ | ΟΡΘΟΠΕΔΙΚΟΣ - ΧΕΙΡΟΥΡΓΟΣ",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Γεώργιος Ι. Αναστόπουλος, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών και Επισκέπτης καθηγητής του Πανεπιστημίου του Leeds." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity : "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
        crossorigin : "anonymous"
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
  modules: [,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
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

}
  
}
