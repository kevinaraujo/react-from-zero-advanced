import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return(
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={() => logout() } >Logout</button>
    </div>
  );
}

export default Dashboard;