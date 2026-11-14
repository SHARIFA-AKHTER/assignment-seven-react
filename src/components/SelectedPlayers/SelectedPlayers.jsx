
//  SelectedPlayers
 const SelectedPlayers = ({  selectedPlayers, onRemovePlayer, onSelectPlayer  }) => {

    const players = [
        {id: 1,  name: "John Smith", battingType: "Right-hand bat", image: "https://i.ibb.co.com/k84YYjj/images-1.jpg" },
        {id: 2, name: "Arjun Patel", battingType: "Left-hand bat", image: "https://i.ibb.co.com/3WsGqg0/Arjun.jpg" },
        {id: 3,  name: "James Anderson", battingType: "Right-hand bat", image: "https://i.ibb.co.com/R23D6Wn/anderson.jpg" },
        { id: 4,  name: "Mohammad Khan", battingType: "Left-hand bat", image: "https://i.ibb.co.com/tZGR2F7/Mohammed.jpg" },
        {id: 5, name: "Chris Johnson", battingType: "Right-hand bat", image: "https://i.ibb.co.com/DbT68dZ/Liam-Wright.jpg" },
        { id: 6, name: "Shane Parker", battingType: "Left-hand bat", image: "https://i.ibb.co.com/SJc531R/Shane-Parker.jpg" },
      ];
     return ( 
        
        
         <div className="selected-players mt-6">
             <h3 className="text-xl font-bold mb-4">Selected Players</h3>

             <div className="grid gap-4">
                 {players.map((player) => (
                     <div key={player.id} className="border p-4 rounded-lg 
                     flex items-center justify-between">
                         <div className="flex items-center">
                             <img
                                 src={player.image}
                                 alt={player.name}
                                 className="w-16 h-16 rounded-full mr-4 object-cover"
                             />
                             <div>
                                 <p className="font-semibold">{player.name}</p>
                                 <p className="text-gray-600">{player.battingType}</p>
                             </div>
                         </div>
                         
                         <div className="flex space-x-2">                        
                             <button
                                 className="px-4 py-2 bg-gray-300 text-white rounded"
                                 onClick={() => onSelectPlayer(player)}
                             >
                                 Select
                             </button>
                             <button
                                 className="text-red-500 hover:text-red-700"
                                 onClick={() => onRemovePlayer(player.id)}
                             >
                                 <i className="fa-solid fa-trash"></i>
                             </button>
                         </div>
                     </div>
                 ))}
             </div>
              
         </div>
     );
 }
 export default SelectedPlayers;