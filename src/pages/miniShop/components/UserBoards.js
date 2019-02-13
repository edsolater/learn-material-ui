// 👌
import React from 'react'
import { connect } from 'react-redux'

import UserBoard from './UserBoard'
import { getAllUserBoards } from '../data/selectors'

const UserBoards = ({ userBoards=[] }) => {
  return (
    <>
      {userBoards.map((userBoard, index) => (
        <UserBoard key={String(index)} info={userBoard} />
      ))}
    </>
  )
}
const mapStateToProps = state => {
  return { userBoards: getAllUserBoards(state.userBoards) }
}

export default connect(
  mapStateToProps,
  null
)(UserBoards)
