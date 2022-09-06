//import logo from './logo.svg';
import './App.css';
import './card.css';
import image from './image/hppy.png';

function App() {
  return (
    <div className="container">
    <div className="card">
        <div className="front">
          <img src={image} alt="birthday" className="birthday"></img>
        </div>
        <div className="back">
        <p>The best of your life has yet to come, embrace it, be confident, and embark on a future of limitless possibilities and opportunities. Happy birthday!</p>
        
        </div>
    </div>
</div>
  );
}

export default App;
