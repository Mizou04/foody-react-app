import { makeStyles, createStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default makeStyles(theme => ({
    actions : {
        width : "85%",
        height : "50px",
        display : "flex",
        justifyContent : "line-start",
        alignItems : "center",
        margin : "auto",
        padding : theme.spacing(0, 2, 0, 2),
        position : "relative",
        background : "hsl(150, 80%, 46%)"
    },
    actionsContainer : {
        height : "100%",
        width : "100%",
        display : "flex",
        justifyContent : "line-start",
        alignItems : "center",
    },
    action : {
        width : "180px",
        height : "95%",
        marginRight : "60px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        color : "white"
    },
    sumbit : {
        position : "absolute",
        right : 30,
        top : "50%",
        transform : "translateY(-50%)",
        background : "hsl(150, 80%, 36%)"
    }
}))