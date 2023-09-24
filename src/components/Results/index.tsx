import Props from './props'
import Button from '../Button'

import { useContext } from 'react'
import { OptionContext } from '../../context/OptionContext'

import style from './style.module.css'

function Results(props: Props) {
	const { option, handleOption } = useContext(OptionContext)

	return (
		<div className={style.results} data-show={props.show}>
			<div className={style.wrapper}>
				<h2>Resultados</h2>
				<p>bla bla bla</p>
				<Button onClick={() => handleOption('')} text="Próximo" color={option}/>
			</div>
		</div>
	)
}

export default Results
