import { WorkContent } from "../components";
import truncateString from '../helpers/truncateString';
import {useQuery} from "react-query";
import { getWorks } from "../services/workServices";
import WorkSkeleton from "./workSkeleton";
import ImageLoad from "../helpers/imageLoad";

export default function WorkContentContainer() {
    const { data, isLoading } = useQuery("works", getWorks);
    let num = 1;

    if (isLoading) {
        return <WorkSkeleton />
    }

    return (
        <WorkContent>
            {data.map((work) => {
                if(num%2 === 0) {
                    num++
                    return <WorkContent.LinkWrapper key={work.id} to={`/work/${work.id}`}>
                        <WorkContent.Inner color={"true"} direction={"true"}>
                            <WorkContent.ProjectWrapper direction={"true"}>
                                <WorkContent.ProjectName>{work.title}</WorkContent.ProjectName>
                                <WorkContent.ProjectDetails>
                                    {truncateString(work.description, 250)}
                                </WorkContent.ProjectDetails>
                                <WorkContent.Pane>
                                    {work.skills.map(skill => (
                                        <WorkContent.SkillWrapper key={skill.id}>
                                            <WorkContent.SkillText>
                                                {skill.name}
                                            </WorkContent.SkillText>
                                        </WorkContent.SkillWrapper>
                                    ))}
                                </WorkContent.Pane>
                            </WorkContent.ProjectWrapper>
                            <WorkContent.ImageWrapper>
                                <WorkContent.Picture>
                                    <ImageLoad
                                        src={work.cover_image.url}
                                        placeholder={work.cover_image.formats.thumbnail.url}
                                        alt={work.title}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </WorkContent.Picture>
                            </WorkContent.ImageWrapper>
                        </WorkContent.Inner>
                    </WorkContent.LinkWrapper>
                } else {
                    num++
                    return <WorkContent.LinkWrapper key={work.id} to={`/work/${work.id}`}>
                        <WorkContent.Inner>
                            <WorkContent.ProjectWrapper>
                                <WorkContent.ProjectName>{work.title}</WorkContent.ProjectName>
                                <WorkContent.ProjectDetails>
                                    {truncateString(work.description, 250)}
                                </WorkContent.ProjectDetails>
                                <WorkContent.Pane>
                                    {work.skills.map(skill => (
                                        <WorkContent.SkillWrapper key={skill.id}>
                                            <WorkContent.SkillText>
                                                {skill.name}
                                            </WorkContent.SkillText>
                                        </WorkContent.SkillWrapper>
                                    ))}
                                </WorkContent.Pane>
                            </WorkContent.ProjectWrapper>
                            <WorkContent.ImageWrapper>
                                <WorkContent.Picture>
                                    <ImageLoad
                                        src={work.cover_image.url}
                                        placeholder={work.cover_image.formats.thumbnail.url}
                                        alt={work.title}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </WorkContent.Picture>
                            </WorkContent.ImageWrapper>
                        </WorkContent.Inner>
                    </WorkContent.LinkWrapper>
                }
            })}
        </WorkContent>
    )
}
