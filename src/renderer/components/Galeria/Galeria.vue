<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>Galería</h2>
            <br>
            <h3>
                Imágenes Martínez
                <router-link :to="{ name: 'galeria-martinez' }" class="more">Ver más</router-link>
            </h3>
            <v-gallery :images="martinez" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>
                Imágenes Ottón
                <router-link :to="{ name: 'galeria-otton' }" class="more">Ver más</router-link>
                </h3>
            <v-gallery :images="otton" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>
                Ídolos y piezas de Niquero
                <router-link :to="{ name: 'galeria-idolos' }" class="more">Ver más</router-link>
            </h3>
            <v-gallery :images="idolos" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>
                Imágenes de sitios arqueológicos
                <router-link :to="{ name: 'galeria-sitios' }" class="more">Ver más</router-link>
            </h3>
            <v-gallery :images="sitios" :dark="true" :caption="false" ></v-gallery>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: [],
    data(){
            return {
                idolos: [
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_10.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_20.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_30.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_40.jpg'},
                ],
                martinez: [
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_2.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_20.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_30.jpg'},
                    {title:'Imágenes Martínez',url:'static/images/pages/gallery/martinez/martinez_40.jpg'},
                ],
                otton: [
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_20.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_40.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_60.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_80.jpg'},
                ],
                sitios: [
                    {title:'Caneyes de Birama',url:'static/images/pages/gallery/sitios/caneyes_de_birama/caneyes_1.jpg'},
                    {title:'Olla de Guisa',url:'static/images/pages/gallery/sitios/olla_de_guisa/olla_1.jpg'},
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_2.jpg'},
                    {title:'Playa de El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_7.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss">
    .gallery {
        h2{
            margin-bottom: 10px;
            padding-right: 10px;
            a.back{
                text-decoration: none;
                float: right;
                font-size: 12px;
                color: #776868;
                padding: 2px 25px 0 0;
                background: url("../../assets/images/icons/icon_back.png") no-repeat scroll 100% 50%;
                &:hover{
                    color: #e4a600;
                }
            }
        }
        h3{
            margin-bottom: 10px;
            padding-right: 10px;
            a.more{
                text-decoration: none;
                float: right;
                font-size: 12px;
                color: #776868;
                padding: 2px 25px 0 0;
                background: url("../../assets/images/icons/icon_more.png") no-repeat scroll 100% 50%;
                &:hover{
                    color: #e4a600;
                }
            }
        }
    }
</style>