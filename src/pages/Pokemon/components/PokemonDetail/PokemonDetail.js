import React, { PureComponent, Fragment } from 'react';
import Chart from './components/Chart/Chart';
import './PokemonDetail.css';

class PokemonDetail extends PureComponent {

    capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render () {
        const { data } = this.props;
        return (
            <Fragment>
                <div className='Left-container'>
                    <img src={data.sprites.front_default} alt={data.name} height='100px' width='100px'/>
                    <div className='Pokemon-name'>{this.capitalizeFirstLetter(data.name)}</div>
                </div>
                <Chart data={data.stats} />
            </Fragment>
        );
    }
}

export default PokemonDetail;
