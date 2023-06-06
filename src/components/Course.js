const Course = (props) => {
    return (
      <div>
        {props.name}
        {props.exercises}
        {props.total}
      </div>
    )
  }

export default Course