import React, { Component } from "react";

class Input extends Component {
    render() { 
        return (
        <div className="input-vectors">
            {this.inputs()}
        </div>
        );
    }
    inputs() {
        if(this.props.cartesian_vector) {
            const inputs = this.props.inputs.map((input) => 
                this.render_input(input)
            );
            return inputs;
        }
        else {
            const inputs = this.props.inputsMD.map((input) => 
                this.render_input_MD(input)
            );
            return inputs;
        }
    }
    render_input(input) {
        const id = input.id;
        const vals = [];
        for (let i = 0; i < input.values.length; i++) {
            vals.push(
                <React.Fragment key={i}>
                <input
                    type="text"
                    onInput={(event) => {
                    this.props.inputChange(event, id, i);
                    }}
                />
                {i === input.values.length - 1 ? false : <p>,</p>}
                </React.Fragment>
            );
        }

        return (
            <div key={id}>
                <h2>Vector {id} </h2>
                <b>[</b>
                    {vals}
                <b>]</b>
            </div>
        );
    }
    render_input_MD(input) {
        const id = input.id;
        const vals = [];
        for (let i = 0; i < input.values.length; i++) {
            vals.push(
                <React.Fragment key={i}>
                {i !== input.values.length - 1 ? false : <b>[</b>}
                <input
                    type="text"
                    onInput={(event) => {
                    this.props.inputChange(event, id, i);
                    }}
                />
                {i !== input.values.length - 1 ? false : <b>°]</b>}
                </React.Fragment>
            );
        }

        return (
            <div key={id}>
                <h2>Vector {id} </h2>
                {vals}
            </div>
        );
    }
}
 
export default Input;