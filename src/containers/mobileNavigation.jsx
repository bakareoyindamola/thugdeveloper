import { MobileNavigation } from "../components";
import { Routes } from "../constant/routes";
import {closeMobileNav, contactModalOpenAnimation} from "../animations";


export default function MobileNavigationContainer({ setMobileNav }) {
    return (
        <MobileNavigation className={"mobile_navigation_animation"}>
            <MobileNavigation.Inner>
                <MobileNavigation.ListWrapper>
                    <MobileNavigation.List className={"mobile_navigation_content_animation"}>
                        <MobileNavigation.Link onClick={() => {
                            setMobileNav(false);
                            closeMobileNav();
                        }} to={Routes.WORKS}>
                            Work
                        </MobileNavigation.Link>
                    </MobileNavigation.List>
                    <MobileNavigation.List className={"mobile_navigation_content_animation"}>
                        <MobileNavigation.Link onClick={() => {
                            setMobileNav(false);
                            closeMobileNav();
                        }} to={Routes.ABOUT}>
                            About me
                        </MobileNavigation.Link>
                    </MobileNavigation.List>
                    <MobileNavigation.List className={"mobile_navigation_content_animation"}>
                        <MobileNavigation.Link onClick={() => {
                            setMobileNav(false);
                            closeMobileNav();
                        }} to={Routes.CERTIFICATION}>
                            Certification
                        </MobileNavigation.Link>
                    </MobileNavigation.List>
                    <MobileNavigation.List className={"mobile_navigation_content_animation"}>
                        <MobileNavigation.Button onClick={() =>{
                            contactModalOpenAnimation();
                            setMobileNav(false);
                            closeMobileNav();
                        }}>
                            Let's talk
                        </MobileNavigation.Button>
                    </MobileNavigation.List>
                </MobileNavigation.ListWrapper>
            </MobileNavigation.Inner>
        </MobileNavigation>
    )
}
