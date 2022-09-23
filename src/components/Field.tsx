import React from "react";
import {Button, Grid} from "@mui/material";
import {Team} from "./Team";

type MyProp = {
    updaters: {
        blue: (...args: any[]) => void,
        red: (...args: any[]) => void
    }
};
type MyState = {};

export class Field extends React.Component<MyProp, MyState> {
    constructor(props: MyProp) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={2} sx={{padding:'1rem', maxHeight:'85vh'}}>
                <Grid item xs={6}>
                    <Team scoreUpdater={this.props.updaters.blue} color={'blue'}/>
                </Grid>
                <Grid item xs={6}>
                    <Team scoreUpdater={this.props.updaters.red} color={'red'}/>
                </Grid>
            </Grid>
        );
    }

}
