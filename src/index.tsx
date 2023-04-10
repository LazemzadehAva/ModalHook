import * as React from 'react'
import { useRef, useState } from 'react'

import { NativeModules, Animated } from 'react-native'
import BaseModal from './BaseModal'

export const UseModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const opacity = useRef(new Animated.Value(0)).current

  const open = () => {
    setIsOpen(true)
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const close = () => {
    console.log('close')
    Animated.spring(opacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => setIsOpen(false))
  }
  const ContentWrapper = ({ children }: any) => {
    return (
      <BaseModal
        opacity={opacity}
        children={children}
        isOpen={isOpen}
        close={close}
      />
    )
  }

  return { open, close, ContentWrapper, isOpen }
}

export default NativeModules.RNModalHookModule
