import {useState, useEffect, createContext, useContext} from "react";
import { FoodModelContext } from "../App";



export const MealByIDContext = createContext();

export default function MealByIDController({children}){
    let foodModel = useContext(FoodModelContext)
    
    
    const getMealById = async (id) =>{
    //     setIsloading(true);
    //     let meal = await foodModel.getMealDetailsById(id);
    //     setMealByDetail(meal.meals);
    //     setIsloading(false);
    }
    
    return <MealByIDContext.Provider value={getMealById}>
                {children}
           </MealByIDContext.Provider> 
}