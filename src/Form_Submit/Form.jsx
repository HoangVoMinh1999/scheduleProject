import React, { Component } from 'react'
import AddTextField from "./AddTextFiled"

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            info:["Subject","Day","start","end","Class","teacher","Note"],

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
        let list=this.state.info;
        let result=[];
        for (let i=0;i<list.length;i++){
            result.push(
                <span><AddTextField Element={list[i]}/></span>
                
            )   
        }
        return result;
    }
    render() {
        return (
            <div className="container">
                <h1>Thêm Môn Học</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderForm()}
                    <button type="submit">Xác Nhận</button>
                </form>
            </div>
        )
    }
}
