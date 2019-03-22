<template>
    <section class="top-info">
        <div class="top-info-wrap container-fluid ">
                    
                    <span class="topInfo-items is-size-7" >
                    <a href="#" id="top-info-email" class="icon-links"><i class="fas fa-envelope is-size-6"></i></a>
                        gjanasto@gmail.com
                    </span>
                    <span class="topInfo-items is-size-7" >
                       <a href="#" id="top-info-tel" class="icon-links"><i class="fas fa-phone is-size-6"></i></a>
                        210 9955925</span>
        </div>
    </section>
</template>

<script>
export default {
    name:"TopInfo"
}
</script>

<style scoped>
    .top-info{
         background-color: #DBAC4D
         
    }
    .top-info-wrap{
        height:auto;
        display: flex;
        justify-content: flex-end;
        padding:0 10px;
    }
    .topInfo-items{
        padding: 5px 10px;
        color:#fff;
    }
    .icon-links{
        color: #fff;
        padding:0px 5px;
    }
    
</style>


