import Layout from "../components/layouts/Article"
import Section from "../components/Section"
import { Container, Heading, List, SimpleGrid } from "@chakra-ui/react"
import SkillItem from "../components/SkillItem"
import {useTranslation} from "next-i18next";



const SkillSection = ({ title, items, columns = [3] }) => (
    <Section>
        <Heading as="h3" variant="section-title" p={3}>
            {title}
        </Heading>
        <SimpleGrid columns={columns} gap={3}>
            {items.map((itemGroup, index) => (
                <List key={index}>
                    {itemGroup.map((item) => (
                        <SkillItem key={item}>{item}</SkillItem>
                    ))}
                </List>
            ))}
        </SimpleGrid>
    </Section>
);

const Skills = () => {
    const {t} = useTranslation('common');
    const skills = [
        ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'Three.js', 'React Native', 'Linux'],
        ['React', 'Redux', 'Next.js', 'REST API', 'Chakra UI', 'Ant Design', 'Tailwind CSS'],
        ['Git', 'Node.js', 'MongoDB', 'webpack', 'Jest', 'Material UI', 'Python'],
    ];

    const languages = [
        ['English', 'Русский'],
        ['Italiano', 'Українська'],
    ];

    return (
        <Layout title="Skills">
            <Container>
                <SkillSection title={t('nav.skills')} items={skills} columns={[3]} />
                <SkillSection title={t('languages')} items={languages} columns={[2]} />
            </Container>
        </Layout>
    );
};

export default Skills;
export {getServerSideProps} from '../pages/index'

