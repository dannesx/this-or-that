import { createContext, useState } from 'react'
import { Props, Context } from './Props'

export const OptionContext = createContext({} as Context)

export function OptionProvider({ children }: Props) {
	const [option, setOption] = useState('')

	function handleOption(str: string) {
		if (!option) setOption(str)
		else setOption('')
	}

	return (
		<OptionContext.Provider value={{ option, handleOption }}>
			{children}
		</OptionContext.Provider>
	)
}
