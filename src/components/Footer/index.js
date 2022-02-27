import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebSiteRights} from "./FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

export function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About us</FooterLinkTitle>

                          <FooterLink to="/">How it works</FooterLink>
                          <FooterLink to="/">Testimonials</FooterLink>
                          <FooterLink to="/">Careers</FooterLink>
                          <FooterLink to="/">Investors</FooterLink>
                          <FooterLink to="/">Terms of Service</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>Contact Us</FooterLinkTitle>

                          <FooterLink to="/">Contact</FooterLink>
                          <FooterLink to="/">Support</FooterLink>
                          <FooterLink to="/">Destinations</FooterLink>
                          <FooterLink to="/">Sponsorships</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>Videos</FooterLinkTitle>

                          <FooterLink to="/">Submit video</FooterLink>
                          <FooterLink to="/">Ambassadors</FooterLink>
                          <FooterLink to="/">Agency</FooterLink>
                          <FooterLink to="/">Influencer</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>Social Media</FooterLinkTitle>

                          <FooterLink to="/">Instagram</FooterLink>
                          <FooterLink to="/">Facebook</FooterLink>
                          <FooterLink to="/">Youtube</FooterLink>
                          <FooterLink to="/">Twitter</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to="/" onClick={toggleHome}>
                          dolla
                      </SocialLogo>
                      <WebSiteRights>
                          dolla &copy; {new Date().getFullYear()}
                          All rights reserved.
                      </WebSiteRights>
                      <SocialIcons>
                          <SocialIconLink href="/" taget="_blank" aria-label="facebook">
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href="/" taget="_blank" aria-label="instagram">
                              <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink href="/" taget="_blank" aria-label="youtube">
                              <FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink href="/" taget="_blank" aria-label="twitter">
                              <FaTwitter />
                          </SocialIconLink>
                          <SocialIconLink href="/" taget="_blank" aria-label="Linkedin">
                              <FaLinkedin />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    );
}