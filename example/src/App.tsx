import React, { useEffect } from 'react'
import { View } from 'react-native'
import RNModalHookModule, { UseModal } from 'rn-modal-hook'

const App = () => {
  useEffect(() => {
    console.log(RNModalHookModule)
  })
  const {open} = UseModal()

  return (
    <View></View>
  )
}

export default App
