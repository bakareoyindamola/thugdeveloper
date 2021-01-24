import { forwardRef } from 'react';
import { Container, Paragraph, ButtonWrapper } from "./styles/inspired";
import { HeaderText } from "../generalStyles/textStyles";

const Inspired = forwardRef(({ children, ...restProps },ref) => {
    return <Container ref={ref} {...restProps}>{children}</Container>
})

Inspired.HeaderText = function InspiredHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

Inspired.Paragraph = function InspiredParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Inspired.ButtonWrapper = function InspiredButtonWrapper({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
}

export default Inspired;
