<template>
  <div class="homepage">
    <Hero :imageSrc="imageSrc" :imageDesc="imageDesc"/>
    <section class="container section has-background-white">
      <div class="columns is-centered is-tablet">
        <div class="column is-three-fifths content has-background-white" itemscope itemtype="http://schema.org/Person">
          <h1 class="title is-3" itemprop="name">Δρ. Γεώργιος Αναστόπουλος</h1>
          <h2 class="subtitle is-5 has-text-grey has-text-weight-light" itemprop="jobTitle"> Xειρουργός - Ορθοπεδικός </h2>
          <p>Ο Δρ. Γεώργιος Ι. Αναστόπουλος, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”, είναι διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών και Επισκέπτης καθηγητής του Πανεπιστημίου του Leeds. Εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης (MIS), στην επανορθωτική χειρουργική ισχίου (ALMIS) και γόνατος.</p>
          <p>Διατηρεί ορθοπεδικό ιατρείο στην Ηλιούπολη στην οδό Κανάρη 17.</p>
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
      imageDesc: "Σχέδιο χειρουργημένου οστού"
    };
  },
  head:{
    title: "Δρ. Γεώργιος Αναστόπουλος | Ορθοπεδικός - Χειρουργός",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών."},
      {property:"og:site_name",content:"Δρ. Γεώργιος Αναστόπουλος"},
      {property:"og:type",content:"website"},
      {property:"og:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {property:"og:locale", content:"el_GR"},
      {property:"og:title",content:"Δρ. Γεώργιος Αναστόπουλος | Ορθοπεδικός - Χειρουργός"},
      {property:"og:url",content:"https://anastopoulos-orthopedikos.gr"},
      {property:"og:description",content:"Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών." },
      {name:"twitter:card",content:"summary"},
      {name:"twitter:title",content:"Δρ. Γεώργιος Αναστόπουλος | Ορθοπεδικός - Χειρουργός"},
      {name:"twitter:site",content:"Δρ. Γεώργιος Αναστόπουλος | Ορθοπεδικός - Χειρουργός"},
      {name:"twitter:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {name:"twitter:url",content:"https://anastopoulos-orthopedikos.gr"},
      {name:"twitter:description",content:"Αναστόπουλος ορθοπεδικός, τ. Διευθυντής ορθοπεδικής κλινικής Γ.Ν.Α. “ΓΕΝΝΗΜΑΤΑΣ”,  διδάκτωρ της Ιατρικής Σχολής Πανεπιστημίου Αθηνών." }
    ],
  }
};
</script>

<style>
.links {
  padding-top: 15px;
}

</style>
