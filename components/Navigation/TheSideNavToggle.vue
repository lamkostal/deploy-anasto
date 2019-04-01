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
  padding: 0px 10px 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50px;
  padding: 1px 0;
  margin: auto;
}
</style>
