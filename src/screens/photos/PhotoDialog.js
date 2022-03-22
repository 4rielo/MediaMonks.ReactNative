import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

const photoDialog = () => {
  const [visible, setVisible] = useState(true);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={showDialog}>Show Dialog</Button>
      <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Ok" onPress={handleOk} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { photoDialog }