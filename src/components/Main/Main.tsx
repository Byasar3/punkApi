import React from 'react'
import "./Main.scss"
import BeerCardList from '../BeerCardList/BeerCardList'
import Beer from "../../types/Beer"

type MainProps = {
	beers : Beer[];
}
const Main = ({beers} : MainProps) => {
  return (
	<div>
		<BeerCardList beers={beers}/>
		<> </>
	</div>
  )
}

export default Main