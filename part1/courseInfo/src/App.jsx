
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.partNum} {props.exerciseNum}
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part partNum={props.part1} exerciseNum={props.exercises1}/>
      <Part partNum={props.part2} exerciseNum={props.exercises2}/>
      <Part partNum={props.part3} exerciseNum={props.exercises3}/>
    </div>
  )
}

const Total = (props) => { 
  return (
    <p>
      Number of exercises {props.entry1 + props.entry2 + props.entry3}
    </p>
  )
}

const App = () => {
  const course = "Half Stack Application Development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10 
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1}
        part2={part2} 
        part3={part3} 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total entry1={exercises1} entry2={exercises2} entry3={exercises3}/>
    </div>
  )
}

export default App
