import Layout from "../components/layouts/article"
import Section from "../components/section"
import {Container, Heading, List, ListItem, SimpleGrid, useColorModeValue} from "@chakra-ui/react"


const Skills = () => (
    <Layout title="skills">
        <Container>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" p={3}>
                    Skills
                </Heading>
                <SimpleGrid columns={[3]} gap={3}>
                    <Section>
                        <List>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                HTML
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                CSS/SASS/SCSS
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Javascript
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                TypeScript
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Three.js
                            </ListItem>
                            <ListItem
                              borderRadius="lg"
                              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                              p={2}
                              mb={3}
                              align="center"
                            >
                                React Native
                            </ListItem>
                        </List>
                    </Section>
                    <Section>
                        <List>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                React
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Redux
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Next.js
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                REST API
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Chakra UI
                            </ListItem>
                            <ListItem
                              borderRadius="lg"
                              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                              p={2}
                              mb={3}
                              align="center"
                            >
                                Python
                            </ListItem>
                        </List>
                    </Section>
                    <Section>
                        <List>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Git
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Node.js
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                MongoDB
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                webpack
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Jest
                            </ListItem>
                            <ListItem
                              borderRadius="lg"
                              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                              p={2}
                              mb={3}
                              align="center"
                            >
                                Linux
                            </ListItem>
                        </List>
                    </Section>
                </SimpleGrid>
                <Heading as="h3" variant="section-title" p={3}>
                    Languages
                </Heading>
                <SimpleGrid columns={[2]} gap={3}>
                    <Section>
                        <List>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                English
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Русский
                            </ListItem>
                        </List>
                    </Section>
                    <Section>
                        <List>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Italiano
                            </ListItem>
                            <ListItem
                                borderRadius="lg"
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2}
                                mb={3}
                                align="center"
                            >
                                Українська
                            </ListItem>
                        </List>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'