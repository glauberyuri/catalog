import React from 'react'

const Error = ({error}) => {
  return (
    <div class="bg-red-100 border-l-4 border-red-500 text-white-700 p-6 m-6" role="alert">
        <p class="font-bold">Be Warned</p>
        <p>{error}</p>
    </div>
  )
}

export default Error