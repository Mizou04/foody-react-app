import {Box, Select, MenuItem, FormControl, CircularProgress, Button } from "@material-ui/core";
import { useContext, useEffect, useRef, useState, memo } from "react";
import {MainControllerContext} from "../../controllers/main.controller";
import useStyles from './style'
import Filters from "../components/Filters/Filters";
import Loader from "../components/Loader/Loader"
import { Route, Switch } from "react-router";
import {ArrowBack} from "@material-ui/icons"
import MealDetailsPage from "../MealDetailsPage/MealDetailsPage"
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import MealsList from "../components/MealsList/MealsList";
import {MealByCriteriaContext} from "../../controllers/mealByCriteria.controller";
import FilteredList from "../components/filteredList/FilteredList";
import Error404 from "../components/404/404";

function AppContainer(){
    let classes = useStyles();
    let { mealsList, setMealsList, isloading, setLetterIndex, letterIndex} = useContext(MainControllerContext);
    // let {getMealsByCriteria, filteredMeals} = useContext(MealByCriteriaContext);
    let [mealsLoader, setMealsLoader] = useState(true);
    let history = useHistory();
    
    return (
            <Box className={classes.body}>
                <Switch>
                    <Route exact path='/'>
                        {isloading ? <Loader/> :
                            <>
                            <Filters />
                            <MealsList setMealsLoder={setMealsLoader} mealsLoder={mealsLoader}/>
                        </>
                        }
                    </Route>
                    <Route path={`meal/:id`}>
                        {/* <RouterLink to="/"> */}
                            <Button onClick={()=>history.goBack()} style={{position : "absolute", left : "10px", top : "10px"}} startIcon={<ArrowBack color="primary"/>}/>
                        {/* </RouterLink> */}
                        <MealDetailsPage />
                    </Route>
                    <Route path="/filter">
                        {isloading ? <Loader/> :
                            <>
                            {/* <RouterLink to="/"> */}
                                <Button onClick={()=>history.replace("/")} style={{position : "absolute", left : "10px", top : "10px"}} startIcon={<ArrowBack color="primary"/>}/>
                            {/* </RouterLink> */}
                            <Filters />
                            <FilteredList  mealsLoader={mealsLoader} setMealsLoader={setMealsLoader}/>
                        </>
                        }
                    </Route>
                    <Button onClick={()=>history.replace("/")} style={{position : "absolute", left : "10px", top : "10px"}} startIcon={<ArrowBack color="primary"/>}/>
                    <Route path='*' component={Error404}/>
                </Switch>
            </Box>
    )
}

export default memo(AppContainer)