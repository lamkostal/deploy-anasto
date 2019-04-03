<template>
  <div class="header-container">
    <header class="the-header">
      <div class="container is-desctop nav-chunk-wrapper">
        <div class="logo">
          <nuxt-link to="/">
            <img class="logoimg image" src="@/assets/images/logo.svg">
          </nuxt-link>
        </div>

        <!-- <div class="spacer"></div> -->
        <div class="navigation-items">
          <ul class="nav-list">
            <li class="nav-item">
              <nuxt-link to="/" exact>Αρχική</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/biografiko">Βιογραφικό</nuxt-link>
            </li>
            <!-- <li class="nav-item">
              <nuxt-link to="/epembaseis">Επεμβάσεις</nuxt-link>
            </li> -->
            <li class="nav-item">
              <nuxt-link to="/contact">Επικοινωνία</nuxt-link>
            </li>
          </ul>
        </div>
        <TheSideNavToggle @toggle="$emit('sidenavToggle')"/>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  /* height: 60px; */
}
.nav-chunk-wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.the-header {
  width: 100%;
  position: relative;
  height: 105px;
  background-color: #197070;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 5px 0 0px;
}
.logo {
  position: relative;
  margin: 0 10px;
  font-size: 1.3rem;
  /* height: 200px; */
}
.logoimg {
  height: 70px;
  padding: 5px;
}
@media (max-width: 768px) {
  .logoimg {
    height: 60px;
    padding: 5px 5px 5px 0px;
  }
}

.logo a {
  text-decoration: none;
  color: white;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.nav-item {
  /* margin: 0 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.nav-item a {
  text-decoration: none;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.nav-item a:hover {
  color: #ffedc9;
  padding: 0 10px;
}

.nav-item:hover {
  background: rgba(74, 152, 152, 1);
  background: -moz-linear-gradient(
    top,
    rgba(74, 152, 152, 1) 0%,
    rgba(25, 112, 112, 1) 85%,
    rgba(25, 112, 112, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(74, 152, 152, 1)),
    color-stop(85%, rgba(25, 112, 112, 1)),
    color-stop(100%, rgba(25, 112, 112, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(74, 152, 152, 1) 0%,
    rgba(25, 112, 112, 1) 85%,
    rgba(25, 112, 112, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(74, 152, 152, 1) 0%,
    rgba(25, 112, 112, 1) 77%,
    rgba(25, 112, 112, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(74, 152, 152, 1) 0%,
    rgba(25, 112, 112, 1) 77%,
    rgba(25, 112, 112, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(74, 152, 152, 1) 0%,
    rgba(25, 112, 112, 1) 77%,
    rgba(25, 112, 112, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4a9898', endColorstr='#197070', GradientType=0 );
  opacity: 1;
}
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #ffedc9;
  padding: 0 10px;
}
</style>
