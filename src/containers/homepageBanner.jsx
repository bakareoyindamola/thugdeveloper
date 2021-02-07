import { useEffect } from 'react';
import { HomepageBanner } from "../components";
import useProgressiveImage from "../hooks/useProgressiveImage";
import gsap, { Power3 } from "gsap";
import { useDimension } from "../hooks";

export default function HomepageBannerContainer() {
    // [src, { blur }]
    const [src] = useProgressiveImage(
        "https://res.cloudinary.com/theonlybakare/image/upload/w_50/v1611271634/Portfolio/User/4836AF10-1E75-457D-B74A-202D25791ABC_xch5aq.jpg",
        "https://res.cloudinary.com/theonlybakare/image/upload/f_auto/v1611271634/Portfolio/User/4836AF10-1E75-457D-B74A-202D25791ABC_xch5aq.jpg"
    );
    const [width] = useDimension("width");

    const tl = gsap.timeline();
    useEffect(() => {
        //Image Animation
        gsap.to(".homepage_layout_animate", 0, {css: {visibility: "visible"}})
        tl.from(".banner_image_wrapper_animate", {y: 600, duration: 1.2, ease: Power3.easeOut}, "Start")
            .from(".banner_image_animate", {scale: 1.6, duration: 2, ease: Power3.easeOut}, .2)

        // Text Animation
        gsap.from(".homepage_banner_text_animation", {
            duration: 1,
            opacity: 0,
            y: 20,
            ease: Power3.easeOut,
            delay: .5,
            stagger: {
                amount: 1
            },
        }, "Start")
    }, [tl])

    return (
      <HomepageBanner>
          <HomepageBanner.Inner>
              <HomepageBanner.Pane>
                  <HomepageBanner.HeaderText className={"homepage_banner_text_animation"}>Yo!!! 😎</HomepageBanner.HeaderText>
                  <HomepageBanner.Paragraph
                      className={"homepage_banner_text_animation"}
                  >
                      Have you ever seen a website or mobile app that you love, but you don’t know how to go about owning one?
                  </HomepageBanner.Paragraph>
                  <HomepageBanner.Paragraph
                      className={"homepage_banner_text_animation"}
                  >
                      Look further no more, you’re at the perfect place to get all that done. I love what I do and I do what the clients love & work with great clients all over the world to create thoughtful and purposeful websites and applications.
                  </HomepageBanner.Paragraph>
                  <HomepageBanner.Paragraph
                      className={"homepage_banner_text_animation"}
                  >
                      I don't just sell websites, I create websites that SELL.
                  </HomepageBanner.Paragraph>
                  <HomepageBanner.Paragraph
                      className={"homepage_banner_text_animation"}
                  >
                      Ma fe jor pami.
                  </HomepageBanner.Paragraph>
              </HomepageBanner.Pane>
              {width >= 750 && (
                  <HomepageBanner.Box>
                      <HomepageBanner.ImageWrapper className={"banner_image_wrapper_animate"}>
                          <HomepageBanner.Image
                              src={src}
                              className={"banner_image_animate"}
                              alt={"Bakare Oyindamola"}
                              width={"100%"}
                              height={"100%"}
                          />
                      </HomepageBanner.ImageWrapper>
                  </HomepageBanner.Box>
              )}
          </HomepageBanner.Inner>
          <HomepageBanner.ButtonWrapper className={"homepage_banner_text_animation"}>
              <HomepageBanner.Link to={"skills"} smooth={true} duration={50}>
                  Take a tour
                  <div>
                      <span />
                      <span />
                  </div>
              </HomepageBanner.Link>
          </HomepageBanner.ButtonWrapper>
      </HomepageBanner>
    )
}
