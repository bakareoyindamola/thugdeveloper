import gsap, { Power3 } from "gsap";

const tl = gsap.timeline();

export const contactModalOpenAnimation = () => {
    tl.to(".contact_backdrop_animation", {
        opacity: 1,
        width: "100%",
    })
        .to(".contact_modal_wrapper_animation",
            {
                opacity: 1,
                right: 0,
                duration: .2,
                ease: Power3.easeOut,
            })
        .from(".contact_modal_content_animation", {
            duration: .6,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut,
            stagger: {
                amount: .2
            },
        }, "<.1");
};

export const closeContactModal = async () => {
    tl.to(".contact_modal_wrapper_animation",
        {
            opacity: 0,
            right: "-540px",
            ease: Power3.easeOut,
            duration: .4,
        })
        .to(".contact_backdrop_animation", {
            opacity: 0,
            width: 0,
        }, "<.1")
};

export const closeContactForm = () => {
    tl.to(".contact_form_animation", {
        opacity: 0,
        y: -60,
        duration: .2,
        ease: Power3.easeOut,
    })
        .to(".success_modal_animation", {
            opacity: 1,
            y: 0,
            duration: .2,
            ease: Power3.easeOut,
        })
        .to(".success_modal_text_animation", {
            opacity: 1,
            y: 0,
            duration: .7,
            stagger: {
                amount: .5
            }
        }, "Start")
}

export const openMobileNav = () => {
    tl.to(".menu_animation", {
            pointerEvents: "none",
        })
        .to(".mobile_navigation_animation", {
            pointerEvents: "auto",
            y: 0,
            opacity: 1,
            duration: .1,
        }, "Start")
        .to(".mobile_navigation_content_animation", {
            opacity: 1,
            y: 0,
            stagger: {
                amount: .2
            }
        })
        .to(".body_animation", {
            overflow: "hidden",
        }, "Start")
        .to(".menu_animation", {
            pointerEvents: "auto",
        })
}

export const closeMobileNav = () => {
    tl.to(".menu_animation", {
            pointerEvents: "none",
        })
        .to(".mobile_navigation_animation", {
            y: "-100vh",
            opacity: 0,
            duration: .1,
            pointerEvents: "none"
        }, "Start")
        .to(".mobile_navigation_content_animation", {
            opacity: 0,
            y: 60,
        }, "Start")
        .to(".body_animation", {
            overflow: "auto",
        }, "Start")
        .to(".menu_animation", {
            pointerEvents: "auto",
        })
}

export const openFeedback = () => {
    tl.to(".feedback_wrapper_animation", {
            display: "block",
            opacity: 1,
            y: 0,
            pointerEvents: "all",
            duration: .2,
        })
        .to(".feedback_content_animation", {
            opacity: 1,
            y: 0,
            duration: .3,
            stagger: {
                amount: .3
            }
        }, "Start")
}

export const closeFeedback = () => {
    tl.to(".feedback_wrapper_animation", {
            display: "none",
            opacity: 0,
            y: 60,
            pointerEvents: "none",
            duration: .1,
        })
        .to(".feedback_content_animation", {
            opacity: 0,
            y: 60,
        })
}
