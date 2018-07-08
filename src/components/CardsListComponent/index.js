import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from '../CardComponent';
import cards from '../../actions/cards';

class CardsList extends Component {
	constructor(props){
		super(props);
		//console.log(props);
	}
	componentDidMount(){
		this.props.loadTrending();
	}
	render() {
		const cards = Object.keys(this.props.cards).map((card) => 
			<Card 
				key={card}
				card={this.props.cards[card]} 
				addFavorites={this.props.addFavorites}
				removeFavorites={this.props.removeFavorites} />
		);
		return (
			<div className='container'>
				{cards}
			</div>
		)
	};
};

const mapStateToProps = (state) => {
  const {
    cards
  } = state;
  
  return {
    cards
  };
};

const mapDispatchToProps = (dispatch) => {
  	const { 
		loadCards,
		loadTrending,
		addFavorites,
		removeFavorites,
	} = cards.creators;

	return bindActionCreators({
	    loadCards,
		loadTrending,
		addFavorites,
		removeFavorites,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);