import './style.css'
import Project from './Project'

export default function App() {

  return (
    <>
      <h1 className='text-center text-2xl bg-gray-400 p-5 my-2'>My Portfolio</h1>
      <h2 className='text-center text-xl underline m-4'>About Me</h2>
      <div className='w-[50%] m-auto p-1'>
        <div>
          My name is Thomas Campbell-Preston and I am a graduate of UEA's computer science course looking for a Software developer role.
        </div>
        <br />
        <div>
          I am a keen programmer with a strong mathematical background and a good grounding in the fundamentals of computer science. My university degree course has given me a solid grounding in a broad range of programming environments and techniques. I enjoy applying my mathematical skills to understanding how things work and my software engineering skills to create solutions to real problems. I want to pursue a career in the exciting and rapidly developing field of software development. This is an ambition I have had since the age of 12 when I started learning Python on a Raspberry Pi.
        </div>
      </div>
      <h2 className='text-center text-xl underline m-4'>Projects</h2>
      <Project
        title='Cellular Automaton Collection'
        image='/3DGameOfLife.png'
        repoTo='https://github.com/TomCP20/Cellular-Automaton-Collection'
        pageTo='https://tomcp20.github.io/Cellular-Automaton-Collection'
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
        image='/RubiksCube.png'
        repoTo='https://github.com/TomCP20/Rubik-Cubes-Simulator'
        pageTo='https://tomcp20.github.io/Rubik-Cube-Page'
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
        image='/AdventOfCode.png'
        repoTo='https://github.com/TomCP20/Advent-Of-Code'
        icons={['Python', 'C++', 'C#', 'Rust', 'F#']}
      >
        This is a repository for my solutions to Advent of Code 2024 and 2025.
        <br />
        I primarily used Python but I also solved some of the problems using other languages.
      </Project>

      <Project
        title='Raycasting'
        image='/Raycasting.png'
        repoTo='https://github.com/TomCP20/Raycasting'
        icons={['C#', 'OpenGL']}
      >
        This is a Ray casting based renderer written in C# using the OpenTK library.
        <br />
        Raycasting, not to be confused with raytracing, is a form of 2.5D image rendering most well known for it's use in The video game Wolfenstein 3D.
      </Project>

      <Project
        title='Turtle Fractal Drawer'
        image='/TurtleFractalDrawer.png'
        repoTo='https://github.com/TomCP20/Turtle-Fractal-Drawer'
        icons={['Python']}
      >
        This is a Python program that uses a Turtle and L-systems  to draw fractals.
        <br />
        L-systems (aka Lindenmayer systems) are a type of fromal grammar, they consist of an axiom and a set of rules.
        For example to draw a Sierpinski triangle you could use the axiom F-G-G and the rule F -{'>'} F-G+F+G-F, G -{'>'}
        in this case applying the rules once would result in F-G+F+G-F-GG-GG. The turtle interprits the reult character by character with an F or G meaning "Move forward one step", + meaning "turn right 120 degrees", and - meaning "turn left 120 degrees".
      </Project>

      <Project
        title='Falling Sand Simulator'
        image='/FallingSandSimulator.png'
        repoTo='https://github.com/TomCP20/Falling-Sand-Simulator'
        icons={['C#', 'OpenGL']}
      >
        This is a Falling Sand Simulation written in C# using the OpenTK library.
        <br />
        The program uses a cellular automaton for the simulation logic.
      </Project>

      <Project
        title='Archimedes Hue Spiral'
        image='/ArchimedesHueSpiral.png'
        repoTo='https://github.com/TomCP20/Archimedes-Hue-Spiral'
        pageTo='https://tomcp20.github.io/Archimedes-Hue-Spiral'
        icons={['React', 'TypeScript', 'CSS', 'Three.js']}
      >
        A shader animation using React Three Fiber.
        <br />
        It combines Archimedes Spiral with a rainbow conic gradient.
      </Project>

      <Project
        title='RayTracing'
        image='/RayTracing.png'
        repoTo='https://github.com/TomCP20/RayTracing'
        icons={['C++']}
      >
        RayTracing is a CPU Ray Tracing Renderer written in C++ based on Ray Tracing in One Weekend.
      </Project>

      <Project
        title='Spirograph'
        image='/Spirograph.png'
        repoTo='https://github.com/TomCP20/Python-Spirograph'
        icons={['Python']}
      >
        A Python program that draws a randomly generated Spirographs via the turtle library.
      </Project>

      <Project
        title='OpenGL 3D Cellular Automata'
        image='/OpenGL3DCellularAutomata.png'
        repoTo='https://github.com/TomCP20/OpenGL-3D-Cellular-Automata'
        icons={['C++', 'OpenGL']}
      >
        A 3D Cellular Automata written in C++ with OpenGL.
      </Project>

      <Project
        title='Mandelbrot Plotting'
        image='/Mandelbrot.png'
        repoTo='https://github.com/TomCP20/Mandelbrot-Plotting'
        pageTo='https://tomcp20.github.io/Mandelbrot-Plotting'
        icons={['React', 'TypeScript', 'Tailwind CSS', 'Three.js']}
      >
        A React Three Fiber app that uses a shader to render the Mandelbrot set.
      </Project>

      <Project
        title='React Spirograph'
        image='/ReactSpirograph.png'
        repoTo='https://github.com/TomCP20/React-Spirograph'
        pageTo='https://tomcp20.github.io/React-Spirograph'
        icons={['React', 'TypeScript', 'Tailwind CSS', 'Three.js']}
      >
        A Spirograph generator made with React.
      </Project>

      <Project
        title='Hangman'
        image='/Hangman.png'
        repoTo='https://github.com/TomCP20/Hangman'
        pageTo='https://tomcp20.github.io/Hangman'
        icons={['React', 'TypeScript', 'Tailwind CSS']}
      >
        Hangman written in React with TypeScipt.
      </Project>

      <Project
        title='Voronoi diagram'
        image='/VoronoiDiagram.png'
        repoTo='https://github.com/TomCP20/Voronoi-diagram'
        icons={['Python']}
      >
        A python program that generates Voronoi diagrams.
      </Project>
    </>
  )
}