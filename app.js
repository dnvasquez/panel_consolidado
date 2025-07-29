// Importaciones de las librerías que cargamos en el HTML
const { useState } = React;
const { BrowserRouter, Routes, Route, NavLink } = ReactRouterDOM;

// COMPONENTE 1: PÁGINA DE INICIO
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

// COMPONENTE 2: PANEL DE VEGETACIÓN (puedes colocar aquí tu componente existente recortado)
const ChileVegetationSelector = () => (
  <div className="app-container">
    <div className="card">
      <h1 className="title vegetation-title">Panel de Vegetación</h1>
      <p className="subtitle">Este componente debe mostrar el selector de formaciones vegetacionales.</p>
      {/* Aquí deberías agregar tu selector funcional si ya lo tenías implementado */}
    </div>
  </div>
);

// COMPONENTE PRINCIPAL APP
const App = () => (
  <div className="main-layout">
    <div className="sidebar">
      <div className="sidebar-header">Paneles</div>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
        <NavLink to="/vegetacion" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Vegetación</NavLink>
      </nav>
    </div>
    <div className="content">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/vegetacion" element={<ChileVegetationSelector />} />
      </Routes>
    </div>
  </div>
);

// RENDERIZAR APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
