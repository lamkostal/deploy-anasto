<template>
  <div class="homepage">
    <Hero :imageSrc="imageSrc" :imageDesc="imageDesc"/>
    <section class="container section has-background-white">
      <div class="columns is-centered is-tablet">
        <div class="column is-three-fifths content has-background-white">
          <h1 class="title is-3">Γιώργος Αναστόπουλος  </h1>
          <h2 class="subtitle is-5 has-text-grey has-text-weight-light"> Xειρουργός - Ορθοπεδικός </h2>
          <p>Ο Γεώργιος Ι. Αναστόπουλος, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”, είναι διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών και Επισκέπτης καθηγητής του Πανεπιστημίου του Leeds. Εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης (MIS), στην επανορθωτική χειρουργική ισχίου (ALMIS) και γόνατος.</p>
          <p>Διατηρεί ορθοπεδικό ιατρείο στον Ιατρικό Κέντρο Αθηνών, κλινική Ψυχικού και στην Ηλιούπολη.</p>
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
    return {
      imageSrc: "/images/hero-epembaseis-d1.jpg",
      imageDesc: "Εικόνα arxikhs selidas"
    };
  }
};
</script>

<style>
.links {
  padding-top: 15px;
}

</style>
