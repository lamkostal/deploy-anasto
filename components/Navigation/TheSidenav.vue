<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav" @click="$emit('close')">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/">Αρχική</nuxt-link>
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
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.514);
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 200px;
  background-color: #197070;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px 0;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
  width: 100%;
  padding: 0 25px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: #ffedc9;
}
</style>
