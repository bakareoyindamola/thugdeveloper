import {
    Container,
    Pane,
    TextWrapper,
    MiniBoxWrapper,
    Text,
    MiniBoxInner
} from './styles/aboutBanner';
import { HeaderText } from "../generalStyles/textStyles";

export default function AboutBanner({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

AboutBanner.Pane = function AboutBannerPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

AboutBanner.TextWrapper = function AboutBannerTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
}

AboutBanner.MiniBoxWrapper = function AboutBannerMiniBoxWrapper({ children, ...restProps }) {
    return <MiniBoxWrapper {...restProps}>{children}</MiniBoxWrapper>
}

AboutBanner.MiniBoxInner = function AboutBannerMiniBoxInner({ children, ...restProps }) {
    return <MiniBoxInner {...restProps}>{children}</MiniBoxInner>
}

AboutBanner.HeaderText = function AboutBannerHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

AboutBanner.Text = function AboutBannerText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
