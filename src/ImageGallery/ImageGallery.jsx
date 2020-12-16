import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component{
    onSubUrlHend = data => {
    this.props.onSubUrlHends(data);
}
    render() {
        return (
            <ul className="ImageGallery" >
                {this.props.gallery.map(obj => {
                    return (<ImageGalleryItem onSubUrl={this.onSubUrlHend} urlImage={obj.webformatURL} altImage={obj.tags} urlLargeImage={obj.largeImageURL} key={obj.id} />);
                })}
            </ul>)
    }
}
export default ImageGallery;