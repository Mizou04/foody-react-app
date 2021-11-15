import { memo, useContext, useEffect, useState, } from "react"
import { MainControllerContext } from "../../../controllers/main.controller"
import {Box, Select, MenuItem, FormControl, CircularProgress, TextField, Button, Paper } from "@material-ui/core";
import useStyles from "./style"
import { Link as RouterLink } from "react-router-dom";

function Filters(){
    let [filter, setFilter] = useState("");
    let [criteria, setCriteria] = useState("");
    let classes = useStyles();
    const categories = [{"strCategory":"Beef"},{"strCategory":"Breakfast"},{"strCategory":"Chicken"},{"strCategory":"Dessert"},{"strCategory":"Goat"},{"strCategory":"Lamb"},{"strCategory":"Miscellaneous"},{"strCategory":"Pasta"},{"strCategory":"Pork"},{"strCategory":"Seafood"},{"strCategory":"Side"},{"strCategory":"Starter"},{"strCategory":"Vegan"},{"strCategory":"Vegetarian"}];
    const areas = [{strArea : "Unknown"},{"strArea":"American"},{"strArea":"British"},{"strArea":"Canadian"},{"strArea":"Chinese"},{"strArea":"Croatian"},{"strArea":"Dutch"},{"strArea":"Egyptian"},{"strArea":"French"},{"strArea":"Greek"},{"strArea":"Indian"},{"strArea":"Irish"},{"strArea":"Italian"},{"strArea":"Jamaican"},{"strArea":"Japanese"},{"strArea":"Kenyan"},{"strArea":"Malaysian"},{"strArea":"Mexican"},{"strArea":"Moroccan"},{"strArea":"Polish"},{"strArea":"Portuguese"},{"strArea":"Russian"},{"strArea":"Spanish"},{"strArea":"Thai"},{"strArea":"Tunisian"},{"strArea":"Turkish"},{"strArea":"Vietnamese"}];
    


    let categoriesList = categories.map(({strCategory}) => {
        return <MenuItem key={strCategory} value={strCategory}>{strCategory}</MenuItem>
    })
    let areasList = areas.map(({strArea}) => {
        return <MenuItem key={strArea} value={strArea}>{strArea}</MenuItem>
    })
    
    const filterSwitch = () =>{
        switch (filter){
            case "category" :
                return <Select variant="filled" value={criteria} onChange={changeHandler} placeholder="Category" className={classes.action}>{categoriesList}</Select>;
            case "area" :
                return <Select variant="filled" value={criteria} onChange={changeHandler} placeholder="Area" className={classes.action}>{areasList}</Select>
            case "ingredient" :
                return <TextField /*onInput={typeHandler}*/ type="text" value={criteria} onChange={changeHandler} placeholder="Main Ingredient" className={classes.action}/>;
        }
    }


    function changeHandler(e){
        setCriteria("");
        if(e.target.name === 'filter'){
            setFilter(e.target.value)
        } else{
            setCriteria(e.target.value.replace(" ", "_"));
        };
    };

    return (
        <Box className={classes.actions} component={Paper} elevation="2">
            <div className={classes.actionsContainer}>
                <Select variant="filled" color='primary' className={classes.action} name='filter' placeholder="Filter by :" value={filter} onChange={changeHandler}>
                    <MenuItem value='category'>Category</MenuItem>
                    <MenuItem value='area'>Area</MenuItem>
                    <MenuItem value='ingredient'>Main Ingredient</MenuItem>
                </Select>
                {filterSwitch()}
            </div>
            <Button to={{pathname : "/filter", state : { 
                 filter, criteria
            }}} component={RouterLink} className={classes.sumbit} variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    )

    
}

export default Filters