import { useState, useEffect, cloneElement, createContext, useCallback, useMemo, useContext } from "react";
import { FoodModelContext } from "../App";
import AppContainer from "../views/AppContainer/AppContainer";
import MealByIDController from "./mealById.controller";

export let MainControllerContext = createContext("");

export default function MainController({children}){ // for getting meals list
    let letters = "abcdefghijklmnopqrstuvwxyz";
<<<<<<< HEAD

    let [mealsList, setMealsList] = useState([]);
    let [mealByDetail, setMealByDetail] = useState(null);
=======
    let foodModel = useContext(FoodModelContext)
    let [mealsList, setMealsList] = useState([]);
>>>>>>> mealDetailsPage

    let [isloading, setIsloading] = useState(true);
    let [letterIndex, setLetterIndex] = useState(0);

    const getMealsList = async (letter)=>{
        let list = await foodModel.getMealsByFirstLetter(letter) //returns object with Key: "meals" and Value : [array of objects] ;
        setMealsList([...mealsList, ...list.meals]);
        setIsloading(false);
    }

<<<<<<< HEAD
    const getMealById = async (id) =>{
        setIsloading(true);
        let meal = await foodModel.getMealDetailsById(id);
        setMealByDetail(meal.meals);
        setIsloading(false);
    }
=======
>>>>>>> mealDetailsPage

    const makeMealsList = useCallback((letter)=>{
        return getMealsList(letter);

    }, [])
    
    useEffect(()=>{
        // makeMealsList(letters.charAt(letterIndex))
    }, [letterIndex])

   
    return (
<<<<<<< HEAD
        <MainControllerContext.Provider value={{mealsList, isloading, setLetterIndex, letterIndex, getMealById}}>
                <AppContainer />
=======
        <MainControllerContext.Provider value={{mealsList, isloading, setLetterIndex, letterIndex}}>
            {children}
>>>>>>> mealDetailsPage
        </MainControllerContext.Provider>
    )
    // return cloneElement(children, {
    //                 data : data
    //             })
}