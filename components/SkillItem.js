import {ListItem, useColorModeValue} from "@chakra-ui/react";

const SkillItem = ({ children }) => (
    <ListItem
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={2}
        mb={3}
        textAlign="center"
    >
        {children}
    </ListItem>
);

export default SkillItem
