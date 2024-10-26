
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import CoinCount from "./components/CoinCount/CoinCount";
import ClaimFreeCredit from "./components/ClaimFreeCredit/ClaimFreeCredit";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import Players from "./components/Players/Players";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import HandleSelectPlayer from "./components/Players/handleSelectPlayer/handleSelectPlayer";


const App = () => {
  const [coinCount, setCoinCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);


       const handleClaimFreeCredit = () => {
   setCoinCount(prevCount => prevCount + 5000000);
   alert("Congratulations! You've received your credit!");
   };

  const handleSelectPlayer = (player) => {
    if (coinCount < player.biddingPrice) {
      alert("Not enough coins to select this player.");
      return;
  };
  if (!selectedPlayers.some((p) => p.id === player.id)) {
    setCoinCount(prevCount => prevCount - player.biddingPrice);
    setSelectedPlayers(prev => [...prev, player]);
  } else {
    alert("Player already selected.");
  }
};

const handleRemovePlayer = (id) => {
  const playerToRemove = selectedPlayers.find((player) => player.id === id);
  if (playerToRemove) {
    setCoinCount(prevCount => prevCount + playerToRemove.biddingPrice);
    setSelectedPlayers(prev => prev.filter((player) => player.id !== id));
  }
};

  return (
    <div className="Container mx-auto">
      {/* Header*/}
    <Header coinCount = {coinCount}></Header>

    {/* Banner */}
    <Banner handleClaimFreeCredit = {handleClaimFreeCredit}></Banner>

    {/* coinCount */}
    <CoinCount coinCount = {coinCount}></CoinCount>

    {/* ClaimFreeCredit */}
    <ClaimFreeCredit></ClaimFreeCredit>

    {/* // AvailablePlayers */}

    <div className="flex justify-between items-center my-4">
        <h2 className="text-2xl font-bold"></h2>
        <div className="space-x-4">
        <button
          className={`btn bg-[#E7FE29] rounded border text-sm text-[#131313]
         font-semibold shadow-md items-center w-full 
         sm:w-[140px] h-[52px] p-4 ${showAvailable 
            ? "bg-[#E7FE29] text-sm text-[#131313] " : 
            "bg-gray-200 text-gray-700"}`}
          onClick={() => setShowAvailable(true)}
        >
          Available
        </button>
        <button
          className={`btn text-[#131313] font-semibold rounded bg-[#FFFFFF] 
          items-center w-full sm:w-[140px] h-[52px] p-4 border 
          shadow-md ${!showAvailable
             ? "bg-[#E7FE29] text-[#131313] " : 
             "bg-gray-200 text-gray-700"}`}
          onClick={() => setShowAvailable(false)}
        >
          Selected ({selectedPlayers.length})
        </button>
        </div>
      </div>

      {showAvailable ? (
        <AvailablePlayers 
        coinCount={coinCount}
          setCoinCount={setCoinCount}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
      
        />
      ) : (
        <SelectedPlayers 
        selectedPlayers={selectedPlayers} 
        onRemovePlayer={handleRemovePlayer} 
        onSelectPlayer={handleSelectPlayer} 
         />
      )}


   <HandleSelectPlayer></HandleSelectPlayer> 
   
    {/* players */}

    <Players selectedPlayers={selectedPlayers}/>

    {/* //  Subscribe */}

<Subscribe></Subscribe>

{/* Footer */}

    <Footer></Footer>

    </div>
 
  );
};

export default App;