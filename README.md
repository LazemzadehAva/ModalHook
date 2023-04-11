# UseModal Hook

Modal Hook is a customizable, reusable, and performant React Native modal hook with a responsive UI. It allows you to easily create custom modals without the need to pass props, making it easy to implement modals in your React Native projects. The hook is written in React Native, JavaScript, and TypeScript, and it does not require any external dependencies. With Modal Hook, you can show and hide modals with just a few lines of code and customize the modal's appearance and animation to match your app's design. Contributions to the project are welcome!

# Installation

To install UseModal, you can use npm or yarn:

npm install rn-modal-hook

yarn add rn-modal-hook

# Usage

To use UseModal in your React Native project, import the hook and call it in your component:

```
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { UseModal } from 'rn-modal-hook';

const Children = () => {
const { open, close, ContentWrapper, isOpen } = UseModal();

const onOpen = () => {
open();
};

return (
<>
<TouchableOpacity onPress={onOpen} style={styles.btn}>
<Text>Click me</Text>
</TouchableOpacity>
<ContentWrapper>
<View style={{ alignSelf: 'center' }}>
<Text>Hi there!</Text>
<TouchableOpacity style={styles.btn} onPress={close}>
<Text>Close me</Text>
</TouchableOpacity>
</View>
</ContentWrapper>
</>
);
};

export default Children;

const styles = StyleSheet.create({
btn: {
borderRadius: 10,
aspectRatio: 1.9,
borderColor: 'blue',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
width: 80,
marginTop: 100,
},
});
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
