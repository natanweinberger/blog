import { useState, useEffect } from 'react'
import Container from '@/components/container';

const NUMBER_OF_SHARES = 4320

function RSU() {
	const [stockDetails, setStockDetails] = useState(null)

	useEffect(async () => {
		const url = 'https://api.finage.co.uk/last/stock/changes/SHOP?apikey=API_KEY4461QWWqyQhs7BbajG02NJ0PslTOxFzI3nzh7gxMIBw0Xr'
		const result = await fetch(url)
		const data = await result.json()
		const state = {price: data.lp, percentChangeDaily: data.cpd}
		setStockDetails(state)
	}, [])

	const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})

	// How much has the total value of the position changed today, in dollars?
	let positionChangeUsd = (stockDetails?.price - (stockDetails?.price / (1 + stockDetails?.percentChangeDaily / 100.0))) * NUMBER_OF_SHARES

	let increaseColor = 'text-green-600'
	let decreaseColor = 'text-red-600'
	let changeColor = stockDetails?.percentChangeDaily >= 0 ? increaseColor : decreaseColor

	return (
		<Container>
			<div className="h-full flex pb-24">
				<div className="m-auto flex flex-col">
					<div className="flex justify-between px-1 sm:px-2">
						<div>
							<span className="pr-2">{usd.format(stockDetails?.price)}</span>
							<span className={`text-sm ${changeColor}`}>{stockDetails?.percentChangeDaily}%</span><
						/div>
						<div>
							<span className={`${changeColor} text-sm`}>{stockDetails?.percentChangeDaily >= 0 ? "▲" : "▼"}{" "}</span>
							<span>{usd.format(positionChangeUsd)}</span>
						</div>
					</div>
					<span className="text-5xl sm:text-8xl">
					{usd.format(stockDetails?.price * NUMBER_OF_SHARES)}
					</span>
				</div>
			</div>
		</Container>
	)
}

export default RSU