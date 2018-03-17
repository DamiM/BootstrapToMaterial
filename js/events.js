chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
    chrome.tabs.get(details.tabId, function(tab) {
        chrome.storage.sync.get({
            optionExtensionEnabled: true
        }, function(options) {
            if (options.optionExtensionEnabled) {
                chrome.tabs.insertCSS(null, {
                    file: "material/angular-material.min.css",
                    allFrames: true,
                    runAt: "document_start"
                });
                
                chrome.tabs.insertCSS(null, {
                    file: "material/material-design-icons.css",
                    allFrames: true,
                    runAt: "document_start"
                });

                chrome.tabs.executeScript(null, {
                    file: "material/angular.min.js",
                    allFrames: true,
                    runAt: "document_end"
                });
                
                chrome.tabs.executeScript(null, {
                    file: "material/angular-animate.min.js",
                    allFrames: true,
                    runAt: "document_end"
                });

                chrome.tabs.executeScript(null, {
                    file: "material/angular-aria.min.js",
                    allFrames: true,
                    runAt: "document_end"
                });

                chrome.tabs.executeScript(null, {
                    file: "material/angular-messages.min.js",
                    allFrames: true,
                    runAt: "document_end"
                });
                
                chrome.tabs.executeScript(null, {
                    file: "material/angular-material.min.js",
                    allFrames: true,
                    runAt: "document_end"
                });
                
                chrome.tabs.executeScript(null, {
                    file: "js/inject.js",
                    allFrames: true,
                    runAt: "document_end"
                });
            }
        });
    });
});