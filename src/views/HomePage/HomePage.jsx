import { Box, makeStyles, createStyles, Input, InputLabel } from "@material-ui/core";
import { useEffect , useState} from "react";
import useStyles from "./style"


export default function HomePage({children, ...props}){
    let classes = useStyles();

    return (
        <Box className={classes.body}>
            {/* <header className={classes.header}>
                <Input
                    placeholder="search meal"
                    color="primary"
                    className={classes.searchInput}
                    
                />
            </header> */}
            {children}
        </Box>
    )
}