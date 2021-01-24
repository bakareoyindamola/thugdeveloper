import { forwardRef} from "react";
import {
    Container,
    Project,
    ProjectDetails,
    ProjectName,
    ProjectWrapper,
    ImageSource,
    Image,
    ImageWrapper,
    Picture,
    ButtonWrapper,
    Link
} from "./styles/someProjects";

import { Paragraph, HeaderText } from "../generalStyles/textStyles";

export default function SomeProjects({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

SomeProjects.HeaderText = function SomeProjectsHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

SomeProjects.Paragraph = function SomeProjectsParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

export const SomeProjectProject = forwardRef(({ children, ...restProps }, ref) => (
    <Project ref={ref} {...restProps}>{children}</Project>
));

SomeProjects.ProjectWrapper = function SomeProjectsProjectWrapper({ children, ...restProps }) {
    return <ProjectWrapper {...restProps}>{children}</ProjectWrapper>
}

SomeProjects.ProjectName = function SomeProjectsProjectName({ children, ...restProps }) {
    return <ProjectName {...restProps}>{children}</ProjectName>
}

SomeProjects.ProjectDetails = function SomeProjectsProjectDetails({ children, ...restProps }) {
    return <ProjectDetails {...restProps}>{children}</ProjectDetails>
}

SomeProjects.Image = function SomeProjectsImage({ ...restProps }) {
    return <Image {...restProps} />
}

SomeProjects.Picture = function SomeProjectsPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
}

SomeProjects.ImageWrapper = function SomeProjectsImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

SomeProjects.ImageSource = function SomeProjectsImageSource({ ...restProps }) {
    return <ImageSource {...restProps} />
}

SomeProjects.ButtonWrapper = function SomeProjectsButtonWrapper({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
}

SomeProjects.Link = function SomeProjectsLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
