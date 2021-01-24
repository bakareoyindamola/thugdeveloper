import { Container, Element, Pane, Inner, AnimationWrapper, Animation } from './styles/skeletonLoader';

export default function SkeletonLoader({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

SkeletonLoader.Element = function SkeletonLoaderElement({ children, ...restProps }) {
    return <Element {...restProps}>{children}</Element>
}

SkeletonLoader.Pane = function SkeletonLoaderPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

SkeletonLoader.Inner = function SkeletonLoaderInner({ ...restProps }) {
    return <Inner {...restProps} />
}

SkeletonLoader.Animation = function SkeletonLoaderAnimation({ children, ...restProps }) {
    return <Animation {...restProps}>{children}</Animation>
}

SkeletonLoader.AnimationWrapper = function SkeletonLoaderAnimationWrapper({ children, ...restProps }) {
    return <AnimationWrapper {...restProps}>{children}</AnimationWrapper>
}
