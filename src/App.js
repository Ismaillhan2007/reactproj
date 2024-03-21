import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ServicesContainer from './Components/Services/ServicesContainer';
import ReviewsContainer from './Components/Reviews/ReviewsContainer';
import { MyContext } from './context';
function App(props) {
  return (
    <BrowserRouter>
    <MyContext.Provider value={props.store}>
      <div className="App">
          <Header/>
            <Routes>
              <Route path="/main" element={<Main/>} />
              <Route path='/services' element={<ServicesContainer />}/>
              <Route path='/reviews' element={<ReviewsContainer />}/>
            </Routes>
          <Footer/>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
