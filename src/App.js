import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Nav from './Routes/Nav';
import PublicRoutes from './Routes/PublicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './Context/Language-context';

function App() {
 return (
  <div>
    <BrowserRouter>
      <LanguageProvider>
        <Nav/>
        <PublicRoutes />
      </LanguageProvider> 
    </BrowserRouter>

  </div>

  );
}

export default App;
