import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    function loadStorage() {
      const userData = localStorage.getItem('userData');
  
      if (userData) {
        setUser(JSON.parse(userData));
        setLoading(false);
      }      

      setLoading(false);
    }

    loadStorage();

  }, []);

  async function register({ name, email, password }) {
    setLoadingAuth(true);

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      await firebase.firestore().collection('users')
      .doc(uid).set({
        name: name,
        avatarUrl: null
      })
      .then(() => {

        let userData = {
          uid,
          name,
          email: value.user.email,
          avatarUrl: null
        };
        
        setUser(userData);
        storageUser(userData);
        setLoadingAuth(false);
      });

    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
    })

  }

  function storageUser(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  async function logout() {
    await firebase.auth().signOut();
    localStorage.removeItem('userData');
    setUser(null);
  }

  return (
    <AuthContext.Provider 
    value={{ 
      signed: !!user, 
      user, 
      loading, 
      register,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;