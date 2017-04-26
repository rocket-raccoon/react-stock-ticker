import React from 'react';
import "./StockSearchBar.css";

class StockSearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ticker: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const newTickerValue = event.target.value;
		this.setState(() => {
			return {
				ticker: newTickerValue,
			};
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const tickerValue = this.state.ticker;
		this.props.onSubmit(tickerValue);
	}

	render() {
		return (
			<div className="searchbar">
				<form className="searchform"
							onSubmit={this.handleSubmit}>
					<input placeholder="Enter Stock Ticker"
								 type="text"
								 onChange={this.handleChange}></input>
					<button type="submit">Search</button>
				</form>
			</div>
		);
	}

}

export default StockSearchBar;