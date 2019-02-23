import React from 'react'
import axios from 'axios'

class MapList extends React.Component{
    onSearchSubmit(term){
        axios.get('https://skimap.org/Regions/view/', {
        params: {term}
        })
        console.log(term)
    }

    render(){
        return <div>hi</div>
    }

};

export default MapList