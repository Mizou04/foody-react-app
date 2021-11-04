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
import { Link as RouterLink } from "react-router-dom";

function AppContainer(){
    let classes = useStyles();
    let { mealsList, isloading, setLetterIndex, letterIndex} = useContext(MainControllerContext);

    let observedRef = useRef();
    let [mealsLoader, setMealsLoader] = useState(true);

    
    let mealsListPresentation = mealsList?.map((mealsObj, i)=>{
        return <li key={mealsObj.idMeal}  style={{margin : "10px 0px"}}>
                    <MealCard mealsList={mealsObj}/>
                </li>
    });


    
    useEffect(()=>{
        function observerHandler(entries){
            if(entries[0].isIntersecting){
                let number = letterIndex + 1;
                // setMealsLoader(false);
                setLetterIndex(number);
            }
        }

        let observer;
        (async function (){
            observer = await new IntersectionObserver(observerHandler, {root:null, rootMargin:"0px", threshold:.5});
            observer.takeRecords();
    
            if(observedRef.current){
                observer.observe(observedRef.current);
            };
        })()  
        
        if(letterIndex === 25){
            setMealsLoader(false);
        }

        return ()=>{
            if(observedRef.current){
            observer.unobserve(observedRef.current);
        }};
        
    }, [mealsList])

    return (
        // <div style={{width : "100vw", height : "100%",display : "flex", justifyContent : "center", alignItems : "center"}}>
            <Box className={classes.body}>
                {window.location.pathname !== "/" &&
                    <RouterLink to="/">
                        <Button style={{position : "absolute", left : "10px", top : "10px"}} startIcon={<ArrowBack color="primary"/>}/>
                    </RouterLink>
                }
                <Switch>
                    <Route exact path='/'>
                        {isloading ? <Loader/> :
                            <>
                            <Filters/>
                            <Box className={classes.mealsList}>
                                <ul className={classes.ul}>{mealsListPresentation}</ul>
                                {mealsLoader && <div ref={observedRef} style={{height : "100px", width:"100%",display : "flex", justifyContent: "center"}}>
                                    <span><CircularProgress color="primary"/></span>
                                </div>}
                            </Box>
                        </>
                        }
                    </Route>
                    <Route path="/meal/:id">
                        <MealDetailsPage />
                    </Route>
                </Switch>
            </Box>
        /* </div> */
    )
}

export default memo(AppContainer)