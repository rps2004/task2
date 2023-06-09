import { Home } from './Pages/Home';
import './App.css';
import SearchPage from './SearchPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
     </Routes>


     </BrowserRouter>
    </div>
  );
}

export default App;
