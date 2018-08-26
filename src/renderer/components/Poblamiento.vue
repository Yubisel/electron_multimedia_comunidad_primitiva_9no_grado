<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="content_1"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_1.jpg">
            </div>
            <div v-html="content_2"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_2.jpg">
            </div>
            <div v-html="content_3"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/poblamiento/mapa_3.jpg">
            </div>
            <div v-html="content_4"></div>
        </div>
    </vue-scrollbar>
</template>

<script>

// It's required to set min height of the scrollbar wrapper
//require("./your/custom/style/app.css")

export default {
  data() {
    return {
      content_1: `<h2>Poblamiento aborigen de Cuba</h2>
                <p>El hombre no pobló a Cuba de una sola oleada, lo hizo en diferentes momentos y desde diferentes áreas de la cuenca del Caribe. Se acepta que este poblamiento ocurrió hace alrededor de 4 mil años; en ello debieron influir elementos geográficos tales como los grandes ríos que desembocan en estos mares, la dirección de las corrientes marinas y los vientos, los huracanes y el arco de Las Antillas. </p>
                <p>Entre estos ríos se puede mencionar al Orinoco, cuyo volumen provoca un movimiento de hasta 30 km en el océano, propiciando la navegación hacia las islas de Las Antillas Menores. Las corrientes marinas de superficie, por su parte, desarrollan velocidades hasta superiores a los 30 Km al día y por la dirección de las mismas, se considera la posibilidad de que la navegación era beneficiada desde Suramérica hacia Las Antillas, apoyada por la dirección de los vientos que predominan la mayor parte del año del noreste al suroeste. A esto se añade la dirección de los huracanes y la cadena de islas de diferentes tamaños, que se extiende desde el norte de la actual Venezuela en dirección a Cuba. </p>`,
        content_2: `<p class="img-desc">Corrientes marinas actuales en la región del Caribe durante el verano</p>`,
        content_3: `<p class="img-desc">Corrientes marinas actuales en la región del Caribe durante el invierno</p>
                <h2>Vías de las migraciones aborígenes en dirección a Cuba</h2>`,
        content_4: `
<p class="img-desc">Plano con las vías de las migraciones aborígenes hacia Cuba</p>
<p>Está demostrado que el poblamiento de América ocurrió hace aproximadamente 50 mil ó 60 mil años, y existe consenso sobre la presencia humana en los territorios que conforman nuestro país, desde hace al menos  4 mil años,  lo que demuestra que el arribo de los aborígenes fue mucho antes de la llegada de los conquistadores españoles.</p>
<p>Para ese entonces el paisaje geográfico era diferente al de nuestros días. Existían grandes extensiones de bosques, en los que vivían determinadas especies de plantas y animales que el hombre utilizaba como alimentos y para suplir otras necesidades. Este, se valía además del mar y de las costas, como vía de comunicación y como fuente de obtención de valiosos recursos para su subsistencia.</p>
<p>Los límites actuales de países, estados, provincias y municipios que se utilizan aquí, no se corresponden con las estructuras territoriales del pasado aborigen, pues no existían en aquella época.</p>

<h2>Recolectores-cazadores-pescadores</h2>
<p>Los grupos de recolectores-cazadores- pescadores que provenían del norte de Suramérica y de América Central, se desplazaron a través del arco de Las Antillas, aprovechando la cadena de islas que vinculan al continente y a Cuba. Otros grupos siguieron una ruta desde Suramérica y Centroamérica en dirección a la parte sur de Cuba, aprovechando pequeñas islas e islotes diseminados en esta área y que en el pasado debieron ser de mayor tamaño, debido a que el nivel del mar era más bajo. El traslado estuvo favorecido por las corrientes marinas superficiales, los vientos y los grandes ríos que desembocan en la región; todo ello influyó en el poblamiento de Cuba hace4 mil años. </p>
<p>Estos recolectores-cazadores-pescadores basaban su dieta en los recursos que ofrecían el mar, las costas, las lagunas, los ríos y los bosques. Consumían  moluscos terrestres y marinos; entre estos últimos se encontraban bayas, ostiones, cobos, quincontes y siguas. Este grupo se alimentaba además de cangrejos, peces, jutías, iguanas, majás de Santa María, almiquíes, quelonios, aves, huevos, manatíes y focas tropicales, así como de diversas especies vegetales. </p>
<p>Sus herramientas de trabajo las elaboraban a partir de la talla de las piedras,  por lo general el sílex, para con ella obtener cuchillos, raspadores, buriles; con otras técnicas y otros materiales lograban una producción de piedra en volumen para la confección de morteros, percutores, esferas, dagas y hachas. También desarrollaron otras herramientas a partir de las conchas de los moluscos (caracol), sobresaliendo por su número las cucharas y las gubias, y en menor medida los picos de mano y los martillos.  </p>
<p>Estos indígenas también trabajaron la madera, de la que fabricaron vasijas y otras piezas; hoy existen muy pocas de estas pues debido a las características climáticas de Cuba no fueron conservadas. Asimismo, confeccionaron ornamentos para su cuerpo con huesos, conchas, dientes de tiburón y piedras. </p>
<p>Los recolectores-cazadores-pescadores habitaban en cuevas y en áreas despejadas, por lo que se supone que realizaban algún tipo de construcción para protegerse de las inclemencias del tiempo. </p>

<h2>Agricultores-ceramistas</h2>
<p>De acuerdo con los estudios realizados, los agricultores-ceramistas emigraron de la región del norte de Suramérica –de los territorios actuales de Venezuela y Colombia-, siguiendo el arco de Las Antillas, hasta alcanzar el extremo este de Cuba. Las investigaciones sugieren que este proceso comenzó hace unos       1 200 años y se detuvo debido a la llegada de los conquistadores españoles. </p>
<p>Estos hombres primitivos se asentaban en sitios diversos, siempre que reunieran las condiciones para desarrollar sus actividades, por lo que radicaron en áreas cercanas a las costas, las lagunas, los ríos y también tierra adentro. Esto les permitía utilizar sus márgenes para el cultivo y usar la vía fluvial y marina para sus comunicaciones. Al igual que los recolectores-cazadores-pescadores, hacían un uso de los recursos que la naturaleza les ofrecía para confeccionar sus herramientas y para alimentarse, pero además conocían la agricultura, cultivaban principalmente la yuca y el maíz, además del boniato, el frijol y el ají. </p>
<p>A partir de la yuca obtenían el casabe o pan de yuca, alimento de suma importancia, pues permitía ser almacenado y conservado. Con los frutos que cultivaban y con las carnes que obtenían de la caza y la pesca preparaban el ajiaco, plato típico de estos grupos humanos. </p>
<p>Al igual que los recolectores-cazadores-pescadores, este grupo también  tallaba la piedra para obtener elementos cortantes; trabajaban la piedra en volumen y obtenían artefactos tales como percutores, morteros, hachas petaloides, sumergidores para las redes, e ídolos. </p>
<p>El uso de la concha se mantuvo igual que en los grupos que le antecedieron. Mantuvieron además la producción de las gubias y las cucharas, los picos de mano e introdujeron un elemento nuevo, al utilizar las conchas de los bivalvos para raspar la yuca, convirtiéndolas en raspadores. En menor medida, utilizaron el hueso. </p>
<p>Resulta significativa la alta producción y empleo de la cerámica en este período, por la numerosa evidencia existente en los sitios arqueológicos estudiados. Esta cerámica se confeccionaba siguiendo la técnica del acordelado, que consiste en formar cintas de barro que al unirse, dan la forma deseada a la vasija u objeto. Con este material se fabricaban los burenes, elemento clave para la elaboración del casabe. Muchas de estas piezas estaban decoradas de diferentes maneras. </p>
<p>También se ha recopilado información sobre el uso de la madera, en la construcción de las canoas de diferentes tamaños y de los remos. Construían sus viviendas con varas, yaguas, ramas y guano; estas en forma de caneyes con una forma circular y el techo cónico y, en forma de bohíos rectangulares. Con madera también elaboraban los mangos de las hachas y las coas, los guayos (con incrustaciones de piedras), azagayas (lanza pequeña y arrojadiza), mazas e ídolos tallados, los dujos (pequeños asientos)y bandejas, así como las maracas y el tambor o mayohuacán. Estos dos últimos elementos eran utilizados en sus areítos. </p>
<p>Según indagaciones históricas se conoce que estas comunidades utilizaron fibras textiles para confeccionar redes de pesca, telas, esteras, el cibucán (utilizado para extraer el zumo a la masa de la yuca rayada), así como en la cestería. </p>
<p>El cacique desempeñaba un papel importante en estas comunidades, pues era la persona encargada de dirigir y organizar las actividades de la colectividad; el desempeño de esta función le reconocía una autoridad sobre ellos. Por su parte el behíque también cumplía funciones importantes tales como ser el hechicero, el médico y el guardián de la memoria oral de la comunidad (historia). </p>
<p>El estudio de la Comunidad Primitiva es difícil pues la información histórica es insuficiente y en la mayoría de los casos no existe, pues el nivel de desarrollo de estos hombres no incluía la escritura. Por tanto es la Arqueología y sus métodos, la encargada de estudiarla. </p>
`
    };
  }
};
</script>

<style scoped>

</style>