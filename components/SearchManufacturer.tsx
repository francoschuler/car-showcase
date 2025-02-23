'use client'

import { manufacturers } from '@/constants'
import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Transition,
} from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

interface Props {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
}
const SearchManufacturer = ({ manufacturer, setManufacturer }: Props) => {
	const [query, setQuery] = useState('')

	const filteredManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
				)

	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full">
					<ComboboxButton className="absolute top-[14px]">
						<Image
							src={'/car-logo.svg'}
							alt="car logo"
							width={20}
							height={20}
							className="ml-4"
						/>
					</ComboboxButton>
					<ComboboxInput
						className={'search-manufacturer__input'}
						placeholder="Volkswagen"
						displayValue={(item: string) => item}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition ease-in duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<ComboboxOptions
							className={'search-manufacturer__options'}
						>
							{filteredManufacturers.length === 0 &&
							query !== '' ? (
								<ComboboxOption
									value={query}
									className="search-manufacturer__option"
								>
									Nothing found.
								</ComboboxOption>
							) : (
								filteredManufacturers.map((item) => (
									<ComboboxOption
										as={Fragment}
										key={item}
										value={item}
									>
										{({ focus }) => (
											<div
												className={`px-4 py-2 group flex gap-2 cursor-pointer ${focus && 'bg-primary-blue text-white'}`}
											>
												{item}
											</div>
										)}
									</ComboboxOption>
								))
							)}
						</ComboboxOptions>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}

export default SearchManufacturer
