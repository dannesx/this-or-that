import Props from './props'
import style from './style.module.css'

function Button(props: Props) {
	return (
		<button
			className={style.button}
			onClick={() => props.onClick()}
			color={props.color}
		>
			{props.text}
		</button>
	)
}

export default Button
