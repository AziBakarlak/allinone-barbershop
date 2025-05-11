import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const Booking = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('appointments')
      .insert([{ name, date }]);

    if (error) {
      alert('Er is iets mis gegaan: ' + error.message);
    } else {
      alert('Afspraak geboekt!');
    }
  };

  return (
    <div>
      <h1>Afspraken boeken</h1>
      <form onSubmit={handleBooking}>
        <label htmlFor="name">Naam:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="date">Datum en Tijd:</label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Boek Afspraak</button>
      </form>
    </div>
  );
};

export default Booking;
