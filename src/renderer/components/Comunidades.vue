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
                <div v-html="searchAndHighlight(searchText, rcp_1)"></div>
                <div class="img-container">
                    <img class="img" src="~@/assets/images/pages/comunidades/mapa_5.jpg">
                </div>
                <div v-html="searchAndHighlight(searchText, rcp_2)"></div>
                <v-gallery :images="rcp_gallery" :dark="true" :caption="false" ></v-gallery>
            </div>
            <div :class="{'hidden' : c_menu!=1 }">
                <div v-html="searchAndHighlight(searchText, ac_1)"></div>
                <div class="img-container">
                    <img class="img" src="~@/assets/images/pages/comunidades/mapa_6.jpg">
                </div>
                <div v-html="searchAndHighlight(searchText, ac_2)"></div>
                <v-gallery :images="ac_gallery" :dark="true" :caption="false" ></v-gallery>
            </div>
        </div>
    </vue-scrollbar>
</template>

<script>
    export default {
        props: ['searchText'],
        data() {
            return {
                c_menu: 0,
                rcp_1: `<h2>Comunidades de recolectores-cazadores-pescadores reportadas en la provincia de Granma</h2>
                    <p>En la provincia se encuentran reportados 127 sitios arqueológicos pertenecientes a estas comunidades, en diferentes puntos de la geografía, generalmente próximos a zonas cenagosas, ríos, arroyos y las costas. Los mismos están distribuidos de la siguiente manera por municipios:</p>
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
                    <p>En el siguiente plano se aprecia la distribución de los sitios en la provincia y los municipios. </p>`,
                rcp_2: `<p class="cp9g">Localización de los sitios arqueológicos pertenecientes a las comunidades de recolectores-cazadores-pescadores </p>
                    <p>Como se puede observar en el plano, la mayor concentración de estos sitios se encuentra cercana a deltas y cauces de ríos, zonas cenagosas, arroyos y al Golfo de Guacanayabo. Esto se puede apreciar en los municipios Río Cauto, Yara y Manzanillo.</p>
                    <p>Estos recolectores-cazadores-pescadores, ubicados cerca del mar, hacían uso de los moluscos marinos para su alimentación y emplean sus conchas (caracoles) para la confección de herramientas y vasijas. Todos empleaban piedra tallada, a partir, en lo fundamental, del sílex, la piedra en volumen de diferentes rocas y los cantos rodados. Es lógico que utilizaran la madera y las fibras vegetales, pero por las características de nuestro clima, se descomponen con facilidad y su aparición en los sitios arqueológicos es escasa. Estas comunidades vivían en las cavernas y también en áreas despejadas, por lo que deben haber construido alguna vivienda rústica. </p>
                    <h2>Piezas de las comunidades de recolectores-cazadores-pescadores obtenidas  en la provincia</h2>`,
                rcp_gallery: [
                    {title:'1 Pieza confeccionada en piedra, de probable uso ritual. El Carnero, municipio Yara',url:'static/images/pages/comunidades/foto_1.jpg'},
                    {title:'2 Pieza confeccionada en piedra de probable uso ritual. El Veinticinco, municipio Yara',url:'static/images/pages/comunidades/foto_2.jpg'},
                    {title:'3 Martillo hecho a partir de la concha del cobo. Guamito, municipio Río Cauto',url:'static/images/pages/comunidades/foto_3.jpg'},
                    {title:'4 Collar confeccionado con vértebras modificadas de pescados y diente de tiburón. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_4.jpg'},
                    {title:'5 Pendiente confeccionado a partir de un fragmento de concha. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_5.jpg'},
                    {title:'6 Gubia y raspador.  Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_6.jpg'},
                    {title:'7 Esfera de piedra. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_7.jpg'},
                    {title:'8 Esfera de piedra perforada.  Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_8.jpg'},
                    {title:'9 Percutor. Guamito, municipio Río Cauto',url:'static/images/pages/comunidades/foto_9.jpg'},
                    {title:'10 Percutor. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_10.jpg'},
                    {title:'11 Pendiente acodado. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_11.jpg'},
                    {title:'12 Pendiente decorado. Playa El Mango, municipio Río Cauto',url:'static/images/pages/comunidades/foto_12.jpg'},
                    {title:'13 Mortero.  Valenzuela, Bayamo',url:'static/images/pages/comunidades/foto_13.jpg'},
                    {title:'14 Mortero. Río Salado, Bayamo',url:'static/images/pages/comunidades/foto_14.jpg'},
                    {title:'15 Puntas confeccionadas en conchas. Canal, municipio Río Cauto',url:'static/images/pages/comunidades/foto_15.jpg'},
                    {title:'16 Resto de dieta, concha de cobo. Municipio Río Cauto',url:'static/images/pages/comunidades/foto_16.jpg'},
                    {title:'17 Sumergidor de redes. Canal, Río Cauto',url:'static/images/pages/comunidades/foto_17.jpg'},
                    {title:'18 Cuchillo de sílex. Canal, municipio Río Cauto',url:'static/images/pages/comunidades/foto_18.jpg'},
                    {title:'19 Herramientas de sílex. Canal, municipio Río Cauto',url:'static/images/pages/comunidades/foto_19.jpg'},
                ],
                ac_1: `<h2>Comunidades de agricultores-ceramistas reportados en la provincia de Granma</h2>
                    <p>En los territorios de la provincia se han reportado 73 sitios arqueológicos pertenecientes a estas comunidades, algunos dispersos en la región y otros de forma aislada; la mayor concentración se localiza en Cabo Cruz y El Guafe, municipio de Niquero, destacándose estos por el alto nivel de elaboración de la cerámica, con decoraciones en sus vasijas y diversidad de tipos de asas; también en las cuevas existen manifestaciones de arte rupestre, con ídolos tallados, donde se ubican 14 sitios, muy próximos al Mar Caribe y al Golfo de Guacanayabo; es una región cársica de suelos fértiles. <p>
                    <p>Otro grupo de menor magnitud se encuentra situado en las márgenes del río Bayamo. En los restantes municipios se presentan de forma aislada, siempre próximos a ríos o arroyos y sobre suelos aptos para la agricultura. Su distribución es la siguiente: </p>
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
                ac_2: `<p class="cp9g">Localización de los sitios arqueológicos pertenecientes a los agricultores-ceramistas</p>
                    <p>Estas comunidades de agricultores-ceramistas usaron los recursos que la naturaleza les ofrecía para su alimentación y la confección de sus herramientas. Al igual que los recolectores-cazadores-pescadores, tallaban el sílex, trabajan la piedra en volumen, la madera y las fibras vegetales. Dominaban también la agricultura y la cerámica, lo que les permitía una vida más sedentaria; vivían en construcciones hechas de madera, guano y diferentes fibras vegetales. <p>
                    <h2>Piezas de las comunidades de agricultores-ceramistas obtenidas en los trabajos de investigación arqueológica en la provincia</h2>`,
                ac_gallery: [
                    {title:'20 Vasija. El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_20.jpg'},
                    {title:'21 Asa. El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_21.jpg'},
                    {title:'22 Asas. Ocuje, municipio Pilón',url:'static/images/pages/comunidades/foto_22.jpg'},
                    {title:'23 Hacha de uso ceremonial. Pilón, municipio Pilón',url:'static/images/pages/comunidades/foto_23.jpg'},
                    {title:'24 Fragmentos de cerámica decorada. El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_24.jpg'},
                    {title:'25 Asas. El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_25.jpg'},
                    {title:'26 Asas. El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_26.jpg'},
                    {title:'27 Hacha petaloide. Bayamo, municipio Bayamo',url:'static/images/pages/comunidades/foto_27.jpg'},
                    {title:'28 Raspadores confeccionados en concha. Ocuje, municipio Pilón',url:'static/images/pages/comunidades/foto_28.jpg'},
                    {title:'29 Fragmentos de burenes. Sitios Ocuje, en Pilón y sitios Belic y El Guafe, en Niquero',url:'static/images/pages/comunidades/foto_29.jpg'},
                    {title:'29 A Montaje museográfico de un burén',url:'static/images/pages/comunidades/foto_30.jpg'},
                    {title:'30 Réplica de remo. Gabinete de Arqueología, Bayamo',url:'static/images/pages/comunidades/foto_31.jpg'},
                    {title:'31 Ídolo tallado en una cueva de El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_32.jpg'},
                    {title:'32 Ídolo tallado en una cueva de El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_33.jpg'},
                    {title:'33 Ídolo tallado en una cueva de El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_34.jpg'},
                    {title:'34 Ídolo del Agua, tallado en una cueva de El Guafe, municipio Niquero',url:'static/images/pages/comunidades/foto_35.jpg'},
                    {title:'35 Ídolo del Agua, iluminado por el sol, el 23 de diciembre de 2013',url:'static/images/pages/comunidades/foto_36.jpg'},
                    {title:'36 Ídolo de Bayamo, Valenzuela, Bayamo',url:'static/images/pages/comunidades/foto_37.jpg'},
                ],
            }
        }
    }
</script>

<style>
</style>