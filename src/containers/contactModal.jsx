import { useState } from 'react';
import { Button, ContactModal } from "../components";
import { Formik } from "formik";
import { closeContactModal } from "../animations";
import { useDimension } from "../hooks";
import * as yup from 'yup';
import { contactMe } from "../services/contactService";
import { closeContactForm } from "../animations";

//Assets
import {CancelSVG, CheckOutSVG, InstagramIconSVG, TwitterIconSVG, GithubIconSVG} from "./svgs";
import truncateString from "../helpers/truncateString";


export default function ContactModalContainer({ setContactModal }) {
    const [width] = useDimension("width");
    const [successfullyContacted, setSuccessfullyContacted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    let userName = "";

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters long"),
        email: yup.string()
            .required("Email is required")
            .email("Required valid email"),
        skill: yup.string()
            .required("Skill is required"),
        description: yup.string()
            .required("Description is required")
            .min(15, "Must be at least 15 characters long")
    })

    return (
        <ContactModal className={"contact_modal_wrapper_animation"}>
            {width <= 600 && <ContactModal.CancelWrapper onClick={closeContactModal}>
                <CancelSVG />
                </ContactModal.CancelWrapper>
            }
            <ContactModal.Inner>
                {successfullyContacted
                    ? <ContactModal.Pane className={"success-modal success_modal_animation"}>
                        <ContactModal.HeaderText className={"contact-success-text success_modal_text_animation"}>😎</ContactModal.HeaderText>
                        <ContactModal.HeaderText className={"contact-success-text success_modal_text_animation"}>Cool Project, {truncateString(userName, 5)}</ContactModal.HeaderText>
                        <ContactModal.Paragraph className={"success_modal_text_animation"}>Just give me few minutes and i will get back to you with some coffee...</ContactModal.Paragraph>
                        <ContactModal.ButtonWrapper className={"success_modal_text_animation"}>
                            <Button type={"button"} onClick={() => setSuccessfullyContacted(false)}>
                                Okay <CheckOutSVG />
                            </Button>
                        </ContactModal.ButtonWrapper>
                      </ContactModal.Pane>
                    : <ContactModal.Pane className={"contact_form_animation"}>
                            <ContactModal.HeaderText className={"contact_modal_content_animation"}>
                                Hi!<span>👋🏽</span>
                            </ContactModal.HeaderText>
                            <ContactModal.Paragraph className={"contact_modal_content_animation"}>
                                So you got a project you would like us to work on? Please fill the form below let’s get started.
                            </ContactModal.Paragraph>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    skill: "",
                                    description: ""
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    const submitDetails = async() => {
                                        setIsSubmitting(true)
                                        try {
                                            await contactMe(values);
                                            userName = values.name;
                                            await setSuccessfullyContacted(true);
                                            await closeContactForm();
                                            await setTimeout(setSuccessfullyContacted, 9000, false);
                                        } catch (e) {
                                           console.error(e)
                                        } finally {
                                            setIsSubmitting(false)
                                        }
                                    }
                                    submitDetails();
                                }}>
                                {({
                                      values,
                                      errors,
                                      touched,
                                      isValid,
                                      dirty
                                  }) => (
                                    <ContactModal.Form >
                                        <ContactModal.InputWrapper className={"contact_modal_content_animation"}>
                                            <ContactModal.Label htmlFor={"name"}>
                                                <ContactModal.Input
                                                    aria-label="name"
                                                    name={"name"}
                                                    id={"name"}
                                                    autoComplete={"name"}
                                                    placeholder={"Name"}
                                                    className={(touched.name&&errors.name) && `error`}
                                                />
                                                {
                                                    touched.name && errors.name &&
                                                    <ContactModal.Paragraph className={"error-text"}>{errors.name}</ContactModal.Paragraph>
                                                }
                                            </ContactModal.Label>
                                            <ContactModal.Label htmlFor={"email"}>
                                                <ContactModal.Input
                                                    aria-label="email"
                                                    autoComplete="email"
                                                    name={"email"}
                                                    id={"email"}
                                                    placeholder={"Email Address"}
                                                    className={(touched.email&&errors.email) && `error`}
                                                />
                                                {
                                                    touched.email && errors.email &&
                                                    <ContactModal.Paragraph className={"error-text"}>{errors.email}</ContactModal.Paragraph>
                                                }
                                            </ContactModal.Label>
                                        </ContactModal.InputWrapper>
                                        <ContactModal.Label className={"select contact_modal_content_animation"}>
                                            <ContactModal.Input
                                                component={"select"}
                                                name={"skill"}
                                                id={"skill"}
                                                aria-label="skill"
                                                className={(touched.skill&&errors.skill) && `error`}
                                            >
                                                <option value="" disabled defaultValue hidden>What do you need?</option>
                                                <option value="web">Web Development</option>
                                                <option value="mobile">Mobile Development</option>
                                            </ContactModal.Input>
                                            {
                                                touched.skill && errors.skill &&
                                                <ContactModal.Paragraph className={"error-text"}>{errors.skill}</ContactModal.Paragraph>
                                            }
                                        </ContactModal.Label>
                                        <ContactModal.Label htmlFor={"description"} className={"contact_modal_content_animation"}>
                                            <ContactModal.Input
                                                component={"textarea"}
                                                name={"description"}
                                                id={"description"}
                                                placeholder={"More information?"}
                                                rows={"5"}
                                                className={(touched.description&&errors.description) && `error`}
                                            />
                                            {
                                                touched.description && errors.description &&
                                                <ContactModal.Paragraph className={"error-text"}>{errors.description}</ContactModal.Paragraph>
                                            }
                                        </ContactModal.Label>
                                        <ContactModal.ButtonWrapper className={"contact_modal_content_animation"}>
                                            <Button
                                                type={"submit"}
                                                disabled={!dirty || !isValid}
                                            >
                                                {isSubmitting
                                                    ? "Loading..."
                                                    : <>Send <CheckOutSVG /></>
                                                }
                                            </Button>
                                        </ContactModal.ButtonWrapper>
                                    </ContactModal.Form>
                                )}
                            </Formik>
                        </ContactModal.Pane>
                }
                <ContactModal.Footer>
                    <ContactModal.Paragraph className={"contact_modal_content_animation"}>
                        Need to be more social? you can still reach out to me on...
                    </ContactModal.Paragraph>
                    <ContactModal.Pane className={"footer-links-wrapper"}>
                        <ContactModal.Link href={"https://twitter.com/theonlybakare"} aria-label={"Twitter"}>
                            <TwitterIconSVG />
                        </ContactModal.Link>
                        <ContactModal.Link href={"https://www.instagram.com/thugdeveloper/"} aria-label={"Instagram"}>
                            <InstagramIconSVG />
                        </ContactModal.Link>
                        <ContactModal.Link href={"https://github.com/bakareoyindamola"} aria-label={"Github"}>
                            <GithubIconSVG />
                        </ContactModal.Link>
                    </ContactModal.Pane>
                </ContactModal.Footer>
            </ContactModal.Inner>
        </ContactModal>
    )
}
