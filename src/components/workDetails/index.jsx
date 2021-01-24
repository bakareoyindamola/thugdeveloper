import {
    Container,
    Picture,
    SkillWrapper,
    SkillText,
    ImageSource,
    Image,
    ImageWrapper,
    TextWrapper,
    ImageOverlay,
    InfoWrapper,
    Skill,
    ResultText,
    ResultWrapper,
    GalleryContainer,
    GalleryImageWrapper,
    GalleryInner,
    GalleryPicture
} from './styles/workDetails';
import { Paragraph, HeaderText } from "../generalStyles/textStyles";

export default function WorkDetails ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

WorkDetails.Picture = function WorkDetailsPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
}

WorkDetails.SkillWrapper = function WorkDetailsSkillWrapper ({children, restProps}) {
    return <SkillWrapper {...restProps}>{children}</SkillWrapper>
}

WorkDetails.SkillText = function WorkDetailsSkillText ({ children, ...restProps }) {
    return <SkillText {...restProps}>{children}</SkillText>
}

WorkDetails.ImageSource = function WorkDetailsImageSource ({ children, ...restProps }) {
    return <ImageSource {...restProps}>{children}</ImageSource>
}

WorkDetails.Image = function WorkDetailsImage ({ ...restProps }) {
    return <Image {...restProps} />
}

WorkDetails.ImageWrapper = function WorkDetailsImageWrapper ({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

WorkDetails.TextWrapper = function WorkDetailsTextWrapper ({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
}

WorkDetails.HeaderText = function WorkDetailsHeaderText ({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

WorkDetails.Paragraph = function WorkDetailsParagraph ({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

WorkDetails.Skill = function WorkDetailsSkill ({ children, ...restProps }) {
    return <Skill {...restProps}>{children}</Skill>
}

WorkDetails.InfoWrapper = function WorkDetailsInfoWrapper ({ children, ...restProps }) {
    return <InfoWrapper {...restProps}>{children}</InfoWrapper>
}

WorkDetails.ResultText = function WorkDetailsResultText ({ children, ...restProps }) {
    return <ResultText {...restProps}>{children}</ResultText>
}

WorkDetails.ResultWrapper = function WorkDetailsResultWrapper ({ children, ...restProps }) {
    return <ResultWrapper {...restProps}>{children}</ResultWrapper>
}

WorkDetails.GalleryContainer = function WorkDetailsGalleryContainer ({ children, ...restProps }) {
    return <GalleryContainer {...restProps}>{children}</GalleryContainer>
}

WorkDetails.GalleryInner = function WorkDetailsGalleryInner ({ children, ...restProps }) {
    return <GalleryInner {...restProps}>{children}</GalleryInner>
}

WorkDetails.GalleryImageWrapper = function WorkDetailsGalleryImageWrapper ({ children, ...restProps }) {
    return <GalleryImageWrapper {...restProps}>{children}</GalleryImageWrapper>
}

WorkDetails.GalleryPicture = function WorkDetailsGalleryPicture ({ children, ...restProps }) {
    return <GalleryPicture {...restProps}>{children}</GalleryPicture>
}

WorkDetails.ImageOverlay = function WorkDetailsImageOverlay ({ ...restProps }) {
    return <ImageOverlay {...restProps} />
}
