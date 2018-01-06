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
      placeholder: 'enter address'
    }

    const cssClasses = {
      input: 'input',
    }

    const styling = {
      position: 'absolute',
      zIndex: 1000,
      width: '100%',
    }

    return (
      <Field>
        <Label>Address</Label>
        <Control>
          <div style={styling}>
            <PlacesAutocomplete
              inputProps={inputProps}
              classNames={cssClasses}
             />
          </div>
        </Control>
      </Field>
    )
  }
}
