<template>
  <section class="top-info">
    <div class="top-info-wrap container-fluid">
      <span class="topInfo-items is-size-7 is-size-8-mobile">
        <a
          href="&#109;ailto&#58;%6&#55;&#106;an%&#54;1st%6&#70;&#64;g&#37;&#54;D%61%69l&#46;&#37;63o&#109;"
          id="top-info-email"
          class="icon-links"
          title="email"
        >
          <i class="fas fa-envelope is-size-6"></i>
        </a>
        gjanasto@gmail[τελεία]com
      </span>
      <span class="topInfo-items is-size-7 is-size-8-mobile">
        <a href="tel:2109955925" id="top-info-tel" class="icon-links" title="τηλεφωνο:2109955925">
          <i class="fas fa-phone is-size-6"></i>
        </a>
        210 9955925
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopInfo"
};
</script>

<style scoped>
.top-info {
  background-color: #dbac4d;
}
.top-info-wrap {
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
}
.topInfo-items {
  padding: 5px 5px;
  color: #fff;
}
.icon-links {
  color: #fff;
  padding: 0px 5px;
}
.icon-links:hover {
  color: #197070;
}
</style>


