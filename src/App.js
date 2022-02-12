import './App.css';
import Header from './Header/Header.js'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage'
function App() {
  return (
    <> 
    <BrowserRouter >
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      {/* <Route path='/coins/:id' component={CoinPage}/> */}
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
