import {Box, Button, Container} from '@chakra-ui/react';
import Layout from '../components/layouts/Article';
import Section from '../components/Section';
import React, {useState, useMemo, useCallback} from 'react';
import FsLightbox from 'fslightbox-react';
import {ChevronRightIcon} from '@chakra-ui/icons';
import {useTranslation} from "next-i18next";


const Code = () => {
    const {t} = useTranslation('common');
    const [toggler, setToggler] = useState(false)

    const sources = useMemo(
        () => [
            '/images/works/examples/api.webp',
            '/images/works/examples/redux-store.webp',
            '/images/works/examples/auth-reducer.webp',
            '/images/works/examples/auth-reducer2.webp',
            '/images/works/examples/auth-reducer3.webp',
            '/images/works/examples/app.test.webp',
            '/images/works/examples/App.webp',
            '/images/works/examples/App2.webp',
            '/images/works/examples/App3.webp',
            '/images/works/examples/app-reducer.webp',
            '/images/works/examples/types.webp',
            '/images/works/examples/addMessageForm.webp',
            '/images/works/examples/authApi.webp',
            '/images/works/examples/dialogs.webp',
            '/images/works/examples/dialogsContainer.webp',
            '/images/works/examples/dialogsReducer1.webp',
            '/images/works/examples/dialogsReducer2.webp',
            '/images/works/examples/formsControl.webp',
            '/images/works/examples/Header.webp',
            '/images/works/examples/HeaderContainer.webp',
            '/images/works/examples/index.webp',
            '/images/works/examples/login.webp',
            '/images/works/examples/login2.webp',
            '/images/works/examples/mypost.webp',
            '/images/works/examples/mypost2.webp',
            '/images/works/examples/mypostContainer.webp',
            '/images/works/examples/Navbar.webp',
            '/images/works/examples/object-helpers.webp',
            '/images/works/examples/Paginator1.webp',
            '/images/works/examples/post.webp',
            '/images/works/examples/profile.webp',
            '/images/works/examples/profileApi.webp',
            '/images/works/examples/ProfileContainer.webp',
            '/images/works/examples/ProfileContainer2.webp',
            '/images/works/examples/profileDataForm.webp',
            '/images/works/examples/profileInfo.webp',
            '/images/works/examples/profileInfo2.webp',
            '/images/works/examples/profileReducer.webp',
            '/images/works/examples/profileReducer2.webp',
            '/images/works/examples/profileReducer3.webp',
            '/images/works/examples/profileReducerTest.webp',
            '/images/works/examples/profileReducerTest2.webp',
            '/images/works/examples/profileStatus.webp',
            '/images/works/examples/profileStatus2.webp',
            '/images/works/examples/profileStatusWH.webp',
            '/images/works/examples/profileStatusWH2.webp',
            '/images/works/examples/securityApi.webp',
            '/images/works/examples/user.webp',
            '/images/works/examples/user2.webp',
            '/images/works/examples/UserContainer.webp',
            '/images/works/examples/UserContainer2.webp',
            '/images/works/examples/UserContainer3.webp',
            '/images/works/examples/users.webp',
            '/images/works/examples/usersApi.webp',
            '/images/works/examples/users-reducer.webp',
            '/images/works/examples/users-reducer2.webp',
            '/images/works/examples/users-reducer3.webp',
            '/images/works/examples/users-reducer4.webp',
            '/images/works/examples/users-selectors.webp',
            '/images/works/examples/validators.webp',
            '/images/works/examples/withAuthRedirect.webp'
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
                            {t('code.examples')}
                        </Button>
                        <FsLightbox toggler={toggler} sources={sources} />
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Code
export {getServerSideProps} from './index'