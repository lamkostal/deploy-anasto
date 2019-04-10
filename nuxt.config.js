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
      { hid: 'description', name: 'description', content: "Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών."},
      {property:"og:site_name",content:"ΓΙΩΡΓΟΣ ΑΝΑΣΤΟΠΟΥΛΟΣ | ΟΡΘΟΠΕΔΙΚΟΣ - ΧΕΙΡΟΥΡΓΟΣ"},
      {property:"og:type",content:"website"},
      {property:"og:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {property:"og:locale", content:"el_GR"},
      {property:"og:title",content:"ΓΙΩΡΓΟΣ ΑΝΑΣΤΟΠΟΥΛΟΣ | ΟΡΘΟΠΕΔΙΚΟΣ - ΧΕΙΡΟΥΡΓΟΣ"},
      {property:"og:url",content:"https://anastopoulos-orthopedikos"},
      {property:"og:description",content:"Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών." },
      {name:"twitter:card",content:"summary"},
      {name:"twitter:title",content:"ΓΙΩΡΓΟΣ ΑΝΑΣΤΟΠΟΥΛΟΣ | ΟΡΘΟΠΕΔΙΚΟΣ - ΧΕΙΡΟΥΡΓΟΣ"},
      {name:"twitter:site",content:"ΓΙΩΡΓΟΣ ΑΝΑΣΤΟΠΟΥΛΟΣ | ΟΡΘΟΠΕΔΙΚΟΣ - ΧΕΙΡΟΥΡΓΟΣ"},
      {name:"twitter:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {name:"twitter:url",content:"https://anastopoulos-orthopedikos"},
      {name:"twitter:description",content:"Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών." }
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
  }
  
}
