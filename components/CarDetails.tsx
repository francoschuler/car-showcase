import { Car } from '@/types'
import React from 'react'

interface Props {
	isOpen: boolean
	onClose: () => void
	car: Car
}
const CarDetails = ({ isOpen, onClose, car }: Props) => {
	return <div>CarDetails</div>
}

export default CarDetails
