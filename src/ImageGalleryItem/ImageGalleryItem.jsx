export default function ImageGalleryItem({ urlImage, altImage}) {
    return (<li className="ImageGalleryItem" >
  <img src={urlImage} alt={altImage} className="ImageGalleryItem-image" />
</li>)
}