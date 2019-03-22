<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 40px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 80%;
  height: 1px;
  background-color: white;
  border-radius: 5px
}
</style>
