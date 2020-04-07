import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{
    state={ images:[]};

   async onSearchSubmit(term){
        // console.log(term);
      const response= await  axios.get('https://api.unsplash.com/search/photos',{
            params:{ query: term},
            headers: {
                Authorization:
               ' Client-ID xHbw6-oFjZsB0AdzVLQ2jflnRZ3T7N3FnKmIQlyX518'
            }
        });
        // .then(response=>{
        //     console.log(response.data.results);
        // });

        // console.log(response.data.results);
        this.setState({ images:response.data.results});

    }

    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found : { this.state.images.length} Images
        </div>
        
        );
    }
}


export default App;