import {Button, ContactModal, Feedback} from "../components";
import { Formik } from "formik";
import * as yup from 'yup';

//Assets
import {CheckOutSVG, FeedbackSVG} from "./svgs";

export default function FeedbackContainer () {
    const validationSchema = yup.object().shape({
        name: yup.string(),
        description: yup.string()
            .required("Description is required")
            .min(10, "Must be at least 10 characters long")
    })

    return (
        <>
            <Feedback.IconWrapper>
                <FeedbackSVG />
            </Feedback.IconWrapper>
            <Feedback>
                <Feedback.Inner>
                    <Feedback.HeaderText>Hi!</Feedback.HeaderText>
                    <Feedback.Paragraph>So what do you think about this project? we will like to hear your thoughts.</Feedback.Paragraph>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            name: "",
                            description: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values)
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
                                <Feedback.Label htmlFor={"name"}>
                                    <Feedback.Input
                                        aria-label={"name"}
                                        name={"name"}
                                        id={"name"}
                                        autoComplete={"name"}
                                        placeholder={"Name"}
                                    />
                                </Feedback.Label>
                                <Feedback.Label htmlFor={"description"}>
                                    <Feedback.Input
                                        component={"textarea"}
                                        aria-label={"description"}
                                        name={"description"}
                                        id={"description"}
                                        rows={"5"}
                                        placeholder={"Feedback"}
                                        className={(touched.description&&errors.description) && `error`}
                                    />
                                    {
                                        touched.description && errors.description &&
                                        <ContactModal.Paragraph className={"error-text"}>{errors.description}</ContactModal.Paragraph>
                                    }
                                </Feedback.Label>
                                <Feedback.ButtonWrapper>
                                    <Button type={"submit"}>
                                        Send <CheckOutSVG />
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
