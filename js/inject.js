document.getElementsByTagName('body')[0].setAttribute('ng-app', 'app');

function copyContent(element, newElement) {
	newElement.innerHTML += element.innerHTML;

	if (element.href) newElement.setAttribute('href', element.href);
	if (element.onclick) newElement.setAttribute('onclick', element.onclick);
	if (element.type) newElement.setAttribute('type', element.type);

	if (newElement.innerText === '') {
		newElement.innerText = element.value;
	}
}


[].forEach.call(document.querySelectorAll('.btn'), function(button) {
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

	if (md_button.childElementCount == 1 && md_button.firstChild.tagName === 'svg') {
		md_button.classList.add('md-icon-button');
		var md_button_icon = document.createElement('md-icon');

		var md_button_icon_svg = new XMLSerializer().serializeToString(md_button.firstChild);
		md_button_icon.setAttribute('md-svg-icon', 'data:image/svg+xml,' + md_button_icon_svg);

		md_button.replaceChild(md_button_icon, md_button.firstChild);
	}

	md_button.setAttribute('aria-label', 'Button');

	button.parentNode.replaceChild(md_button, button);
});

angular.module('app', ['ngMaterial']);