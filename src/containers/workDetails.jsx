import { WorkDetails } from "../components";
import { Layout } from "../components";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";

export default function WorkDetailsContainer () {
    return (
        <Layout>
            <Layout.Inner>
                <WorkDetails>
                    <WorkDetails.TextWrapper>
                        <WorkDetails.HeaderText>Project Name</WorkDetails.HeaderText>
                        <WorkDetails.Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla elit nunc, curabitur nunc purus.
                            Lorem consectetur volutpat sem tellus vestibulum velit sed nullam ultrices.
                            Suscipit viverra pharetra aliquam ultrices.
                        </WorkDetails.Paragraph>
                    </WorkDetails.TextWrapper>

                    <WorkDetails.ImageWrapper>
                        <WorkDetails.ImageOverlay />
                        <WorkDetails.Picture>
                            <WorkDetails.ImageSource srcSet={""} />
                            <WorkDetails.Image src={"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"} alt={""} />
                        </WorkDetails.Picture>
                        <WorkDetails.SkillWrapper>
                            <WorkDetails.Skill>
                                <WorkDetails.SkillText>
                                    React
                                </WorkDetails.SkillText>
                            </WorkDetails.Skill>
                            <WorkDetails.Skill>
                                <WorkDetails.SkillText>
                                    JS
                                </WorkDetails.SkillText>
                            </WorkDetails.Skill>
                        </WorkDetails.SkillWrapper>
                    </WorkDetails.ImageWrapper>
                    <WorkDetails.ResultWrapper>
                        <WorkDetails.ResultText>THE RESULT</WorkDetails.ResultText>
                        <WorkDetails.Paragraph className={"center"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit nunc, curabitur nunc purus. Lorem consectetur volutpat sem tellus vestibulum velit sed nullam ultrices. Suscipit viverra pharetra aliquam ultrices.
                        </WorkDetails.Paragraph>
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
