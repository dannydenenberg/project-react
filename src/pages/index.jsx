import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import resume from '../../public/resume.pdf'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Danny D.
        </BigTitle>
        <Subtitle>I'm creating noice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Simple NN"
            link="https://github.com/dannydenenberg/simple_nn_in_java"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project, a work in progess, is my shot at making a simple neural network and matrix library in Java from scratch.
          </ProjectCard>
          <ProjectCard
            title="Medium Blog"
            link="https://medium.com/@dannydenenberg"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I write about things that interest me.
          </ProjectCard>
          <ProjectCard
            title="Starlite"
            link="https://github.com/dannydenenberg/Starlite"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A google home-type hackable voice and visual command assistand written in python.
          </ProjectCard>
          <ProjectCard
            title="Go Game"
            link="https://github.com/dannydenenberg/go-game"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A space shooters game written using Go and SDL2.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. I will now write my sentences in emoji.
            <br /> 💃🥈🏄🏼‍♀️🤾🏼‍♂️🚁🛩🇺🇸🇮🇱🍄🌚🍁🌳🍭🍼☕️🍡🍣 <br /> Make sense 🤔
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a student from Omaha, NE interested in AI and the arts. <a href={resume}>Here</a> is a copy of my resume.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:dannydenenberg@gmail.com">Hi</a> or find me by following the nearest wire to my router.
            <center><br /> <br /> <strong>+1 650 793 0157</strong>
            <br /> <strong>dannydenenberg@gmail.com</strong></center>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Daniel O. Denenberg.{' '}
          <a href="https://github.com/dannydenenberg/project-react">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
