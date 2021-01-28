import { Container, Link } from './styles/viewLink';

export default function ViewLink ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

ViewLink.Link = function ViewLinkLink ({ children, ...restProps }) {
    return <Link {...restProps} rel={"nofollow"} target={"_blank"}>{children}</Link>
}
