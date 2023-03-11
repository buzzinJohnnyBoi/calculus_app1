import React, { Component } from 'react';

class Select extends Component {
    render() { 
        if(this.props.vect_type) {
            return (          
                <div>
                    <select onChange={this.props.selectChange}>
                        <option value="add">Add</option>
                        <option value="sub">Subtract</option>
                        <option value="dot">Dot Product</option>
                        <option value="cross">Cross Product</option>
                        <option value="magv1">Magnitude Vector 1</option>
                        <option value="magv2">Magnitude Vector 2</option>
                    </select>
                </div>
            );
        }
        else {
            return (          
                <div>
                    <select onChange={this.props.selectChange}>
                        <option value="add">Add</option>
                        <option value="sub">Subtract</option>
                        <option value="dot">Dot Product</option>
                        <option value="cross">Cross Product</option>
                    </select>
                </div>
            );
        }
    }
}
 
export default Select;