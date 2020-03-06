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
                <div className={styles.pokeName}>
                    <h3>{this.props.pokeData.name}</h3>
                </div>
                <div className={styles.pokeAbility}>
                    <h4>{this.props.pokeData.ability}</h4>
                </div>
                <div className={styles.pokeLocation}>
                    <h4>{this.props.pokeData.location}</h4>
                </div>

                <Skills className={styles.skillsCss} skills={this.props.pokeData.skills} />
            </section>
        )
    }
}