import React from "react"

const DetailView = ({params}: {params: {id: string}}) => {
  return (
    <div className="">
      <h1>{params.id}</h1>
    </div>
  )
}

export default DetailView
