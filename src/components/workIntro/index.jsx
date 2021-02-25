import {
    Container,
    TextWrapper,
    GithubWrapper,
} from "./styles/workIntro";
import { HeaderText, Paragraph } from "../generalStyles/textStyles";

export default function WorkIntro({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

WorkIntro.Paragraph = function WorkIntroParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

WorkIntro.HeaderText = function WorkIntroHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

WorkIntro.TextWrapper = function WorkIntroTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
}

WorkIntro.GithubWrapper = function WorkIntroGithubWrapper({ children, ...restProps }) {
    return <GithubWrapper {...restProps}>{children}</GithubWrapper>
}
