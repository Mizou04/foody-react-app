import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    body : {
        height : "100%",
        width : "100vw",
        padding : theme.spacing(0, 0, 0, 0),
    },
    mealsList : {
        height : "calc(100% - 50px)",
        width : "100%",
        // margin : "auto",
        // scrollMarginBlock : 20,
        display : "flex",
        justifyContent : "start",
        alignItems : "center",
        flexDirection : "column",
        overflow : "scroll",
        paddingTop : "0px"
    },
    ul : {
        listStyle : "none",
    }
}))