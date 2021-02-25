import { Layout } from "../components";
import { WorkIntro } from "../components";
import GithubContainer from "./github";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import WorkContentContainer from "./workContent";
import { Helmet } from "react-helmet";
import CompletedProject from "./completedProject";

export default function WorksContainer() {
    return (
        <>
            <Helmet>
                <title>Works</title>
            </Helmet>
            <Layout>
                <Layout.Inner>
                    <WorkIntro>
                        <WorkIntro.TextWrapper>
                            <WorkIntro.HeaderText>works<span>.</span></WorkIntro.HeaderText>
                            <WorkIntro.Paragraph>
                                I am very passionate about web accessibility, web performance, UI effects and creating friendly and dynamic user experiences.
                                <br /><br />
                                React is my brother, figma is my guy, Hire me.
                            </WorkIntro.Paragraph>
                            <WorkIntro.GithubWrapper>
                                <GithubContainer href={"https://github.com/bakareoyindamola"} />
                            </WorkIntro.GithubWrapper>
                        </WorkIntro.TextWrapper>
                        <div>
                            <CompletedProject />
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
        </>
    )
}
