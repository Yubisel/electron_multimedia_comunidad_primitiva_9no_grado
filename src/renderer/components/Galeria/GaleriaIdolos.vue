<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>
                Ídolos y piezas de Niquero
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
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_3.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_4.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_5.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_7.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_9.jpg'},
                    




                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_15.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_17.jpg'},
                    







                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_26.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_27.jpg'},
                
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_29.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_42.jpg'},
                    
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_50.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_52.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_55.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_59.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_62.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_63.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_64.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_66.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_67.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_68.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_69.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_70.jpg'},
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_71.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_73.jpg'},
                    
                    {title:'Ídolos y piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_76.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss">

</style>