import React from 'react'
import styled from 'styled-components'
import HeartButton from './HeartButton'



const OuterText = styled.h2`
color: Black;
font-weight: 300;
`
const InnerText = styled.p`
color: Black;
font-weight: 300
`
const CardDiv = styled.div`
  background-color: #6FFFB0;
  padding: 2rem;
  border: solid .1rem;
  text-align: center;
  max-width: 500px;
  margin: 2rem;
  border-radius: 25px;
  font-family: "Roboto"
`

export const Image = styled.img`
height:70%
margin: auto 0
`

export const Card = ({ outer, inner, author }) => (
  <CardDiv>
    <OuterText>{outer}</OuterText>
    <InnerText>{inner} <br /> add a link to profile here @{author}</InnerText>
    <HeartButton />
  </CardDiv>
)

export const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span{
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

`
