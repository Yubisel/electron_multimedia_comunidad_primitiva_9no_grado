<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="searchAndHighlight(searchText, content)"></div>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: ['searchText'],
    data() {
        return {
        content: `<h2>A los estudiantes</h2>
<p>El estudio de la Comunidad Primitiva es difícil, pues la información histórica es insuficiente y en la mayoría de los casos no existe, debido al nivel de desarrollo de estos hombres, que no incluía la escritura; es la Arqueología la encargada de estudiarla a través de sus métodos. </p>
<p>La arqueología estudia entonces los sitios arqueológicos a partir de los elementos materiales que fueron utilizados por los primeros pobladores de Cuba, que han resistido el paso del tiempo. </p>
<p>Un resumen de las ideas del científico Dacal Moure (1986), permite exponer que de esta forma, lo que empezó siendo “la ciencia de lo antiguo”, se convirtió en “la ciencia que, como la historia, trata del desarrollo de la sociedad humana como proceso único, regido por determinadas leyes”, pero utilizando, como elemento central las evidencias materiales que han quedado cubiertas por la tierra, por las aguas, en medio de las más tupidas selvas, o en las oscuras cuevas. Extraer de los más diversos contextos las huellas del devenir humano: eso es la arqueología.  </p>
<p>Esta multimedia soporta el aprendizaje de los conocimientos esenciales de la Comunidad Primitiva, en apoyo al estudio y la enseñanza de la Historia de Cuba. </p>`
        };
    }
}
</script>

<style scope>

</style>