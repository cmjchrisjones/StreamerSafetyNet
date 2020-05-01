# Welcome to StreamerSafetyNet 

![](https://img.shields.io/static/v1?label=STATUS&message=BETA&color=blue&style=for-the-badge)
![Twitch Status](https://img.shields.io/twitch/status/theoriginaljerk?style=for-the-badge)

- [Welcome to StreamerSafetyNet](#welcome-to-streamersafetynet)
  - [What is it](#what-is-it)
  - [Whats it do](#whats-it-do)
  - [RoadMap](#roadmap)
  - [Installation](#installation)
  - [Browser Support](#browser-support)

## What is it

A project designed to help prevent streamers from accidentally [doxxing](https://computer.howstuffworks.com/what-is-doxxing.htm) themselves whilst broadcasting. Will cover things up like email address, subscription IDs, API keys etc... If you have an idea for a site that we're not yet covering, feel free to add an issue to the repo.

This was inspired by [Clarkio's AZ Mask](https://github.com/clarkio/azure-mask) project, but rather than limiting to Azure, making it useful for a whole myriad of websites that a streamer could potentially bring up on stream which might leak Personal Identifiable Information (PII).

For the most part, I'm developing this mostly on live on [twitch](https://twitch.tv/theoriginaljerk), why not head over and follow my channel to see when I go live! Alternatively, when I am live the badge at the top will update!

## Whats it do

So, for sites like eBay and Amazon, they show your username and postcode/zip code on various pages if you're signed in. This will blur that information out, like so

![ebay](./.doc/images/ebay.png)
![Amazon](./.doc/images/amazon.png)

## RoadMap

The aim is to cover a lot more sites, currently in this early beta release (v0.0.1), only ebay.co.uk, ebay.com, amazon.co.uk and amazon.com are supported. You can see more of our plans by looking at the [TODO](TODO.todo) file, if there is something not there that you think should be supported, feel free to open and/or vote for issues.

## Installation

Until the extension becomes available on the browser web stores, in the meantime, you can install the app by enabling developer mode and loading an unpacked extension.

- Firefox: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- Chrome: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted#manifest)
- Edge [https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension#run-your-extension-locally-in-your-browser-while-developing-it-side-loading](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension#run-your-extension-locally-in-your-browser-while-developing-it-side-loading)
  
## Browser Support

|OS|Browser|Status|
|:-:|:-:|:-:|
|Windows|Edge (Chromium) | ✔ |
|Windows| Chrome | ✔ |
|Windows| Firefox | ✔ |
|Mac OS| Safari | ⚠ |
|Mac OS| Firefox | ⚠ |
|Mac OS| Chrome | ⚠ |
|Mac OS| Edge | ⚠ |
|Linux| Firefox | ⚠ |
|Linux| Chrome | ⚠ |
|Linux| Edge | ⚠ |

| | |
|:-|:-|
|✔|Tested successfully|
|⚠|Untested|
|❌|Doesn't work / Not supported|
