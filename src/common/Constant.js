const Constant = {
  storageKeys: {
    token: 'newsta_x_token',
    leftSideCollapsed: 'newsta_x_left_side_collapsed'
  },
  api: {

  }

}

Object.keys(Constant.api).forEach(k => {
  Constant.api[k] = process.env.REACT_APP_API_URL + Constant.api[k]
})

export default Constant
