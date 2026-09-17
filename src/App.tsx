import './style.css'
import ThreeDGameOfLife from '/3DGameOfLife.png'
import RubiksCube from '/RubiksCube.png'
import AdventOfCode from '/AdventOfCode.png'
import Raycasting from '/Raycasting.png'
import Project from './Project'

export default function App() {

  return (
    <>
      <h1 className='text-center text-2xl m-5'>Portfolio</h1>
      <h2 className='text-center text-xl m-4'>About Me</h2>
      <div className='w-[50%] m-auto p-1'>
        <div>
          I am a graduate of UEA's computer science course looking for a Software developer role.
        </div>
        <br />
        <div>
          I am a keen programmer with a strong mathematical background and a good grounding in the fundamentals of computer science. My university degree course has given me a solid grounding in a broad range of programming environments and techniques. I enjoy applying my mathematical skills to understanding how things work and my software engineering skills to create solutions to real problems. I want to pursue a career in the exciting and rapidly developing field of software development. This is an ambition I have had since the age of 12 when I started learning Python on a Raspberry Pi.
        </div>
      </div>
      <h2 className='text-center text-xl m-4'>Projects</h2>
      <Project
        title='Cellular Automaton Collection'
        image={ThreeDGameOfLife}
        repoTo='https://github.com/TomCP20/Cellular-Automaton-Collection'
        pageTo='https://tomcp20.github.io/Cellular-Automaton-Collection/'
        icons={['React', 'TypeScript', 'Tailwind CSS', 'Three.js']}
      >
        Cellular Automaton Collection is a website that contains various celluar automaton such as:
        <ul className='list-disc list-inside'>
          <li>Wolfram code</li>
          <li>Conway's Game of Life</li>
          <li>Maze and Mazectric</li>
          <li>The 3D Game of Life</li>
        </ul>
      </Project>

      <Project
        title='Rubik Cubes Simulator'
        image={RubiksCube}
        repoTo='https://github.com/TomCP20/Rubik-Cubes-Simulator'
        pageTo='https://tomcp20.github.io/Rubik-Cube-Page/'
        icons={['C#', 'Unity']}
      >
        This is a project I created for my dissertation during my 3rd year of the BSc (Hons) Computing Science course at the University of East Anglia. The project has the following features:
        <ul className='list-disc list-inside'>
          <li>Simulating a Rubik's cube.</li>
          <li>A 3D interactive GUI to allow the user to interact with a Simulated cube.</li>
          <li>Implementation of The Layer by Layer method.</li>
          <li>Implementation of The CFOP method.</li>
          <li>The ability to measure the efficiency of the algorithms using various metrics.</li>
          <li>The ability to show the effectiveness of the methods via a histogram.</li>
          <li>To show an animation of a cube being solved using the implemented methods with some information about the method being displayed alongside it.</li>
          <li>To allow the user to input a Rubik's cube state into the software and see it be solved via the animation system.</li>
          <li>The ability to save and load multiple Rubik's cube states.</li>
        </ul>
      </Project>

      <Project
        title='Advent Of Code'
        image={AdventOfCode}
        repoTo='https://github.com/TomCP20/Advent-Of-Code'
        icons={['Python', 'C++', 'C#', 'Rust', 'F#']}
      >
        This is a repository for my solutions to Advent of Code 2024 and 2025.
        <br />
        I primarily used Python but I also solved some of the problems using other languages.
      </Project>

      <Project
        title='Raycasting'
        image={Raycasting}
        repoTo='https://github.com/TomCP20/Raycasting'
        icons={['C#', 'OpenGL']}
      >
        This is a Ray casting based renderer written in C# using the OpenTK library.
        <br />
        Raycasting, not to be confused with raytracing, is a form of 2.5D image rendering most well known for it's use in The video game Wolfenstein 3D.
      </Project>
    </>
  )
}