import {Box, Card, CardContent, CardMedia, Input, Typography, Chip, Select, MenuItem, FormControl, FormHelperText, CircularProgress } from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import {MainControllerContext} from "../../controllers/main.controller";
import useStyles from './style'
import MealCard from "../components/mealCard/MealCard.jsx" 
import { orange } from "@material-ui/core/colors";

export default function AppContainer(){
    let classes = useStyles();
    let { mealsList, isloading, mealsIngredients, setLetterIndex, letterIndex} = useContext(MainControllerContext);
    let mealCardRef = useRef(null);
    // mealsList = [{idMeal : 123, strMeal : "tagine", strTags : "lamb,couscous", strCategory:"traditional"}]
    let categories = [{category : "xxx"}];
    let areas = [{area : "canada"}];
    let mainIngredients = [{mainIngredient : "lamb"}];

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

    let mealsListPresentation = mealsList?.map((mealsObj)=>{
        return  (
                <li style={{margin : "10px 0px"}}><MealCard ref={mealCardRef} mealsList={mealsObj}/></li>
        )
    });

    const changeHandler = e =>{
        setAction({...action, [e.target.name] : e.target.value});
    }

    const scrollHandler = (e)=>{
        console.log(e.target.scrollTop, (mealsList.length - 1) * (500 - 14))
        if(letterIndex < 26){
            if(e.target.scrollTop >= (mealsList.length - 1) * (500 - 14)){
                setLetterIndex( 
                    // setTimeout(()=>{
                        prevIndex => prevIndex + 1
                    // }, 1000 * (mealsList.length -1)) 
                    );
            }
        }
    }
    
    return (
        <div style={{width : "100vw", height : "100%",display : "flex", justifyContent : "center", alignItems : "center"}}>
        {isloading ? <CircularProgress color={orange[300]} /> :
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
                <Box  onScroll={scrollHandler} className={classes.mealsList}>
                    <ul>{mealsListPresentation}</ul>
                </Box>
            </Box>
              
        }
        </div>
    )
}