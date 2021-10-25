import { useState, useEffect, cloneElement, createContext, useCallback, useMemo } from "react";
import foodModel from "../models/fetch.model";
import AppContainer from "../views/AppContainer/AppContainer";

export let MainControllerContext = createContext("");

export default function MainController({children}){
    let letters = "abcdefghijklmnopqrstuvwxyz";

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

    }, [getMealsList])

    const mealsIngredients = new Array(20).fill("strIngredient").map((str, num)=>{
        return str + Number(num+1);
    });
    
    const getMoreMeals =()=>{
        makeMealsList(letters.charAt(letterIndex))
    }
    
    useEffect(()=>{
        getMoreMeals();
    }, [letterIndex])




    return (
        <MainControllerContext.Provider value={{mealsList, isloading, mealsIngredients, setLetterIndex, letterIndex}}>
            <AppContainer />
        </MainControllerContext.Provider>
    )
    // return cloneElement(children, {
    //                 data : data
    //             })
}