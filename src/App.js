import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button';
class App extends Component{
  state = {
    keyWord: '',
    page: 1,
    key: '18956584-3ac01e2418e4c39c7eb5dacd9',
    images: [],
    spiner: false,
  }
  onSubHandApp = data => {
    this.setState({ keyWord: data, page:1, images:[] })
  }
  onSubPageNumApp = data => {
    this.setState({ page: data })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyWord !== this.state.keyWord || prevState.page !== this.state.page) {
      this.setState({spiner:true})
      fetch(`https://pixabay.com/api/?q=${this.state.keyWord}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(({hits})=>this.setState(prev=>({images :prev.images.concat(hits)}))).finally(this.setState({spiner:false}));
    }
  }
  render() {
    return (<div>
      <Searchbar onSubHand={this.onSubHandApp} />
      {this.state.images && <ImageGallery gallery={this.state.images} />}
      {this.state.spiner && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />}
      
      <Button onSubPageNum={ this.onSubPageNumApp}/>
    </div>
    );
}
}

export default App;
