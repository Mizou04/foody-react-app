import { useState, useEffect, cloneElement, createContext, useCallback, useMemo, useContext } from "react";
import { FoodModelContext } from "../App";
import AppContainer from "../views/AppContainer/AppContainer";
import MealByIDController from "./mealById.controller";

export let MainControllerContext = createContext("");

export default function MainController({children}){ // for getting meals list
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let {foodModel} = useContext(FoodModelContext)
    const [mealsList, setMealsList] = useState([]);
    let [isloading, setIsloading] = useState(true);
    let [letterIndex, setLetterIndex] = useState(0);

    const getMealsList = async (letter)=>{
        let list = await foodModel.getMealsByFirstLetter(letter) //returns object with Key: "meals" and Value : [array of objects] ;
        setMealsList([...mealsList, ...list.meals]);
        setIsloading(false);
    }
    const makeMealsList = useCallback((letter)=>{
            return getMealsList(letter);
    }, [mealsList])

    useEffect(()=>{
        makeMealsList(letters.charAt(letterIndex));
    }, [letterIndex])
    
    const mealsIngredients= ["strIngredient1","strIngredient2","strIngredient3","strIngredient4","strIngredient5","strIngredient6","strIngredient7","strIngredient8","strIngredient9","strIngredient10","strIngredient11","strIngredient12","strIngredient13","strIngredient14","strIngredient15","strIngredient16","strIngredient17","strIngredient18","strIngredient19","strIngredient20"]
    

   
    return (
        <MainControllerContext.Provider value={{mealsList, isloading, setLetterIndex, letterIndex, mealsIngredients}}>
            {children}
        </MainControllerContext.Provider>
    )
    // return cloneElement(children, {
    //                 data : data
    //             })
}