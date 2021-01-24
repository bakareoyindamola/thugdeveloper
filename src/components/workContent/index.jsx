import {
    Container,
    Pane,
    Inner,
    Picture,
    ImageWrapper,
    Image,
    ImageSource,
    ProjectWrapper,
    ProjectName,
    ProjectDetails,
    LinkWrapper,
    SkillText,
    SkillWrapper
} from './styles/workContent';

export default function WorkContent({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

WorkContent.Pane = function WorkContentPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

WorkContent.Inner = function WorkContentInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

WorkContent.Picture = function WorkContentPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
}

WorkContent.ImageWrapper = function WorkContentImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

WorkContent.Image = function WorkContentImage({ ...restProps }) {
    return <Image {...restProps} />
}

WorkContent.ImageSource = function WorkContentImageSource({ ...restProps }) {
    return <ImageSource {...restProps} />
}

WorkContent.ProjectWrapper = function WorkContentProjectWrapper({ children, ...restProps }) {
    return <ProjectWrapper {...restProps}>{children}</ProjectWrapper>
}

WorkContent.ProjectName = function WorkContentProjectName({ children, ...restProps }) {
    return <ProjectName {...restProps}>{children}</ProjectName>
}

WorkContent.ProjectDetails = function WorkContentProjectDetails({ children, ...restProps }) {
    return <ProjectDetails {...restProps}>{children}</ProjectDetails>
}

WorkContent.LinkWrapper = function WorkContentLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>
}

WorkContent.SkillWrapper = function WorkContentSkillWrapper({ children, ...restProps }) {
    return <SkillWrapper {...restProps}>{children}</SkillWrapper>
}

WorkContent.SkillText = function WorkContentSkillText({ children, ...restProps }) {
    return <SkillText {...restProps}>{children}</SkillText>
}
