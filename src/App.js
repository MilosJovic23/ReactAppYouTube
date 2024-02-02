

import "./style.css"
import AllVideos from "./Components/AllVideos";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App= ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllVideos/>} />
                </Routes>
            </BrowserRouter>
            {/*// <AllVideos/>*/}


        </>
    )
}

export default App