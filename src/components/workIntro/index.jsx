import {
    Container,
    Pane,
    NumberText,
    TextWrapper,
    GithubWrapper,
    NumberParagraph
} from "./styles/workIntro";
import { HeaderText, Paragraph } from "../generalStyles/textStyles";

export default function WorkIntro({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

WorkIntro.Pane = function WorkIntroPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

WorkIntro.Paragraph = function WorkIntroParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

WorkIntro.HeaderText = function WorkIntroHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

WorkIntro.NumberText = function WorkIntroNumberText({ children, ...restProps }) {
    return <NumberText {...restProps}>{children}</NumberText>
}

WorkIntro.TextWrapper = function WorkIntroTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
}

WorkIntro.GithubWrapper = function WorkIntroGithubWrapper({ children, ...restProps }) {
    return <GithubWrapper {...restProps}>{children}</GithubWrapper>
}

WorkIntro.NumberParagraph = function WorkIntroNumberParagraph({ children, ...restProps }) {
    return <NumberParagraph {...restProps}>{children}</NumberParagraph>
}
