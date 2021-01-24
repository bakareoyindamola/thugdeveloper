import { Suspense, lazy } from "react";
import { Layout } from "../components";
import HomepageBannerContainer from "./homepageBanner";
import HomepageSkillsContainer from "./homepageSkills";
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";
import { getBestTwoProjects } from "../services/homepageService";
import { useQuery } from "react-query";

const SomeProjectsContainer = lazy(() => import("./someProjects"))

export default function HomepageContainer() {
    const { data, isLoading, isError, error } = useQuery("best-two-projects", getBestTwoProjects);

    if (isLoading) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <Layout className={"homepage homepage_layout_animate"}>
            <Layout.Inner>
                <HomepageBannerContainer />
                <Layout.Pane>
                    <HomepageSkillsContainer />
                    <Suspense fallback={<div>Loading</div>} >
                        <SomeProjectsContainer
                            bestProjects={data}
                        />
                    </Suspense>
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
