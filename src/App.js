

import "./style.css"
const VIDEOS=[
    {
        id:1,
        title:"Ho to learn React",
        url:"https://www.youtube.com/watch?v=SqcY0GlETPk",
        cover:"https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBxxEfavbxbAns6HTvgSrFA1b0Rrw",
    },
    {
        id:2,
        title:"Ho to learn css",
        url:"https://www.youtube.com/watch?v=1PnVor36_40",
        cover:"https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4tJ7kbGq-1Vv0pz8nIkiwF5xyQg",
    }
]
const App= ()=>{
    return(
        <>
            {VIDEOS.map((video)=> {
                return <a href={video.url} target="_blank">
                    <img src={video.cover}/>
                    <h4>{video.title}</h4>
                </a>
            })}


        </>


    )
}

export default App