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
            <!-- <li>
              <nuxt-link class="flink is-size-6" to="/epembaseis">Επεμβάσεις</nuxt-link>
            </li>-->
            <li>
              <nuxt-link class="flink is-size-6" to="/contact">Επικοινωνία</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column"></div>
        <div class="column is-one-third is-desktop logocol is-narrow">
          <!-- AddToAny BEGIN -->
          <div class="columns">
            <div class="sharecont column has-text-right-desktop">
              <span>Share with :</span>
              <!-- Sharingbutton Facebook -->
              <a
               title="Facebook"
                class="resp-sharing-button__link"
                href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fanastopoulos-orthopedikos.gr"
                target="_blank"
                rel="noopener"
                aria-label
              >
                <div
                  class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- Sharingbutton Twitter -->
              <a
              title="Twitter"
                class="resp-sharing-button__link"
                href="https://twitter.com/intent/tweet/?text=%CE%91%CE%BD%CE%B1%CF%83%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82%20%CE%9F%CF%81%CE%B8%CE%BF%CF%80%CE%B5%CE%B4%CE%B9%CE%BA%CF%8C%CF%82&amp;url=https%3A%2F%2Fanastopoulos-orthopedikos.gr"
                target="_blank"
                rel="noopener"
                aria-label
              >
                <div
                  class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- Sharingbutton E-Mail -->
              <a
              title="E-mail"
                class="resp-sharing-button__link"
                href="mailto:?subject=%CE%91%CE%BD%CE%B1%CF%83%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82%20%CE%9F%CF%81%CE%B8%CE%BF%CF%80%CE%B5%CE%B4%CE%B9%CE%BA%CF%8C%CF%82&amp;body=https%3A%2F%2Fanastopoulos-orthopedikos.gr"
                target="_self"
                rel="noopener"
                aria-label
              >
                <div
                  class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z"
                      ></path>
                      <path
                        d="M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- Sharingbutton LinkedIn -->
              <a
              title="LinkedIn"
                class="resp-sharing-button__link"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fanastopoulo%CF%82-orthopedikos.gr&amp;title=%CE%91%CE%BD%CE%B1%CF%83%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82%20%CE%9F%CF%81%CE%B8%CE%BF%CF%80%CE%B5%CE%B4%CE%B9%CE%BA%CF%8C%CF%82&amp;summary=%CE%91%CE%BD%CE%B1%CF%83%CF%84%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82%20%CE%9F%CF%81%CE%B8%CE%BF%CF%80%CE%B5%CE%B4%CE%B9%CE%BA%CF%8C%CF%82&amp;source=https%3A%2F%2Fanastopoulos-orthopedikos.gr"
                target="_blank"
                rel="noopener"
                aria-label
              >
                <div
                  class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                  >
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      enable-background="new 0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- <a
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
              </a>-->
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
      padding: 15px 15px;
}
.flink:hover {
  color: #197070;
  padding: 15px 15px;
}
li {
  height:40px;
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
  padding: 2.8rem 15px 1rem 15px;
}

.sharecont span {
  padding: 0px 10px 0 0;
}
.sharecont > a > img {
  background-color: #4a9898;
}
.sharecont > a > img:hover {
  background-color: #dbac4d;
}

.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.1em;
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.35em 0.35em;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.resp-sharing-button__icon svg {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.2em;
  vertical-align: top;
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle;
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none;
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9;
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
}

.resp-sharing-button--linkedin:hover {
  background-color: #046293;
}

.resp-sharing-button--email {
  background-color: #777;
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e;
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

.resp-sharing-button--email {
  background-color: #777777;
  border-color: #777777;
}

.resp-sharing-button--email:hover,
.resp-sharing-button--email:active {
  background-color: #5e5e5e;
  border-color: #5e5e5e;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.resp-sharing-button--linkedin:hover,
.resp-sharing-button--linkedin:active {
  background-color: #046293;
  border-color: #046293;
}
</style>


