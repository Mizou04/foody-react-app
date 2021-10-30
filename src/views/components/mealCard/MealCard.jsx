import { Box, Card, CardContent, CardMedia, Input, Typography, Chip, Paper } from "@material-ui/core";
import { useContext, useEffect, memo } from "react";
import { MainControllerContext } from "../../../controllers/main.controller";
import useStyles from "./style"


function MealCard({mealsList}){
    let classes = useStyles();
    let { isloading, mealsIngredients } = useContext(MainControllerContext);
    let {strMeal, strMealThumb, idMeal, strCategory, strTags, strArea} = mealsList;


    let mealsIngredientsDisplay = mealsIngredients.filter((ingredient) => {
        if(mealsList[ingredient] !== null && mealsList[ingredient] !== ""){
            return ingredient
        }}).map((ingredient, i)=>{
        return <Typography component="p" variant="subtitle2" className={classes.ingredientStr} key={i}>{i + 1}- {mealsList[ingredient]}</Typography>
    })

    return(
            <Card className={classes.mealCard} key={idMeal} elevation={1} component={Paper}>
                <CardMedia title={strMeal} className={classes.mealThumb} image={strMealThumb}/>
                <CardContent className={classes.mealInfos}>
                    <CardContent className={classes.mealDescription}>
                        <Typography className={classes.mealTitle} variant="h5" component="h5">{strMeal}</Typography>
                        <Typography className={classes.mealCategorie} color='textSecondary' variant="subtitle1"><span>{strArea}</span> {strCategory}</Typography>
                    </CardContent>
                    <CardContent className={classes.ingredientsDiv}>{mealsIngredientsDisplay}</CardContent>
                    <CardContent className={classes.mealTags}>
                        {strTags?.split(",").map(el=> <Chip className={classes.mealTag} onClick={()=>{}} label={el}/>)}
                    </CardContent>
                </CardContent>
            </Card>       
        )
}

export default memo(MealCard)