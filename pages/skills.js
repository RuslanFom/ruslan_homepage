import Layout from "../components/layouts/article"
import Section from "../components/section"
import { Container, Heading, List, SimpleGrid } from "@chakra-ui/react"
import SkillItem from "../components/skillItem"

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
    const skills = [
        ['HTML', 'CSS/SASS/SCSS', 'JavaScript', 'TypeScript', 'Three.js', 'React Native', 'Linux'],
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
                <SkillSection title="Skills" items={skills} columns={[3]} />
                <SkillSection title="Languages" items={languages} columns={[2]} />
            </Container>
        </Layout>
    );
};

export default Skills;
export { getServerSideProps } from '../components/chakra';

