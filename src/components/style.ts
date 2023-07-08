import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#21212190',
    marginBottom: 10,
  },
  person: {
    color: "#fff",
    flex: 1,
    textAlignVertical: "center",
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    padding: 20
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: 'red',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  }
})
