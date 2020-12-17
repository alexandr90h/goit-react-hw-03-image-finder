import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component{
  state = {
    keyWord: '',
    page: 1,
    key: '18956584-3ac01e2418e4c39c7eb5dacd9',
    images: [],
    loader: false,
    showModal: false,
    buttonVisible: false,
    imgUrlModal: '',
  }
  toggleLoader = () => {
    this.setState(prev => ({ loader: !prev.loader }));
  }
  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  }
  onSubHandApp = data => {
    this.setState({ keyWord: data, page:1, images:[] })
  }
  onSubPageNumApp = data => {
    this.setState({ page: data })
  }
  onSubUrlHendApp = data => {
    this.toggleLoader();
        this.toggleModal();
    this.setState({ imgUrlModal: data });
        this.toggleLoader();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyWord !== this.state.keyWord || prevState.page !== this.state.page) {
      this.toggleLoader();
      fetch(`https://pixabay.com/api/?q=${this.state.keyWord}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(({ hits }) => { this.setState(prev => ({ images: prev.images.concat(hits) }));if (this.state.images.length!==0){this.setState({buttonVisible:true})}
}).finally(()=>this.toggleLoader());
    }

  }
  render() {
    return (<div className="main-conteiner">
      <Searchbar onSubHand={this.onSubHandApp} />
      <ImageGallery gallery={this.state.images} onSubUrlHends={ this.onSubUrlHendApp}/>
      {this.state.loader && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />}
      {this.state.buttonVisible && <Button onSubPageNum={this.onSubPageNumApp} />}
      {this.state.showModal &&
        <Modal
        onCloseHend={this.toggleModal}
        imgUrl={this.state.imgUrlModal}/>}
    </div>
    );
}
}

export default App;
