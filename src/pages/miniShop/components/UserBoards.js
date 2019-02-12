// 👌
import React from 'react'
import { connect } from 'react-redux'

import UserBoard from './UserBoard'

const UserBoards = ({ userBoards}={userBoards:[]}) => {
  return (
    <>
      {[].map((userBoard, index) => (
        <UserBoard
          key={String(index)}
          info={userBoard}
        />
      ))}
    </>
  )
}
const mapStateToProps = ({ boards: { userBoards } }) => {
  return { userBoards }
}

export default connect(mapStateToProps)(UserBoards)
