import {
    Container,
    Paragraph,
    HeaderText,
    Wrapper,
    Pane,
    Link
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Paragraph = function FooterParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Footer.HeaderText = function FooterHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Pane = function FooterPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}


