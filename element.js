(function () {
    var d = window,
        e = document,
        f = ".",
        g = "UTF-8",
        h = "complete",
        k = "head",
        l = "link",
        m = "script",
        n = "stylesheet",
        p = "text/css",
        q = "text/javascript";
    Math.random();

    function r(b) {
        var a = e.getElementsByTagName(k)[0];
        a || (a = e.body.parentNode.appendChild(e.createElement(k)));
        a.appendChild(b)
    }

    function _loadJs(b) {
        var a = e.createElement(m);
        a.type = q;
        a.charset = g;
        a.src = b;
        r(a)
    }

    function _loadCss(b) {
        var a = e.createElement(l);
        a.type = p;
        a.rel = n;
        a.charset = g;
        a.href = b;
        r(a)
    }

    function _isNS(b) {
        b = b.split(f);
        for (var a = d, c = 0; c < b.length; ++c)
            if (!(a = a[b[c]])) return !1;
        return !0
    }

    function _setupNS(b) {
        b = b.split(f);
        for (var a = d, c = 0; c < b.length; ++c) a = a[b[c]] || (a[b[c]] = {});
        return a
    }
    d.addEventListener && "undefined" == typeof e.readyState && d.addEventListener("DOMContentLoaded", function () {
        e.readyState = h
    }, !1);
    if (_isNS('google.translate.Element')) {
        return
    }
    var c = _setupNS('google.translate._const');
    c._cl = 'en';
    c._cuc = 'googleTranslateElementInit';
    c._cac = '';
    c._cam = '';
    var h = 'translate.googleapis.com';
    var b = (window.location.protocol == 'https:' ? 'https://' : 'http://') + h;
    c._pah = h;
    c._pbi = b + '/translate_static/img/te_bk.gif';
    c._pci = b + '/translate_static/img/te_ctrl3.gif';
    c._phf = h + '/translate_static/js/element/hrs.swf';
    c._pli = b + '/translate_static/img/loading.gif';
    c._plla = h + '/translate_a/l';
    c._pmi = b + '/translate_static/img/mini_google.png';
    c._ps = b + '/translate_static/css/translateelement.css';
    c._puh = 'translate.google.com';
    _loadCss(c._ps);
    _loadJs(b + '/translate_static/js/element/main.js');
})();