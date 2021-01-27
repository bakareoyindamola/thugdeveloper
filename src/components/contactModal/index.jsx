import {
    Container,
    HeaderText,
    Inner,
    Pane,
    ButtonWrapper,
    Form,
    Input,
    Label,
    CancelWrapper,
    InputWrapper,
    Footer,
    Link
} from './styles/contactModal';
import { Paragraph } from "../generalStyles/textStyles";

export default function ContactModal ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ContactModal.Inner = function ContactModalInner ({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

ContactModal.Pane = function ContactModalPane ({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

ContactModal.HeaderText = function ContactModalHeaderText ({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

ContactModal.Paragraph = function ContactModalParagraph ({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

ContactModal.Form = function ContactModalForm ({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

ContactModal.InputWrapper = function ContactInputWrapper ({ children, ...restProps }) {
    return <InputWrapper {...restProps}>{children}</InputWrapper>
}

ContactModal.Label = function ContactModalLabel ({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

ContactModal.Input = function ContactModalInput ({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

ContactModal.ButtonWrapper = function ContactModalButtonWrapper ({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
}

ContactModal.Footer = function ContactModalFooter ({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}

ContactModal.CancelWrapper = function ContactModalCancelWrapper ({ children, ...restProps }) {
    return <CancelWrapper {...restProps}>{children}</CancelWrapper>
}

ContactModal.Link = function ContactModalLink ({ children, ...restProps }) {
    return <Link {...restProps} target={"_blank"}>{children}</Link>
}
