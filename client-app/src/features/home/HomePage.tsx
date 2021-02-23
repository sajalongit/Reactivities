import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Image, Button } from 'semantic-ui-react'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container'
import Header from 'semantic-ui-react/dist/commonjs/elements/Header'

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities'></Header>
                <Button as={Link} to='/activities' size='huge' inverted>Take me to Activities!</Button>
            </Container>
        </Segment>
    )
}