import { useState, useEffect, cloneElement, createContext, useCallback, useMemo, useContext } from "react";
import { FoodModelContext } from "../App";
import AppContainer from "../views/AppContainer/AppContainer";
import MealByIDController from "./mealById.controller";

export let MainControllerContext = createContext("");

export default function MainController({children}){ // for getting meals list
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let foodModel = useContext(FoodModelContext)
    let [mealsList, setMealsList] = useState([]);

    let [isloading, setIsloading] = useState(true);
    let [letterIndex, setLetterIndex] = useState(0);

    const getMealsList = async (letter)=>{
        let list = await foodModel.getMealsByFirstLetter(letter) //returns object with Key: "meals" and Value : [array of objects] ;
        setMealsList([...mealsList, ...list.meals]);
        setIsloading(false);
    }


    const makeMealsList = useCallback((letter)=>{
        return getMealsList(letter);

    }, [])
    
    useEffect(()=>{
        // makeMealsList(letters.charAt(letterIndex))
    }, [letterIndex])

   
    return (
        <MainControllerContext.Provider value={{mealsList, isloading, setLetterIndex, letterIndex}}>
            {children}
        </MainControllerContext.Provider>
    )
    // return cloneElement(children, {
    //                 data : data
    //             })
}