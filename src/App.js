import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

let filteredRobots;
class App extends Component{ // Trying to understand state
    
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=> this.setState({robots:users}));
    }
    

    onSearchChange=(event)=>{

        this.setState({searchfield:event.target.value});

    }

    render(){
        filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length===0){
            return <h1>Loading</h1>
        }else{
    return (


        <div className="Middle">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>  
            <Scroll>
                <ErrorBoundary> 
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>

        </div>

    );
    }
}
}

export default App;