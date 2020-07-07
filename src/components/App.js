import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID xHbw6-oFjZsB0AdzVLQ2jflnRZ3T7N3FnKmIQlyX518",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        found:{this.state.images.length} images
      </div>
    );
  }
}
export default App;
