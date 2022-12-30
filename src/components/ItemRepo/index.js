import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = ()=>{
    
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className='repositorios' href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a className='remover' href={handleRemove} rel="noreferrer" >Remover</a><br />
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;