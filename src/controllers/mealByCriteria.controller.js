import { useState, useEffect, cloneElement, createContext, useCallback, useMemo, useContext } from "react";
import { Route } from "react-router";
import { FoodModelContext } from "../App";
// import AppContainer from "../views/AppContainer/AppContainer";
// import MealByIDController from "./mealById.controller";

export const MealByCriteriaContext = createContext();

export default function MealByCriteriaController({children}){ // for filtering meals list
    const {foodModel} = useContext(FoodModelContext)
    const [filteredMeals, setFilteredMeals] = useState([]);

    const getMealsByCriteria = useCallback(async (criteria, value)=>{
        const response = await foodModel.getMealsByCriteria(criteria, value);
        setFilteredMeals(response.meals)
    }, [foodModel])




   
    return (
        <MealByCriteriaContext.Provider value={{filteredMeals, getMealsByCriteria}}>
                {children}
        </MealByCriteriaContext.Provider>
    )
}