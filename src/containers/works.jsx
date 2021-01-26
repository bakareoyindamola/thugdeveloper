import { Layout } from "../components";
import { WorkIntro } from "../components";
import GithubContainer from "./github";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import WorkContentContainer from "./workContent";
import { useQuery } from "react-query";
import { getWorksLength } from "../services/workServices";

export default function WorksContainer() {
    const { data, isSuccess } = useQuery("work-length", getWorksLength);

    return (
        <Layout>
            <Layout.Inner>
                <WorkIntro>
                    <WorkIntro.TextWrapper>
                        <WorkIntro.HeaderText>some of my work<span>.</span></WorkIntro.HeaderText>
                        <WorkIntro.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit nunc, curabitur</WorkIntro.Paragraph>
                        <WorkIntro.GithubWrapper>
                            <GithubContainer href={"https://www.f.com"} />
                        </WorkIntro.GithubWrapper>
                    </WorkIntro.TextWrapper>
                    <div>
                        <WorkIntro.Pane>
                            {isSuccess && <WorkIntro.NumberText>{data}</WorkIntro.NumberText>}
                            <WorkIntro.NumberParagraph>
                                Completed Projects
                            </WorkIntro.NumberParagraph>
                        </WorkIntro.Pane>
                    </div>
                </WorkIntro>
                <Layout.Pane>
                    <WorkContentContainer />
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
