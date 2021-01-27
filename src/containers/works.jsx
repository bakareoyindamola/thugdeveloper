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
