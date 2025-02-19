

const Player = () => {
    return (
        <div>
              <div className="flex justify-between my-8">

             <h2 className="text-2xl font-bold">Selected Players:(1 / 6) </h2>
             <div className="join">
        <input
          type="btn"
         value="Available"
          className="input-btn w-28 text-center  bg-[#E7FE29] join-item" />
        <button className="btn  join-item "
    
        >Selected (0)</button>
      </div>
           </div>
           {/* all player container */}
           <div className="flex justify-between border-2 border-slate-300 p-5 rounded-sm mb-20">
            <div className="flex gap-5">
            <img src={'https://i.ibb.co.com/3ZMx1rs/UsgAIOc.jpg'} 
            className="w-28 rounded-2xl" 
            alt="" />
             <div>
                <h4>name</h4>
                <p>batman</p>
             </div>
            </div>
            {/* delete btn */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5"><path fill="#f72631" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            
           </div>
          
      <button className="btn flex justify-start bg-[#E7FE29] hover:bg-[#E7FE29]  "  >Add More Player</button>
     
        </div>
    );
};

export default Player;