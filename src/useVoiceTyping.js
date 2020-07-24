import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";

function useVoiceTyping(dispatch, setInputVal, currentCountry) {
  const [voiceCommand, setVoiceCommand] = useState("");

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    voiceCommand !== "" &&
      dispatch({ type: "INPUT_SUBMITTED", inputValue: voiceCommand });
    setTimeout(function() {
      SpeechRecognition.stopListening();
      resetTranscript();
      setVoiceCommand("");
      setInputVal("");
    }, 500);
  }, [voiceCommand, dispatch]);

  const commands = [
    {
      command: "*",
      callback: capital => {
        const similarityBetweenTranscriptdAndCorrect = stringSimilarity.compareTwoStrings(
          capital.toLowerCase(),
          currentCountry.capital.toLowerCase()
        );
        const isVoiceAnswerTrue = similarityBetweenTranscriptdAndCorrect > 0;
        const voiceCommandTosubmit = isVoiceAnswerTrue
          ? currentCountry.capital
          : capital;
        setVoiceCommand(voiceCommandTosubmit);
      }
    }
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  return [voiceCommand, setVoiceCommand];
}

export default useVoiceTyping;
