import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: [],
};

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;

  const handleSelectedOptionChange = (selectedOption)=>{
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target : {
        name: name,
        value: selectedValue,
      }
    }

    field.onChange(changeEvent);
  }

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={options.find(o => o.value == value)}
        onChange={handleSelectedOptionChange}

        placeholder={placeholder}
        disabled={disabled}
        options={options}

        className={showError? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

export default SelectField;
