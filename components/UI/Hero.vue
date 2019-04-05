<template>
    <section class="myhero">
        
                <img :src="imageSrc" :alt="imageDesc">
                 
    </section>
</template>

<script>
export default {
    name:"Hero",
    props:['imageSrc','imageDesc']
}
</script>

<style>

.myhero{
    box-shadow: 1px 1px 05px grey;
    z-index: 1000;
    position: relative;
    height: 40vh;
    object-fit:cover;
    overflow: hidden;

}
.myhero img{
     object-fit:cover;
     min-height: 100%;
}
</style>


