import * as React from 'react';
import * as style from './style.css';
import { COUNTRIES } from '../../constants/countries';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

interface ISelectState {
  value: string;
}
interface ISelectProps {
  options: [];
}

export default class Select extends React.Component<
  ISelectProps,
  ISelectState
> {
  constructor(props?: ISelectProps) {
    super(props);
    this.state = {
      value: 'us'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.SyntheticEvent<any>) {
    const target = event.target as any;
    this.setState({ value: target.value as any });
  }

  render() {
    const { value } = this.state;
    const props = this.props;
    const list = props.options.map(
      ({ label, value }: { label: string; value: string }) => (
        <option value={value}>{label}</option>
      )
    );
    return (
      <FormGroup>
        <Label for="exampleSelect">Choose a country {value}</Label>
        <Input value={value} type="select" name="select" id="exampleSelect">
          {list}
        </Input>
      </FormGroup>
    );
  }
}
