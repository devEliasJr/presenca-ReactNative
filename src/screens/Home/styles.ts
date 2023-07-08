import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: "row",
    gap: 10,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: '#35353590',
    color:"#fff",
    flex: 1,
    borderRadius: 4,
    padding: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 14
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  }
});


