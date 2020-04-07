import React, { Component } from 'react'

export default class AddTextFiled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.state({ value: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    renderLabel= () =>{
        
    }
    render() {
        let Element = this.props.Element;
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
            </div>
        )
    }
}
