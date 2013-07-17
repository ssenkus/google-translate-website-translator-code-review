(function () {
    var d = window,
        e = document,
        f = ".",
        h = "complete",
    Math.random();

	
	
	
	function appendElementToHead(element) {
        var a = e.getElementsByTagName("head")[0];
        a || (a = document.body.parentNode.appendChild(document.createElement("head")));
        a.appendChild(element);
    }

    function _loadJs(scriptTagSrc) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.charset = "UTF-8";
        scriptTag.src = scriptTagSrc;
        appendElementToHead(scriptTag);
    }

    function _loadCss(b) {
        var cssLink = document.createElement("link");
        cssLink.type = "text/css";
        cssLink.rel = "stylesheet";
        cssLink.charset = "UTF-8";
        cssLink.href = b;
		appendElementToHead(cssLink);
    }

	
	// Is namespace???
    function _isNameSpace(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c)
            if (!(window = window[b[c]])) return !1;
        return !0;
    }

	
	// Javascript Design Pattern
	//--------------------------
	// - set up a name space by splitting a string into a javascript object
    function _setupNameSpace(b) {
		// get an array from the string...
        b = b.split(".");
		
		// ... then append the objects to the window object
		// 
		// in this code:
		// window.google.translate.Element becomes an object instantiated by an anonymous self-invoking function.
		
		
        for (c = 0; c < b.length; ++c) {
			window = window[b[c]] || (window[b[c]] = {});
		}
		
		// so Google returns this to the global scope
        return window;
    }
	
	
	
	
	// The main program
	
	
    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function () {
        document.readyState = "complete"
    }, !1);
	
	// !1 evaluates to false. 
	// !1    = 2-character string
	// false = 5-character string
	// save bytes
	
    if (_isNameSpace('google.translate.Element')) {
        return;
    }
    var c = _setupNameSpace('google.translate._const');
	// attach properties to 
    c._cl = 'en';
    c._cuc = 'googleTranslateElementInit';
    c._cac = '';
    c._cam = '';
    var h = 'translate.googleapis.com';
	
	// set b equal to the HTTP protocol of the page
	var b = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com';  
	
	
    c._pah = 'translate.googleapis.com';
	
	// ASSETS
	// stored in /assets/ for research purposes only
	//
	// a gradient image
    c._pbi = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/img/te_bk.gif';
	// CSS sprite image
    c._pci = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/img/te_ctrl3.gif';
	
	// some flash
	c._phf = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/js/element/hrs.swf';
    c._pli = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/img/loading.gif';
	
	//****************************************
	// Need to find out why this is included...
	//****************************************
	// Browser gets XML error
	// XML Parsing Error: no element found
	//   Location: https://translate.googleapis.com/translate_a/l
	//   Line Number 1, Column 1:
	//	^
	c._plla =(window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_a/l';
    c._pmi = (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/img/mini_google.png';

    c._puh = 'translate.google.com';
    _loadCss((window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/css/translateelement.css');
	_loadJs((window.location.protocol == 'https:' ? 'https://' : 'http://') + 'translate.googleapis.com/translate_static/js/element/main.js');
})();