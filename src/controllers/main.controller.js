import { useState, useEffect, cloneElement, createContext, useCallback, useMemo } from "react";
import foodModel from "../models/fetch.model";
import AppContainer from "../views/AppContainer/AppContainer";

export let MainControllerContext = createContext("");

export default function MainController({children}){
    let letters = "abcdefghijklmnopqrstuvwxyz";

    let [mealsList, setMealsList] = useState([]);
    let [mealByDetail, setMealByDetail] = useState(null);

    let [isloading, setIsloading] = useState(true);
    let [letterIndex, setLetterIndex] = useState(0);

    const getMealsList = async (letter)=>{
        let list = await foodModel.getMealsByFirstLetter(letter) //returns object with Key: "meals" and Value : [array of objects] ;
        setMealsList([...mealsList, ...list.meals]);
        setIsloading(false);
    }

    const getMealById = async (id) =>{
        setIsloading(true);
        let meal = await foodModel.getMealDetailsById(id);
        setMealByDetail(meal.meals);
        setIsloading(false);
    }

    const makeMealsList = useCallback((letter)=>{
        return getMealsList(letter);

    }, [])
    
    useEffect(()=>{
        // makeMealsList(letters.charAt(letterIndex))
    }, [letterIndex])

   
    return (
        <MainControllerContext.Provider value={{mealsList, isloading, setLetterIndex, letterIndex, getMealById}}>
                <AppContainer />
        </MainControllerContext.Provider>
    )
    // return cloneElement(children, {
    //                 data : data
    //             })
}