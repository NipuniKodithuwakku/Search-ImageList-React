import React from 'react';

class SearchBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);

    // }

    // onInputClick(){
    //     console.log("Input clicked!");
    // }

    state={term:""};

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                         {/* <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/> */}
                         <input type="text" value ={this.state.term} onChange={(e)=>this.setState({term:e.target.value.toUpperCase()})}/> 
                    </div>
                </form>

            </div>
        );
    };
}

export default SearchBar;