import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Field, Label, Control, Input } from 'bloomer';

export class AutocompleteInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const cssClasses = {
      input: 'input',
    }

    return (
      <Field>
        <Label>Address</Label>
        <Control>
            <PlacesAutocomplete
              inputProps={inputProps}
              className={cssClasses}
             />
        </Control>
      </Field>
    )
  }
}
