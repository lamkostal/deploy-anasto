<template>
    <section class="top-info">
        <div class="top-info-wrap container-fluid ">
                    
                    <span class="topInfo-items is-size-7 is-size-8-mobile" >
                    <a href="mailto:&#032;&#103;&#106;&#097;&#110;&#097;&#115;&#116;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" id="top-info-email" class="icon-links"><i class="fas fa-envelope is-size-6"></i></a>
                        gjanasto@gmail[τελεία]com
                    </span>
                    <span class="topInfo-items is-size-7 is-size-8-mobile" >
                       <a href="tel:2109955925" id="top-info-tel" class="icon-links"><i class="fas fa-phone is-size-6"></i></a>
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
        padding: 5px 5px;
        color:#fff;
    }
    .icon-links{
        color: #fff;
        padding:0px 5px;
    }
    .icon-links:hover{
        color:#197070;
    }
    
</style>


