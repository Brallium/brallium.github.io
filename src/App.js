import React, { useState } from "react"
import './styles/App.css';
import Navbar from './Components/NavBar/Navbar';
import { Shop } from './Pages/Shop';
import contents from './Components/contents';
import { Login } from "./Pages/Login";
import {Register} from "./Pages/Register";
import {feedback} from "./Components/NavBar/feedback";
import {About} from "./Pages/About";
import {FAQ} from "./Pages/FAQ";
import {Cart} from "./Pages/Cart";
import {Profile} from "./Pages/Profile";
import {MainPage} from "./Pages/MainPage";
import {AuthContextProvider } from './config/AuthContext';

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <AuthContextProvider>
      <SignInPage/>
    </AuthContextProvider>
    
    <div>
      <BrowserRouter>
      <Routes>
      <Navbar />
        <Route path='/mainpage' element={<MainPage/>}/>
        <Route path= '/shop' element={<Shop/>}>
          <Route path= ':productId' element={<Shop/>}/>
          </Route>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path= '/login' element={<LoginSignUp/>}/>
        <Route path= '/blog' element={<Blog/>}/>
        <Route path= '/about' element={<About/>}/>
        
      </Routes>
      </BrowserRouter>
  
      <div className='App'>
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
    </div>
  );
}

export default App;
