import { SomeProjects } from "../components";
import ProjectTemplate from "./projectTemplate";

export default function SomeProjectsContainer({ bestProjects }) {
    let num = 1;
    return(
        <SomeProjects>
            <SomeProjects.HeaderText>Some Projects<span>.</span></SomeProjects.HeaderText>
            <SomeProjects.Paragraph>
                Projects wey dey burst brain...(pidgin).
                <br />
                Projects that burst brains...(omo!!! English hard oh)
            </SomeProjects.Paragraph>
            <SomeProjects.ProjectWrapper>
                {bestProjects.map(project => {
                    if (num % 2 === 0) {
                        num++;
                        return <ProjectTemplate
                            key={project.id}
                            id={project.id}
                            name={project.title}
                            description={project.description}
                            image={project.cover_image.name}
                            small_image={project.cover_image.formats?.small?.url}
                            medium_image={project.cover_image.formats?.medium?.url}
                            thumbnail_image={project.cover_image.formats?.thumbnail?.name}
                            direction={"true"}
                        />
                    } else {
                        num++;
                        return <ProjectTemplate
                            key={project.id}
                            id={project.id}
                            name={project.title}
                            description={project.description}
                            image={project.cover_image.name}
                            small_image={project.cover_image.formats?.small?.url}
                            medium_image={project.cover_image.formats?.medium?.url}
                            thumbnail_image={project.cover_image.formats?.thumbnail?.name}
                        />
                    }
                })}
            </SomeProjects.ProjectWrapper>
        </SomeProjects>
    )
}
