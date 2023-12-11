import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'


const Login = ( { saveUserData } ) => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(false)

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    }, onSubmit: sendRigsterData,
    validate: function (values) {

      let errors = {}

      if (values.email.includes('@') == false || values.email.includes('.com') == false) {
        errors.email = ("Email Must be vailed ")
      }
      if (values.password.length < 3 || values.password.length > 15) {
        errors.password = ("password Must be more than 3 characters and less than 10")
      }


      return errors
    }
  })

  async function sendRigsterData(values) {
    console.log(values);
    try {
      setLoading(true)
      const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      console.log(data);
      if (data.message == 'success') {
        console.log(data.message);
        setLoading(false)

        $('.succMsg').fadeIn(1000, function () {
          localStorage.setItem('tkn', data.token)
          saveUserData()
          nav('/home')
        })
      }
      document.querySelector('.succMsg').innerHTML = `Congratualtions ${data.user.name} `

    } catch (error) {
      setLoading(false)
      console.log('Error ', error.response.data.message);
      // setError( error.response.data.message )
      $('.errMsg').fadeIn(500, () => {
        setTimeout(() => {
          $('.errMsg').fadeOut(500)
        }, 3000);
      })
    }
  }


  return <>
    <section className='register' >
      <div className="container">
        <h2 className='my-4' >Login Now </h2>
        <h4 style={{ 'display': 'none' }} className='w-75 m-auto alert alert-danger text-center errMsg' > Email alreday in use </h4>
        <h4 style={{ 'display': 'none' }} className='w-75 m-auto alert alert-success text-center succMsg' > Congratualtions </h4>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto ' >

          <label className='my-2' htmlFor="email">Email:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id='email' className='form-control' />
          {formik.errors.email && formik.touched.email ? <div className='text-danger' > {formik.errors.email} </div> : ''}


          <label className='my-2' htmlFor="password">Password:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id='password' className='form-control' />
          {formik.errors.password && formik.touched.password ? <div className='text-danger' > {formik.errors.password} </div> : ''}

          <button type='submit' className='btn btn-outline-info mt-3' > {loading ? <i className='fas fa-spinner fa-spin' ></i> : 'Login'}  </button>
          {/* onClick={ () => { newRegister() } } */}
        </form>
      </div>

    </section>
  </>
}

export default Login