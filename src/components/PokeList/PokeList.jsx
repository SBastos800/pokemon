import React, { Component } from "react";
import styles from "./PokeList.module.scss";
import PokeCard from "./PokeCard";
import SearchBar from "../../components/PokeList/SearchBar";

import firebase, { firestore } from "../../firebase";


export default class PokeList extends Component {

    state = {
        pokemons: [],
        searchText: "",
        filteredPokemons: []
    }

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterPokemons)
        // console.log(this.state.searchText);
    }

    filterPokemons = () => {
        let filteredPokemons = this.state.pokemons.filter(user => {
            return user.name.includes(this.state.searchText);
        })
        // console.log(filteredPokemons);
        this.setState({ filteredPokemons});

    }



    componentDidMount() {
        firestore
            .collection("pokemons")
            .get()
            .then((query) => {
                const pokemons = query.docs.map(doc => doc.data());
                this.setState(
                    { pokemons: pokemons,
                      filteredPokemons: pokemons
                     }

                )
            })
    }

   


    render() {
        return (
            <>
                <SearchBar searchText={this.props.searchText} setSearchText={this.setSearchText} />
                <section className={styles.pokelistWrapper}>
                    {this.state.filteredPokemons.map((poke, index) => (
                        <PokeCard pokeData={poke} key={index} />
                    ))}


                </section>
            </>
        )
    }
}