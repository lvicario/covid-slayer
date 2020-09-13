import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import { FieldWrapper } from "./utils/ui/FieldWrapper";
import Notification from "./utils/ui/Notification";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email()
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('Required')
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated, fetchAuth, errorMessage } = useAuth();
    const emailRef = useRef<any>(null);

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        dispatch(fetchAuth(values));
        setSubmitting(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
        }

        // auto focus email field
        emailRef && emailRef.current && emailRef.current.focus();
    }, [isAuthenticated, history]);

    return (
        <>
            <Notification>{errorMessage}</Notification>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => {
                    return (
                        <>
                            <Form>
                                <FieldWrapper>
                                    <Field type="text" name="email" innerRef={emailRef} autoComplete="off" />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field type="password" name="password" autoComplete="off" />
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                </FieldWrapper>
                                <button type="submit" disabled={isSubmitting}>Login</button>
                            </Form>
                        </>
                    )}
                }
            </Formik>
        </>
    );
};

export default LoginForm;
