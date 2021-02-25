import { Container, Inner, Pane, BoxLoader } from './styles/logoLoader';

export default function LogoLoader ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

LogoLoader.Inner = function LogoLoaderInner ({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

LogoLoader.Pane = function LogoLoaderPane ({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

LogoLoader.BoxLoader = function LogoLoaderBoxLoader ({ children, ...restProps }) {
    return <BoxLoader {...restProps}>{children}</BoxLoader>
}
