import axios from 'axios'
import { useEffect, useState } from 'react'
import ImageView from '../ImageView/ImageView';

function ImageGallary(){

    const [imageList, setImageList] = useState([])

    async function fetchdata(){
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
        // console.log(response.data.photos);
        const results = response.data.photos;
        // const resultPromise = results.map((result) => axios.get(result.url));
        // const resultData = await axios.all(resultPromise);
        const res = results.map((result) => {
            return {
                id: result.id,
                title: result.title,
                url: result.url
            }
        });
        console.log(res);
        setImageList(res);
    }
    

    useEffect(() => {
        fetchdata();
    },[])
    

    return( <div>
        {imageList.map((i)=> <ImageView  url={i.url} key={i.id}
           
        /> )}
    </div>
    )
}
export default ImageGallary;