chrome.storage.sync.get({
	optionExtensionEnabled: true
}, function(options) {
	if (options.optionExtensionEnabled) {
		
		document.getElementsByTagName('body')[0].setAttribute('ng-app', 'app');

		function copyContent(element, newElement) {
			newElement.innerHTML += element.innerHTML;

			if (element.href) newElement.setAttribute('href', element.href);
			if (element.target) newElement.setAttribute('target', element.target);
			if (element.onclick) newElement.setAttribute('onclick', element.onclick);
			if (element.type) newElement.setAttribute('type', element.type);
			
			newElement.classList += ' ' + element.classList;
			newElement.id = element.id;

			if (newElement.innerText === '') {
				newElement.innerText = element.value;
			}
		}


		[].forEach.call(document.querySelectorAll('.btn, .btn-primary, .btn-outline-primary, .btn-secondary, .btn-outline-secondary, .btn-success, .btn-outline-success, .btn-danger, .btn-outline-danger, .btn-warning, .btn-outline-warning, .btn-info, .btn-outline-info, .btn-light, .btn-outline-light, .btn-dark, .btn-outline-dark, .btn-link, .btn-outline-link'), function(button) {
			var md_button = document.createElement('md-button');

			if (button.classList.contains('btn-primary') || button.classList.contains('btn-outline-primary')) {
				md_button.classList.add('md-primary');
			}

			if (button.classList.contains('btn-secondary') || button.classList.contains('btn-outline-secondary')) {
				md_button.classList.add('md-accent');
			}

			if (button.classList.contains('btn-success') || button.classList.contains('btn-outline-success')) {
				var md_button_icon = document.createElement('md-icon');
				md_button_icon.innerText = 'done_all';

				md_button.appendChild(md_button_icon);
			}

			if (button.classList.contains('btn-danger') || button.classList.contains('btn-outline-danger')) {
				md_button.classList.add('md-warn');

				var md_button_icon = document.createElement('md-icon');
				md_button_icon.innerText = 'warning';

				md_button.appendChild(md_button_icon);
			}

			if (button.classList.contains('btn-warning') || button.classList.contains('btn-outline-warning')) {
				md_button.classList.add('md-warn');
			}

			if (button.classList.contains('btn-info') || button.classList.contains('btn-outline-info')) {
				var md_button_icon = document.createElement('md-icon');
				md_button_icon.innerText = 'info';

				md_button.appendChild(md_button_icon);
			}

			if (button.classList.contains('btn-light') || button.classList.contains('btn-outline-light')) {
				md_button.classList.add('md-accent');
				md_button.classList.add('md-hue-1');
			}

			if (button.classList.contains('btn-dark') || button.classList.contains('btn-outline-dark')) {
				md_button.classList.add('md-primary');
				md_button.classList.add('md-hue-2');
			}

			if (button.classList.contains('btn-primary') || button.classList.contains('btn-secondary') || button.classList.contains('btn-success') || button.classList.contains('btn-danger') || button.classList.contains('btn-warning') || button.classList.contains('btn-info') || button.classList.contains('btn-light') || button.classList.contains('btn-dark') || button.classList.contains('btn-link')) {
				md_button.classList.add('md-raised');
			}

			copyContent(button, md_button);

			md_button.classList.remove('btn');

			if (md_button.classList.contains('btn-primary')) md_button.classList.remove('btn-primary');
			if (md_button.classList.contains('btn-secondary')) md_button.classList.remove('btn-secondary');
			if (md_button.classList.contains('btn-success')) md_button.classList.remove('btn-success');
			if (md_button.classList.contains('btn-danger')) md_button.classList.remove('btn-danger');
			if (md_button.classList.contains('btn-warning')) md_button.classList.remove('btn-warning');
			if (md_button.classList.contains('btn-info')) md_button.classList.remove('btn-info');
			if (md_button.classList.contains('btn-light')) md_button.classList.remove('btn-light');
			if (md_button.classList.contains('btn-dark')) md_button.classList.remove('btn-dark');
			if (md_button.classList.contains('btn-link')) md_button.classList.remove('btn-link');

			if (md_button.classList.contains('btn-outline-primary')) md_button.classList.remove('btn-outline-primary');
			if (md_button.classList.contains('btn-outline-secondary')) md_button.classList.remove('btn-outline-secondary');
			if (md_button.classList.contains('btn-outline-success')) md_button.classList.remove('btn-outline-success');
			if (md_button.classList.contains('btn-outline-danger')) md_button.classList.remove('btn-outline-danger');
			if (md_button.classList.contains('btn-outline-warning')) md_button.classList.remove('btn-outline-warning');
			if (md_button.classList.contains('btn-outline-info')) md_button.classList.remove('btn-outline-info');
			if (md_button.classList.contains('btn-outline-light')) md_button.classList.remove('btn-outline-light');
			if (md_button.classList.contains('btn-outline-dark')) md_button.classList.remove('btn-outline-dark');
			if (md_button.classList.contains('btn-outline-link')) md_button.classList.remove('btn-outline-link');

			if (md_button.classList.contains('btn-lg')) md_button.classList.remove('btn-lg');
			if (md_button.classList.contains('btn-sm')) md_button.classList.remove('btn-sm');
			if (button.classList.contains('btn-block')) {
				md_button.classList.add('md-block-button');
				md_button.classList.remove('btn-block');
			}

			if (md_button.childElementCount == 1 && md_button.firstChild.tagName === 'svg') {
				md_button.classList = [];

				md_button.classList.add('md-icon-button');
				var md_button_icon = document.createElement('md-icon');

				var md_button_icon_svg = new XMLSerializer().serializeToString(md_button.firstChild);
				md_button_icon.setAttribute('md-svg-icon', 'data:image/svg+xml,' + md_button_icon_svg);

				md_button.replaceChild(md_button_icon, md_button.firstChild);
			}

			if (button.disabled || button.classList.contains('disabled')) {
				md_button.setAttribute('ng-disabled', 'true');
			}

			if (button.getAttribute('data-toggle')) md_button.setAttribute('data-toggle', button.getAttribute('data-toggle'));
			if (button.getAttribute('aria-pressed')) md_button.setAttribute('aria-pressed', button.getAttribute('aria-pressed'));
			if (button.getAttribute('aria-label')) md_button.setAttribute('aria-label', button.getAttribute('aria-label'));

			button.parentNode.replaceChild(md_button, button);
		});

		[].forEach.call(document.querySelectorAll('.display-1'), function(display) {
			display.classList.add('md-display-4');
			display.classList.remove('display-1');
		});

		[].forEach.call(document.querySelectorAll('.display-2'), function(display) {
			display.classList.add('md-display-3');
			display.classList.remove('display-2');
		});

		[].forEach.call(document.querySelectorAll('.display-3'), function(display) {
			display.classList.add('md-display-2');
			display.classList.remove('display-3');
		});

		[].forEach.call(document.querySelectorAll('.display-4'), function(display) {
			display.classList.add('md-display-1');
			display.classList.remove('display-4');
		});

		[].forEach.call(document.querySelectorAll('small'), function(text) {
			var md_caption = document.createElement('span');
			md_caption.classList.add('md-caption');

			copyContent(text, md_caption);

			text.parentNode.replaceChild(md_caption, text);
		});

		[].forEach.call(document.querySelectorAll('strong'), function(text) {
			var md_body_2 = document.createElement('span');
			md_body_2.classList.add('md-body-2');

			copyContent(text, md_body_2);

			text.parentNode.replaceChild(md_body_2, text);
		});

		angular.module('app', ['ngMaterial']);

	}
});