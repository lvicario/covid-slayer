import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import { FieldWrapper } from "./utils/ui/FieldWrapper";
import playerService from "./../services/playerService";
import Notification from "./utils/ui/Notification";
import { getErrorMessage } from "./../helpers";

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    email: Yup.string().email()
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('Required')
});

interface NotificationState {
    message: string;
    variant?: string;
}

const RegisterForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated, fetchAuth } = useAuth();
    const nameRef = useRef<any>(null);
    const [notification, setNotification] = useState<NotificationState | null>(null);

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            const result = await playerService.register(values);
            setNotification({message: "Registration successful!", variant: "success"});
            setSubmitting(false);
        } catch (err) {
            const errorMessage = getErrorMessage(err);
            setNotification({message: errorMessage});
            setSubmitting(false);
        }
    };

    setTimeout(() => setNotification(null), 4000);

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
        }

        // auto focus email field
        nameRef && nameRef.current && nameRef.current.focus();
    }, [isAuthenticated, history]);

    return (
        <>
            {notification && <Notification variant={notification.variant}>{notification.message}</Notification>}
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: ""
                }}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => {
                    return (
                        <>
                            <Form>
                                <FieldWrapper>
                                    <Field type="text" name="name" innerRef={nameRef} placeholder="Name" autoComplete="off" />
                                    <ErrorMessage name="name" component="div" className="error-message" />
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
        </>
    );
};

export default RegisterForm;
