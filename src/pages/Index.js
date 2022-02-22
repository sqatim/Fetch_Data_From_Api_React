import React from 'react'
import Cards from '../components/containers/Cards'
import { IndexStyle } from './Index.style'

export default function Index({type}) {
  return (
      <IndexStyle>
          <div className="type">{type}</div>
          <Cards />
      </IndexStyle>

  )
}
