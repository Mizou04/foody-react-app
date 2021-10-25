import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    
    mealCard : {
        height : 500,
        width : "1000px",
        borderRadius : "0px",
        marginBottom : "10px"
    },
    mealThumb : {
        width : "50%",
        height : "100%",
        float : "left"
    },
    mealInfos : {
        height : "100%",
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
        height : "20%",
        margin : "-20px 0px 20px 0px"
    },
    ingredientsDiv : {
        display : "grid",
        // padding : "20px 30px",
        height : "70%",
        width : "100%",
        gridTemplateColumns : "1fr 1fr",
    },
    ingredientStr : {
        display : "block",
        fontSize : "4em",

    }
    ,
    mealTags : {
        width : "100%",
        height : "30%",
        // display : "flex",
        // justifyContent : "space-around",
        // alignItems : "center"
        paddingTop : "40"
    },
    mealTag : {
        // height : "70%",
        width : "100px",
        display : "inline-flex",
        justifyContent :"center",
        alignItems : "center",
        padding : "5px 10px",
        margin : "4px 4px 0px 0px",
        background : "lightgreen",
        "&:hover" : {
            background : "#12DD82",
            width : "120px",
            transition : "all 0.2s ease"
        }
    }

    
}))