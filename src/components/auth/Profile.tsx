import React from 'react'

export type ProfileProps = {
    name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile Componen. Name is {name} </div>
}
