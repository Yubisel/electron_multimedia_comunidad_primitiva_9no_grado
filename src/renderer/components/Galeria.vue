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
                    {title:'Image2',url:'static/mapa_2.jpg'},
                    {title:'Image2',url:'static/mapa_3.jpg'},
                    {title:'Image1',url:'static/mapa_1.jpg'},
                    {title:'Image2',url:'static/mapa_2.jpg'},
                    {title:'Image2',url:'static/mapa_3.jpg'},
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