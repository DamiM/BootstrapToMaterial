function save(option, value) {
	chrome.storage.sync.set({
		[option]: value
	}, function(options) {
		
	});
}


var settingsApp = angular.module('settings', ['ngMaterial']);
settingsApp.controller('settings', function($scope) {
	$scope.save = function() {
		if ($scope.extension_enabled != null) save('optionExtensionEnabled', $scope.extension_enabled);
		if ($scope.primary_color != null) save('optionPagePrimaryColor', $scope.primary_color);
		if ($scope.secondary_color != null) save('optionPageSecondaryColor', $scope.secondary_color);
	};
	
	$scope.load = function() {
		chrome.storage.sync.get({
			optionExtensionEnabled: true,
			optionPagePrimaryColor: 'indigo',
			optionPageSecondaryColor: 'pink'
		}, function(options) {
			$scope.extension_enabled = options.optionExtensionEnabled;
			$scope.primary_color = options.optionPagePrimaryColor;
			$scope.secondary_color = options.optionPageSecondaryColor;
		});
	};
});


setTimeout(() => {
	document.getElementById('open-advanced-settings').addEventListener('click', function() {
		if (chrome.runtime.openOptionsPage) {
			chrome.runtime.openOptionsPage();
		} else {
			window.open('settings.html');
		}
	});
}, 0);