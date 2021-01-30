import { forwardRef } from 'react';
import {
    Container,
    Pane,
    Wrapper,
    CardText,
    TextWrapper
} from './styles/social';
import { Paragraph, HeaderText } from "../generalStyles/textStyles";

const Social = forwardRef(({children, ...restProps}, ref) => {
    return <Container ref={ref} {...restProps}>{children}</Container>
})

Social.Paragraph = function SocialParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Social.HeaderText = function SocialHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

Social.Pane = function SocialPane({ children, ...restProps }) {
    return <Pane {...restProps} rel={"noopener"} target={"_blank"}>{children}</Pane>
}

Social.TextWrapper = function SocialTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
}

Social.Wrapper = function SocialWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Social.CardText = function SocialCardText({ children, ...restProps }) {
    return <CardText {...restProps}>{children}</CardText>
}

export default Social;
