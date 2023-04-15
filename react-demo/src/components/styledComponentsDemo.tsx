import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  primary?: boolean
}

export const StyledComponentsDemo: FC = () => {
  return (
    <div>
      <h1>StyledComponentsDemo</h1>
      <Container>
        <Button>我是一个按钮</Button>
        <Button primary>不是一个按钮</Button>
      </Container>
    </div>
  )
}

// Button 组件
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props: ButtonProps) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
// Container 组件
const Container = styled.div`
  text-align: center;
`
