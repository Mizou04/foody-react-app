import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme)=>({
    mealPage : {
        height : '100%',
        width : "90%",
        background : grey[50]
    },
    mealMedia : {
        height : "35%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        background : grey[900]
    },
    imgContainer : {
        width : "50%",
        height : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    img : {
        width : "90%",
        height : "100%",
    },
    videoContainer : {
        width : "50%",
        height : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    video : {
        width : "100%",
        height : "100%",
    },
    mealDetails : { // mealDescription
        height : "55%",
        width : "60%",
        display : "flex",
        justifyContent : "center",
        alignItems : "start",
        margin : "auto",
        marginTop : "5px",
    },
    mealIcons : {
        width : "30%",
        height : "auto",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        margin : "auto",
        marginTop : "5px"
    },
    mealIcon : {
        // width : 45,
        // height : 45,
        color : grey[900],
        padding : "4px 15px",
        marginRight : "10px",
        "&:hover" : {color : "black"},
         "&:disabled":{
            border : "1px grey solid",
            color : "hsl(120, 100%, 60%)"
        }
    },
    socialIcon : {
        width : "150px",
        marginLeft : "100px"
    }
    ,
    disabled : {}
}))