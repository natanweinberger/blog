import Container from '@/components/container';
import { H1 } from '@/components/heading';
import ArrowUpRight from '@/components/icons/arrow-up-right'
import React from 'react'
import ReactDom from 'react-dom'
import { useEffect } from 'react'
import Link from 'next/link'


const ProjectRow = ({title, description, subdescription, repo}) => {
  return (
    <a href={`https://github.com/natanweinberger/${repo}`}>
    <div className="grid grid-cols-[1fr,2fr] -mx-2 px-2 py-2 hover:bg-neutral-100">
      <div className="font-bold">{title}
        <span className="text-gray-500 ml-1">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div>
        <div>{description}</div>
        {subdescription && <div className="text-neutral-500">{subdescription}</div>}
      </div>

    </div>
    </a>
    )
}

const projects = [
  {title: 'MuteLB.tv', description: 'Mute Chromecast when MLB.tv goes to commercial break', subdescription: '1M stars', repo: 'mutelbtv'},
  {title: 'YouTube to MP3', description: 'Rip YouTube audio tracks to MP3 in Docker', repo: 'youtube-to-mp3'},
  {title: 'Split to Tracks', description: 'Split an MP3 into multiple tracks', repo: 'split-to-tracks'},
]

const Projects = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3>Projects</h3>
      {projects.map(project => <ProjectRow {...project} />)}
    </div>
    )
}

const Home = () => {
  return (
  <Container>
    <div id="myDiv" className="prose">
      <Projects />
    </div>
  </Container>
)};

export default Home;
