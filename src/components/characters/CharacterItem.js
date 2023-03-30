import React from 'react'

const CharacterItem = ({ item }) => {
  return <>
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Movie Name:</strong> {item.name}
            </li>
            <li>
              <strong>Actor Real Name:</strong> {item.actor}
            </li>
            <li>
              <strong>Nickname:</strong> {item.alternate_names}
            </li>
            <li>
              <strong>Birthday:</strong> {item.dateOfBirth}
            </li>
            <li>
              <strong>House:</strong> {item.house}
            </li>
          </ul>
        </div>
      </div>
      <h3>{item.name}</h3>
    </div>
  </>
}

export default CharacterItem
