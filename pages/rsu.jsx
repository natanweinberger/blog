import { useState, useEffect } from 'react'
import Container from '@/components/container';

const NUMBER_OF_SHARES = 432

function RSU() {
	const [stockPrice, setStockPrice] = useState(null)

	useEffect(async () => {
		const url = 'https://api.finage.co.uk/last/stock/SHOP?apikey=API_KEY82S8BBO4H3W4NSB5BP6UPXPWGJBT4HQH'
		const result = await fetch(url)
		const data = await result.json()
		setStockPrice(data.bid)
	}, [])

	const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})

	return (
		<Container>
			<div className="h-full flex pb-24">
				<span className="m-auto text-5xl sm:text-9xl">
				{usd.format(stockPrice * NUMBER_OF_SHARES)}
				</span>
			</div>
		</Container>
	)
}

export default RSU