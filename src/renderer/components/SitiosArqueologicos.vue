<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="searchAndHighlight(searchText, content)"></div>
            <div v-html="searchAndHighlight(searchText, bayamo_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/bayamo.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, bayamo_2)"></div>

            <div v-html="searchAndHighlight(searchText, bartolome_maso_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/bmaso.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, bartolome_maso_2)"></div>

            <div v-html="searchAndHighlight(searchText, buey_arriba_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/barriba.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, buey_arriba_2)"></div>

            <div v-html="searchAndHighlight(searchText, campechuela_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/campechuela.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, campechuela_2)"></div>

            <div v-html="searchAndHighlight(searchText, cauto_cristo_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/cauto_cristo.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, cauto_cristo_2)"></div>

            <div v-html="searchAndHighlight(searchText, guisa_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/guisa.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, guisa_2)"></div>

            <div v-html="searchAndHighlight(searchText, jiguani_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/jiguani.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, jiguani_2)"></div>

            <div v-html="searchAndHighlight(searchText, manzanillo_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/manzanillo.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, manzanillo_2)"></div>

            <div v-html="searchAndHighlight(searchText, media_luna_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/media_luna.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, media_luna_2)"></div>

            <div v-html="searchAndHighlight(searchText, niquero_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/niquero.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, niquero_2)"></div>

            <div v-html="searchAndHighlight(searchText, rio_cauto_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/rio_cauto.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, rio_cauto_2)"></div>

            <div v-html="searchAndHighlight(searchText, pilon_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/pilon.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, pilon_2)"></div>

            <div v-html="searchAndHighlight(searchText, yara_1)"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/yara.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, yara_2)"></div>
        </div>
    </vue-scrollbar>
</template>

<script>
    export default {
    props: ['searchText'],
        data(){
            return{
                content: `<h2>Sitios por municipios</h2>
                            <p>Es importante destacar que no todo el territorio de la provincia está explorado desde el punto de vista arqueológico, por lo que un número indeterminado de sitios no se han reportado para la ciencia. A continuación, aparece el listado de sitios y su ubicación por municipios, lo que permitirá conocerlos y a su vez contribuir a su protección, pues son áreas que pueden alterarse con facilidad y perder su valor científico, debido a labores para el cultivo de la tierra, excavaciones para diferentes construcciones y también por la acción de la naturaleza, como la erosión y las inundaciones. </p>
                            <p>Como se podrá apreciar en el texto y las imágenes, existe información abundante sobre algunos municipios y sitios arqueológicos en particular; sin embargo, en algunos casos el conocimiento es insuficiente. Esto se debe al hecho de que no todos los municipios y sitios han sido investigados al mismo nivel, por ser esta una labor paciente y costosa y el país no poseer los recursos necesarios para llevarla a cabo. </p>`,
                bayamo_1: `<h2>Bayamo</h2>`, 
                bayamo_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Bayamo</p>`,
                bartolome_maso_1: `<h2>Bartolomé Masó</h2>`,
                bartolome_maso_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Bartolomé Masó</p>`,
                buey_arriba_1: `<h2>Buey Arriba</h2>`,
                buey_arriba_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Buey Arriba</p>`,
                campechuela_1: `<h2>Campechuela</h2>`,
                campechuela_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Campechuela</p>`,
                cauto_cristo_1: `<h2>Cauto Cristo</h2>`,
                cauto_cristo_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Cauto Cristo</p>`,
                guisa_1: `<h2>Guisa</h2>`,
                guisa_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Guisa</p>`,
                jiguani_1: `<h2>Jiguaní</h2>`,
                jiguani_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Jiguaní</p>`,
                manzanillo_1: `<h2>Manzanillo</h2>`,
                manzanillo_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Manzanillo </p>`,
                media_luna_1: `<h2>Media Luna</h2>`,
                media_luna_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Media Luna</p>`,
                niquero_1: `<h2>Niquero</h2>`,
                niquero_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Niquero</p>`,
                rio_cauto_1: `<h2>Municipio de Río Cauto</h2>`,
                rio_cauto_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Río Cauto</p>`,
                pilon_1: `<h2>Pilón</h2>`,
                pilon_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Pilón</p>`,
                yara_1: `<h2>Yara</h2>`,
                yara_2: `<p class="cp9g">Ubicación de los sitios arqueológicos reportados en el municipio Yara</p>`,
            }
        }
    }
</script>

<style scoped>

</style>