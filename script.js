const textarea = document.getElementById("text");
const btnSpeak = document.getElementById("btnSpeak");
const equalizador = document.getElementById("equalizador");

btnSpeak.addEventListener("click", () => {
    const text = textarea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-Br";
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
});
