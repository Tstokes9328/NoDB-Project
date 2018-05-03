import React, { Component} from 'react';
import axios from 'axios';

import Button from './Button';
import AddJedi from './AddJedi';


class List extends Component {
    constructor(){
        super()

        this.state = {
            people: [],
            jedi: [],
            vehicles: [],
            input: ''
        }

        this.getJedi = this.getJedi.bind(this)
        this.getPeople = this.getPeople.bind(this)
        this.addJedi = this.addJedi.bind(this)
        this.removeJedi = this.removeJedi.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getVehicles = this.getVehicles.bind(this)
    }

    addJedi(){
        axios.post('/api/people/jedi',  {
            newjedi: this.state.input
        }).then( (response) => {
            this.setState({jedi: response.data})
        }).catch()
    }

    removeJedi(id){
        axios.delete(`/api/people/jedi/${id}`).then( (response) => {
            this.setState({jedi: response.data})
        }).catch()
    }

    updateJedi(id){
        let name = this.state.input
        console.log(name, id)
        axios.put(`/api/people/jedi/${id}`, {name}).then( (response) => {
            this.setState({ jedi: response.data })
        }).catch()
    }

    handleChange(event){
        this.setState({input: event.target.value})
        console.log(this.state.input)
    }

    getJedi(){
        let promise = axios.get('/api/people/jedi')
        promise.then((response) => {
            this.setState({jedi: response.data})
        }).catch()
    }

    getPeople(){
        let promise = axios.get('https://swapi.co/api/people')
        promise.then( (response) => {
            this.setState({people: response.data.results})
        })
    }

    getVehicles(){
        let promise = axios.get('https://swapi.co/api/vehicles')
        promise.then((response) => {
            this.setState({vehicles: response.data.results})
        })
    }


render(){
    let mappedPeople = this.state.people.map( (element, index) => {
        return(
            <h2>{element.name}</h2>
        )
    })

    let mappedVehicles = this.state.vehicles.map( (element, index) => {
        return(
            <h2>{element.name}</h2>
        )
    })

    let jediList = this.state.jedi.map( (element, index) => {
        return (
            <div>
                <h2><input type="text" placeholder="New Name" onChange={this.handleChange}/><button onClick={() => this.updateJedi(element.id)}>Update Jedi</button> 
                <button onClick={() => this.removeJedi(element.id)}>Remove Jedi</button>{element.name}</h2>
            </div>
        )
    })
    return(
        <div>
            <div>
            {mappedPeople}
            <Button text="Show Hall of Fame" method={this.getPeople}/>
            </div>
                <br />
            <div className="vehicles">
            {mappedVehicles}
            <Button text="Show Vehicles" method={this.getVehicles}/>
            </div>
                <br />
            <div>
            {jediList}
            <input className="input-box" type="text" placeholder="New Jedi.." onChange={this.handleChange}/>
            <AddJedi text="Add Jedi" addjedi={this.addJedi}/>
            <button onClick={this.getJedi}>Show Jedis</button>
            </div>
        </div>
    )
}

}

export default List;