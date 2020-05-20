import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        plants: plants,
        search: ""
    }
    toggleSearch=(event)=>{  
        this.setState({ 
            search: event.target.value  
        })
        
    }

    render(){
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?
        let filtered = this.state.plants.filter(plant =>{
            return plant["Common_Name"].includes(this.state.search)
        })
        return (
            <div>
                <input placeholder="Search for Plants" value={this.state.search} onChange={this.toggleSearch}/>
                {/* <SearchForm plants={this.state.plants} search={this.state.search}/> */}
                <MatchContainer plants={this.state.search===""?this.state.plants: filtered} search={this.state.search}/>
            </div>
        )
    }
}

export default HomeView;