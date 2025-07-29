console.log('=== INICIO DEL SCRIPT ===');

// Verificar que React está disponible
if (typeof React === 'undefined') {
  console.error('React no está disponible');
  document.getElementById('root').innerHTML = '<div style="padding: 2rem; color: red;">Error: React no disponible</div>';
  throw new Error('React no disponible');
}

if (typeof ReactDOM === 'undefined') {
  console.error('ReactDOM no está disponible');
  document.getElementById('root').innerHTML = '<div style="padding: 2rem; color: red;">Error: ReactDOM no disponible</div>';
  throw new Error('ReactDOM no disponible');
}

if (typeof ReactRouterDOM === 'undefined') {
  console.error('ReactRouterDOM no está disponible');
  document.getElementById('root').innerHTML = '<div style="padding: 2rem; color: red;">Error: ReactRouterDOM no disponible</div>';
  throw new Error('ReactRouterDOM no disponible');
}

console.log('Todas las librerías verificadas correctamente');

// Destructuring
const { useState } = React;
const { HashRouter, Routes, Route, NavLink } = ReactRouterDOM;

console.log('Destructuring completado');

// Componente simple de test
const TestPage = () => {
  console.log('Renderizando TestPage');
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <h1>🎉 ¡Funciona!</h1>
      <p>La aplicación React está funcionando correctamente.</p>
    </div>
  );
};

// Sidebar simple
const Sidebar = () => {
  console.log('Renderizando Sidebar');
  return (
    <div style={{
      width: '260px',
      backgroundColor: '#0c4a6e',
      padding: '1.5rem',
      color: 'white',
      minHeight: '100vh'
    }}>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center'}}>
        LBC Test
      </div>
      <nav>
        <NavLink 
          to="/" 
          style={{
            color: '#e0f2fe',
            textDecoration: 'none',
            display: 'block',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem'
          }}
        >
          Inicio
        </NavLink>
      </nav>
    </div>
  );
};

// App principal
const App = () => {
  console.log('Renderizando App');
  return React.createElement(
    HashRouter,
    null,
    React.createElement(
      'div',
      { style: { display: 'flex', minHeight: '100vh' } },
      React.createElement(Sidebar),
      React.createElement(
        'main',
        { style: { flexGrow: 1, padding: '2rem', display: 'flex', justifyContent: 'center' } },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: '/', element: React.createElement(TestPage) })
        )
      )
    )
  );
};

console.log('Componentes definidos, intentando renderizar...');

// Renderizar
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Elemento root no encontrado');
  }
  
  console.log('Elemento root encontrado, creando root de React...');
  const root = ReactDOM.createRoot(rootElement);
  
  console.log('Root creado, renderizando app...');
  root.render(React.createElement(App));
  
  console.log('✅ APLICACIÓN RENDERIZADA EXITOSAMENTE');
  
} catch (error) {
  console.error('❌ ERROR AL RENDERIZAR:', error);
  console.error('Stack trace:', error.stack);
  
  document.getElementById('root').innerHTML = `
    <div style="padding: 2rem; color: red; background: #fee; border: 1px solid red; margin: 2rem;">
      <h2>Error al renderizar</h2>
      <p><strong>Mensaje:</strong> ${error.message}</p>
      <pre style="background: #f5f5f5; padding: 1rem; overflow: auto;">${error.stack}</pre>
    </div>
  `;
}
