import React from 'react'

type GreetProps = {
    name: string;
}

const Greet = (props: GreetProps) => {
  return (
    <div>Welcome {props.name}.</div>
  )
}

export default Greet