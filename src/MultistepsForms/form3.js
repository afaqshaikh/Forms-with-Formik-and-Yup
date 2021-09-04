import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

const FormThree = ({handleNext}) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email(15, 'Invalid Email address')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />

                <br />

                <button type="submit">Submit</button>
            </Form>

        </Formik>
    )
}

export default FormThree