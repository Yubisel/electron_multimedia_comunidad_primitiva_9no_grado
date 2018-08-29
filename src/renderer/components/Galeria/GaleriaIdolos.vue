<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>
                Idolos y Piezas de Niquero
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
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_1.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_2.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_3.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_4.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_5.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_6.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_7.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_8.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_9.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_10.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_11.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_12.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_13.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_14.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_15.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_16.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_17.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_18.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_19.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_20.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_21.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_22.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_23.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_24.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_25.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_26.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_27.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_28.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_29.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_30.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_31.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_32.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_33.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_34.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_35.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_36.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_37.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_38.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_39.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_40.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_41.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_42.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_43.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_44.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_45.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_46.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_47.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_48.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_49.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_50.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_51.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_52.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_53.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_54.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_55.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_56.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_57.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_58.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_59.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_60.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_61.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_62.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_63.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_64.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_65.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_66.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_67.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_68.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_69.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_70.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_71.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_72.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_73.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_74.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_75.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_76.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_77.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_78.jpg'},
                    {title:'Idolos y Piezas de Niquero',url:'static/images/pages/gallery/idolos/idolos_79.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss">

</style>