chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('linkPlaceholder').innerHTML = tab.url;
});

// Run our kitten generation script as soon as the document's DOM is ready.
/*document.addEventListener('DOMContentLoaded', function () {
  kittenGenerator.requestKittens();
});*/
