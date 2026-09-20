import './style.css'
import TableOfContents from './TableOfContents'
import { Header } from './Header';
import { ProjectList } from './ProjectList';

export default function App() {
  return (
    <>
      <h1 className='text-center text-2xl bg-gray-400 p-5 my-2'>My Portfolio</h1>
      <div className='flex'>
        <div className='w-[25%]' />
        <div className='w-[50%]'>
          <Header>About Me</Header>
          <div className='m-auto p-1'>
            My name is Thomas Campbell-Preston and I am a graduate of UEA's computer science course looking for a Software developer role.
            <br /><br />
            I am a keen programmer with a strong mathematical background and a good grounding in the fundamentals of computer science. My university degree course has given me a solid grounding in a broad range of programming environments and techniques. I enjoy applying my mathematical skills to understanding how things work and my software engineering skills to create solutions to real problems. I want to pursue a career in the exciting and rapidly developing field of software development. This is an ambition I have had since the age of 12 when I started learning Python on a Raspberry Pi.
          </div>
          <ProjectList />
        </div>
        <div className='w-[25%]'>
          <TableOfContents />
        </div>
      </div>
    </>
  )
}
