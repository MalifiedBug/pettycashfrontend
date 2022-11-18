import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "./Global"

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function SignIn() {
  
  const [message, setMessage] = useState(null)
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {

      await fetch(`${api}/user/login`, {
        method: "POST",
        body: JSON.stringify(values),
      })
      .then(res=> setMessage(res.message))
      // .then(alert(values.email))
      // .then(alert(JSON.stringify(values, null, 2)))
      // .then(response => alert(response.json()))
      // .then((res)=>{
      //   if (res.status!==200) {
      //     alert(res.message);
      //     window.location.reload();
      //   } else {
      //     alert(res.message);
      //     navigate("/profile")          
      //   }
      // })  
      
      if(message!== null){
        alert(message)
      }
          
      
    },
  });

  return (
    <div className="signinmain">
      <h1>Sign In</h1>
      <form className="signinform" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="warning" variant="contained" fullWidth type="submit">
          Sign In
        </Button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <a href="/resetpassword">Forgot Password? Reset</a>
          <a href="/signup">New here? Sign Up</a>
        </div>
      </form>
      {message}
    </div>
  );
}


