import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ServicesContainer from './Components/Services/ServicesContainer';
import ReviewsContainer from './Components/Reviews/ReviewsContainer';
import HouseDescriptionContainer from './Components/Services/HouseDescription/HouseDescriptionContainer';
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path='/services' element={<ServicesContainer />}/>
              <Route path='/reviews' element={<ReviewsContainer />}/>
              <Route path='/houseDescription' element={<HouseDescriptionContainer/>}/>
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
