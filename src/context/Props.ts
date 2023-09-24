import { ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export interface Context {
	option: string
	handleOption: (param: string) => void
}
