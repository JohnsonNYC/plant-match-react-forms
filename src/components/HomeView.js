import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        plants: plants,
        query: ''
    }

    handleSearch = event => this.setState({query: event.target.value})
    render(){
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?
        let filteredPlants = this.state.plants.filter(plant => plant.Common_Name.toLowerCase().includes(this.state.query.toLowerCase()))

        return (
            <div>
                <input value={this.state.query} onChange={this.handleSearch} placeholder="Search for Plants"/>
                {/* <SearchForm /> */} {/** DO NOT UNCOMMENT THIS LINE UNTIL WORKING ON ADVANCED DELIVERABLES */}
                <MatchContainer plants={filteredPlants}/>
            </div>
        )
    }
}

export default HomeView; 