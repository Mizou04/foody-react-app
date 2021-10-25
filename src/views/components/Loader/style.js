import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    
    mealCard : {
        height : 500,
        width : "1000px",
        borderRadius : "0px"
    },
    mealThumb : {
        width : "50%",
        height : "100%",
        float : "left"
    },
    mealInfos : {
        width : "50%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-around",
        alignItems : "start",
        padding : "30px",
        float : "right"
    },
    mealDescription : {
        width : "80%",
        height : "100%"
    },
    mealTags : {
        width : "80%",
        height : 40,
        // display : "flex",
        // justifyContent : "space-around",
        // alignItems : "center"
    },
    mealTag : {
        // height : "70%",
        display : "inline-block",
        padding : "5px 10px",
        margin : "4px 4px 0px 0px",
        background : "lightgreen",
        "&:hover" : {
            background : "#12DD82",
        }
    }

    
}))