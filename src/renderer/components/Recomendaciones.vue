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
            content: `<h2>Recomendaciones para la protección de los sitios arqueológicos</h2>
                    <p>Los sitios arqueológicos forman parte del patrimonio cultural de la nación. Por sus características son muy vulnerables ante la acción de la actividad humana, de la naturaleza y de la combinación de ambos elementos. Para su investigación efectiva, no deben estar alterados o en lo posible, escasamente alterados, y deben mantener la secuencia de deposición de los materiales; de ahí la importancia de su protección. </p>
                    <p>La investigación arqueológica es un trabajo especializado y sus resultados dependen en gran medida del estado de conservación del residuario. En caso de que usted tenga información de la existencia de un sitio arqueológico, lo correcto es no emprender acciones sobre este con el objetivo de obtener piezas o información. Deberá comunicarse así con los especialistas del Centro Provincial de Patrimonio Cultural de Granma y esto es posible a través de las siguientes instituciones en cada municipio: </p>
                    <h3>Museo Municipal de Bartolomé Masó</h3>
                    <p>Dirección: Avenida Bartolomé Masó S/N.
                    Teléfono 23565192</p>
                    <h3>Museo Provincial “Manuel Muñoz Cedeño” (Bayamo) </h3>
                    <p>Dirección: Calle Maceo # 55 e/José Joaquín Palma y Donato Mármol. 
                    Teléfono: 23424125 y 23423665. 
                    Correo electrónico: mpgr@crisol.cult.cu</p>
                    <h3>Gabinete de Arqueología (Bayamo) </h3>
                    <p>Dirección: Calle General García # 252 e/ Masó y Manuel de Socorro. 
                    Teléfono: 23421591
                    Correo electrónico:arqueología@crisol.cult.cu</p>
                    <h3>Museo Municipal de Buey Arriba</h3>
                    <p>Dirección: Calle Coronel Liens # 222 e/ Argel Carvajal y Antonio Maceo.
                    Teléfono: 23343516 </p>
                    <h3>Museo Municipal de Campechuela</h3>
                    <p>Dirección: Calle Libertad # 14 e/ Máximo Gómez y Calixto García 
                    Teléfono: 23587324 </p>
                    <h3>Museo Municipal de Cauto Cristo “Ángel Fernández Parra” </h3>
                    <p>Dirección: Calle Camilo Cienfuegos S/N 
                    Teléfono: 23327552</p>
                    <h3>Museo Municipal de Guisa</h3>
                    <p>Dirección: Calle Martí #19 e/ General García y Maceo 
                    Teléfono: 23391608 </p>
                    <h3>Museo Municipal de Jiguaní</h3>
                    <p>Dirección: Calle General Reyes # 35 e/ General García y Céspedes 
                    Teléfono: 23366668. </p>
                    <h3>Museo Municipal de Media Luna “Dr. Manuel Sánchez Silveira” </h3>
                    <p>Dirección: Calle Anselmo Vega # 16 Reparto El Carmen
                    Teléfono:23 593341 </p>
                    <h3>Museo Municipal de Manzanillo</h3>
                    <p>Dirección: Calle Martí # 226 e/ Masó y Maceo 
                    Teléfono: 23572053 </p>
                    <h3>Museo Municipal de Niquero</h3>
                    <p>Dirección: Céspedes # 76 e/Agramonte y Plácido 
                    Teléfono: 23592108 </p>
                    <h3>Museo Municipal de Pilón</h3>
                    <p>Dirección: Calle Conrado Benítez # 20 e/ Tony Alomá y Antonio Guiteras
                    Teléfono: 23594107 </p>
                    <h3>Museo Municipal de Río Cauto“José Nemesio Figueredo Barrero” </h3>
                    <p>Dirección: Calle Camilo Cienfuegos # 62 Reparto Centro 
                    Teléfono: 23825429 </p>
                    <h3>Museo Municipal de Yara</h3>
                    <p>Dirección: Calle Grito de Yara # 107 e/ Céspedes y Avenida José Martí
                    Teléfono: 23588113 </p>`
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
