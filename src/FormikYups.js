import { useFormik } from "formik"
import * as yup from 'yup';

const FormikYups = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            check: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required.'),
            password: yup.string()
              .min(6, 'Password is too short.')
              .max(12, 'Password is too long.')
              .required('This field is required.')
          })
    })

    return (

        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={formik.handleChange} id="email" value={formik.values.email} aria-describedby="emailHelp" />
                {formik.errors.email ?
                 <div id="emailHelp" className="form-text text-danger">{formik.errors.email}</div>
                 : "" }
               
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={formik.handleChange} id="password" value={formik.values.password} />
                {formik.errors.password ?
                 <div id="emailHelp" className="form-text text-danger">{formik.errors.password}</div>
                 : "" }
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check" onChange={formik.handleChange} value={formik.values.check} />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
               
            </div>
            {formik.errors.check ?
                 <div id="emailHelp" className="form-text text-danger">{formik.errors.check}</div>
                 : "" }
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormikYups