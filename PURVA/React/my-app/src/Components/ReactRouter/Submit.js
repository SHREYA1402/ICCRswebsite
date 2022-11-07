import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Submit = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>Submitted</div>
    <button onClick={() =>navigate(-1)}>Go back</button>
    </>
  )
}
