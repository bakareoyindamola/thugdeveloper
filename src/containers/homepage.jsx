import { Suspense, lazy } from "react";
import { Layout } from "../components";
import HomepageBannerContainer from "./homepageBanner";
import HomepageSkillsContainer from "./homepageSkills";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import { getWorks } from "../services/workServices";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

const SomeProjectsContainer = lazy(() => import("./someProjects"))

export default function HomepageContainer() {
    const { data, isLoading, isError, error } = useQuery("best-two-projects", getWorks);
    function filterProjects(project){
        return project.homepage === true;
    }

    const bestTwo = data && data.filter( project => filterProjects(project));

    if (isLoading) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <Helmet>
                <title>ThugDeveloper Portfolio</title>
            </Helmet>
            <Layout className={"homepage homepage_layout_animate"}>
            <Layout.Inner>
                <HomepageBannerContainer />
                <Layout.Pane>
                    <HomepageSkillsContainer />
                    <Suspense fallback={<div>Loading</div>} >
                        <SomeProjectsContainer
                            bestProjects={bestTwo}
                        />
                    </Suspense>
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
        </>
    )
}
