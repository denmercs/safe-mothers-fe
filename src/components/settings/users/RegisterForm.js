import React, {useEffect} from "react";
import {Form, Field, withFormik} from "formik/dist/index";
import * as Yup from "yup";
import {connect} from "react-redux";
import {registerUser} from "../../../actions/authActions";
import {FormItems, Button} from "../../reusableParts/form-items";
import {SettingsForm} from "../setting-style";
import {editUsers} from '../../../actions/adminActions'

const RegistrationForm = props => {

    useEffect(() => {
     
        props.setValues(props.admin)
    }, [props.admin])

    const handleCancel = ()=>{
        props.cancel(!props.formState)
        props.setAdmin(
            {

                first_name: '',
                last_name: '',
                username: ''
            }

        )
    }


    return (
        <>
                <FormItems>
                    <SettingsForm>
                    <div className="form-container">
                        {props.formState ?
                            <h1 className="title">Edit Administrator</h1>
                            :
                            <h1 className="title">Add Administrator</h1>
                        }
                        <Form>
                            <div className="inline">
                                <div className="labels">
                                    <ul>
                                        <li>First Name</li>
                                        <li>Last Name</li>
                                        <li>Username</li>
                                        <li>Password</li>
                                    </ul>
                                </div>
                                <div>
                                    <Field className="regular-input" type="text" name="first_name"/>

                                    {props.touched.first_name && props.errors.firstName && (
                                        <p className="errormessage">{props.errors.firstName}</p>
                                    )}
                                    <Field className="regular-input" type="text" name="last_name"/>
                                    {props.touched.last_name && props.errors.last_name && (
                                        <p className="errormessage">{props.errors.last_name}</p>
                                    )}
                                    <Field className="regular-input" type="text" name="username"/>
                                    {props.touched.username && props.errors.username && (
                                        <p className="errormessage">{props.errors.username}</p>
                                    )}
                                    {props.formState && <Field className="regular-input" type="password" name="password" />
                                      }
                                    {props.touched.password && props.errors.password && (
                                        <p className="errormessage">{props.errors.password}</p>
                                    )}
                                    
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className="submit-btn" type="submit">Submit</button>
                                {props.formState &&
                                    <Button onClick={() =>handleCancel()} bgOnHover="#db4343" bg="#EB5757" color="white">Cancel</Button>
                                }
                            </div>
                        </Form>
                    </div>
                    </SettingsForm>
                </FormItems>
        </>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({first_name, last_name, username, password}) {
        return {
            first_name: first_name || "",
            last_name: last_name || "",
            username: username || "",
            password: password || "",
        };
    },

    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("Please enter a first name"),
        last_name: Yup.string().required("Please enter a last name"),
        username: Yup.string().required("Please enter a username"),
        password: Yup.string().required("Enter a password")
    }),

    handleSubmit(values,{props}) {
        if(props.formState){
props.editUsers(
   props.admin.id, values
)
        } else {
            props.registerUser(values);  
        }
        
        // props.history.push("/dashboard");

    }
})(RegistrationForm);


export default connect(
    null,
    {registerUser, editUsers}

)(FormikRegistrationForm);