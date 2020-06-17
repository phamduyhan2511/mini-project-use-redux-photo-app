import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormGroup, Label, Input, Button, Spinner } from "reactstrap";
import Images from "../../../constants/Images";
import { PHOTO_CATEGORY_OPTIONS } from "../../../constants/global";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../custom-field/InputField";
import SelectField from "../../../custom-field/SelectField";
import RandomPhotoField from "../../../custom-field/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  isAddMode: PropTypes.bool,
};

function PhotoForm(props) {
  const {isAddMode, initialValue, onSubmit} = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),

    categoryId: Yup.number().required('This field is required').nullable(),

    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise: Yup.string().notRequired(),
    })
  })
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        ///do something here...
        const { values, errors, touched, isSubmitting } = formikProps;
        // console.log(
        //   "PhotoForm -> value, error, touched",
        //   values,
        //   errors,
        //   touched
        // );
        return (
          <Form>
            <FastField
              name="title" //Props of FastField
              component={InputField}
              label="Title" //Props pass to InputField
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId" //Props of FastField
              component={SelectField}
              options={PHOTO_CATEGORY_OPTIONS}
              label="Category" //Props pass to InputField
              placeholder="What's your photo category"
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm"/>}
                {isAddMode? 
                "Add to Album" : "Update Photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
