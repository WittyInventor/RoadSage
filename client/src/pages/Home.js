// TODO: add in the music 
import React from "react";
import Playlist from "../components/Playlist";

const Home = () => {

  return (
    <div className="homepage" id="big-box">
        <div id="small-box" >
        {/* <Playlist></Playlist> */}
          <h1 className="text-muted">The trip planner that gives you <span className='peace'>PEACE</span> instead of <span className="roadrage">ROAD RAGE</span></h1>
        </div>
    </div>

    // </div>

    // <div className="homepage container-fluid d-flex justify-content-center align-item-center">
    //   <div >
    //     <h1 className="text-muted">The trip planner that gives you <span className='peace'>PEACE</span> instead of <span className="roadrage">ROAD RAGE</span></h1>
    //   </div>
    // </div>

  );
};

export default Home;