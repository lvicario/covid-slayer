import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";
import { FieldWrapper } from "@utils/ui/FieldWrapper";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('Required')
});

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated, fetchAuth } = useAuth();
    const emailRef = useRef(null);

    const handleSubmit = (values, { setSubmitting }) => {
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
                                <Field type="text" name="email" innerRef={emailRef} />
                                <ErrorMessage name="email" component="div" className="error-message" />
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