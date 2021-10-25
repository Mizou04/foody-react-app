import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    body : {
        height : "100vh",
        width : "100vw",
        padding : theme.spacing(0, 0, 0, 0),
        background : "hsl(150, 80%, 70%)"
    },
    header : {
        background : "hsl(150, 80%, 40%)",
        height: 50,
        display : "flex"
    },
    searchInput : {
        margin : "auto",
        width : "30%"
    }
}))