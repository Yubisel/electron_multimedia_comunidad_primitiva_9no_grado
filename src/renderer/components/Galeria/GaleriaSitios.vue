<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>
                Imágenes de Sitios Arqueológicos
                <router-link :to="{ name: 'galeria' }" class="back">Regresar</router-link>
            </h2>
            <h3>Caneyes de Birama</h3>
            <v-gallery :images="caneyes" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>Olla de Guisa</h3>
            <v-gallery :images="olla" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>Ovejuela</h3>
            <v-gallery :images="ovejuela" :dark="true" :caption="false" ></v-gallery>
            <br>
            <h3>Playa El Mango</h3>
            <v-gallery :images="playa" :dark="true" :caption="false" ></v-gallery>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: [],
    data(){
            return {
                caneyes: [
                    {title:'Caneyes de Birama',url:'static/images/pages/gallery/sitios/caneyes_de_birama/caneyes_1.jpg'},
                    {title:'Caneyes de Birama',url:'static/images/pages/gallery/sitios/caneyes_de_birama/caneyes_2.jpg'},
                ],
                olla: [
                    {title:'Olla de Guisa',url:'static/images/pages/gallery/sitios/olla_de_guisa/olla_1.jpg'},
                    {title:'Olla de Guisa',url:'static/images/pages/gallery/sitios/olla_de_guisa/olla_2.jpg'},
                    {title:'Olla de Guisa',url:'static/images/pages/gallery/sitios/olla_de_guisa/olla_3.jpg'},
                ],
                ovejuela: [
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_1.jpg'},
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_2.jpg'},
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_3.jpg'},
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_4.jpg'},
                    {title:'Ovejuela',url:'static/images/pages/gallery/sitios/ovejuela/ovejuela_5.jpg'},
                ],
                playa: [
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_1.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_2.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_3.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_4.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_5.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_6.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_7.jpg'},
                    {title:'Playa El Mango',url:'static/images/pages/gallery/sitios/playa_de_el_mango/playa_8.jpg'},
                ],
            }
        }
}
</script>

<style lang="scss">

</style>