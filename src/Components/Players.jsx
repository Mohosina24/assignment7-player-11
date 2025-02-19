import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const Players = ({showAvailable,togglePlayersView,playerPrice,handleDeletePlayer,selectPlayers}) => {
    const [players,setPlayers] = useState([]);
    
    useEffect( ()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data =>setPlayers(data));
    },[])
    return (
        <div className="mt-30">
           <div className="flex justify-between my-8">
             <h2 className="text-2xl font-bold">{showAvailable ? `Available Players: ${players.length}` : `Selected Players:(${selectPlayers.length} / 6) ` }
              
              </h2>
             <div className="join">
        <input
          type="btn"
         value="Available"
         onClick={togglePlayersView}
          className={`input-btn w-28 text-center ${showAvailable ? 'bg-[#E7FE29]' : 'bg-gray-300'}   join-item`} />
        <button className={`btn  join-item  ${showAvailable ? 'bg-gray-200' : 'bg-[#E7FE29]'} `}
             onClick={togglePlayersView}
        >Selected ({selectPlayers.length})</button>
      </div>
           </div>
           {/* toggle the players section */}
           {
            showAvailable ? (
              <div className="grid grid-cols-3 gap-5">
         {
            players.map(player => (
                <div key={player.playerId} className="card bg-base-100  shadow-xl">
                <figure>
                  <img
                  className="w-96 rounded-xl"
                    src={player.image}
                    alt="Shoes" />
                </figure>
                <div className="my-4">
                  <h2 className="card-title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5"><path fill="#818488" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                   <span className="text-xl">{player.name}</span>
                  </h2>
                  
                    <div className="flex justify-between  mt-3">
                      <div className="flex gap-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5"><path fill="#8f9194" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z"/></svg>
                      <h3 className="mt-2">{player.country}</h3>
                      </div>
                 
                    <div className="card-actions justify-end">
                    <button className="btn ">All Rounder</button>
                  </div>
                    </div>
                 
                </div>
                <hr />
                <div className="text-start my-4">
                <h4 className="font-bold">Rating</h4>
                <p className="flex justify-between">
                  <span className="font-bold">{player.battingType}</span>
                  <span >{player.battingType}</span>
                </p>
                <div className="flex justify-between gap-5 mt-4">
                  <span className="font-semibold">Price: ${player.biddingPrice}</span>
                  <button className="border-2 border-slate-400 px-3  rounded-xl text-gray-600" 
                  onClick={()=>{
                    playerPrice(player.biddingPrice,player);
                   

                  }}>Choose player</button>
                </div>
                </div>
               
              </div> 
              
            ))
            
         }
        
         </div>
            ) : (
              <div>
              <div className="flex justify-between my-8">
         
           </div>
           {/* all player container */}


           {
              selectPlayers.map(player =>(
                <div key={player.playerId} className="flex justify-between border-2 border-slate-300 p-5 rounded-sm mb-20">
          
            <div className="flex gap-5">
            <img src={player.image}
            className="w-28 rounded-2xl" 
            alt="" />
             <div>
                <h4>{player.name}</h4>
                <p>{player.role}</p>
             </div>
            </div>
            {/* delete btn */}
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleDeletePlayer(player.playerId)} viewBox="0 0 448 512" className="w-5"><path fill="#f72631" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            
           </div>
              ))
            }
           
          
      <button className="btn flex justify-start bg-[#E7FE29] hover:bg-[#E7FE29]  " onClick={togglePlayersView}  >Add More Player</button>
     
        </div>
            ) 
           }

         
        
        </div>
        
    );
};
Players.propTypes ={
  showAvailable:PropTypes.bool.isRequired,
  togglePlayersView:PropTypes.func.isRequired,
  playerPrice:PropTypes.func.isRequired,
  handleDeletePlayer:PropTypes.func.isRequired,
  selectPlayers:PropTypes.number.isRequired,

}

export default Players;