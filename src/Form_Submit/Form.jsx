import React, { Component } from 'react'
import AddTextField from "./AddTextFiled"

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            info:["Subject","Time","Class"],
            value:"",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
    }
    renderForm = () => {
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
