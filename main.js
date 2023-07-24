const synth = window.speechSynthesis

// dom
const form = document.querySelector("form")
const input = document.querySelector('#text-input')
const voiceSelect = document.querySelector('#voice-select')
const rate = document.querySelector('#rate')
const rateValue = document.querySelector('#rate-value')
const pitch = document.querySelector('#pitch')
const pitchValue = document.querySelector('#pitch-value')
const body = document.querySelector('body')

// console.log(form, input, voiceSelect, rate, rateValue)

// voices array init
let voices = []

const getVoices = () => {
    voices = synth.getVoices()
    console.log(voices)

    //create an option for each voiced
    voices.forEach(voice => {
        const option = document.createElement('option')

        //add voice and lang to thr option
        option.textContent = voice.name + '(' + voice.lang + ')'

        //attributes for option
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option)
    })
}

getVoices()
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

// speak let me hear
const speak = () => {
    // speaking?
    if (synth.speaking) {
        alert("Already Speaking")
        return
    }

    // text must be filled

    if (input.value !== "") {
        // Add background animation
        body.style.background = '#141414 url(../src/img/wave.gif)';
        body.style.backgroundRepeat = 'repeat-x';
        body.style.backgroundSize = '100% 100%';

        // get speak text
        const speakText = new SpeechSynthesisUtterance(input.value)
        // done speaking?  
        speakText.onend = e => {
            console.log("done speaking")
            body.style.background = '#141414';
        }

        //error
        speakText.onerror = e => {
            console.log("something is not right")
        }

        // selected voices
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')

        // loop through the voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });
        // pitch and rate
        speakText.pitch = pitch.value;
        speakText.rate = rate.value;

        // speak
        synth.speak(speakText);
    }
}

// events

// submit
form.addEventListener('submit', event => {
    event.preventDefault()
    speak()
    input.blur()
})


// rate value
rate.addEventListener('change', e => {
    rateValue.textContent = rate.value
})

// pitch value
pitch.addEventListener('change', e => {
    pitchValue.textContent = pitch.value
});

// voice select speak
voiceSelect.addEventListener('change', e => speak())
