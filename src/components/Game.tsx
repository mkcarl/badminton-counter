import React from "react";
import {Scoreboard} from "./Scoreboard";
import {Field} from "./Field";

type MyProp = {}
type MyState = {
    blue: number;
    red: number;
}

export class Game extends React.Component<MyProp, MyState> {
    constructor(props: MyProp) {
        super(props);
        this.state = {
            blue: 0,
            red: 0
        }
        this.updateRedScore = this.updateRedScore.bind(this)
        this.updateBlueScore = this.updateBlueScore.bind(this)

    }

    render() {
        return (<>
            <Scoreboard blue={this.state.blue} red={this.state.red}/>
            <Field updaters={{red:this.updateRedScore, blue:this.updateBlueScore}}/>
        </>);
    }

    updateBlueScore(value:number){
        if (value < 0 && this.state.blue == 0) return
        this.setState({
            blue: this.state.blue + value
        })
    }

    updateRedScore(value:number){
        if (value < 0 && this.state.red == 0) return
        this.setState({
            red: this.state.red + value
        })
    }

}
