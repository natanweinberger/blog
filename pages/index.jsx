import Container from '@/components/container';
import { H1 } from '@/components/heading';
import React from 'react'
import ReactDom from 'react-dom'
import About from './about.mdx'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    ReactDom.render(<About />, document.querySelector("#myDiv"))
  })
  return (
  <Container>
    <div id="myDiv" className="prose">
    </div>
  </Container>
)};

export default Home;
