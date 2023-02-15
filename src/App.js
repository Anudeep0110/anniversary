import './App.css';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className='d-flex justify-content-center' style={{width:"100%",height:"100vh",background: "linear-gradient(to right, #8a2be2, #ff69b4)",alignItems:'center'}}>
      <Home />
    </div>
  );
}

export default App;
