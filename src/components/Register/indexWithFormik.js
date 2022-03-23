import React, {useState} from 'react'
import register from 'services/register'
import {Formik,Form,Field,ErrorMessage} from 'formik'

const validateFields = values =>{
    const errors = {}

    if (!values.username) {
        errors.username = 'Required username'    
    }
    if (!values.password) {
        errors.password = 'Required password'    
    } 

    return errors
}

const handleSubmit = (values, {setFieldError} )=>{
    return register(values)
    .catch(()=>{
        setFieldError('username','This user is no valid')
    })
}

const initialValues = {
    username:'',
    password:''
}

export default function Register ()  {
    const [registered, setRegistered] = useState(false)

    if (registered) {
        return <h4>Congratulation: ✅! You've been succesfuly registered!</h4>
    }

    return <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, {setFieldError} )=>{
                    return register(values)
                    .then(()=>{
                        setRegistered(true)
                    })
                    .catch(()=>{
                        setFieldError('username','This user is no valid')
                    })
                }}
            >
                {
                    ({errors , isSubmitting}) => (
                    <Form className='form'>
                        <Field
                        className={errors.username ? 
                        'error': ''}
                        placeholder='username' name='username' 
                        />
                        <ErrorMessage name='username' component='small'/>
                        <Field 
                        className={errors.password ? 
                        'error': ''}
                        placeholder='password' name='password'
                        type='password'
                        />
                        <ErrorMessage name='password' component='small'/>
                        <button disabled={isSubmitting} className='btn'>
                            Registrarse
                        </button>
                    </Form>
                    )
                }
            </Formik>
        </>
}
