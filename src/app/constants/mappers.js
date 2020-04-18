export const mapStateToProps = store => {
  const {
    items
  } = store

  return {
    items
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeItems: value => dispatch({ type: 'CHANGE_ITEMS', value })
  }
}
