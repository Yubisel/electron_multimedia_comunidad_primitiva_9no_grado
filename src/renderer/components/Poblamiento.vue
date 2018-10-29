<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="searchAndHighlight(searchText, content_1)"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_1.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, content_2)"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_2.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, content_3)"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_3.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, content_4)"></div>
        </div>
    </vue-scrollbar>
</template>

<script>

// It's required to set min height of the scrollbar wrapper
//require("./your/custom/style/app.css")

export default {
    props: ['searchText'],
  data() {
    return {
      content_1: `<h2>Poblamiento aborigen de Cuba</h2>
                <p>Se reconoce que, probablemente, el poblamiento de América haya comenzado a ocurrir hace alrededor de 50 mil años; está estudiada la presencia de habitantes en la Florida entre 9 mil y 7 mil años antes del presente. En las costas de América del Sur, se estima su presencia desde 17 mil años. Es de presumir que 10 mil años antes del presente –y hasta la llegada de los españoles a estas tierras-, se estuvieron produciendo movimientos migratorios hacia Las Antillas. </p>
                <p>Estos hombres no poblaron a Cuba de una sola vez, lo hicieron en diversos momentos y desde diferentes áreas de la cuenca del Caribe. En ello debieron influir importantes elementos geográficos tales como los grandes ríos que desembocan en estos mares, la dirección de las corrientes marinas, los vientos, los huracanes y el arco de Las Antillas. </p>
                <p>Entre estos ríos se puede mencionar al Orinoco, cuyo volumen provoca un movimiento de hasta 30 km en el océano, propiciando la navegación hacia las islas de Las Antillas Menores. Las corrientes marinas de superficie, por su parte, desarrollan velocidades superiores a los 30 Km al día y por la dirección de las mismas, se considera la posibilidad de que la navegación era beneficiada desde Suramérica hacia Las Antillas, apoyada por la dirección de los vientos que predominan la mayor parte del año del noreste al suroeste. A esto se añade la dirección de los huracanes y la cadena de islas de diferentes tamaños, que se extiende desde el norte de la actual Venezuela en dirección a Cuba. </p>`,
        content_2: `<p class="cp9g">Corrientes marinas actuales en la región del Caribe durante el verano</p>`,
        content_3: `<p class="cp9g">Corrientes marinas actuales en la región del Caribe durante el invierno</p>
                <h2>Diferentes hipótesis sobre las vías de las migraciones aborígenes hacia Cuba</h2>`,
        content_4: `
<p class="cp9g">Plano con la ubicación de las diferentes hipótesis sobre las vías de las migraciones aborígenes hacia Cuba</p>
<p>Está demostrado que el poblamiento de América ocurrió al menos hace 50 mil o 60 mil años, y existe consenso sobre la presencia humana en los territorios que conforman nuestro país, desde al menos 4 mil años antes de nuestra era (a.n.e.), es decir, hace unos 6 mil años; por esto se afirma que el arribo de los aborígenes ocurrió mucho antes de la llegada de los conquistadores españoles. Para ese entonces el paisaje geográfico era diferente al de nuestros días. </p>
<p>Existían entonces grandes extensiones de bosques, en los que vivían determinadas especies de plantas y animales que el hombre utilizaba como alimentos y para suplir otras necesidades. Este, se valía además del mar y de las costas, como vía de comunicación y como fuente de obtención de valiosos recursos para su subsistencia. </p>
<p>Es importante recordar que los países actuales, sus provincias o estados, y ciudades más importantes no existían en el pasado aborigen, por tanto solo se utilizan aquí como referencia para ubicarnos geográficamente. </p>
<h3>Recolectores-cazadores-pescadores</h3>
<p>Los grupos de recolectores-cazadores-pescadores más antiguos provenían del sur de Norteamérica y avanzaron hacia Cuba a través de las islas Bahamas, asentándose en el norte de la actual provincia de Holguín. Su presencia solo se reporta en esta región. </p>
<p>También los grupos de recolectores-cazadores-pescadores que provenían del norte de Suramérica y de América Central –de una antigüedad estimada alrededor de los 4 mil años-, realizaron su movimiento migratorio a través del arco de Las Antillas, aprovechando la cadena de islas que forman una suerte de corredor natural, el que vincula a Cuba con el continente, aprovechando la influencia de las corrientes marinas superficiales, los vientos y los grandes ríos que desembocan en la región. </p>
<p>Otros siguieron una ruta desde Suramérica y Centroamérica en dirección a la parte sur de Cuba, aprovechando pequeñas islas e islotes diseminados en el mar y que en el pasado debieron ser más grandes, pues el nivel del mar era más bajo. </p>
<p>Estos recolectores-cazadores-pescadores basaban su dieta en el aprovechamiento de los recursos que ofrecían el mar, las costas, las lagunas, los ríos y los bosques. Consumían moluscos marinos tales como bayas, ostiones, cobos, quincontes, siguas, así como cangrejos, peces, jutías, iguanas, majás de Santa María, almiquíes, quelonios, aves, huevos, manatíes y focas tropicales, además de diversas especies vegetales. </p>
<p>Sus herramientas de trabajo las elaboraban a partir de la talla de las piedras,  por lo general el sílex, para con ella obtener cuchillos, raspadores, buriles; con otras técnicas y otros materiales lograban una producción de piedra en volumen para la confección de morteros, percutores, esferas, dagas y hachas. También desarrollaron otras herramientas a partir de las conchas de los moluscos (caracol), sobresaliendo por su número las cucharas y las gubias, y en menor medida los picos de mano y los martillos.  </p>
<p>Estos hombres también trabajaron la madera, de la que fabricaron vasijas y otras piezas; hoy existen muy pocas de estas pues debido a las características climáticas de Cuba no se conservaron. Asimismo, confeccionaron ornamentos para su cuerpo con huesos, conchas, dientes de tiburón y piedras. </p>
<p>Los recolectores-cazadores-pescadores habitaban en cuevas y en áreas despejadas, por lo que se supone que realizaban algún tipo de construcción para protegerse de las inclemencias del tiempo. </p>

<h3>Agricultores-ceramistas</h3>
<p>De acuerdo con los estudios realizados, los agricultores-ceramistas emigraron de la región del norte de Suramérica –de los territorios actuales de Venezuela y Colombia-, siguiendo el arco de Las Antillas, hasta alcanzar el extremo este de Cuba. Las investigaciones sugieren que este proceso comenzó hace unos 1300 años y se detuvo debido a la llegada de los conquistadores españoles. </p>
<p>Estos hombres primitivos se asentaban en sitios diversos, siempre que reunieran las condiciones para desarrollar sus actividades, por lo que radicaron en áreas cercanas a las costas, las lagunas, los ríos y también tierra adentro. Esto les permitía utilizar sus márgenes para el cultivo y usar la vía fluvial y marina para sus comunicaciones. Al igual que los recolectores-cazadores-pescadores, hacían un uso de los recursos que la naturaleza les ofrecía para confeccionar sus herramientas y para alimentarse, pero además conocían la agricultura y cultivaban principalmente la yuca y el maíz, así como el frijol y el ají. </p>
<p>A partir de la yuca obtenían el casabe o pan de yuca, alimento de suma importancia, pues permitía ser almacenado y conservado. Con los frutos que cultivaban y con las carnes que obtenían de la caza y la pesca preparaban el ajiaco, plato típico de estos grupos humanos. </p>
<p>Al igual que los recolectores-cazadores-pescadores, este grupo también  tallaba la piedra para obtener elementos cortantes; trabajaban la piedra en volumen y obtenían artefactos tales como percutores, morteros, hachas petaloides, sumergidores para las redes e ídolos. </p>
<p>La concha fue usada de igual forma que en los grupos que les antecedieron. Mantuvieron además la producción de las gubias y las cucharas, los picos de mano e introdujeron un elemento nuevo, al utilizar las conchas de los bivalvos para raspar la yuca, convirtiéndolas en raspadores. En menor medida, utilizaron el hueso. </p>
<p>Resulta significativa la alta producción y empleo de la cerámica en este período, por la numerosa evidencia existente en los sitios arqueológicos estudiados. Esta cerámica se confeccionaba siguiendo la técnica del acordelado, que consiste en formar cintas de barro que al unirse, dan la forma deseada a la vasija u objeto. Con este material se fabricaban los burenes, elemento clave para la elaboración del casabe. Muchas de estas piezas estaban decoradas de diferentes maneras. </p>
<p>Se ha recopilado información sobre el uso que hacían de la madera, en la construcción de las canoas de diferentes tamaños y de canaletes (remos). También con madera y guano construían sus viviendas en forma de caneyes –circulares y con techos cónicos- y de bohíos –con estructura rectangular-. Los mangos de las hachas y las coas eran de madera, así mismo los guayos (con incrustaciones de piedras), las azagayas (lanza pequeña y arrojadiza), las mazas y los ídolos donde se destaca el conocido como Ídolo del Tabaco, los dujos (pequeños asientos), las maracas, las bandejas, los tambores o mayohuacán. Estos dos últimos elementos eran utilizados en sus areítos. </p>
<p>Según indagaciones históricas se conoce que estas comunidades utilizaron fibras textiles para confeccionar redes de pesca, telas, esteras, el sibucán (utilizado para extraer el zumo a la masa de la yuca rayada), así como en la cestería. </p>
<p>Sus concepciones mágico-religiosas fueron de carácter animista, es decir, creían en la existencia de los espíritus tanto de los hombres como de las cosas, así como en la posibilidad de interactuar con ellos. Estas creencias están presentes en las decoraciones de sus vasijas y de otros objetos, en los petroglifos, en las pictografías, en los dujos y en otras creaciones. </p>
<p>El cacique desempeñaba un papel importante en estas comunidades, pues era la persona encargada de dirigir y organizar las actividades de la colectividad; el ejercicio de esta función le reconocía una autoridad sobre ellos. Por su parte el behíque también cumplía funciones importantes tales como ser el hechicero, el médico y el guardián de la memoria oral de la comunidad (historia). </p>`
    };
  }
};
</script>

<style scoped>

</style>