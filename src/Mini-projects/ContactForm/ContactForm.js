import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from "yup";
const ContactForm = () => {
    const formInitialSchema = {
        name: '',
        email: '',
        password: '',
        website: '',
        comment: ''
  }
  
  const userSchema = object({
    name: string().required(),
    email: string().email("Please Enter a valid Email Address").required(),
    website: string().url().required(),
    password: string()
      .required()
      .min(8, "Password is too short - should be 8 characters minimum."),
    comment: string().required("Message is required"),
  });

  const handleformsubmit = (values) =>{
    console.log('submitted values', values);
    }
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <h1 className="text-center"> Formik With Yup Form Validation </h1>
        </div>

        <div className="col-md-8 offset-md-2">
          <Formik
            initialValues={formInitialSchema}
            validationSchema={userSchema}
            onSubmit={(values) => handleformsubmit(values)}
          >
            <Form>
              <div className="col-md-12 mt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Write your Email"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="password"
                  placeholder="Enter your Password"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="website"
                  placeholder="Enter your Website Address"
                />
                <p className="text-danger">
                  <ErrorMessage name="website" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="comment"
                  placeholder="Write Message..."
                />
                <p className="text-danger">
                  <ErrorMessage name="comment" />
                </p>
              </div>

              <button className="btn btn-primary btn-block mt-5" type="submit">
                
                Form Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ContactForm
