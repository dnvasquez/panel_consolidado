// === VERSIÓN A PRUEBA DE FALLOS ===
console.log('🚀 Iniciando app.js');

// Función para mostrar errores en pantalla
function mostrarError(mensaje, error) {
  console.error(mensaje, error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        padding: 2rem; 
        margin: 2rem; 
        background: #fee; 
        border: 2px solid #dc2626; 
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
      ">
        <h2 style="color: #dc2626; margin-top: 0;">❌ Error en la aplicación</h2>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <p><strong>Error:</strong> ${error ? error.message : 'Error desconocido'}</p>
        <details style="margin-top: 1rem;">
          <summary style="cursor: pointer; font-weight: bold;">Ver detalles técnicos</summary>
          <pre style="
            background: #f5f5f5; 
            padding: 1rem; 
            border-radius: 4px; 
            overflow: auto; 
            margin-top: 0.5rem;
            font-size: 0.875rem;
          ">${error ? error.stack : 'No hay stack trace disponible'}</pre>
        </details>
      </div>
    `;
  }
}

// Verificar librerías paso a paso
try {
  console.log('Verificando React...');
  if (typeof React === 'undefined') {
    throw new Error('React no está disponible');
  }
  console.log('✅ React disponible');

  console.log('Verificando ReactDOM...');
  if (typeof ReactDOM === 'undefined') {
    throw new Error('ReactDOM no está disponible');
  }
  console.log('✅ ReactDOM disponible');

  console.log('Verificando ReactRouterDOM...');
  if (typeof ReactRouterDOM === 'undefined') {
    throw new Error('ReactRouterDOM no está disponible');
  }
  console.log('✅ ReactRouterDOM disponible');

  // Extraer componentes necesarios
  console.log('Extrayendo hooks y componentes...');
  const useState = React.useState;
  const HashRouter = ReactRouterDOM.HashRouter;
  const Routes = ReactRouterDOM.Routes;
  const Route = ReactRouterDOM.Route;
  const NavLink = ReactRouterDOM.NavLink;
  console.log('✅ Hooks y componentes extraidos');

  // Componente de prueba simple
  console.log('Definiendo componentes...');
  
  function PaginaInicio() {
    console.log('Renderizando PaginaInicio');
    return React.createElement('div', 
      { 
        style: { 
          padding: '2rem', 
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        } 
      },
      React.createElement('h1', 
        { style: { color: '#0c4a6e', marginBottom: '1rem' } }, 
        '🎉 ¡Aplicación funcionando!'
      ),
      React.createElement('h2', 
        { style: { color: '#374151', marginBottom: '1.5rem' } }, 
        'LBC Consultores Ambientales'
      ),
      React.createElement('p', 
        { style: { lineHeight: '1.6', color: '#6b7280' } }, 
        'La aplicación React se ha cargado correctamente. Usa el menú lateral para navegar.'
      ),
      React.createElement('div',
        { style: { marginTop: '2rem', padding: '1rem', background: '#f0f9ff', borderRadius: '8px' } },
        React.createElement('p', 
          { style: { margin: '0', fontWeight: 'bold', color: '#0c4a6e' } }, 
          '✅ Todas las librerías funcionando correctamente'
        )
      )
    );
  }

  function BarraLateral() {
    console.log('Renderizando BarraLateral');
    return React.createElement('aside', {
      style: {
        width: '260px',
        backgroundColor: '#0c4a6e',
        padding: '1.5rem',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }
    },
    React.createElement('div', {
      style: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '2rem',
        textAlign: 'center'
      }
    }, 'LBC Paneles'),
    React.createElement('nav', null,
      React.createElement(NavLink, {
        to: '/',
        style: {
          color: '#e0f2fe',
          textDecoration: 'none',
          display: 'block',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          marginBottom: '0.5rem'
        }
      }, 'Inicio')
    ));
  }

  function App() {
    console.log('Renderizando App principal');
    return React.createElement(HashRouter, null,
      React.createElement('div', {
        style: {
          display: 'flex',
          minHeight: '100vh'
        }
      },
      React.createElement(BarraLateral),
      React.createElement('main', {
        style: {
          flexGrow: 1,
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }
      },
      React.createElement(Routes, null,
        React.createElement(Route, {
          path: '/',
          element: React.createElement(PaginaInicio)
        })
      ))));
  }

  console.log('✅ Componentes definidos');

  // Renderizar la aplicación
  console.log('Obteniendo elemento root...');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Elemento #root no encontrado en el DOM');
  }
  console.log('✅ Elemento root encontrado');

  console.log('Creando root de React...');
  const root = ReactDOM.createRoot(rootElement);
  console.log('✅ Root de React creado');

  console.log('Renderizando aplicación...');
  root.render(React.createElement(App));
  console.log('🎉 APLICACIÓN RENDERIZADA EXITOSAMENTE');

} catch (error) {
  mostrarError('Error durante la inicialización de la aplicación', error);
}
