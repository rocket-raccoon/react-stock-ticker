import React from 'react';
import logo from './logo.svg';
import './App.css';
import StockSearchBar from './StockSearchBar.js';
import Chart from './Chart.js';
import StockApi from './StockApi.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(tickerValue) {
    this.setState(() => {
      return {
        data: null,
        isLoading: true,
      }
    });
    StockApi.getPrices(tickerValue)
            .then(data => {
              this.setState(() => {
                return {
                  data: data,
                  isLoading: false,
                }
              })
            });
  }

  render() {
    const data = this.state.data;
    const isLoading = this.state.isLoading;
    return (
      <div>
        <StockSearchBar onSubmit={this.handleSubmit}></StockSearchBar>
        {isLoading && <b>Loading...</b>}
        {data && <Chart data={data} />}
      </div>
    );
  }

}

export default App;
