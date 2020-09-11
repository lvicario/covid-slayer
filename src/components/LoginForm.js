import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import { FieldWrapper } from "./utils/ui/FieldWrapper";


const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('Required')
});

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isFetching, isAuthenticated, errorMessage, fetchAuth } = useAuth();
    const usernameRef = useRef(null);

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(fetchAuth(values));
        setSubmitting(false);
    };

    useEffect(() => {
        // if (isAuthenticated) {
        //     history.push("/");
        // }

        // auto focus username field
        usernameRef && usernameRef.current && usernameRef.current.focus();
    }, [isAuthenticated]);

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, ...otherProps }) => {
                return (
                    <>
                        <Form>
                            <FieldWrapper>
                                <Field type="text" name="username" innerRef={usernameRef} />
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </FieldWrapper>
                            <FieldWrapper>
                                <Field type="text" name="password" autoComplete="off" />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </FieldWrapper>
                            <button type="submit" disabled={isSubmitting}>Login</button>
                        </Form>
                    </>
                )}
            }
        </Formik>
    );
};

export default Login;
