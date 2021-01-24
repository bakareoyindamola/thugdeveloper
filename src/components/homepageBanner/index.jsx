import {
    Container,
    Inner,
    Pane,
    ImageWrapper,
    Image,
    HeaderText,
    Paragraph,
    ButtonWrapper,
    Box,
    Link
} from './styles/homepageBanner';

export default function HomepageBanner({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

HomepageBanner.Inner = function HomepageBannerInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

HomepageBanner.Pane = function HomepageBannerPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

HomepageBanner.ImageWrapper = function HomepageBannerImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

HomepageBanner.Image = function HomepageBannerImage({ ...restProps }) {
    return <Image {...restProps} />
}

HomepageBanner.HeaderText = function HomepageBannerHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

HomepageBanner.Paragraph = function HomepageBannerParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

HomepageBanner.ButtonWrapper = function HomepageBannerButtonWrapper({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
}

HomepageBanner.Box = function HomepageBannerBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

HomepageBanner.Link = function HomepageBannerLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
