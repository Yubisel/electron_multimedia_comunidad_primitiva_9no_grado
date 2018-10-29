<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page home">

            <div class="img-logo">
                <img class="img" src="~@/assets/images/pages/home/casa_nac_cub.png">
                <img class="img" src="~@/assets/images/pages/home/cntr_prov_patr_cult.png">
            </div>

            <div v-html="searchAndHighlight(searchText, content)" style="clear: both;"></div>
            <div class="ref98">
                <span class="upperline"></span>
                <span class="up98">1</span>  Dacal Moure, R., Rivero de la Calle, M. (1986). Arqueología Aborigen de Cuba. La Habana,  Cuba: Gente Nueva.
            </div>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: ['searchText'],
    data() {
        return {
        content: `<h2>A los estudiantes</h2>
<p>El estudio de la Comunidad Primitiva es difícil, pues la información histórica es insuficiente y en la mayoría de los casos no existe, debido al nivel de desarrollo de estos hombres, que no incluía la escritura; es la arqueología la encargada de estudiarla a través de sus métodos. </p>
<p>La arqueología estudia entonces los sitios arqueológicos a partir de los elementos materiales que fueron utilizados por los primeros pobladores de Cuba, que han resistido el paso del tiempo. </p>
<p>Un resumen de las ideas de los científicos Ramón Dacal Moure y Manuel Rivero de la Calle (1986), permite exponer que de esta forma, lo que empezó siendo “la ciencia de lo antiguo”, se convirtió en “la ciencia que, como la historia, trata del desarrollo de la sociedad humana como proceso único, regido por determinadas leyes”, pero utilizando, como elemento central las evidencias materiales que han quedado cubiertas por la tierra, por las aguas, en medio de las más tupidas selvas, o en las oscuras cuevas. Extraer de los más diversos contextos las huellas del devenir humano: eso es la arqueología. <span class="up98">1</span> </p>
<p>Esta multimedia soporta el aprendizaje de los conocimientos esenciales de la Comunidad Primitiva, en apoyo al estudio y la enseñanza de la Historia de Cuba. </p>`
        };
    }
}
</script>

<style>
    .inner-page.home h2 {
        margin-top: 20px;
    }
    span.up98{
        font-size: 8px;
        vertical-align: super;
    }
    div.ref98{
        margin-top: 40px;
        font-size: 11px;
        position: relative;
    }
    div.ref98 span.upperline{
        position: absolute;
        width: 150px;
        height: 1px;
        background: #000000;
        top: -4px;
        left: 0;
    }
    .img-logo{
        margin-top: 10px;
        position: relative;
    }
    .img-logo img{
        height: 100px;
        width: auto;
        border: none;
    }
    .img-logo img:first-child{
        left: 0;
        top: 0;
    }
    .img-logo img:last-child{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>