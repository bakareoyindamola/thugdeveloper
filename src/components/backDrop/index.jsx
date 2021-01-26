import { Container, Inner } from './styles/backDrop';

export default function BackDrop({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

BackDrop.Inner = function BackDropInner ({ ...restProps }) {
    return <Inner {...restProps} />
}
