import React from "react";
import {Box, Chip, Typography} from "@mui/material";

type MyProp = {
    red: number;
    blue: number;
}
type MyState = {

}

export class Scoreboard extends React.Component<MyProp, MyState>{
    constructor(props : MyProp) {
        super(props);
    }
    render() {
        return (
            <Box sx={{height:'15vh'}}>
                <Typography variant={'h6'} fontSize={'3rem'}>
                    {`${this.props.blue} - ${this.props.red}`}
                </Typography>
            </Box>

        );
    }
}
