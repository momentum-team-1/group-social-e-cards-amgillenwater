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
export const Card = ({ outer, inner, author }) => (
  <CardDiv>
    <OuterText>{outer}</OuterText>
    <InnerText>{inner} <br /> from: {author}</InnerText>

  </CardDiv>
)
