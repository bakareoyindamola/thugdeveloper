import { Layout } from "../components";
import { WorkIntro } from "../components";
import GithubContainer from "./github";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import WorkContentContainer from "./workContent";
import { useQuery } from "react-query";
import { getWorksLength } from "../services/workServices";
import MetaTags from 'react-meta-tags';
import truncateString from "../helpers/truncateString";

export default function WorksContainer() {
    const { data, isSuccess } = useQuery("work-length", getWorksLength);
    const currentLink = window.location.href;

    return (
        <>
            <MetaTags>
                <title>Works</title>
                <meta property="og:url" content={currentLink} />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content={"ThugDeveloper Works"} />
                <meta property="og:description" content={"I am very passionate about web accessibility, web performance, UI effects and creating friendly and dynamic user experiences."} />
                {/*<meta property="og:image" content={data.showcase_images.formats.large.url} />*/}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@theonlybakare" />
                <meta name="twitter:creator" content="@theonlybakare" />
                {/*<meta name="twitter:image " content={data.showcase_images.formats.large.url} />*/}
            </MetaTags>
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
        </>
    )
}
