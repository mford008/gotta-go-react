import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Field, Label, Control } from 'bloomer';

export class AutocompleteInput extends Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
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
