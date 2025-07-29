// Importaciones de las librerías que cargamos en el HTML
const { useState } = React;
const { HashRouter, Routes, Route, NavLink } = ReactRouterDOM;

console.log('Iniciando carga de componentes...');

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
// COMPONENTE 2: PANEL DE VEGETACIÓN
//==================================================================
const ChileVegetationSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSubRegion, setSelectedSubRegion] = useState('');
  const [selectedFormation, setSelectedFormation] = useState('');

  // Datos de vegetación (versión reducida para debugging)
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
              description: "Las unidades vegetacionales corresponden a la Región de la Estepa Alto-Andina, formación Estepa Alto-Andina Altiplánica, que se desarrolla entre 4.000-5.000 msnm como gran meseta dominada por montañas aisladas."
            }
          }
        }
      }
    }
  };

  const speciesData = {
    "1.1.1": "Tessaria absinthioides, Distichlis spicata.",
    "2.1.1": "Festuca orthophylla, Parastrephia lucida, Astragalus arequipensis."
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
// COMPONENTE 3: PANEL DE CLIMA
//==================================================================
const ClimateSelector = () => {
  const [selectedClimateCode, setSelectedClimateCode] = useState('');

  const climateData = [
    {
      code: "ET",
      name: "Tundra por Altura",
      description: "Esta clasificación climática se caracteriza por temperaturas medias anuales por debajo de 10°C debido a la elevación de los Andes, con precipitaciones escasas que generalmente ocurren en forma de nieve durante los meses de invierno."
    },
    {
      code: "BWk",
      name: "Desértico Frío",
      description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de 200 mm anuales) y temperaturas medias anuales inferiores a 18°C, típico de las regiones del Desierto de Atacama."
    },
    {
      code: "Csb",
      name: "Mediterráneo de Verano Templado",
      description: "Esta clasificación climática se caracteriza por un régimen de precipitaciones concentradas en los meses de invierno (mayo-agosto) con veranos secos y templados, donde las temperaturas del mes más cálido no superan los 22°C."
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
      <NavLink to="/" end className="sidebar-link">Inicio</NavLink>
      <NavLink to="/vegetacion" className="sidebar-link">Form. Vegetacionales</NavLink>
      <NavLink to="/clima" className="sidebar-link">Regiones Climáticas</NavLink>
    </nav>
  </aside>
);

//==================================================================
// COMPONENTE PRINCIPAL: APP
//==================================================================
const App = () => (
  <HashRouter>
    <div className="main-layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/vegetacion" element={<ChileVegetationSelector />} />
          <Route path="/clima" element={<ClimateSelector />} />
        </Routes>
      </main>
    </div>
  </HashRouter>
);

//==================================================================
// RENDERIZAR LA APLICACIÓN
//==================================================================
console.log('Intentando renderizar la aplicación...');

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  console.log('✓ Aplicación renderizada exitosamente');
} catch (error) {
  console.error('✗ Error al renderizar:', error);
  document.getElementById('root').innerHTML = `
    <div style="padding: 2rem; color: red; text-align: center;">
      <h2>Error al renderizar la aplicación</h2>
      <pre>${error.message}</pre>
    </div>
  `;
}
