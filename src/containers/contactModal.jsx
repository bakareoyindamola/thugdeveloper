import { Button, ContactModal } from "../components";
import { Formik } from "formik";
import { closeContactModal } from "../animations";

//Assets
import { CancelSVG, CheckOutSVG } from "./svgs";
import {useDimension} from "../hooks";

export default function ContactModalContainer({ setContactModal }) {
    const [width] = useDimension("width");
    return (
        <ContactModal className={"contact_modal_wrapper_animation"}>
            {width <= 600 && <ContactModal.CancelWrapper onClick={closeContactModal}>
                <CancelSVG />
                </ContactModal.CancelWrapper>
            }
            <ContactModal.Inner>
                <ContactModal.Pane>
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
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ values }) => (
                            <ContactModal.Form>
                                <ContactModal.InputWrapper className={"contact_modal_content_animation"}>
                                    <ContactModal.Label htmlFor={"name"}>
                                        <ContactModal.Input
                                            aria-label="name"
                                            name={"name"}
                                            id={"name"}
                                            autoComplete={"name"}
                                            placeholder={"Name"}
                                        />
                                    </ContactModal.Label>
                                    <ContactModal.Label htmlFor={"email"}>
                                        <ContactModal.Input
                                            aria-label="email"
                                            autoComplete="email"
                                            name={"email"}
                                            id={"email"}
                                            placeholder={"Email Address"}
                                        />
                                    </ContactModal.Label>
                                </ContactModal.InputWrapper>
                                <ContactModal.Label className={"select contact_modal_content_animation"}>
                                    <ContactModal.Input
                                        component={"select"}
                                        name={"skill"}
                                        id={"skill"}
                                        aria-label="skill"
                                    >
                                        <option value="" disabled defaultValue hidden>What do you need?</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </ContactModal.Input>
                                </ContactModal.Label>
                                <ContactModal.Label htmlFor={"description"} className={"contact_modal_content_animation"}>
                                    <ContactModal.Input
                                        component={"textarea"}
                                        name={"description"}
                                        id={"description"}
                                        placeholder={"More information?"}
                                        rows={"5"}
                                    />
                                </ContactModal.Label>
                                <ContactModal.ButtonWrapper className={"contact_modal_content_animation"}>
                                    <Button
                                        type={"submit"}
                                    >
                                        Send <CheckOutSVG />
                                    </Button>
                                </ContactModal.ButtonWrapper>
                            </ContactModal.Form>
                        )}
                    </Formik>
                </ContactModal.Pane>
                <ContactModal.Footer>
                    <ContactModal.Paragraph className={"contact_modal_content_animation"}>
                        Need to be more social? you can still reach out to me on...
                    </ContactModal.Paragraph>
                    <ContactModal.Pane className={"footer-links-wrapper"}>

                    </ContactModal.Pane>
                </ContactModal.Footer>
            </ContactModal.Inner>
        </ContactModal>
    )
}
