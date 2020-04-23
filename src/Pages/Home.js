import React from 'react'
import Container from '@material-ui/core/Container';
import logo from '../Images/antidote_logo.png'
import '../CSS/Home.css'

export default function Home() {
    return (
        <div>
            <Container maxWidth="sm">
                <div className='logo-and-header-container'>
                    <img className='logo' src={logo} />
                    <h1>A More in Depth Fitness Experience</h1>
                </div>
            </Container>
        </div>
    )
}
