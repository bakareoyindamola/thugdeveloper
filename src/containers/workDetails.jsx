import {ViewLink, WorkDetails} from "../components";
import { Layout } from "../components";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import GithubContainer from "./github";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getWorkDetails } from "../services/workServices";
import truncateString from "../helpers/truncateString";
import useProgressiveImg from "../hooks/useProgressiveImage";
import ImageLoad from "../helpers/imageLoad";
import FeedbackContainer from "./feedback";

//Assets
import {AndroidSVG, IOSSVG, LinkSVG} from "./svgs";

export default function WorkDetailsContainer () {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery(['work-details', id], getWorkDetails);
    const lowImage = data&&data.cover_image.formats.thumbnail.url;
    const [src, { blur }] = useProgressiveImg(
        lowImage,
        data&&data.cover_image.url
    );

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        // console.log(error.response)
        // console.log(error.response.status)
        // console.log(error.response.statusText)
        return <p>Error: {error.message}</p>
    }

    return (
        <Layout>
            <FeedbackContainer />
            <Layout.Inner>
                <WorkDetails>
                    <WorkDetails.TextWrapper>
                        <WorkDetails.HeaderText>{data.title}</WorkDetails.HeaderText>
                        <WorkDetails.Paragraph>{data.description}</WorkDetails.Paragraph>
                    </WorkDetails.TextWrapper>
                    <WorkDetails.ImageWrapper>
                        <WorkDetails.ImageOverlay />
                        <WorkDetails.Picture>
                            <WorkDetails.ImageSource srcSet={lowImage} media="(max-width: 600px)" />
                            <WorkDetails.Image src={src}
                                               style={{
                                                    filter: blur ? 20 : 0,
                                                    transition: "filter .15s linear"
                                                }}
                                               alt={data.title} />
                        </WorkDetails.Picture>
                        <WorkDetails.SkillWrapper>
                            {data.skills.map(skill => (
                                <WorkDetails.Skill key={skill.id}>
                                    <WorkDetails.SkillText>
                                        {skill.name}
                                    </WorkDetails.SkillText>
                                </WorkDetails.Skill>
                            ))}
                        </WorkDetails.SkillWrapper>
                    </WorkDetails.ImageWrapper>
                    <WorkDetails.InfoWrapper>
                        <WorkDetails.InfoPane className={"info"}>
                            <WorkDetails.InfoPane>
                                <WorkDetails.InfoText className={"header"}>role</WorkDetails.InfoText>
                                <WorkDetails.InfoText className={"lead-text"}>{data.role}</WorkDetails.InfoText>
                            </WorkDetails.InfoPane>
                            <WorkDetails.InfoPane>
                                <WorkDetails.InfoText className={"header"}>length</WorkDetails.InfoText>
                                <WorkDetails.InfoText className={"lead-text"}>{data.duration}</WorkDetails.InfoText>
                            </WorkDetails.InfoPane>
                            <WorkDetails.InfoPane>
                                <WorkDetails.InfoText className={"header"}>link/url</WorkDetails.InfoText>
                                <WorkDetails.Link href={data.link}>{truncateString(data.link, 12)}</WorkDetails.Link>
                            </WorkDetails.InfoPane>
                        </WorkDetails.InfoPane>
                        <WorkDetails.InfoPane className={"contributors"}>
                            <WorkDetails.InfoText className={"header"}>contributors</WorkDetails.InfoText>
                            <WorkDetails.ContributorsWrapper>
                                <WorkDetails.Contributor />
                                <WorkDetails.Contributor />
                                <WorkDetails.Contributor />
                                <WorkDetails.Contributor />
                            </WorkDetails.ContributorsWrapper>
                        </WorkDetails.InfoPane>
                    </WorkDetails.InfoWrapper>
                    <WorkDetails.InfoText className={"header"}>repo</WorkDetails.InfoText>
                    <GithubContainer href={data.github_link} />
                    <WorkDetails.ResultWrapper>
                        <WorkDetails.ResultText>THE RESULT</WorkDetails.ResultText>
                        <WorkDetails.Paragraph className={"work_details_result"}>{data.result_description}</WorkDetails.Paragraph>
                    </WorkDetails.ResultWrapper>
                </WorkDetails>
            </Layout.Inner>
            <WorkDetails.GalleryContainer>
                <WorkDetails.GalleryInner layout={data&&data?.showcase_images.length}>
                    {data&&data?.showcase_images.map(image => {
                        return (
                            <WorkDetails.GalleryImageWrapper key={image.id}>
                                <WorkDetails.GalleryPicture>
                                    <ImageLoad
                                        src={image.url}
                                        placeholder={image.formats.thumbnail.url}
                                        alt={data.title}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </WorkDetails.GalleryPicture>
                            </WorkDetails.GalleryImageWrapper>
                        )
                    })}
                </WorkDetails.GalleryInner>
            </WorkDetails.GalleryContainer>
            <Layout.Inner>
                <Layout.Pane>
                    {data.categories[0].name === "Web"
                        && <ViewLink category={"web"}>
                                <ViewLink.Link href={data.link}>
                                    <LinkSVG />
                                    Visit Live Site
                                </ViewLink.Link>
                            </ViewLink>
                    }
                    {data.categories[0].name === "Mobile"
                        && <ViewLink category={"mobile"}>
                                <ViewLink.Link href={data.android_link}>>
                                    <AndroidSVG />
                                    Android Download
                                </ViewLink.Link>
                                <ViewLink.Link href={data.ios_link}>
                                    <IOSSVG />
                                    iOS Download
                                </ViewLink.Link>
                            </ViewLink>
                    }
                    {data.categories[0].name === "Web and Mobile"
                        && <ViewLink category={"web_and_mobile"}>
                                <ViewLink.Link href={data.android_link}>
                                    <AndroidSVG />
                                    Android Download
                                </ViewLink.Link>
                                <ViewLink.Link href={data.ios_link}>
                                    <IOSSVG />
                                    iOS Download
                                </ViewLink.Link>
                                <ViewLink.Link href={data.link}>
                                    <LinkSVG />
                                    Visit Live Site
                                </ViewLink.Link>
                            </ViewLink>
                    }
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
