import { useFormik } from "formik"


const FormikForms = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            check: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            let error = {};
      
            if (!values.email)
              error.email = "Email is required"
            if (!values.password)
              error.password = "Password is required"
              if (!values.check)
              error.password = "Check is required" 
            return error;
          }
    })

    return (

        <form onSubmit={formik.handleSubmit}>
            <h3>Formik Forms</h3>
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

export default FormikForms