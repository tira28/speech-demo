/**
 * Created by yudistira on 2/22/17.
 */

require('dotenv').config();

// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Your Google Cloud Platform project ID
const projectId = process.env.PROJECT_ID;
console.log('project-id: ', projectId);



// The name of the audio file to transcribe
const fileName = './resources/audio.raw';


/* Synchronous

// Instantiates a client
const speechClient = Speech({
 projectId: projectId
});

// The audio file's encoding and sample rate
const options = {
    encoding: 'LINEAR16',
    sampleRate: 16000
};

// Detects speech in the audio file synchronous
speechClient.recognize(fileName, options)
    .then((results) => {
        const transcription = results[0];
        console.log(`Transcription: ${transcription}`);
    });

*/


// Asynchronous

let encoding = 'LINEAR16';
let sampleRate = 16000;

const request = {
    encoding: encoding,
    sampleRate: sampleRate
};

let speech = Speech();

speech.startRecognition(fileName,request)
    .then(getResults)
    .then(getTranscription);

function getResults(results){
    let operation = results[0];
    return operation.promise();
};

function getTranscription(transcription){
    console.log('Transcription: ', transcription);
};


