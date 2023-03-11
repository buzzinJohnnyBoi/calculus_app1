import React, { Component } from "react";
import vector from "./vect";

class Output extends Component {
    render_MD() {
        const vect1 = this.props.vectorsMD[0].values;
        const vect2 = this.props.vectorsMD[1].values;
        var oper = this.props.operation;
        if(oper === "add") {
            const vect = vector.Add(vect1, vect2, false);
            return (
                <div className="input-vectors">
                    <p>{vect[0]} </p>
                    <p> [{vect[1]}°]</p>
                </div>
            );
        }
        else if(oper === "sub") {
            const vect = vector.Subtract(vect1, vect2, false);
            return (
                <div className="input-vectors">
                    <p>{vect[0]} </p>
                    <p> [{vect[1]}°]</p>
                </div>
            );
        }
        else if(oper === "dot") {
            const vect = vector.DotProduct(vect1, vect2, false);
            return (
                <div className="input-vectors">
                    <p>{vect} </p>
                </div>
            );
        }
        else if(oper === "cross") {
            const vect = vector.CrossProduct(vect1, vect2, false);
            return (
                <div className="input-vectors">
                    <p>|cross product| = {vect} </p>
                </div>
            );
        }
        return <h1>John</h1>
    }
    render_CV() {
        const vect1 = this.props.vectors[0].values;
        const vect2 = this.props.vectors[1].values;
        var oper = this.props.operation;
        if(oper === "add") {
            const vect = vector.Add(vect1, vect2);
            return (
                <div className="input-vectors">
                    <b>[</b>
                        <p>{vect[0]} , </p>
                        <p>{vect[1]} , </p>
                        <p>{vect[2]}</p>
                    <b>]</b>
                </div>
            );
        }
        else if(oper === "sub") {
            const vect = vector.Subtract(vect1, vect2);
            return (
                <div className="input-vectors">
                    <b>[</b>
                        <p>{vect[0]} , </p>
                        <p>{vect[1]} , </p>
                        <p>{vect[2]}</p>
                    <b>]</b>
                </div>
            );
        }
        else if(oper === "dot") {
            const vect = vector.DotProduct(vect1, vect2);
            return (
                <div className="input-vectors">
                    <p>{vect}</p>
                </div>
            );
        }
        else if(oper === "cross") {
            const vect = vector.CrossProduct(vect1, vect2);
            return (
                <div className="input-vectors">
                    <b>[</b>
                        <p>{vect[0]} , </p>
                        <p>{vect[1]} , </p>
                        <p>{vect[2]}</p>
                    <b>]</b>
                </div>
            );
        }
        else if(oper === "magv1") {
            const vect = vector.Magnitute(vect1);
            return (
                <div className="input-vectors">
                    <p>{vect}</p>
                </div>
            );
        }
        else if(oper === "magv2") {
            const vect = vector.Magnitute(vect2);
            return (
                <div className="input-vectors">
                    <p>{vect}</p>
                </div>
            );
        }
    }
    render() {
        if(this.props.vect_type) {
            return this.render_CV();
        }
        return this.render_MD();
    }
}
 
export default Output;