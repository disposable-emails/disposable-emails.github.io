//// Diposable Emails @ disposable-emails.github.io

jQuery(document).ready(function () {
	// Load list
	jQuery.get('list.txt', function(data) {
		$('#list').html(data);
		var lines = data.split(/\n/);
		var texts = []
		for (var i = 0; i < lines.length; i++) {
		  if (/\S/.test(lines[i])) {
			 texts.push($.trim(lines[i]));
		  }
		}
		var list = texts;
		var li = "";
		for (var e = 0; e < list.length; e++) {
		  li = li + '<li class="email-domain">' + list[e] + '</li>';
		}
		$('#domains-list').append($('<ul>' + li + '<span class="not-found">Not found...</span></ul>'));
	});
	// Search in list
	$('input#search-query').on('keyup submit', function () {
		if ($(this).val().trim().length !== 0) {
			$('#domains-list li').show().hide().each(function () {
				if ($(this).is(':contains(' + $('input#search-query').val().toLowerCase() + ')')) {
					$('.not-found').hide();
					$(this).show();
				} else {
					$('.not-found').toggle();
				}
			});
			$('.tooltip-copy').hide();
		} else {
			$('#domains-list li').show().hide().each(function () {
				$(this).show();
				$('.not-found').toggle();
			});
			$('.tooltip-copy').show();
		}
	});
	$.expr[':'].icontains = function (obj, index, meta, stack) {
		return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
	};
});

// Copy List
function copyList() {
	var copyText = document.getElementById("list");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	var tooltip = document.getElementById("copy-tooltip");
	tooltip.innerHTML = "Copied to clipboard";
}

function outCopy() {
	var tooltip = document.getElementById("copy-tooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
