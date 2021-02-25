import { WorkDetails } from "../components";

export default function Contributors() {
    return (
        <WorkDetails.InfoPane className={"contributors"}>
            <WorkDetails.InfoText className={"header"}>contributors</WorkDetails.InfoText>
            <WorkDetails.ContributorsWrapper>
                <WorkDetails.Contributor />
                <WorkDetails.Contributor />
                <WorkDetails.Contributor />
                <WorkDetails.Contributor />
            </WorkDetails.ContributorsWrapper>
        </WorkDetails.InfoPane>
    )
}
