import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({gallery}) {
    return (
        <ul className="ImageGallery">
            {gallery.map(obj => {
                // console.log(obj.webformatURL);
                return (<ImageGalleryItem urlImage={obj.webformatURL} altImage={obj.tags} key={obj.id}/>);
            })}
        </ul>
    )
}