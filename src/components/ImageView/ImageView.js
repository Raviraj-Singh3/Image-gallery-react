import './ImageView.css'

function ImageView({ url }){
    return(
        <div className="container">
            <div className='image-box'>
                <img src={url} alt="photos" />
            </div>
            
        </div>
    )
}
export default ImageView;