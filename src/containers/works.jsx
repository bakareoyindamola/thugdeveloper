import { Layout } from "../components";
import { WorkIntro } from "../components";
import GithubContainer from "./github";
import WorkSkeleton from "./workSkeleton";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import WorkContentContainer from "./workContent";

export default function WorksContainer() {
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
                            <WorkIntro.NumberText>64</WorkIntro.NumberText>
                            <WorkIntro.NumberParagraph>
                                Completed Projects
                            </WorkIntro.NumberParagraph>
                        </WorkIntro.Pane>
                    </div>
                </WorkIntro>
                <Layout.Pane>
                    {/*<WorkSkeleton />*/}
                    <WorkContentContainer />
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
