import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

const Home = () => {
  const logout = () => {
    cookies.remove('id', {path: '/'})
    cookies.remove('email', {path: '/'})
    window.location.href="/"
  }
  return (
      <>
        <h1>Home</h1>
        <button onClick={logout}>Logout</button>
      </>
  );
};

export default Home;
