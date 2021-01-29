import {
    Container,
    Label,
    Inner,
    Input,
    Form,
    ButtonWrapper,
    IconWrapper,
    HeaderText
} from './styles/feedback';
import { Paragraph } from "../generalStyles/textStyles";

export default function Feedback ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feedback.Label = function FeedbackLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
}

Feedback.Form = function FeedbackForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
}

Feedback.Input = function FeedbackInput({ ...restProps }) {
    return <Input {...restProps} />
}

Feedback.ButtonWrapper = function FeedbackButtonWrapper({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
}

Feedback.Paragraph = function FeedbackParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>;
}

Feedback.HeaderText = function FeedbackHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>;
}

Feedback.IconWrapper = function FeedbackIconWrapper({ children, ...restProps }) {
    return <IconWrapper {...restProps}>{children}</IconWrapper>;
}

Feedback.Inner = function FeedbackInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>;
}
