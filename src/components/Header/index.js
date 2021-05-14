import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

import './header.css';
import avatar from '../../assets/avatar.png';

export default function Header() {
  const { user } = useContext(AuthContext);
  const avatarUrl = user.avatarUrl || avatar;

  return(
    <div className="sidebar">
      <div>
        <img src={ avatarUrl } alt="avatar picture" />
      </div>

      <Link to="/dashboard">
        <FiHome color="#fff" size={ 24 }/>
        Calls
      </Link>

      <Link to="/dashboard">
        <FiUser color="#fff" size={ 24 }/>
        Clients
      </Link>

      <Link to="/profile">
        <FiSettings color="#fff" size={ 24 }/>
        Profile
      </Link>
    </div>
  );
}