<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page gallery">
            <h2>
                Imágenes Ottón
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
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_1.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_2.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_3.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_4.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_5.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_6.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_7.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_8.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_9.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_10.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_11.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_12.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_13.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_14.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_15.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_16.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_17.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_18.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_19.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_20.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_21.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_22.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_23.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_24.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_25.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_26.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_27.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_28.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_29.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_30.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_31.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_32.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_33.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_34.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_35.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_36.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_37.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_38.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_39.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_40.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_41.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_42.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_43.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_44.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_45.jpg'},
                    
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_47.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_48.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_49.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_50.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_51.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_52.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_53.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_54.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_55.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_56.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_57.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_58.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_59.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_60.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_61.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_62.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_63.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_64.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_65.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_66.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_67.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_68.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_69.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_70.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_71.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_72.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_73.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_74.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_75.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_76.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_77.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_78.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_79.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_80.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_81.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_82.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_83.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_84.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_85.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_86.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_87.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_88.jpg'},
                    

                    
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_92.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_93.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_94.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_95.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_96.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_97.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_98.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_99.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_100.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_101.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_102.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_103.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_104.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_105.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_106.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_107.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_108.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_109.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_110.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_111.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_112.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_113.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_114.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_115.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_116.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_117.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_118.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_119.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_120.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_121.jpg'},
                    {title:'Imágenes Ottón',url:'static/images/pages/gallery/otton/otton_122.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss">

</style>