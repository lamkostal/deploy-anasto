<template>
  <div class="bio">
    <!-- <Hero :imageSrc="imageSrc" :imageDesc="imageDesc"/> -->
    <!-- <Hero/> -->
    <section class="container section has-background-white padding">
      <div class="columns is-centered">
        <div class="column is-three-fifths content">
          <hr class=" is-marginless has-background-grey-lighter ">
          <h1 class="title is-3">ΒΙΟΓΡΑΦΙΚΟ</h1>
          <p>Ο Αναστόπουλος Γεώργιος του Ιωάννη γεννήθηκε στον Πριόλιθο Καλαβρύτων και διαμένει μόνιμα στην Ηλιούπολη. Είναι πτυχιούχος της Ιατρικής Σχολής Πανεπιστημίου Αθηνών. Μετεκπαιδεύτηκε στην Klinik fur Orthopasische Chirourgie Kantosspital St. Gallen – Ελβετία ως υπότροφος της A.O. International. Εργάστηκε αρχικά στο Ασκληπιείο Βούλας και ακολούθως στο Γ.Ν.Α “Γ. ΓΕΝΝΗΜΑΤΑΣ” όπου και διετέλεσε Διευθυντής της Α’ Ορθοπεδικής κλινικής. Είναι διδάκτωρ της Ιατρικής Σχολής του Πανεπιστημίου Αθηνών και Επισκέπτης Καθηγητής της Ιατρικής Σχολής του Πανεπιστημίου του Leeds στην Αγγλία.</p>
          <p>Έχει διατελέσει μέλος πολλών ελληνικών και διεθνών επιστημονικών επιτροπών. Είναι συγγραφέας και εκδότης του βιβλίου: “Ενδομυελική Ήλωση” εκδόσεις Κωσταντάρας 2011 και έχει συγγράψει κεφάλαια σε ορθοπεδικά βιβλία ελληνικά και διεθνή καθώς και πολλές δημοσιεύσεις σε ελληνικά και διεθνή περιοδικά με πάνω από 300 βιβλιογραφικές αναφορές στο επιστημονικό του έργο.</p>
          <p>Το ερευνητικό του έργο εστιάζεται στην εμβιομηχανική των οστών και στην εξέλιξη χειρουργικών τεχνικών στην ορθοπεδική. Δυο ερευνητικές εργασίες έχουν γίνει διδακτορικές διατριβές στα Πανεπιστήμια Πατρών και Ιωαννίνων. Κατέχει δυο διεθνείς πατέντες. Η πρώτη αφορά την επινόηση ίδιας μεθόδου περιφερικής ασφάλισης των ενδομυελικών ήλων χωρίς τη χρήση ακτινοβολίας (Διεθνής πατέντα 2002). Από το 2005 εφαρμόζεται στον ενδομυελικό ήλο S2 Stryker. Η δεύτερη αφορά την επινόηση ενός νέου συστήματος οστεοσύνθεσης ενδαρθρικών και περιαρθρικών καταγμάτων (Διεθνής πατέντα EP2482739B1, Title “Surgical Implant” DB3599 and US Patent App No. 13/499210 Issued as US Patent No. 9,050,114; Title “Surgical Implant”; DB3598 - κατοχύρωση μαζί με τον καθηγητή Παναγιώτη Γιαννούδη στο Πανεπιστήμιο του Leeds).</p>
          <p>O Δρ. Αναστόπουλος εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης τόσο στην θεραπεία των καταγμάτων όσο και στην επανορθωτική χειρουργική. Εφαρμόζει επί πολλά χρόνια την προσπέλαση ALMIS (Röttinger) στην επέμβαση ολικής αρθροπλαστικής του ισχίου. Το χειρουργικό του ενδιαφέρον εστιάζεται επίσης στην θεραπεία της οστεοαρθρίτιδος γόνατος καθώς και σε σοβαρά κατάγματα και τις επιπλοκές τους.</p>
          <p>Έχει χειρουργική εμπειρία 30 ετών σε ορθοπεδικές κλινικές τριτοβάθμιων νοσοκομείων.</p>
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
      imageDesc: "Εικόνα από σκαρίφημα"
    };
  },
  head:{
    title: "Δρ. Γεώργιος Αναστόπουλος | Βιογραφικό",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "O Δρ. Αναστόπουλος ορθοπεδικός, εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης τόσο στην θεραπεία των καταγμάτων όσο και στην επανορθωτική χειρουργική."},
      {property:"og:site_name",content:"Δρ. Γεώργιος Αναστόπουλος"},
      {property:"og:type",content:"website"},
      {property:"og:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {property:"og:locale", content:"el_GR"},
      {property:"og:title",content:"Δρ. Γεώργιος Αναστόπουλος | Βιογραφικό"},
      {property:"og:url",content:"https://anastopoulos-orthopedikos.gr/biografiko"},
      {property:"og:description",content:"O Δρ. Αναστόπουλος ορθοπεδικός, εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης τόσο στην θεραπεία των καταγμάτων όσο και στην επανορθωτική χειρουργική." },
      {name:"twitter:card",content:"summary"},
      {name:"twitter:title",content:"Δρ. Γεώργιος Αναστόπουλος | Βιογραφικό"},
      {name:"twitter:site",content:"Δρ. Γεώργιος Αναστόπουλος | Βιογραφικό"},
      {name:"twitter:image",content:"https://d33wubrfki0l68.cloudfront.net/16cb053d6fce5dcb48c2ce2693ed3c47a43bf65f/267a8/_nuxt/img/bc2cb22.svg"},
      {name:"twitter:url",content:"https://anastopoulos-orthopedikos.gr/biografiko"},
      {name:"twitter:description",content:"O Δρ. Αναστόπουλος ορθοπεδικός, εξειδικεύεται σε τεχνικές ελαχίστης χειρουργικής παρέμβασης τόσο στην θεραπεία των καταγμάτων όσο και στην επανορθωτική χειρουργική." }
    ]

  }
};
</script>


<style scoped>
 
   
</style>

