function speak(){
    let value=document.querySelector(".text").value;
    let speak=new SpeechSynthesisUtterance;
    speak.lang='en-US';
    speak.text=value;
    speak.volume=1;
    speak.rate=1;
    speak.pitch=1;
    speechSynthesis.speak(speak);
}
