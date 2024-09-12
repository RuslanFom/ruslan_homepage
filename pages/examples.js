import {Box, Button, Container} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import React, {useState, useMemo, useCallback} from 'react';
import FsLightbox from 'fslightbox-react';
import {ChevronRightIcon} from '@chakra-ui/icons';


const Code = () => {
    const [toggler, setToggler] = useState(false)

    const sources = useMemo(
        () => [
            '/images/works/examples/api.png',
            '/images/works/examples/redux-store.png',
            '/images/works/examples/auth-reducer.png',
            '/images/works/examples/auth-reducer2.png',
            '/images/works/examples/auth-reducer3.png',
            '/images/works/examples/app.test.png',
            '/images/works/examples/App.png',
            '/images/works/examples/App2.png',
            '/images/works/examples/App3.png',
            '/images/works/examples/app-reducer.png',
            '/images/works/examples/types.png',
            '/images/works/examples/addMessageForm.png',
            '/images/works/examples/authApi.png',
            '/images/works/examples/dialogs.png',
            '/images/works/examples/dialogsContainer.png',
            '/images/works/examples/dialogsReducer1.png',
            '/images/works/examples/dialogsReducer2.png',
            '/images/works/examples/formsControl.png',
            '/images/works/examples/Header.png',
            '/images/works/examples/HeaderContainer.png',
            '/images/works/examples/index.png',
            '/images/works/examples/login.png',
            '/images/works/examples/login2.png',
            '/images/works/examples/mypost.png',
            '/images/works/examples/mypost2.png',
            '/images/works/examples/mypostContainer.png',
            '/images/works/examples/Navbar.png',
            '/images/works/examples/object-helpers.png',
            '/images/works/examples/Paginator1.png',
            '/images/works/examples/post.png',
            '/images/works/examples/profile.png',
            '/images/works/examples/profileApi.png',
            '/images/works/examples/ProfileContainer.png',
            '/images/works/examples/ProfileContainer2.png',
            '/images/works/examples/profileDataForm.png',
            '/images/works/examples/profileInfo.png',
            '/images/works/examples/profileInfo2.png',
            '/images/works/examples/profileReducer.png',
            '/images/works/examples/profileReducer2.png',
            '/images/works/examples/profileReducer3.png',
            '/images/works/examples/profileReducerTest.png',
            '/images/works/examples/profileReducerTest2.png',
            '/images/works/examples/profileStatus.png',
            '/images/works/examples/profileStatus2.png',
            '/images/works/examples/profileStatusWH.png',
            '/images/works/examples/profileStatusWH2.png',
            '/images/works/examples/securityApi.png',
            '/images/works/examples/user.png',
            '/images/works/examples/user2.png',
            '/images/works/examples/UserContainer.png',
            '/images/works/examples/UserContainer2.png',
            '/images/works/examples/UserContainer3.png',
            '/images/works/examples/users.png',
            '/images/works/examples/usersApi.png',
            '/images/works/examples/users-reducer.png',
            '/images/works/examples/users-reducer2.png',
            '/images/works/examples/users-reducer3.png',
            '/images/works/examples/users-reducer4.png',
            '/images/works/examples/users-selectors.png',
            '/images/works/examples/validators.png',
            '/images/works/examples/withAuthRedirect.png'
        ],
        []
    );

    const handleClick = useCallback(() => {
        setToggler(prevState => !prevState);
    }, []);

    return (
        <Layout title='examples'>
            <Container p={20}>
                <Section delay={0.1}>
                    <Box align='center' my={4}>

                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                            onClick={handleClick}
                            aria-expanded={toggler} // ARIA атрибут для улучшения доступности
                        >
                            Code examples
                        </Button>
                        <FsLightbox toggler={toggler} sources={sources} />
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Code