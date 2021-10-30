import { Box, CircularProgress} from "@material-ui/core";
import { useContext } from "react";
import useStyles from "./style"


export default function({}){
    let classes = useStyles();

    return(
        <Box className={classes.loaderContainer} elevation={1}>
            <CircularProgress color="secondary"/>
        </Box>)
}