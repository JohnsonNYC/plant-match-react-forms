import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        plants: plants,
        search: ''
    }

    searchPlants = (event) => {
        this.setState({search: event.target.value})
    }



    render(){
        console.log(this.state)
        const searchedPlants = this.state.plants.filter(plant => plant.Common_Name.toLowerCase().includes(this.state.search.toLowerCase()))
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?

        return (
            <div>
                <input onChange={this.searchPlants} placeholder="Search for Plants"/>
                {/* <SearchForm /> */} {/** DO NOT UNCOMMENT THIS LINE UNTIL WORKING ON ADVANCED DELIVERABLES */}
                <MatchContainer plants={searchedPlants}/>
            </div>
        )
    }
}

export default HomeView;