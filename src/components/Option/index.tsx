import Props from './props'
import style from './style.module.css'
import { useContext } from 'react'
import { OptionContext } from '../../context/OptionContext'

function Option(props: Props) {
	const { option } = useContext(OptionContext)
	return (
		<div
			className={style.option}
			color={props.color}
			data-option={option}
			onClick={() => props.onClick()}
		>
			<span>{props.text}</span>
		</div>
	)
}

export default Option
