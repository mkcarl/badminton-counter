import React from "react";
import {Button, Grid, Paper} from "@mui/material";

type MyProp = {
    scoreUpdater: ReturnType<any>,
    color :string
};
type MyState = {};

export class Team extends React.Component<MyProp, MyState> {
    constructor(props:MyProp) {
        super(props);

    }
    render() {
        return (
            <Paper sx={{padding:'1rem', height:'60vh', backgroundColor: this.props.color ?? 'white'}}
                   onClick={()=>{this.props.scoreUpdater(1)}}
                   onDoubleClick={()=>{console.log('double click')}}
            >
            </Paper>
        );
    }
}
