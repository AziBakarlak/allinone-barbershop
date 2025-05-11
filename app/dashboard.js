import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Haal gebruikersinformatie op van Supabase
    const session = supabase.auth.session();
    if (session) {
      setUser(session.user);
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welkom, {user.email}</h1>
      <p>Profielinformatie en instellingen komen hier.</p>
    </div>
  );
};

export default Dashboard;
