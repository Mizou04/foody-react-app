import { Box, CircularProgress } from "@material-ui/core";
import useStyles from "./style.js"
import MealCard from "../mealCard/MealCard.jsx";
import { forwardRef, useRef, useEffect, memo, useContext } from "react";
import { MainControllerContext } from "../../../controllers/main.controller.js";


const MealsList = function({ mealsLoader, setMealsLoader }){
    let { mealsList, setLetterIndex, letterIndex} = useContext(MainControllerContext);
    let classes = useStyles();
    let observedRef = useRef();


    useEffect(()=>{
        function observerHandler(entries){
            if(entries[0].isIntersecting){
                let number = letterIndex + 1;
                setLetterIndex(number);
            }
        }

        let observer;
        (async function (){
            observer = await new IntersectionObserver(observerHandler, {root:null, rootMargin:"0px", threshold:.5});
    
            if(observedRef.current){
                observer.observe(observedRef.current);
            };
        })()  
        
        if(letterIndex === 25){
            setMealsLoader(false);
        }

        // return ()=>{
        //     if(observedRef.current){
        //     observer.unobserve(observedRef.current);
        // }};
        
    }, [mealsList])


    let mealsListPresentation = mealsList?.map((mealsObj, i)=>{
            
        return <li key={mealsObj.idMeal} ref={mealsList.length - 2 === i ? observedRef : null}  style={{margin : "10px 0px"}}>
                    <MealCard mealsList={mealsObj}/>
            </li>
    });

return (
        <Box className={classes.mealsList}>
            <ul className={classes.ul}>{mealsListPresentation}</ul>
            {
                mealsLoader && <div  style={{height : "100px", width:"100%",display : "flex", justifyContent: "center"}}>
                 <span><CircularProgress color="primary"/></span>
                </div>
            }
        </Box>
)}


export default memo(MealsList)