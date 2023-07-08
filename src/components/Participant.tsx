import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./style"


export function Participant({name, onremove}:string | any):any {
  return(
    <View style={styles.form}>
    <Text style={styles.person}>{name}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={onremove}>
        X
      </Text >
    </TouchableOpacity>
  </View>
  )
}