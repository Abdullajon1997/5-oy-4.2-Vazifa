
import './../src/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Pokoj from "./components/Pokoj/Pokoj"
// import Totto from './components/Totto/Totto';
// import Kita from './components/Kita/Kita';
// import Judul from './components/Judul/Judul';
// import Mereka from './components/Mereka/Mereka';
// import Basa from './components/Basa/Basa';
// import Membantu from './components/Membantu/Membantu';

import Beranda from './components/Beranda/Beranda';
import Koleksi from './components/Koleksi/Koleksi';
import Syarat from './components/Syarat/Syarat';
import Kontak from './components/Kontak/Kontak';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



{/* <Pokoj />
      <Totto />
      <Kita />
      <Judul />
      <Mereka />
      <Basa />
      <Membantu /> */}

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header />
        <main>
          <Routes>
          <Route path='/beranda' element={<Beranda />} />
            <Route path='/koleksi' element={<Koleksi />} />
            <Route path='/syarat' element={<Syarat />} />
            <Route path='/kontak' element={<Kontak />} />
          </Routes>
        </main>
      <Footer />
      </BrowserRouter>
    </>


  );
}

export default App;
