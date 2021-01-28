import {
    Container,
    Inner,
    Link,
    List,
    ListWrapper,
    Button
} from './styles/mobileNavigation';

export default function MobileNavigation({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

MobileNavigation.Inner = function MobileNavigationInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

MobileNavigation.Link = function MobileNavigationLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

MobileNavigation.List = function MobileNavigationList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

MobileNavigation.ListWrapper = function MobileNavigationListWrapper({ children, ...restProps }) {
    return <ListWrapper {...restProps}>{children}</ListWrapper>
}

MobileNavigation.Button = function MobileNavigationButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
