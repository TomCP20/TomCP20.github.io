import './style.css'
import ThreeDGameOfLife from '/3DGameOfLife.png'
import { Link } from './Link'

function App() {

  return (
    <>
      <h1 className='text-center text-2xl m-5'>Portfolio</h1>
      <h2 className='text-center text-xl m-4'>About Me</h2>
      <div className='w-[50%] m-auto p-1'>
        <p>
          I am a graduate of UEA's computer science course looking for a Software developer role.
        </p>
        <br />
        <p>
          I am a keen programmer with a strong mathematical background and a good grounding in the fundamentals of computer science. My university degree course has given me a solid grounding in a broad range of programming environments and techniques. I enjoy applying my mathematical skills to understanding how things work and my software engineering skills to create solutions to real problems. I want to pursue a career in the exciting and rapidly developing field of software development. This is an ambition I have had since the age of 12 when I started learning Python on a Raspberry Pi.
        </p>
      </div>
      <h2 className='text-center text-xl m-4'>Projects</h2>
      <div className='w-[50%] m-auto p-1'>
        <h3 className='text-center text-lg m-4'>Cellular Automaton Collection</h3>
        <img src={ThreeDGameOfLife} alt='3DGameOfLife' className='size-100 bg-black mx-auto my-8' />
        <div>
          Cellular Automaton Collection is a website that contains various celluar automaton such as:
          <ul className="list-disc list-inside">
            <li>Wolfram code</li>
            <li>Conway's Game of Life</li>
            <li>Maze and Mazectric</li>
            <li>The 3D Game of Life</li>
          </ul>
          <br />
          The Website was created using:
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>Three.js</li>
            <li>React Three Fiber</li>
          </ul>
        </div>
        <div className='text-center m-4'>
          <Link to='https://github.com/TomCP20/Cellular-Automaton-Collection'>Repo</Link> <Link to='https://github.com/TomCP20/Cellular-Automaton-Collection'>Page</Link>
        </div>
      </div>
    </>
  )
}

export default App

