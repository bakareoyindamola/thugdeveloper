import { SkeletonLoader } from "../components";

export default function WorkSkeleton({ children, ...restProps }) {
    return (
        <SkeletonLoader className={"work"}>
            <SkeletonLoader.Inner className={"flex"}>
                <SkeletonLoader.Pane className={"text-wrapper"}>
                    <SkeletonLoader.Element className={"name"} />
                    <SkeletonLoader.Element className={"paragraph"} />
                    <SkeletonLoader.Element className={"paragraph"} />
                    <SkeletonLoader.Element className={"paragraph"} />
                    <SkeletonLoader.Element className={"paragraph"} />
                    <SkeletonLoader.Element className={"paragraph"} />
                    <SkeletonLoader.Pane className={"skill-wrapper"}>
                        <SkeletonLoader.Element className={"skill"} />
                        <SkeletonLoader.Element className={"skill"} />
                    </SkeletonLoader.Pane>
                </SkeletonLoader.Pane>
                <SkeletonLoader.Pane className={"image-wrapper"}>
                    <SkeletonLoader.Element className={"thumbnail"} />
                </SkeletonLoader.Pane>
            </SkeletonLoader.Inner>
            <SkeletonLoader.AnimationWrapper>
                <SkeletonLoader.Animation />
            </SkeletonLoader.AnimationWrapper>
        </SkeletonLoader>
    )
}
