import { WorkDetails } from "../components";
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

export default function WorkDetailsContainer () {
    const { id } = useParams();
    const { data, isLoading } = useQuery(['work-details', id], getWorkDetails);
    const baseURL = process.env.REACT_APP_PORTFOLIO_API_BASE_URL
    const lowImage = data&&data.cover_image.formats.thumbnail.url;
    const [src, { blur }] = useProgressiveImg(
        `${baseURL}${lowImage}`,
        data&&data.cover_image.name
    );

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <Layout>
            <Layout.Inner>
                <WorkDetails>
                    <WorkDetails.TextWrapper>
                        <WorkDetails.HeaderText>{data.title}</WorkDetails.HeaderText>
                        <WorkDetails.Paragraph>{data.description}</WorkDetails.Paragraph>
                    </WorkDetails.TextWrapper>
                    <WorkDetails.ImageWrapper>
                        <WorkDetails.ImageOverlay />
                        <WorkDetails.Picture>
                            <WorkDetails.ImageSource srcSet={`${baseURL}${lowImage}`} media="(max-width: 600px)" />
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
                <WorkDetails.GalleryInner>
                    <WorkDetails.GalleryImageWrapper>
                        <WorkDetails.GalleryPicture>
                            <WorkDetails.ImageSource srcSet={""} />
                            <WorkDetails.Image src={"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"} alt={""} />
                        </WorkDetails.GalleryPicture>
                    </WorkDetails.GalleryImageWrapper>
                    <WorkDetails.GalleryImageWrapper>
                        <WorkDetails.GalleryPicture>
                            <WorkDetails.ImageSource srcSet={""} />
                            <WorkDetails.Image src={"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"} alt={""} />
                        </WorkDetails.GalleryPicture>
                    </WorkDetails.GalleryImageWrapper>
                    <WorkDetails.GalleryImageWrapper>
                        <WorkDetails.GalleryPicture>
                            <WorkDetails.ImageSource srcSet={""} />
                            <WorkDetails.Image src={"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"} alt={""} />
                        </WorkDetails.GalleryPicture>
                    </WorkDetails.GalleryImageWrapper>
                </WorkDetails.GalleryInner>
            </WorkDetails.GalleryContainer>
            <Layout.Inner>
                <Layout.Pane>
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
