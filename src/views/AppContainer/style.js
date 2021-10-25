import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    body : {
        height : "100%",
        width : "100vw",
        padding : theme.spacing(0, 0, 0, 0),
    },
    actions : {
        width : "100vw",
        height : "50px",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : theme.spacing(0, 2, 0, 2),
        marginBottom : 20
    },
    actionsContainer : {
        height : "100%",
        width : "100%",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "start",
        padding : theme.spacing(0, 2, 0, 2),
    },
    action : {
        width : "180px",
        height : "50%"
    },
    actionLabel : {
        fontSize : ".9em",
        fontFamily : "calibri"
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
    }
}))