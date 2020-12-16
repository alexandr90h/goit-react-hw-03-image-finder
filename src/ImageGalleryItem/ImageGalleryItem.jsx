import { Component } from "react";

class ImageGalleryItem extends Component{
  onClickImg = e => {
    // console.log(e.currentTarget.dataset.url);
    this.props.onSubUrl(e.currentTarget.dataset.url)
  }
  render() {
    return (
      <li className="ImageGalleryItem" >
        <img
          src={this.props.urlImage}
          alt={this.props.altImage}
          data-url={this.props.urlLargeImage}
          className="ImageGalleryItem-image"
          onClick={this.onClickImg}
        />
      </li>)
  }
}
export default ImageGalleryItem;
