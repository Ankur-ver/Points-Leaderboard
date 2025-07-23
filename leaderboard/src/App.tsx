//Front Dashboard

import axios from 'axios';
import Userselect from './components/userselect';
import AddUser from './components/Addusers';
import Leaderboard from './components/lead';
import { useState,useEffect } from 'react';
//interface to land user
interface User {
  _id: string;
  name: string;
  totalPoints: number;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  //fetchuser from /api
  const fetchUsers = async () => {
    const res = await axios.get<User[]>('http://localhost:5000/api/users');
    //sort on the basis of totalpoints 
    const sorted = res.data.sort((a, b) => b.totalPoints - a.totalPoints);
    setUsers(sorted);
  };
 
  useEffect(() => {
    fetchUsers();
  }, []);
  //claim handle through backend api
  const handleClaim = async () => {
    const res = await axios.post('http://localhost:5000/api/claim-points', { userId: selected });
    setMessage(`${res.data.pointsAwarded} points awarded!`);
    setUsers(res.data.leaderboard.sort((a: User, b: User) => b.totalPoints - a.totalPoints));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white font-sans px-4 pt-10">
      <div className="max-w-5xl mx-auto bg-black bg-opacity-40 rounded-lg p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400 tracking-wide">
          🏆 Claim Leaderboard
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <Userselect users={users} selected={selected} setSelected={setSelected} />
          <button
            onClick={handleClaim}
            disabled={!selected}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition disabled:opacity-40"
          >
            🎯 Claim Points
          </button>
        </div>

        {message && (
          <div className="text-green-400 font-semibold text-center mb-4 animate-bounce">
            {message}
          </div>
        )}
       {/* Add user*/}
        <AddUser onAdd={fetchUsers} />
        {/* Rest of the leaderboard */}
        <Leaderboard users={users} />
      </div>
    </div>
  );
};

export default App;
