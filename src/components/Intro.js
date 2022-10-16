import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/promise.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 62vw;
height:auto;
display: flex;

@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    height:2 0%;
    top: 40%;
    transform: translate(-50%, -20%);
}

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
width: 100%;

@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    height:100%;
}

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    filter: brightness(60%);
    transform: translate(-50%,0%);
    width: 100%;
    height: 100%;
}


`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 1rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    font-size:calc(0.7em + 1.5vw);
}

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
    @media only screen and (max-width: 700px) {
        /* For everything bigger than 700px */
        font-size:11px;
    }

}




`


const Intro = () => {
    
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Promise.</h3>
                    <h4>~iCode~ ~iDev~ ~iDesign~</h4>
                    <h6>I make Games , write smart contracts and I build Softwares.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    
                     {/**<img className="pic" src={Me} alt="Profile Pic" />**/}
                    
                    
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
