<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <ul class="content-switcher">
                <li @click="c_menu=0">
                    <a href="#" :class="{'is-active' : c_menu==0 }">Recolectores-Cazadores-Pescadores</a>
                </li><li @click="c_menu=1">
                    <a href="#" :class="{'is-active' : c_menu==1 }">Agricultores-Ceramistas</a>
                </li>
            </ul>
            <div :class="{'hidden' : c_menu!=0 }">
                <div v-html="rcp_1"></div>
                <div class="img-container">
                    <img class="img" src="~@/assets/images/pages/comunidades/mapa_5.jpg">
                </div>
                <div v-html="rcp_2"></div>

                <div class="img-container">
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_1.jpg">
                    <p class="img-desc">Pieza confeccionada en piedra, de probable uso ritual. El Carnero, municipio de Yara</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_2.jpg">
                    <p class="img-desc">Pieza confeccionada en piedra de probable uso ritual. El Veinticinco, municipio de Yara</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_3.jpg">
                    <p class="img-desc">Martillo hecho a partir de la concha del cobo. Guamito, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_4.jpg">
                    <p class="img-desc">Collar confeccionado con vertebras modificadas de pescados y diente de tiburon. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_5.jpg">
                    <p class="img-desc">Pendiente confeccionado a partir de un fragmento de concha. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_6.jpg">
                    <p class="img-desc">Gubia y raspador.  Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_7.jpg">
                    <p class="img-desc">Esfera de piedra. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_8.jpg">
                    <p class="img-desc">Esfera de piedra perforada.  Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_9.jpg">
                    <p class="img-desc">Percutor. Guamito, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_10.jpg">
                    <p class="img-desc">Percutor. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_11.jpg">
                    <p class="img-desc">Pendiente acodado. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_12.jpg">
                    <p class="img-desc">Pendiente decorado. Playa de El Mango, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_13.jpg">
                    <p class="img-desc">Mortero.  Valenzuela, Bayamo</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_14.jpg">
                    <p class="img-desc">Mortero. Rio Salado, Bayamo</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_15.jpg">
                    <p class="img-desc">Puntas confeccionadas en conchas. Canal, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_16.jpg">
                    <p class="img-desc">Resto de dieta, concha de cobo. Municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_17.jpg">
                    <p class="img-desc">Sumergidor de redes. Canal, Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_18.jpg">
                    <p class="img-desc">Cuchillo de silex. Canal, municipio de Rio Cauto</p>
                    <img class="img" src="~@/assets/images/pages/comunidades/foto_19.jpg">
                    <p class="img-desc">Herramientas de silex. Canal, municipio de Rio Cauto</p>
                </div>

            </div>
            <div :class="{'hidden' : c_menu!=1 }">
                <div v-html="ac_1"></div>
                <div class="img-container">
                    <img class="img" src="~@/assets/images/pages/comunidades/mapa_6.jpg">
                </div>
                <div v-html="ac_2"></div>

                <div class="img-container">
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_20.jpg">
                    <p class="img-desc">Vasija. El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_21.jpg">
                    <p class="img-desc"> Asa. El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_22.jpg">
                    <p class="img-desc">Asas. Ocuje, municipio de Pilon</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_23.jpg">
                    <p class="img-desc">Hacha de uso ceremonial. Pilon, municipio de Pilon</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_24.jpg">
                    <p class="img-desc">Fragmentos de ceramica decorada. El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_25.jpg">
                    <p class="img-desc">Asas. El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_26.jpg">
                    <p class="img-desc">Asas. El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_27.jpg">
                    <p class="img-desc">Hacha petaloide. Bayamo, municipio de Bayamo</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_28.jpg">
                    <p class="img-desc">Raspadores confeccionados en concha. Ocuje, municipio de Pilon</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_29.jpg">
                    <p class="img-desc">Fragmentos de burenes. Sitios Ocuje, en Pilon y sitios Belic y El Guafe, en Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_30.jpg">
                    <p class="img-desc">A. Montaje museografico de un buren</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_31.jpg">
                    <p class="img-desc"> Replica de remo. Gabinete de Arqueologia, Bayamo</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_32.jpg">
                    <p class="img-desc">Idolo tallado en una cueva de El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_33.jpg">
                    <p class="img-desc">Idolo tallado en una cueva de El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_34.jpg">
                    <p class="img-desc">Idolo tallado en una cueva de El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_35.jpg"> 
                    <p class="img-desc"> Idolo del Agua, tallado en una cueva de El Guafe, municipio de Niquero</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_36.jpg">
                    <p class="img-desc"> Idolo del Agua, iluminado por el sol, el 23 de diciembre de 2013</p>
                    <img class="img"  src="~@/assets/images/pages/comunidades/foto_37.jpg">
                    <p class="img-desc"> Idolo de Bayamo, Valenzuela, Bayamo</p>
                </div>

            </div>
        </div>
    </vue-scrollbar>
</template>

