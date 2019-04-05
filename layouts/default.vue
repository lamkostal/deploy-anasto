<template>
  <div class="">
    <TopInfo/>
    <Header @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav"  @close="displaySidenav=false"/> 
    <nuxt class="nuxtContent has-text-grey-dark"/>
    <TheFooter/>
  </div>
</template>

<script>
import Header from '@/components/Navigation/Header'

import TopInfo from '@/components/Navigation/TopInfo'

import TheSidenav from '@/components/Navigation/TheSidenav'

import TheFooter from '@/components/Navigation/TheFooter'
export default {
  components:{
    TopInfo,
    Header,
    TheSidenav,
    TheFooter
  },
  data(){
    return{
      displaySidenav:false,
      
    }
  },
  head () {
    return {
     
      link:[{rel:'canonical' ,href:'https://anastopoulos-orthopedikos.gr'+this.$route.path}]
      
    }
  }
}
</script>

<style>
html {
  font-family:  'Roboto', 'Helvetica Neue', Arial,'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 17px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* background:#f0f0f0; */
}
body{
  font-family:  'Roboto',sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.nuxtContent{
  box-sizing: border-box;
}
.icon-links{
        
        padding:0px 10px;
        
    }
 
    hr{
  height: 1px;
}
.padding{
    padding: 5rem 1.5rem;
}


@media only screen and (max-width:600px){
  .nuxtContent{
 box-sizing: border-box;
}
}  
</style>
