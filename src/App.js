import Course from './components/Course'

const Header = (props) => {

  return (
    <div>
      <h1>{props.head}</h1>
    </div>
  )
  }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development ',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React ',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data ',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component ',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux ',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing ',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares ',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const getTotalExercises = () => {
    const totalExercises = courses.reduce((accumulator, course) => {
      return (
        accumulator +
        course.parts.reduce((acc, part) => acc + part.exercises, 0)
      );
    }, 0);
    return (
      <div>
        <h4>Total of {totalExercises} exercises</h4>
      </div>
    );
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header head={course.name} />
          {course.parts.map((part) => (
            <Course
              key={part.id}
              name={part.name}
              exercises={part.exercises}
            />
          ))}
        </div>
      ))}
      {getTotalExercises()}
    </div>
  );
};
export default App;
