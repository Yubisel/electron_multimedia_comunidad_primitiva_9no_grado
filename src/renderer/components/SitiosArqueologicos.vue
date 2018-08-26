<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="content"></div>
            <div v-html="bayamo_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/bayamo.jpg">
            </div>
            <div v-html="bayamo_2"></div>

            <div v-html="bartolome_maso_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/bmaso.jpg">
            </div>
            <div v-html="bartolome_maso_2"></div>

            <div v-html="buey_arriba_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/barriba.jpg">
            </div>
            <div v-html="buey_arriba_2"></div>

            <div v-html="campechuela_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/campechuela.jpg">
            </div>
            <div v-html="campechuela_2"></div>

            <div v-html="cauto_cristo_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/cauto_cristo.jpg">
            </div>
            <div v-html="cauto_cristo_2"></div>

            <div v-html="guisa_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/guisa.jpg">
            </div>
            <div v-html="guisa_2"></div>

            <div v-html="jiguani_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/jiguani.jpg">
            </div>
            <div v-html="jiguani_2"></div>

            <div v-html="manzanillo_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/manzanillo.jpg">
            </div>
            <div v-html="manzanillo_2"></div>

            <div v-html="media_luna_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/media_luna.jpg">
            </div>
            <div v-html="media_luna_2"></div>

            <div v-html="niquero_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/niquero.jpg">
            </div>
            <div v-html="niquero_2"></div>

            <div v-html="rio_cauto_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/rio_cauto.jpg">
            </div>
            <div v-html="rio_cauto_2"></div>

            <div v-html="pilon_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/pilon.jpg">
            </div>
            <div v-html="pilon_2"></div>

            <div v-html="yara_1"></div>
            <div class="img-container">
                <img class="img" src="~@/assets/images/pages/sitios/yara.jpg">
            </div>
            <div v-html="yara_2"></div>
        </div>
    </vue-scrollbar>
</template>

