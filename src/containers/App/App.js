import React, { Component } from 'react';
import PokeList from "../../components/PokeList";
// import SearchBar from "../../components/PokeList/SearchBar/SearchBar";

import styles from './App.module.scss';

export default class App extends Component {
  render() {
    return(
      <section className={styles.app}>
        {/* <SearchBar /> */}
        <PokeList />
      

      </section>
    )
  } 
}


