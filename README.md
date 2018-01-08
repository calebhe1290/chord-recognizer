Chord Recognizer: Instantly listen for and identify chords in your audio.

A Chrome extension designed for any Youtube videos or websites with a primary <html> video element.

While listening to your music, simply click on the extension icon, wait for the popup, then "run chord detector," and the chords will be instantly detected and displayed.

Installation:
    - In Google Chrome, go to chrome://extensions
    - Make sure "Developer mode" is checked
    - Click "Load unpacked extension..." and upload the folder containing these files.
    - Make sure all of these files are included in the upload:
        - background.js
        - DESIGN.md
        - icon.png
        - jquery-3.1.1.min.js
        - manifest.json
        - popup.html
        - popup.js
        - README.md
        - script.js
    - Chord Recognizer extension should appear after upload.
    - Make sure Chord Recognizer is "Enabled"

Demo Usage: Because the current version is still buggy, I recommend following these steps carefully to achieve full utility of the extension.
    - The Chord Recognizer only works for *one* tab while during its function!
    - If at any time the Chord Recognizer doesn't work, simply restart the browser or go to chrome://extensions and use ctrl + r.
    - To demo, choose one music video (preferable on YouTube) that you would like to analyze.
        - A good example: https://www.youtube.com/watch?v=MCW15IvuwvM
    - Note: YouTube videos have the possibility of being unreliable for this extension. I'm hosting a couple of musical performances here for ease of use:
        - https://hecs50.000webhostapp.com/
        - https://hecs501.000webhostapp.com/
    - Once the Chord Recognizer is installed, open up the music video page you'd like, WITHOUT EVER HITTING THE EXTENSION ICON.
    - Once your page is fully loaded and the video is paused, then click the icon to start the process, and then play the video.
    - If you click the icon again, the chords should appear!

Notes/Bugs:
    - Silent moments will produce wonky chords.
    - The chord recognizer will only use #'s for notation, no b's.
    - The extension is script-heavy, so prolonged use could result in noticeable loss in browser speed.

