

import { useEffect, useState } from "react";

const PlayerCards = ({ coinCount, setCoinCount, selectedPlayers, setSelectedPlayers }) => {
    const [players, setPlayers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch('./players.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data.players))
            .catch((error) => console.error("Error fetching players:", error));
    }, []);

    const handleSelectPlayer = (player) => {
        if (coinCount < player.biddingPrice) {
            setErrorMessage(`Not enough coins to select ${player.name}.`);
            alert(`Not enough coins to select ${player.name}.`);
            return;
        }

        if (!selectedPlayers.some((p) => p.playerId === player.playerId)) {
            // Deduct the coins and add the player to the selected list
            setCoinCount((prev) => prev - player.biddingPrice);
            setSelectedPlayers((prev) => [...prev, player]);
            setErrorMessage("");
        } else {
            alert("Player already selected.");
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
            {players.map((player) => (
                <div key={player.playerId} className="card bg-base-100 border-2 shadow-xl">
                    <figure className="px-8 pt-6">
                        <img 
                            src={player.image} 
                            alt={player.name}
                            className="rounded-t-lg w-full h-auto sm:h-40 md:h-52 lg:h-60 xl:h-72 rounded-xl object-cover" 
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl text-gray-800 font-semibold">
                            <i className="fa-solid fa-user mr-2 text-2xl"></i>
                            {player.name} 
                        </h2>
                        <div className="flex justify-between">
                            <div className="flex justify-center gap-2">
                                <i className="fa-regular fa-flag mr-2 text-2xl"></i>
                                <p>{player.country}</p>
                            </div>
                            <button className="btn btn-xs sm:btn-sm items-center w-[145px] h-[52px] p-4 border md:btn-md lg:btn-lg bg-gray-100 font-semibold rounded flex">
                                All-Rounder
                            </button>
                        </div>
                        <hr />
                        <p className="text-sm md:text-base lg:text-sm">Batting Type: {player.battingType}</p>
                        <p className="text-sm md:text-base lg:text-sm">Bowling Type: {player.bowlingType}</p>
                        <p className="text-sm md:text-base lg:text-sm font-bold flex justify-between">
                            Price: {player.biddingPrice}
                            <button
                                className={`btn btn-xs sm:btn-sm items-center w-[145px] h-[52px] p-4 border md:btn-md lg:btn-lg font-semibold rounded ${selectedPlayers.some((p) => p.playerId === player.playerId) ? "bg-gray-300 cursor-not-allowed" : "bg-gray-100 cursor-pointer"}`}
                                onClick={() => handleSelectPlayer(player)}
                                disabled={selectedPlayers.some((p) => 
                                    p.playerId === player.playerId)}
                            >
                                {selectedPlayers.some((p) => p.playerId === player.playerId) ? "Selected" : "Choose Player"}
                            </button>
                        </p>
                    </div> 
                </div>
            ))}
        </div>
    );
};

export default PlayerCards;