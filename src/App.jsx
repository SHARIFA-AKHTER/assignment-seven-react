import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import CoinCount from "./components/CoinCount/CoinCount";
import ClaimFreeCredit from "./components/ClaimFreeCredit/ClaimFreeCredit";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import Players from "./components/Players/Players";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [coinCount, setCoinCount] = useState(0);
       const handleClaimFreeCredit = () => {
   setCoinCount(prevCount => prevCount + 10);
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
    
    <AvailablePlayers></AvailablePlayers>

    {/* players */}

    <Players></Players>

    {/* //  Subscribe */}

<Subscribe></Subscribe>

{/* Footer */}

    <Footer></Footer>

    </div>
 
  );
};

export default App;