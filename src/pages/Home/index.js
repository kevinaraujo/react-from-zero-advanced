import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBookRequest } from './../../store/modules/Book/actions';

import api from './../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    
    async function loadApi() {

      try {
        const { data } = await api.get('trips'); 
        
        setTrips(data);
        
      } catch (e) {
        console.log(e);
      }
    }

    loadApi();
  }, []);

  const handleAdd = (id) => {   
    dispatch(addBookRequest(id));
  }
  
  return (   
    <div>
      <div className="box">
        {trips.map(trip => (

          <li key={ trip.id }>
            <img src={ trip.image } alt={ trip.title }/>
            <strong>{ trip.title }</strong>
            <span>Status: { trip.status ? 'Disponível' : 'Indisponível' }</span>

            <button type="button" onClick={() => handleAdd(trip.id)}>
              <div> 
                <MdFlightTakeoff sizeof={16} color="#fff"/>
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>

        ))}
      </div>
    </div>
  );
}
export default Home;