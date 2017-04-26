import Axios from "axios";

const accessToken = "tlUPBBYYu455ih66eHnqVD4nlV9U";
const baseUrl = "https://sandbox.tradier.com/v1/markets/history";

const StockApi = {

	getPrices(ticker) {
		const requestParams = {
			headers: {
				"Accept": "application/json",
        "Authorization": "Bearer " + accessToken,
			},
			params: {
				"symbol": ticker,
				"start": "2017-01-01",
				"end": "2017-04-22",
			}
		};
		return Axios.get(baseUrl, requestParams)
				 				.then(response => {
				 					console.log(response);
				 					return response.data.history.day;
				 				})
				 				.catch(error => {
				 					return "Something bad happened";
				 				});
	}

};

export default StockApi;