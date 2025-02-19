

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Players from './Components/Players'

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/ReactToastify.css";


function App() {
 const [coins,setCoins] = useState(0);

 const [showAvailable,setShowAvailable] = useState(true);
 const[selectPlayers,setSelectPlayers] = useState([]);

 const handleAddMoney = ()=>{
  setCoins(coins + 6000000);
  // show alert
  toast.success("Added Money Successfully",{
    position:'top-center',
    autoClose:1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

 };
// for toggle the btn
 const togglePlayersView = () =>{
  setShowAvailable(!showAvailable);
 };
  
  const playerPrice = (price,player) =>{

    if(selectPlayers.length >= 6){

            toast.error("Cannot Select more than 6 players!",{
              position:'top-center',
              autoClose:1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return;
          }
          const isExist = selectPlayers.find(preSelectPlayers => preSelectPlayers.playerId === player.playerId)
          if(isExist){
            toast.error("Player Already Exists!",{
              position:'top-center',
              autoClose:1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return
          }

    if(coins >= price ){
      setCoins(coins - price);
      setSelectPlayers([...selectPlayers,player])
      toast.success("Congratulations!! You are Selected. ",{
        position:'top-center',
        autoClose:1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.error("Opps! you have not enough coins!!",{
        position:'top-center',
        autoClose:1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    
    }
  };
// for delete a player 
 const handleDeletePlayer = playerId =>{
    setSelectPlayers(selectPlayers.filter(player => player.playerId !== playerId));
    toast.success("Player Deleted Successfully!",{
      position:'top-center',
      autoClose:1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
 }
  
  return (
    <>
    <div>
    <Header coins={coins}></Header>
    <Banner addMoney ={handleAddMoney} ></Banner>

    <Players showAvailable={showAvailable}
     togglePlayersView={togglePlayersView}
     playerPrice={playerPrice}
    handleDeletePlayer={handleDeletePlayer}
     selectPlayers={selectPlayers}
    ></Players>
  
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
 
    </>
  )
}

export default App
