import React from 'react';
import styled from 'styled-components';

const Fav = styled.button`
  align-self: center;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 1px;
  width: 20%;
`

function FavIcon({ onClick, bool  }) {
  return (
    <Fav type="button" onClick={ onClick }>
      {!bool ? 
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" width="30" height="30" stroke="red" fill="white" y="0px" viewBox="0 0 122.88 107.41">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>
        </svg>
      :
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" width="30" height="30" stroke="red" fill="red" y="0px" viewBox="0 0 122.88 107.41">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>
        </svg>
      }
    </Fav>
  )
}

export default FavIcon;