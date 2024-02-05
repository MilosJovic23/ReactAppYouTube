
import VIDEOS from "./../videos.json"
const getAllVideos= ({ videos })=>{

    return(
        videos.map((video)=> {
                return <a href={video.url} target="_blank">
                    <img src={video.cover} alt="videos"/>
                    <h4>{video.title}</h4>
                    </a>
            })
    )
}

export default getAllVideos