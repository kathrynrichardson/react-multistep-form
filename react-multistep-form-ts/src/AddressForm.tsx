import { FormWrapper } from "./FormWrapper"

type AddressData = {
	street: string,
	city: string,
	provinceOrTerritory: string,
}

type AddressFormProps = AddressData & {
	updateFields: (fields: Partial<AddressData>) => void,
}

export function AddressForm({
	street,
	city,
	provinceOrTerritory,
	updateFields,
}: AddressFormProps) {
	return (
		<FormWrapper title="Address Details">
			<label>Street</label>
			<input
				autoFocus
				required
				type="text"
				value={street}
				onChange={e => updateFields({ street: e.target.value })}
			/>
			<label>City</label>
			<input
				required
				type="text"
				value={city}
				onChange={e => updateFields({ city: e.target.value })}
			/>
			<label>Province or Territory</label>
			<input
				required
				type="text"
				value={provinceOrTerritory}
				onChange={e => updateFields({ provinceOrTerritory: e.target.value })}
			/>
		</FormWrapper>
	)
}