<script>
    export default {
        data(){
            return{
                content: `<h2>Sitios arqueológicos por municipios</h2>
                        <p>Es importante destacar que no todo el territorio de la provincia está explorado desde el punto de vista arqueológico, por lo que un número indeterminado de sitios no se han reportado para la ciencia. A continuación aparece el listado de sitios y su ubicación por municipios, lo que permitirá conocerlos y a su vez contribuir a su protección, pues son áreas que pueden alterarse con facilidad y perder su valor científico, debido a labores para el cultivo de la tierra, excavaciones para diferentes construcciones y también por la acción de la naturaleza como la erosión y las inundaciones. </p>
                        <p>Como se podrá apreciar en el texto y las imágenes, existe información abundante sobre algunos municipios y sitios arqueológicos en particular, sin embargo de otros es escasa. Esto se debe a que no todos los sitios han sido investigados al mismo nivel, pues esta es una labor paciente y costosa. </p>`,
                bayamo_1: `<h2>Bayamo</h2>`, 
                bayamo_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Bayamo</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul><li>Valenzuela</li></ul>
                        <h3>Comunidades de agricultores- ceramistas</h3>
                        <ul>
                            <li>Bayamo </li>
                            <li>Las Ovejas </li>
                            <li>El Canistel </li>
                            <li>Arcos </li>
                            <li>Laguna de Casibacoa</li>
                            <li>Santa Inés </li>
                            <li>Santa Isabel </li>
                            <li>Cautillo </li>
                            <li>Payares </li>
                        </ul>`,
                bartolome_maso_1: `<h2>Bartolomé Masó</h2>`,
                bartolome_maso_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Bartolomé Masó</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores</h3>
                        <ul>
                            <li>La Cubana  </li>
                            <li>Los Guayos </li>
                        </ul>`,
                buey_arriba_1: `<h2>Buey Arriba</h2>`,
                buey_arriba_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Buey Arriba</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Limones </li>
                            <li>Los Robles </li>
                            <li>Santa María </li>
                            <li>Buey Arriba </li>
                            <li>Alto de Maguaro</li>
                            <li>Alto del Cedrón </li>
                            <li>Corojito </li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Severiana </li>
                            <li>El Cerro de los Copales</li>
                        </ul>`,
                campechuela_1: `<h2>Campechuela</h2>`,
                campechuela_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Campechuela</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Las Américas 1</li>
                            <li>El Pensamiento </li>
                            <li>Jiménez 1</li>
                            <li>Jiménez  2 </li>
                            <li>Arrozal</li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Ojo de Agua de Campechuela</li>
                            <li>El Martillo </li>
                        </ul>`,
                cauto_cristo_1: `<h2>Cauto Cristo</h2>`,
                cauto_cristo_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Cauto Cristo</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>La Manchuria </li>
                            <li>Los Haticos </li>
                            <li>El Cristo 1 </li>
                            <li>Vega de Pestán 2 </li>
                            <li>El Cristo 3 </li>
                            <li>Santa Ana </li>
                            <li>Vega de Pestán 3</li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Paso Viejo </li>
                            <li>Vega de Pestán 1</li>
                            <li>Ingenio Viejo </li>
                            <li>El Cristo 2 </li>
                        </ul>`,
                guisa_1: `<h2>Guisa</h2>`,
                guisa_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Guisa</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Manacal-La Olla</li>
                            <li>Charco Redondo</li>
                            <li>Santa Bárbara</li>
                            <li>Corralillo Arriba</li>
                            <li>Palma del Perro</li>
                            <li>La Aplastada</li>
                        </ul>
                        <p>En este municipio solo se reporta un sitio Manacal-La Olla y otro muy próximo en el límite con Jiguaní; aparecen áreas de interés arqueológico identificadas con letras, que constituyen zonas con una dispersión de piezas arqueológicas y no se ha podido precisar el asentamiento.</p>`,
                jiguani_1: `<h2>Jiguaní</h2>`,
                jiguani_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Jiguaní</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>El Huerto </li>
                            <li>Charco Redondo </li>
                            <li>Las Cabezas </li>
                            <li>Cienfuegos </li>
                            <li>Jiguaní Arriba 2 </li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>El Fuerte </li>
                            <li>Contramaestre 1 </li>
                            <li>Contramaestre 2 </li>
                            <li>Contramaestre 3 </li>
                            <li>Jiguaní Arriba 1 </li>
                            <li>La Rinconada  </li>
                            <li>El Calabazar </li>
                        </ul>`,
                manzanillo_1: `<h2>Manzanillo</h2>`,
                manzanillo_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Manzanillo </p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Jutía </li>
                            <li>Las Obas </li>
                            <li>Bobó </li>
                            <li>El Manglar </li>
                            <li>Punta de Guá</li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Palmas Altas </li>
                            <li>Pino Valerino</li>
                            <li>Calicito </li>
                        </ul>`,
                media_luna_1: `<h2>Media Luna</h2>`,
                media_luna_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Media Luna</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Mala Noche 1 </li>
                            <li>Loma de García </li>
                            <li>Macaca 1 </li>
                            <li>Demajagua 1 </li>
                            <li>La Pesquera </li>
                            <li>Cuchillo 2 </li>
                            <li>Cuchillo 3 </li>
                            <li>Cuchillo 4 </li>
                            <li>Guarajabo 1 </li>
                            <li>El Bucío</li>
                            <li>Gorito 1 </li>
                            <li>Tana 1 </li>
                            <li>Sajonao 1 </li>
                            <li>Vicana 1 </li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>El Palenque de Gorito</li>
                            <li>Bagazal 1 </li>
                        </ul>`,
                niquero_1: `<h2>Niquero</h2>`,
                niquero_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Niquero</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Cuchillo 1 </li>
                            <li>Cuchillo 5 </li>
                            <li>Cuchillo 6 </li>
                            <li>Cuchillo 7 </li>
                            <li>Sevilla Abajo 1 </li>
                            <li>Sevilla Abajo 2 </li>
                            <li>Sevilla Abajo 3 </li>
                            <li>Sevilla Abajo 4 </li>
                            <li>Sevilla Abajo 5 </li>
                            <li>Sevilla Abajo 6 </li>
                            <li>Sevilla Abajo 7 </li>
                            <li>Palizón </li>
                            <li>Arroyo Cachón </li>
                            <li>El Fustete II </li>
                            <li>Babiney </li>
                            <li>Belic II </li>
                            <li>Cabo Cruz II </li>
                            <li>Cuevas de Agua Fina</li>
                            <li>El Real I </li>
                            <li>El Real II </li>
                            <li>Niquero </li>
                            <li>Coloradita </li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Los Chorros </li>
                            <li>La Playita de Niquero </li>
                            <li>El Litoral </li>
                            <li>Guanito I </li>
                            <li>Guanito II </li>
                            <li>Yuraguana </li>
                            <li>San Agustín </li>
                            <li>Río Nuevo </li>
                            <li>Alegría de Pío </li>
                            <li>Pozo Empalao </li>
                            <li>El Fustete I </li>
                            <li>La Aguada </li>
                            <li>La Marea I </li>
                            <li>La Marea II </li>
                            <li>La Marea III </li>
                            <li>Belic I </li>
                            <li>Las Coloradas </li>
                            <li>Palma la Cruz I </li>
                            <li>Palma la Cruz II </li>
                            <li>Punta Casimba </li>
                            <li>El Guafe I </li>
                            <li>El Guafe II </li>
                            <li>El Guafe III </li>
                            <li>El Guafe IV </li>
                            <li>Cueva ceremonial </li>
                            <li>Cueva funeraria I </li>
                            <li>Cueva funeraria II </li>
                            <li>Cueva funeraria III </li>
                            <li>Cabo Cruz I </li>
                            <li>Cueva de los Esqueletos </li>
                            <li>La Isleta </li>
                            <li>Corrales de Ojo del Toro </li>
                            <li>El Guafe V </li>
                            <li>La Marea IV </li>
                            <li>Cueva de El Indio </li>
                            <li>Levisa </li>
                            <li>Cueva de la Calera </li>
                            <li>Cueva # 1 o de Almaguer </li>
                            <li>Cueva # 2 o de Utset </li>
                            <li>Cueva del Aura </li>
                        </ul>`,
                rio_cauto_1: `<h2>Municipio de Río Cauto</h2>`,
                rio_cauto_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Río Cauto</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Aguas verdes de Río Cauto </li>
                            <li>Río Cauto </li>
                            <li>Guamito </li>
                            <li>Boca de Río Cauto 1</li>
                            <li>Boca de Río Cauto 2 </li>
                            <li>Canal </li>
                            <li>Playa de El Mango </li>
                            <li>Grúa Doce y Medio de Ovejuela </li>
                            <li>Brazo de la Puente 1 </li>
                            <li>Brazo de la Puente 2 </li>
                            <li>Brazo de la Puente 3 </li>
                            <li>Brazo de la Puente 4 </li>
                            <li>Brazo de la Puente 5 </li>
                            <li>Brazo de la Puente 6 </li>
                            <li>El Yarey </li>
                            <li>Vista Alegre </li>
                            <li>Cardona </li>
                            <li>El Mateo </li>
                            <li>Estero Los Montunos </li>
                            <li>Pontezuela </li>
                            <li>Cayojo </li>
                            <li>Cayojito </li>
                            <li>Botera 3 </li>
                            <li>Taitaleón </li>
                            <li>Alto de Macurije 1 </li>
                            <li>Alto de Macurije 2 </li>
                            <li>Brazo Cauto Norte 1</li>
                            <li>Brazo Cauto Norte 2 </li>
                            <li>El Remate </li>
                            <li>Almiquí </li>
                            <li>Potrero de Mariano </li>
                            <li>Potrero de la Casa 1</li>
                            <li>Potrero de la Casa 2 </li>
                            <li>Caneyes de Cabezada </li>
                            <li>El Salto </li>
                            <li>Potrero de Blanco </li>
                            <li>Punta los Remolinos </li>
                            <li>Caneyas de Birama 1 </li>
                            <li>La Palmita 1 </li>
                            <li>La Palmita 2 </li>
                            <li>Caneyes de Birama 2</li>
                            <li>Jatial </li>
                            <li>La Estancia </li>
                            <li>Jucaral de Cabezada </li>
                        </ul>`,
                pilon_1: `<h2>Pilón</h2>`,
                pilon_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Pilón</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Punta de Hicacos </li>
                        </ul>
                        <h3>Comunidades de agricultores-ceramistas </h3>
                        <ul>
                            <li>Cueva de Nuevo Mundo </li>
                            <li>Ocuje </li>
                            <li>Alto de Elpidio </li>
                        </ul>`,
                yara_1: `<h2>Yara</h2>`,
                yara_2: `<p class="img-desc">Ubicación de los sitios arqueológicos reportados en el municipio Yara</p>
                        <h3>Comunidades de recolectores-cazadores-pescadores </h3>
                        <ul>
                            <li>Leonero </li>
                            <li>El Carnero </li>
                            <li>El Veinticinco </li>
                            <li>Guayabo </li>
                            <li>Sabanalamar  1</li>
                            <li>Tejeda </li>
                            <li>La Playita del río Hicotea </li>
                            <li>Los Pitos </li>
                            <li>La Escondida </li>
                            <li>La Jagua </li>
                            <li>Gutiérrez </li>
                            <li>Sabanalamar  2 </li>
                            <li>La Mayita </li>
                        </ul>
                        <h3>Comunidades de agricultores- ceramistas </h3>
                        <ul>
                            <li>Jato</li>
                        </ul>`,
            }
        }
    }
</script>

<style scoped>

</style>