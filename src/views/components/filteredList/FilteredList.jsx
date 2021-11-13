import { memo, useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router';
import useStyles from "./style";
import {Box, CircularProgress} from "@material-ui/core"
import MealCard from '../mealCard/MealCard.jsx';
import { MealByCriteriaContext } from '../../../controllers/mealByCriteria.controller';

const FilteredList = ({mealsLoader, setMealsLoader}) => {
    let classes = useStyles();
    let location = useLocation();
    let {criteria : value, filter} = location.state;
    let {getMealsByCriteria, filteredMeals} = useContext(MealByCriteriaContext);

    useEffect(()=>{
        console.log("locationState : " , location)

    }, [location])
    
    useEffect(()=>{
        // setMealsLoader(true);
        getMealsByCriteria(filter, value)
        // setMealsLoader(false);
    }, [])

    
    let mealsListPresentation = filteredMeals?.map((mealsObj, i)=>{
            return <li key={mealsObj.idMeal}  style={{margin : "10px 0px"}}>
                        <MealCard mealsList={mealsObj}/>
                </li>
    });


    return (
        <Box className={classes.mealsList}>
            <ul className={classes.ul}>{mealsListPresentation}</ul>
            {
                <div  style={{height : "100px", width:"100%",display : "flex", justifyContent: "center"}}>
                 <span><CircularProgress color="primary"/></span>
                </div>
            }
        </Box>
        )
}

export default FilteredList;