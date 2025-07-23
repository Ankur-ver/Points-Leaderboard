interface Props {
  users: { _id: string, name: string }[];
  selected: string;
  setSelected: (val: string) => void;
}

const Userselect = ({ users, selected, setSelected }: Props) => (
  <select className="bg-green-300 text-black" value={selected} onChange={e => setSelected(e.target.value)}>
    <option value="">Select User</option>
    {users.map(user => (
      <option key={user._id} value={user._id}>{user.name}</option>
    ))}
  </select>
);

export default Userselect;