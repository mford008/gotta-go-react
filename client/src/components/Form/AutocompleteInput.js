import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Field, Label, Control } from 'bloomer';

export class AutocompleteInput extends Component {

  state = {
    address: ''
  }

  onChangeFn = address => {
    this.setState({
      address: address
    })
  }

  render () {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChangeFn,
    };

    const cssClasses = {
      input: 'input'
    };

    const styling = {
      position: 'absolute',
      zIndex: 1000,
      width: '100%'
    };

    return (
      <Field>
        <Label>{this.props.label}</Label>
        <Control {...this.props}>
          <div style={styling}>
            <PlacesAutocomplete
              inputProps={inputProps}
              classNames={cssClasses}
             />
          </div>
        </Control>
      </Field>
    );
  }
}
