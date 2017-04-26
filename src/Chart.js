import React from 'react';
import "./Chart.css";

class Chart extends React.Component {

	convertToChartCoordinates(data) {
		console.log(data);
		const prices = data.map(d => Number(d.close));
		console.log(prices);
		const minPrice = Math.min(...prices);
		const maxPrice = Math.max(...prices);
		const numPrices = prices.length;
		console.log(minPrice);
		console.log(maxPrice);
		const coords = prices.map((price, index) => {
			const xCoord = (index / numPrices) * 100;
			const yCoord = 500 - ((price - minPrice) / (maxPrice - minPrice) * 500);
			return [xCoord, yCoord];
		});
		return coords;
	}

	render() {
		const data = this.props.data;
		const coordinates = this.convertToChartCoordinates(data);
		return (
			<svg height="200px" width="100%" viewBox="0 0 100 500" preserveAspectRatio="none" className="chart">
			{
				coordinates.map(coordinate => {
					return (
						<circle cx={coordinate[0]}
										cy={coordinate[1]}
										r="1" stroke="red" stroke-width="1" fill="red" />
					);
				})
			}

			  <polyline
			     fill="none"
			     stroke="black"
			     strokeWidth="0.5"
			     points={coordinates}/>
			</svg>
		);
	}

}

export default Chart;