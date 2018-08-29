<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <h2>Galería</h2>
            <v-gallery :images="list" class="image-box">
                <a href="javascript:void(0);"
                :data-image="img.url"
                :title="img.title"
                v-for="(img, index) in list" 
                :key="index">
                    <div class="bgbox">
                        <img :src="img.url">
                    </div>
                    <div class="img-title" v-html="img.title"></div>
                </a>
            </v-gallery>
            <v-gallery :images="list2" :dark="true" :caption="true" ></v-gallery>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: [],
    data(){
            return {
                list: [
                    {title:'Image1',url:'static/mapa_1.jpg'},
                    {title:'Image2',url:'static/mapa_2.jpg'},
                    {title:'Image2',url:'static/mapa_3.jpg'},
                    {title:'Image1',url:'static/mapa_1.jpg'},
                ],
                list2: [
                    {title:'Image1',url:'static/mapa_1.jpg'},
                    {title:'Image2',url:'static/mapa_2.jpg'},
                    {title:'Image2',url:'static/mapa_3.jpg'},
                    {title:'Image1',url:'static/foto_1.jpg'},
                    {title:'Image1',url:'static/foto_2.jpg'},
                    {title:'Image1',url:'static/foto_3.jpg'},
                    {title:'Image1',url:'static/foto_4.jpg'},
                    {title:'Image1',url:'static/foto_5.jpg'},
                    {title:'Image1',url:'static/foto_6.jpg'},
                    {title:'Image1',url:'static/foto_7.jpg'},
                    {title:'Image1',url:'static/foto_8.jpg'},
                    {title:'Image1',url:'static/foto_9.jpg'},
                    {title:'Image1',url:'static/foto_10.jpg'},
                    {title:'Image1',url:'static/foto_11.jpg'},
                    {title:'Image1',url:'static/foto_12.jpg'},
                    {title:'Image1',url:'static/foto_13.jpg'},
                    {title:'Image1',url:'static/foto_14.jpg'},
                    {title:'Image1',url:'static/foto_15.jpg'},
                    {title:'Image1',url:'static/foto_16.jpg'},
                    {title:'Image1',url:'static/foto_17.jpg'},
                    {title:'Image1',url:'static/foto_18.jpg'},
                    {title:'Image1',url:'static/foto_19.jpg'},
                    {title:'Image1',url:'static/foto_20.jpg'},
                    {title:'Image1',url:'static/foto_21.jpg'},
                    {title:'Image1',url:'static/foto_22.jpg'},
                    {title:'Image1',url:'static/foto_23.jpg'},
                    {title:'Image1',url:'static/foto_24.jpg'},
                    {title:'Image1',url:'static/foto_25.jpg'},
                    {title:'Image1',url:'static/foto_26.jpg'},
                    {title:'Image1',url:'static/foto_27.jpg'},
                    {title:'Image1',url:'static/foto_28.jpg'},
                    {title:'Image1',url:'static/foto_29.jpg'},
                    {title:'Image1',url:'static/foto_30.jpg'},
                    {title:'Image1',url:'static/foto_31.jpg'},
                    {title:'Image1',url:'static/foto_32.jpg'},
                    {title:'Image1',url:'static/foto_33.jpg'},
                    {title:'Image1',url:'static/foto_34.jpg'},
                    {title:'Image1',url:'static/foto_35.jpg'},
                    {title:'Image1',url:'static/foto_36.jpg'},
                    {title:'Image1',url:'static/foto_37.jpg'},
                ]
            }
        }
}
</script>

<style lang="scss" scope>
.image-box{
        a {
            clear: both;
            display: inline-block;
            margin: 0 10px 10px 0;
            position: relative;
            text-align: center;
            .bgbox {
                background-color: #232323;
                height: 150px;
                display: table-cell;
                vertical-align:middle;
                padding: 4px;
                border-radius: 2px;
                img{ width: 200px;display: block;}
            }
            .img-title {
                bottom: 5px;
                display: block;
                text-align: center;
                color: #999999;
                padding-top: 5px;
            }
            &:hover {
                .img-title { color: #232323; }
            }
        }
    }
</style>