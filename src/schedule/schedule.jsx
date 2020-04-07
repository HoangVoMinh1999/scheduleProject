import React, { Component } from 'react'
import ScheduleItem from './ScheduleItem';

export default class schedule extends Component {
    constructor(props) {
        super(props);
        this.state =
            // schedule: [
            //     { "Sub": "Quy Hoach Tuyen Tinh", "Day": "Monday", "Start": "1", "End": "3", "Class": "17_11" },
            //     { "Sub": "PT & QL YCPM", "Day": "Wednesday", "Start": "7", "End": "9", "Class": "17_31" },
            //     { "Sub": "TK phan mem", "Day": "Tuesday", "Start": "4", "End": "6", "Class": "17_31" },
            //     { "Sub": "JAVA", "Day": "Thursday", "Start": "3", "End": "5", "Class": "17_31" },
            // ]

            [
                {
                    
                    day: "Monday",
                    subject: [
                        {
                            name: "Quy hoach tuyen tinh",
                            class: "17_22",
                            start: 1,
                            end: 4
                        }
                    ]
                },
                {
                    day: "Tuesday",
                    subject: [
                        {
                            name: "JAVA",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },
                {
                    day: "Wednesday",
                    subject: [
                        {
                            name: "JAVA",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },
                {
                    day: "Thursday",
                    subject: [
                        {
                            name: "JAVA",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },
                {
                    day: "Friday",
                    subject: [
                        {
                            name: "JAVA",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },
                {
                    day: "Saturday",
                    subject: [
                        {
                            name: "Trinh Vu Minh Hoang",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },
                {
                    day: "",
                    subject: [
                        {
                            name: "Vo Minh Hoang",
                            class: "17_22",
                            start: 7,
                            end: 9
                        }
                    ]
                },

            ]

    }


    renderTable = () => {
       let list=[...this.state];
       let result=null;

       result=list.map((item,index)=>{
           return (
               <ScheduleItem key={index} item={item} id={index}/>
           )
       })
       console.log(result);
       return result;
    }
   
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ nhật</div>
                </div>
                <div className="row">
                    {this.renderTable()}
                </div>
            </div>

        )
    }
}

