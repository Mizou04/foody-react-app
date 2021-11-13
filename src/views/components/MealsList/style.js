import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    mealDetailsPage : {
        height : '100%',
        width : "100%"
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
        paddingTop : "0px",
        overflowX : "hidden"
    },
    ul : {
        listStyle : "none",
    }
}))