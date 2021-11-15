import { Box, Grid, Paper, Card, Typography, Button, CardMedia, ButtonBase, IconButton, CircularProgress } from "@material-ui/core";
import { ShareOutlined, HowToReg, ListAltOutlined, HelpOutlined, HelpOutlineOutlined, LiveHelp, Facebook, Twitter, WhatsApp } from "@material-ui/icons";
import useStyles from "./style"
import { useState, useEffect, useRef, useContext, memo } from "react";
import { cyan, green, lightGreen } from "@material-ui/core/colors";
import { useParams, useHistory, Route, useLocation } from "react-router";
import { MealByIDContext } from "../../controllers/mealById.controller";

// const CustomButton = 

export default memo(function MealDetails({}){
    let location = useLocation();
    let {idMeal} = useParams();
    let {getMealById, mealById} = useContext(MealByIDContext)
    // let {idMeal} = location.state;
    
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
        console.log(mealById)
        console.log(idMeal)
        getMealById(idMeal);
    }, [idMeal])


    let mealDetailsPresenter = ()=>{
        switch (content){
            case "description": 
            return <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">{mealById[0]?.strMeal}</Typography>
                        <Typography variant="subtitle2">{mealById[0]?.strArea} {mealById[0]?.strCategory}</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop:"30px"}}>{dataIsReady() && "lorem ipsilum"}</Typography>
                    </Box>
            case "instructions": 
            return  <Box style={{width : "84%", height : "100%", padding:'20px'}}>
                        <Typography variant="h4">Instructions</Typography>
                        <Typography style={{lineHeight: "2em", textIndent:"20px", marginTop : "30px"}}>{dataIsReady() && mealById[0]?.strInstructions}</Typography>
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
        
        dataIsReady() && <Box component={Paper} className={classes.mealPage} component={Paper} elevation={4} >
                
                <Box className={classes.mealMedia}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} onClick={()=>{setPreview(true)}} src={dataIsReady && mealById[0]?.strMealThumb} /*style={{cursor : "pointer",background : "url("+mealData?.strMealThumb+") no-repeat" , backgroundPoisition : "top", backgroundSize : "cover",  }}*/ />
                    </div>
                    {preview &&<div onClick={clickHandler} id="previewContainer" className={classes.previewContainer}><Card className={classes.preview}><CardMedia style={{width : "100%", height : "100%"}} image={mealById[0]?.strMealThumb}/><button style={{color : "white", zIndex : "40000000",position : "relative", top : "10px", right : "10px"} } onClick={()=>{setPreview(false)}}>x</button></Card></div>}
                    <div className={classes.videoContainer}>
                        <iframe  className={classes.video} src={mealById[0]?.strYoutube.replace("/watch?v=", "/embed/")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube"/>
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
})