/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});


const statusMessages = ["Filtering...", "Blurring...", "Sharpening...", "Contrasting...", "Saturating...", "Desaturating...", "Colorizing...", "Grayscaling...", "Framing...", "Framing...", "Formatting...", "Structuring...", "Organizing...", "Arranging...", "Reordering...", "Rearranging...", "Realigning...", "Aligning...", "Centering...", "Justifying...", "Balancing...", "Weighing...", "Measuring...", "Quantifying...", "Qualifying...", "Verbalizing...", "Visualizing...", "Materializing...", "Dematerializing...", "Abstracting...", "Concretizing...", "Generalizing...", "Specifying...", "Abstracting...", "Concretizing...", "Generalizing...", "Specifying...", "Monitoring...", "Conceptualizing...", "Cultivating...", "Categorizing...", "Collaborating...", "Combining...", "Communicating...", "Compromising...", "Comprehending...", "Concentrating...", "Contemplating...", "Coordinating...", "Creating...", "Cultivating...", "Curating...", "Customizing...", "Deciphering...", "Designing...", "Developing...", "Discovering...", "Distributing...", "Documenting..." "Processing...", "Compiling...", "Analyzing...", "Calibrating...", "Optimizing...", "Uploading...", "Downloading...", "Decrypting...", "Encoding...", "Decoding...", "Synthesizing...", "Simulating...", "Rendering...", "Buffering...", "Connecting...", "Disconnecting...", "Initializing...", "Finalizing...", "Iterating...", "Verifying...", "Validating...", "Compressing...", "Decompressing...", "Expanding...", "Contracting...", "Transforming...", "Translating...", "Transcribing...", "Calibrating...", "Normalizing...", "Integrating...", "Aggregating...", "Disaggregating...", "Learning...", "Adapting...", "Evolving...", "Branching...", "Merging...", "Sorting...", "Searching...", "Identifying...", "Classifying...", "Prioritizing...", "Scheduling...", "Executing...", "Completing...", "Standing By...", "Ready...", "Idle...", "Gathering...", "Disseminating...", "Amplifying...", "Attenuating...", "Balancing...", "Reconfiguring...", "Analyzing...", "Experimenting...", "Hypothesizing...", "Theorizing...", "Simulating...", "Brainstorming...", "Problem-Solving...", "Decision-Making...", "Strategizing...", "Negotiating...", "Mediation...", "Collaborating...", "Communicating...", "Interacting...", "Observing...", "Perceiving...", "Detecting...", "Tracking...", "Monitoring...", "Identifying Patterns...", "Recognizing Anomalies...", "Predicting...", "Forecasting...", "Projecting...", "Estimating...", "Calculating...", "Measuring...", "Evaluating...", "Assessing...", "Judging...", "Inferring...", "Interpreting...", "Reasoning...", "Contemplating...", "Reflecting...", "Dreaming...", "Imaging...", "Visualizing...", "Hoping...", "Yearning...", "Anticipating...", "Expecting...", "Believing...", "Trusting...", "At Peace...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Motivating...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Affirming...", "Aiding...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...","Analyzing...", "Optimizing...", "Refining...", "Enhancing...", "Streamlining...", "Automating...", "Monitoring...", "Evaluating...", "Assessing...", "Diagnosing...", "Troubleshooting...", "Repairing...", "Upgrading...", "Downloading...", "Uploading...", "Sharing...", "Collaborating...", "Brainstorming...", "Analyzing...", "Diagnosing...", "Troubleshooting...", "Optimizing...", "Refining...", "Polishing...", "Enhancing...", "Strengthening...", "Improving...", "Revising...", "Editing...", "Correcting...", "Updating...", "Upgrading...", "Maintaining...", "Monitoring...", "Supervising...", "Overseeing...", "Coordinating...", "Collaborating...", "Communicating...", "Networking...", "Collaborating...", "Supporting...", "Assisting...", "Guiding...", "Mentoring...", "Training...", "Teaching...", "Learning...", "Adapting...", "Evolving...", "Innovating...", "Creating...", "Designing...", "Building...", "Constructing...", "Developing...", "Inventing...", "Discovering...", "Exploring...", "Navigating...", "Guiding...", "Directing...", "Leading...", "Managing...", "Organizing...", "Planning...", "Strategizing...", "Forecasting...", "Predicting...", "Assessing...", "Evaluating...", "Measuring...", "Comparing...", "Contrasting...", "Weighing...", "Balancing...", "Considering...", "Contemplating...", "Reflecting...", "Contemplating...", "Reflecting...", "Integrating...", "Merging...", "Combining...", "Consolidating...", "Synthesizing...", "Synthesizing...", "Synthesizing...", "Assimilating...", "Accumulating...", "Aggregating...", "Disaggregating...", "Dissolving...", "Dissipating...", "Distributing...", "Disseminating...", "Broadcasting...", "Transmitting...", "Receiving...", "Capturing...", "Recording...", "Storing...", "Archiving...", "Preserving...", "Protecting...", "Securing...", "Encrypting...", "Decrypting...", "Encoding...", "Decoding...", "Simulating...", "Rendering...", "Buffering...", "Connecting...", "Disconnecting...", "Initializing...", "Finalizing...", "Iterating...", "Verifying...", "Validating...", "Compressing...", "Decompressing...", "Expanding...", "Contracting...", "Transforming...", "Translating...", "Transcribing...", "Calibrating...", "Normalizing...", "Integrating...", "Aggregating...", "Disaggregating...", "Learning...", "Adapting...", "Evolving...", "Branching...", "Merging...", "Sorting...", "Searching...", "Identifying...", "Classifying...", "Prioritizing...", "Scheduling...", "Executing...", "Completing...", "Standing By...", "Ready...", "Idle...", "Gathering...", "Disseminating...", "Amplifying...", "Attenuating...", "Balancing...", "Reconfiguring...", "Analyzing...", "Experimenting...", "Assimilating...", "Accumulating...", "Aggregating...", "Dissipating...", "Dividing...", "Combining...", "Merging...", "Segmenting...", "Dissecting...", "Crafting...", "Constructing...", "Destructing...", "Deconstructing...", "Reconstructing...", "Reassembling...", "Reorganizing...", "Reordering...", "Realigning...", "Reinforcing...", "Strengthening...", "Weakening...", "Eroding...", "Building...", "Designing...", "Innovating...", "Imagining...", "Creating...", "Inventing...", "Developing...", "Refining...", "Polishing...", "Editing...", "Revising...", "Proofreading...", "Testing...", "Experimenting...", "Validating...", "Verifying...", "Certifying...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Authenticating...", "Running...", "Categorizing...", "Culling...", "Sifting...", "Sifting...", "Sieving...", "Splitting...", "Concatenating...", "Segmenting...", "Cropping...", "Scaling...", "Resizing...", "Rotating...", "Flipping...", "Mirroring...", "Distorting...", "Correcting...", "Enhancing...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Affirming...", "Aiding...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Motivating...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Affirming...", "Aiding...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Motivating...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Affirming...", "Aiding...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Acquiring...", "Assembling...","Waiting...", "Praying...",  "Combining...", "Consolidating...", "Coordinating...", "Creating...", "Cultivating...", "Designing...", "Developing...", "Discovering...", "Editing...", "Enhancing...", "Establishing...", "Facilitating...", "Fostering...", "Generating...", "Growing...", "Harvesting...", "Improving...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Adapting...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Motivating...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Transforming...", "Training...", "Unifying...", "Upgrading...", "Utilizing...", "Validating...", "Verifying...", "Visualizing...", "Working...", "Advancing...", "Affirming...", "Aiding...", "Aligning...", "Amplifying...", "Answering...", "Applying...", "Assessing...", "Assimilating...", "Balancing...", "Brainstorming...", "Building...", "Catalyzing...", "Celebrating...", "Challenging...", "Cultivating...", "Curating...", "Customizing...", "Developing...", "Directing...", "Discovering...", "Diversifying...", "Encouraging...", "Encouraging...", "Enhancing...", "Exploring...", "Facilitating...", "Fostering...", "Gathering...", "Generating...", "Growing...", "Harvesting...", "Including...", "Innovating...", "Inspiring...", "Integrating...", "Investigating...", "Learning...", "Managing...", "Mentoring...", "Motivating...", "Nurturing...", "Organizing...", "Planning...", "Promoting...", "Pursuing...", "Refining...", "Strengthening...", "Supporting...", "Sustaining...", "Teaching...", "Listening..."];

let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
