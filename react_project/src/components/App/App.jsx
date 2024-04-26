
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import About from '../About/About';
import Create from '../Create/Create';
import Header from '../Header/Header';
import Note from '../Note/Note';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

function App() {
 

  return (
    <div className="wrapper container d-flex flex-column">
      <BrowserRouter>
        <Header></Header>
        <section className='main justify-content-center d-flex flex-column '>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route exact path='/note' element={<Note/>}/>
            <Route exact path='/note/:noteURL' element={<Note/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </section>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
