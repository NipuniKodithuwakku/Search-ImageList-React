import React from 'react';

class SearchBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);

    // }

    // onInputClick(){
    //     console.log("Input clicked!");
    // }

    state.={term:""};

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image search</label>
                         {/* <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/> */}
                         <input type="text" onChange={(e)=>this.setState({e.target.value})}/> 
                    </div>
                </form>

            </div>
        );
    };
}

export default SearchBar;