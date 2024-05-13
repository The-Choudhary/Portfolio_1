import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home/home";
import Kop from "./home/kl";
import Contactme from "./home/form";
import Error from "./home/Error";
import Contact from "./home/contact";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/k' element={<Kop/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/get-in-touch" element={<Contactme/>}/>
        <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
