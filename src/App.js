import 'primereact/resources/themes/lara-light-teal/theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import Nav from './components/Nav';
import Init from './components/Init';
import Clients from './components/Clients';
import Proveedores from './components/Proveedores';
import Itinerario from './components/Itinerario';

function App() {
  return (
      <PrimeReactProvider>
          <Router>
              <Nav />
              <Routes>
                  <Route path="/" element={<Init />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/proveedores" element={<Proveedores />} />
                  <Route path="/itinerario" element={<Itinerario />} />
              </Routes>
          </Router>
      </PrimeReactProvider>
  );
}

export default App;
