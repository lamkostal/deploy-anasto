<template>
  <div class="contact">
    <!-- <Hero :imageSrc="imageSrc" :imageDesc="imageDesc"/> -->
    <section class="container section has-background-white padding">
      <div class="columns is-tablet">
        <div class="column content has-background-white">
          <hr class="has-background-grey-lighter is-marginless">
          <h1 class="title is-3">Επικοινωνία</h1>
          <br>
          <div class="columns">
            <div class="column is-one-third">
              <h3 class="subtitle is-5 has-text-grey-darker">Επισκέψεις</h3>
              <p>Ο Γιατρός δέχεται επισκέψεις μόνον κατόπιν ραντεβού.</p>
              <p>Παρακαλούμε επικοινωνήστε με το ιατρείο για την καλύτερη εξυπηρέτησή σας.</p>
            </div>
            <div class="column">
              <h3 class="subtitle is-5 has-text-grey-darker">Στοιχεία επικοινωνίας</h3>
              <p>
                <a href="#" class="icon-links">
                  <div class="icontainer">
                    <i class="fas fa-phone is-size-5"></i>
                  </div>
                </a>210 9955925
              </p>
              <p>
                <a href="#" class="icon-links">
                  <div class="icontainer">
                    <i class="fas fa-mobile-alt is-size-4"></i>
                  </div>
                </a>6932 473107
              </p>
              <p>
                <a href="#" class="icon-links">
                  <div class="icontainer">
                    <i class="fas fa-envelope is-size-5"></i>
                  </div>
                </a>gjanasto[παπάκι]gmail[τελεία][κομ]
              </p>
              <p>
                <a href="#" class="icon-links">
                  <div class="icontainer">
                    <i class="fas fa-map-marker-alt is-size-5"></i>
                  </div>
                </a>Κανάρη 17, Ηλιούπολη, 163 45
              </p>
            </div>
          </div> 
        </div>
      </div>
      <br>
      <br>
      <div class="columns is-centered">
        <div class="column is-full">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12587.441328598978!2d23.755960998781674!3d37.933693199808936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd518ac8bb75%3A0x3166e6c34a4cd9c1!2zzpHOvc6xz4PPhM-Mz4DOv8-FzrvOv8-CIM6ZLiDOk861z4nPgc6zzrnOv8-CIC0gzp_Pgc64zr_PgM61zrTOuc66z4zPgiB8IM6nzrXOuc-Bzr_Phc-BzrPOv8-C!5e0!3m2!1sel!2sus!4v1551293387132"
              width="1920"
              height="600"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Hero from "@/components/UI/Hero.vue";
export default {
  components: {
    Hero
  },
  data() {
    return {};
  }
};
</script>



<style scoped>
.icontainer {
  display: inline-block;
  width: 25px;
}
iframe {
  height: 700px;
}
</style>

