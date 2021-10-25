import { useEffect , useState} from "react";
// import Display from "./views/main.view"
import HomePage from "./views/HomePage/HomePage.jsx"
import AppContainer from "./views/AppContainer/AppContainer.jsx"
import {CardHeader, CssBaseline, Tooltip, Typography} from "@material-ui/core" 
import MainController from "./controllers/main.controller.js";

function App() {
    

  return (
    <div className="App">
      <CssBaseline/>

      <HomePage>
        <MainController/>
      </HomePage>
    </div>
  );
}

export default App;

// export default ()=>{
//               let [data, setData] = useState(null);
                
//               let display = data.map(meal=>{
//                 return  <p>{meal.idMeal}</p>
//               });

//               useEffect(()=>{
//                 const getJson = async ()=> {
//                   let response = await fetch("http://localhost:3000/files/meals.json", {headers : {
//                     // "Accept" : "application/json", "max-age": "3210231"
//                   }});
//                   response.json().then(({meals})=>{
//                     console.log(meals);
//                     setData(meals)
//                   })
                  
//                 }
//                 getJson();
//               }, [])

//               return (
//                 {display}
//               )

// }
