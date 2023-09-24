import style from './App.module.css'

import Option from './components/Option'
import Divisor from './components/Divisor'
import Results from './components/Results'

import { useContext } from 'react'
import { OptionContext } from './context/OptionContext'

function App() {
	const { option, handleOption } = useContext(OptionContext)

	return (
		<div className={style.app} data-option={option}>
			<Option
				color="red"
				text="Nunca mais ouvir música"
				onClick={() => handleOption('red')}
			/>
			<Divisor />
			<Option
				color="blue"
				text="Nunca mais assistir nenhum filme ou série"
				onClick={() => handleOption('blue')}
			/>
			<Results show={option ? true : false} />
		</div>
	)
}

export default App
