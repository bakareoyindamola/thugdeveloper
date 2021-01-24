import { Container, Inner, Pane } from './styles/layout';

export default function Layout({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Layout.Inner = function LayoutInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Layout.Pane = function LayoutPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}
