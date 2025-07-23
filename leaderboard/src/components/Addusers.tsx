// AddUser.tsx
import { useState } from 'react';
import axios from 'axios';

interface Props {
  onAdd: () => void;
}

const AddUser = ({ onAdd }: Props) => {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    console.log('clicked');
    console.log(name);
    if (!name) return;
    //Add user from backend api
    await axios.post('http://localhost:5000/api/add-user', { name });
    setName('');
    onAdd();
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Add new user" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddUser;
