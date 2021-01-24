import { forwardRef } from 'react';
import {
    Container,
    Pane,
    Card,
    CardsWrapper,
    ImageWrapper,
    SkillPicture,
} from './styles/homepageSkills';

import { Paragraph, HeaderText } from "../generalStyles/textStyles";

const HomepageSkills = forwardRef(({ children, ...restProps }, ref) => {
    return <Container ref={ref} {...restProps}>{children}</Container>
})


HomepageSkills.Paragraph = function HomepageSkillsParagraph({ children, ...restProps }) {
    return <Paragraph {...restProps}>{children}</Paragraph>
}

HomepageSkills.HeaderText = function HomepageSkillsHeaderText({ children, ...restProps }) {
    return <HeaderText {...restProps}>{children}</HeaderText>
}

HomepageSkills.Pane = function HomepageSkillsPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

HomepageSkills.Card = function HomepageSkillsCard({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>
}

HomepageSkills.CardsWrapper = function HomepageSkillsCardsWrapper({ children, ...restProps }) {
    return <CardsWrapper {...restProps}>{children}</CardsWrapper>
}

HomepageSkills.ImageWrapper = function HomepageSkillsImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

HomepageSkills.SkillPicture = function HomepageSkillsSkillPicture({ children, ...restProps }) {
    return <SkillPicture {...restProps}>{children}</SkillPicture>
}

export default HomepageSkills;

