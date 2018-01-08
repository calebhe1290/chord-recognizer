// add connection listener

chrome.runtime.onConnect.addListener(function(port){

	if(port.name == "tab_info"){

		// listen for current tab_info from popup.js

		port.onMessage.addListener(function(msg){

			// set current tab id

			current_id = msg.id;

			// execute jquery on current tab

			chrome.tabs.executeScript(msg.id, {file: "jquery-3.1.1.min.js"});

			// execute chord recognizer script

			chrome.tabs.executeScript(msg.id, {file: "script.js"});

			// message current tab that it is starting, provide its tab id and the extension's id

			var tab_start = chrome.tabs.connect(msg.id, {name: "tab start"});
			tab_start.postMessage({id: msg.id, extension_id: chrome.runtime.id});

		});

	}
});