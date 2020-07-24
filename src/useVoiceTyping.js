import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

function useVoiceTyping(dispatch) {
  const [voiceCommand, setVoiceCommand] = useState("");

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, [voiceCommand]);

  const commands = [
    {
      command: "* go",
      callback: capital => {
        setVoiceCommand(capital);
        dispatch({ type: "INPUT_SUBMITTED", inputValue: capital });
      }
    },
    {
      command: "reset",
      callback: () => {
        SpeechRecognition.stopListening();
        resetTranscript();
        setVoiceCommand("");
      }
    }
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  return voiceCommand;
}

export default useVoiceTyping;
