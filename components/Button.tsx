'use client'

import Image from 'next/image'
import { MouseEventHandler } from 'react'

interface Props {
	title: string
	containerStyles?: string
	textStyles?: string
	rightIcon?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit'
	isDisabled?: boolean
}
const Button = ({
	title,
	containerStyles,
	handleClick,
	textStyles,
	rightIcon,
	type = 'button',
	isDisabled = false,
}: Props) => {
	return (
		<button
			disabled={isDisabled}
			type={type}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						alt="right icon"
						fill
						className="object-contain"
					/>
				</div>
			)}
		</button>
	)
}

export default Button
