<template>
  <section class="section footer has-shadow has-background-light">
    <div class="container">
      <!-- <hr class="has-background-grey-light"> -->
      <div class="columns">
        <div class="column is-1">
          <ul>
            <li>
              <nuxt-link class="flink is-size-6" to="/" exact>Αρχική</nuxt-link>
            </li>
            <li>
              <nuxt-link class="flink is-size-6" to="/biografiko">Βιογραφικό</nuxt-link>
            </li>
            <li>
              <nuxt-link class="flink is-size-6" to="/epembaseis">Επεμβάσεις</nuxt-link>
            </li>
            <li>
              <nuxt-link class="flink is-size-6" to="/contact">Επικοινωνία</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column"></div>
        <div class="column is-one-third is-desktop logocol is-narrow">
          <!-- AddToAny BEGIN -->
          <div class="columns">
            <div class="column"></div>
            <div class="sharecont column is-narrow">
              <span>Share with :</span>
              
              <a
                href="http://www.facebook.com/sharer.php?u=https://kuiosgiorgos.com"
                target="_blank"
                title="facebook"
              >
                <img src="https://static.addtoany.com/buttons/facebook.svg" width="32" height="32">
              </a>
              
              <a
                href="https://twitter.com/share?url=www.kuriogiorgos.com&amp;text=kuriosgiorgos.com"
                target="_blank"
                title="twitter"
              >
                <img src="https://static.addtoany.com/buttons/twitter.svg" width="32" height="32">
              </a>
              
              <a
                href="https://www.addtoany.com/add_to/google_gmail?linkurl=www.kuriogiorgos.com&amp;linkname="
                target="_blank"
                title="gmail"
              >
                <img src="https://static.addtoany.com/buttons/gmail.svg" width="32" height="32">
              </a>
              
              <a
                href="https://www.addtoany.com/add_to/viber?linkurl=www.kuriogiorgos.com&amp;linkname="
                target="_blank"
                title="viber"
              >
                <img src="https://static.addtoany.com/buttons/viber.svg" width="32" height="32">
              </a>
              
              <a
                href="javascript:;"
                onclick="window.print()"
                target="_blank"
                title="print this page"
              >
                <img src="https://static.addtoany.com/buttons/print.svg" width="32" height="32">
              </a>
            </div>
          </div>
          <!-- AddToAny END -->
          <div class="logo">
            <nuxt-link to="/">
              <img class="logoimg image" src="@/assets/images/logo.svg">
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered is-size-7">
          <hr class="has-background-grey-lighter">

          <span>© 2019 All rights reserved</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "theFooter"
};
</script>

<style scoped>
.flink {
  color: #2e8383;
}
.flink:hover {
  color: #197070;
}
li {
  transition: all 0.25s;
  padding: 5px 15px;
  border-left: 2px solid transparent;
}
li:hover {
  border-left: 2px solid #dbac4d;
  padding: 5px 10px;
}
.logoimg {
  filter: invert(150);
  opacity: 0.5;
}
.logocol {
  margin-top: auto;
}
.footer {
  padding: 2.8rem 15px 1rem 15px ;
}
.sharecont {
  /* padding: 5px; */
  /* margin-left:auto; */
}
.sharecont span {
  padding: 0px 10px;
}
.sharecont > a > img {
  background-color: #4a9898;
}
.sharecont > a > img:hover {
  background-color: #dbac4d;
}
</style>


