import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

const FormOne = ({handleNext}) => {
    return (
        <Formik
            initialValues={{ firstName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
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
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <br />

                <button type="submit">Submit</button>
            </Form>

        </Formik>
    )
}

export default FormOne