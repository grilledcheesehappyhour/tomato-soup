import * as React from 'react';
import { render } from 'react-dom';
import './skeleton.css';
import './main.css';

import { Formik, Field, Form, FormikActions } from 'formik';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }

export interface ProfileInputProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ProfileInput extends React.Component<ProfileInputProps, {}> {
    render() {
        return <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        render={() => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" type="text" />
  
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" type="text" />
  
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="john@acme.com" type="email" />
  
            <button type="submit" style={{ display: 'block' }}>
              Submit
            </button>
          </Form>
        )}
      />;
    }
}