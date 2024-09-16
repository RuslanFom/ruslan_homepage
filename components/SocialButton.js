import {Button, Link} from "@chakra-ui/react";

const SocialButton = ({href, icon, label}) => (
        <Link href={href} target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={icon} >
                {label}
            </Button>
        </Link>
);

export default SocialButton