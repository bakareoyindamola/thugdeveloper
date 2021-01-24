import {
    Container,
    Inner,
    Pane,
    ListWrapper,
    List,
    NavLink,
    Link,
    NavButton
} from './styles/topNavigation';

export default function TopNavigation ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

TopNavigation.Inner = function TopNavigationInner({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

TopNavigation.Pane = function TopNavigationPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

TopNavigation.List = function TopNavigationList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

TopNavigation.ListWrapper = function TopNavigationListWrapper({children, ...restProps}) {
    return <ListWrapper {...restProps}>{children}</ListWrapper>
}

TopNavigation.NavButton = function TopNavigationNavButton({children, ...restProps}) {
    return <NavButton {...restProps}>{children}</NavButton>
}

TopNavigation.NavLink = function TopNavigationNavLink({to, children, ...restProps}) {
    return <NavLink to={to} {...restProps}>{children}</NavLink>
}

TopNavigation.Link = function TopNavigationLink({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}
