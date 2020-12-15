import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({gallery}) {
    return (
        <ul className="ImageGallery">
            {gallery.map(obj => {
                return (<ImageGalleryItem urlImage={obj.webformatURL} altImage={obj.tags} urlLargeImage={obj.largeImageURL} key={obj.id}/>);
            })}
        </ul>
    )
}