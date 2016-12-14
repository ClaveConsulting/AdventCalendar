((...n) => speechSynthesis.speak(new SpeechSynthesisUtterance("The winner is:" + n[((_ => {
  const r = new Uint8Array(1);
  window.crypto.getRandomValues(r);
  return r[0]/256;
})()*n.length)|0])))(
"Karine",
"Jo Mehmet",
"Morten",
"Henning",
"Per-Kristian",
"Lars-Petter",
"Marius",
"Steinar",
"Andreas");
