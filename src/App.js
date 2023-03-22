import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Headers from "./components/Header";
import AppRoutes from "./AppRoutes";
// import "./App.css";
// import {Data} from "./Data";
function App() {
  const [personData, setData] = useState([]);
  
  // const getData = () => {
  //   
  //     ! dynamically importing data 
  //     ? using promises
  //    
  //  import(/* webpackChunkName: "Data" */ './Data').then((module) =>{
  //    setData(module);
  //  })
  // }


  //  const getData = async() => {   
  // ! dynamically importing data 
  // ? using aync await function    
  //  const Data = (await import(/* webpackChunkName: "Data" */ './Data')).default
  //    setData(Data);}import AppRoutes from './AppRoutes';




  return (
    <div className="App">
      <div>
        {/* <h2>I am in App Component</h2>
        <button onClick={getData}>Get Data</button>
        <pre>
          {personData.length > 0 ? JSON.stringify(personData, null, 2) : ""}
        </pre> */}
      <Router>
        <Headers />
        <AppRoutes />
      </Router>
      </div>
    </div>
  );
}

export default App;
