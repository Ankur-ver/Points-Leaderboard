interface Props {
  users: { _id: string; name: string; totalPoints: number }[];
}

const Leaderboard = ({ users }: Props) => {
  if (!users || users.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg font-medium">Loading leaderboard...</p>
    </div>
  );
}
  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  console.log("sorted array: ",sortedUsers);
  const top3 = sortedUsers.slice(0, 3);
  const others = sortedUsers.slice(3);

  return (
    <div className="text-white px-4 py-6">
      {/* Top 3 Cards */}
      <div className="flex justify-center items-end gap-4 mb-10">
        {/* 2nd */}
        {top3[1] && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl w-48 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
              {top3[1].name.charAt(0)}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{top3[1].name}</h3>
            <p>Score {top3[1].totalPoints}</p>
            <button className="bg-black text-white px-3 py-1 rounded mt-2 text-sm">Rank #2</button>
          </div>
        )}

        {/* 1st - Larger and Centered */}
        {top3[0] && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl w-60 text-center scale-110 border-4 border-blue-300 shadow-lg z-10">
            <div className="w-20 h-20 mx-auto rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold">
              {top3[0].name.charAt(0)}
            </div>
            <h3 className="mt-3 text-xl font-bold">{top3[0].name}</h3>
            <p className="text-lg">Score {top3[0].totalPoints}</p>
            <button className="bg-black text-white px-4 py-1 rounded mt-3 text-sm">Rank #1</button>
          </div>
        )}

        {/* 3rd */}
        {top3[2] && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl w-48 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
              {top3[2].name.charAt(0)}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{top3[2].name}</h3>
            <p>Score {top3[2].totalPoints}</p>
            <button className="bg-black text-white px-3 py-1 rounded mt-2 text-sm">Rank #3</button>
          </div>
        )}
      </div>

      {/* Table for rest of the users */} 
      <div className="overflow-x-auto max-w-3xl mx-auto">
        <table className="w-full text-left border-collapse rounded overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {others.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? 'bg-green-200 text-black' : 'bg-blue-200 text-black'}
              >
                <td className="px-4 py-2">{index+4}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
