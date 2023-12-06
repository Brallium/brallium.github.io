import React, { useState } from "react"
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar';
import Shop from './Pages/Shop';
import contents from './Components/contents';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { feedback } from "./Components/feedback";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import FAQ from "./Pages/FAQ";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import MainPage from "./Pages/MainPage";
import { AuthContextProvider } from './config/AuthContext';
import { Products } from "./Components/products";
import Paypal from "./Paypal";
import ShoppingCart from "./Components/ShoppingCart";
import Modal from "./Pages/Modal_login";


function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      {/* <AuthContextProvider>
        <SignInPage />
      </AuthContextProvider> */}

      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Modal/>} />
            <Route path='/shop' element={<Shop />}>
              <Route path=':productId' element={<Shop />} />

            </Route>
            <Route path='/cart' element={<ShoppingCart />} />
            {/* <Route path='/login' element={<LoginSignUp />} /> */}
            <Route path='/blog' element={<Blogs />} />
            <Route path='/about' element={<About />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/register' element={<Register />} />
            <Route path='/faq' element={<FAQ />} />

          </Routes>
        </Router>
        </div>
        {/* <div className='App'>
          {contents.map(contents => (
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
            />
          ))}
        </div>
        <div className="App">
          {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
          }

        </div>
        <Paypal></Paypal> */}
         {/* {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
        </div> */}
    {/* </AuthContextProvider> */}
    </>
  );
}

export default App;
