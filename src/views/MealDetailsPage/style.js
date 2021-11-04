import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme)=>({
    mealPage : {
        height : '100%',
        width : "90%",
        background : grey[50],
        margin : "auto",
        marginTop : "10px",
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
        width : "80%",
        height : "100%",
    },
    previewContainer :{
        width : "100%",
        height : "100%",
        top : 0,
        left : 0,
        position : "absolute",
        zIndex : 3000000,
        margin : "auto",
        paddingTop : "30px",
    },
    preview : {
        width : '80%',
        height : "90%",
        // position : "absolute",
        margin : "auto",
        top : "20px",
        padding : "5px"
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