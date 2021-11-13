import {useState, useEffect, createContext, useContext, useCallback} from "react";
import { FoodModelContext } from "../App";



export const MealByIDContext = createContext();

export default function MealByIDController({children}){
    let {foodModel} = useContext(FoodModelContext)
    let [mealById, setMealById] = useState([]);
    
    const getMealById = useCallback(async (id) =>{
        // setIsloading(true);
        let meal = await foodModel.getMealDetailsById(id);
        setMealById(meal?.meals);
        // setIsloading(false);
    }, [foodModel]);

    
    return <MealByIDContext.Provider value={{getMealById, mealById}}>
                {children}
           </MealByIDContext.Provider> 
}