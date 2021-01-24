import { SomeProjects } from "../components";
import ProjectTemplate from "./projectTemplate";

export default function SomeProjectsContainer({ bestProjects }) {
    return(
        <SomeProjects>
            <SomeProjects.HeaderText>Some Projects<span>.</span></SomeProjects.HeaderText>
            <SomeProjects.Paragraph>
                Projects wey dey burst brain...(pidgin).
                <br />
                Projects that burst brains...(omo!!! English hard oh)
            </SomeProjects.Paragraph>
            <SomeProjects.ProjectWrapper>
                {bestProjects.map(project => (
                     <ProjectTemplate
                        key={project.id}
                        name={project.project_name}
                        description={project.description}
                        image={project.showcase_image.name}
                        small_image={project.showcase_image.formats.small?.url}
                        medium_image={project.showcase_image.formats.medium?.url}
                        direction={project.direction}
                    />
                ))}
            </SomeProjects.ProjectWrapper>
        </SomeProjects>
    )
}
