import React, { Component } from 'react'

export default class SpaceX extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:1,
            name:"",
            image: "",
            description:"",
            links:"",
        }
    }

    componentDidMount(){
        fetch("https://api.spacexdata.com/v4/launches/upcoming")
        .then(res => res.json())
        .then(
            (res) => {
            //     console.log("result data : ",res);
            //    console.log("patch data : ",res.links.patch.small);
                this.setState({
                    image : res[1].links.patch.small,
                    description : res[1].details,
                    name : res[1].name,
                });
              
            }
        )
    }

    nextEvent = () => {
        var countTemp = this.state.count;
        
        var countTemp = countTemp + 1;
      

        fetch("https://api.spacexdata.com/v4/launches/upcoming")
        .then(res => res.json())
        .then(
            (res) => {
           
                this.setState({
                    count:countTemp,
                    image : res[countTemp].links.patch.small,
                    description : res[countTemp].details,
                    name : res[countTemp].name,
                });
              
            }
        )
    }

    render() {
        return (
            
            <div>
                SpaceX Data
                <h1>Upcoming event</h1>

                <div class="card">
                    <img src={this.state.image}></img>
                    <h2>{this.state.name}</h2>
                    <h5>{this.state.description}</h5>
                </div>

                <button onClick={this.nextEvent}>Next Event</button>
            </div>
        )
    }
}
