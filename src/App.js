
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import Categories from './Components/Categories/Categories';
import Booking from './Components/Booking/Booking';
import Register from './Components/Register/Register';
import RequireAuth from './Components/ RequireAuth/ RequireAuth';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <div>
 <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/categories/:categoriesId' element={<RequireAuth>
          <Booking></Booking>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
   
  );
}

export default App;
