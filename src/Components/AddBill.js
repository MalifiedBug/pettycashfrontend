import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{color:"red"}}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error"  style={{color:"red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"  style={{color:"red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
export default function AddBill (){
  return (
    <div className="addbillmain">
      <div style={{width:'100%', height: "3rem", backgroundColor: "blueviolet", display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
          <strong>Enter Bill</strong>
        </div>
      <h1>Add Petty Bill</h1>
      <h2>Allocated Money - xxx ; Available Money - yyy</h2>
      <Formik
        initialValues={{
          date:"",
          firstName: "",
          spendDetails: "",
          email: "",
          amount: "",
          acceptedTerms: false, // added for our checkbox
          approvedBy: "", // added for our select
        }}
        validationSchema={Yup.object({
            date: Yup.date()
            .required("Enter a date"),
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          spendDetails: Yup.string()
            .min(20, "Must be 20 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          amount: Yup.number()
            .min(2, "must be more than two")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          approvedBy: Yup.string()
            .oneOf(["karan", "tharun", "shruthi", "kholi"], "Invalid Job Type")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="addbillform">
        <MyTextInput
            label="Date"
            name="date"
            type="date"
            placeholder=""
          />
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

<MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MyTextInput
            label="Spend Details"
            name="spendDetails"
            type="text"
            placeholder="Spend Details"
          />

         

          <MyTextInput
            label="Amount"
            name="amount"
            type="number"
            placeholder="enter petty bill amount"
          />

          <MySelect label="Approved By - " name="approvedBy">
            <option value="">Select Manager</option>
            <option value="karan">Karan</option>
            <option value="tharun">Tharun</option>
            <option value="shruthi">Shruthi</option>
            <option value="kholi">Kholi</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};