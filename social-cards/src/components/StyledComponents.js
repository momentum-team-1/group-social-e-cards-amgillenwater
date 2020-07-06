import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
`
const OuterText = styled.h2`
color: Black;
font-weight: 300;
`
const InnerText = styled.p`
color: Black;
font-weight: 300
`
const CardDiv = styled.div`
  background-color: LightSeaGreen;
  padding: 2rem;
  border: solid .25rem;
  text-align: center;
  max-width: 200px;
  margin: 2rem;
`

export const Image = styled.img`
height:70%
margin: auto 0
`

export const Card = ({ outer, inner, author }) => (
  <CardDiv>
    <OuterText>{outer}</OuterText>
    <InnerText>{inner} <br /> from: {author}</InnerText>

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
