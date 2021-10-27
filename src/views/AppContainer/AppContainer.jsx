import {Box, Card, CardContent, CardMedia, Input, Typography, Chip, Select, MenuItem, FormControl, FormHelperText, CircularProgress } from "@material-ui/core";
import { useContext, useEffect, useRef, useState, createRef, useCallback } from "react";
import {MainControllerContext} from "../../controllers/main.controller";
import useStyles from './style'
import MealCard from "../components/mealCard/MealCard.jsx" 
import { orange } from "@material-ui/core/colors";

export default function AppContainer(){
    let classes = useStyles();
    let { mealsList, isloading, mealsIngredients, setLetterIndex, letterIndex} = useContext(MainControllerContext);
    let observedRef = useRef();
    let observer = useRef();

    let categories = [{category : "xxx"}];
    let areas = [{area : "canada"}];
    let mainIngredients = [{mainIngredient : "lamb"}];
    
    let [mealsLoader, setMealsLoader] = useState(false);

    let [action, setAction] = useState({category : "", area : "", mainIngredient : ""})

    let categoriesList = categories.map(({category}) => {
        return <MenuItem key={category} value={category}>{category}</MenuItem>
    })
    let areasList = areas.map(({area}) => {
        return <MenuItem key={area} value={area}>{area}</MenuItem>
    })
    let mainIngredientsList = mainIngredients.map(({mainIngredient}) => {
        return <MenuItem key={mainIngredient} value={mainIngredient}>{mainIngredient}</MenuItem>
    })

    let mealsListPresentation = mealsList?.map((mealsObj, i)=>{
        if(i === mealsList.length - 2){
                return <li key={mealsObj.idMeal} ref={observedRef}  style={{background : "red",margin : "10px 0px"}}>
                        <MealCard mealsList={mealsObj}/>
                       </li>
        };
        return <li key={mealsObj.idMeal}  style={{margin : "10px 0px"}}>
                    <MealCard mealsList={mealsObj}/>
                </li>
    });

    const changeHandler = e =>{
        setAction({...action, [e.target.name] : e.target.value});
    }
    
    
    useEffect(()=>{
        function observerHandler(entries){
            if(entries[0].isIntersecting){
                let number = letterIndex + 1;
                setMealsLoader(true);
                setLetterIndex(number);
            }
    }
        async function observe(){
            observer.current = await new IntersectionObserver(observerHandler, {root:null, rootMargin:"0px", threshold:1});
            if(observedRef.current){
                observer.current.observe(observedRef.current);
            };
        }
        observe();
    }, [mealsList])


    return (
        <div style={{width : "100vw", height : "100%",display : "flex", justifyContent : "center", alignItems : "center"}}>
        {isloading ? <CircularProgress color='primary' /> :
            <Box className={classes.body}>
                <Box className={classes.actions}>
                    <div className={classes.actionsContainer}>
                        <FormControl variant="filled">
                            <Select onChange={changeHandler} name="category" value={action.category} variant="outlined" className={`${classes.action} category`}>
                                {categoriesList}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard">
                            <Select onChange={changeHandler} name="area" value={action.area} variant="outlined" className={`${classes.action} area`}>
                                {areasList}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard">
                            <Select onChange={changeHandler} name="mainIngredient" value={action.mainIngredient} variant="outlined" className={`${classes.action} mainIngredient`}>
                                {mainIngredientsList}
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <Box className={classes.mealsList}>
                    <ul className={classes.ul}>{mealsListPresentation}</ul>
                    {mealsLoader && <div style={{height : "100px", width:"100%",display : "flex", justifyContent: "center"}}>
                        <span><CircularProgress color="primary"/></span>
                    </div>}
                </Box>
            </Box>
              
        }
        </div>
    )
}