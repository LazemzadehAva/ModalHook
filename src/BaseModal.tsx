import {
    Animated,
    Dimensions,
    StyleSheet,
    Modal,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  
  export const SCREEN_HEIGHT = Dimensions.get('window').height;
  
  interface PropType {
    close: () => void;
    children: any;
    isOpen: boolean;
    opacity: any;
  }
  
  const BaseModal = ({close, children, isOpen, opacity}: PropType) => {
    const [top, setTop] = useState(200);
  
    const display = opacity.interpolate({
      inputRange: [0.2, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
  
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={isOpen}
        onRequestClose={() => close()}>
        <Animated.View
          style={[
            {
              flex: 1,
              opacity,
            },
          ]}>
          <TouchableOpacity style={styles.background} onPress={() => close()} />
        </Animated.View>
        <Animated.View
          onLayout={e => {
            setTop(e.nativeEvent.layout.height / 2);
          }}
          style={[
            styles.container,
            {top: SCREEN_HEIGHT / 2 - top},
            {
              transform: [
                {
                  scale: display,
                },
              ],
            },
          ]}>
          {children}
        </Animated.View>
      </Modal>
    );
  };
  
  export default BaseModal;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
      zIndex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 25,
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
    },
  });
  