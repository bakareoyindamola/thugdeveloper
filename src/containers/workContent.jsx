import { WorkContent } from "../components";
import truncateString from '../helpers/truncateString';

export default function WorkContentContainer() {
    const dummy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla elit nunc, curabitur nunc purus. Lorem consectetur volutpat sem
                            tellus vestibulum velit sed nullam ultrices. Suscipit viverra
                            pharetra aliquam ultrices.`
    let num = 1;

    return (
        <WorkContent>
            {["me",2,3,7].map((index) => {
                if(num%2 === 0) {
                    num++
                    return <WorkContent.LinkWrapper key={index} to={""}>
                        <WorkContent.Inner color={"true"} direction={"true"}>
                            <WorkContent.ProjectWrapper>
                                <WorkContent.ProjectName>Project Name</WorkContent.ProjectName>
                                <WorkContent.ProjectDetails>
                                    {truncateString(dummy, 250)}
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
                } else {
                    num++
                    return <WorkContent.LinkWrapper key={index} to={""}>
                        <WorkContent.Inner>
                            <WorkContent.ProjectWrapper>
                                <WorkContent.ProjectName>Project Name</WorkContent.ProjectName>
                                <WorkContent.ProjectDetails>
                                    {truncateString(dummy, 250)}
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
                }
            })}
        </WorkContent>
    )
}
