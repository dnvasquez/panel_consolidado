// Importaciones de las librerías que cargamos en el HTML
const { useState } = React;
const { HashRouter, Routes, Route, NavLink } = ReactRouterDOM;

//==================================================================
// COMPONENTE 1: PÁGINA DE INICIO
//==================================================================
const Inicio = () => (
  <div className="app-container">
    <div className="card">
      <h1 className="title">Bienvenido al Repositorio de Paneles</h1>
      <p className="subtitle">LBC Consultores Ambientales</p>
      <div className="description-text">
        <p>Utiliza el menú de navegación a la izquierda para explorar los diferentes paneles de información disponibles.</p>
        <p>Este sistema te permite visualizar datos sobre:</p>
        <ul>
          <li><strong>Formaciones Vegetacionales de Chile</strong>, según la clasificación de Gajardo (1994).</li>
          <li><strong>Regiones Climáticas de Chile</strong>, basadas en el estudio de Sarricolea et al. (2017).</li>
        </ul>
        <p>Puedes agregar fácilmente nuevos paneles en el futuro editando la estructura de la aplicación.</p>
      </div>
    </div>
  </div>
);

//==================================================================
// COMPONENTE 2: PANEL DE VEGETACIÓN (tu código original adaptado)
//==================================================================
const ChileVegetationSelector = () => {
      const [selectedRegion, setSelectedRegion] = useState('');
      const [selectedSubRegion, setSelectedSubRegion] = useState('');
      const [selectedFormation, setSelectedFormation] = useState('');

      const vegetationData = {
        "1": {
          name: "DESIERTO",
          subRegions: {
            "1.1": {
              name: "Desierto Absoluto",
              formations: {
                "1.1.1": {
                  name: "Desierto Interior",
                  description: "Las unidades vegetacionales ubican al sitio dentro de la Región del Desierto, específicamente en la formación del Desierto Interior, que se desarrolla en las regiones I y II desde el límite con Perú hasta los 25° de latitud sur. Esta formación se caracteriza por carecer casi completamente de vida vegetal, excepto en condiciones muy locales con presencia de agua subterránea, constituyendo el núcleo más árido del territorio nacional donde las precipitaciones son insignificantes."
                },
                "1.1.2": {
                  name: "Desierto del Tamarugal",
                  description: "Las unidades vegetacionales corresponden a la Región del Desierto, en la formación del Desierto del Tamarugal, que se establece en condiciones donde la influencia de napas freáticas superficiales permite la existencia de árboles espinosos altamente adaptados. Esta formación presenta vegetación fuertemente alterada por intervención humana, dominada por plantaciones de Prosopis tamarugo y Prosopis alba, constituyendo uno de los pocos paisajes arbóreos del desierto absoluto."
                },
                "1.1.3": {
                  name: "Desierto de los Salares y de las Pampas",
                  description: "Las unidades vegetacionales se ubican en la Región del Desierto, formación Desierto de los Salares y de las Pampas, desarrollándose en las grandes depresiones desérticas como cuencas endorreicas salinas o pedregosas. Esta formación carece casi absolutamente de vida vegetal, encontrándose únicamente en lugares con disponibilidad de agua que han sido alterados por influencia humana, representando las condiciones más extremas del desierto chileno."
                },
                "1.1.4": {
                  name: "Matorral Ripario de las Quebradas y los Oasis",
                  description: "Las unidades vegetacionales pertenecen a la Región del Desierto, formación Matorral Ripario de las Quebradas y los Oasis, que se desarrolla típicamente por origen antrópico en grandes valles y quebradas con cultivos intensivos. Esta formación presenta gran cantidad de especies introducidas con comportamiento de malezas de origen tropical y mediterráneo, constituyendo refugios de vegetación en el contexto del desierto absoluto."
                },
                "1.1.5": {
                  name: "Desierto Interior de Tal-Tal",
                  description: "Las unidades vegetacionales corresponden a la Región del Desierto, formación Desierto Interior de Tal-Tal, que representa la prolongación natural del gran desierto interior con posibilidad ocasional de recibir influencias climáticas meridionales. Esta formación carece casi completamente de vida vegetal, salvo la presencia muy ocasional de pequeñas comunidades arbustivas en cercanías de escasas aguadas de sectores altitudinales."
                },
                "1.1.6": {
                  name: "Desierto Estepario de las Sierras Costeras",
                  description: "Las unidades vegetacionales se sitúan en la Región del Desierto, formación Desierto Estepario de las Sierras Costeras, desarrollándose en macizos montañosos costeros hasta 3.000 msnm que reciben influencias favorables por latitud y cercanía oceánica. Esta formación permite un mayor desarrollo vegetacional debido a precipitaciones muy ocasionales, presentando comunidades vegetales escasas pero características del ecotono desértico-costero."
                }
              }
            },
            "1.2": {
              name: "Desierto Andino",
              formations: {
                "1.2.1": {
                  name: "Matorral Desértico con Suculentas Columnares",
                  description: "Las unidades vegetacionales pertenecen a la Región del Desierto, formación Matorral Desértico con Suculentas Columnares, que se desarrolla en el piso vegetacional superior entre 1.800-3.500 msnm en laderas occidentales andinas. Esta formación constituye la continuación de ambientes cactáceos mejor desarrollados hacia el norte, caracterizándose por la presencia dominante de Browningia candelaria y elementos florísticos xerófitos de afinidad tropical alto-montana."
                },
                "1.2.2": {
                  name: "Desierto de los Aluviones",
                  description: "Las unidades vegetacionales se ubican en la Región del Desierto, formación Desierto de los Aluviones, que presenta fisionomía de arbustos bajos extremadamente xerófitos con cobertura muy rala. Esta formación se desarrolla en sectores con influencia de grandes aluviones y precipitaciones marginales del invierno altiplánico, mostrando amplios sectores desprovistos de vida vegetal y comunidades de composición muy pobre."
                },
                "1.2.3": {
                  name: "Desierto de la Cuenca Superior del Río Loa",
                  description: "Las unidades vegetacionales corresponden a la Región del Desierto, formación Desierto de la Cuenca Superior del Río Loa, que muestra características relacionadas con el piso inferior de la estepa alto-andina puneña. Esta formación está constituida por arbustos bajos xerófitos con extensas superficies sin vegetación, presentando gran riqueza en especies efímeras durante la estación favorable."
                },
                "1.2.4": {
                  name: "Desierto Montano de la Cordillera de Domeyko",
                  description: "Las unidades vegetacionales se sitúan en la Región del Desierto, formación Desierto Montano de la Cordillera de Domeyko, desarrollándose en el extenso macizo montañoso al suroeste del Salar de Atacama alcanzando grandes altitudes. Esta formación comparte elementos desérticos con esteparios alto-andinos debido a condiciones muy variadas, presentando elementos florísticos de alto interés especialmente en sectores meridionales y altitudinales superiores."
                },
                "1.2.5": {
                  name: "Desierto Estepario de El Salvador",
                  description: "Las unidades vegetacionales pertenecen a la Región del Desierto, formación Desierto Estepario de El Salvador, que se desarrolla en la cadena montañosa al sur y oeste de la Cordillera Domeyko. Esta formación presenta escasa información vegetacional pero indica existencia de comunidades con desarrollo estépico al menos en sectores de mayor altitud, constituyendo una transición hacia ambientes menos áridos."
                },
                "1.2.6": {
                  name: "Desierto del Salar de Atacama",
                  description: "Las unidades vegetacionales corresponden a la Región del Desierto, formación Desierto del Salar de Atacama, que abarca la gran cuenca salina y alrededores con homogeneidad paisajística notable. Esta formación presenta grandes extensiones carentes de vegetación especialmente en el interior del salar, pero desarrolla comunidades esteparias hacia el borde este y sur, con lagunas vegetadas de interés botánico no explorado."
                }
              }
            },
            "1.3": {
              name: "Desierto Costero",
              formations: {
                "1.3.1": {
                  name: "Desierto Costero de Tocopilla",
                  description: "Las unidades vegetacionales se ubican en la Región del Desierto, formación Desierto Costero de Tocopilla, que responde a las condiciones más extremas del ámbito desértico costero con vegetación únicamente en ambientes muy localizados. Esta formación presenta desarrollo vegetacional excepcional debido a la acción favorable de frecuentes neblinas costeras (camanchacas), mostrando gran riqueza florística y abundantes endemismos a pesar de su limitada extensión."
                },
                "1.3.2": {
                  name: "Desierto Costero de Tal-Tal",
                  description: "Las unidades vegetacionales pertenecen a la Región del Desierto, formación Desierto Costero de Tal-Tal, que muestra la fisionomía más característica del desierto costero con mayor representatividad en Paposo. Esta formación presenta vegetación abundante diferenciada en laderas bajo influencia directa de neblinas y quebradas-aguadas, con dominancia de Cactáceas columnares y globosas en el paisaje vegetal."
                },
                "1.3.3": {
                  name: "Desierto Costero del Huasco",
                  description: "Las unidades vegetacionales corresponden a la Región del Desierto, formación Desierto Costero del Huasco, que constituye el sector sur del desierto costero con mayor grado de continuidad y permanencia vegetacional. Esta formación se desarrolla bajo influencia ocasional de precipitaciones, representando una transición que señala límites distribucionales para muchas especies, con comunidades vegetales complejas posiblemente incluyendo varias asociaciones."
                }
              }
            },
            "1.4": {
              name: "Desierto Florido",
              formations: {
                "1.4.1": {
                  name: "Desierto Florido de los Llanos",
                  description: "Las unidades vegetacionales se sitúan en la Región del Desierto, formación Desierto Florido de los Llanos, desarrollándose en extensas llanuras arenosas entre Vallenar y Copiapó. Esta formación presenta fisionomía normal de cobertura rala de arbustos bajos, pero su composición incluye numerosas plantas geófitas y efímeras que emergen con las precipitaciones, determinando su carácter esencial por influencia de precipitaciones periódicas suficientes para provocar florecimientos masivos."
                },
                "1.4.2": {
                  name: "Desierto Florido de las Serranías",
                  description: "Las unidades vegetacionales pertenecen a la Región del Desierto, formación Desierto Florido de las Serranías, que se distribuye principalmente en sectores montañosos intermedios con comunidades de matorral fuertemente raleadas por explotación humana. Esta formación presenta alta diversidad florística con especies arbustivas poco conocidas y alto endemismo, habiendo perdido densidad vegetacional por extracción de leña, carbón y pastoreo caprino."
                }
              }
            }
          }
        },
        "2": {
          name: "ESTEPA ALTO-ANDINA",
          subRegions: {
            "2.1": {
              name: "Altiplano y de la Puna",
              formations: {
                "2.1.1": {
                  name: "Estepa Alto-Andina Altiplánica",
                  description: "Las unidades vegetacionales corresponden a la Región de la Estepa Alto-Andina, formación Estepa Alto-Andina Altiplánica, que se desarrolla entre 4.000-5.000 msnm como gran meseta dominada por montañas aisladas. Esta formación presenta gran riqueza florística organizada en diversas comunidades vegetales con patrón distribucional determinado por relieve y presencia de cursos de agua, caracterizándose por tres formas biológicas fundamentales: plantas pulvinadas, gramíneas cespitosas y arbustos bajos de follaje reducido."
                },
                "2.1.2": {
                  name: "Estepa Alto-Andina Sub-Desértica",
                  description: "Las unidades vegetacionales se ubican en la Región de la Estepa Alto-Andina, formación Estepa Alto-Andina Sub-Desértica, desarrollándose inmediatamente al sur del Altiplano compartiendo elementos florísticos y geomorfología de mesetas con formas montañosas frecuentes. Esta formación se diferencia por menor cantidad de precipitaciones provocando fisionomía vegetal más árida llegando a manifestar aspecto desértico, con cobertura extremadamente baja en muchas áreas."
                },
                "2.1.3": {
                  name: "Estepa Arbustiva Pre-Altiplánica",
                  description: "Las unidades vegetacionales pertenecen a la Región de la Estepa Alto-Andina, formación Estepa Arbustiva Pre-Altiplánica, que se desarrolla en sectores montañosos de la pre-cordillera o Cordillera Central alcanzando altitudes superiores a 5.000 msnm. Esta formación constituye ambiente essencialmente montañoso con gran diversidad de condiciones de hábitat reflejada en fisionomía vegetal muy variada, predominando arbustos bajos (tolares) con interpenetración de elementos altiplánicos y desérticos."
                },
                "2.1.4": {
                  name: "Estepa Arbustiva Pre-Puneña",
                  description: "Las unidades vegetacionales corresponden a la Región de la Estepa Alto-Andina, formación Estepa Arbustiva Pre-Puneña, donde predominan arbustos bajos de escasa cobertura compartiendo elementos florísticos con el desierto. Esta formación presenta amplia distribución con gradual disminución de precipitación hacia el sur, definiendo en las plantas conjunto de rasgos morfológicos propios de adaptación a aridez, constituyendo carácter específico de formaciones propiamente puneñas respecto a las altiplánicas."
                },
                "2.1.5": {
                  name: "Estepa Sub-desértica de la Puna de Atacama",
                  description: "Las unidades vegetacionales se sitúan en la Región de la Estepa Alto-Andina, formación Estepa Sub-desértica de la Puna de Atacama, desarrollándose en gran extensión de la alta cordillera de Antofagasta con proyección hacia vertiente oriental. Esta formación presenta altitudes similares al Altiplano pero mayor aridez determina calificación sub-desértica, con paisaje vegetal compartiendo fisionomía de arbustos bajos muy esparcidos entre estepa de gramíneas en mechón y grandes extensiones sin vegetación."
                },
                "2.1.6": {
                  name: "Estepa Desértica de los Salares Andinos",
                  description: "Las unidades vegetacionales pertenecen a la Región de la Estepa Alto-Andina, formación Estepa Desértica de los Salares Andinos, ubicándose en la Cordillera de los Andes del sur de Antofagasta y norte de Atacama. Esta formación cubre amplio territorio dominado por grandes salares andinos con fisionomía netamente desértica y vegetación muy rala, alcanzando cierta densidad únicamente en lugares especialmente favorables."
                },
                "2.1.7": {
                  name: "Desierto Alto-Andino del Ojos del Salado",
                  description: "Las unidades vegetacionales corresponden a la Región de la Estepa Alto-Andina, formación Desierto Alto-Andino del Ojos del Salado, desarrollándose en ambiente de altitud excepcional mayormente sobre 5.000 msnm. Esta formación señala generalmente el límite vegetacional para esta latitud, siendo incluida por extensión relativa e interés florístico probable, aunque cuenta únicamente con indicaciones indirectas de su vegetación."
                }
              }
            },
            "2.2": {
                name: "Andes Mediterráneos",
                formations: {
                    "2.2.1": {
                        name: "Estepa Alto-Andina de la Cordillera de Doña Ana",
                        description: "Descripción de la Estepa Alto-Andina de la Cordillera de Doña Ana..."
                    },
                    "2.2.2": {
                        name: "Matorrales Pre-Andinos de la Cordillera de Coquimbo",
                        description: "Descripción de los Matorrales Pre-Andinos de la Cordillera de Coquimbo..."
                    },
                    "2.2.3": {
                        name: "Matorral Esclerófilo Andino",
                        description: "Descripción del Matorral Esclerófilo Andino..."
                    },
                    "2.2.4": {
                        name: "Estepa Alto-Andina de la Cordillera de Santiago",
                        description: "Descripción de la Estepa Alto-Andina de la Cordillera de Santiago..."
                    },
                    "2.2.5": {
                        name: "Estepa Alto-Andina de los Andes Maulinos",
                        description: "Descripción de la Estepa Alto-Andina de los Andes Maulinos..."
                    }
                }
            }
          }
        },
        "3": {
          name: "MATORRAL Y BOSQUE ESCLERÓFILO",
          subRegions: {
            "3.1": {
              name: "Matorral Estepario",
              formations: {
                "3.1.1": {
                  name: "Matorral Estepario Costero",
                  description: "Las unidades vegetacionales corresponden a la Región del Matorral y Bosque Esclerófilo, formación Matorral Estepario Costero, que se desarrolla sobre grandes terrazas costeras y laderas de macizos montañosos cercanos al océano. Esta formación presenta arbustos bajos de hojas duras distribuidos con limitantes hídricas por precipitación baja e irregular, mostrando gran desarrollo de estrata herbácea primaveral que fisionómicamente se aproxima al desierto florido pero con extensas áreas de suelo descubierto."
                },
                "3.1.2": {
                  name: "Matorral Estepario Interior",
                  description: "Las unidades vegetacionales se ubican en la Región del Matorral y Bosque Esclerófilo, formación Matorral Estepario Interior, ocupando llanos y serranías sin influencia oceánica directa con características xéricas ambientales más acentuadas. Esta formación presenta carácter original muy alterado por intensa presión de explotación bajo pastoreo y extracción de combustibles leñosos, persistiendo únicamente restos de comunidades o distintos estados sucesionales excepto en lugares de condiciones especialmente favorables."
                },
                "3.1.3": {
                  name: "Matorral Estepario Boscoso",
                  description: "Las unidades vegetacionales pertenecen a la Región del Matorral y Bosque Esclerófilo, formación Matorral Estepario Boscoso, desarrollándose exclusivamente en distribución costera constituida por matorral heterogéneo generalmente bajo con densidad irregular. Esta formación presenta pradera anual rica en especies entre arbustos y extensos claros, desarrollando bosques intrincados y complejos en pequeñas cuencas protegidas y laderas de exposición sur con condiciones favorables, a pesar de extensión reducida."
                },
                "3.1.4": {
                  name: "Matorral Estepario Arborescente",
                  description: "Las unidades vegetacionales corresponden a la Región del Matorral y Bosque Esclerófilo, formación Matorral Estepario Arborescente, donde tienden a predominar matorrales leñosos altos e incluso sub-arbóreos como respuesta a condiciones físicas más favorables. Esta formación presenta frecuentes comunidades típicas de bosques esclerófilos pero mantiene vigente en fisionomía del paisaje vegetal la dominancia de arbustos bajos y praderas anuales de gran desarrollo."
                }
              }
            },
            "3.2": {
              name: "Matorral y Bosque Espinoso",
              formations: {
                "3.2.1": {
                  name: "Matorral Espinoso de las Serranías",
                  description: "Las unidades vegetacionales se sitúan en la Región del Matorral y Bosque Esclerófilo, formación Matorral Espinoso de las Serranías, que presenta fuerte determinismo en factores físicos del relieve ubicándose en cadenas montañosas en posición intermedia entre mar y cordillera. Esta formación muestra fisionomía vegetacional heterogénea por diversidad del mosaico ambiental pero domina la condición xerófita de arbustos espinosos, constituyendo territorio escasamente explorado desde el punto de vista botánico."
                },
                "3.2.2": {
                  name: "Bosque Espinoso Abierto",
                  description: "Las unidades vegetacionales pertenecen a la Región del Matorral y Bosque Esclerófilo, formación Bosque Espinoso Abierto, dominada por arbustos altos y árboles espinosos extendiéndose en grandes valles áridos al norte de Santiago. Esta formación presenta gran parte de territorio integrado al cultivo de riego o secano, persistiendo pequeños bosquetes representativos de situación original consistentes en estrata alta de árboles o arbustos altos acompañados por densa estrata herbácea con apariencia de sabana."
                },
                "3.2.3": {
                  name: "Matorral Espinoso de la Cordillera de la Costa",
                  description: "Las unidades vegetacionales corresponden a la Región del Matorral y Bosque Esclerófilo, formación Matorral Espinoso de la Cordillera de la Costa, de probable origen secundario desarrollada en territorio de bosque esclerófilo de mayor complejidad. Esta formación presenta predominio de matorrales cerrados espinosos de alta densidad con individuos arbóreos esparcidos, mostrando forma de vida arbórea en quebradas y laderas de exposición sur."
                },
                "3.2.4": {
                  name: "Matorral Espinoso del Secano Costero",
                  description: "Las unidades vegetacionales se ubican en la Región del Matorral y Bosque Esclerófilo, formación Matorral Espinoso del Secano Costero, desarrollándose sobre lomajes de pendientes suaves y extensas superficies planas de secano. Esta formación presenta paisaje vegetal homogéneo constituido por arbustos altos dispersos con dominancia de espino (Acacia caven) acompañada en ciertos sectores por elementos esclerófilos, constituyendo formación de carácter secundario resultado del deterioro por intervención humana."
                },
                "3.2.5": {
                  name: "Matorral Espinoso del Secano Interior",
                  description: "Las unidades vegetacionales pertenecen a la Región del Matorral y Bosque Esclerófilo, formación Matorral Espinoso del Secano Interior, que representa la máxima expresión de desarrollo de espinales ubicándose en sector interior de la Cordillera de la Costa. Esta formación se desarrolla sobre amplias planicies de suelos aluviales caracterizándose por presencia de arbustos altos casi arbóreos de espino (Acacia caven) con repartición agrupada o dispersa, llegando a constituir doseles cerrados con pradera muy diversificada y desarrollada."
                }
              }
            },
            "3.3": {
              name: "Bosque Esclerófilo",
              formations: {
                "3.3.1": {
                  name: "Bosque Esclerófilo Costero",
                  description: "Las unidades vegetacionales corresponden a la Región del Matorral y Bosque Esclerófilo, formación Bosque Esclerófilo Costero, que presenta paisaje vegetal dominado por arbustos altos y árboles correspondientes a estado de regeneración por monte bajo de especies arbóreas esclerófilas y laurifolias. Esta formación se distribuye en sector costero montañoso y laderas occidentales de la Cordillera de la Costa correspondiendo a condiciones ambientales muy favorables en zona central, encontrándose relictos de antiguo bosque laurifolio actualmente desaparecido en algunas localidades."
                },
                "3.3.2": {
                  name: "Bosque Esclerófilo de la Pre-Cordillera Andina",
                  description: "Las unidades vegetacionales se sitúan en la Región del Matorral y Bosque Esclerófilo, formación Bosque Esclerófilo de la Pre-Cordillera Andina, con distribución limitada por altas pendientes de laderas bajas y medias andinas provocando estratificación altitudinal súbita. Esta formación ocupa ambiente de carácter muy árido estival y frío invernal sin influencia reguladora oceánica, presentando patrón distribucional de comunidades vegetales debido principalmente a variación altitudinal y exposición a radiación solar."
                },
                "3.3.3": {
                  name: "Bosque Esclerófilo Montano",
                  description: "Las unidades vegetacionales pertenecen a la Región del Matorral y Bosque Esclerófilo, formación Bosque Esclerófilo Montano, que representa continuación hacia el sur de la formación anterior con mejoramiento de condiciones ambientales descendiendo hacia llano central. Esta formación se ubica únicamente en laderas bajas y piedmont andinos, habiendo sido probablemente remplazada en gran parte de su extensión por cultivos debido a condiciones favorables del territorio."
                },
                "3.3.4": {
                  name: "Bosque Esclerófilo Maulino",
                  description: "Las unidades vegetacionales corresponden a la Región del Matorral y Bosque Esclerófilo, formación Bosque Esclerófilo Maulino, que representa bosque esclerófilo de laderas orientales de la Cordillera de la Costa ubicándose sobre cerros de pendiente suave. Esta formación se encuentra muy alterada por cultivos y extracción de leña y carbón, presentando fisionomía compleja con estructura vegetacional más común de matorral arborescente o bosque bajo en lugares más favorables."
                },
                "3.3.5": {
                  name: "Bosque Esclerófilo de los Arenales",
                  description: "Las unidades vegetacionales se ubican en la Región del Matorral y Bosque Esclerófilo, formación Bosque Esclerófilo de los Arenales, situándose en el límite sur de distribución de formaciones esclerófilas respondiendo a situación particular de suelos arenosos y pedregosos. Esta formación presenta escasa capacidad de retención de agua siendo muy variable en características y respondiendo estrechamente a diversidad del substrato, adoptando fisionomía de bosques abiertos con matorrales más o menos densos."
                }
              }
            }
          }
        },
        "4": {
          name: "BOSQUE CADUCIFOLIO",
          subRegions: {
            "4.1": {
              name: "Bosque Caducifolio Montano",
              formations: {
                "4.1.1": {
                  name: "Bosque Caducifolio de Santiago",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Caducifolio, formación Bosque Caducifolio de Santiago, que se desarrolla en las más altas cumbres de la Cordillera de la Costa en exposición sur o cubriendo pequeñas mesetas. Esta formación representa bosque caducifolio como límite superior de situaciones más favorables del bosque esclerófilo, encontrándose siempre en altitud constituyendo situaciones claramente relictuales de reducida extensión con formaciones vegetales fuertemente intervenidas."
                },
                "4.1.2": {
                  name: "Bosque Caducifolio de La Montaña",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Caducifolio, formación Bosque Caducifolio de La Montaña, presentándose en primeros contrafuertes andinos desde el sur de VI Región hasta norte de VII Región. Esta formación constituye vegetación de gran riqueza florística señalando límite norte de muchas especies leñosas y herbáceas de bosques más australes, con importante participación de ciprés de la cordillera (Austrocedrus chilensis) mostrando alta frecuencia en fisionomía del bosque caducifolio."
                },
                "4.1.3": {
                  name: "Bosque Caducifolio Maulino",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Caducifolio, formación Bosque Caducifolio Maulino, que comprende bosques de hualo (Nothofagus glauca) en la Cordillera de la Costa. Esta formación se distribuye preferentemente en cumbres, laderas y quebradas más próximas al litoral, habiendo sido fuertemente remplazada por plantaciones de Pinus radiata, presentando comunidades de alto interés florístico con especies relictuales como mil (Nothofagus alessandrii) y keule (Gomortega keule)."
                },
                "4.1.4": {
                  name: "Bosque Caducifolio de la Pre-Cordillera",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Caducifolio, formación Bosque Caducifolio de la Pre-Cordillera, que representa bosques de roble (Nothofagus obliqua), hualo (Nothofagus glauca) y ciprés (Austrocedrus chilensis) en laderas medias andinas. Esta formación presenta patrón complejo de distribución por irregularidad del relieve, siendo exposición, posición topográfica y material generador del substrato los elementos más importantes en distribución vegetacional, con progresiva desaparición de elementos esclerófilos por mayor precipitación."
                }
              }
            },
            "4.2": {
              name: "Bosque Caducifolio del Llano",
              formations: {
                "4.2.1": {
                  name: "Bosque Caducifolio de Concepción",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Caducifolio, formación Bosque Caducifolio de Concepción, extendiéndose por laderas bajas y medias de la Cordillera de la Costa en VIII Región. Esta formación presenta fase húmeda hacia vertiente oceánica y fase seca hacia oriente, habiendo tenido originalmente gran desarrollo y riqueza florística pero siendo casi completamente remplazada por plantaciones de Pinus radiata."
                },
                "4.2.2": {
                  name: "Bosque Caducifolio de La Frontera",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Caducifolio, formación Bosque Caducifolio de La Frontera, distribuyéndose sobre suelos planos y lomajes en sureste de VIII Región como formación boscosa abierta. Esta formación está casi totalmente desaparecida por uso del suelo en cultivos, praderas y plantaciones forestales, representando territorio rico en posibilidades vegetacionales con fuerte penetración de especies laurifolias."
                },
                "4.2.3": {
                  name: "Bosque Caducifolio Interior",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Caducifolio, formación Bosque Caducifolio Interior, que corresponde a situación ambiental menos favorable en ámbito de bosques caducifolios del llano. Esta formación sufre efecto climático de \"sombra de lluvia\" ejercido por Cordillera de la Costa y tipo destructivo de explotación agropecuaria, presentando suelos erosionados frecuentes y imposibilidad de reconocer comunidades típicas por falta de conocimiento preciso."
                },
                "4.2.4": {
                  name: "Bosque Caducifolio del Sur",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Caducifolio, formación Bosque Caducifolio del Sur, extendiéndose al sur de IX Región ocupando depresión central sobre relieve plano o lomajes morrénicos. Esta formación representa situación más favorable en precipitaciones permitiendo gran desarrollo de vida vegetal, habiendo si do reemplazada casi totalmente por cultivos y praderas, encontrándose únicamente en condiciones marginales y estado muy modificado, con composición florística intervenida por muchas especies típicamente laurifolias."
                }
              }
            },
            "4.3": {
              name: "Bosque Caducifolio Andino",
              formations: {
                "4.3.1": {
                  name: "Bosque Caducifolio Andino del Bío-Bío",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Caducifolio, formación Bosque Caducifolio Andino del Bío-Bío, que corresponde al bosque de roble-raulí (Nothofagus obliqua - Nothofagus alpina) de la Cordillera de los Andes en área norte de la sub-región. Esta formación presenta fisionomía de bosque eminentemente caducifolio con sotobosque muy denso, habiendo sido en su mayor parte intervenida por explotaciones forestales, desarrollándose en laderas intermedias y altas bajo condiciones de mayor precipitación y temperaturas más bajas."
                },
                "4.3.2": {
                  name: "Bosque Caducifolio Mixto de la Cordillera de los Andes",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Caducifolio, formación Bosque Caducifolio Mixto de la Cordillera de los Andes, constituido por bosque de raulí (Nothofagus alpina) y coihue (Nothofagus dombeyi) en estrecho piso altitudinal andino. Esta formación responde a situación ambiental más húmeda y fría con numerosas penetraciones de elementos florísticos laurifolios y en ciertos lugares también alto-andinos, siendo calificado de mixto por abundante participación de especies de hoja perenne que ocasionalmente dominan el dosel superior."
                }
              }
            }
          }
        },
        "5": {
          name: "BOSQUE LAURIFOLIO",
          subRegions: {
            "5.1": {
              name: "Bosque Laurifolio de Valdivia",
              formations: {
                "5.1.1": {
                  name: "Bosque Laurifolio Valdiviano",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Laurifolio, formación Bosque Laurifolio Valdiviano, ubicándose en alturas medias de ambas vertientes de la Cordillera de la Costa en norte de X Región y pequeña parte de IX Región. Esta formación se reconoce por presencia destacada de especies como olivillo (Aextoxicon punctatum) y ulmo (Eucryphia cordifolia), con condiciones más favorables de temperatura permitiendo mayor diversidad florística y penetración de especies del bosque caducifolio en vertientes orientales."
                },
                "5.1.2": {
                  name: "Bosque Laurifolio de los Lagos",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Laurifolio, formación Bosque Laurifolio de los Lagos, distribuyéndose en laderas bajas de la parte occidental andina del sector norte de X Región y gran parte de IX Región. Esta formación se distingue por dominancia de especies como ulmo (Eucryphia cordifolia), tepa (Laurelia philippiana) y tineo (Weinmannia trichosperma), presentando mayor abundancia de coihue (Nothofagus dombeyi) debido a temperaturas invernales y fenómenos de catastrofismo volcánico."
                },
                "5.1.3": {
                  name: "Bosque Laurifolio de Chiloé",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Laurifolio, formación Bosque Laurifolio de Chiloé, que representa situación más húmeda e hidrófita de bosques laurifolios distribuyéndose en suelos planos de mal drenaje (Ñadis) y área sur sobre laderas montañosas de mucha precipitación. Esta formación presenta importante papel de coníferas en composición florística y fisionomía, especialmente aquelas de la familia Podocarpaceae, constituyendo ambiente de transición hacia condiciones sub-antárticas."
                },
                "5.1.4": {
                  name: "Bosque Laurifolio Andino",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Laurifolio, formación Bosque Laurifolio Andino, que representa transición de bosques laurifolios hacia bosques siempreverdes con distribución geográfica en Cordillera de los Andes al sur de X Región y sector norte de XI Región. Esta formación se sitúa preferentemente en altitudes medias con muy altas precipitaciones y temperaturas bajas, caracterizándose por presencia ocasional de alerce (Fitzroya cupressoides) y componentes florísticos como coihue de Magallanes (Nothofagus betuloides), tepa (Laurelia philippiana) y mañío hembra (Saxegothaea conspicua)."
                }
              }
            },
            "5.2": {
              name: "Bosque Laurifolio del Archipiélago de Juan Fernández",
              formations: {
                "5.2.1": {
                  name: "Bosque y Matorral Laurifolio de Más a Tierra",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Laurifolio, formación Bosque y Matorral Laurifolio de Más a Tierra, presentando dos grandes ambientes definidos por distribución local de precipitaciones consecuencia del relieve montañoso. Esta formación muestra parte oeste de la isla más árida con predominio de matorral y grandes extensiones de pastos en mechón, contrastando con centro y vertiente este que tienen condiciones favorables para desarrollo de masas boscosas considerables con gran abundancia de helechos epífitos y arbóreos."
                },
                "5.2.2": {
                  name: "Bosque y Matorral Laurifolio de Más Afuera",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Laurifolio, formación Bosque y Matorral Laurifolio de Más Afuera, que por peculiar relieve de la isla de Más Afuera manifiesta paisaje vegetal con marcada estratificación altitudinal y grandes variaciones locales en fisionomía. Esta formación presenta variaciones provocadas por mayor o menor exposición a vientos dominantes, incluyendo comunidad relictual con afinidades subantárticas ocupando reducida extensión en mayores altitudes."
                }
              }
            }
          }
        },
        "6": {
          name: "BOSQUE ANDINO-PATAGÓNICO",
          subRegions: {
            "6.1": {
              name: "Cordilleras de la Araucanía",
              formations: {
                "6.1.1": {
                  name: "Estepa Alto-Andina Sub-Húmeda",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Andino-Patagónico, formación Estepa Alto-Andina Sub-Húmeda, que aunque es formación esteparia se incluye en esta región por naturaleza de elementos florísticos más relacionados con territorios patagónicos. Esta formación se interpenetra frecuentemente con bosques, representando territorio cordillerano austral cubierto con bosques que se extiende desde 37° latitud sur hasta extremo sur, caracterizándose por recibir precipitación generalmente bajo forma de nieve."
                },
                "6.1.2": {
                  name: "Bosque Caducifolio Alto-Andino de la Cordillera de Chillán",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Andino-Patagónico, formación Bosque Caducifolio Alto-Andino de la Cordillera de Chillán, presentando distribución muy discontinua en piso altitudinal superior de VIII Región y pequeñas comunidades aisladas en VII Región. Esta formación constituye límite norte de distribución de bosques de lenga (Nothofagus pumilio), desarrollándose en ambiente donde condiciones estivales son más favorables dentro de la región ecológica, con presencia dominante de lenga (Nothofagus pumilio) en paisaje vegetal."
                },
                "6.1.3": {
                  name: "Bosque Caducifolio Alto-Andino con Araucaria",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Andino-Patagónico, formación Bosque Caducifolio Alto-Andino con Araucaria, que constituye el bosque de araucaria-lenga (Araucaria araucana - Nothofagus pumilio) distribuyéndose por laderas altas y cumbres de macizos cordilleranos especialmente en IX Región. Esta formación presenta composición florística y fisionomía de asociaciones respondiendo primariamente a gradiente de precipitación reflejada en posición ambiental ocupada en altitud y exposición, siendo frecuentes sustratos de naturaleza volcánica."
                },
                "6.1.4": {
                  name: "Bosque Alto-Montano de Nahuelbuta",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Andino-Patagónico, formación Bosque Alto-Montano de Nahuelbuta, desarrollándose en sectores más altos de la Cordillera de Nahuelbuta presentando homología ambiental con cumbres andinas pero condiciones ecológicas menos limitantes. Esta formación presenta diversidad florística y vegetacional muy grande para superficie relativamente reducida, señalando endemismos de interés y muchos límites de distribución norte de especies australes, constituyendo caso excepcional de extensión hasta Cordillera de la Costa como relicto de pasadas distribuciones."
                },
                "6.1.5": {
                  name: "Matorral Patagónico con Araucaria",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Andino-Patagónico, formación Matorral Patagónico con Araucaria, que caracteriza extensa cuenca del curso superior del río Bío-Bío en situación ambiental peculiar con condiciones áridas frías típicas del paisaje patagónico. Esta formación predomina paisaje estepario con presencia de bosque en lugares más favorables, presentando patrón distribucional determinado por cantidad de precipitación y altitud, con presencia característica de araucaria (Araucaria araucana) como árbol dominante del paisaje vegetal."
                }
              }
            },
            "6.2": {
              name: "Cordilleras Patagónicas",
              formations: {
                "6.2.1": {
                  name: "Bosque Caducifolio Alto-Andino Húmedo",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Andino-Patagónico, formación Bosque Caducifolio Alto-Andino Húmedo, que constituye límite boreal de distribución de la sub-región donde aún existen condiciones de alta precipitación presentando gran transición ecotonal. Esta formación representa paisaje generalmente montañoso donde este bosque ocupa nivel altitudinal superior en vertientes orientales cordilleranas, constituyendo bosque típico de altitud en sector de Cordillera de los Andes Australes con fuerte gradiente de precipitación oeste-este."
                },
                "6.2.2": {
                  name: "Bosque Patagónico con Coníferas",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Andino-Patagónico, formación Bosque Patagónico con Coníferas, que presenta bosque de muy escasa área distribucional encontrándose localmente en valles con características ambientales muy favorables. Esta formación se supone mejor representada en localidades meso-cordilleranas de patagonia argentina, habiendo identificado únicamente una comunidad presente sólo en sector medio de grandes cuencas de los ríos Futaleufú y Palena."
                },
                "6.2.3": {
                  name: "Matorral Caducifolio Alto-Montano",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Andino-Patagónico, formación Matorral Caducifolio Alto-Montano, que corresponde al límite altitudinal vegetacional en cumbres occidentales cordilleranas presentando frecuentemente fisionomía de matorral achaparrado. Esta formación no presenta conocimiento adecuado de composición florística ni características, desarrollándose en área donde temperaturas y precipitaciones tienden a ser inferiores, encontrándose frecuentemente limitando cordones montañosos donde fenómenos glaciares son actuales."
                },
                "6.2.4": {
                  name: "Bosque Caducifolio de Aisén",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Andino-Patagónico, formación Bosque Caducifolio de Aisén, constituida por bosques de lenga (Nothofagus pumilio) encontrándose desde sur de X Región pero representados en forma característica en XI Región. Esta formación presenta relativa homogeneidad en composición florística y estructura, distribuyéndose en ambiente con fuerte gradiente de precipitación oeste-este sobre relieve de grandes variaciones altitudinales, habiendo sido muy afectada por intervención humana."
                },
                "6.2.5": {
                  name: "Bosque Caducifolio de Magallanes",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Andino-Patagónico, formación Bosque Caducifolio de Magallanes, extendiéndose extensamente en XII Región siendo presencia de bosques de lenga (Nothofagus pumilio) uno de los rasgos característicos del paisaje vegetal. Esta formación presenta gradiente de aridez de este a oeste y variaciones con altitud similar al bosque caducifolio de Aisén, encontrándose en algunos sectores en directa relación con formaciones turbosas, constituyendo paisaje vegetal homogéneo de bosque muy denso y oscuro con estrata arbórea monoespecífica."
                }
              }
            }
          }
        },
        "7": {
          name: "BOSQUE SIEMPREVERDE Y TURBERAS",
          subRegions: {
            "7.1": {
              name: "Bosque Siempreverde con Coníferas",
              formations: {
                "7.1.1": {
                  name: "Bosque Siempreverde de la Cordillera Pelada",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde de la Cordillera Pelada, con distribución correspondiente a cumbres y laderas altas de la Cordillera de la Costa al sur de Valdivia. Esta formación presenta paisaje vegetal muy modificado por incendios pasados, persistiendo fustes de árboles muertos que otorgan fisionomía muy característica, siendo frecuentes comunidades boscosas y algunas arbustivas con turberas escasas, caracterizándose por muy altas precipitaciones y temperaturas relativamente bajas y estables."
                },
                "7.1.2": {
                  name: "Bosque Siempreverde de la Cordillera de los Andes",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde de la Cordillera de los Andes, que presenta fisionomía de bosque alto con participación de muchos elementos de bosques laurifolios ubicándose en laderas occidentales andinas. Esta formación alcanza gran desarrollo en sectores con influencia volcánica, diferenciándose del bosque siempreverde de Cordillera Pelada por relieve mucho más accidentado con mejor drenaje del substrato permitiendo mejor desarrollo estructural y mayor heterogeneidad paisajística."
                },
                "7.1.3": {
                  name: "Bosque Siempreverde con Turberas de la Isla de Chiloé",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde con Turberas de la Isla de Chiloé, ubicándose en cumbres de sectores montañosos del norte de isla de Chiloé descendiendo prácticamente al nivel del mar hacia el sur. Esta formación presenta condiciones ambientales más limitantes determinando extensión local de matorrales pantanosos y estepas turbosas, constituyendo bosque poco diversificado estructuralmente con dosel relativamente abierto y densa estrata arbustiva."
                },
                "7.1.4": {
                  name: "Bosque Siempreverde con Turberas de los Chonos",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde con Turberas de los Chonos, presentando paisaje vegetal muy complejo distribuyéndose por islas de archipiélagos de Guaytecas y Chonos. Esta formación presenta predominio de matorrales pantanosos y turberas con plantas pulvinadas incluso amplios sectores sin vegetación, encontrándose aún bosque siempreverde de desarrollo relativamente bueno destacando presencia de ciprés de las Guaytecas (Pilgerodendron uvifera) como especie característica."
                },
                "7.1.5": {
                  name: "Bosque Siempreverde de Puyuhuapi",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde de Puyuhuapi, extendiéndose por laderas bajas y valles occidentales de cordilleras patagónicas ocupando también islas y fiordos próximos en límite entre regiones X y XI. Esta formación presenta fisionomía general similar a bosque laurifolio pero predominan en dosel arbóreo superior especies de Nothofagus de hojas perennes pequeñas, siendo frecuente en algunos sectores el ciprés de las Guaytecas (Pilgerodendron uvifera) en posiciones pantanosas."
                }
              }
            },
            "7.2": {
              name: "Bosque Siempreverde Micrófilo",
              formations: {
                "7.2.1": {
                  name: "Bosque Siempreverde Montano",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde Montano, distribuyéndose en sur de X Región y gran parte de XI ocupando posiciones montañosas intermedias en laderas bajas y valles. Esta formación ha sido prácticamente eliminada por dedicación del suelo a ganadería, presentando coihue de Magallanes (Nothofagus betuloides) como especie dominante pero reconociendo bajo el dosel presencia de algunos elementos laurifolios revelando condiciones ambientales favorables."
                },
                "7.2.2": {
                  name: "Bosque Siempreverde Mixto del Baker",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde Mixto del Baker, constituida por bosques y matorrales boscosos distribuyéndose en cuenca superior del río Baker y afluentes. Esta formación presenta situación altamente compleja de transición entre bosques caducifolios y bosques siempreverdes, aunque no existe mucha información botánica y vegetacional de este ambiente, comprendiendo extenso territorio donde bosques dominados por coihue de Magallanes (Nothofagus betuloides) constituyen elemento principal del paisaje vegetal."
                },
                "7.2.3": {
                  name: "Bosque Siempreverde de Magallanes",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde de Magallanes, constituyendo bosque hidrófito de XII Región ubicándose en laderas orientales de cordilleras y sectores más favorables de archipiélagos. Esta formación presenta paisaje vegetal complejo encontrándose en distribución en mosaico con bosques caducifolios y turberas, existiendo amplias superficies sin vegetación, con posición ambiental definida por temperaturas generalmente bajas y precipitaciones intermedias del gradiente climático oeste-este."
                },
                "7.2.4": {
                  name: "Bosque Siempreverde y Matorral Turboso de la Isla Navarino",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Siempreverde y Turberas, formación Bosque Siempreverde y Matorral Turboso de la Isla Navarino, constituyendo formación boscosa de reducida extensión distribuyéndose en lugares con condiciones más favorables del Canal Beagle. Esta formación presenta bosques marginales en paisaje principalmente de matorral turboso y superficies rocosas descubiertas, siendo bosques típicamente montanos aunque en área norte de sub-región ocupan sectores medios de valles de grandes ríos."
                }
              }
            },
            "7.3": {
              name: "Turberas, Matorral y Estepa Pantanosa",
              formations: {
                "7.3.1": {
                  name: "Matorrales Siempreverdes Oceánicos",
                  description: "Las unidades vegetacionales se ubican en la Región del Bosque Siempreverde y Turberas, formación Matorrales Siempreverdes Oceánicos, constituyendo formación vegetal muy poco conocida ubicándose en litoral de islas exteriores oceánicas del archipiélago de los Chonos y península de Taitao. Esta formación presenta fisionomía del paisaje vegetal correspondiente a matorral alto constituido por comunidades que en otras formaciones son boscosas, comprendiendo vegetación de carácter sub-antártico distribuyéndose desde 45° latitud hasta extremo sur continental."
                },
                "7.3.2": {
                  name: "Matorrales Peri-Glaciares",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Siempreverde y Turberas, formación Matorrales Peri-Glaciares, constituida por comunidades vegetales arbustivas o arbóreas bajas distribuyéndose en torno a glaciares continentales o áreas recientemente desglaciadas. Esta formación se desarrolla cubriendo innumerables islas de archipiélagos situados al oeste de regiones XI y XII expuestas a influencia de corrientes frías oceánicas, presentando paisaje vegetal constituido por formaciones de plantas pulvinadas, cespitosas, arbustos bajos y matorrales."
                },
                "7.3.3": {
                  name: "Turberas y Matorral Siempreverde Pantanoso del Canal Messier",
                  description: "Las unidades vegetacionales corresponden a la Región del Bosque Siempreverde y Turberas, formación Turberas y Matorral Siempreverde Pantanoso del Canal Messier, que se distingue del paisaje homogéneo de la sub-región por presentar límite sur de muchas comunidades boscosas más boreales. Esta formación presenta condiciones muy favorables encontrándose comunidades boscosas en pequeñas cuencas protegidas, siendo frecuentes y extensas las turbas musgosas con paisaje a menudo bajo influencia del hielo glaciar y grandes áreas rocosas descubiertas."
                },
                "7.3.4": {
                  name: "Turberas y Estepa Pantanosa de los Archipiélagos Magallánicos",
                  description: "Las unidades vegetacionales se sitúan en la Región del Bosque Siempreverde y Turberas, formación Turberas y Estepa Pantanosa de los Archipiélagos Magallánicos, constituyendo ambiente con fuertes limitantes para desarrollo vegetacional especialmente por altas precipitaciones y bajas temperaturas. Esta formación se encuentra expuesta a vientos fríos del oeste persistiendo áreas glaciares mais ou menos extensas, predominando como vegetación las turberas y matorrales bajos turbosos, encontrando mayor desarrollo como bosque únicamente en condiciones locales muy favorables."
                },
                "7.3.5": {
                  name: "Turberas y Desierto Frío Sub-Antártico del Cabo de Hornos",
                  description: "Las unidades vegetacionales pertenecen a la Región del Bosque Siempreverde y Turberas, formación Turberas y Desierto Frío Sub-Antártico del Cabo de Hornos, que corresponde a paisaje vegetal mínimo entre grandes extensiones rocosas descubiertas donde condiciones ecológicas adversas permiten turberas y estepas turbosas generalmente de extensión reducida. Esta formación presenta en fiordos y canales interiores escasas comunidades boscosas de poco desarrollo, constituyendo el extremo más austral de la vegetación continental chilena con extensas superficies desprovistas de vida vegetal."
                }
              }
            }
          }
        },
        "8": {
          name: "ESTEPA PATAGÓNICA",
          subRegions: {
            "8.1": {
              name: "Matorral y Estepa Patagónica de Aisén",
              formations: {
                "8.1.1": {
                  name: "Estepa Patagónica de Aisén",
                  description: "Las unidades vegetacionales corresponden a la Región de la Estepa Patagónica, formación Estepa Patagónica de Aisén, ubicándose en estrecha franja territorial al oriente de macizos patagónicos aproximadamente entre 44° 30' y 47° 30' latitud sur donde gradiente ambiental muestra características más limitantes. Esta formación presenta fisionomía general de región ecológica patagónica pero peculiaridades en composición florística permiten delimitarla como unidad, destacando presencia de neneo (Mulinum spinosum) y duraznillo (Colliguaja integerrima) además de participación dominante de especies de coirón (Festuca spp. y Stipa spp.) y cadillos (Acaena spp.)."
                }
              }
            },
            "8.2": {
              name: "Estepa Patagónica de Magallanes",
              formations: {
                "8.2.1": {
                  name: "Estepa Patagónica de Magallanes",
                  description: "Las unidades vegetacionales se sitúan en la Región de la Estepa Patagónica, formación Estepa Patagónica de Magallanes, ubicándose desde 51º latitud sur hasta extremo sur de isla de Tierra del Fuego hacia el este de bosques caducifolios. Esta formación presenta heterogeneidad fisionómica pero condición esteparia general permite segura delimitación espacial, correspondiendo a condiciones ambientales con precipitaciones inferiores a 500 mm típicas del sector oriental de cordilleras patagónicas, con fisionomía homogénea predominando paisaje vegetal de arbustos, hierbas cespitosas y gramíneas en mechón fuertemente alterada por pastoreo."
                }
              }
            }
          }
        }
      };

      const speciesData = {
        "1.1.1": "Tessaria absinthioides, Distichlis spicata.",
        "1.1.2": "Prosopis tamarugo, Distichlis spicata, Atriplex atacamensis, Prosopis alba, Tessaria absinthioides, Cressa truxillensis, Euphorbia tarapacana, Tagetes minuta, Prosopis strombulifera.",
        "1.1.3": "Tessaria absinthioides, Distichlis spicata.",
        "1.1.4": "Distichlis spicata, Tessaria absinthioides, Atriplex atacamensis, Baccharis juncea, Baccharis petiolata, Flaveria bidentis, Pluchea chingoyo, Lycopersicon chilense, Heliotropium curassavicum, Argemone mexicana, Asclepias curassavica, Telanthera densiflora, Cynodon dactylon, Coldenia paronychoides, Geoffroea decorticans, Malva parviflora, Phyla nodiflora, Rhynchosia minima, Artemisia absinthium, Euphorbia peplus, Grindelia tarapacana, Plantago lanceolata, Polygonum pesicaria, Tecoma fulva, Verbena litoralis, Trixis cacaloides, Prosopis alba, Salix chilensis, Fagonia subaphylla, Franseria meyeniana, Pitraea cuneato-ovata, Solanum elaeagnifolium, Xanthium spinosum, Sarcocornia fruticosa, Juncus acutus, Atriplex coquimbana, Suaeda divaricata, Typha angustifolia, Cortaderia speciosa, Cotula coronopifolia, Mesembryanthemum cristallinum, Phragmites australis, Scirpus riparia.",
        "1.1.5": "Atriplex deserticola, Lycium minutifolium, Distichlis spicata, Adesmia atacamensis, Cryptantha gnaphalioides, Ephedra breana, Menonvillea virens, Salpiglosis parvulus, Acaena canescens.",
        "1.1.6": "Atriplex deserticola, Lycium minutifolium, Nolana baccata, Cryptantha parviflora, Nolana crassulifolia, Skytanthus acutus, Hippeastrum ananuca.",
        "1.2.1": "Browningia candelaria, Eulychnia aricensis, Senecio adenophyllus, Atriplex imbricata, Opuntia echinacea, Verbena gynobasis, Mutisia hamata, Senecio madariagae, Tarasa rahmerii, Cerastium nervosum, Encelia tomentosa, Cassia tarapacana, Franseria meyeniana, Krameria iluca, Oxybaphus elegans, Adesmia spinosissima, Balbisia stitchkinii, Senecio phyloleptus, Ephedra breana, Parastrephia quadrangularis, Adesmia atacamensis, Baccharis boliviensis, Chuquiraga rotundifolia, Fabiana densa, Festuca chrysophylla, Junellia connatibracteata, Lophopappus tarapacanus, Mutisia acuminata,Philippiamra pachyphylla, Hoffmanseggia ternata, Asclepias curassavica, Telanthera densiflora.",
        "1.2.2": "Hoffmanseggia ternata, Philippiamra pachyphylla, Fagonia chilensis, Tetragonia trigona, Junellia seriphioides, Atriplex imbricata, Acantholippia punenis, Coldenia atacamensis, Adesmia atacamensis, Calandrinia salsoloides, Acantholippia trifida, Atriplex atacamensis, Ephedra breana, Cristaria atacamensis, Tessaria absinthioides, Cristaria andicola, Malesherbia lactea, Sisymbrium amplexicaule, Adesmia hystrix, Argylia tomentosa, Hoffmanseggia andicola, Distichlis spicata.",
        "1.2.3": "Acantholippia punenis, Franseria meyeniana, Coldenia atacamensis, Atriplex atacamensis, Acantholippia trifida, Atriplex imbricata, Adesmia atacamensis.",
        "1.2.4": "Atriplex atacamensis, Acantholippia trifida, Adesmia atacamensis, Coldenia atacamensis, Atriplex deserticola, Lycium minutifolium, Atriplex imbricata, Cristaria andicola, Festuca chrysophylla, Fabiana bryoides.",
        "1.2.5": "Atriplex atacamensis, Tessaria absinthioides.",
        "1.2.6": "Atriplex atacamensis, Tessaria absinthioides, Baccharis juncea, Distichlis spicata, Acantholippia punenis, Franseria meyeniana, Acantholippia trifida, Prosopis alba, Geoffroea decorticans.",
        "1.3.1": "Eulychnia iquiquensis, Frankenia chilensis, Calandrinia grandiflora, Gilia ramosissima, Lycium chanar, Malesherbia humilis, Cleome chilensis, Oxalis bulbocastanum, Sicyos bryonaefolius, Cassia brogniartii, Dinemandra ericoides, Nolana sedifolia, Tessaria absinthioides, Distichlis spicata.",
        "1.3.2": "Nolana crassulifolia, Cassia brogniartii, Dinemandra ericoides, Alstroemeria violacea, Alternanthera junciflora, Krameria cistoidea, Parietaria debilis, Adesmia tenella, Argylia radiata, Hoffmanseggia gracilis, Menonvillea orbiculata, Nolana sedifolia, Ophryosporus triangularis, Stachys pannosa, Perytile emoryi, Portulacca philippi, Tigridia philippiana, Monttea chilensis, Peperomia doellii, Frankenia chilensis, Nolana divaricata, Bahia ambrosioides, Cleome chilensis, Nolana leptophylla, Drymaria cordata, Sicyos bryonaefolius, Chuquiraga ulicina, Fagonia chilensis, Heliotropium linariaefolium, Mathewsia incana, Stipa tortuosa, Poa bonariensis, Quinchamalium chilense, Oxalis gigantea, Adesmia eremophila, Anisomeria littoralis, Skytanthus acutus, Sarcocornia fruticosa, Juncus acutus, Encelia tomentosa, Nolana paradoxa, Acacia caven, Atriplex repanda.",
        "1.3.3": "Heliotropium stenophyllum, Oxalis gigantea, Adesmia argentea, Argylia radiata, Aristolochia chilensis, Bahia ambrosioides, Balbisia peduncularis, Cassia acuta, Chaetanthera glabrata, Eulychnia acida, Gutierrezia resinosa, Haplopappus parvifolius, Lobelia polyphylla, Nicotiana solanifolia, Opuntia ovata, Encelia tomentosa, Ephedra andina, Ophryosporus triangularis, Opuntia miquelii, Pleocarphus revolutus, Skytanthus acutus, Trichocereus coquimbana, Cristaria glaucophylla, Chuquiraga acicularis, Hippeastrum ananuca, Nolana paradoxa, Sarcocornia fruticosa, Juncus acutus.",
        "1.4.1": "Euphorbia copiapina, Hippeastrum ananuca, Skytanthus acutus, Encelia tomentosa, Adesmia tenella, Cryptantha parviflora, Oenothera coquimbensis, Plantago hispidula, Tillandsia geissei, Frankenia chilensis, Menonvillea orbiculata, Scilla triflora, Nolana paradoxa, Ophryosporus triangularis, Bahia ambrosioides, Nolana rostrata, Cristaria glaucophylla, Heliotropium linarioides, Polyachyrus roseus, Tetragonia maritirna, Nolana baccata, Tetragonia copiapina, Tetragonia macrocarpa, Fagonia chilensis, Calandrinia calycina, Pectocarya dimorpha, Viola polypoda, Acacia caven, Atriplex repanda.",
        "1.4.2": "Balsamocarpon brevifolium, Adesmia argentea, Caesalpinia angulata, Encelia tomentosa, Bulnesia chilensis, Cordia decandra, Opuntia ovata, Phrodus bridgesii, Pleurophora pungens, Proustia ilicifolia, Argylia radiata, Ephedra andina, Heliotropium stenophyllum, Pintoa chilensis, Cruckshanksia pumila, Trichocereus coquimbana.",
        "2.1.1": "Festuca orthophylla, Parastrephia lucida, Astragalus arequipensis, Deyeuxia breviaristata, Pycnophyllum molle, Hypsela reniformis, Nothotriche pulverulenta, Senecio pulviniformis, Werneria aretioides, Werneria poposa, Senecio adenophyllus, Azorella compacta, Parastrephia quadrangularis,Senecio graveolens, Adesmia spinosissima, Opuntia ignescens,Stipa leptostachya, Polylepis tarapacana, Festuca chrysophylla,Parastrephia lepidophylla, Stipa frigida, Adesmia leucopogon,Oxychloe andina, Calamagrostis rigescens, Carex fuscula, Werneria spathulata, Werneria pygmaea, Bryopsis andicola, Gentiana prostrata, Hypochaeris thrincioides, Scirpus macrolepis, Werneria pinnatifida, Azolla filiculoides, Deyeuxia curvula, Distichia muscoides, Lilaeopsis andina, Myriophyllum aquaticum.",
        "2.1.2": "Pycnophyllum molle, Oxalis exigua, Mulinum crassifolium, Parastrephia quadrangularis, Stipa venusta, Werneria glaberrima, Festuca chrysophylla, Azorella compacta, Baccharis incarum, Lampaya medicinalis, Junellia seriphioides, Opuntia ignescens, Adesmia horrida, Fabiana bryoides, Conyza deserticola, Chuquiraga spinosa, Polylepis tarapacana.",
        "2.1.3": "Fabiana densa, Polylepis besseri, Atriplex imbricata, Fabiana viscosa, Baccharis boliviensis, Senecio graveolens, Adesmia spinosissima, Chuquiraga rotundifolia, Mutisia acuminata, Diplostephium cinereum, Loasa urens, Opuntia ignescens, Parastrephia quadrangularis, Azorella compacta, Deyeuxia breviaristata, Nothotriche pulverulenta, Tagetes multiflora, Ephedra breana, Balbisia stitchkinii.",
        "2.1.4": "Baccharis boliviensis, Fabiana densa, Junellia seriphioides, Opuntia ignescens, Adesmia horrida, Cardionema ramosissimum, Gnaphalium lacteum, Baccharis incarum, Ephedra breana, Senecio phyloleptus, Acantholippia punenis, Fabiana denudata, Franseria meyeniana, Lampaya medicinalis.",
        "2.1.5": "Fabiana bryoides, Parastrephia lepidophylla, Artemisia copa, Fabiana denudata, Phacelia viscosa, Mulinum crassifolium, Stipa frigida, Stipa chrysophylla, Stipa chrysophylla, Adesmia hystrix, Calandrinia occulta, Cristaria andicola, Perezia atacamensis, Stipa atacamensis, Viola frigida, Menonvillea cuneata, Nastanthus caespitosus, Senecio rahmeri, Pycnophyllum molle, Oxalis exigua, Baccharis incarum, Lampaya medicinalis.",
        "2.1.6": "Adesmia sentis, Astragalus bustillosii, Atriplex deserticola, Fabiana imbricata, Hordeum comosum, Nicotiana corymbosa, Opuntia ovata, Senecio crispus, Acaena macrostemma, Chaetanthera chilensis, Ephedra breana, Jaborosa caulescens, Juncus balticus, Lycium minutifolium, Fabiana bryoides, Parastrephia lepidophylla, Atriplex imbricata, Cristaria andicola, Atriplex atacamensis, Tessaria absinthioides.",
        "2.1.7": "Stipa chrysophylla.",
        "2.2.1": "Stipa chrysophylla, Adesmia gayana, Adesmia subterranea, Azorella madreporica, Cristaria andicola, Chaetanthera minuta, Gayophytum humile, Mentzelia pinnatifida, Oreopolus macranthus, Phacelia cumingii, Viviania mariifolia, Adesmia remyana, Calandrinia picta, Chaetanthera acerosa, Viola montagnei, Atriplex atacamensis, Tessaria absinthioides, Fabiana imbricata, Ephedra andina, Patosia clandestina, Juncus balticus.",
        "2.2.2": "Fabiana imbricata, Ephedra andina, Adesmia spinosissima, Alstroemeria venustula, Anarthrophyllum andicola, Argylia potentillaefolia, Baccharis confertifolia, Chuquiraga oppositifolia, Gymnophyton robustum, Jaborosa caulescens, Menonvillea cuneata, Nardophyllum scoparium, Oreopolus palmae, Reyesia parviflora, Senecio erineus, Stipa pogonathera, Viviania mariifolia.",
        "2.2.3": "Acaena pinnatifida, Kageneckia angustifolia, Valenzuelia trinervis, Colliguaja integerrima, Echium vulgare, Haplopappus canescens, Koeleria phleoides, Pasithaea coerulea, Phacelia pinnatifida, Schinus montanus, Trisetum chromostachyum, Acaena splendens, Mulinum spinosum, Quillaja saponaria, Tetraglochin alatum, Viviania mariifolia, Erigeron berteroanus, Gymnophyton isatidicarpum, Valeriana glauca, Ephedra andina, Escallonia myrtoidea, Maytenus boaria, Muehlenbeckia hastulata, Baccharis linearis, Escallonia illinita, Austrocedrus chilensis, Aristotelia chilensis, Calceolaria petiolaris, Ribes punctatum, Azara integrifolia, Baccharis rhomboidalis, Kageneckia oblonga, Colliguaja odorifera, Puya berteroniana, Trichocereus chilensis, Chuquiraga oppositifolia, Azorella madreporica, Laretia acaulis.",
        "2.2.4": "Chuquiraga oppositifolia, Mulinum spinosum, Anarthrophyllum andicola, Carex setifolia, Gayophytum humile, Laretia acaulis, Mutisia rosea, Viviania mariifolia, Calandrinia affinis, Stipa lachnophylla, Tropaeolum polyphyllum, Acaena splendens, Berberis empetrifolia, Tetraglochin alatum, Acaena leptacantha, Adesmia gracilis, Calceolaria biflora, Ephedra andina, Euphorbia collina, Festuca acanthophylla, Proustia cuneifolia, Senecio patagonicus, Azorella madreporica, Anemone decapetala, Bromus macranthus, Caiophora coronata, Menonvillea pinnatifida, Nicotiana corymbosa, Schizanthus grahamii, Stipa chrysophylla, Viola atropurpurea, Hordeum comosum, Austrocactus spiniflorus, Leucheria salina, Nardophyllum lanatum, Pozoa coriacea, Ribes cucullatum, Patosia clandestina, Juncus balticus, Astragalus bustillosii, Mimulus depressus, Nastanthus caespitosus, Heleocharis albibracteata,Calamagrostis fulva, Calamagrostis rigescens, Carex gayana,Draba tenuis, Gentiana prostrata, Oxychloe andina, Plantago barbata, Poa holciformis, Trifolium polymorphum, Oxalis adenophylla, Valenzuelia trinervis, Adesmia gayana.",
        "2.2.5": "Patosia clandestina, Pernettya pumila, Calandrinia rupestris, Caltha appendiculata, Gayophytum humile, Hypochaeris acaulis, Mimulus luteus, Nastanthus scapiger, Ourisia alpina, Perezia lyrata, Gentiana prostrata, Juncus lessueurii, Nastanthus agglomeratus, Plantago barbata, Valeriana fonckii, Azorella madreporica, Laretia acaulis, Chuquiraga oppositifolia, Valenzuelia trinervis.",
        "3.1.1": "Adesmia microphylla, Cassia coquimbensis, Fuchsia lycioides, Puya chilensis, Trichocereus coquimbana, Lobelia polyphylla, Ophryosporus triangularis, Plantago hispidula, Pleocarphus revolutus, Porlieria chilensis, Stipa plumosa, Bahia ambrosioides, Flourensia thurifera, Proustia cuneifolia, Bromus berterianus, Heliotropium stenophyllum, Oxalis gigantea, Adesmia tenella, Erodium cicutarium, Erodium malachoides, Gutierrezia resinosa, Helenium aromaticum, Moscharia pinnatifida, Koeleria phleoides, Reichea coquimbensis, Loasa urmenetae, Nolana paradoxa, Sicyos bryonaefolius, Junellia selaginoides, Calandrinia capitata, Cristaria glaucophylla, Alona filifolia, Avena barbata, Chuquiraga acicularis, Haplopappus angustifolius, Senecio bahioides, Lithrea caustica, Atriplex semibaccata, Azara celastrina, Schinus latifolius, Erodium bothrys, Fabiana barriosii, Tessaria absinthioides.",
        "3.1.2": "Flourensia thurifera, Heliotropium stenophyllum, Colliguaja odorifera, Cordia decandra, Gutierrezia resinosa, Haplopappus angustifolius, Plantago hispidula, Proustia cuneifolia, Puya chilensis, Trichocereus chilensis, Trichocereus coquimbana, Adesmia tenella, Erodium cicutarium, Fabiana barriosii, Junellia selaginoides, Erodium moschatum, Senecio murorum, Tessaria absinthioides, Pleocarphus revolutus, Baccharis pingraea, Cortaderia selloana, Frankenia chilensis, Bridgesia incisaefolia, Adesmia microphylla, Opuntia ovata, Ephedra andina, Lastarriaea chilensis, Lobelia polyphylla, Muehlenbeckia hastulata, Proustia ilicifolia, Puya berteroniana, Stipa plumosa, Notholaena mollis, Gutierrezia resinosa, Atriplex semibaccata, Lycium chilense, Marrubium vulgare, Lithrea caustica, Baccharis paniculada, Cassia coquimbensis, Proustia cinerea, Bromus berterianus, Prosopis chilensis, Schinus polygamus, Acacia caven, Proustia cinerea, Drimys winteri,Luma chequen.",
        "3.1.3": "Azara celastrina, Schinus latifolius, Baccharis concava, Bahia ambrosioides, Eupatorium salvia, Fuchsia lycioides, Vulpia megalura, Cryptocarya alba, Escallonia revoluta, Lithrea caustica, Porlieria chilensis, Bromus berterianus, Chenopodium paniculatum, Gutierrezia resinosa, Plantago hispidula, Trichocereus coquimbana, Pleocarphus revolutus, Encelia tomentosa, Erodium cicutarium, Muehlenbeckia hastulata, Puya chilensis, Erodium moschatum, Haplopappus foliosus, Heliotropium stenophyllum, Oxalis gigantea, Trichocereus chilensis, Vulpia dertonensis, Helenium aromaticum, Sagina apetala, Adesmia tenella, Chuquiraga acicularis, Cryptantha linearis, Dioscorea humifusa, Erodium bothrys, Piptochaetium montevidense, Nolana humifusa, Ribes punctatum, Kageneckia oblonga, Proustia cuneifolia, Stachys grandidentata, Erigeron berteroanum, Medicago polymorpha, Calycera eryngioides, Lastarriaea chilensis, Leucocoryne purpurea, Triptilion spinosum, Solanum pinnatum, Ambrosia chamissonis, Distichlis spicata, Cassia coquimbensis, Atriplex semibaccata, Avena barbata, Drimys winteri, Luma chequen, Aextoxicon punctatum, Rhaphithamnus spinosus.",
        "3.1.4": "Peumus boldus, Podanthus mitiqui, Cryptocarya alba, Lepechinia salviae, Schinus latifolius, Puya chilensis, Eupatorium salvia, Flourensia thurifera, Lobelia salicifolia, Muehlenbeckia hastulata, Quillaja saponaria, Pouteria splendens, Bahia ambrosioides, Escallonia pulverulenta, Fuchsia lycioides, Lithrea caustica, Puya venusta, Baccharis concava, Piptochaetium montevidense, Fortunatia biflora, Haplopappus rosulatus, Pectocarya dimorpha, Calandrinia diffusa, Dichondra sericea, Erodium bothrys, Helenium aromaticum,Madia sativa, Cardionema ramosissimum, Chorizanthe virgata,Gamochaeta chamissonis, Vulpia megalura, Nolana paradoxa, Neoporteria chilensis, Alona filifolia, Alstroemeria peregrina, Calandrinia grandiflora, Neoporteria subgibbosa, Polyachyrus gayi, Puya chilensis, Adesmia microphylla, Cassia coquimbensis, Azara celastrina, Schinus latifolius, Avena barbata, Erodium bothrys, Adesmia tenella, Erodium cicutarium, Drimys winteri, Luma chequen, Ambrosia chamissonis, Distichlis spicata, Jubaea chilensis.",
        "3.2.1": "Prosopis chilensis, Schinus polygamus, Gutierrezia resinosa, Opuntia ovata, Porlieria chilensis, Proustia ilicifolia, Proustia cuneifolia, Solanum nigrum, Pleocarphus revolutus, Trichocereus coquimbana, Acacia caven, Flourensia thurifera, Calandrinia trifida, Haplopappus angustifolius, Gymnophyton isatidicarpum, Adesmia tenella, Erodium cicutarium, Haplopappus chrysanthemifolius, Lastarriaea chilensis,Pectocarya dimorpha, Colliguaja odorifera, Adesmia microphylla,Bridgesia incisaefolia, Nassella chilensis, Alonsoa meridionalis, Haplopappus pristiphyllus, Lobelia polyphylla, Plantago hispidula, Quillaja saponaria, Vulpia megalura, Proustia cinerea, Pasithaea coerulea, Stipa plumosa, Trichocereus chilensis, Chaetanthera linearis, Adesmia arborea, Ephedra andina, Erodium cicutarium, Nassella chilensis, Notholaena mollis, Salix chilensis, Maytenus boaria, Baccharis pingraea, Tessaria absinthioides, Rubus ulmifolius, Escallonia illinita, Luma chequen, Muehlenbeckia hastulata, Cotula coronopifolia, Distichlis spicata, Psoralea glandulosa, Selliera radicans, Baccharis paniculata, Trevoa trinervis, Kageneckia oblonga, Bromus berterianus, Avena barbata, Atriplex repanda, Cestrum parqui, Encelia tomentosa, Schinus molle,Geoffroea decorticans, Puya berteroniana, Trevoa trinervis,Erodium bothrys, Atriplex semibaccata, Drimys winteri, Luma chequen.",
        "3.2.2": "Prosopis chilensis, Acacia caven, Porlieria chilensis, Proustia cuneifolia, Muehlenbeckia hastulata, Colliguaja odorifera, Baccharis paniculada, Avena barbata, Bromus berterianus, Cynara cardunculus, Solanum tomatillo, Baccharis linearis, Erodium cicutarium, Koeleria phleoides, Vulpia megalura, Atriplex philippii, Frankenia salina, Silene gallica, Erodium bothrys, Gamochaeta chamissonis, Plantago hispidula, Cardionema ramosissimum, Pectocarya dimorpha, Salix chilensis, Maytenus boaria.",
        "3.2.3": "Colliguaja odorifera, Lithrea caustica, Trevoa trinervis, Baccharis paniculata, Bromus berterianus, Dioscorea humifusa, Erodium cicutarium, Flourensia thurifera, Galium aparine, Helenium aromaticum, Pectocarya dimorpha, Puya berteroniana, Trichocereus chilensis, Peumus boldus, Briza minor, Clarkia tenella, Eupatorium salvia,Lolium multiflorum, Muehlenbeckia hastulata, Nassella chilensis, Podanthus mitiqui, Avena barbata, Hypochaeris glabra, Trifolium glomeratum, Colletia spinosa, Acacia caven, Leucheria rosea, Pasithaea coerulea, Trisetum chromostachyum, Cestrum parqui, Quillaja saponaria, Cryptocarya alba, Luma chequen, Proustia cuneifolia, Maytenus boaria.",
        "3.2.4": "Acacia caven, Maytenus boaria, Baccharis linearis, Bromus berterianus, Cestrum parqui, Medicago hispida, Muehlenbeckia hastulata, Vulpia megalura, Proustia cuneifolia, Plantago hispidula, Briza minor, Agrostis tenuis, Bromus hordeaceus, Lithrea caustica, Peumus boldus, Cryptocarya alba, Schinus latifolius, Trevoa trinervis, Colliguaja odorifera, Avena barbata, Erodium bothrys, Ambrosia chamissonis, Distichlis spicata, Nolana paradoxa, Neoporteria chilensis.",
        "3.2.5": "Acacia caven, Maytenus boaria, Lithrea caustica, Peumus boldus, Baccharis linearis, Plantago hispidula, Blepharocalyx cruckshanksii, Crinodendron patagua.",
        "3.3.1": "Beilschmiedia miersii, Crinodendron patagua, Adenopeltis serrata, Adiantum chilense, Citronella mucronata, Drimys winteri, Lardizabala biternata, Lithrea caustica, Myrceugenia obtusa, Persea lingue, Proustia pyrifolia, Tillandsia usneoides, Cryptocarya alba, Chusquea cumingii, Peumus boldus, Schinus latifolius, Dasyphyllum excelsum, Quillaja saponaria, Azara celastrina, Escallonia revoluta, Podanthus mitiqui, Sophora macrocarpa, Stellaria cuspidata, Trevoa trinervis, Jubaea chilensis, Adesmia arborea, Baccharis linearis, Colliguaja odorifera, Muehlenbeckia hastulata, Puya chilensis, Schinus polygamus, Trichocereus chilensis, Luma chequen, Aristotelia chilensis, Baccharis confertifolia, Cissus striata, Escallonia illinita, Eupatorium salvia, Maytenus boaria, Nassella chilensis, Satureja gilliesii, Alstroemeria angustifolia, Alstroemeria haemantha,Eupatorium glechonophyllum, Galium aparine, Geranium robertianum, Stellaria media, Fumaria agraria, Loasa triloba, Blepharocalyx cruckshanksii, Pouteria splendens, Lepechinia salviae.",
        "3.3.2": "Quillaja saponaria, Lithrea caustica, Cryptocarya alba, Escallonia pulverulenta, Mutisia retusa, Pasithaea coerulea, Maytenus boaria, Baccharis rhomboidalis, Nassella chilensis, Colliguaja odorifera, Alonsoa meridionales, Alstroemeria angustifolia, Chaetanthera linearis,Helenium aromaticum, Proustia cuneifolia, Talguenea quinquenervis, Adesmia arborea, Porlieria chilensis, Trevoa trinervis, Adiantum glanduliferum, Bromus berterianus, Dioscorea humifusa, Galium aparine, Loasa triloba, Podanthus mitiqui,Stellaria abortiva, Vulpia megalura, Oxalis micrantha, Pasithaea coerulea, Alstroemeria haemantha, Anthriscus caucalis, Azara petiolaris, Echium vulgare, Madia chilensis, Retanilla ephedra, Sanicula crassicaulis, Puya violacea, Avena barbata, Chorizanthe virgata, Clarkia tenella, Ephedra andina, Notholaena tomentosa, Satureja gilliesii, Eryngium paniculatum, Acacia caven, Persea lingue, Luma chequen,Puya berteroniana, Chusquea cumingii.",
        "3.3.3": "Aristotelia chilensis, Cryptocarya alba, Luma chequen, Persea lingue, Azara petiolaris, Hypochaeris scorzonerae, Lithrea caustica, Pasithaea coerulea, Quillaja saponaria, Sanicula crassicaulis, Blechnum auriculatum, Drimys winteri, Equisetum bogotense, Maytenus boaria, Azara integrifolia, Acacia caven, Berberis actinacantha, Colliguaja odorifera, Kageneckia oblonga, Lomatia hirsuta, Myrceugenia obtusa, Trevoa trinervis, Baccharis linearis, Escallonia pulverulenta, Peumus boldus, Colletia spinosa, Baccharis rhomboidalis,Calceolaria thyrsiflora, Eryngium paniculatum, Fabiana imbricata, Nassella chilensis, Puya berteroniana, Satureja gilliesii, Vulpia megalura, Mutisia subulata, Quinchamalium chilense, Colliguaja salicifolia, Baccharis rhomboidalis.",
        "3.3.4": "Lithrea caustica, Peumus boldus, Azara integrifolia, Jubaea chilensis, Blepharocalyx cruckshanksii, Crinodendron patagua, Chusquea cumingii, Tessaria absinthioides, Baccharis pingraea, Ambrosia chamissonis, Distichlis spicata, Nolana paradoxa, Neoporteria chilensis.",
        "3.3.5": "Quillaja saponaria, Fabiana imbricata, Aira caryophylla, Calandrinia sericea, Haplopappus integerrimus, Maihuenia poeppigii, Lithrea caustica, Schinus polygamus, Azara integrifolia, Drimys winteri, Blepharocalyx divaricatum, Acacia dealbata, Tessaria absinthioides, Baccharis pingraea.",
        "4.1.1": "Nothofagus obliqua var. macrocarpa (roble blanco), Cryptocarya alba (peumo), Azara petiolaris (maquicillo), Chusquea cumingii (quila), Lomatia hirsuta (radal), Quillaja saponaria (quillay), Schinus montanus (litrecillo), Francoa appendiculata (llaupanke), Lithrea caustica (litre), Myrceugenia obtusa (rarán), Ribes punctatum (zarzaparrilla), Dasyphyllum excelsum (tayú), Chloraea disoides, Erodium bothrys (alfilerillo), Mulinum ulicinum (espinillo), Triptilion spinosum (nomeolvides), Retanilla ephedra (retanilla), Puya violacea (chagualillo), Colliguaja odorifera (colliguay), Kageneckia angustifolia (frangel), Valenzuelia trinervis (guindillo), Colliguaja integerrima (duraznillo), Tetraglochin alatum (horizonte), Mulinum spinosum (neneo), Chuquiraga oppositifolia (chuquiraga), Stipa lachnophylla (paja chica), Nothofagus glauca (hualo).",
        "4.1.2": "Nothofagus obliqua (roble), Aristotelia chilensis (maqui), Ribes punctatum (zarzaparrilla), Sophora macrocarpa (mayú), Azara petiolaris (maquicillo), Lomatia dentata (piñol), Berberis actinacantha (michay), Elymus andinus, Hypericum perforatum (hierba de San José), Lomatia hirsuta (radal), Osmorhiza chilensis (cacho de cabra), Quillaja saponaria (quillay), Austrocedrus chilensis (ciprés de la cordillera), Azara integrifolia (corcolén), Baccharis rhomboidalis (vautro), Kageneckia oblonga (bollén), Lithrea caustica (litre), Maytenus boaria (maitén), Escallonia pulverulenta (corontillo), Nothofagus dombeyi (coihue), Gaultheria phyllyreaefolia (chaura), Schinus montanus (litrecillo), Colletia spinosa (crucero), Baccharis rhomboidalis (vautro), Persea lingue (lingue), Nothofagus alpina (raulí).",
        "4.1.3": "Nothofagus glauca (hualo), Azara petiolaris (maquicillo), Aristotelia chilensis (maqui), Lithrea caustica (litre), Ribes punctatum (zarzaparrilla), Sophora macrocarpa (mayú), Baccharis rhomboidalis (vautro), Cryptocarya alba (peumo), Escallonia pulverulenta (corontillo), Lomatia hirsuta (radal), Maytenus boaria (maitén), Peumus boldus (boldo), Ungi molinae (murta), Berberis actinacantha (michay), Chusquea cumingii (quila), Myrceugenia obtusa (rarán), Nothofagus obliqua (roble), Oxalis articulata (culle), Gevuina avellana (avellano), Gaultheria phyllyreaefolia (chaura), Lapageria rosea (copihue), Aextoxicon punctatum (olivillo), Chusquea quila (quila), Nothofagus obliqua (roble), Gomortega keule (queule), Podocarpus saligna (mañío de hojas largas), Cytisus monspessulanus (lluvia de oro), Sarothamnus scoparius (retamillo), Griselinia scandens (yelmo), Ambrosia chamissonis (quinchihue), Distichlis spicata (grama salada).",
        "4.1.4": "Nothofagus obliqua (roble), Persea lingue (lingue), Aextoxicon punctatum (olivillo), Gevuina avellana (avellano), Blechnum auriculatum (palmilla), Cissus striata (pilpil voqui), Lapageria rosea (copihue), Chusquea quila (quila), Laurelia sempervirens (laurel), Lomatia dentata (piñol), Lomatia hirsuta (radal), Peumus boldus (boldo), Nothofagus dombeyi (coihue), Drimys winteri (canelo), Luma apiculata (arrayán), Podocarpus saligna (mañío de hojas largas), Maytenus boaria (maitén), Sophora macrocarpa (mayú), Viola maculata (pilludén), Austrocedrus chilensis (ciprés de la cordillera), Nothofagus glauca (hualo), Colliguaja salicifolia (colliguay),Gochnatia foliolosa (mira), Myoschilos oblonga (codocoipu), Nothofagus alpina (raulí), Azara petiolaris (maquicillo), Elytropus chilensis (quilmay), Colletia ulicina (crucero), Escallonia revoluta (corontillo).",
        "4.2.1": "Nothofagus obliqua (roble), Gomortega keule (queule), Podocarpus saligna (mañío de hojas largas), Aextoxicon punctatum (olivillo), Gevuina avellana (avellano), Lapageria rosea (copihue), Lomatia dentata (piñol), Luma apiculata (arrayán), Boquila trifoliolata (voqui blanco), Caldcluvia paniculata (flaca), Greigia sphacelata (chupón), Luzuriaga radicans (quilineja), Cryptocarya alba (peumo), Lardizabala biternata (coile), Pitavia punctata (pitao), Cytisus monspessulanus (lluvia de oro), Sarothamnus scoparius (retamillo), Aristotelia chilensis (maqui), Griselinia scandens (yelmo), Peumus boldus (boldo), Adenopeltis serrata (colliguay macho), Hippeastrum bicolor (añañuca), Lithrea caustica (litre), Ribes punctatum (zarzaparrilla), Aster vahlii (mata negra), Linum macraei (linacillo), Libertia ixioides (calle-calle), Anagallis alternifolia, Chamissonia tenuifolia, Gunnera tinctoria (pangue), Hypericum perforatum (hierba de San José), Lobelia tupa (tupa), Lythrum hyssopifola, Plantago hispidula, Potentilla anserina (canelilla), Persea lingue (lingue), Nothofagus dombeyi (coihue), Laurelia sempervirens (laurel), Lithrea caustica (litre), Azara integrifolia (corcolén), Drimys winteri (canelo), Blepharocalyx divaricatum (temu), Rubus ulmifolius (murra), Ambrosia chamissonis (quinchihue), Distichlis spicata (grama salada).",
        "4.2.2": "Nothofagus obliqua (roble), Nothofagus dombeyi (coihue), Aextoxicon punctatum (olivillo), Blechnum auriculatum (palmilla), Boquila trifoliolata (voqui blanco), Chusquea quila (quila), Cissus striata (pilpil voqui), Eucryphia cordifolia (ulmo), Hydrangea serratifolia (voqui naranjo), Mitraria coccinea (botellita), Pseudopanax laetevirens (sauco del diablo), Sarmienta repens (medallita), Drimys winteri (canelo), Blepharocalyx divaricatum (temu), Myrceugenia exsucca (perra), Cyperus eragrostis (cortadera), Juncus procerus (junquillo), Luma apiculata (arrayán), Gunnera tinctoria (pangue), Avena fatua (teatina), Rumex acetosella (vinagrillo), Agrostis tenuis (piojillo), Crepis capillaris, Vicia sativa (alverjilla), Anthemis cotula (hierba hedionda), Briza minor (tembladera), Cynosorus echinatus, Lolium multiflorum (ballica italiana), Polygonum aviculare (pasto del pollo), Silene gallica (calabacillo), Trifolium repens (trébol blanco), Viola maculata (pilludén), Baccharis racemosa (chilca), Muehlenbeckia thamnifolia (voqui negro), Berberis buxifolia (calafate), Dactylis glomerata (pasto ovillo), Berberis darwinii (michay), Rosa moschata (mosqueta), Echium vulgare (hierba azul), Cynosorus echinatus, Hypericum perforatum (hierba de San José), Verbascum thapsus (mitrún), Vulpia megalura (pasto fino), Acacia dealbata (aromo).",
        "4.2.3": "Nothofagus obliqua (roble), Cryptocarya alba (peumo), Lithrea caustica (litre), Azara integrifolia (corcolén), Drimys winteri (canelo), Blepharocalyx divaricatum (temu), Echium vulgare (hierba azul).",
        "4.2.4": "Nothofagus obliqua (roble), Laurelia sempervirens (laurel), Persea lingue (lingue), Aextoxicon punctatum (olivillo), Blechnum auriculatum (palmilla), Boquila trifoliolata (voqui blanco), Chusquea quila (quila), Cissus striata (pilpil voqui), Gevuina avellana (avellano), Lapageria rosea (copihue), Luma apiculata (arrayán), Luzuriaga radicans (quilineja), Sarmienta repens (medallita), Aristotelia chilensis (maqui), Eucryphia cordifolia (ulmo), Lomatia hirsuta (radal), Osmorhiza chilensis (cacho de cabra), Pseudopanax valdiviense (curaco), Uncina phleoides (quinquin), Podocarpus saligna (mañío de hojas largas), Azara lanceolata (aromo), Berberis darwinii (michay), Nertera granadensis (chaquirita), Amomyrtus luma (luma), Azara lanceolata (aromo), Rhaphithamnus spinosus (huayún), Rubus ulmifolius (murra), Ulex europaeus (espinillo), Berberis buxifolia (calafate), Holcus lanatus (pasto miel), Baccharis racemosa (chilca), Loasa acerifolia (ortiga brava), Agrostis tenuis (piojillo), Hypochaeris radicata (hierba del chancho),Plantago lanceolata (llantén), Trifolium repens (trébol blanco), Prunella vulgaris (hierba mora), Trifolium filiforme, Acaena pinnatifida (cadillo), Centella asiatica, Crepis capillaris, Dactylis glomerata (pasto ovillo), Hypericum perforatum (hierba de San José), Lolium multiflorum (ballica italiana), Lotus corniculatus (lotera), Rumex acetosella (vinagrillo), Trifolium pratense (trébol rosado),Sisymbrium officinale (mostacilla),Cirsium vulgare (cardo negro), Polygonum pesicaria (duraznillo), Ranunculus repens (botón de oro), Rumex obtusifolius (lengua de vaca), Rumex pulcher (romaza), Senecio vulgaris, Taraxacum officinale (diente de león), Plantago major (huinca llantén), Poa annua (piojillo), Polygonum aviculare (pasto del pollo), Lolium perenne (ballica inglesa), Spergularia rubra (taisana), Coronopus didymus (mastuerzo), Juncus imbricatus (cachina), Modiola caroliniana (pila-pila), Plantago barbata, Rumex romassa (romaza), Soliva valdiviana, Gratiola peruviana (contrayerba), Plagiobothrys pratense, Eleocharis pachyphyllum, Limosella acuatica, Potentilla anserina (canelilla), Rorippa sylvestris (berro), Scirpus inundatus (junco), Juncus procerus (junquillo), Agrostis stolonifera, Polygonum australe, Fuchsia magellanica (chilco).",
        "4.3.1": "Nothofagus obliqua (roble), Nothofagus alpina (raulí), Chusquea coleu (colihue), Aristotelia chilensis (maqui), Gaultheria phyllyreaefolia (chaura), Lapageria rosea (copihue), Lomatia dentata (piñol), Lomatia hirsuta (radal), Berberis darwinii (michay), Myoschilos oblonga (codocoipu), Rhaphithamnus spinosus (huayún), Ribes valdivianum (pulul), Nothofagus dombeyi (coihue), Acaena ovalifolia (cadillo), Berberis actinacantha (michay), Drimys winteri (canelo), Maytenus disticha (maitén chico), Osmorhiza chilensis (cacho de cabra), Ribes punctatum (zarzaparrilla), Viola maculata (pilludén), Baccharis obovata (vautro), Geranium berterianum (core-core), Trisetum spicatum, Berberis buxifolia (calafate), Berberis trigona (michay), Discaria serratifolia (chacay), Hordeum comosum (ratonera), Stipa duriuscula (coirón), Cortaderia araucana (cola de zorro), Koeleria phleoides (pasto sedilla),Quinchamalium chilense (quinchamalí), Aextoxicon punctatum (olivillo), Laurelia sempervirens (laurel), Aristotelia chilensis (maqui), Rubus ulmifolius (murra).",
        "4.3.2": "Nothofagus alpina (raulí), Nothofagus dombeyi (coihue), Chusquea coleu (colihue), Gaultheria phyllyreaefolia (chaura), Maytenus magellanica (leña dura), Pseudopanax laetevirens (sauco del diablo), Azara lanceolata (aromo), Boquila trifoliolata (voqui blanco), Dasyphyllum diacanthoides (tayú), Mutisia retusa (clavel del campo), Elytropus chilensis (quilmay), Hydrangea serratifolia (voqui naranjo), Laurelia philippiana (tepa), Lomatia hirsuta (radal), Lomatia ferruginea (fuinque), Laurelia philippiana (tepa), Pernettya myrtilloides (chaura), Ugni molinae (murta), Avena fatua (teatina), Rumex acetosella (vinagrillo), Eucryphia cordifolia (ulmo), Weinmannia trichosperma (tineo), Corynabutilon vitifolum (huella), Pilgerodendron uvifera (ciprés de las Guaytecas), Tepualia stipularis (tepú).",
        "5.1.1": "Aextoxicon punctatum (olivillo), Eucryphia cordifolia (ulmo), Chusquea quila (quila), Gevuina avellana (avellano), Hydrangea serratifolia (voqui naranjo), Laurelia philippiana (tepa), Luma apiculata (arrayán), Luzuriaga radicans (quilineja), Myrceugenia planipes (pitra), Blechnum blechnoides (iquide), Caldcluvia paniculata (flaca), Ctenitis spectabilis (pesebre), Rhaphithamnus spinosus (huayún), Blechnum auriculatum (palmilla), Myrceugenia correaefolia (petrillo), Uncina phleoides (quinquin), Asplenium dareoides (asplenio), Drimys winteri (canelo), Peperomia coquimbensis (congonilla), Urtica magellanica (ortiga), Azara microphylla (chin-chin), Dysopsis glechomoides, Galium aparine (lengua de gato), Griselinia scandens (yelmo), Loasa urmenetae (ortiga brava), Mitraria coccinea (botellita), Nertera granadensis (chaquirita), Ribes punctatum (zarzaparrilla), Sarmienta repens (medallita), Nothofagus dombeyi (coihue), Aristotelia chilensis (maqui), Lomatia dentata (piñol), Persea lingue (lingue), Podocarpus saligna (mañío de hojas largas), Laurelia sempervirens (laurel), Lapageria rosea (copihue), Sophora microphylla (pelú), Viola maculata (pilludén), Weinmannia trichosperma (tineo), Azara lanceolata (aromo), Lomatia ferruginea (fuinque), Amomyrtus luma (luma), Dasyphyllum diacanthoides (tayú), Lophosoria quadripinnata (ampe), Pseudopanax laetevirens (sauco del diablo), Blechnum chilense (quilquil), Cissus striata (pilpil voqui), Pseudopanax valdiviense (curaco), Amomyrtus meli (meli), Corynabutilon vitifolium (huella), Baccharis sphaerocephala (radín), Buddleja globosa (matico), Digitalis purpurea (dedalera), Stellaria cuspidata (quilloiquilloi), Gnaphalium cheiranthifolium (té de burro), Greigia sphacelata (chupón), Loasa acanthifolia (ortiga brava), Senecio cymosus (palpalén), Berberis buxifolia (calafate), Berberis darwinii (michay), Gaultheria phyllyreaefolia (chaura), Rubus ulmifolius (murra), Ungi molinae (murta), Agrostis tenuis (piojillo), Holcus lanatus (pasto miel), Muehlenbeckia thamnifolia (voqui negro), Ulex europaeus (espinillo), Juncus bufonius (junquillo), Juncus planifolius (quira del cieno), Juncus stipulatus (junquillo), Scirpus inundatus (junco), Anagallis alternifolia, Nothofagus alpina (raulí), Plantago major (huinca llantén), Poa annua (piojillo), Sisymbrium officinale (mostacilla),Dactylis glomerata (pasto ovillo), Juncus procerus (junquillo), Lotus corniculatus (lotera), Fuchsia magellanica (chilco), Pernettya myrtilloides (chaura).",
        "5.1.2": "Nothofagus dombeyi (coihue), Laurelia philippiana (tepa), Amomyrtus luma (luma), Asteranthera ovata (estrellita), Chusquea quila (quila), Dasyphyllum diacanthoides (tayú), Lomatia ferruginea (fuinque), Myrceugenia planipes (pitra), Weinmannia trichosperma (tineo), Azara lanceolata (aromo), Caldcluvia paniculata (tiaca), Hydrangea serratifolia (voqui naranjo), Luma apiculata (arrayán), Luzuriaga radicans (quilineja), Nertera granadensis (chaquirita), Pseudopanax laetevirens (sauco del diablo), Saxegothaea conspicua (mañío hembra), Fuchsia magellanica (chilco), Mitraria coccinea (botellita), Blechnum blechnoides (iquide), Cyperus eragrostis (cortadera), Chrysosplenium valdivianum, Pteris semiadnata (pesebre), Myrceugenia exsucca (petra), Aextoxicon punctatum (olivillo), Blechnum chilense (quilquil), Drimys winteri (canelo), Rhaphithamnus spinosus (huayún), Pernettya myrtilloides (chaura), Baccharis obovata (vautro), Agrostis leptotricha (pasto de la perdiz), Lomatia hirsuta (radal), Myoschilos oblonga (codocoipu), Berberis darwinii (michay), Blechnum chilense (quilquil), Digitalis purpurea (dedalera), Hypolepis rugosula (huilel-lahuén),Muehlenbeckia thamnifolia (voqui negro), Eucryphia cordifolia (ulmo), Persea lingue (lingue), Juncus bufonius (junquillo), Juncus planifolius (quira del cieno).",
        "5.1.3": "Nothofagus nitida (coihue de Chiloé), Podocarpus nubigena (mañío macho), Amomyrtus luma (luma), Chusquea quila (quila), Drimys winteri (canelo), Laurelia philippiana (tepa), Saxegothaea conspicua (mañío hembra), Weinmannia trichosperma (tineo), Asteranthera ovata (estrellita), Blechnum magellanicum (kattalapi), Desfontainia spinosa (taique), Griselinia ruscifolia (lilinquén), Lophosoria quadripinnata (ampe), Luzuriaga radicans (quilineja), Mitraria coccinea (botellita), Nertera granadensis (chaquirita), Pseudopanax laetevirens (sauco del diablo), Tepualia stipularis (tepú), Lomatia ferruginea (fuinque), Embothrium coccineum (notro), Aristotelia chilensis (maqui), Azara lanceolata (aromo), Ribes valdivianum (pulul), Acaena ovalifolia (cadillo), Gunnera tinctoria (pangue), Holcus lanatus (pasto miel), Hydrangea serratifolia (voqui naranjo), Nothofagus betuloides (coihue de Magallanes), Poa pratensis (pasto azul), Prunella vulgaris (hierba mora), Ranunculus repens (botón de oro), Luma apiculata (arrayán), Rubus ulmifolius (murra), Ulex europaeus (espinillo), Berberis buxifolia (calafate), Corynabutilon vitifolium (huella), Pernettya mucronata (chaura), Agrostis tenuis (piojillo), Plantago major (huinca llantén), Poa annua (piojillo), Sisymbrium officinale (mostacilla),Avena barbata (teatina), Rumex acetosella (vinagrillo), Juncus bufonius (junquillo), Juncus planifolius (quira del cieno), Juncus procerus (junquillo), Lotus corniculatus (lotera).",
        "5.1.4": "Nothofagus dombeyi (coihue), Gevuina avellana (avellano), Desfontainia spinosa (taique), Embothrium coccineum (notro), Gaultheria phyllyreaefolia (chaura), Lomatia hirsuta (radal), Ungi molinae (murta), Baccharis obovata (vautro), Nothofagus antarctica (ñirre), Ovidia pillopillo (pillopillo), Pernettya mucronata (chaura), Agrostis tenuis (piojillo), Blechnum penna-marina (pinque), Berberis darwinii (michay), Nothofagus betuloides (coihue de Magallanes), Chusquea macrostachya (taihuén), Fitzroya cupressoides (alerce), Pilgerodendron uvifera (ciprés de las Guaytecas), Tepualia stipularis (tepú).",
        "5.2.1": "Nothomyrcia fernandeziana (luma), Drimys confertifolia (canelo), Bohemeria excelsa (manzano), Coprosma pyrifolia (peralillo), Chusquea fernandeziana, Escallonia callcottiae, Fagara mayu (naranjillo), Peperomia fernadeziana (congonilla), Rhaphithamnus venustus (juan bueno), Juania australis (chonta), Cuminia fernandeziana (cuminia), Azara fernandeziana, Rhetinodendron berterii, Ochagavia elegans, Ugni selkirkii (murtilla), Dicksonia berteriana (helecho arbóreo), Thyrsopteris elegans, Stipa neesiana (flechilla), Polypogon chilense, Machaerina scirpoidea, Acaena ovalifolia (cadillo), Nicotiana cordifolia (tabaco cimarrón).",
        "5.2.2": "Fagara externa (naranjillo), Myrceugenia schulzei (luma), Drimys confertifolia (canelo), Dendroseris gigantea (col arbórea), Rhaphithamnus venustus (juan bueno), Coprosma pyrifolia (peralillo), Dicksonia externa (helecho arbóreo), Gunnera masafuerae (pangue), Peperomia fernadeziana (congonilla), Stipa laevissima (coironcillo), Stipa neesiana (flechilla), Polypogon chilense, Acaena ovalifolia (cadillo), Empetrum rubrum (brecillo), Rubus geoides (miñe miñe), Myrteola nummularia, Acaena masafuerana (abrojo), Lagenophora hariotii, Nertera granadensis (chaquirita), Pernettya rigida (chaura), Uncinia tenuis (chipica).",
        "6.1.1": "Caltha appendiculata (maillico), Berberis empetrifolia (zarcilla), Cardamine glacialis (berro), Ourisia racemosa, Ranunculus peduncularis, Senecio fistulosus, Azorella lycopodioides (llareta), Calceolaria foliosa (topa-topa), Epilobium nivale (linacita), Escallonia alpina, Gamocarpha poeppigii, Hypochaeris acaulis (achicoria), Nassauvia aculeata, Nassauvia revoluta (cadislao), Plantago barbata, Tristagma nivale, Viola cotyledon (hierba del corazón), Baccharis patagonica (vautro patagónico), Stipa neaei (coirón pluma), Discaria serratifolia (chacay), Colletia spinosa (crucero).",
        "6.1.2": "Nothofagus pumilio (lenga), Nothofagus antarctica (ñirre), Escallonia alpina, Maytenus disticha (maitén chico), Pernettya myrtilloides (chaura), Viola maculata (pilludén), Valeriana lapathifolia (guahuilque).",
        "6.1.3": "Araucaria araucana (araucaria), Nothofagus pumilio (lenga), Adenocaulon chilense, Codonorchis lessonii (palomita), Chusquea coleu (colihue), Lycopodium magellanicum (pimpinela), Maytenus disticha (maitén chico), Anemone antucensis (anemona), Berberis buxifolia (calafate), Berberis pearcei, Chiliotrichum diffusum (mata verde), Fragaria chiloensis (frutilla), Lagenophora hirsuta, Macrachaenium gracile, Perezia prenanthoides (estrella de los Andes), Viola maculata (pilludén), Nothofagus dombeyi (coihue), Pseudopanax laetevirens (sauco del diablo), Desfontainia spinosa (taique), Drimys winteri var. andina (canelillo), Libertia ixioides (calle-calle), Myoschilos oblonga (codocoipu), Embothrium coccineum (notro), Escallonia virgata (chapel), Maytenus magellanica (leña dura), Osmorhiza chilensis (cacho de cabra), Pernettya mucronata (chaura), Festuca scabriuscula, Poa obvalata, Quinchamalium chilense (quinchamalí), Adesmia emarginata (paramilla), Empetrum rubrum (brecillo), Perezia pediculariaefolia, Pernettya pumila (chaurilla), Poa julietii, Senecio julietii, Valeriana fonckii (papilla), Azara alpina (corcolén), Berberis linearifolia (calafate), Ribes cucullatum (parrillita), Ranunculus peduncularis.",
        "6.1.4": "Araucaria araucana (araucaria), Nothofagus pumilio (lenga), Nothofagus dombeyi (coihue), Nothofagus antarctica (ñirre), Gevuina avellana (avellano), Nothofagus alpina (raulí), Nothofagus obliqua (roble), Aristotelia chilensis (maqui), Rubus ulmifolius (murra).",
        "6.1.5": "Araucaria araucana (araucaria), Festuca scabriuscula, Poa obvalata, Quinchamalium chilense (quinchamalí), Adesmia emarginata (paramilla), Empetrum rubrum (brecillo), Escallonia virgata (chapel), Perezia pediculariaefolia, Pernettya pumila (chaurilla), Poa julietii, Senecio julietii, Valeriana fonckii (papilla), Azara alpina (corcolén), Berberis linearifolia (calafate), Ribes cucullatum (parrillita), Caltha appendiculata (maillico), Codonorchis lessonii (palomita), Nothofagus antarctica (ñirre), Ranunculus peduncularis, Discaria serratifolia (chacay), Colletia spinosa (yáquil), Acaena pinnatifida (cadillo), Berberis buxifolia (calafate), Bromus macranthus, Cortaderia araucana (cola de zorro), Mulinum spinosum (neneo), Acaena leptacantha (abrojo), Agrostis tenuis (piojillo), Cynosorus echinatus, Echium vulgare (hierba azul), Galium chilense (lengua de gato), Koeleria phleoides (pasto sedilla),Stipa duriuscula (coirón), Nothofagus obliqua (roble), Baccharis obovata (vautro), Baccharis patagonica (vautro patagónico), Stipa neaei (coirón pluma).",
        "6.2.1": "Nothofagus pumilio (lenga), Drimys winteri var. andina (canelillo), Berberis montana (palo amarillo), Embothrium coccineum (notro), Macrachaenium gracile, Maytenus disticha (maitén chico), Ovidia andina (traro voqui), Ranunculus peduncularis, Senecio acanthifolius, Valeriana lapathifolia (guahuilque), Carex trichodes, Escallonia alpina, Gunnera magellanica (pangue), Nothofagus antarctica (ñirre), Ribes cucullatum (parrillita), Rubus geoides (miñe-miñe), Nothofagus betuloides (coihue de Magallanes), Ribes cucullatum (parrillita), Adesmia longipes, Azorella incisa (llareta).",
        "6.2.2": "Austrocedrus chilensis (ciprés de la cordillera), Lomatia hirsuta (radal), Aristotelia chilensis (maqui), Maytenus boaria (maitén), Colletia spinosa (yáquil), Chusquea coleu (colihue), Discaria serratifolia (chacay), Fragaria chiloensis (frutilla), Nothofagus betuloides (coihue de Magallanes), Nothofagus pumilio (lenga).",
        "6.2.3": "Nothofagus antarctica (ñirre), Berberis buxifolia (calafate), Azorella caespitosa (llareta), Pernettya pumila (chaurilla), Poa pratensis (pasto azul), Ranunculus peduncularis, Trisetum canescens, Acaena ovalifolia (cadillo), Alopecurus magellanicus, Anemone multifida (anemona), Blechnum penna-marina (pinque), Deschampsia flexuosa, Galium antarcticum (lengua de gato), Macrachaenium gracile, Nothofagus pumilio (lenga), Ribes cucullatum (parrillita), Adenocaulon chilense, Drimys winteri var. andina (canelillo), Perezia prenanthoides (estrella de los Andes), Berberis empetrifolia (zarcilla), Osmorhiza chilensis (cacho de cabra), Ribes magellanicum (nulul), Rubus geoides (miñe-miñe), Valeriana laxiflora, Viola maculata (pilludén), Oreobolus obtusangulus (erizo), Empetrum rubrum (brecillo).",
        "6.2.4": "Nothofagus betuloides (coihue de Magallanes), Nothofagus pumilio (lenga), Adenocaulon chilense, Macrachaenium gracile, Maytenus disticha (maitén chico), Valeriana lapathifolia (guahuilque), Berberis pearcei, Chusquea macrostachya (taihuén), Desfontainia spinosa (taique), Dysopsis glechomoides, Lagenophora hirsuta, Osmorhiza chilensis (cacho de cabra), Ribes magellanicum (nulul), Viola maculata (pilludén), Pernettya mucronata (chaura), Chiliotrichum diffusum (mata verde), Acaena pinnatifida (cadillo), Acaena ovalifolia (cadillo), Baccharis obovata (vautro), Berberis buxifolia (calafate), Blechnum penna-marina (pinque), Embothrium coccineum (notro), Fragaria chiloensis (frutilla), Taraxacum officinale (diente de león), Dactylis glomerata (pasto ovillo), Holcus lanatus (pasto miel), Plantago lanceolata (llantén), Poa pratensis (pasto azul), Rumex acetosella (vinagrillo), Trifolium repens (trébol blanco), Cerastium arvense, Geranium berterianum (core-core), Blechnum penna-marina (pinque), Ovidia andina (traro voqui), Embothrium coccineum (notro), Baccharis obovata (vautro), Colletia spinosa (yáquil), Schinus patagonicus (huingán), Polystichum mohrioides, Baccharis patagonica (vautro), Acaena splendens (cadillo), Festuca pallescens (coirón), Calceolaria uniflora, Mulinum spinosum (neneo), Maytenus disticha (maitén chico), Lomatia hirsuta (radal), Nothofagus betuloides (coihue de Magallanes).",
        "6.2.5": "Nothofagus pumilio (lenga), Maytenus disticha (maitén chico), Acaena ovalifolia (cadillo), Adenocaulon chilense, Berberis ilicifolia (tchelia), Berberis buxifolia (calafate), Codonorchis lessonii (palomita), Chiliotrichum diffusum (mata verde), Lagenophora hariotii, Macrachaenium gracile, Osmorhiza chilensis (cacho de cabra), Pernettya mucronata (chaura), Rubus geoides (miñe-miñe), Senecio acanthifolius, Valeriana lapathifolia (guahuilque), Viola maculata (pilludén), Nothofagus antarctica (ñirre), Nothofagus betuloides (coihue de Magallanes), Drimys winteri (canelo), Bolax gummifera (llareta), Pernettya pumila (chaurilla), Empetrum rubrum (brecillo), Sphagnum magellanicum.",
        "7.1.1": "Fitzroya cupressoides (alerce), Tepualia stipularis (tepú), Desfontainia spinosa (taique), Drimys winteri (canelo), Asteranthera ovata (estrellita), Nothofagus nitida (coihue de chiloé), Philesia magellanica (coicopihue), Pilgerodendron uvifera (ciprés de las Guaytecas), Podocarpus nubigena (mañío macho), Embothrium coccineum (notro), Saxegothaea conspicua (mañío hembra), Chusquea montana (tihuén), Gaultheria antarctica (chaurita), Nothofagus betuloides (coihue de Magallanes), Oreobolus obtusangulus (erizo), Berberis serrato-dentata (michay), Blechnum magellanicum (kattalapi), Pernettya mucronata (chaura), Nothofagus nitida (coihue de Chiloé), Astelia pumila.",
        "7.1.2": "Fitzroya cupressoides (alerce), Nothofagus betuloides (coihue de Magallanes), Desfontainia spinosa (taique), Drimys winteri var. andina (canelillo), Asteranthera ovata (estrellita), Azara lanceolata (aromo), Blechnum magellanicum (kattalapi), Chusquea coleu (colihue), Embothrium coccineum (notro), Gaultheria phyllyreaefolia (chaura), Maytenus magellanica (leña dura), Myrceugenia chrysocarpa (pitrilla),Podocarpus nubigena (mañío macho), Pseudopanax laetevirens (sauco del diablo), Saxegothaea conspicua (mañío hembra), Nothofagus nitida (coihue de Chiloé), Chusquea macrostachya (taihuén).",
        "7.1.3": "Pilgerodendron uvifera (ciprés de las Guaytecas), Tepualia stipularis (tepú), Drimys winteri (canelo), Blechnum chilense (quilquil), Lomatia ferruginea (fuinque), Nothofagus nitida (coihue de chiloé), Weinmannia trichosperma (tineo), Campsidium valdiviense (voqui bejuco), Desfontainia spinosa (taique), Embothrium coccineum (notro), Myrceugenia parvifolia (chilchilco), Nothofagus betuloides (coihue de Magallanes), Podocarpus nubigena (mañío macho), Saxegothaea conspicua (mañio hembra), Gevuina avellana (avellano), Philesia magellanica (coicopihue), Berberis ilicifolia (tchelia), Gleichenia quadripartita (yerba loza), Lebetanthus myrsinites (chaurilla),Pernettya mucronata (chaura), Pseudopanax laetevirens (sauco del diablo), Fitzroya cupressoides (alerce).",
        "7.1.4": "Pilgerodendron uvifera (ciprés de las Guaytecas), Astelia pumila, Donatia fascicularis (donacia), Oreobolus obtusangulus (erizo), Baccharis magellanica (mosaico), Desfontainia spinosa (taique), Drimys winteri (canelo), Embothrium coccineum (notro), Nothofagus betuloides (coihue de Magallanes), Nothofagus antarctica (ñirre), Philesia magellanica (coicopihue), Podocarpus nubigena (mañío macho), Chusquea montana (tihuén), Drosera uniflora (atrapamosca), Myrteola nummularia, Schizaea fistulosa, Nothofagus nitida (coihue de chiloé), Lomatia ferruginea (fuinque), Weinmannia trichosperma (tineo), Eucryphia cordifolia (ulmo).",
        "7.1.5": "Nothofagus betuloides (coihue de Magallanes), Podocarpus nubigena (mañío macho), Desfontainia spinosa (taique), Drimys winteri (canelo), Lebetanthus myrsinites (chaurilla),Philesia magellanica (coicopihue), Blechnum magellanicum (kattalapi), Pseudopanax laetevirens (sauco del diablo), Campsidium valdiviense (voqui bejuco), Luzuriaga marginata (quilineja), Maytenus magellanica (leña dura), Mitraria coccinea (botellita), Weinmannia trichosperma (tineo), Nothofagus nitida (coihue de Chiloé), Eucryphia cordifolia (ulmo), Chusquea macrostachya (taihuén), Chusquea quila (quila), Fuchsia magellanica (chilco), Aristotelia chilensis (maqui), Juncus procerus (junquillo), Lotus corniculatus (lotera).",
        "7.2.1": "Nothofagus betuloides (coihue de Magallanes), Laurelia philippiana (tepa), Amomyrtus luma (luma), Azara lanceolata (aromo), Blechnum chilense (quilquil), Chusquea argentina, Fuchsia magellanica (chilco), Hydrangea serratifolia (voqui naranjo), Luzuriaga radicans (quilineja), Mitraria coccinea (botellita), Ribes valdivianum (pulul), Saxegothaea conspicua (mañío hembra), Asplenium dareoides (asplenio), Asteranthera ovata (estrellita), Blechnum blechnoides (iquide), Chusquea quila (quila), Lagenophora hirsuta, Weinmannia trichosperma (tineo), Chusquea macrostachya (taihuén), Adenocaulon chilense, Drimys winteri var. andina (canelillo), Maytenus magellanica (leña dura), Myrceugenia chrysocarpa (pitrilla),Valeriana lapathifolia (guahuilque), Viola reichei (violeta amarilla), Berberis serrato-dentata (michay), Berberis buxifolia (calafate), Chusquea coleu (colihue), Maytenus boaria (maitén), Blechnum penna-marina (pinque), Fragaria chiloensis (frutilla), Holcus lanatus (pasto miel), Hypochaeris radicata (hierba del chancho), Ribes magellanicum (nulul), Taraxacum officinale (diente de león), Trifolium repens (trébol blanco), Poa pratensis (pasto azul), Prunella vulgaris (hierba mora), Acaena ovalifolia (cadillo), Cirsium vulgare (cardo negro), Dactylis glomerata (pasto ovillo), Hypolepis rugosula (huilel-lahuén),Plantago major (huinca llantén), Ranunculus repens (botón de oro), Rumex acetosella (vinagrillo), Rhaphithamnus spinosus (huayún), Veronica arvensis (verónica).",
        "7.2.2": "Nothofagus betuloides (coihue de Magallanes), Berberis serrato-dentata (michay), Nothofagus pumilio (lenga), Pernettya mucronata (chaura), Acaena ovalifolia (cadillo), Adenocaulon chilense, Geranium berterianum (core-core), Hypochaeris radicata (hierba del chancho), Osmorhiza chilensis (cacho de cabra), Ovidia andina (traro voqui), Ribes magellanicum (nulul), Trifolium repens (trébol blanco), Viola maculata (pilludén), Nothofagus antarctica (ñirre), Escallonia serrata (siete camisas),Berberis ilicifolia (tchelia), Lebetanthus myrsinites (chaurilla),Drimys winteri (canelo), Luzuriaga marginata (quilineja), Philesia magellanica (coicopihue), Chiliotrichum diffusum (mata verde), Holcus lanatus (pasto miel).",
        "7.2.3": "Nothofagus betuloides (coihue de Magallanes), Drimys winteri (canelo), Berberis ilicifolia (tchelia), Desfontainia spinosa (taique), Gleichenia quadripartita (yerba loza), Lebetanthus myrsinites (chaurilla),Luzuriaga marginata (quilineja), Pernettya mucronata (chaura), Philesia magellanica (coicopihue), Maytenus magellanica (leña dura), Pseudopanax laetevirens (sauco del diablo), Senecio acanthifolius, Uncinia tenuis (chipica), Chiliotrichum diffusum (mata verde), Empetrum rubrum (brecillo), Escallonia serrata (siete camisas),Gunnera magellanica (pangue), Hierochloe redolens, Marsippospermum grandiflorum, Hierochloe redolens, Nothofagus antarctica (ñirre), Grammitis magellanica (calahuala), Embothrium coccineum (notro), Ribes magellanicum (nulul), Acaena ovalifolia (cadillo), Acaena magellanica (cadillo), Adenocaulon chilense, Berberis buxifolia (calafate), Blechnum penna-marina (pinque), Macrachaenium gracile, Bolax gummifera (llareta), Pernettya pumila (chaurilla).",
        "7.2.4": "Nothofagus betuloides (coihue de Magallanes), Pernettya mucronata (chaura), Escallonia serrata (siete camisas),Gunnera magellanica (pangue), Lebetanthus myrsinites (chaurilla),Luzuriaga marginata (quilineja), Uncinia tenuis (chipica), Blechnum magellanicum (kattalapi), Nothofagus antarctica (ñirre), Rubus geoides (miñe-miñe), Drimys winteri (canelo), Empetrum rubrum (brecillo), Azorella caespitosa (llareta), Astelia pumila, Donatia fascicularis (donacia), Nothofagus pumilio (lenga).",
        "7.3.1": "Nothofagus nitida (coihue de Chiloé), Podocarpus nubigena (mañío macho), Pilgerodendron uvifera (ciprés de las Guaytecas), Tepualia stipularis (tepú).",
        "7.3.2": "Nothofagus antarctica (ñirre), Gunnera magellanica (pangue), Chiliotrichum diffusum (mata verde), Hierochloe redolens, Senecio acanthifolius, Berberis buxifolia (calafate), Blechnum penna-marina (pinque), Codonorchis lessonii (palomita), Marsippospermum grandiflorum, Pernettya mucronata (chaura), Nothofagus betuloides (coihue de Magallanes), Oreobolus obtusangulus (erizo), Empetrum rubrum (brecillo), Astelia pumila, Donatia fascicularis (donacia).",
        "7.3.3": "Oreobolus obtusangulus (erizo), Donatia fascicularis (donacia), Empetrum rubrum (brecillo), Astelia pumila, Caltha appendiculata (maillico), Gunnera magellanica (pangue), Lepidothamnus fonckii (ciprés enano), Myrteola nummularia, Nanodea muscosa, Perezia magellanica, Pilgerodendron uvifera (ciprés de las Guaytecas), Nothofagus nitida (coihue de Chiloé), Tepualia stipularis (tepú), Philesia magellanica (coicopihue), Nothofagus betuloides (coihue de Magallanes), Podocarpus nubigena (mañío macho), Nothofagus antarctica (ñirre), Escallonia serrata (siete camisas).",
        "7.3.4": "Astelia pumila, Donatia fascicularis (donacia), Acaena pumila (cadillo), Berberis ilicifolia (tchelia), Caltha dionaefolia (maillico), Festuca thermarum (coirón), Myrteola nummularia, Nothofagus betuloides (coihue de Magallanes), Oreobolus obtusangulus (erizo), Schoenus andinus (junquillo), Tapeinia pumila, Caltha appendiculata (maillico), Carpha alpina (chango), Chiliotrichum diffusum (mata verde), Gaimardia australis (pasto de turbal), Gaultheria antarctica (chaurita), Marsippospermum grandiflorum, Perezia magellanica, Azorella lycopodioides (llareta), Drosera uniflora (atrapamosca), Gunnera lobata (pangue), Nothofagus antarctica (ñirre), Pilgerodendron uvifera (ciprés de las Guaytecas), Lepidothamnus fonckii (ciprés enano), Bolax gummifera (llareta), Pernettya pumila (chaurilla), Abrotanella emarginata, Azorella lycopodioides (llareta), Drapetes muscosus, Luzula alopecurus, Azorella selago (llareta), Caltha dionaefolia (maillico), Empetrum rubrum (brecillo), Trisetum spicatum, Calceolaria uniflora, Nassauvia pygmaea (escarapela), Viola tridentata (violeta del campo), Sphagnum magellanicum, Luzuriaga marginata (quilineja), Pernettya mucronata (chaura), Philesia magellanica (coicopihue), Senecio acanthifolius, Blechnum penna-marina (pinque), Lebetanthus myrsinites (chaurilla), Azorella caespitosa (llareta), Abrotanella emarginata, Colobanthus subulatus (clavelito), Escallonia serrata (siete camisas), Festuca magellanica (coirón), Gunnera magellanica (pangue), Luzula alopecurus, Senecio darwinii, Carpha alpina (chango), Festuca thermarum (coirón), Berberis ilicifolia (tchelia), Schoenus andinus (junquillo).",
        "7.3.5": "Astelia pumila, Donatia fascicularis (donacia), Empetrum rubrum (brecillo), Marsippospermum grandiflorum, Bolax gummifera (llareta), Pernettya pumila (chaurilla), Empetrum rubrum (brecillo), Azorella caespitosa (llareta), Nothofagus antarctica (ñirre), Nothofagus betuloides (coihue de Magallanes), Hierochloe redolens, Chiliotrichum diffusum (mata verde), Drimys winteri (canelo).",
        "8.1.1": "Baccharis patagonica (vautro patagónico), Stipa neaei (coirón pluma), Senecio bracteolatus, Poa scaberula, Ribes cucullatum (parrillita), Stipa speciosa (coirón amargo), Acaena leptacantha (cadillo), Acaena splendens (cadillo), Anemone multifida (anemona), Bromus macranthus, Fragaria chiloensis (frutilla), Geranium berterianum (core-core), Mulinum spinosum (neneo), Mulinum leptacanthum (espinillo), Stipa duriuscula (coirón), Nothofagus antarctica (ñirre), Festuca pallescens (coirón), Hordeum comosum (ratonera), Poa spicaeformis, Elymus patagonicus, Rhytidosperma picta, Rumex acetosella (vinagrillo), Galium fuegianum (lengua de gato), Sisyrinchium patagonicum, Deschampsia elongata, Adesmia longipes, Azorella incisa (llareta), Perezia pediculariaefolia, Senecio julietii, Hypochaeris arenaria, Lucilia frigida, Nassauvia revoluta (cadislao), Nassauvia ramosissima (escarapela),Acaena pinnatifida (cadillo), Viola maculata (pilludén), Phacelia pinnatifida (seboso), Valeriana carnosa (papilla), Colliguaja integerrima (duraznillo), Senecio neaei, Adesmia boronioides (paramela), Erodium cicutarium (alfilerillo), Stipa brevipes (paja del campo), Vulpia dertonensis (pasto fino), Baccharis obovata (vautro), Berberis buxifolia (calafate), Calceolaria biflora, Cerastium arvense, Discaria serratifolia (chacay), Schinus patagonicus (huingán), Embothrium coccineum (notro), Nothofagus antarctica (ñirre).",
        "8.2.1": "Festuca gracillima (coirón dulce), Armeria maritima (siempreviva), Bromus setifolius var. brevifolius, Festuca magellanica (coirón), Phaiophleps biflora, Poa alopecurus, Poa pratensis (pasto azul), Trisetum spicatum, Acaena pinnatifida (cadillo), Azorella caespitosa (llareta), Draba magellanica (draba), Senecio kingii, Stipa humilis (lomillo), Acaena platyacantha (abrojo), Baccharis magellanica (mosaico), Berberis empetrifolia (zarcilla), Calceolaria uniflora, Stipa brevipes (paja del campo), Hordeum comosum (ratonera), Deschampsia antarctica (coironcillo), Acaena trifurcata, Carex acaulis (junquillo), Carex subantarctica, Juncus scheuchzerioides (junquillo), Puccinellia magellanica, Ranunculus chilensis (cáustico de vega), Ranunculus peduncularis, Chiliotrichum diffusum (mata verde), Gentianella magellanica (genciana),Acaena magellanica (cadillo), Calceolaria biflora, Cerastium arvense, Cotula scariosa (manzanilla), Schizeilema ranunculus, Berberis buxifolia (calafate), Geum magellanicum (quillón), Hierochloe redolens, Phleum alpinum (timoteo), Primula magellanica (primula), Lepidophyllum cupressiforme (mata negra), Acaena sericea (cadillo), Myosotis discolor, Phacelia pinnatifida (seboso), Valeriana carnosa (papilla), Elymus arenarius, Nardophyllum bryoides, Senecio patagonicus, Drimys winteri (canelo), Maytenus magellanica (leña dura)."
      };


      const handleRegionChange = (e) => {
        const regionId = e.target.value;
        setSelectedRegion(regionId);
        setSelectedSubRegion('');
        setSelectedFormation('');
      };

      const handleSubRegionChange = (e) => {
        const subRegionId = e.target.value;
        setSelectedSubRegion(subRegionId);
        setSelectedFormation('');
      };

      const handleFormationChange = (e) => {
        setSelectedFormation(e.target.value);
      };

      const getSubRegions = () => {
        if (!selectedRegion || !vegetationData[selectedRegion]) return {};
        return vegetationData[selectedRegion].subRegions;
      };

      const getFormations = () => {
        if (!selectedRegion || !selectedSubRegion || !vegetationData[selectedRegion]?.subRegions[selectedSubRegion]) return {};
        return vegetationData[selectedRegion].subRegions[selectedSubRegion].formations;
      };

      const getFormationDescription = () => {
        if (!selectedRegion || !selectedSubRegion || !selectedFormation) return '';
        const formation = vegetationData[selectedRegion]?.subRegions[selectedSubRegion]?.formations[selectedFormation];
        return formation?.description || '';
      };
      
      const getFormationSpecies = () => {
        if (!selectedFormation) return '';
        return speciesData[selectedFormation] || 'No hay datos de especies para esta formación.';
      };

      return (
        <div className="app-container">
          <div className="card">
            <h1 className="title">
              Formaciones Vegetacionales de Chile
            </h1>
            <p className="subtitle">
              Según Gajardo 1994
            </p>
            
            <div className="space-y-6">
              {/* Selector de Región */}
              <div className="select-container">
                <label className="select-label">
                  1. Selecciona una Región:
                </label>
                <select 
                  value={selectedRegion} 
                  onChange={handleRegionChange}
                  className="select-box"
                >
                  <option value="">-- Selecciona una región --</option>
                  {Object.entries(vegetationData).map(([key, region]) => (
                    <option key={key} value={key}>
                      Región {key}: {region.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selector de Sub-región */}
              {selectedRegion && (
                <div className="select-container">
                  <label className="select-label">
                    2. Selecciona una Sub-región:
                  </label>
                  <select 
                    value={selectedSubRegion} 
                    onChange={handleSubRegionChange}
                    className="select-box"
                  >
                    <option value="">-- Selecciona una sub-región --</option>
                    {Object.entries(getSubRegions()).map(([key, subRegion]) => (
                      <option key={key} value={key}>
                        {key}: {subRegion.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Selector de Formación */}
              {selectedSubRegion && (
                <div className="select-container">
                  <label className="select-label">
                    3. Selecciona una Formación:
                  </label>
                  <select 
                    value={selectedFormation} 
                    onChange={handleFormationChange}
                    className="select-box"
                  >
                    <option value="">-- Selecciona una formación --</option>
                    {Object.entries(getFormations()).map(([key, formation]) => (
                      <option key={key} value={key}>
                        {key}: {formation.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Descripción */}
              {selectedFormation && (
                <div className="description-box">
                  <h3 className="description-title">
                    Descripción de la Formación
                  </h3>
                  <div className="description-text">
                    {getFormationDescription()}
                  </div>
                </div>
              )}

              {/* Especies Asociadas */}
              {selectedFormation && (
                <div className="species-box">
                  <h3 className="species-title">
                    Especies Asociadas
                  </h3>
                  <div className="species-text">
                    {getFormationSpecies()}
                  </div>
                </div>
              )}
            </div>
            
            <div className="footer">
              <p>© 2025 LBC Consultores Ambientales</p>
              <p>Autor: david.vasquez@lbconservation.org</p>
            </div>
          </div>
        </div>
      );
    };

//==================================================================
// COMPONENTE 3: PANEL DE CLIMA (tu código original adaptado)
//==================================================================
const ClimateSelector = () => {
      const [selectedClimateCode, setSelectedClimateCode] = useState('');

      const climateData = [
        {
          code: "ET",
          name: "Tundra por Altura",
          description: "Esta clasificación climática se caracteriza por temperaturas medias anuales por debajo de 10°C debido a la elevación de los Andes, con precipitaciones escasas que generalmente ocurren en forma de nieve durante los meses de invierno. La vegetación es limitada y está adaptada a condiciones de alta montaña, con una estación de crecimiento muy corta y condiciones ambientales extremas que definen este ecosistema de alta altitud."
        },
        {
          code: "BWk",
          name: "Desértico Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de 200 mm anuales) y temperaturas medias anuales inferiores a 18°C, típico de las regiones del Desierto de Atacama y zonas áridas del norte de Chile. Las condiciones de alta presión atmosférica y la influencia de la corriente fría de Humboldt generan un ambiente desértico con amplias oscilaciones térmicas diarias y una vegetación prácticamente inexistente."
        },
        {
          code: "Csb",
          name: "Mediterráneo de Verano Templado",
          description: "Esta clasificación climática se caracteriza por un régimen de precipitaciones concentradas en los meses de invierno (mayo-agosto) con veranos secos y templados, donde las temperaturas del mes más cálido no superan los 22°C. La influencia oceánica modera las temperaturas extremas y reduce la amplitud térmica anual, generando condiciones climáticas favorables para el desarrollo de vegetación esclerófila y actividades agrícolas de la zona centro-sur de Chile."
        },
        {
          code: "BSk",
          name: "Semiárido Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones escasas (entre 200-400 mm anuales) concentradas principalmente en los meses de invierno, con temperaturas medias anuales inferiores a 18°C y veranos relativamente secos. Este clima de transición entre las zonas áridas del norte y las templadas del sur se presenta principalmente en la precordillera y valles interiores, donde la continentalidad acentúa las oscilaciones térmicas y limita el desarrollo de la vegetación a especies adaptadas a la aridez."
        },
        {
          code: "Cfb",
          name: "Templado Oceánico",
          description: "Esta clasificación climática se caracteriza por precipitaciones distribuidas durante todo el año sin estación seca marcada, con temperaturas moderadas donde el mes más cálido no supera los 22°C y el más frío se mantiene sobre los 0°C. La fuerte influencia oceánica del Pacífico modera las temperaturas extremas y mantiene una humedad constante, generando condiciones favorables para el desarrollo de bosques templados y una vegetación exuberante típica del sur de Chile."
        },
        {
          code: "Cfc",
          name: "Templado Oceánico Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones abundantes durante todo el año sin estación seca definida, con temperaturas frescas donde el mes más cálido presenta menos de 4 meses con temperaturas superiores a 10°C. La influencia oceánica austral genera condiciones de alta humedad y temperaturas moderadamente bajas, favoreciendo el desarrollo de bosques siempreverdes y una vegetación adaptada a condiciones de frío y humedad constante en las regiones más australes del país."
        },
        {
          code: "Csc",
          name: "Mediterráneo Frío",
          description: "Esta clasificación climática se caracteriza por un régimen de precipitaciones concentradas en los meses de invierno con veranos secos, donde menos de 4 meses presentan temperaturas superiores a 10°C y el mes más cálido no supera los 22°C. Este clima se presenta en zonas de mayor elevación dentro de las regiones mediterráneas, donde la altitud modera las temperaturas y genera condiciones más frías que favorecen el desarrollo de vegetación adaptada a inviernos húmedos y veranos secos pero templados."
        },
        {
          code: "BWh",
          name: "Desértico Cálido",
          description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de 200 mm anuales) y temperaturas medias anuales superiores a 18°C, típico de las regiones más cálidas del Desierto de Atacama. Las condiciones de alta presión atmosférica subtropical generan cielos despejados y radiación solar intensa, creando un ambiente desértico con temperaturas elevadas, baja humedad relativa y una vegetación prácticamente ausente debido a las condiciones de aridez extrema."
        },
        {
          code: "EF",
          name: "Hielo Perpetuo",
          description: "Esta clasificación climática se caracteriza por temperaturas permanentemente bajo el punto de congelación durante todo el año, con presencia de hielos y glaciares permanentes en las zonas de mayor elevación de la Cordillera de los Andes. Las condiciones extremas de frío y la acumulación constante de nieve y hielo impiden el desarrollo de cualquier tipo de vegetación, configurando un paisaje de alta montaña dominado por formaciones glaciares y condiciones climáticas polares debido a la altitud."
        }
      ];

      const handleClimateChange = (e) => {
        setSelectedClimateCode(e.target.value);
      };

      const getSelectedClimate = () => {
        if (!selectedClimateCode) return null;
        return climateData.find(climate => climate.code === selectedClimateCode);
      };
      
      const selectedClimate = getSelectedClimate();

      return (
        <div className="app-container">
          <div className="card">
            <h1 className="title">
              Clasificación Climática de Chile Continental
            </h1>
            <p className="subtitle">
              Según Sarricolea et al. 2017
            </p>
            
            <div>
              <div className="select-container">
                <label htmlFor="climate-select" className="select-label">
                  Selecciona una Región Climática:
                </label>
                <select 
                  id="climate-select"
                  value={selectedClimateCode} 
                  onChange={handleClimateChange}
                  className="select-box"
                >
                  <option value="">-- Elige un tipo de clima --</option>
                  {climateData.map((climate) => (
                    <option key={climate.code} value={climate.code}>
                      {climate.code} - {climate.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedClimate && (
                <div className="description-box">
                  <h3 className="description-title">
                    {selectedClimate.name} ({selectedClimate.code})
                  </h3>
                  <p className="description-text">
                    {selectedClimate.description}
                  </p>
                </div>
              )}
            </div>
            
            <div className="footer">
              <p>© 2025 LBC Consultores Ambientales</p>
		<p>Autor: david.vasquez@lbconservation.org</p>
            </div>
          </div>
        </div>
      );
    };

//==================================================================
// COMPONENTE 4: EL PANEL LATERAL DE NAVEGACIÓN
//==================================================================
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">LBC Paneles</div>
    <nav className="sidebar-nav">
      <NavLink to="/" className="sidebar-link">Inicio</NavLink>
      <NavLink to="/vegetacion" className="sidebar-link">Form. Vegetacionales</NavLink>
      <NavLink to="/clima" className="sidebar-link">Regiones Climáticas</NavLink>
      {/* ¡Aquí agregarás nuevos enlaces en el futuro! */}
    </nav>
  </aside>
);


//==================================================================
// COMPONENTE PRINCIPAL: APP (El que organiza todo)
//==================================================================
const App = () => (
  <HashRouter>
    <div className="main-layout">
      <Sidebar />
      <main className="content">
        <Routes>
  <Route path="/" element={<Inicio />} />
  {/* CORREGIDO: Ahora usa el nombre correcto del componente */}
  <Route path="/vegetacion" element={<ChileVegetationSelector />} />
  {/* CORREGIDO: Ahora usa el nombre correcto del componente */}
  <Route path="/clima"      element={<ClimateSelector />} />
</Routes>
      </main>
    </div>
  </HashRouter>
);

//==================================================================
// RENDERIZAR LA APLICACIÓN
//==================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
