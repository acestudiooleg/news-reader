import * as React from 'react';

const { Component } = React;

export interface ISelectOption {
  value: any;
  label: string;
}

export interface ISelectState {
  value: string;
}
export interface ISelectProps {
  options: ISelectOption[];
  label: string;
  defaultSelectedLabel?: string;
  defaultSelectedValue?: any;
  onChange: (text: String) => void;
}

export const buildOption = ({ label, value }: ISelectOption, index: Number) => (
  <option key={label + index} value={value}>
    {label}
  </option>
);

export default class Select extends Component {
  state: ISelectState = {
    value: ''
  };
  props: ISelectProps = {
    options: [],
    label: 'Select',
    defaultSelectedLabel: '',
    defaultSelectedValue: '',
    onChange() {}
  };
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    this.setState({ value: value });
    this.props.onChange(value);
  }

  render() {
    const { value } = this.state;

    const {
      options,
      label,
      defaultSelectedLabel,
      defaultSelectedValue
    } = this.props;

    const defaultOption = defaultSelectedValue
      ? {
          label: defaultSelectedLabel || defaultSelectedValue,
          value: defaultSelectedValue
        }
      : null;
    const list = [...(defaultOption ? [defaultOption] : []), ...options].map(
      buildOption
    );

    return (
      <div>
        <label htmlFor="exampleSelect">{label}</label>
        <select
          className="form-control"
          value={value}
          onChange={this.handleChange}
          id="exampleSelect"
        >
          {list}
        </select>
      </div>
    );
  }
}
