# Text-to-Speech App

![Text-to-Speech App Screenshot](logo.png)

This is a simple Text-to-Speech (TTS) app built using HTML, TailwindCSS and JavaScript and the Web Speech API. The app allows users to input text, and it converts the text into speech, providing an audio output of the input text.

## Features

- Input text and convert it to speech.
- Adjust the speech rate (speed) and pitch.
- Clear the input text and stop the speech.

## Demo

You can try out the live demo of the app  [here](https:text2speech.vercel.app).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
  - [Input Text](#input-text)
  - [Adjusting Speech Parameters](#adjusting-speech-parameters)
  - [Controlling Speech Playback](#controlling-speech-playback)
- [How it Works](#how-it-works)
- [Components](#components)
- [Contributions and Issues](#contributions-and-issues)
- [License](#license)

## Getting Started

### Prerequisites

To run the app locally, you need to have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone this repository:


```bash
git clone https://github.com/Victorola-coder/text2speech.git
```


2. Navigate to the project directory:

```bash
cd text2speech
```


3. Install the dependencies:

```bash
npm install
```


### Running the App

Start the development server:

```bash
npm run dev 
```

Create a new command line and watch the tailwindcss
```bash
npm run watch
```


Open your web browser and visit `http://localhost:5173` to access the app.

## Usage

### Input Text

In the app, you can input any text you want to convert to speech. Type or paste your desired text into the textarea provided.

### Adjusting Speech Parameters

You can control the speech rate (speed) and pitch of the generated speech. Use the input fields provided for rate and pitch adjustments. The default rate and pitch values are 1.

## How it Works

The app is built using React and utilizes the Web Speech API, which is natively supported in modern web browsers. The API provides a `SpeechSynthesis` interface that enables text-to-speech functionality. The `SpeechSynthesisUtterance` object represents a speech request and allows customization of speech parameters, such as rate and pitch.

The main components of the app are:

- **App**: The root component that holds the state for the input text and speech options. It also handles the speech synthesis and controls playback.
- **TextInput**: Renders a textarea where users can input their desired text.
- **SpeechControls**: Provides buttons to control the speech playback, such as play, pause, and stop. It also includes options to adjust the speech rate and pitch.

The app uses event listeners and state updates to handle changes in the input text and speech options. When the user clicks the play button, the app creates a new `SpeechSynthesisUtterance` object with the input text and specified options, and then it calls the `speak()` method on the `SpeechSynthesis` interface to start the speech playback.

## Components

- **App**: The root component that holds the state and logic for the text-to-speech functionality.
- **TextInput**: Renders the input textarea for users to input their desired text.
- **SpeechControls**: Renders buttons and input fields for controlling the speech parameters and playback.

## Contributions and Issues

If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request on [GitHub](https://victorola-coder/text2speech).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

# Author
 follow me [VickyJay] (https://www.twitter.com/heyvickyjay)
