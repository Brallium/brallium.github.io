import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Products } from './Components/products';
import contents from './Components/content';

function App() {
  return (
    <div >
      <Navbar />
      <div className='App'>
        {contents.map(contents => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
