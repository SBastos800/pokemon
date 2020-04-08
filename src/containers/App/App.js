import React, { Component } from 'react';
import PokeList from "../../components/PokeList";
import styles from './App.module.scss';

export default class App extends Component {
  render() {
    return(
      <section className={styles.app}>
        <h2 className={styles.pokemonsTitle}>POKEMON CARDS</h2>
        <PokeList />
      </section>
    );
  } 
}


