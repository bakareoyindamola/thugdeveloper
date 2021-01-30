import { useState } from 'react';
import {Button, ContactModal, Feedback} from "../components";
import { Formik } from "formik";
import * as yup from 'yup';

//Assets
import { FeedbackCancelSVG, CheckOutSVG, FeedbackSVG } from "./svgs";
import { openFeedback, closeFeedback } from "../animations";
import {feedback} from "../services/feedbackService";

export default function FeedbackContainer ({ title }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const validationSchema = yup.object().shape({
        name: yup.string(),
        feedback: yup.string()
            .required("Description is required")
            .min(10, "Must be at least 10 characters long")
    })
    const feedbackClose = () => {
        closeFeedback();
        setIsOpen(false);
    }
    const feedbackOpen = () => {
        openFeedback();
        setIsOpen(true)
    }

    return (
        <>
            {isOpen
                ? <Feedback.IconWrapper onClick={feedbackClose}>
                       <FeedbackCancelSVG />
                    </Feedback.IconWrapper>
                : <Feedback.IconWrapper onClick={feedbackOpen}>
                        <FeedbackSVG />
                    </Feedback.IconWrapper>}
            <Feedback className={"feedback_wrapper_animation"}>
                <Feedback.Inner className={"feedback_animation"}>
                    <Feedback.HeaderText className={"feedback_content_animation"}>Hi!</Feedback.HeaderText>
                    <Feedback.Paragraph className={"feedback_content_animation"}>So what do you think about this project? we will like to hear your thoughts.</Feedback.Paragraph>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            project_name: title,
                            name: "",
                            feedback: "",
                        }}
                        onSubmit={(values) => {
                            setIsSubmitting(true)
                            const submitFeedback = async() => {
                                try {
                                    await feedback(values);
                                } catch (e) {
                                    console.error(e)
                                } finally {
                                    setIsSubmitting(false)
                                }
                            }
                            submitFeedback();
                        }}
                    >
                        {({
                              values,
                              touched,
                              isValid,
                              errors,
                              dirty
                          }) => (
                            <Feedback.Form>
                                <Feedback.Label htmlFor={"name"} className={"feedback_content_animation"}>
                                    <Feedback.Input
                                        aria-label={"name"}
                                        name={"name"}
                                        id={"name"}
                                        autoComplete={"name"}
                                        placeholder={"Name"}
                                    />
                                </Feedback.Label>
                                <Feedback.Label htmlFor={"feedback"} className={"feedback_content_animation"}>
                                    <Feedback.Input
                                        component={"textarea"}
                                        aria-label={"feedback"}
                                        name={"feedback"}
                                        id={"feedback"}
                                        rows={"5"}
                                        placeholder={"Feedback"}
                                        className={(touched.feedback&&errors.feedback) && `error`}
                                    />
                                    {
                                        touched.feedback && errors.feedback &&
                                        <ContactModal.Paragraph className={"error-text"}>{errors.feedback}</ContactModal.Paragraph>
                                    }
                                </Feedback.Label>
                                <Feedback.ButtonWrapper className={"feedback_content_animation"}>
                                    <Button
                                        type={"submit"}
                                        disabled={!dirty || !isValid}
                                    >
                                        {isSubmitting
                                            ? "Loading..."
                                            : <>Send <CheckOutSVG /></>
                                        }
                                    </Button>
                                </Feedback.ButtonWrapper>
                            </Feedback.Form>
                        )}
                    </Formik>
                </Feedback.Inner>
            </Feedback>
        </>
    )
}
