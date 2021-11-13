import { Box, Grid, Paper, Card, Typography, Button, CardMedia, ButtonBase, IconButton, CircularProgress } from "@material-ui/core";
import { ShareOutlined, HowToReg, ListAltOutlined, HelpOutlined, HelpOutlineOutlined, LiveHelp, Facebook, Twitter, WhatsApp } from "@material-ui/icons";
import useStyles from "./style"
import { useState, useEffect, useRef, useContext } from "react";
import { cyan, green, lightGreen } from "@material-ui/core/colors";
import { useParams, useHistory, Route, useLocation } from "react-router";

// const CustomButton = 

export default function MealDetails({}){
    let location = useLocation().state
    
    let {mealById, setMealById, id} = location;
    setMealById = JSON.parse(setMealById)
    
    let classes = useStyles();
    let [content, setContent] = useState("description");
    let [preview, setPreview] = useState(false);

    let descriptionRef = useRef();
    let instructionsRef = useRef();
    let shareRef = useRef();

    function clickHandler(e){
        e.target.id === "previewContainer" && setPreview(false)
    }

    const dataIsReady = ()=>{
        return mealById.length === 0 ? <CircularProgress/> : true
    }
  

    useEffect(()=>{
        setMealById(id);
        return ()=>{
            mealById = 0;
        }
    }, [])


    let mealDetailsPresenter = ()=>{
        switch (content){
            case "description": 
            return <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">{mealById?.strMeal}</Typography>
                        <Typography variant="subtitle2">{mealById?.strArea} {mealById?.strCategory}</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop:"30px"}}>{dataIsReady() && "lorem ipsilum"}</Typography>
                    </Box>
            case "instructions": 
            return  <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">Instructions</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop : "30px"}}>{dataIsReady() && mealById?.strInstructions}</Typography>
                    </Box>
            case "share" :
            return  <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">share :</Typography>
                        <div style={{marginTop : "30px",width : "50%", height : "50%",display :"flex", flexDirection : "column", justifyContent :"space-around", alignItems :"start"}}>
                            <Button className={classes.socialIcon} color="primary" variant="contained" startIcon={<Facebook color="white"/>}><Typography variant="button">{dataIsReady() && "Facebook"}</Typography></Button>
                            <Button className={classes.socialIcon} color="primary" style={{background : cyan[500]}} variant="contained" startIcon={<Twitter color="white"/>}><Typography variant="button">{dataIsReady() && "Twitter"}</Typography></Button>
                            <Button className={classes.socialIcon} color="primary" style={{background : lightGreen[400]}} variant="contained" startIcon={<WhatsApp color="white"/>}><Typography variant="button">{dataIsReady() && "Whatsapp"}</Typography></Button>
                        </div>
                        
                    </Box>
                    }
        }
    


    return (
        <Box component={Paper} className={classes.mealPage} component={Paper} elevation={4} >
                
                <Box className={classes.mealMedia}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} onClick={()=>{setPreview(true)}} src={dataIsReady && mealById?.strMealThumb} /*style={{cursor : "pointer",background : "url("+mealData?.strMealThumb+") no-repeat" , backgroundPoisition : "top", backgroundSize : "cover",  }}*/ />
                    </div>
                    {preview &&<div onClick={clickHandler} id="previewContainer" className={classes.previewContainer}><Card className={classes.preview}><CardMedia style={{width : "100%", height : "100%"}} image={mealById?.strMealThumb}/><button style={{color : "white", zIndex : "40000000",position : "relative", top : "10px", right : "10px"} } onClick={()=>{setPreview(false)}}>x</button></Card></div>}
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