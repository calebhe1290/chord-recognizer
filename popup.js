// prepare to get current tab's id

var id;

chrome.tabs.query({ active: true, currentWindow: true }, function(result){

	// set id to current id

	id = result[0].id;

	// message background.js with current tab's id

	var tab_info = chrome.runtime.connect({name: "tab_info"});
	tab_info.postMessage({id: id});
});

// add listener to hear connected ports

chrome.runtime.onConnect.addListener(function(port) {

	if(port.name =="chord"){

		// if chord message recieved from script.js

		port.onMessage.addListener(function(msg){

			// check if the script's tab matches the current tab

			if(id == msg.id){

				// display chord contents

				document.getElementById("chord").innerHTML = msg.chord;
			}
		});
	}
});


