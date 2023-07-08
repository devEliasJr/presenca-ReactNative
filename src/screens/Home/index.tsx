import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import React, { useState } from "react";

export function Home() {
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handleAdd = () => {
    if (participantes.includes(participantName)) {
      return Alert.alert(
        "Atenção",
        "Este Participante já confirmou presença no evento!"
      );
    }

    setParticipantes((prevState) => [...prevState, participantName]);
    setParticipantName("");
    return Alert.alert(
      "Tudo Certo",
      `${participantName} Confirmou sua presença no evento!`
    );
  };

  const handleRemove = (name: string) => {
    Alert.alert(
      "Remoção de Participante",
      `Deseja realmente remover o participante ${name} da lista de presença no evento!`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipantes((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>07/07/2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onremove={() => {
              handleRemove(item);
            }}
          />
        )}
      />
    </View>
  );
}
