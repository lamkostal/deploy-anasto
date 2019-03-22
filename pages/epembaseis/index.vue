<template>
   <div class="epembaseis">
       <Hero :imageSrc="imageSrc" :imageDesc="imageDesc"/>
       <!-- <Hero/> -->
        <section class="container section padding has-background-white">
            <div class="columns is-centered is-tablet">
               
                <div class="column is-half content has-background-white">
                    <hr class="is-marginless has-background-grey-lighter ">
                   
                    <h1 class="title is-3">
                        Επεμβάσεις
                    </h1>
                    <p>
                        O γιατρός είναι εξειδικευμένος σε χειρουργικές τεχνικές ελαχίστης παρέμβασης στην ορθοπεδική και τραυματολογία.
                    </p>
                    <p>
                       Χειρουργική εμπειρία 30 χρόνων σε ορθοπεδικές κλινικές τριτοβάθμιων νοσηλευτικών ιδρυμάτων.
                    </p>
                    <p>Μεταξύ άλλων οι επεμβάσεις που πραγματοποιούνται είναι:</p>
                    <ul class="">
                        <li>Ολική αρθροπλαστική ισχίου</li>
                        <li>Ολική αρθροπλαστική γόνατος</li>
                        <li>Κατάγματα οστών</li>
                        <li>Επιπλοκές καταγμάτων</li>
                    </ul>
                </div>
            </div>
        </section>
   </div>
</template>

<script>
import Hero from '~/components/UI/Hero.vue'
export default {
    components:{
       Hero
    },
    data(){
        return{
            imageSrc:'https://news.laingbuisson.com/wp-content/uploads/sites/3/2018/04/Orthopaedics.jpg',
            imageDesc:'ακτινογραφίες'
        }
    }
    
}
</script>


<style scoped>
 
</style>

