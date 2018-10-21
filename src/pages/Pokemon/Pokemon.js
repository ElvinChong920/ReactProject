import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import InputForm from './components/InputForm/InputForm';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import './Pokemon.css';

class Pokemon extends Component {
    render () {
        const { pokemon, isLoading } = this.props;
        return (
            <div className='Pokemon-container'>
                <div className='Input-container'>
                    <InputForm />
                </div>
                <div className='Result-container'>
                    { pokemon? pokemon.length !== 0 ?
                        <PokemonDetail data={pokemon} /> : <div>No Pokemon found</div>
                        : null }
                    { isLoading? <ReactLoading type='spin' color='#2f8d88'/> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon,
    isLoading: state.pokemon.isLoading
});

export default connect(mapStateToProps)(Pokemon);
