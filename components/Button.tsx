'use client'

import { MouseEventHandler } from 'react'

interface Props {
	title: string
	containerStyles?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit'
}
const Button = ({
	title,
	containerStyles,
	handleClick,
	type = 'button',
}: Props) => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}

export default Button
