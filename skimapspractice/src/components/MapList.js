import React from 'react'
import axios from 'axios'

import SearchBar from "./SearchBar";

class MapList extends React.Component{
    async onSearchSubmit(term){
        const response = await axios.get('https://skimap.org/Regions/view/', {
        params: {term}
        }).then(response =>{console.log(response.data.results)})

    }

    render(){
        return <div>
            <SearchBar onSubmit ={this.onSearchSubmit()}/>
        </div>
    }

};

export default MapList