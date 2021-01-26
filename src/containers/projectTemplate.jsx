import { createRef } from 'react';
import { SomeProjects} from "../components";
import { SomeProjectProject } from "../components/someProjects";
import { useIntersection } from "react-use";
import gsap from 'gsap';
import { Routes } from "../constant/routes";

//Assets
import { CheckOutSVG } from "./svgs";

export default function ProjectTemplate({ name, description, image, direction, small_image, medium_image }) {
    const containerRef = createRef();
    const intersection = useIntersection(containerRef, {
        root: null,
        rootMargin: "0px",
        threshold: .7
    });
    const baseUrl = process.env.REACT_APP_PORTFOLIO_API_BASE_URL;

    //Animation for fading in
    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        });
    };

    //checking to see if the viewport is visible to the user
    intersection && intersection.intersectionRatio > .7 && fadeIn(".fadeIn");

    return (
        <SomeProjectProject ref={containerRef} direction={direction ? 'row-reverse' : "row"}>
            <SomeProjects.ImageWrapper className={"fadeIn"}>
                <SomeProjects.Picture>
                    {small_image !== undefined && <SomeProjects.ImageSource srcSet={baseUrl+small_image} media="(min-width: 500px)" sizes={"100%"} />}
                    {medium_image !== undefined && <SomeProjects.ImageSource srcSet={baseUrl+medium_image} media="(min-width: 1000px)" sizes={"100%"} />}
                    {medium_image !== undefined && <SomeProjects.ImageSource srcSet={image} media="(min-width: 1500px)" sizes={"100%"} />}
                    {small_image === undefined
                        ? <SomeProjects.Image width={"100%"} height={"100%"} src={image} alt={name} />
                        : <SomeProjects.Image width={"100%"} height={"100%"} src={baseUrl+small_image} alt={name} />
                    }
                </SomeProjects.Picture>
            </SomeProjects.ImageWrapper>
            <SomeProjects.ProjectDetails direction={direction ? 'row-reverse' : "row"}>
                <SomeProjects.ProjectName className={"fadeIn"}>{name}</SomeProjects.ProjectName>
                <SomeProjects.Paragraph className={"fadeIn"}>{description}</SomeProjects.Paragraph>
                <SomeProjects.ButtonWrapper className={"fadeIn"}>
                    <SomeProjects.Link to={Routes.WORK_DETAILS}>
                        Check it out
                        <CheckOutSVG />
                    </SomeProjects.Link>
                </SomeProjects.ButtonWrapper>
            </SomeProjects.ProjectDetails>
        </SomeProjectProject>
    )
}
