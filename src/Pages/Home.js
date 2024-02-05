
import AllVideos from "./../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import {useState} from "react";
import VIDEOS from "./../videos.json"
const Home=()=>{

    const [videos,setVideos]=useState(VIDEOS);
    const [filteredVideos,setFilteredVideos]=useState(VIDEOS)
    const handleSearcVideo=(results)=>{
        setFilteredVideos(results)
    }
    console.log(filteredVideos)
    return(
        <>
            <SearchBar videos={videos} onSearchVideo={handleSearcVideo}/>
           <AllVideos videos={filteredVideos}/>
        </> )
}

export default Home;