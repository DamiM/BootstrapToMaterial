var settingsApp = angular.module('settings', ['ngMaterial']);
settingsApp.controller('settings', function($scope) {
	
});

var checkboxValue = {
	get: function(checkbox) {
		if (checkbox.classList.contains('md-checked')) {
			return true;
		} else {
			return false;
		}
	},

	set: function(checkbox, newValue) {
		if (newValue != checkboxValue.get(checkbox)) {
			if (newValue) {
				checkbox.classList.add('md-checked');
			} else {
				checkbox.classList.remove('md-checked');
			}
		}
	}
}


setTimeout(() => {
	var optionExtensionEnabledSwitch = document.getElementById('option-extension-enabled');

	function saveChanges() {
		var optionExtensionEnabledValue = checkboxValue.get(optionExtensionEnabledSwitch);
		
		chrome.storage.sync.set({
			optionExtensionEnabled: optionExtensionEnabledValue
		}, function() {
			// Notify user
		});
	}
	
	 function loadOptions() {
		chrome.storage.sync.get({
			optionExtensionEnabled: true
		}, function(options) {
			checkboxValue.set(optionExtensionEnabledSwitch, options.optionExtensionEnabled);
		});
	}

	optionExtensionEnabledSwitch.addEventListener('click', saveChanges);
	
	document.getElementById('open-advanced-settings').addEventListener('click', function() {
		if (chrome.runtime.openOptionsPage) {
			chrome.runtime.openOptionsPage();
		} else {
			window.open(chrome.runtime.getURL('options.html'));
		}
	});

	loadOptions();
}, 0);