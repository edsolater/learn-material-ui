import React from 'react'
import { connect } from 'react-redux'

import { actionA, actionB } from '../redux/actionCreators'
import UserBoard from './UserBoard'

const UserBoards = ({ currentUserBoard }) => {
  return (
    <>
      {userBoards.map((userBoard, index) => (
        <UserBoard key={String(index)} objectInfo={userBoard} />
      ))}
    </>
  )
}
const mapStateToProps = state => {
  return { currentUserBoard: state.currentUserBoard }
}

export default connect(
  mapStateToProps,
  { actionA, actionB }
)(UserBoards)
