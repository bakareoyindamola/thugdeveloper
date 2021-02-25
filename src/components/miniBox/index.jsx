import { Container, NumberParagraph, NumberText } from './styles/miniBox';

export default function MiniBox({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

MiniBox.NumberText = function MiniBoxNumberText({ children, ...restProps }) {
    return <NumberText {...restProps}>{children}</NumberText>
}

MiniBox.NumberParagraph = function MiniBoxNumberParagraph({ children, ...restProps }) {
    return <NumberParagraph {...restProps}>{children}</NumberParagraph>
}
