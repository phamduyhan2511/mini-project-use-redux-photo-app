import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import RandomPhoto from "../../features/Photo/components/RandomPhoto";
import { ErrorMessage } from "formik";
function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl)=>{
    form.setFieldValue(name, newImageUrl)
  }

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <Fragment>
      <FormGroup>{label && <Label for={name}>{label}</Label>}
      
      <RandomPhoto
        name={name}
        imageUrl={value}
        onRandomButtonBlur={onBlur}
        onImageUrlChange={handleImageUrlChange}
      />
      <div className={showError? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
    </Fragment>
  );
}

RandomPhotoField.defaultProps = {}

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};
export default RandomPhotoField;
