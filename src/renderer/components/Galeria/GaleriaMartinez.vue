<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>
                Imágenes Martínez
                <router-link :to="{ name: 'galeria' }" class="back">Regresar</router-link>
            </h2>
            <v-gallery :images="list" :dark="true" :caption="false" ></v-gallery>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: [],
    data(){
            return {
                list: [
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_2.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_3.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_4.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_5.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_6.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_7.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_8.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_9.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_10.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_11.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_12.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_13.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_14.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_15.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_16.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_17.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_18.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_19.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_20.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_21.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_22.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_23.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_24.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_25.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_26.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_27.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_28.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_29.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_30.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_31.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_32.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_33.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_34.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_35.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_36.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_37.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_38.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_39.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_40.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_41.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss">

</style>