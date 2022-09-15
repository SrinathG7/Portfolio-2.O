import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Technologies that I have learned from the past 3 years
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Exprienced with <br />
						React.js, React Native
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-end and Databases</ListTitle>
					<ListParagraph>
						MySql <br />
						Node.js
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiZend size="3rem" />
				<ListContainer>
					<ListTitle>Programming Languages</ListTitle>
					<ListParagraph>
						Python <br />
						C/C++ <br />
						Javascript <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
