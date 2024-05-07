import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from "react";
import Home from "./home/home";
import Kop from "./home/kl"
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/k' element={<Kop/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
