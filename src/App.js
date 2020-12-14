import './App.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
class App extends Component{
  state = {
    keyWord: '',
    page: 1,
    key: '18956584-3ac01e2418e4c39c7eb5dacd9',
    images:null,
  }
  onSubHandApp = data => {
    this.setState({ keyWord: data })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyWord !== this.state.keyWord) {
              fetch(`https://pixabay.com/api/?q=${this.state.keyWord}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json()).then(images=>this.setState({images}))
    }
  }
  render() {
    return (<div>
      <Searchbar onSubHand={this.onSubHandApp} />
      {this.state.images && <ImageGallery gallery={this.state.images.hits} />}
    </div>
    );
}
}

export default App;
