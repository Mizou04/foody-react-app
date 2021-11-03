import {Box, Select, MenuItem, FormControl, CircularProgress, Button } from "@material-ui/core";
import { useContext, useEffect, useRef, useState, memo } from "react";
import {MainControllerContext} from "../../controllers/main.controller";
import useStyles from './style'
import MealCard from "../components/mealCard/MealCard.jsx" 
import Filters from "../components/Filters/Filters";
import Loader from "../components/Loader/Loader"
import { Route, Switch } from "react-router";
import {grey } from "@material-ui/core/colors";
import {ArrowBack} from "@material-ui/icons"
import MealDetailsPage from "../MealDetailsPage/MealDetailsPage"
import { MealByIDContext } from "../../controllers/mealById.controller";

function AppContainer(){
    let classes = useStyles();
    let { mealsList, isloading, setLetterIndex, letterIndex} = useContext(MainControllerContext);
    let {getMealById} = useContext(MealByIDContext);

    let observedRef = useRef();
    let [mealsLoader, setMealsLoader] = useState(false);

    
    let mealsListPresentation = mealsList?.map((mealsObj, i)=>{
        if(i === mealsList.length - 2){
                return <li key={mealsObj.idMeal} ref={observedRef}  style={{background : "red",margin : "10px 0px"}}>
                        <MealCard id={mealsObj.idMeal} mealsList={mealsObj}/>
                       </li>
        };
        return <li key={mealsObj.idMeal}  style={{margin : "10px 0px"}}>
                    <MealCard mealsList={mealsObj}/>
                </li>
    });

    const getMealDetailsHandler = e =>{
        getMealById(e.target.id)
    }
    
    
    useEffect(()=>{
        function observerHandler(entries){
            if(entries[0].isIntersecting){
                let number = letterIndex + 1;
                setMealsLoader(true);
                setLetterIndex(number);
            }
    }
        (async function (){
            let observer = await new IntersectionObserver(observerHandler, {root:null, rootMargin:"0px", threshold:1});
            if(observedRef.current){
                observer.observe(observedRef.current);
            };
        })()

    }, [mealsList])


    return (
        <div style={{width : "100vw", height : "100%",display : "flex", justifyContent : "center", alignItems : "center"}}>
        {/* {isloading ? <Loader/> : */}
            {/* <Box className={classes.body}> */}
                {/* <Button startIcon={<ArrowBack color="primary"/>}></Button> */}
                {/* <Switch> */}
                    {/* <Route exact path='/'> */}
                        {/* {history.pushState()} */}
                        {/* <Filters/> */}
                        {/* <Box className={classes.mealsList}>
                            <ul className={classes.ul}>{mealsListPresentation}</ul>
                            {mealsLoader && <div style={{height : "100px", width:"100%",display : "flex", justifyContent: "center"}}>
                                <span><CircularProgress color="primary"/></span>
                            </div>}
                        </Box> */}
                    {/* </Route> */}
                    {/* <Route path="/:id">
                        {history.pushState("", "", new URL("/"))}
                    </Route> */}
                {/* </Switch> */}
            {/* </Box> */}
            <MealDetailsPage/>
        
        </div>
    )
}

export default memo(AppContainer)