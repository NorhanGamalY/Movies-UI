import React, { useState } from 'react';

export default function Form({ addPost }) {
  const [data, setData] = useState({ title: '', description: '', count: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'count') {
      const numeric = value;
      setData((d) => ({ ...d, [name]: numeric }));
      return;
    }

    setData((d) => ({ ...d, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();


  addPost(data);  

  setData({ title: '', description: '', count: '' });
};

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label' htmlFor="title">Title :</label>
      <input id="title" name="title"
        type="text" className='inp' value={data.title} onChange={handleChange} placeholder="Enter title" />

      <label className='label' htmlFor="desc">Description :</label>
      <input id="desc" name="description" type="text" className='inp' value={data.description} onChange={handleChange} placeholder="Enter description"/>

      <label className='label' htmlFor="count">Count :</label>
      <input  id="count" name="count"className='inp' value={data.count} onChange={handleChange} placeholder="0"/>

      <button className='btn' type="submit">Display</button>
    </form>
  );
}
