import { Box, Grid, Paper, Card, Typography, Button, CardMedia, ButtonBase, IconButton } from "@material-ui/core";
import { ShareOutlined, HowToReg, ListAltOutlined, HelpOutlined, HelpOutlineOutlined, LiveHelp, Facebook, Twitter, WhatsApp } from "@material-ui/icons";
import useStyles from "./style"
import myVideo from "../../assets/video.mp4"
import myImage from "../../assets/image.jpg"
import { useState, useEffect, useRef, useContext } from "react";
import { cyan, green, lightGreen } from "@material-ui/core/colors";
import { useParams, useHistory } from "react-router";
import { MealByIDContext } from "../../controllers/mealById.controller";

// const CustomButton = 

export default function MealDetails({}){
    const {mealById} = useContext(MealByIDContext);
    let mealData = mealById[0]

    let classes = useStyles();
    let [content, setContent] = useState("description");
    let [preview, setPreview] = useState(false);

    let descriptionRef = useRef();
    let instructionsRef = useRef();
    let shareRef = useRef();
    
    useHistory().push("/meal/" + mealData?.idMeal, window.JSON.stringify(mealData));

    function clickHandler(e){
        e.target.id === "previewContainer" && setPreview(false)
    }

    let mealDetailsPresenter = ()=>{
        switch (content){
            case "description": 
            return <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">{mealData?.strMeal}</Typography>
                        <Typography variant="subtitle2">{mealData?.strArea} {mealData?.strCategory}</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus dicta laborum, aliquid recusandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nam perspiciatis fugit natus voluptas aspernatur sed ex tempora repellat incidunt?</Typography>
                    </Box>
            case "instructions": 
            return  <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">Instructions</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop : "30px"}}>{mealData?.strInstructions}</Typography>
                    </Box>
            case "share" :
            return  <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">share :</Typography>
                        <div style={{marginTop : "30px",width : "50%", height : "50%",display :"flex", flexDirection : "column", justifyContent :"space-around", alignItems :"start"}}>
                            <Button className={classes.socialIcon} color="primary" variant="contained" startIcon={<Facebook color="white"/>}><Typography variant="button">Facebook</Typography></Button>
                            <Button className={classes.socialIcon} color="primary" style={{background : cyan[500]}} variant="contained" startIcon={<Twitter color="white"/>}><Typography variant="button">Twitter</Typography></Button>
                            <Button className={classes.socialIcon} color="primary" style={{background : lightGreen[400]}} variant="contained" startIcon={<WhatsApp color="white"/>}><Typography variant="button">Whatsapp</Typography></Button>
                        </div>
                        
                    </Box>
                    }
        }
    


    return (
        <Box component={Paper} className={classes.mealPage} component={Paper} elevation={4} >
                
                <Box className={classes.mealMedia}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} onClick={()=>{setPreview(true)}} src={mealData?.strMealThumb} /*style={{cursor : "pointer",background : "url("+mealData?.strMealThumb+") no-repeat" , backgroundPoisition : "top", backgroundSize : "cover",  }}*/ />
                    </div>
                    {preview &&<div onClick={clickHandler} id="previewContainer" className={classes.previewContainer}><Card className={classes.preview}><CardMedia style={{width : "100%", height : "100%"}} image={mealData?.strMealThumb}/><button style={{color : "white", zIndex : "40000000",position : "relative", top : "10px", right : "10px"} } onClick={()=>{setPreview(false)}}>x</button></Card></div>}
                    <div className={classes.videoContainer}>
                        <video  className={classes.video} width='360' /*src={ mealData?.strYoutube}*/ height="260" controls/>
                    </div>
                </Box>
                 <Box className={classes.mealDetails}  component={Paper} elevation={1} >
                    {mealDetailsPresenter()}
                </Box>
                <Box className={classes.mealIcons}>
                    <Button className={classes.mealIcon} name="description" disabled={content === "description"} ref={descriptionRef} onClick={()=>{setContent(descriptionRef.current.name)}}>
                        <ListAltOutlined/>
                    </Button>
                    <Button className={classes.mealIcon} name="instructions" disabled={content === "instructions"} ref={instructionsRef} onClick={()=>{setContent(instructionsRef.current.name)}}>
                        <HelpOutlineOutlined/>
                    </Button>
                    <Button className={classes.mealIcon} name="share" disabled={content === "share"} ref={shareRef} onClick={()=>{setContent(shareRef.current.name)}}>
                        <ShareOutlined/>
                    </Button>
                </Box>

        </Box>
        )
}