//import logo from './logo.svg';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Feed from './components/Feed';
import Error from './components/Error';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
    return ( 
       
            <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route exact path="/reset" element={<Reset />} />
            <Route path="/feed" element={<Feed />}/>
            <Route path='*' element={<Error />}/>
            </Routes>
    )
}

export default App;





// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>