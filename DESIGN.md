My project is fundamentally a Chrome extension which borrows from a Chord Detector API.

The Chrome extension is largely defined by the manifest.json file.
    - In "permissions", the extension is allowed to access almost any URL through http:// or https://.
    - The background script, background.js, will "persistent"ly run through the whole time of the extension.
    - In browser action, the default icon and title are set, as well as the html, popup.html, that will show upon clicking the icon.

Within popup.html is a simple HTML file with a paragraph element to hold the chord value. Also within popup.html is popup.js, which runs once the extension icon is clicked.

The three scripts, background.js, popup.js, and script.js communicate with one another through the chrome.runtime.connect() API.
    - background.js waits for popup.js to start. When popup.js is started, current tab id is sent to background.js.
    - Then, background.js injects javascript code (including jQuery and script.js) into the current tab.
    - In script.js, chord information is sent to popup.js every time the chord is analyzed.
    - Upon recieving script.js' chord information, popup.js alters the inner HTML of its "chord" paragraph element to display the chord.

script.js contains the chordal analysis functionality. I borrowed the API developed by Myers Carpenter at https://github.com/myers/chord_detector.

script.js is the product of Myers Carpenter's project to use Emscripten to convert Adam Stark's C++ chord detector into javascript.

While I did contribute some of my own code to script.js (as specified within the commentary of script.js), the Emscripten "wrapper" function is completely borrowed.
