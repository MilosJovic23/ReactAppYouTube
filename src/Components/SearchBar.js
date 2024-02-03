
import VIDEOS from "./../videos.json"

 const SearchBar=()=>{


    return(
        <form>
            <label>
                <input type="text" name="search" onInput={ e=>{SearchVideoByName(e.currentTarget.value)} }/>
            </label>
        </form>
    )
 }

 const SearchVideoByName=(name)=>{
    console.log(VIDEOS)
     VIDEOS.forEach(video=>{
         name=name.toLowerCase();
         video.title=video.title.toLowerCase();
         if(video.title.includes(name)){
             console.log("radi")
         }
     })
 }

 export default SearchBar