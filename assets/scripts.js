// Diposable Emails

jQuery.get('list.txt', function(data) {
	$('#list').html(data);
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