<script>
    export default {
        data() {
            return {
                c_menu: 0,
                rcp_1: `<h2>Comunidades de recolectores-cazadores-pescadores reportados en la provincia de Granma</h2>
                    <p>En la provincia se encuentran reportados 127 sitios arqueológicos pertenecientes a varias comunidades, situados en diferentes puntos de la geografía, generalmente próximos a zonas cenagosas, ríos, arroyos y costas. Se encuentran distribuidos de la siguiente manera por municipios: <p>
                    <ul>
                        <li>Río Cauto: 44</li>
                        <li>Cauto Cristo: 7</li>
                        <li>Jiguaní: 5</li>
                        <li>Bayamo: 1</li>
                        <li>Yara: 13</li>
                        <li>Manzanillo: 5</li>
                        <li>Guisa: 1</li>
                        <li>Buey Arriba: 7</li>
                        <li>Bartolomé Masó: 2</li>
                        <li>Campechuela: 5</li>
                        <li>Media Luna: 14</li>
                        <li>Niquero: 22</li>
                        <li>Pilón: 1</li>
                    </ul>
                    <p>En el siguiente mapa se aprecia la distribución de los sitios en la provincia y los municipios. </p>`,
                rcp_2: `<p class="img-desc">Localización de los sitios arqueológicos pertenecientes a las comunidades de recolectores-cazadores-pescadores </p>
                    <p>Como se puede apreciar en el plano, la mayor concentración de estos sitios se ubica en los municipios de Río Cauto, Yara y Manzanillo, vinculados a deltas y cauces de ríos, zonas cenagosas, arroyos y al Golfo de Guacanayabo. </p>
                    <p>Estos sitios aparecen con menor frecuencia en los municipios de Campechuela, Media Luna y Niquero, que se localizan en la costa, más cercanos al Mar Caribe. En menor medida aun, estos sitios también aparecen en áreas lejanas de las zonas cenagosas y del mar, específicamente en los municipios de Cauto Cristo, Jiguaní, Guisa, Bayamo, Manzanillo, Buey Arriba y  Bartolomé Masó. </p>
                    <p>Estos recolectores-cazadores-pescadores ubicados cerca del mar hacían un amplio uso de los moluscos marinos para su alimentación y empleaban sus conchas (caracoles) para la confección de herramientas y vasijas. Todos usaban abundantemente la piedra tallada y la piedra en volumen, en lo fundamental del sílex y de diferentes rocas. Se supone que se utilizaran también la madera y las fibras vegetales, pero estos materiales se destruyen con facilidad por las características del clima cubano y por ello su aparición en los sitios arqueológicos es escasa. </p>
                    <p>Este grupo vivía en las cavernas y también en áreas despejadas, por lo que se estima que haya construido alguna vivienda rústica.  </p>
                    <h2>Piezas de las comunidades de recolectores-cazadores-pescadores obtenidas  en la provincia</h2>`,
                ac_1: `<h2>Comunidades de agricultores-ceramistas reportados en la provincia de Granma</h2>
                    <p>En los territorios de la provinciade Granma se han reportado 73 sitios arqueológicos pertenecientes a estas comunidades que en ocasiones se localizan de forma concentrada; también se han encontrado otros sitios más dispersos y aislados. La mayor concentración se encuentra en Cabo Cruz y El Guafe, municipio de Niquero, destacando en ellos su alto nivel de elaboración de la cerámica, con decoraciones en sus vasijas y diversidad de tipos de asas; en las cuevas existen manifestaciones de arte rupestre, con ídolos tallados y pictografías. </p>
                    <p>Se ubican 14 sitios muy próximos al Mar Caribe y al Golfo de Guacanayabo, en un área de suelos fértiles. La otra concentración, de menor magnitud, se puede observar en el municipio de Bayamo, en las márgenes del río de ese propio nombre. En los restantes municipios se presentan de forma aislada, siempre próximos a ríos, a arroyos y sobre suelos aptos para la agricultura. Su distribución por municipios es la siguiente: </p>
                    <ul>
                        <li>Río Cauto: 0</li>
                        <li>Cauto Cristo: 4</li>
                        <li>Jiguaní: 7</li>
                        <li>Bayamo: 9</li>
                        <li>Yara: 1</li>
                        <li>Manzanillo: 3</li>
                        <li>Guisa: 0</li>
                        <li>Buey Arriba: 2</li>
                        <li>Bartolomé Masó: 0</li>
                        <li>Campechuela: 2</li>
                        <li>Media Luna: 2</li>
                        <li>Niquero: 40</li>
                        <li>Pilón: 3</li>
                    </ul>
                    <p>En el  mapa que parece a continuación se aprecia la distribución de los sitios en la provincia y los municipios. </p>`,
                ac_2: `<p class="img-desc">Localización de los sitios arqueológicos pertenecientes a los agricultores-ceramistas en Granma</p>
                    <p>Estas comunidades de agricultores-ceramistas hicieron uso de los recursos que la naturaleza les ofrecía para su alimentación y la confección de sus herramientas; al igual que los recolectores-cazadores-pescadores, tallan el sílex, trabajan la piedra en volumen, la madera y las fibras vegetales. Dominan la agricultura y la cerámica, lo que les permitía una vida sedentaria. Vivían en construccionesfabricadas con varas, yaguas, guano y ramas. </p>
                    <h2>Piezas de las comunidades de agricultores-ceramistas obtenidas en la provincia</h2>`,
            }
        }
    }
</script>

<style>
</style>