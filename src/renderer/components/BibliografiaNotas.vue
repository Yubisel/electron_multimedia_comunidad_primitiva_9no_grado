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
            content: `<h2>Bibliografía</h2>
                    <p>Albelo, R., Gallo. G., Molina, M., Valdés, M. (1990). Historia de Cuba. Quinto Grado. La Habana, Cuba: Pueblo y Educación.</p>
                    <p>Albelo, R., Gallo. G., Molina, M., Valdés, M. (2014): Historia de Cuba. Noveno  Grado. La Habana, Cuba: Pueblo y Educación.</p>
                    <p>Colectivo de autores. (2003). Catálogo de Sitios Arqueológicos Aborígenes de Granma. Bayamo, Granma, Cuba: Bayamo, Colección Crisol.</p>
                    <p>García, F., Pérez, I., Pino, M. (1989). Mapa XXIV.1.2 Principales Hipótesis sobre las vías de migración de la población aborigen en las etapas de la comunidad primitiva. Nuevo Atlas Nacional de Cuba. Instituto de Geografía de la Academia de Ciencias de Cuba. Madrid.</p>
                    <p>Martínez, José. Fotógrafo e ilustrador. Subfondo del Archivo del Dpto. de Arqueología del Instituto Cubano de Antropología, C. C. S, CITMA.</p>
                    <p>Dacal Moure, R., Rivero de la Calle, M. (1986). Arqueología Aborigen de Cuba. La Habana,  Cuba: Gente Nueva.</p>
                    <p>Tabío, E., Rey, E. (1979). Prehistoria de Cuba. La Habana, Cuba: Ciencias Sociales.</p>
                    <p>Suárez Ottón, A. (2001). El día y la noche del taíno. Las Culturas Aborígenes Antillanas. Instituto Cubano del Libro. La Habana, Cuba: Gente Nueva. </p>


                    <h2>Notas</h2>
                    <p>Mapa No.1 – Confeccionado a partir de: Dacal Moure, R., Rivero de la Calle, M. (1986). Arqueología Aborigen de Cuba. La Habana,  Cuba: Gente Nueva.</p>
                    <p>Mapa No.2 –Confeccionado a partir de: Dacal Moure, R., Rivero de la Calle, M. (1986). Arqueología Aborigen de Cuba. La Habana,  Cuba: Gente Nueva.</p>
                    <p>Mapa No.3-. Confeccionado a partir de información tomada de: García, F., Pérez, I., Pino, M. (1989). Mapa XXIV.1.2 Principales Hipótesis sobre las vías de migración de la población aborigen en las etapas de la comunidad primitiva. Nuevo Atlas Nacional de Cuba. Instituto de Geografía de la Academia de Ciencias de Cuba. Madrid. </p>
                    <p>Los restantes planos de los asentamientos por municipios, fueron confeccionados por el realizador de esta multimedia a partir de la información obtenida de las Cartillas del Censo de Sitios Arqueológicos. </p>`,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>