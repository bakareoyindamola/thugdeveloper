import { Layout } from "../components";
import AboutBannerContainer from './aboutBanner';
import SocialContainer from "./social";
import InspiredContainer from "./inspired";
import FooterContainer from "./footer";

export default function AboutPageContainer() {
    return (
        <Layout>
            <Layout.Inner>
                <Layout.Pane>
                    <AboutBannerContainer />
                    <SocialContainer />
                    <InspiredContainer />
                </Layout.Pane>
                <FooterContainer />
            </Layout.Inner>
        </Layout>
    )
}
