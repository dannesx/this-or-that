import style from './style.module.css'

import { useContext } from 'react'
import { OptionContext } from '../../context/OptionContext'

function Divisor() {
	const { option } = useContext(OptionContext)

	return (
		<div className={style.divisor} data-option={option}>
			<div className={style.box}>OU</div>
		</div>
	)
}

export default Divisor
