import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

function Home() {
  return (
    <section>
      <Menu />
      <Header pageTitle="Home" />
    </section>
  );
}

export default Home;
