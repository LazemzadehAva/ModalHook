# UseModal Hook

Modal Hook is a customizable, reusable, and performant React Native modal hook with a responsive UI. It allows you to easily create custom modals without the need to pass props, making it easy to implement modals in your React Native projects. The hook is written in React Native, JavaScript, and TypeScript, and it does not require any external dependencies. With Modal Hook, you can show and hide modals with just a few lines of code and customize the modal's appearance and animation to match your app's design. Contributions to the project are welcome!

# Installation

To install UseModal, you can use npm or yarn:

npm install rn-use-modal-hook

yarn add rn-use-modal-hook

# Usage

To use UseModal in your React Native project, import the hook and call it in your component:

```
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { UseModal } from 'rn-use-modal-hook';

const App = () => {
  const {open, isOpen, ContentWrapper, close} = UseModal();
  console.log({isOpen});

  const onOpen = () => {
    console.log('open', {isOpen});
    open();
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            onOpen();
          }}
          style={styles.btn}>
          <Text>hi</Text>
        </TouchableOpacity>
      </View>
      <ContentWrapper>
        <View style={{alignSelf: 'center'}}>
          <Text>hi</Text>
          <TouchableOpacity style={styles.btn} onPress={close}>
            <Text>close me</Text>
          </TouchableOpacity>
        </View>
      </ContentWrapper>
    </>
  );
};

export default App;

```
The UseModal hook returns the following properties:

- `open`: A function that shows the modal.
- `close`: A function that hides the modal.
- `ContentWrapper`: A wrapper component that should be used to wrap the content that should be displayed inside the modal.
- `isOpen`: A boolean that indicates whether the modal is currently open or closed.
  Use the open function to show the modal and the close function to hide it. The content that should be displayed inside the modal should be wrapped inside the ContentWrapper component.

# Contributing

Contributions are welcome! To contribute to Modal Hook, please follow these steps:

Fork the repository and create a new branch
Make your changes and commit them with a descriptive message
Push your changes to your forked repository
Open a pull request with a detailed explanation of your changes

# Contact

If you have any questions or feedback, please feel free to contact me at avalazemzadeh@gmail.com
