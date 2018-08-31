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
            content: `<h2>Créditos</h2>
                    <p>Esta multimedia es el resultado del trabajo conjunto de la Casa de la Nacionalidad Cubana, el Centro Provincial de Patrimonio Cultural de Granma y su red de instituciones. </p>
                    <ul>
                        <li><span>Realización:</span> MSc.José Manuel Yero Masdeu</li>
                        <li><span>Edición:</span> Lic. AndriaSamz Aliaga</li>
                        <li><span>Diseño:</span> DI. Mario Alejandro Rodríguez Blanco</li>
                        <li><span>Programación:</span> Ing. Raúl Alejandro Rondón Milanés</li>
                        <li><span>Programación:</span> Ing. Yubisel Vega Alvarez</li>
                        <li><span>Redacción y corrección de textos:</span> MSc. Linnet Zurina Rodríguez Blanco</li>
                    </ul>
                    <p>ISBN: Solicitado</p>
                    <h3>Fotos cortesía de:</h3>
                    <p>Mesa Bauzá, Ramón. Pintor. Centro de Desarrollo de las Artes Visuales de Granma. Foto No. 36. </p>
                    <p>Valerino Cámbar, Lino. Presidente de la Sociedad de Fotógrafos de Bayamo. Fotos No. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24 y 25. </p>
                    <p>Yero Masdeu, José Manuel. Investigador de la Casa de la Nacionalidad  Cubana. Bayamo, Granma. Fotos No. 16, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33, 34 y 35. </p>
                    <p>Autor desconocido. Foto No. 29-A</p>
                    <h2>Agradecimientos:</h2>
                    <p>Lic. Yordan Roberto León Rodríguez, Director Provincial de Cultura. Granma.</p>
                    <p>MSc. Rubier Enrique Corría Iglesias, responsable de la Comisión Provincial de Historia, de la Dirección Provincial de Educación. Granma. </p>
                    <p>MSc. Enrique Sol Aguilar, metodólogo de Historia de la Educación Primaria, en la Dirección Provincial de Educación. Granma. </p>
                    <p>Lic. Orlando Fonseca Báez, metodólogo de Historia de la Educación Secundaria Básica, en la Dirección Provincial de Educación. Granma. </p>`
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
