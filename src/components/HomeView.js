import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        filter: "",
        plants: plants
    }

    changeInput = (event) => {
        console.log("change", event.target.value);

        const filter = event.target.value;
        const filteredPlants = plants.filter(plant => {
            return plant.Common_Name.toLowerCase().indexOf(filter) > -1;
        });

        console.log(plants);

        this.setState({
            filter,
            plants: filteredPlants
        });
    }

    render(){
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?

        console.log("home props", this.props);

        return (
            <div>
                {
                    this.props.username
                    ? <div>Welcome, {this.props.username}</div>
                    : <></>
                }
                <input placeholder="Search for Plants" value={this.state.filter} onChange={this.changeInput}/>
                {<SearchForm /> } {/** DO NOT UNCOMMENT THIS LINE UNTIL WORKING ON ADVANCED DELIVERABLES */}
                <MatchContainer plants={this.state.plants}/>
            </div>
        )
    }
}

export default HomeView;