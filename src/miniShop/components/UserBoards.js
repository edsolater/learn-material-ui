// 👌
import React from 'react'
import { connect } from 'react-redux'

import UserBoard from './UserBoard'
import { getAllUserBoards } from '../data/selectors'

const UserBoards = ({ userBoards = [] }) => {
  return (
    <>
      {userBoards.map((userBoard, index) => (
        <UserBoard key={String(index)} self={userBoard} />
      ))}
    </>
  )
}
const mapStateToProps = (state) => ({
  userBoards: getAllUserBoards(state.userBoards)
})

export default connect(mapStateToProps)(UserBoards)
