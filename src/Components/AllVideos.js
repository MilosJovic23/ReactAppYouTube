
import VIDEOS from "./../videos.json"
const getAllVideos= ()=>{


    return(

            VIDEOS.map((video)=> {
                return <a href={video.url} target="_blank" rel="nofollow">
                    <img src={video.cover} alt="videos"/>
                    <h4>{video.title}</h4>
                    </a>
            })




    )
}

export default getAllVideos