import { WorkContent } from "../components";

export default function WorkContentContainer({ children, ...restProps }) {
    return (
        <WorkContent>
            <WorkContent.LinkWrapper to={""}>
                <WorkContent.Inner>
                    <WorkContent.ProjectWrapper>
                        <WorkContent.ProjectName>Project Name</WorkContent.ProjectName>
                        <WorkContent.ProjectDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit nunc, curabitur nunc purus. Lorem consectetur volutpat sem tellus vestibulum velit sed nullam ultrices. Suscipit viverra pharetra aliquam ultrices.
                        </WorkContent.ProjectDetails>
                        <WorkContent.Pane>
                            <WorkContent.SkillWrapper>
                                <WorkContent.SkillText>
                                    React
                                </WorkContent.SkillText>
                            </WorkContent.SkillWrapper>
                            <WorkContent.SkillWrapper>
                                <WorkContent.SkillText>
                                    JS
                                </WorkContent.SkillText>
                            </WorkContent.SkillWrapper>
                        </WorkContent.Pane>
                    </WorkContent.ProjectWrapper>
                    <WorkContent.ImageWrapper>
                        <WorkContent.Picture>
                            <WorkContent.ImageSource srcSet={""} />
                            <WorkContent.Image src={""} alt={""} />
                        </WorkContent.Picture>
                    </WorkContent.ImageWrapper>
                </WorkContent.Inner>
            </WorkContent.LinkWrapper>
        </WorkContent>
    )
}
