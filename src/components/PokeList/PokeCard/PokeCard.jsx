import React, { Component } from "react";
import styles from "./PokeCard.module.scss";
import Skills from "../PokeCard/Skills/Skills";

export default class PokeCard extends Component {
    render() {
        return (
            <section className={styles.pokeCardWrapper}>
                <img className={styles.image}
                    src={this.props.pokeData.image}
                />
                    <h3>Name: {this.props.pokeData.name}</h3>
                    <p>Ability: {this.props.pokeData.ability}</p>
                    <p>Location: {this.props.pokeData.location}</p>
                <Skills className={styles.skillsCss} skills={this.props.pokeData.skills} />
            </section>
        );
    }
}