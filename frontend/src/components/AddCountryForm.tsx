import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COUNTRY, GET_COUNTRIES } from '../graphql/client';

export function AddCountryForm() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [emoji, setEmoji] = useState('');
  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await addCountry({ variables: { name, code, emoji } });
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit} className="form-group">
    <input className="input-field" value={name} onChange={e => setName(e.target.value)} placeholder="Country Name" />
    <input className="input-field" value={code} onChange={e => setCode(e.target.value)} placeholder="Country Code" />
    <input className="input-field" value={emoji} onChange={e => setEmoji(e.target.value)} placeholder="Emoji" />
    <button className="add-button" type="submit">Add</button>
  </form>
</div>

  );
}
