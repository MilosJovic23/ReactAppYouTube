import {useParams} from "react-router-dom";
import VIDEOS from "./../videos.json"

const Video=()=>{



    const { id } =useParams()

    let videoFound=null;

    VIDEOS.forEach(video=>{
        if(video.id== id){
            videoFound=video;
        }
    })
    if(videoFound==null){
        return <h1>This video does not exist</h1>
    }
    console.log(videoFound)
    return(

        <>
            <h3>{videoFound.title}</h3>
            <p>{videoFound.url}</p>
            <iframe src={videoFound.url}>

            </iframe>
        </>
    )

}

export default Video