import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";
import { FieldWrapper } from "@utils/ui/FieldWrapper";
import authService from "@services/authService";

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string().email()
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('Required')
});

const RegisterForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated, fetchAuth } = useAuth();
    const firstNameRef = useRef(null);

    const handleSubmit = async (values, { setSubmitting, ...otherProps }) => {
        try {
            const result = await authService.register(values);
            setSubmitting(false);
        } catch (err) {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        // auto focus email field
        firstNameRef && firstNameRef.current && firstNameRef.current.focus();
    }, [isAuthenticated, history]);

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, ...otherProps }) => {
                return (
                    <>
                        <Form>
                            <FieldWrapper>
                                <Field type="text" name="firstName" innerRef={firstNameRef} placeholder="First Name" autoComplete="off" />
                                <ErrorMessage name="firstName" component="div" className="error-message" />
                            </FieldWrapper>
                            <FieldWrapper>
                                <Field type="text" name="lastName" placeholder="Last Name" autoComplete="off" />
                                <ErrorMessage name="lastName" component="div" className="error-message" />
                            </FieldWrapper>
                            <FieldWrapper>
                                <Field type="text" name="email" placeholder="Email Address" autoComplete="off" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </FieldWrapper>
                            <FieldWrapper>
                                <Field type="password" name="password" placeholder="Password" autoComplete="off" />
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

export default RegisterForm;
