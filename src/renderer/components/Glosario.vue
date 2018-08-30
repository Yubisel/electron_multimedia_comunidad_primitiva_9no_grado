<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page glosario">
            <div v-html="searchAndHighlight(searchText, content)"></div>
        </div>
    </vue-scrollbar>
</template>

<script>
export default{
    props: ['searchText'],
    data() {
        return {
            content: `<h2>Glosario</h2>
                    <p><span>Arte rupestre:</span>  Se refierea las pinturas u otras manifestaciones de la actividad de los aborígenes sobre las paredes de las cuevas o de las rocas en general. </p>
                    <p><span>Behíque:</span>  Hechicero, médico y guardián de la memoria oral (historia) de la comunidad. </p>
                    <p><span>Cacique:</span>  En los grupos de agricultores- ceramistas, era la persona encargada de dirigir y organizar las actividades de la comunidad; el desempeño de esta función le reconocía autoridad sobre la misma. </p>
                    <p><span>Cantos rodados:</span>  Se refiere a fragmentos de rocas que los ríos arrastran en sus aguas y que por lo general son de formas redondeadas. </p>
                    <p><span>Ídolo:</span>  Imagen confeccionada por los aborígenes en madera, piedra, concha y otros materiales, que formaban parte de lo que puede considerarse ideas religiosas. </p>
                    <p><span>Piedra en volumen:</span>  Son útiles necesarios para su labor, confeccionados en fragmentos de rocas y cantos rodados. Por ejemplo: morteros, manos de morteros, cucharones, otros. </p>
                    <p><span>Piedra tallada:</span>  Se refiere a herramientas o partes de ellas elaboradas a partir de rocas o minerales duros, que permiten obtener elementos cortantes. </p>
                    <p><span>Raspadores:</span>  Herramientas confeccionadas en conchas o piedras utilizadas para raspar determinadas superficies. </p>
                    <p><span>Sílex:</span>  Está constituido por variedades del mineral llamado cuarzo, que es cristalino y de alta dureza, de diferentes colores; era utilizado por los aborígenes para la talla de herramientas de corte. </p>
                    <p><span>Sitio arqueológico:</span>  Lugar donde la concentración de piezas arqueológicas, restos de dieta y huellas en general de la actividad humana, señalan la existencia de un asentamiento humano aborigen. </p>
                    <p><span>Sumergidor o sumergidor de redes:</span>  Son piedras con pequeñas modificaciones utilizadas como contrapeso para hundir las redes de pescar con facilidad; hacían la función de lo que hoy se denomina como “plomadas”. </p>`,
        }
    }
}
</script>
<style lang="scss">
    .glosario{
        span{
            font-weight: bold;
            font-style: italic;
        }
    }
</style>
