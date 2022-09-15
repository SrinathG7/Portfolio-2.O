import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SectionDivider } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<SectionDivider />
			<br />
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call </LinkTitle>
					<LinkItem href="tel:8925252857">8925252857</LinkItem>
				</LinkColumn>
			</LinkList>

			<LinkList>
				<LinkColumn>
					<LinkTitle>EMail </LinkTitle>
					<LinkItem href="mailto:srinath.g2019@vitstudent.ac.in">
						srinath.g2019@vitstudent.ac.in
					</LinkItem>
				</LinkColumn>
			</LinkList>

			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Thank you! :)</Slogan>
				</CompanyContainer>
				<SocialIcons href="https://github.com/SrinathG7">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://www.linkedin.com/in/srinath-gunasekaran/">
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://www.instagram.com/srinath_g7/">
					<AiFillInstagram size="3rem" />
				</SocialIcons>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
