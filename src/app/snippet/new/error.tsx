'use client'
import React from 'react'

type ErrorPageProp={
    error:Error
}

const errorPage: React.FC<ErrorPageProp> = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default errorPage