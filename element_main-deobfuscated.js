(function () {
    var aa = Infinity,
        ca = navigator,
        e = Error,
        da = Boolean,
        ea = parseInt,
        fa = parseFloat,
        ga = String,
        k = window,
        ia = Number,
        ja = Function,
        ka = Object,
        m = document,
        la = decodeURIComponent,
        ma = isNaN,
        na = RegExp,
        oa = Array,
        n = Math;

    function pa(a, b) {
        return a.onload = b
    }

    function qa(a, b) {
        return a.stop = b
    }

    function ra(a, b) {
        return a.altKey = b
    }

    function sa(a, b) {
        return a.isCollapsed = b
    }

    function ta(a, b) {
        return a.onreadystatechange = b
    }

    function ua(a, b) {
        return a.length = b
    }

    function va(a, b) {
        return a.title = b
    }

    function wa(a, b) {
        return a.position = b
    }

    function xa(a, b) {
        return a.className = b
    }

    function ya(a, b) {
        return a.width = b
    }

    function za(a, b) {
        return a.collapse = b
    }

    function Aa(a, b) {
        return a.pixelWidth = b
    }

    function Ba(a, b) {
        return a.cancel = b
    }

    function Ca(a, b) {
        return a.round = b
    }

    function Da(a, b) {
        return a.ceil = b
    }

    function Ea(a, b) {
        return a.floor = b
    }

    function Fa(a, b) {
        return a.innerHTML = b
    }

    function Ga(a, b) {
        return a.onerror = b
    }

    function Ha(a, b) {
        return a.value = b
    }

    function Ia(a, b) {
        return a.disabled = b
    }

    function Ja(a, b) {
        return a.currentTarget = b
    }

    function Ka(a, b) {
        return a.left = b
    }

    function La(a, b) {
        return a.target = b
    }

    function Ma(a, b) {
        return a.screenX = b
    }

    function Na(a, b) {
        return a.screenY = b
    }

    function Oa(a, b) {
        return a.pixelHeight = b
    }

    function Pa(a, b) {
        return a.send = b
    }

    function Qa(a, b) {
        return a.coords = b
    }

    function Ra(a, b) {
        return a.keyCode = b
    }

    function Sa(a, b) {
        return a.select = b
    }

    function Ta(a, b) {
        return a.isAvailable = b
    }

    function Ua(a, b) {
        return a.bottom = b
    }

    function Va(a, b) {
        return a.href = b
    }

    function Wa(a, b) {
        return a.restore = b
    }

    function Xa(a, b) {
        return a.detach = b
    }

    function Ya(a, b) {
        return a.type = b
    }

    function Za(a, b) {
        return a.contains = b
    }

    function $a(a, b) {
        return a.tabIndex = b
    }

    function ab(a, b) {
        return a.translate = b
    }

    function bb(a, b) {
        return a.clear = b
    }

    function cb(a, b) {
        return a.display = b
    }

    function db(a, b) {
        return a.isSupported = b
    }

    function eb(a, b) {
        return a.height = b
    }

    function fb(a, b) {
        return a.clientX = b
    }

    function gb(a, b) {
        return a.clientY = b
    }

    function hb(a, b) {
        return a.right = b
    }

    function ib(a, b) {
        return a.visibility = b
    }
    var p = "appendChild",
        jb = "scrollTop",
        kb = "previousSibling",
        r = "push",
        lb = "stop",
        mb = "toString",
        nb = "altKey",
        ob = "setStart",
        pb = "innerText",
        qb = "isCollapsed",
        s = "length",
        rb = "propertyIsEnumerable",
        sb = "getBoundingClientRect",
        tb = "plugins",
        ub = "removeAllRanges",
        vb = "open",
        u = "prototype",
        wb = "test",
        xb = "shift",
        yb = "sourceIndex",
        zb = "className",
        Ab = "relatedTarget",
        Bb = "exec",
        Cb = "clearTimeout",
        Db = "size",
        w = "width",
        Eb = "text",
        Fb = "collapse",
        Gb = "clientWidth",
        Hb = "cancel",
        Ib = "round",
        Jb = "abort",
        Kb = "slice",
        Lb = "setTimeout",
        Mb = "replace",
        x = "nodeType",
        Nb = "document",
        Ob = "ceil",
        Pb = "ctrlKey",
        Qb = "split",
        Rb = "floor",
        Sb = "getElementById",
        Tb = "offsetWidth",
        Ub = "concat",
        Vb = "charAt",
        Wb = "createTextNode",
        Xb = "stopPropagation",
        Yb = "stack",
        Zb = "value",
        $b = "location",
        ac = "preventDefault",
        bc = "item",
        cc = "insertBefore",
        y = "indexOf",
        dc = "metaKey",
        ec = "offsetLeft",
        fc = "message",
        gc = "hasOwnProperty",
        hc = "getComputedStyle",
        ic = "compareDocumentPosition",
        jc = "setEnd",
        A = "dispatchEvent",
        C = "style",
        kc = "hostname",
        lc = "close",
        mc = "nodeName",
        nc = "currentTarget",
        D = "body",
        oc = "createRange",
        E = "left",
        pc = "write",
        qc = "ownerDocument",
        rc = "removeChild",
        sc = "parent",
        tc = "getElementsByClassName",
        F = "target",
        uc = "screenX",
        vc = "screenY",
        wc = "lastChild",
        G = "call",
        xc = "match",
        yc = "getBoxObjectFor",
        zc = "send",
        Ac = "readyState",
        Bc = "charCode",
        Cc = "remove",
        Dc = "start",
        Ec = "random",
        Fc = "focus",
        Gc = "querySelector",
        Hc = "getAttribute",
        Ic = "createElement",
        Jc = "coords",
        Kc = "protocol",
        Lc = "scrollHeight",
        H = "keyCode",
        Mc = "querySelectorAll",
        I = "firstChild",
        Nc = "select",
        Oc = "forEach",
        Pc = "isAvailable",
        Rc = "clientHeight",
        Sc = "scrollLeft",
        Tc =
            "charCodeAt",
        Uc = "clientLeft",
        Vc = "compatMode",
        J = "bottom",
        Wc = "setAttribute",
        Xc = "currentStyle",
        Yc = "href",
        Zc = "substring",
        $c = "clientTop",
        ad = "play",
        bd = "handleEvent",
        cd = "cloneNode",
        dd = "restore",
        ed = "parentElement",
        fd = "detach",
        gd = "type",
        hd = "contains",
        id = "apply",
        jd = "translate",
        kd = "parentWindow",
        ld = "clear",
        od = "childNodes",
        pd = "shiftKey",
        qd = "tagName",
        rd = "setPosition",
        sd = "defaultView",
        td = "bind",
        ud = "removeAttribute",
        vd = "rangeCount",
        wd = "name",
        K = "parentNode",
        xd = "display",
        yd = "isSupported",
        zd = "nextSibling",
        Ad = "offsetTop",
        Bd = "contentWindow",
        L = "height",
        Cd = "toUpperCase",
        Dd = "splice",
        Ed = "getTime",
        Fd = "offsetHeight",
        M = "join",
        Gd = "unshift",
        Hd = "setActive",
        Id = "getElementsByTagName",
        Jd = "nodeValue",
        Kd = "toLowerCase",
        Ld = "clientX",
        Md = "clientY",
        Nd = "documentElement",
        Od = "substr",
        Pd = "right",
        N = "",
        Qd = "\x00",
        Rd = "\n",
        O = " ",
        Sd = " [",
        Td = " goog-te-ftab-float",
        Ud = " name=",
        Vd = ' name="',
        Wd = " skiptranslate",
        Xd = ' type="',
        Yd = '"',
        Zd = '" />',
        $d = '" ></input><input class="activity-cancel" type="button" value="',
        ae = '" alt="',
        be = '" alt="Google ',
        ce = '" class="goog-close-link" href="javascript:void(0)" title="',
        de = '" class="goog-te-banner-content"></span></td></tr></table></td><td>',
        ee = '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>',
        fe = '" class="goog-te-menu"></div></body>',
        ge = '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>',
        he = '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="',
        ie = '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="',
        je = '" method="',
        ke = '" name="',
        le = '" scroll="no" style="overflow:hidden" dir="',
        me = '" style="background-image:url(',
        ne = '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">',
        oe = '" style="display:none" valign=middle><td><span class="goog-te-banner-content">',
        pe = '" style="display:none" valign=middle><td><span id="',
        qe = '" style="display:none"><td><span class="goog-te-banner-content">',
        re = '" width="15" height="15" alt="',
        se = '" width="20" height="20" /></div>',
        te = '" width="37px" height="13px" style="padding-right: 3px">',
        ue = '" width="400" height="500" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="',
        ve = '" width="400" height="500" type="application/x-shockwave-flash" data="',
        we = '" width="9" height="15" title="',
        xe = '"/><param name="allowScriptAccess" value="always"/></object>',
        ye = '">',
        ze = '"></a></td>',
        Ae = '"></b>%)</span>&nbsp;<img src="',
        Be = '"></button></div></div></td></tr><tr id="',
        Ce = '"></div>',
        De = '"></head>',
        Ee = '"></head><body class="goog-te-banner" scroll="no" border=0 dir="',
        Fe = '"></head><body class="goog-te-ftab ',
        Ge = '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="',
        He = '"></iframe>',
        Ie = '"></input></div><div class="parameters"><input type="hidden" name="gtrans" /><input type="hidden" name="utrans" /><input type="hidden" name="hl" /><input type="hidden" name="text" /><input type="hidden" name="langpair" /><input type="hidden" name="oe" value="UTF-8" />',
        Je = '"></span>',
        Ke = '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        Le = '"><a id="',
        Me = '"><b>',
        Ne = '"><div class="form-buttons" style="text-align:',
        Oe = '"><div style="padding: 8px;"><div><div class="logo"><img src="',
        Pe = '"><img src="',
        Qe = '"><input class="activity-submit" type="button" value="',
        Re = '"><param name="allowScriptAccess" value="always"/></object>',
        Se = '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="http://translate.google.com" class="goog-logo-link" target="_blank"><img src="',
        Te = "#",
        Ue = "#000",
        Ve = "#9b9b9b",
        We = "#E6ECF9",
        Xe = "#d5d5d5",
        Ye = "#googtrans/",
        Ze = "%",
        $e = "&",
        af = "&amp;",
        bf = "&gt;",
        cf = "&lt;",
        df = "&nbsp;&nbsp;",
        ef = '&nbsp;<span dir="ltr">(<b id="',
        ff = "&quot;",
        gf = "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');",
        hf = "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');",
        jf = "',sizingMethod='scale');\"></span>",
        kf = "';parent['",
        lf = "']();\x3c/script>\"))",
        mf = "(",
        nf = "(\\d*)(\\D*)",
        of = "(^",
        pf = ")",
        qf = ")\n",
        rf = ") repeat-x 0 -39px",
        sf = ")([a-z])",
        tf = ");background-position:-14px 0px;border:none",
        uf = ');background-position:-28px 0px"></a></td></tr></table></body>',
        vf = ');background-position:-56px 0px;margin:0 4px"></td>',
        wf = ');background-position:-65px 0px"><span>',
        xf = "*",
        yf = "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');",
        zf = "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');",
        Af = ",",
        Bf = ", ",
        Cf = "-",
        Df = "---",
        Ef = "-10000px",
        Ff = "-100px",
        Gf = "-10px",
        Hf = "-14px 0px",
        If = "-65px 0px",
        Jf = "-9999px",
        Kf = "-> ",
        Lf = "-active",
        Mf = "-checkbox",
        Nf = "-checked",
        Of = "-content",
        Pf = "-disabled",
        Qf = "-document.getElementById('",
        Rf = "-focused",
        Sf = "-highlight",
        Tf = "-horizontal",
        Uf = "-hover",
        Vf = "-moz",
        Wf = "-moz-transform",
        Xf = "-ms",
        Yf = "-ms-transform",
        Zf = "-o",
        $f = "-o-transform",
        ag = "-open",
        bg = "-rtl",
        cg = "-selected",
        dg = "-transition:opacity 1s linear;",
        eg = "-vertical",
        fg = "-webkit",
        gg = "-webkit-transform",
        hg = ".",
        ig = "...",
        jg = ".goog-te-ftab-float {z-index:9999999; overflow:visible; position:fixed; _position:absolute;",
        kg = "/",
        lg = "//",
        mg = "//translate.google.com/manager/website/",
        ng = "/gen204?",
        og = "/translate_a/t",
        pg = "0",
        qg = "0 -39px",
        rg = "0px",
        sg = "0px 0px",
        tg = "1",
        ug = "1.0",
        vg = "1.9",
        wg = "10",
        xg = "10.0",
        yg = "100%",
        zg = "100px",
        Ag = "10px",
        Bg = "1px",
        Cg = "1px solid #000",
        Dg = "40px",
        Eg = "525",
        Fg = "528",
        Gg = "7",
        Hg = "7.0",
        Ig = "8",
        Jg = "9.0",
        Kg = ":",
        Lg = ": ",
        Mg = ";domain=",
        Ng = ";path=/",
        Og = "<",
        Pg = "</a>",
        Qg = "</a></span>",
        Rg = "</b>",
        Sg = '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        Tg = '</button></div></div></td></tr><tr id="',
        Ug = '</div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">',
        Vg = "</div></form></div>",
        Wg = '</div><div class="activity-form-container"></div></div>',
        Xg = '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;" /><div class="activity-root"></div></div></div><div class="status-message"></div></div>',
        Yg = "</span></a></body>",
        Zg = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        $g = "<a i=",
        ah = "<a i=0>",
        bh = "<b>",
        ch = "<body><iframe id=",
        dh = "<br>",
        eh = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="',
        fh = '<div id="',
        gh = '<div id="goog-gt-tt" class="skiptranslate" dir="',
        hh = '<div style="',
        ih = '<div><span class="alt-translated-text"></span><div class="alt-helper-text">',
        jh = '<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>',
        kh = '<head><base href="',
        lh = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        mh = "<i>",
        nh = '<iframe id="',
        oh = '<iframe style="width:100%;height:1.1em;float:right;" id="signin_status" border="0" frameBorder="0" src="',
        ph = '<iframe style="width:348px;height:1.1em;float:right;" id="signin_status" border="0" frameBorder="0" src="',
        qh = '<img src="',
        rh = '<input type="hidden" name="',
        sh = '<object id="',
        th = '<span id="',
        uh = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='",
        vh = '<span style="white-space:nowrap" ><a class="goog-logo-link" href="http://translate.google.com" target="_blank">',
        wh = '<td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="',
        xh = '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="',
        yh = '<td width=1><img src="',
        zh = "=",
        Ah = "=none;expires=",
        Bh = ">",
        Ch = "></iframe>",
        Dh = "?",
        Eh = "@",
        Fh = "A",
        Gh = "APPLET",
        Hh = "AREA",
        Ih = "Aborting",
        Jh = "B",
        Kh = "BASE",
        Lh = "BODY",
        Mh = "BR",
        Nh =
            "BUTTON",
        Oh = "BackCompat",
        Ph = "COL",
        Qh = "COMMAND",
        Rh = "CSS1Compat",
        Sh = "Component already rendered",
        Th = "Content-Type",
        Uh = "DIV",
        Vh = "DXImageTransform.Microsoft.DropShadow",
        Wh = "EMBED",
        Xh = "End",
        Yh = "EndToEnd",
        Zh = "Error opening Xhr: ",
        $h = "Error while loading script ",
        ai = "FRAME",
        bi = "GET",
        ci = "Google Website Translator",
        di = "HEAD",
        ei = "HR",
        fi = "HTML",
        gi = "I",
        hi = "IFRAME",
        ii = "IMG",
        ji = "INPUT",
        ki = "ISINDEX",
        li = "Jsloader error (code #",
        mi = "KEYGEN",
        ni = "LINK",
        oi = "Local request error detected and ignored",
        pi = "META",
        qi = "MSXML2.XMLHTTP",
        ri = "MSXML2.XMLHTTP.3.0",
        si = "MSXML2.XMLHTTP.6.0",
        ti = "Microsoft.XMLHTTP",
        ui = "Moz",
        vi = "MozOpacity",
        wi = "NOFRAMES",
        xi = "NOSCRIPT",
        yi = "Not available",
        zi = "O",
        Ai = "OBJECT",
        Bi = "Opening Xhr",
        Ci = "PARAM",
        Di = "POST",
        Ei = "PRE",
        Fi = "Request complete",
        Gi = "SCRIPT",
        Hi = "SOURCE",
        Ii = "SPAN",
        Ji = "STYLE",
        Ki = "Send error: ",
        Li = "Sending request",
        Mi = "Start",
        Ni = "StartToEnd",
        Oi = "StartToStart",
        Pi = "Style",
        Qi = "TEXTAREA",
        Ri = "TITLE",
        Si = "TR",
        Ti = "TRACK",
        Ui = "Timed out after ",
        Vi = "Timeout reached for loading script ",
        Wi = "To",
        Xi = "Translate",
        Yi = "UL",
        Zi = "UTF-8",
        $i = "Unable to set parent component",
        aj = "Unknown error",
        bj = "WBR",
        cj = "Webkit",
        dj = "Width",
        ej = "Will abort after ",
        fj = "[...circular reference...]",
        gj = "[...long stack...]",
        hj = "[Anonymous]",
        ij = '[[[[["',
        jj = "[end]",
        kj = "[exception trying to get caller]\n",
        lj = "[fn]",
        mj = "[goog.net.IframeIo] Unable to send, already active.",
        nj = "[msg_undefined]",
        oj = "[object Array]",
        pj = "[object Function]",
        qj = "[object Window]",
        rj = "\\$1",
        sj = "\\s",
        tj = "\\x08",
        uj = "]",
        vj = "]+",
        wj = "^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)",
        xj = "_",
        yj = "_blank",
        zj = "_callbacks_.",
        Aj = "_fhr_callback_.",
        Bj = "_inner",
        Cj = "a",
        Dj = "abort",
        Ej = "about:blank",
        Fj = "absolute",
        Gj = "accumulate",
        Hj = "action",
        Ij = "activate",
        Jj = "activedescendant",
        Kj = "activity-cancel",
        Lj = "activity-form",
        Mj = "activity-form-container",
        Nj = "activity-link",
        Oj = "activity-links",
        Pj = "activity-root",
        Qj = "activity-submit",
        Rj = "add",
        Sj = "add?u=",
        Tj = "additions text",
        Uj = "afterhide",
        Vj = "aftershow",
        Wj = "alpha(opacity=",
        Xj = "alt",
        Yj = "alt-edited",
        Zj = "alt-input",
        ak = "alt-input-submit",
        bk = "alt-input-text",
        ck = "alt-low-conf",
        dk = "alt-menu",
        ek = "alt-translated-text",
        fk = "alternate",
        gk = "althighlight",
        hk = "altmenuhl",
        ik = "altmenuhold",
        jk = "altshow",
        kk = "amp",
        lk = "animate",
        mk = "application/x-www-form-urlencoded",
        nk = "application/x-www-form-urlencoded;charset=utf-8",
        ok = "aria-",
        pk = "aria-activedescendant",
        qk = "array",
        rk = "atn",
        sk = "auto",
        tk = "autoDisplay",
        uk = "background-image:url(",
        vk = "background: url(",
        wk = "backgroundColor",
        xk = "backgroundImage",
        yk = "backgroundPosition",
        zk = "backgroundRepeat",
        Ak = "beforedrag",
        Bk = "beforedragend",
        Ck = "beforedragmove",
        Dk = "beforedragstart",
        Ek = "beforehide",
        Fk = "beforeshow",
        Gk = "beforeunload",
        Hk = "begin",
        Ik = "block",
        Jk = "blur",
        Kk = "body",
        Lk = "boolean",
        Mk = "border-box",
        Nk = "border-left:1px solid #bbb",
        Ok = "borderBottom",
        Pk = "borderBottomWidth",
        Qk = "borderLeft",
        Rk = "borderLeftWidth",
        Sk = "borderRight",
        Tk = "borderRightWidth",
        Uk = "borderTop",
        Vk = "borderTopWidth",
        Wk = "bottom:",
        Xk = "bottom:auto;",
        Yk = "button",
        Zk = "cB",
        $k = "call",
        al = "callback",
        bl = "cancel",
        cl = "cancelled",
        dl = "cb",
        el = "change",
        fl = "character",
        gl = "check",
        hl = "checked",
        il = "chg_src_lang",
        jl = "chg_tgt_lang",
        kl = "class",
        ll = "click",
        ml = "client",
        nl = "client=",
        ol = "client=t&source=baf",
        pl = "clk_cancel",
        ql = "clk_close",
        rl = "clk_confirm",
        sl = "clk_no_ap",
        tl = "clk_no_ap_site",
        ul = "clk_restore",
        vl = "clk_trans",
        wl = "clkundo",
        xl = "close",
        yl = "closure_frame",
        zl = "color",
        Al = "color:#9b9b9b",
        Bl = "complete",
        Cl = "confirm",
        Dl = "container",
        El = "content-box",
        Fl = "content-type",
        Gl = "contextmenu",
        Hl = "continue",
        Il = "contribute",
        Jl = "contribute-original-text",
        Kl = "data-",
        Ll = "dblclick",
        Ml = "deactivate",
        Nl = "destroy",
        Ol = "direction",
        Pl = "disable",
        Ql = "disabled",
        Rl = "display",
        Sl = "div",
        Tl = "document",
        Ul = "documentUri",
        Vl = "drag",
        Wl = "dragend",
        Xl = "dragmove",
        Yl = "dragstart",
        Zl = "e",
        $l = "earlycancel",
        am = "en",
        bm = "enable",
        cm = "end",
        dm = "enter",
        em = "error",
        fm = "errorContent",
        gm = "errorSection",
        hm = "expanded",
        im = "f",
        jm = "failed",
        km = "false",
        lm = "file",
        mm = "file:",
        nm = "filter",
        om = "finish",
        pm = "finishSection",
        qm = "finishSourceLang",
        rm = "finishTargetLang",
        sm = "fixed",
        tm = "floatContainer",
        um = "focus",
        vm = "font",
        wm = "for",
        xm = "form",
        ym = "form-message",
        zm =
            "function",
        Am = "g",
        Bm = "gaTrack",
        Cm = "goog-float-bottom",
        Dm = "goog-float-top",
        Em = "goog-menu",
        Fm = "goog-menuheader",
        Gm = "goog-menuitem-accel",
        Hm = "goog-menuitem-mnemonic-separator",
        Im = "goog-menuseparator",
        Jm = "goog-option",
        Km = "goog-option-selected",
        Lm = "goog-te-button",
        Mm = "goog-te-combo",
        Nm = "goog-te-gadget",
        Om = "goog-te-gadget-icon",
        Pm = "goog-te-gadget-simple",
        Qm = "goog-te-menu-frame skiptranslate",
        Rm = "goog-te-menu-value",
        Sm = "goog-te-menu2",
        Tm = "goog-te-menu2-colpad",
        Um = "goog-te-menu2-item",
        Vm = "goog-te-menu2-item-selected",
        Wm = "goog-te-menu2-separator",
        Xm = "goog-text-highlight",
        Ym = "googtrans",
        Zm = "googtransopt",
        $m = "gt",
        an = "gt-hl-layer",
        bn = "gt-hl-text",
        cn = "gt-trans-draggable",
        dn = "gt-trans-highlight-l",
        en = "gt-trans-highlight-r",
        fn = "gtrans",
        gn = "haspopup",
        hn = "head",
        jn = "height",
        kn = "hidden",
        ln = "hide",
        mn = "highlight",
        nn = "hl",
        on = "horizontal",
        pn = "hps",
        qn = "html",
        rn = "http:",
        sn = "http://",
        tn = "http://translate.google.com",
        un = "https:",
        vn = "https://",
        wn = "i",
        xn = "iframe",
        yn = "img",
        zn = "index",
        An = "indicator",
        Bn = "inline",
        Cn = "inline-block",
        Dn =
            "innerText",
        En = "input",
        Fn = "javascript:",
        Gn = 'javascript:""',
        Hn = "javascript:void(0)",
        In = "javascript:void(document.write(\"<script>document.domain='",
        Jn = "jsonParseErr",
        Kn = "key",
        Ln = "keydown",
        Mn = "keypress",
        Nn = "keyup",
        On = "km",
        Pn = "l",
        Qn = "layout",
        Rn = "learn_more",
        Sn = "leave",
        Tn = "left",
        Un = "left ",
        Vn = "left:",
        Wn = "left:auto;",
        Xn = "lo",
        Yn = "load",
        Zn = "loaded",
        $n = "losecapture",
        ao = "lt",
        bo = "ltr",
        co = "manage_site",
        eo = "menuBody",
        fo = "menuitemcheckbox",
        go = "minHeight",
        ho = "mousedown",
        io = "mousemove",
        jo = "mouseout",
        ko = "mouseover",
        lo = "mouseup",
        mo = "move_offscreen",
        no = "ms",
        oo = "ms if incomplete, xhr2 ",
        po = "ms, aborting",
        qo = "multilanguagePage",
        ro = "native code",
        so = "noAutoPopup",
        to = "nodeName",
        uo = "nodeType",
        vo = "nodeValue",
        wo = "none",
        xo = "notranslate",
        yo = "nowrap",
        zo = "null",
        Ao = "number",
        Bo = "o",
        Co = "object",
        Do = "off",
        Eo = "on",
        Fo = "opacity",
        Go = "open",
        Ho = "ophrase",
        Io = "option",
        Jo = "options",
        Ko = "original-text",
        Lo = "osentence",
        Mo = "overflow",
        No = "overflowX",
        Oo = "paddingBottom",
        Po = "paddingLeft",
        Qo = "paddingRight",
        Ro = "paddingTop",
        So = "phrsclk",
        To = "pixelHeight",
        Uo = "pixelLeft",
        Vo = "pixelWidth",
        Wo = "play",
        Xo = "position",
        Yo = "position:absolute;display:none;",
        Zo = "position:absolute;top:-1000px;height:1px;width:1px",
        $o = "pre",
        ap = "pressed",
        bp = "progressSection",
        cp = "progressValue",
        dp = "promptSection",
        ep = "promptSourceLang",
        fp = "promptTargetLang",
        gp = "px",
        hp = "px; _left:expression((",
        ip = "px; _left:expression((-",
        jp = "px; _top:expression((",
        kp = "px; _top:expression((-",
        lp = "q",
        mp = "quot",
        np = "ready",
        op = "readystatechange",
        pp = "relative",
        qp = "remove",
        rp = "repeat-x",
        sp = "reset",
        tp = "resize",
        up = "restore",
        vp = "resume",
        wp = "right",
        xp = "right:",
        yp = "right:auto;",
        zp = "role",
        Ap = "round-trip-content",
        Bp = "round-trip-popup",
        Cp = "rtl",
        Dp = "s",
        Ep = "s ",
        Fp = "sc",
        Gp = "scid",
        Hp = "scroll",
        Ip = "select",
        Jp = "selected",
        Kp = "separator",
        Lp = "show",
        Mp = "skiptranslate",
        Np = "sl",
        Op = "smtalt",
        Pp = "sourceIndex",
        Qp = "span",
        Rp = "splice",
        Sp = "start",
        Tp = "started-activity-container",
        Up = "static",
        Vp = "status-message",
        Wp = "stop",
        Xp = "string",
        Yp = "style",
        Zp = "submit",
        $p = "submitted",
        aq = "success",
        bq = "successful",
        cq = "suggestions?site=",
        dq = "tabIndex",
        eq = "tabindex",
        fq = "table",
        gq = "targetLanguage",
        hq = "tbody",
        iq = "td",
        jq = "te_afas",
        kq = "te_afau",
        lq = "te_afbr",
        mq = "te_ap",
        nq = "te_apc",
        oq = "te_ape",
        pq = "te_apr",
        qq = "te_apt",
        rq = "te_au",
        sq = "text",
        tq = "text/javascript",
        uq = "textContent",
        vq = "textarea",
        wq = "th",
        xq = "timeout",
        yq = "title",
        zq = "tl",
        Aq = "toggle_display",
        Bq = "top",
        Cq = "top:",
        Dq = "top:auto;",
        Eq = "touchcancel",
        Fq = "touchend",
        Gq = "touchmove",
        Hq = "touchstart",
        Iq = "tr",
        Jq = "trans",
        Kq = "trans-edit",
        Lq = "trans-target",
        Mq = "trans-target-currdragitem",
        Nq = "trans-target-dragger trans-target-dragger-fontsize",
        Oq = "trans-target-empty",
        Pq = "trans-target-highlight",
        Qq = "trans.common.PhraseAltTranslation",
        Rq = "transform",
        Sq = "transition",
        Tq = 'transition:opacity 1s linear;">',
        Uq = "translate",
        Vq = "translated-ltr",
        Wq = "translated-rtl",
        Xq = "true",
        Yq = "tsentence",
        Zq = "turn_off_site",
        $q = "u",
        ar = "uncheck",
        br = "unhighlight",
        cr = "unload",
        dr = "unselect",
        er = "unselectable",
        fr = "updating",
        gr = "url(",
        hr = "useSecureConnection",
        ir = "usealt",
        jr = "usedrag",
        kr = "utf-8",
        lr = "utrans",
        mr = "v",
        nr = "value",
        or = "var ",
        pr = "vertical",
        qr = "vertical-align: middle",
        rr = "visible",
        sr = "webapp",
        tr = "white-space:nowrap",
        ur = "width",
        vr = "window.event",
        wr = "window.location.href",
        xr = "withCredentials",
        yr = "zSoyz",
        zr = "zh",
        Ar = "zh-CN",
        Br = "zh-TW",
        Cr = "zh-cn",
        Dr = "zh-tw",
        Er = "zx",
        Fr = "|",
        Gr = "|[",
        Hr = "}",
        Ir = "\u00a0",
        Jr = "\u00a0\u25bc",
        Kr = "\u200b",
        Lr = "\u203a",
        Mr = "\u25bc";

    function Nr() {
        return function () {}
    }

    function Or(a) {
        return function (b) {
            this[a] = b
        }
    }

    function Pr(a) {
        return function () {
            return this[a]
        }
    }

    function Qr(a) {
        return function () {
            return a
        }
    }
    var P, Rr = Rr || {}, Q = this;

    function Sr(a) {
        a = a[Qb](hg);
        for (var b = Q, c; c = a[xb]();)
            if (null != b[c]) b = b[c];
            else return null;
        return b
    }

    function Tr() {}

    function Ur(a) {
        a.qa = function () {
            return a.ii ? a.ii : a.ii = new a
        }
    }

    function Vr(a) {
        var b = typeof a;
        if (b == Co)
            if (a) {
                if (a instanceof oa) return qk;
                if (a instanceof ka) return b;
                var c = ka[u][mb][G](a);
                if (c == qj) return Co;
                if (c == oj || typeof a[s] == Ao && "undefined" != typeof a[Dd] && "undefined" != typeof a[rb] && !a[rb](Rp)) return qk;
                if (c == pj || "undefined" != typeof a[G] && "undefined" != typeof a[rb] && !a[rb]($k)) return zm
            } else return zo;
            else if (b == zm && "undefined" == typeof a[G]) return Co;
        return b
    }

    function Wr(a) {
        return void 0 !== a
    }

    function Xr(a) {
        return Vr(a) == qk
    }

    function Yr(a) {
        var b = Vr(a);
        return b == qk || b == Co && typeof a[s] == Ao
    }

    function Zr(a) {
        return typeof a == Xp
    }

    function $r(a) {
        return typeof a == Ao
    }

    function as(a) {
        return Vr(a) == zm
    }

    function bs(a) {
        var b = typeof a;
        return b == Co && null != a || b == zm
    }

    function cs(a) {
        return a[ds] || (a[ds] = ++es)
    }
    var ds = "closure_uid_" + (1E9 * n[Ec]() >>> 0),
        es = 0;

    function fs(a, b, c) {
        return a[G][id](a[td], arguments)
    }

    function gs(a, b, c) {
        if (!a) throw e();
        if (2 < arguments[s]) {
            var d = oa[u][Kb][G](arguments, 2);
            return function () {
                var c = oa[u][Kb][G](arguments);
                oa[u][Gd][id](c, d);
                return a[id](b, c)
            }
        }
        return function () {
            return a[id](b, arguments)
        }
    }

    function R(a, b, c) {
        R = ja[u][td] && -1 != ja[u][td][mb]()[y](ro) ? fs : gs;
        return R[id](null, arguments)
    }

    function hs(a, b) {
        var c = oa[u][Kb][G](arguments, 1);
        return function () {
            var b = oa[u][Kb][G](arguments);
            b[Gd][id](b, c);
            return a[id](this, b)
        }
    }
    var is = Date.now || function () {
            return +new Date
        };

    function js(a, b) {
        var c = a[Qb](hg),
            d = Q;
        c[0] in d || !d.execScript || d.execScript(or + c[0]);
        for (var f; c[s] && (f = c[xb]());) c[s] || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b
    }

    function S(a, b) {
        function c() {}
        c.prototype = b[u];
        a.k = b[u];
        a.prototype = new c;
        a[u].constructor = a
    }
    ja[u].bind = ja[u][td] || function (a, b) {
        if (1 < arguments[s]) {
            var c = oa[u][Kb][G](arguments, 1);
            c[Gd](this, a);
            return R[id](null, c)
        }
        return R(this, a)
    };

    function ks() {
        this.a = []
    }
    ks[u].add = function (a) {
        this.a[r](a)
    };

    function ls() {
        this.a = []
    }
    S(ls, ks);
    Ur(ls);
    ls[u].add = function (a) {
        if (a)
            for (; a(););
    };

    function ms(a) {
        this.a = [];
        this.b = 0.5;
        ns(this, a);
        this.d = 0;
        this.c = !0;
        this.e = R(this.f, this)
    }
    S(ms, ks);

    function ns(a, b) {
        1 < b ? a.b = 1 : 0.001 > b ? a.b = 0.001 : b && (a.b = b)
    }
    ms[u].add = function (a) {
        ms.k.add[G](this, a);
        this.c && os(this)
    };

    function os(a) {
        a.c = !1;
        var b = n.min(a.d, 5E3);
        k[Lb](a.e, b)
    }
    ms[u].f = function () {
        var a = (new Date)[Ed](),
            b = 0;
        do {
            var c;
            this.a[s] && (this.a[0] && this.a[0]() || this.a[xb]());
            c = !! this.a[s];
            var d = 95 * this.b + 5,
                b = (new Date)[Ed]() - a
        } while (c && b < d);
        this.d = n[Ob](b * (1 / this.b - 1)) + 1;
        c ? os(this) : this.c = !0
    };

    function ps() {
        return nj
    }
    var qs = {};
    (function () {
        function a(a) {
            return function () {
                return a
            }
        }
        qs = {
            Og: a(0),
            Yg: a(1),
            Zg: a(2),
            Qk: a(3),
            Xi: a(4),
            Ji: a(5),
            lk: a(6),
            Ej: a(7),
            Ug: a(8),
            Yi: a(9),
            Yk: a(10),
            Zi: a(11),
            Wi: a(12),
            Wk: a(13),
            Ig: a(14),
            Vk: a(15),
            Ni: a(16),
            $k: a(17),
            Wj: a(18),
            Mk: a(19),
            Pk: a(20),
            jj: a(21),
            uk: a(22),
            Uk: a(23),
            Tk: a(24),
            Rk: a(25),
            Zk: a(26),
            Xk: a(27),
            Sk: a(28),
            nk: a(29),
            ok: a(30),
            Lk: a(32),
            Kk: a(33),
            Vi: a(34),
            Ok: a(35),
            Nk: a(36),
            Ui: a(37),
            Tg: a(38),
            mk: a(39),
            Xg: a(40),
            vk: a(41)
        }
    })();
    var rs = k.google && google[jd] && google[jd]._const;
    rs || (rs = {
        _cac: N,
        _cam: N,
        _cl: N,
        _cuc: N,
        _cnad: !1,
        _cnal: {},
        _pah: N,
        _pbi: N,
        _pci: N,
        _phf: N,
        _pli: N,
        _plla: N,
        _pmi: N,
        _ps: N,
        _pta: N,
        _puh: N
    });
    var ss = k.google && k.google[jd] && k.google[jd].v || N,
        ts = rs._cl || am,
        us = rs._cnal || {}, vs = "lib" == rs._cam ? 1 : 0,
        ws;
    t: {
        for (var xs = m[Id]("meta"), ys = 0; ys < xs[s]; ++ys)
            if ("google-translate-customization" == xs[ys][wd]) {
                ws = xs[ys].content;
                break t
            }
        ws = N
    }
    var zs = ws,
        As = (rs._cac || "te") + (1 == vs ? "_lib" : N),
        Bs = rs._pah || N,
        Cs = rs._pbi || N,
        Ds = rs._pci || N,
        Es = rs._phf || N,
        Fs = rs._plla || N,
        Gs = rs._pli || N,
        Hs = rs._ps || N,
        Is = rs._puh || N,
        Js = k[$b][Kc] == un ? vn : sn,
        Ks = Js + "www.google.com/images/cleardot.gif",
        Ls = Js + "www.google.com/intl/" + ts[Mb](xj, Cf) + "/images/logos/translate_logo_sm.png",
        Ms = Js + "www.google.com/images/icons/product/translate-32.png",
        Ns = Js + "www.google.com/images/logos/google_logo_41.png",
        Os = sn + Is + "/translate_suggestion",
        Ps = "http://www.google.com/support/translate" + (ts ==
            am ? N : "#googtrans/en/" + ts),
        Qs = Js + "translate.google.com/manager/website/static_files/html/reload.html",
        Rs = lg + Is + "/translate_a/tminfo",
        Ss = lg + Is + "/translate/tminfo";

    function Ts(a) {
        e.a ? e.a(this, Ts) : this.stack = e()[Yb] || N;
        a && (this.message = ga(a))
    }
    S(Ts, e);
    Ts[u].name = "CustomError";

    function Us(a) {
        return a[Mb](/\xa0|[ \t]+/g, O)
    }

    function Vs(a) {
        return a[Mb](/[\t\r\n ]+/g, O)[Mb](/^[\t\r\n ]+|[\t\r\n ]+$/g, N)
    }

    function Ws(a) {
        return a[Mb](/^[\s\xa0]+|[\s\xa0]+$/g, N)
    }

    function Xs(a) {
        return a[Mb](/[\s\xa0]+$/, N)
    }

    function Ys(a) {
        return encodeURIComponent(ga(a))
    }

    function Zs(a) {
        return la(a[Mb](/\+/g, O))
    }

    function $s(a) {
        if (!at[wb](a)) return a; - 1 != a[y]($e) && (a = a[Mb](bt, af)); - 1 != a[y](Og) && (a = a[Mb](ct, cf)); - 1 != a[y](Bh) && (a = a[Mb](dt, bf)); - 1 != a[y](Yd) && (a = a[Mb](et, ff));
        return a
    }
    var bt = /&/g,
        ct = /</g,
        dt = />/g,
        et = /\"/g,
        at = /[&<>\"]/;

    function ft(a) {
        return -1 != a[y]($e) ? Tl in Q ? gt(a) : ht(a) : a
    }

    function gt(a) {
        var b = {
            "&amp;": $e,
            "&lt;": Og,
            "&gt;": Bh,
            "&quot;": Yd
        }, c = m[Ic](Sl);
        return a[Mb](it, function (a, f) {
            var g = b[a];
            if (g) return g;
            if (f[Vb](0) == Te) {
                var h = ia(pg + f[Od](1));
                ma(h) || (g = ga.fromCharCode(h))
            }
            g || (Fa(c, a + O), g = c[I][Jd][Kb](0, -1));
            return b[a] = g
        })
    }

    function ht(a) {
        return a[Mb](/&([^;]+);/g, function (a, c) {
            switch (c) {
            case kk:
                return $e;
            case ao:
                return Og;
            case $m:
                return Bh;
            case mp:
                return Yd;
            default:
                if (c[Vb](0) == Te) {
                    var d = ia(pg + c[Od](1));
                    if (!ma(d)) return ga.fromCharCode(d)
                }
                return a
            }
        })
    }
    var it = /&([^;\s<&]+);?/g;

    function jt(a, b) {
        for (var c = 0, d = Ws(ga(a))[Qb](hg), f = Ws(ga(b))[Qb](hg), g = n.max(d[s], f[s]), h = 0; 0 == c && h < g; h++) {
            var l = d[h] || N,
                q = f[h] || N,
                v = na(nf, Am),
                t = na(nf, Am);
            do {
                var B = v[Bb](l) || [N, N, N],
                    z = t[Bb](q) || [N, N, N];
                if (0 == B[0][s] && 0 == z[0][s]) break;
                var c = 0 == B[1][s] ? 0 : ea(B[1], 10),
                    V = 0 == z[1][s] ? 0 : ea(z[1], 10),
                    c = (c < V ? -1 : c > V ? 1 : 0) || ((0 == B[2][s]) < (0 == z[2][s]) ? -1 : (0 == B[2][s]) > (0 == z[2][s]) ? 1 : 0) || (B[2] < z[2] ? -1 : B[2] > z[2] ? 1 : 0)
            } while (0 == c)
        }
        return c
    }
    n[Ec]();

    function kt(a) {
        return ga(a)[Mb](/\-([a-z])/g, function (a, c) {
            return c[Cd]()
        })
    }

    function lt(a) {
        var b = Zr(void 0) ? "undefined" [Mb](/([-()\[\]{}+?*.$\^|,:#<!\\])/g, rj)[Mb](/\x08/g, tj) : sj;
        return a[Mb](na(of + (b ? Gr + b + vj : N) + sf, Am), function (a, b, f) {
            return b + f[Cd]()
        })
    };

    function mt(a) {
        return a[a[s] - 1]
    }
    var nt = oa[u],
        ot = nt[y] ? function (a, b, c) {
            return nt[y][G](a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? n.max(0, a[s] + c) : c;
            if (Zr(a)) return Zr(b) && 1 == b[s] ? a[y](b, c) : -1;
            for (; c < a[s]; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, pt = nt[Oc] ? function (a, b, c) {
            nt[Oc][G](a, b, c)
        } : function (a, b, c) {
            for (var d = a[s], f = Zr(a) ? a[Qb](N) : a, g = 0; g < d; g++) g in f && b[G](c, f[g], g, a)
        }, qt = nt.filter ? function (a, b, c) {
            return nt.filter[G](a, b, c)
        } : function (a, b, c) {
            for (var d = a[s], f = [], g = 0, h = Zr(a) ? a[Qb](N) : a, l = 0; l < d; l++)
                if (l in h) {
                    var q = h[l];
                    b[G](c, q,
                        l, a) && (f[g++] = q)
                }
            return f
        }, rt = nt.map ? function (a, b, c) {
            return nt.map[G](a, b, c)
        } : function (a, b, c) {
            for (var d = a[s], f = oa(d), g = Zr(a) ? a[Qb](N) : a, h = 0; h < d; h++) h in g && (f[h] = b[G](c, g[h], h, a));
            return f
        }, st = nt.some ? function (a, b, c) {
            return nt.some[G](a, b, c)
        } : function (a, b, c) {
            for (var d = a[s], f = Zr(a) ? a[Qb](N) : a, g = 0; g < d; g++)
                if (g in f && b[G](c, f[g], g, a)) return !0;
            return !1
        }, tt = nt.every ? function (a, b, c) {
            return nt.every[G](a, b, c)
        } : function (a, b, c) {
            for (var d = a[s], f = Zr(a) ? a[Qb](N) : a, g = 0; g < d; g++)
                if (g in f && !b[G](c, f[g], g, a)) return !1;
            return !0
        };

    function ut(a, b) {
        var c;
        t: {
            c = a[s];
            for (var d = Zr(a) ? a[Qb](N) : a, f = 0; f < c; f++)
                if (f in d && b[G](void 0, d[f], f, a)) {
                    c = f;
                    break t
                }
            c = -1
        }
        return 0 > c ? null : Zr(a) ? a[Vb](c) : a[c]
    }

    function vt(a, b) {
        return 0 <= ot(a, b)
    }

    function wt(a, b) {
        var c = ot(a, b),
            d;
        (d = 0 <= c) && nt[Dd][G](a, c, 1);
        return d
    }

    function xt(a) {
        return nt[Ub][id](nt, arguments)
    }

    function yt(a) {
        var b = a[s];
        if (0 < b) {
            for (var c = oa(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function zt(a, b, c, d) {
        nt[Dd][id](a, At(arguments, 1))
    }

    function At(a, b, c) {
        return 2 >= arguments[s] ? nt[Kb][G](a, b) : nt[Kb][G](a, b, c)
    };

    function T(a, b) {
        this.x = Wr(a) ? a : 0;
        this.y = Wr(b) ? b : 0
    }
    P = T[u];
    P.U = function () {
        return new T(this.x, this.y)
    };

    function Bt(a, b) {
        return new T(a.x - b.x, a.y - b.y)
    }
    Da(P, function () {
        this.x = n[Ob](this.x);
        this.y = n[Ob](this.y);
        return this
    });
    Ea(P, function () {
        this.x = n[Rb](this.x);
        this.y = n[Rb](this.y);
        return this
    });
    Ca(P, function () {
        this.x = n[Ib](this.x);
        this.y = n[Ib](this.y);
        return this
    });
    ab(P, function (a, b) {
        a instanceof T ? (this.x += a.x, this.y += a.y) : (this.x += a, $r(b) && (this.y += b));
        return this
    });

    function Ct(a, b) {
        ya(this, a);
        eb(this, b)
    }
    Ct[u].U = function () {
        return new Ct(this[w], this[L])
    };
    Da(Ct[u], function () {
        ya(this, n[Ob](this[w]));
        eb(this, n[Ob](this[L]));
        return this
    });
    Ea(Ct[u], function () {
        ya(this, n[Rb](this[w]));
        eb(this, n[Rb](this[L]));
        return this
    });
    Ca(Ct[u], function () {
        ya(this, n[Ib](this[w]));
        eb(this, n[Ib](this[L]));
        return this
    });

    function Dt(a, b, c) {
        for (var d in a) b[G](c, a[d], d, a)
    }

    function Et(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Ft(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Gt() {
        var a = Ht,
            b;
        for (b in a) return !1;
        return !0
    }

    function It(a, b, c) {
        if (b in a) throw e('The object already contains the key "' + b + Yd);
        a[b] = c
    }

    function Jt(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Kt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Lt(a, b) {
        for (var c, d, f = 1; f < arguments[s]; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < Kt[s]; g++) c = Kt[g], ka[u][gc][G](d, c) && (a[c] = d[c])
        }
    };
    var Mt, Nt, Ot, Pt, Qt, Rt, St;

    function Tt() {
        return Q.navigator ? Q.navigator.userAgent : null
    }

    function Ut() {
        return Q.navigator
    }
    Qt = Pt = Ot = Nt = Mt = !1;
    var Vt;
    if (Vt = Tt()) {
        var Wt = Ut();
        Mt = 0 == Vt[y]("Opera");
        Nt = !Mt && -1 != Vt[y]("MSIE");
        Pt = (Ot = !Mt && -1 != Vt[y]("WebKit")) && -1 != Vt[y]("Mobile");
        Qt = !Mt && !Ot && "Gecko" == Wt.product
    }
    var Xt = Mt,
        U = Nt,
        Yt = Qt,
        W = Ot,
        Zt = Pt,
        $t = Ut(),
        au = $t && $t.platform || N;
    Rt = -1 != au[y]("Mac");
    au[y]("Win");
    au[y]("Linux");
    St = !! Ut() && -1 != (Ut().appVersion || N)[y]("X11");
    var bu = Tt();
    bu && bu[y]("Android");
    bu && bu[y]("iPhone");
    bu && bu[y]("iPad");

    function cu() {
        var a = Q[Nb];
        return a ? a.documentMode : void 0
    }
    var du;
    t: {
        var eu = N,
            fu;
        if (Xt && Q.opera) var gu = Q.opera.version,
        eu = typeof gu == zm ? gu() : gu;
        else if (Yt ? fu = /rv\:([^\);]+)(\)|;)/ : U ? fu = /MSIE\s+([^\);]+)(\)|;)/ : W && (fu = /WebKit\/(\S+)/), fu) var hu = fu[Bb](Tt()),
        eu = hu ? hu[1] : N;
        if (U) {
            var iu = cu();
            if (iu > fa(eu)) {
                du = ga(iu);
                break t
            }
        }
        du = eu
    }
    var ju = du,
        ku = {};

    function X(a) {
        return ku[a] || (ku[a] = 0 <= jt(ju, a))
    }

    function lu(a) {
        return U && mu >= a
    }
    var nu = Q[Nb],
        mu = nu && U ? cu() || (nu[Vc] == Rh ? ea(ju, 10) : 5) : void 0;
    var ou, pu = !U || lu(9),
        qu = !Yt && !U || U && lu(9) || Yt && X("1.9.1"),
        ru = U && !X("9");
    var Y = {
        L: function (a, b) {
            xa(a, b)
        },
        S: function (a) {
            a = a[zb];
            return Zr(a) && a[xc](/\S+/g) || []
        },
        add: function (a, b) {
            var c = Y.S(a),
                d = At(arguments, 1),
                f = c[s] + d[s];
            Y.ei(c, d);
            Y.L(a, c[M](O));
            return c[s] == f
        },
        remove: function (a, b) {
            var c = Y.S(a),
                d = At(arguments, 1),
                f = Y.fi(c, d);
            Y.L(a, f[M](O));
            return f[s] == c[s] - d[s]
        },
        ei: function (a, b) {
            for (var c = 0; c < b[s]; c++) vt(a, b[c]) || a[r](b[c])
        },
        fi: function (a, b) {
            return qt(a, function (a) {
                return !vt(b, a)
            })
        },
        zl: function (a, b, c) {
            for (var d = Y.S(a), f = !1, g = 0; g < d[s]; g++) d[g] == b && (zt(d, g--, 1), f = !0);
            f &&
                (d[r](c), Y.L(a, d[M](O)));
            return f
        },
        yl: function (a, b, c) {
            var d = Y.S(a);
            Zr(b) ? wt(d, b) : Xr(b) && (d = Y.fi(d, b));
            Zr(c) && !vt(d, c) ? d[r](c) : Xr(c) && Y.ei(d, c);
            Y.L(a, d[M](O))
        },
        Ia: function (a, b) {
            return vt(Y.S(a), b)
        },
        Zf: function (a, b, c) {
            c ? Y.add(a, b) : Y[Cc](a, b)
        },
        Al: function (a, b) {
            var c = !Y.Ia(a, b);
            Y.Zf(a, b, c);
            return c
        }
    };
    var su = {
        ll: 1,
        cl: 2,
        ul: 3,
        fl: 4,
        nl: 5,
        ml: 6,
        ql: 7,
        gl: 8,
        il: 9,
        kl: 10,
        jl: 11,
        pl: 12
    };

    function tu(a) {
        return a ? new uu(vu(a)) : ou || (ou = new uu)
    }

    function wu(a) {
        return Zr(a) ? m[Sb](a) : a
    }

    function xu(a, b) {
        var c = b || m;
        return c[Mc] && c[Gc] ? c[Mc](hg + a) : c[tc] ? c[tc](a) : yu(m, xf, a, b)
    }

    function zu(a, b) {
        var c = b || m,
            d = null;
        return (d = c[Mc] && c[Gc] ? c[Gc](hg + a) : xu(a, b)[0]) || null
    }

    function yu(a, b, c, d) {
        a = d || a;
        b = b && b != xf ? b[Cd]() : N;
        if (a[Mc] && a[Gc] && (b || c)) return a[Mc](b + (c ? hg + c : N));
        if (c && a[tc]) {
            a = a[tc](c);
            if (b) {
                d = {};
                for (var f = 0, g = 0, h; h = a[g]; g++) b == h[mc] && (d[f++] = h);
                ua(d, f);
                return d
            }
            return a
        }
        a = a[Id](b || xf);
        if (c) {
            d = {};
            for (g = f = 0; h = a[g]; g++) b = h[zb], typeof b[Qb] == zm && vt(b[Qb](/\s+/), c) && (d[f++] = h);
            ua(d, f);
            return d
        }
        return a
    }

    function Au(a, b) {
        Dt(b, function (b, d) {
            d == Yp ? a[C].cssText = b : d == kl ? xa(a, b) : d == wm ? a.htmlFor = b : d in Bu ? a[Wc](Bu[d], b) : 0 == d.lastIndexOf(ok, 0) || 0 == d.lastIndexOf(Kl, 0) ? a[Wc](d, b) : a[d] = b
        })
    }
    var Bu = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: jn,
        maxlength: "maxLength",
        role: zp,
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: ur
    };

    function Cu(a) {
        a = a[Nb];
        a = a[Vc] == Rh ? a[Nd] : a[D];
        return new Ct(a[Gb], a[Rc])
    }

    function Du(a) {
        var b = Eu(a);
        a = a[kd] || a[sd];
        return U && X(wg) && a.pageYOffset != b[jb] ? new T(b[Sc], b[jb]) : new T(a.pageXOffset || b[Sc], a.pageYOffset || b[jb])
    }

    function Eu(a) {
        return W || a[Vc] != Rh ? a[D] : a[Nd]
    }

    function Fu(a) {
        return a ? a[kd] || a[sd] : k
    }

    function Gu(a, b, c) {
        return Hu(m, arguments)
    }

    function Hu(a, b) {
        var c = b[0],
            d = b[1];
        if (!pu && d && (d[wd] || d[gd])) {
            c = [Og, c];
            d[wd] && c[r](Vd, $s(d[wd]), Yd);
            if (d[gd]) {
                c[r](Xd, $s(d[gd]), Yd);
                var f = {};
                Lt(f, d);
                delete f[gd];
                d = f
            }
            c[r](Bh);
            c = c[M](N)
        }
        c = a[Ic](c);
        d && (Zr(d) ? xa(c, d) : Xr(d) ? Y.add[id](null, [c][Ub](d)) : Au(c, d));
        2 < b[s] && Iu(a, c, b, 2);
        return c
    }

    function Iu(a, b, c, d) {
        function f(c) {
            c && b[p](Zr(c) ? a[Wb](c) : c)
        }
        for (; d < c[s]; d++) {
            var g = c[d];
            !Yr(g) || bs(g) && 0 < g[x] ? f(g) : pt(Ju(g) ? yt(g) : g, f)
        }
    }

    function Ku(a, b) {
        var c = a[Ic](Sl);
        U ? (Fa(c, dh + b), c[rc](c[I])) : Fa(c, b);
        if (1 == c[od][s]) return c[rc](c[I]);
        for (var d = a.createDocumentFragment(); c[I];) d[p](c[I]);
        return d
    }

    function Lu(a) {
        if (1 != a[x]) return !1;
        switch (a[qd]) {
        case Gh:
        case Hh:
        case Kh:
        case Mh:
        case Ph:
        case Qh:
        case Wh:
        case ai:
        case ei:
        case ii:
        case ji:
        case hi:
        case ki:
        case mi:
        case ni:
        case wi:
        case xi:
        case pi:
        case Ai:
        case Ci:
        case Gi:
        case Hi:
        case Ji:
        case Ti:
        case bj:
            return !1
        }
        return !0
    }

    function Mu(a, b) {
        Iu(vu(a), a, arguments, 1)
    }

    function Nu(a) {
        for (var b; b = a[I];) a[rc](b)
    }

    function Ou(a, b) {
        b[K] && b[K][cc](a, b)
    }

    function Pu(a, b) {
        b[K] && b[K][cc](a, b[zd])
    }

    function Qu(a) {
        return a && a[K] ? a[K][rc](a) : null
    }

    function Ru(a) {
        return qu && void 0 != a.children ? a.children : qt(a[od], function (a) {
            return 1 == a[x]
        })
    }

    function Su(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : Tu(a[zd], !0)
    }

    function Tu(a, b) {
        for (; a && 1 != a[x];) a = b ? a[zd] : a[kb];
        return a
    }

    function Uu(a, b) {
        if (a[hd] && 1 == b[x]) return a == b || a[hd](b);
        if ("undefined" != typeof a[ic]) return a == b || da(a[ic](b) & 16);
        for (; b && a != b;) b = b[K];
        return b == a
    }

    function Vu(a, b) {
        if (a == b) return 0;
        if (a[ic]) return a[ic](b) & 2 ? 1 : -1;
        if (U && !lu(9)) {
            if (9 == a[x]) return -1;
            if (9 == b[x]) return 1
        }
        if (Pp in a || a[K] && Pp in a[K]) {
            var c = 1 == a[x],
                d = 1 == b[x];
            if (c && d) return a[yb] - b[yb];
            var f = a[K],
                g = b[K];
            return f == g ? Wu(a, b) : !c && Uu(f, b) ? -1 * Xu(a, b) : !d && Uu(g, a) ? Xu(b, a) : (c ? a[yb] : f[yb]) - (d ? b[yb] : g[yb])
        }
        d = vu(a);
        c = d[oc]();
        c.selectNode(a);
        c[Fb](!0);
        d = d[oc]();
        d.selectNode(b);
        d[Fb](!0);
        return c.compareBoundaryPoints(Q.Range.START_TO_END, d)
    }

    function Xu(a, b) {
        var c = a[K];
        if (c == b) return -1;
        for (var d = b; d[K] != c;) d = d[K];
        return Wu(d, a)
    }

    function Wu(a, b) {
        for (var c = b; c = c[kb];)
            if (c == a) return -1;
        return 1
    }

    function Yu(a) {
        var b, c = arguments[s];
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            f = aa;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) g[Gd](h), h = h[K];
            d[r](g);
            f = n.min(f, g[s])
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var h = d[0][b], l = 1; l < c; l++)
                if (h != d[l][b]) return g;
            g = h
        }
        return g
    }

    function vu(a) {
        return 9 == a[x] ? a : a[qc] || a[Nb]
    }

    function Zu(a) {
        return a.contentDocument || a[Bd][Nb]
    }

    function $u(a, b) {
        if (uq in a) a.textContent = b;
        else if (a[I] && 3 == a[I][x]) {
            for (; a[wc] != a[I];) a[rc](a[wc]);
            a[I].data = b
        } else Nu(a), a[p](vu(a)[Wb](ga(b)))
    }
    var av = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }, bv = {
            IMG: O,
            BR: Rd
        };

    function cv(a) {
        var b = a.getAttributeNode(eq);
        return b && b.specified ? (a = a.tabIndex, $r(a) && 0 <= a && 32768 > a) : !1
    }

    function dv(a, b) {
        b ? $a(a, 0) : ($a(a, -1), a[ud](dq))
    }

    function ev(a) {
        if (ru && Dn in a) a = a[pb][Mb](/(\r\n|\r|\n)/g, Rd);
        else {
            var b = [];
            fv(a, b, !0);
            a = b[M](N)
        }
        a = a[Mb](/ \xAD /g, O)[Mb](/\xAD/g, N);
        a = a[Mb](/\u200B/g, N);
        ru || (a = a[Mb](/ +/g, O));
        a != O && (a = a[Mb](/^\s*/, N));
        return a
    }

    function gv(a) {
        var b = [];
        fv(a, b, !1);
        return b[M](N)
    }

    function fv(a, b, c) {
        if (!(a[mc] in av))
            if (3 == a[x]) c ? b[r](ga(a[Jd])[Mb](/(\r\n|\r|\n)/g, N)) : b[r](a[Jd]);
            else if (a[mc] in bv) b[r](bv[a[mc]]);
        else
            for (a = a[I]; a;) fv(a, b, c), a = a[zd]
    }

    function Ju(a) {
        if (a && typeof a[s] == Ao) {
            if (bs(a)) return typeof a[bc] == zm || typeof a[bc] == Xp;
            if (as(a)) return typeof a[bc] == zm
        }
        return !1
    }

    function uu(a) {
        this.B = a || Q[Nb] || m
    }
    P = uu[u];
    P.h = function (a) {
        return Zr(a) ? this.B[Sb](a) : a
    };
    P.t = function (a, b, c) {
        return Hu(this.B, arguments)
    };
    P.createElement = function (a) {
        return this.B[Ic](a)
    };
    P.createTextNode = function (a) {
        return this.B[Wb](ga(a))
    };

    function hv(a) {
        return a.B[Vc] == Rh
    }

    function iv(a) {
        return Du(a.B)
    }
    P.appendChild = function (a, b) {
        a[p](b)
    };
    P.Kd = Nu;
    P.removeNode = Qu;
    Za(P, Uu);
    P.hb = $u;
    P.rf = ev;
    var jv = {}, kv = {};

    function lv(a, b) {
        var c = tu()[Ic](Uh),
            d = mv(a(b || nv, void 0, void 0));
        Fa(c, d);
        return 1 == c[od][s] && (d = c[I], 1 == d[x]) ? d : c
    }

    function mv(a) {
        return bs(a) ? yr : ga(a)
    }
    var nv = {};

    function ov(a, b, c, d) {
        this.top = a;
        hb(this, b);
        Ua(this, c);
        Ka(this, d)
    }
    P = ov[u];
    P.U = function () {
        return new ov(this.top, this[Pd], this[J], this[E])
    };
    Za(P, function (a) {
        return this && a ? a instanceof ov ? a[E] >= this[E] && a[Pd] <= this[Pd] && a.top >= this.top && a[J] <= this[J] : a.x >= this[E] && a.x <= this[Pd] && a.y >= this.top && a.y <= this[J] : !1
    });
    Da(P, function () {
        this.top = n[Ob](this.top);
        hb(this, n[Ob](this[Pd]));
        Ua(this, n[Ob](this[J]));
        Ka(this, n[Ob](this[E]));
        return this
    });
    Ea(P, function () {
        this.top = n[Rb](this.top);
        hb(this, n[Rb](this[Pd]));
        Ua(this, n[Rb](this[J]));
        Ka(this, n[Rb](this[E]));
        return this
    });
    Ca(P, function () {
        this.top = n[Ib](this.top);
        hb(this, n[Ib](this[Pd]));
        Ua(this, n[Ib](this[J]));
        Ka(this, n[Ib](this[E]));
        return this
    });
    ab(P, function (a, b) {
        a instanceof T ? (Ka(this, this[E] + a.x), hb(this, this[Pd] + a.x), this.top += a.y, Ua(this, this[J] + a.y)) : (Ka(this, this[E] + a), hb(this, this[Pd] + a), $r(b) && (this.top += b, Ua(this, this[J] + b)));
        return this
    });

    function pv(a, b, c, d) {
        Ka(this, a);
        this.top = b;
        ya(this, c);
        eb(this, d)
    }
    P = pv[u];
    P.U = function () {
        return new pv(this[E], this.top, this[w], this[L])
    };
    Za(P, function (a) {
        return a instanceof pv ? this[E] <= a[E] && this[E] + this[w] >= a[E] + a[w] && this.top <= a.top && this.top + this[L] >= a.top + a[L] : a.x >= this[E] && a.x <= this[E] + this[w] && a.y >= this.top && a.y <= this.top + this[L]
    });
    Da(P, function () {
        Ka(this, n[Ob](this[E]));
        this.top = n[Ob](this.top);
        ya(this, n[Ob](this[w]));
        eb(this, n[Ob](this[L]));
        return this
    });
    Ea(P, function () {
        Ka(this, n[Rb](this[E]));
        this.top = n[Rb](this.top);
        ya(this, n[Rb](this[w]));
        eb(this, n[Rb](this[L]));
        return this
    });
    Ca(P, function () {
        Ka(this, n[Ib](this[E]));
        this.top = n[Ib](this.top);
        ya(this, n[Ib](this[w]));
        eb(this, n[Ib](this[L]));
        return this
    });
    ab(P, function (a, b) {
        a instanceof T ? (Ka(this, this[E] + a.x), this.top += a.y) : (Ka(this, this[E] + a), $r(b) && (this.top += b));
        return this
    });

    function qv(a, b, c) {
        Zr(b) ? rv(a, c, b) : Dt(b, hs(rv, a))
    }

    function rv(a, b, c) {
        (c = sv(a, c)) && (a[C][c] = b)
    }

    function sv(a, b) {
        var c = kt(b);
        if (void 0 === a[C][c]) {
            var d = (W ? cj : Yt ? ui : U ? no : Xt ? zi : null) + lt(b);
            if (void 0 !== a[C][d]) return d
        }
        return c
    }

    function tv(a, b) {
        var c = vu(a);
        return c[sd] && c[sd][hc] && (c = c[sd][hc](a, null)) ? c[b] || c.getPropertyValue(b) || N : N
    }

    function uv(a, b) {
        return tv(a, b) || (a[Xc] ? a[Xc][b] : null) || a[C] && a[C][b]
    }

    function vv(a, b, c) {
        var d, f = Yt && (Rt || St) && X(vg);
        b instanceof T ? (d = b.x, b = b.y) : (d = b, b = c);
        Ka(a[C], wv(d, f));
        a[C].top = wv(b, f)
    }

    function xv(a) {
        a = a ? vu(a) : m;
        return !U || lu(9) || hv(tu(a)) ? a[Nd] : a[D]
    }

    function yv(a) {
        var b;
        try {
            b = a[sb]()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        U && (a = a[qc], Ka(b, b[E] - (a[Nd][Uc] + a[D][Uc])), b.top -= a[Nd][$c] + a[D][$c]);
        return b
    }

    function zv(a) {
        if (U && !lu(8)) return a.offsetParent;
        var b = vu(a),
            c = uv(a, Xo),
            d = c == sm || c == Fj;
        for (a = a[K]; a && a != b; a = a[K])
            if (c = uv(a, Xo), d = d && c == Up && a != b[Nd] && a != b[D], !d && (a.scrollWidth > a[Gb] || a[Lc] > a[Rc] || c == sm || c == Fj || c == pp)) return a;
        return null
    }

    function Av(a) {
        for (var b = new ov(0, aa, aa, 0), c = tu(a), d = c.B[D], f = c.B[Nd], g = Eu(c.B); a = zv(a);)
            if (!(U && 0 == a[Gb] || W && 0 == a[Rc] && a == d || a == d || a == f || uv(a, Mo) == rr)) {
                var h = Bv(a),
                    l;
                l = a;
                if (Yt && !X(vg)) {
                    var q = fa(tv(l, Rk));
                    if (Cv(l)) var v = l[Tb] - l[Gb] - q - fa(tv(l, Tk)),
                    q = q + v;
                    l = new T(q, fa(tv(l, Vk)))
                } else l = new T(l[Uc], l[$c]);
                h.x += l.x;
                h.y += l.y;
                b.top = n.max(b.top, h.y);
                hb(b, n.min(b[Pd], h.x + a[Gb]));
                Ua(b, n.min(b[J], h.y + a[Rc]));
                Ka(b, n.max(b[E], h.x))
            }
        d = g[Sc];
        g = g[jb];
        Ka(b, n.max(b[E], d));
        b.top = n.max(b.top, g);
        c = Cu(c.B[kd] || c.B[sd] ||
            k);
        hb(b, n.min(b[Pd], d + c[w]));
        Ua(b, n.min(b[J], g + c[L]));
        return 0 <= b.top && 0 <= b[E] && b[J] > b.top && b[Pd] > b[E] ? b : null
    }

    function Bv(a) {
        var b, c = vu(a),
            d = uv(a, Xo),
            f = Yt && c[yc] && !a[sb] && d == Fj && (b = c[yc](a)) && (0 > b[uc] || 0 > b[vc]),
            g = new T(0, 0),
            h = xv(c);
        if (a == h) return g;
        if (a[sb]) b = yv(a), a = iv(tu(c)), g.x = b[E] + a.x, g.y = b.top + a.y;
        else if (c[yc] && !f) b = c[yc](a), a = c[yc](h), g.x = b[uc] - a[uc], g.y = b[vc] - a[vc];
        else {
            b = a;
            do {
                g.x += b[ec];
                g.y += b[Ad];
                b != a && (g.x += b[Uc] || 0, g.y += b[$c] || 0);
                if (W && uv(b, Xo) == sm) {
                    g.x += c[D][Sc];
                    g.y += c[D][jb];
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (Xt || W && d == Fj) g.y -= c[D][Ad];
            for (b = a;
                (b = zv(b)) && b != c[D] && b != h;) g.x -= b[Sc], Xt &&
                b[qd] == Si || (g.y -= b[jb])
        }
        return g
    }

    function Dv(a, b) {
        var c = new T(0, 0),
            d = Fu(vu(a)),
            f = a;
        do {
            var g;
            if (d == b) g = Bv(f);
            else {
                var h = f;
                g = void 0;
                if (h[sb]) g = yv(h), g = new T(g[E], g.top);
                else {
                    g = iv(tu(h));
                    var l = Bv(h);
                    g = new T(l.x - g.x, l.y - g.y)
                } if (Yt && !X(12)) {
                    l = void 0;
                    U ? l = Yf : W ? l = gg : Xt ? l = $f : Yt && (l = Wf);
                    var q = void 0;
                    l && (q = uv(h, l));
                    q || (q = uv(h, Rq));
                    h = q ? (h = q[xc](Ev)) ? new T(fa(h[1]), fa(h[2])) : new T(0, 0) : new T(0, 0);
                    g = new T(g.x + h.x, g.y + h.y)
                }
            }
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && (f = d.frameElement) && (d = d[sc]));
        return c
    }

    function Fv(a, b, c) {
        var d = Bv(a);
        b instanceof T && (c = b.y, b = b.x);
        vv(a, a[ec] + (b - d.x), a[Ad] + (c - d.y))
    }

    function wv(a, b) {
        typeof a == Ao && (a = (b ? n[Ib](a) : a) + gp);
        return a
    }

    function Gv(a) {
        if (uv(a, Rl) != wo) return Hv(a);
        var b = a[C],
            c = b[xd],
            d = b.visibility,
            f = b.position;
        ib(b, kn);
        wa(b, Fj);
        cb(b, Bn);
        a = Hv(a);
        cb(b, c);
        wa(b, f);
        ib(b, d);
        return a
    }

    function Hv(a) {
        var b = a[Tb],
            c = a[Fd],
            d = W && !b && !c;
        return Wr(b) && !d || !a[sb] ? new Ct(b, c) : (a = yv(a), new Ct(a[Pd] - a[E], a[J] - a.top))
    }

    function Iv(a) {
        var b = Bv(a);
        a = Gv(a);
        return new pv(b.x, b.y, a[w], a[L])
    }

    function Jv(a, b) {
        cb(a[C], b ? N : wo)
    }

    function Kv(a, b) {
        var c = tu(b),
            d = null;
        if (U) c = d = c.B.createStyleSheet(), U ? c.cssText = a : Fa(c, a);
        else {
            var f = yu(c.B, hn, void 0, void 0)[0];
            f || (d = yu(c.B, Kk, void 0, void 0)[0], f = c.t(hn), d[K][cc](f, d));
            var g = d = c.t(Yp);
            U ? g.cssText = a : Fa(g, a);
            c[p](f, d)
        }
    }

    function Cv(a) {
        return Cp == uv(a, Ol)
    }
    var Lv = Yt ? "MozUserSelect" : W ? "WebkitUserSelect" : null;

    function Mv(a, b, c) {
        c = c ? null : a[Id](xf);
        if (Lv) {
            if (b = b ? wo : N, a[C][Lv] = b, c) {
                a = 0;
                for (var d; d = c[a]; a++) d[C][Lv] = b
            }
        } else if (U || Xt)
            if (b = b ? Eo : N, a[Wc](er, b), c)
                for (a = 0; d = c[a]; a++) d[Wc](er, b)
    }

    function Nv(a) {
        return new Ct(a[Tb], a[Fd])
    }

    function Ov(a, b) {
        var c = hv(tu(vu(a)));
        if (!U || c && X(Ig)) Pv(a, b, El);
        else {
            var d = a[C];
            if (c) Aa(d, b[w]), Oa(d, b[L]);
            else {
                var c = Qv(a),
                    f = Rv(a);
                Aa(d, b[w] + f[E] + c[E] + c[Pd] + f[Pd]);
                Oa(d, b[L] + f.top + c.top + c[J] + f[J])
            }
        }
    }

    function Pv(a, b, c) {
        a = a[C];
        Yt ? a.MozBoxSizing = c : W ? a.WebkitBoxSizing = c : a.Tj = c;
        ya(a, n.max(b[w], 0) + gp);
        eb(a, n.max(b[L], 0) + gp)
    }

    function Sv(a, b, c, d) {
        if (/^\d+px?$/ [wb](b)) return ea(b, 10);
        var f = a[C][c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a[Xc][c];
        a[C][c] = b;
        b = a[C][d];
        a[C][c] = f;
        a.runtimeStyle[c] = g;
        return b
    }

    function Tv(a, b) {
        var c = a[Xc] ? a[Xc][b] : null;
        return c ? Sv(a, c, Tn, Uo) : 0
    }

    function Qv(a) {
        if (U) {
            var b = Tv(a, Po),
                c = Tv(a, Qo),
                d = Tv(a, Ro);
            a = Tv(a, Oo);
            return new ov(d, c, a, b)
        }
        b = tv(a, Po);
        c = tv(a, Qo);
        d = tv(a, Ro);
        a = tv(a, Oo);
        return new ov(fa(d), fa(c), fa(a), fa(b))
    }
    var Uv = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Vv(a, b) {
        if ((a[Xc] ? a[Xc][b + Pi] : null) == wo) return 0;
        var c = a[Xc] ? a[Xc][b + dj] : null;
        return c in Uv ? Uv[c] : Sv(a, c, Tn, Uo)
    }

    function Rv(a) {
        if (U) {
            var b = Vv(a, Qk),
                c = Vv(a, Sk),
                d = Vv(a, Uk);
            a = Vv(a, Ok);
            return new ov(d, c, a, b)
        }
        b = tv(a, Rk);
        c = tv(a, Tk);
        d = tv(a, Vk);
        a = tv(a, Pk);
        return new ov(fa(d), fa(c), fa(a), fa(b))
    }
    var Ev = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

    function Wv() {}
    Wv[u].Gb = !1;
    Wv[u].z = function () {
        this.Gb || (this.Gb = !0, this.p())
    };
    Wv[u].p = function () {
        if (this.ld)
            for (; this.ld[s];) this.ld[xb]()()
    };

    function Xv(a) {
        a && typeof a.z == zm && a.z()
    };

    function Yv(a) {
        Yv[O](a);
        return a
    }
    Yv[O] = Tr;

    function Zv(a, b) {
        try {
            return Yv(a[b]), !0
        } catch (c) {}
        return !1
    };
    var $v = !U || lu(9),
        aw = !U || lu(9),
        bw = U && !X("9");
    !W || X(Fg);
    Yt && X("1.9b") || U && X(Ig) || Xt && X("9.5") || W && X(Fg);
    Yt && !X(Ig) || U && X("9");

    function cw(a, b) {
        Ya(this, a);
        La(this, b);
        Ja(this, this[F])
    }
    P = cw[u];
    P.z = Nr();
    P.Tb = !1;
    P.gi = !1;
    P.ci = !0;
    P.stopPropagation = function () {
        this.Tb = !0
    };
    P.preventDefault = function () {
        this.gi = !0;
        this.ci = !1
    };

    function dw(a, b) {
        a && ew(this, a, b)
    }
    S(dw, cw);
    var fw = [1, 4, 2];
    P = dw[u];
    La(P, null);
    P.relatedTarget = null;
    P.offsetX = 0;
    P.offsetY = 0;
    fb(P, 0);
    gb(P, 0);
    Ma(P, 0);
    Na(P, 0);
    P.button = 0;
    Ra(P, 0);
    P.charCode = 0;
    P.ctrlKey = !1;
    ra(P, !1);
    P.shiftKey = !1;
    P.metaKey = !1;
    P.ug = !1;
    P.nb = null;

    function ew(a, b, c) {
        var d = Ya(a, b[gd]);
        cw[G](a, d);
        La(a, b[F] || b.srcElement);
        Ja(a, c);
        (c = b[Ab]) ? Yt && (Zv(c, to) || (c = null)) : d == ko ? c = b.fromElement : d == jo && (c = b.toElement);
        a.relatedTarget = c;
        a.offsetX = W || void 0 !== b.offsetX ? b.offsetX : b.layerX;
        a.offsetY = W || void 0 !== b.offsetY ? b.offsetY : b.layerY;
        fb(a, void 0 !== b[Ld] ? b[Ld] : b.pageX);
        gb(a, void 0 !== b[Md] ? b[Md] : b.pageY);
        Ma(a, b[uc] || 0);
        Na(a, b[vc] || 0);
        a.button = b.button;
        Ra(a, b[H] || 0);
        a.charCode = b[Bc] || (d == Mn ? b[H] : 0);
        a.ctrlKey = b[Pb];
        ra(a, b[nb]);
        a.shiftKey = b[pd];
        a.metaKey =
            b[dc];
        a.ug = Rt ? b[dc] : b[Pb];
        a.state = b.state;
        a.nb = b;
        b.gi && a[ac]();
        delete a.Tb
    }

    function gw(a) {
        return ($v ? 0 == a.nb.button : a[gd] == ll ? !0 : !! (a.nb.button & fw[0])) && !(W && Rt && a[Pb])
    }
    P.stopPropagation = function () {
        dw.k[Xb][G](this);
        this.nb[Xb] ? this.nb[Xb]() : this.nb.cancelBubble = !0
    };
    P.preventDefault = function () {
        dw.k[ac][G](this);
        var a = this.nb;
        if (a[ac]) a[ac]();
        else if (a.returnValue = !1, bw) try {
            (a[Pb] || 112 <= a[H] && 123 >= a[H]) && Ra(a, -1)
        } catch (b) {}
    };
    var hw = "closure_listenable_" + (1E6 * n[Ec]() | 0);

    function iw(a) {
        return !(!a || !a[hw])
    }
    var jw = 0;

    function kw(a, b, c, d, f, g) {
        this.mb = a;
        this.a = b;
        this.src = c;
        Ya(this, d);
        this.qd = !! f;
        this.lc = g;
        this.Ob = ++jw;
        this.db = this.Hc = !1
    };
    var lw = {}, mw = {}, nw = {}, ow = {};

    function pw(a, b, c, d, f) {
        if (Xr(b)) {
            for (var g = 0; g < b[s]; g++) pw(a, b[g], c, d, f);
            return null
        }
        c = qw(c);
        return iw(a) ? a.l(b, c, d, f) : rw(a, b, c, !1, d, f)
    }

    function rw(a, b, c, d, f, g) {
        if (!b) throw e("Invalid event type");
        f = !! f;
        var h = mw;
        b in h || (h[b] = {
            O: 0,
            Cb: 0
        });
        h = h[b];
        f in h || (h[f] = {
            O: 0,
            Cb: 0
        }, h.O++);
        var h = h[f],
            l = cs(a),
            q;
        h.Cb++;
        if (h[l]) {
            q = h[l];
            for (var v = 0; v < q[s]; v++)
                if (h = q[v], h.mb == c && h.lc == g) {
                    if (h.db) break;
                    d || (q[v].Hc = !1);
                    return q[v]
                }
        } else q = h[l] = [], h.O++;
        v = sw();
        h = new kw(c, v, a, b, f, g);
        h.Hc = d;
        v.src = a;
        v.mb = h;
        q[r](h);
        nw[l] || (nw[l] = []);
        nw[l][r](h);
        a.addEventListener ? a.addEventListener(b, v, f) : a.attachEvent(b in ow ? ow[b] : ow[b] = Eo + b, v);
        return lw[h.Ob] = h
    }

    function sw() {
        var a = tw,
            b = aw ? function (c) {
                return a[G](b.src, b.mb, c)
            } : function (c) {
                c = a[G](b.src, b.mb, c);
                if (!c) return c
            };
        return b
    }

    function uw(a, b, c, d, f) {
        if (Xr(b)) {
            for (var g = 0; g < b[s]; g++) uw(a, b[g], c, d, f);
            return null
        }
        c = qw(c);
        return iw(a) ? vw(a, b, c, !0, d, f) : rw(a, b, c, !0, d, f)
    }

    function ww(a, b, c, d, f) {
        if (Xr(b))
            for (var g = 0; g < b[s]; g++) ww(a, b[g], c, d, f);
        else if (c = qw(c), iw(a)) a.T(b, c, d, f);
        else if (d = !! d, a = xw(a, b, d))
            for (g = 0; g < a[s]; g++)
                if (a[g].mb == c && a[g].qd == d && a[g].lc == f) {
                    yw(a[g]);
                    break
                }
    }

    function yw(a) {
        if ($r(a) || !a || a.db) return !1;
        var b = a.src;
        if (iw(b)) return zw(b, a);
        var c = a[gd],
            d = a.a,
            f = a.qd;
        b.removeEventListener ? b.removeEventListener(c, d, f) : b.detachEvent && b.detachEvent(c in ow ? ow[c] : ow[c] = Eo + c, d);
        b = cs(b);
        nw[b] && (d = nw[b], wt(d, a), 0 == d[s] && delete nw[b]);
        a.db = !0;
        a.mb = null;
        a.a = null;
        a.src = null;
        a.lc = null;
        if (d = mw[c][f][b]) d.Ih = !0, Aw(c, f, b, d);
        delete lw[a.Ob];
        return !0
    }

    function Aw(a, b, c, d) {
        if (!d.Me && d.Ih) {
            for (var f = 0, g = 0; f < d[s]; f++) d[f].db || (f != g && (d[g] = d[f]), g++);
            ua(d, g);
            d.Ih = !1;
            0 == g && (delete mw[a][b][c], mw[a][b].O--, 0 == mw[a][b].O && (delete mw[a][b], mw[a].O--), 0 == mw[a].O && delete mw[a])
        }
    }

    function Bw(a, b) {
        var c = 0,
            d = null == b;
        if (null != a) {
            if (a && iw(a)) return Cw(a, b);
            var f = cs(a);
            if (nw[f])
                for (var f = nw[f], g = f[s] - 1; 0 <= g; g--) {
                    var h = f[g];
                    if (d || b == h[gd]) yw(h), c++
                }
        } else Dt(lw, function (a) {
            yw(a);
            c++
        });
        return c
    }

    function xw(a, b, c) {
        var d = mw;
        return b in d && (d = d[b], c in d && (d = d[c], a = cs(a), d[a])) ? d[a] : null
    }

    function Dw(a, b, c, d, f) {
        var g = 1;
        b = cs(b);
        if (a[b]) {
            var h = --a.Cb,
                l = a[b];
            l.Me ? l.Me++ : l.Me = 1;
            try {
                for (var q = l[s], v = 0; v < q; v++) {
                    var t = l[v];
                    t && !t.db && (g &= !1 !== Ew(t, f))
                }
            } finally {
                a.Cb = n.max(h, a.Cb), l.Me--, Aw(c, d, b, l)
            }
        }
        return da(g)
    }

    function Ew(a, b) {
        var c = a.mb,
            d = a.lc || a.src;
        a.Hc && yw(a);
        return c[G](d, b)
    }

    function tw(a, b) {
        if (a.db) return !0;
        var c = a[gd],
            d = mw;
        if (!(c in d)) return !0;
        var d = d[c],
            f, g;
        if (!aw) {
            f = b || Sr(vr);
            var h = !0 in d,
                l = !1 in d;
            if (h) {
                if (0 > f[H] || void 0 != f.returnValue) return !0;
                t: {
                    var q = !1;
                    if (0 == f[H]) try {
                        Ra(f, -1);
                        break t
                    } catch (v) {
                        q = !0
                    }
                    if (q || void 0 == f.returnValue) f.returnValue = !0
                }
            }
            q = new dw;
            ew(q, f, this);
            f = !0;
            try {
                if (h) {
                    for (var t = [], B = q[nc]; B; B = B[K]) t[r](B);
                    g = d[!0];
                    g.Cb = g.O;
                    for (var z = t[s] - 1; !q.Tb && 0 <= z && g.Cb; z--) Ja(q, t[z]), f &= Dw(g, t[z], c, !0, q);
                    if (l)
                        for (g = d[!1], g.Cb = g.O, z = 0; !q.Tb && z < t[s] && g.Cb; z++) Ja(q,
                            t[z]), f &= Dw(g, t[z], c, !1, q)
                } else f = Ew(a, q)
            } finally {
                t && ua(t, 0)
            }
            return f
        }
        c = new dw(b, this);
        return f = Ew(a, c)
    }
    var Fw = "__closure_events_fn_" + (1E9 * n[Ec]() >>> 0);

    function qw(a) {
        return as(a) ? a : a[Fw] || (a[Fw] = function (b) {
            return a[bd](b)
        })
    };

    function Gw(a) {
        this.b = a;
        this.a = {}
    }
    S(Gw, Wv);
    var Hw = [];
    Gw[u].l = function (a, b, c, d, f) {
        Xr(b) || (Hw[0] = b, b = Hw);
        for (var g = 0; g < b[s]; g++) {
            var h = pw(a, b[g], c || this, d || !1, f || this.b || this);
            this.a[h.Ob] = h
        }
        return this
    };

    function Iw(a, b, c, d, f, g) {
        if (Xr(c))
            for (var h = 0; h < c[s]; h++) Iw(a, b, c[h], d, f, g);
        else b = uw(b, c, d || a, f, g || a.b || a), a.a[b.Ob] = b
    }
    Gw[u].T = function (a, b, c, d, f) {
        if (Xr(b))
            for (var g = 0; g < b[s]; g++) this.T(a, b[g], c, d, f);
        else {
            t: if (f = f || this.b || this, d = !! d, c = qw(c || this), iw(a)) a = a.C[b], b = -1, a && (b = Jw(a, c, d, f)), f = -1 < b ? a[b] : null;
            else {
                if (a = xw(a, b, d))
                    for (b = 0; b < a[s]; b++)
                        if (!a[b].db && a[b].mb == c && a[b].qd == d && a[b].lc == f) {
                            f = a[b];
                            break t
                        }
                f = null
            }
            f && (yw(f), delete this.a[f.Ob])
        }
        return this
    };

    function Kw(a) {
        Dt(a.a, yw);
        a.a = {}
    }
    Gw[u].p = function () {
        Gw.k.p[G](this);
        Kw(this)
    };
    Gw[u].handleEvent = function () {
        throw e("EventHandler.handleEvent not implemented");
    };

    function Lw() {
        this.C = {};
        this.wk = this
    }
    S(Lw, Wv);
    Lw[u][hw] = !0;
    P = Lw[u];
    P.Ie = null;
    P.ng = Or("Ie");
    P.addEventListener = function (a, b, c, d) {
        pw(this, a, b, c, d)
    };
    P.removeEventListener = function (a, b, c, d) {
        ww(this, a, b, c, d)
    };
    P.dispatchEvent = function (a) {
        var b, c = this.Ie;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Ie) b[r](c), ++d
        }
        c = this.wk;
        d = a[gd] || a;
        if (Zr(a)) a = new cw(a, c);
        else if (a instanceof cw) La(a, a[F] || c);
        else {
            var f = a;
            a = new cw(d, c);
            Lt(a, f)
        }
        var f = !0,
            g;
        if (b)
            for (var h = b[s] - 1; !a.Tb && 0 <= h; h--) g = Ja(a, b[h]), f = Mw(g, d, !0, a) && f;
        a.Tb || (g = Ja(a, c), f = Mw(g, d, !0, a) && f, a.Tb || (f = Mw(g, d, !1, a) && f));
        if (b)
            for (h = 0; !a.Tb && h < b[s]; h++) g = Ja(a, b[h]), f = Mw(g, d, !1, a) && f;
        return f
    };
    P.p = function () {
        Lw.k.p[G](this);
        Cw(this);
        this.Ie = null
    };
    P.l = function (a, b, c, d) {
        return vw(this, a, b, !1, c, d)
    };

    function vw(a, b, c, d, f, g) {
        var h = a.C[b] || (a.C[b] = []),
            l = Jw(h, c, f, g);
        if (-1 < l) return a = h[l], d || (a.Hc = !1), a;
        a = new kw(c, null, a, b, !! f, g);
        a.Hc = d;
        h[r](a);
        return a
    }
    P.T = function (a, b, c, d) {
        if (!(a in this.C)) return !1;
        a = this.C[a];
        b = Jw(a, b, c, d);
        return -1 < b ? (c = a[b], delete lw[c.Ob], c.db = !0, 1 == nt[Dd][G](a, b, 1)[s]) : !1
    };

    function zw(a, b) {
        var c = b[gd];
        if (!(c in a.C)) return !1;
        if (c = wt(a.C[c], b)) delete lw[b.Ob], b.db = !0;
        return c
    }

    function Cw(a, b) {
        var c = 0,
            d;
        for (d in a.C)
            if (!b || d == b) {
                for (var f = a.C[d], g = 0; g < f[s]; g++)++c, delete lw[f[g].Ob], f[g].db = !0;
                ua(f, 0)
            }
        return c
    }

    function Mw(a, b, c, d) {
        if (!(b in a.C)) return !0;
        var f = !0;
        b = yt(a.C[b]);
        for (var g = 0; g < b[s]; ++g) {
            var h = b[g];
            if (h && !h.db && h.qd == c) {
                var l = h.mb,
                    q = h.lc || h.src;
                h.Hc && zw(a, h);
                f = !1 !== l[G](q, d) && f
            }
        }
        return f && !1 != d.ci
    }

    function Jw(a, b, c, d) {
        for (var f = 0; f < a[s]; ++f) {
            var g = a[f];
            if (g.mb == b && g.qd == !! c && g.lc == d) return f
        }
        return -1
    };

    function Nw(a) {
        if (a[nb] && !a[Pb] || a[dc] || 112 <= a[H] && 123 >= a[H]) return !1;
        switch (a[H]) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 224:
        case 92:
            return !1;
        case 0:
            return !Yt;
        default:
            return 166 > a[H] || 183 < a[H]
        }
    }

    function Ow(a, b, c, d, f) {
        if (!(U || W && X(Eg))) return !0;
        if (Rt && f) return Pw(a);
        if (f && !d || !c && (17 == b || 18 == b || Rt && 91 == b)) return !1;
        if (W && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
        if (U && d && b == a) return !1;
        switch (a) {
        case 13:
            return !(U && lu(9));
        case 27:
            return !W
        }
        return Pw(a)
    }

    function Pw(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || W && 0 == a) return !0;
        switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    }

    function Qw(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };

    function Rw(a, b, c) {
        if (as(a)) c && (a = R(a, c));
        else if (a && typeof a[bd] == zm) a = R(a[bd], a);
        else throw e("Invalid listener argument");
        return 2147483647 < b ? -1 : Q[Lb](a, b || 0)
    }

    function Sw(a) {
        Q[Cb](a)
    };

    function Tw(a, b) {
        Lw[G](this);
        this.f = new Gw(this);
        this.Cc(a || null);
        b && (this.Fc = b)
    }
    S(Tw, Lw);
    P = Tw[u];
    P.g = null;
    P.nd = !0;
    P.Kc = !1;
    P.rg = -1;
    P.Fc = Aq;
    P.h = Pr(Am);
    P.Cc = function (a) {
        Uw(this);
        this.g = a
    };
    P.fd = function (a) {
        Uw(this);
        this.nd = a
    };

    function Uw(a) {
        if (a.Kc) throw e("Can not change this state of the popup while showing.");
    }
    P.H = Pr("Kc");
    P.A = function (a) {
        this.Ea && this.Ea[lb]();
        this.ea && this.ea[lb]();
        if (a) {
            if (!this.Kc && this.Ff()) {
                if (!this.g) throw e("Caller must call setElement before trying to show the popup");
                this.rb();
                a = vu(this.g);
                if (this.nd)
                    if (this.f.l(a, ho, this.Wf, !0), U) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (c) {}
                        for (; b && b[mc] == hi;) {
                            try {
                                var d = Zu(b)
                            } catch (f) {
                                break
                            }
                            a = d;
                            b = a.activeElement
                        }
                        this.f.l(a, ho, this.Wf, !0);
                        this.f.l(a, Ml, this.Mh)
                    } else this.f.l(a, Jk, this.Mh);
                this.Fc == Aq ? (ib(this.g[C], rr), Jv(this.g, !0)) : this.Fc == mo && this.rb();
                this.Kc = !0;
                this.Ea ? (uw(this.Ea, cm, this.Nh, !1, this), this.Ea[ad]()) : this.Nh()
            }
        } else Vw(this)
    };
    P.rb = Tr;

    function Vw(a, b) {
        a.Kc && a[A]({
            type: Ek,
            target: b
        }) && (a.f && Kw(a.f), a.Kc = !1, is(), a.ea ? (uw(a.ea, cm, hs(a.Vh, b), !1, a), a.ea[ad]()) : a.Vh(b))
    }
    P.Vh = function (a) {
        this.Fc == Aq ? this.sk() : this.Fc == mo && (this.g[C].top = Ef);
        this.Nf(a)
    };
    P.sk = function () {
        ib(this.g[C], kn);
        Jv(this.g, !1)
    };
    P.Ff = function () {
        return this[A](Fk)
    };
    P.Nh = function () {
        this.rg = is();
        this[A](Lp)
    };
    P.Nf = function (a) {
        this[A]({
            type: ln,
            target: a
        })
    };
    P.Wf = function (a) {
        a = a[F];
        Uu(this.g, a) || 150 > is() - this.rg || Vw(this, a)
    };
    P.Mh = function (a) {
        var b = vu(this.g);
        if (U || Xt) {
            if (a = b.activeElement, !a || Uu(this.g, a) || a[qd] == Lh) return
        } else if (a[F] != b) return;
        150 > is() - this.rg || Vw(this)
    };
    P.p = function () {
        Tw.k.p[G](this);
        this.f.z();
        Xv(this.Ea);
        Xv(this.ea);
        delete this.g;
        delete this.f
    };
    var Ww, Xw, Yw, Zw, $w, ax, bx;
    bx = ax = $w = Zw = Yw = Xw = Ww = !1;
    var cx = Tt();
    cx && (-1 != cx[y]("Firefox") ? Ww = !0 : -1 != cx[y]("Camino") ? Xw = !0 : -1 != cx[y]("iPhone") || -1 != cx[y]("iPod") ? Yw = !0 : -1 != cx[y]("iPad") ? Zw = !0 : -1 != cx[y]("Android") ? $w = !0 : -1 != cx[y]("Chrome") ? ax = !0 : -1 != cx[y]("Safari") && (bx = !0));
    var dx = Ww,
        ex = Xw,
        fx = Yw,
        gx = Zw,
        hx = $w,
        ix = ax,
        jx = bx;

    function kx(a) {
        return (a = a[Bb](Tt())) ? a[1] : N
    }
    var lx = function () {
        if (dx) return kx(/Firefox\/([0-9.]+)/);
        if (U || Xt) return ju;
        if (ix) return kx(/Chrome\/([0-9.]+)/);
        if (jx) return kx(/Version\/([0-9.]+)/);
        if (fx || gx) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/ [Bb](Tt());
            if (a) return a[1] + hg + a[2]
        } else {
            if (hx) return (a = kx(/Android\s+([0-9.]+)/)) ? a : kx(/Version\/([0-9.]+)/);
            if (ex) return kx(/Camino\/([0-9.]+)/)
        }
        return N
    }();
    var mx = U || W || Xt || !1;
    W && X("534.16");
    U && X(Hg);
    Yt && X("1.8");
    W || U && X("9");
    U || Xt || Yt && X(vg);
    Yt || W && X("527");
    U || W && X(Eg);
    W && X("531");
    W && X(Fg);
    Yt && X(vg) || U || Xt || W && X("531");
    Yt || W && X("526");
    ix && 0 <= jt(lx, "4") || jx && X("533") || Yt && X("2.0") || U && X(wg);
    Xt && X("11.10");
    ix && jt(lx, "12");
    n.pow(1024, -3);
    n.pow(1024, -2);
    n.pow(1024, 2);
    n.pow(1024, 3);
    n.pow(1024, 4);
    n.pow(1024, 5);
    var nx = U && X(8),
        ox = W ? "<wbr></wbr>" : Xt ? "&shy;" : nx ? "&#8203;" : "<wbr>";

    function px(a) {
        return function () {
            throw a;
        }
    };

    function qx(a, b, c) {
        this.b = a;
        this.d = b || 0;
        this.c = c;
        this.a = R(this.pj, this)
    }
    S(qx, Wv);
    P = qx[u];
    P.fa = 0;
    P.p = function () {
        qx.k.p[G](this);
        this[lb]();
        delete this.b;
        delete this.c
    };
    P.start = function (a) {
        this[lb]();
        this.fa = Rw(this.a, Wr(a) ? a : this.d)
    };
    qa(P, function () {
        0 != this.fa && Sw(this.fa);
        this.fa = 0
    });
    P.pj = function () {
        this.fa = 0;
        this.b && this.b[G](this.c)
    };
    var Ht = {}, rx = null;

    function sx(a) {
        a = cs(a);
        delete Ht[a];
        Gt() && rx && rx[lb]()
    }

    function tx() {
        rx || (rx = new qx(function () {
            ux()
        }, 20));
        var a = rx;
        0 != a.fa || a[Dc]()
    }

    function ux() {
        var a = is();
        Dt(Ht, function (b) {
            vx(b, a)
        });
        Gt() || tx()
    };

    function wx() {
        Lw[G](this);
        this.a = 0;
        this.f = this.b = null
    }
    S(wx, Lw);
    wx[u].c = function () {
        this.bb(Hk)
    };
    wx[u].d = function () {
        this.bb(cm)
    };
    wx[u].Kb = function () {
        this.bb(Wp)
    };
    wx[u].bb = function (a) {
        this[A](a)
    };

    function xx(a, b, c, d) {
        wx[G](this);
        if (!Xr(a) || !Xr(b)) throw e("Start and end parameters must be arrays");
        if (a[s] != b[s]) throw e("Start and end points must be the same length");
        this.e = a;
        this.o = b;
        this.bc = c;
        this.n = d;
        Qa(this, [])
    }
    S(xx, wx);
    P = xx[u];
    P.Ua = 0;
    P.play = function (a) {
        if (a || 0 == this.a) this.Ua = 0, Qa(this, this.e);
        else if (1 == this.a) return !1;
        sx(this);
        this.b = a = is(); - 1 == this.a && (this.b -= this.bc * this.Ua);
        this.f = this.b + this.bc;
        this.Ua || this.c();
        this.bb(Wo); - 1 == this.a && this.bb(vp);
        this.a = 1;
        var b = cs(this);
        b in Ht || (Ht[b] = this);
        tx();
        vx(this, a);
        return !0
    };
    qa(P, function (a) {
        sx(this);
        this.a = 0;
        a && (this.Ua = 1);
        yx(this, this.Ua);
        this.Kb();
        this.d()
    });
    P.jf = function (a) {
        this.Ua = a;
        1 == this.a && (this.b = is() - this.bc * this.Ua, this.f = this.b + this.bc)
    };
    P.p = function () {
        0 == this.a || this[lb](!1);
        this.bb(Nl);
        xx.k.p[G](this)
    };

    function vx(a, b) {
        a.Ua = (b - a.b) / (a.f - a.b);
        1 <= a.Ua && (a.Ua = 1);
        yx(a, a.Ua);
        1 == a.Ua ? (a.a = 0, sx(a), a.bb(om), a.d()) : 1 == a.a && a.sf()
    }

    function yx(a, b) {
        as(a.n) && (b = a.n(b));
        Qa(a, oa(a.e[s]));
        for (var c = 0; c < a.e[s]; c++) a[Jc][c] = (a.o[c] - a.e[c]) * b + a.e[c]
    }
    P.sf = function () {
        this.bb(lk)
    };
    P.bb = function (a) {
        this[A](new zx(a, this))
    };

    function zx(a, b) {
        cw[G](this, a);
        Qa(this, b[Jc]);
        this.x = b[Jc][0];
        this.y = b[Jc][1];
        this.bc = b.bc;
        this.state = b.a
    }
    S(zx, cw);

    function Ax(a, b, c, d, f) {
        xx[G](this, b, c, d, f);
        this.j = a
    }
    S(Ax, xx);
    Ax[u].m = Tr;
    Ax[u].sf = function () {
        this.m();
        Ax.k.sf[G](this)
    };
    Ax[u].d = function () {
        this.m();
        Ax.k.d[G](this)
    };
    Ax[u].c = function () {
        this.m();
        Ax.k.c[G](this)
    };

    function Bx(a, b, c, d, f) {
        $r(b) && (b = [b]);
        $r(c) && (c = [c]);
        Ax[G](this, a, b, c, d, f);
        if (1 != b[s] || 1 != c[s]) throw e("Start and end points must be 1D");
    }
    S(Bx, Ax);
    Bx[u].m = function () {
        var a = this[Jc][0],
            b = this.j[C];
        Fo in b ? b.opacity = a : vi in b ? b.MozOpacity = a : nm in b && (b.filter = a === N ? N : Wj + 100 * a + pf)
    };

    function Cx(a, b, c) {
        Bx[G](this, a, 1, 0, b, c)
    }
    S(Cx, Bx);
    Cx[u].c = function () {
        cb(this.j[C], N);
        Cx.k.c[G](this)
    };
    Cx[u].d = function () {
        cb(this.j[C], wo);
        Cx.k.d[G](this)
    };

    function Dx(a, b, c) {
        Bx[G](this, a, 0, 1, b, c)
    }
    S(Dx, Bx);
    Dx[u].c = function () {
        cb(this.j[C], N);
        Dx.k.c[G](this)
    };
    var Ex = na("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", wn);
    var Fx = "StopIteration" in Q ? Q.StopIteration : e("StopIteration");

    function Gx() {}
    Gx[u].Ha = function () {
        throw Fx;
    };
    Gx[u].Va = function () {
        return this
    };

    function Hx(a) {
        if (a instanceof Gx) return a;
        if (typeof a.Va == zm) return a.Va(!1);
        if (Yr(a)) {
            var b = 0,
                c = new Gx;
            c.Ha = function () {
                for (;;) {
                    if (b >= a[s]) throw Fx;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw e("Not implemented");
    }

    function Ix(a, b, c) {
        a = Hx(a);
        try {
            for (; b[G](c, a.Ha(), void 0, a););
        } catch (d) {
            if (d !== Fx) throw d;
        }
    };

    function Jx(a, b) {
        this.b = {};
        this.a = [];
        var c = arguments[s];
        if (1 < c) {
            if (c % 2) throw e("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.L(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Jx ? (c = a.$a(), d = a.Qa()) : (c = Ft(a), d = Et(a));
            for (var f = 0; f < c[s]; f++) this.L(c[f], d[f])
        }
    }
    P = Jx[u];
    P.O = 0;
    P.rd = 0;
    P.Qa = function () {
        Kx(this);
        for (var a = [], b = 0; b < this.a[s]; b++) a[r](this.b[this.a[b]]);
        return a
    };
    P.$a = function () {
        Kx(this);
        return this.a[Ub]()
    };

    function Lx(a, b) {
        return Mx(a.b, b)
    }
    bb(P, function () {
        this.b = {};
        ua(this.a, 0);
        this.rd = this.O = 0
    });
    P.remove = function (a) {
        return Mx(this.b, a) ? (delete this.b[a], this.O--, this.rd++, this.a[s] > 2 * this.O && Kx(this), !0) : !1
    };

    function Kx(a) {
        if (a.O != a.a[s]) {
            for (var b = 0, c = 0; b < a.a[s];) {
                var d = a.a[b];
                Mx(a.b, d) && (a.a[c++] = d);
                b++
            }
            ua(a.a, c)
        }
        if (a.O != a.a[s]) {
            for (var f = {}, c = b = 0; b < a.a[s];) d = a.a[b], Mx(f, d) || (a.a[c++] = d, f[d] = 1), b++;
            ua(a.a, c)
        }
    }
    P.S = function (a, b) {
        return Mx(this.b, a) ? this.b[a] : b
    };
    P.L = function (a, b) {
        Mx(this.b, a) || (this.O++, this.a[r](a), this.rd++);
        this.b[a] = b
    };
    P.U = function () {
        return new Jx(this)
    };
    P.Va = function (a) {
        Kx(this);
        var b = 0,
            c = this.a,
            d = this.b,
            f = this.rd,
            g = this,
            h = new Gx;
        h.Ha = function () {
            for (;;) {
                if (f != g.rd) throw e("The map has changed since the iterator was created");
                if (b >= c[s]) throw Fx;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };

    function Mx(a, b) {
        return ka[u][gc][G](a, b)
    };

    function Nx(a) {
        if (typeof a.Qa == zm) return a.Qa();
        if (Zr(a)) return a[Qb](N);
        if (Yr(a)) {
            for (var b = [], c = a[s], d = 0; d < c; d++) b[r](a[d]);
            return b
        }
        return Et(a)
    }

    function Ox(a, b, c) {
        if (typeof a[Oc] == zm) a[Oc](b, c);
        else if (Yr(a) || Zr(a)) pt(a, b, c);
        else {
            var d;
            if (typeof a.$a == zm) d = a.$a();
            else if (typeof a.Qa != zm)
                if (Yr(a) || Zr(a)) {
                    d = [];
                    for (var f = a[s], g = 0; g < f; g++) d[r](g)
                } else d = Ft(a);
                else d = void 0;
            for (var f = Nx(a), g = f[s], h = 0; h < g; h++) b[G](c, f[h], d && d[h], a)
        }
    };

    function Px(a) {
        this.a = new Jx;
        if (a) {
            a = Nx(a);
            for (var b = a[s], c = 0; c < b; c++) this.add(a[c])
        }
    }

    function Qx(a) {
        var b = typeof a;
        return b == Co && a || b == zm ? Bo + cs(a) : b[Od](0, 1) + a
    }
    P = Px[u];
    P.add = function (a) {
        this.a.L(Qx(a), a)
    };
    P.remove = function (a) {
        return this.a[Cc](Qx(a))
    };
    bb(P, function () {
        this.a[ld]()
    });
    Za(P, function (a) {
        return Lx(this.a, Qx(a))
    });
    P.Qa = function () {
        return this.a.Qa()
    };
    P.U = function () {
        return new Px(this)
    };
    P.Va = function () {
        return this.a.Va(!1)
    };

    function Rx(a) {
        return Sx(a || arguments.callee.caller, [])
    }

    function Sx(a, b) {
        var c = [];
        if (vt(b, a)) c[r](fj);
        else if (a && 50 > b[s]) {
            c[r](Tx(a) + mf);
            for (var d = a.arguments, f = 0; f < d[s]; f++) {
                0 < f && c[r](Bf);
                var g;
                g = d[f];
                switch (typeof g) {
                case Co:
                    g = g ? Co : zo;
                    break;
                case Xp:
                    break;
                case Ao:
                    g = ga(g);
                    break;
                case Lk:
                    g = g ? Xq : km;
                    break;
                case zm:
                    g = (g = Tx(g)) ? g : lj;
                    break;
                default:
                    g = typeof g
                }
                40 < g[s] && (g = g[Od](0, 40) + ig);
                c[r](g)
            }
            b[r](a);
            c[r](qf);
            try {
                c[r](Sx(a.caller, b))
            } catch (h) {
                c[r](kj)
            }
        } else a ? c[r](gj) : c[r](jj);
        return c[M](N)
    }

    function Tx(a) {
        if (Ux[a]) return Ux[a];
        a = ga(a);
        if (!Ux[a]) {
            var b = /function ([^\(]+)/ [Bb](a);
            Ux[a] = b ? b[1] : hj
        }
        return Ux[a]
    }
    var Ux = {};

    function Vx() {}
    Vx[u].a = null;
    Vx[u].log = Nr();

    function Wx() {}
    var Xx = {}, Yx = null;

    function Zx(a) {
        Yx || (Yx = new Vx, Xx[N] = Yx);
        var b;
        if (!(b = Xx[a])) {
            b = new Vx;
            var c = a.lastIndexOf(hg),
                d = a[Od](0, c),
                c = a[Od](c + 1),
                d = Zx(d);
            d.a || (d.a = {});
            d.a[c] = b;
            Xx[a] = b
        }
        return b
    };

    function $x(a) {
        return eval(mf + a + pf)
    };
    var ay = na("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function by(a) {
        if (cy) {
            cy = !1;
            var b = Q[$b];
            if (b) {
                var c = b[Yc];
                if (c && (c = (c = by(c)[3] || null) && la(c)) && c != b[kc]) throw cy = !0, e();
            }
        }
        return a[xc](ay)
    }
    var cy = W;

    function dy() {}
    dy[u].a = null;

    function ey(a) {
        var b;
        (b = a.a) || (b = {}, fy(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var gy;

    function hy() {}
    S(hy, dy);

    function iy(a) {
        return (a = fy(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function fy(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = [si, ri, qi, ti], c = 0; c < b[s]; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (f) {}
            }
            throw e("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    gy = new hy;

    function jy(a) {
        Lw[G](this);
        this.headers = new Jx;
        this.s = a || null;
        this.b = !1;
        this.o = this.a = null;
        this.f = this.F = this.d = N;
        this.c = this.w = this.m = this.D = !1;
        this.e = 0;
        this.j = null;
        this.K = N;
        this.n = this.N = !1
    }
    S(jy, Lw);
    var ky = /^https?$/i,
        ly = [Di, "PUT"],
        my = [];
    P = jy[u];
    P.Hj = function () {
        this.z();
        wt(my, this)
    };
    Pa(P, function (a, b, c, d) {
        if (this.a) throw e("[goog.net.XhrIo] Object is active with another request=" + this.d + "; newUri=" + a);
        b = b ? b[Cd]() : bi;
        this.d = a;
        this.f = N;
        this.F = b;
        this.D = !1;
        this.b = !0;
        this.a = this.s ? iy(this.s) : iy(gy);
        this.o = this.s ? ey(this.s) : ey(gy);
        ta(this.a, R(this.Ng, this));
        try {
            Wx(ny(this, Bi)), this.w = !0, this.a[vb](b, a, !0), this.w = !1
        } catch (f) {
            Wx(ny(this, Zh + f[fc]));
            oy(this, f);
            return
        }
        a = c || N;
        var g = this.headers.U();
        d && Ox(d, function (a, b) {
            g.L(b, a)
        });
        d = ut(g.$a(), py);
        c = Q.FormData && a instanceof Q.FormData;
        !vt(ly,
            b) || (d || c) || g.L(Th, nk);
        Ox(g, function (a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.K && (this.a.Ck = this.K);
        xr in this.a && (this.a.Dk = this.N);
        try {
            qy(this), 0 < this.e && (this.n = U && X(9) && $r(this.a.timeout) && Wr(this.a.ontimeout), Wx(ny(this, ej + this.e + oo + this.n)), this.n ? (this.a.timeout = this.e, this.a.ontimeout = R(this.Ib, this)) : this.j = Rw(this.Ib, this.e, this)), Wx(ny(this, Li)), this.m = !0, this.a[zc](a), this.m = !1
        } catch (h) {
            Wx(ny(this, Ki + h[fc])), oy(this, h)
        }
    });

    function py(a) {
        return Fl == a[Kd]()
    }
    P.Ib = function () {
        "undefined" != typeof Rr && this.a && (this.f = Ui + this.e + po, ny(this, this.f), this[A](xq), this[Jb](8))
    };

    function oy(a, b) {
        a.b = !1;
        a.a && (a.c = !0, a.a[Jb](), a.c = !1);
        a.f = b;
        ry(a);
        sy(a)
    }

    function ry(a) {
        a.D || (a.D = !0, a[A](Bl), a[A](em))
    }
    P.abort = function () {
        this.a && this.b && (ny(this, Ih), this.b = !1, this.c = !0, this.a[Jb](), this.c = !1, this[A](Bl), this[A](Dj), sy(this))
    };
    P.p = function () {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a[Jb](), this.c = !1), sy(this, !0));
        jy.k.p[G](this)
    };
    P.Ng = function () {
        this.Gb || (this.w || this.m || this.c ? ty(this) : this.dk())
    };
    P.dk = function () {
        ty(this)
    };

    function ty(a) {
        if (a.b && "undefined" != typeof Rr)
            if (a.o[1] && 4 == uy(a) && 2 == vy(a)) ny(a, oi);
            else if (a.m && 4 == uy(a)) Rw(a.Ng, 0, a);
        else if (a[A](op), 4 == uy(a)) {
            ny(a, Fi);
            a.b = !1;
            try {
                if (wy(a)) a[A](Bl), a[A](aq);
                else {
                    var b;
                    try {
                        b = 2 < uy(a) ? a.a.statusText : N
                    } catch (c) {
                        b = N
                    }
                    a.f = b + Sd + vy(a) + uj;
                    ry(a)
                }
            } finally {
                sy(a)
            }
        }
    }

    function sy(a, b) {
        if (a.a) {
            qy(a);
            var c = a.a,
                d = a.o[0] ? Tr : null;
            a.a = null;
            a.o = null;
            b || a[A](np);
            try {
                ta(c, d)
            } catch (f) {}
        }
    }

    function qy(a) {
        a.a && a.n && (a.a.ontimeout = null);
        $r(a.j) && (Sw(a.j), a.j = null)
    }

    function wy(a) {
        var b = vy(a),
            c;
        t: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break t;
        default:
            c = !1
        }
        if (!c) {
            if (b = 0 === b) a = by(ga(a.d))[1] || null, !a && self[$b] && (a = self[$b][Kc], a = a[Od](0, a[s] - 1)), a = a ? a[Kd]() : N, b = !ky[wb](a);
            c = b
        }
        return c
    }

    function uy(a) {
        return a.a ? a.a[Ac] : 0
    }

    function vy(a) {
        try {
            return 2 < uy(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }

    function xy(a) {
        try {
            return a.a ? a.a.responseText : N
        } catch (b) {
            return N
        }
    }

    function ny(a, b) {
        return b + Sd + a.F + O + a.d + O + vy(a) + uj
    };

    function yy() {}
    Ur(yy);
    yy[u].a = 0;
    yy.qa();

    function zy(a) {
        Lw[G](this);
        this.b = a || tu();
        this.Be = Ay
    }
    S(zy, Lw);
    zy[u].ta = yy.qa();
    var Ay = null;

    function By(a, b) {
        switch (a) {
        case 1:
            return b ? Pl : bm;
        case 2:
            return b ? mn : br;
        case 4:
            return b ? Ij : Ml;
        case 8:
            return b ? Ip : dr;
        case 16:
            return b ? gl : ar;
        case 32:
            return b ? um : Jk;
        case 64:
            return b ? Go : xl
        }
        throw e("Invalid component state");
    }
    P = zy[u];
    P.fa = null;
    P.R = !1;
    P.g = null;
    P.Be = null;
    P.bg = null;
    P.oa = null;
    P.Da = null;
    P.va = null;
    P.Ch = !1;

    function Cy(a) {
        return a.fa || (a.fa = Kg + (a.ta.a++)[mb](36))
    }

    function Dy(a, b) {
        if (a.oa && a.oa.va) {
            var c = a.oa.va,
                d = a.fa;
            d in c && delete c[d];
            It(a.oa.va, b, a)
        }
        a.fa = b
    }
    P.h = Pr(Am);

    function Ey(a, b) {
        return a.g ? zu(b, a.g || a.b.B) : null
    }

    function Z(a) {
        return a.D || (a.D = new Gw(a))
    }

    function Fy(a, b) {
        if (a == b) throw e($i);
        if (b && a.oa && a.fa && a.oa.va && a.fa && (a.fa in a.oa.va && a.oa.va[a.fa]) && a.oa != b) throw e($i);
        a.oa = b;
        zy.k.ng[G](a, b)
    }
    P.ng = function (a) {
        if (this.oa && this.oa != a) throw e("Method not supported");
        zy.k.ng[G](this, a)
    };
    P.t = function () {
        this.g = this.b[Ic](Sl)
    };
    P.pa = function (a) {
        Gy(this, a)
    };

    function Gy(a, b, c) {
        if (a.R) throw e(Sh);
        a.g || a.t();
        b ? b[cc](a.g, c || null) : a.b.B[D][p](a.g);
        a.oa && !a.oa.R || a.M()
    }

    function Hy(a, b) {
        if (a.R) throw e(Sh);
        if (b && a.cg(b)) {
            a.Ch = !0;
            var c = vu(b);
            a.b && a.b.B == c || (a.b = tu(b));
            a.za(b);
            a.M()
        } else throw e("Invalid element to decorate");
    }
    P.cg = Qr(!0);
    P.za = Or(Am);
    P.M = function () {
        this.R = !0;
        Iy(this, function (a) {
            !a.R && a.h() && a.M()
        })
    };
    P.X = function () {
        Iy(this, function (a) {
            a.R && a.X()
        });
        this.D && Kw(this.D);
        this.R = !1
    };
    P.p = function () {
        this.R && this.X();
        this.D && (this.D.z(), delete this.D);
        Iy(this, function (a) {
            a.z()
        });
        !this.Ch && this.g && Qu(this.g);
        this.oa = this.bg = this.g = this.va = this.Da = null;
        zy.k.p[G](this)
    };

    function $(a, b) {
        return Cy(a) + hg + b
    }
    P.vd = function (a, b) {
        this.pg(a, Jy(this), b)
    };
    P.pg = function (a, b, c) {
        if (a.R && (c || !this.R)) throw e(Sh);
        if (0 > b || b > Jy(this)) throw e("Child component index out of bounds");
        this.va && this.Da || (this.va = {}, this.Da = []);
        if (a.oa == this) {
            var d = Cy(a);
            this.va[d] = a;
            wt(this.Da, a)
        } else It(this.va, Cy(a), a);
        Fy(a, this);
        zt(this.Da, b, 0, a);
        a.R && this.R && a.oa == this ? (c = this.De(), c[cc](a.h(), c[od][b] || null)) : c ? (this.g || this.t(), b = Ky(this, b + 1), Gy(a, this.De(), b ? b.g : null)) : this.R && (!a.R && a.g && a.g[K] && 1 == a.g[K][x]) && a.M()
    };
    P.De = Pr(Am);

    function Ly(a) {
        null == a.Be && (a.Be = Cv(a.R ? a.g : a.b.B[D]));
        return a.Be
    }

    function Jy(a) {
        return a.Da ? a.Da[s] : 0
    }

    function Ky(a, b) {
        return a.Da ? a.Da[b] || null : null
    }

    function Iy(a, b, c) {
        a.Da && pt(a.Da, b, c)
    }

    function My(a, b) {
        return a.Da && b ? ot(a.Da, b) : -1
    }
    P.removeChild = function (a, b) {
        if (a) {
            var c = Zr(a) ? a : Cy(a);
            a = this.va && c ? (c in this.va ? this.va[c] : void 0) || null : null;
            if (c && a) {
                var d = this.va;
                c in d && delete d[c];
                wt(this.Da, a);
                b && (a.X(), a.g && Qu(a.g));
                Fy(a, null)
            }
        }
        if (!a) throw e("Child is not in parent component");
        return a
    };
    P.Kd = function (a) {
        for (var b = []; this.Da && 0 != this.Da[s];) b[r](this[rc](Ky(this, 0), a));
        return b
    };

    function Ny(a, b) {
        Lw[G](this);
        a && Oy(this, a, b)
    }
    S(Ny, Lw);
    P = Ny[u];
    P.g = null;
    P.Ke = null;
    P.og = null;
    P.Le = null;
    P.Sa = -1;
    P.Sb = -1;
    P.wg = !1;
    var Py = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Qy = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }, Ry = U || W && X(Eg),
        Sy = Rt && Yt;
    P = Ny[u];
    P.qk = function (a) {
        W && (17 == this.Sa && !a[Pb] || 18 == this.Sa && !a[nb] || Rt && 91 == this.Sa && !a[dc]) && (this.Sb = this.Sa = -1); - 1 == this.Sa && (a[Pb] && 17 != a[H] ? this.Sa = 17 : a[nb] && 18 != a[H] ? this.Sa = 18 : a[dc] && 91 != a[H] && (this.Sa = 91));
        if (Ry && !Ow(a[H], this.Sa, a[pd], a[Pb], a[nb])) this[bd](a);
        else this.Sb = Yt ? Qw(a[H]) : a[H], Sy && (this.wg = a[nb])
    };
    P.rk = function (a) {
        this.Sb = this.Sa = -1;
        this.wg = a[nb]
    };
    P.handleEvent = function (a) {
        var b = a.nb,
            c, d, f = b[nb];
        U && a[gd] == Mn ? (c = this.Sb, d = 13 != c && 27 != c ? b[H] : 0) : W && a[gd] == Mn ? (c = this.Sb, d = 0 <= b[Bc] && 63232 > b[Bc] && Pw(c) ? b[Bc] : 0) : Xt ? (c = this.Sb, d = Pw(c) ? b[H] : 0) : (c = b[H] || this.Sb, d = b[Bc] || 0, Sy && (f = this.wg), Rt && (63 == d && 224 == c) && (c = 191));
        var g = c,
            h = b.keyIdentifier;
        c ? 63232 <= c && c in Py ? g = Py[c] : 25 == c && a[pd] && (g = 9) : h && h in Qy && (g = Qy[h]);
        a = g == this.Sa;
        this.Sa = g;
        b = new Ty(g, d, a, b);
        ra(b, f);
        this[A](b)
    };
    P.h = Pr(Am);

    function Oy(a, b, c) {
        a.Le && a[fd]();
        a.g = b;
        a.Ke = pw(a.g, Mn, a, c);
        a.og = pw(a.g, Ln, a.qk, c, a);
        a.Le = pw(a.g, Nn, a.rk, c, a)
    }
    Xa(P, function () {
        this.Ke && (yw(this.Ke), yw(this.og), yw(this.Le), this.Le = this.og = this.Ke = null);
        this.g = null;
        this.Sb = this.Sa = -1
    });
    P.p = function () {
        Ny.k.p[G](this);
        this[fd]()
    };

    function Ty(a, b, c, d) {
        d && ew(this, d, void 0);
        Ya(this, Kn);
        Ra(this, a);
        this.charCode = b;
        this.repeat = c
    }
    S(Ty, dw);
    var Uy;

    function Vy(a, b) {
        b ? a[Wc](zp, b) : a[ud](zp)
    }

    function Wy(a, b, c) {
        Yr(c) && (c = c[M](O));
        var d = ok + b;
        if (c === N || void 0 == c) Uy || (Uy = {
            atomic: !1,
            autocomplete: wo,
            dropeffect: wo,
            haspopup: !1,
            live: Do,
            multiline: !1,
            multiselectable: !1,
            orientation: pr,
            readonly: !1,
            relevant: Tj,
            required: !1,
            sort: wo,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: km
        }), c = Uy, b in c ? a[Wc](d, c[b]) : a[ud](d);
        else a[Wc](d, c)
    };

    function Xy() {}
    var Yy;
    Ur(Xy);
    P = Xy[u];
    P.Gc = Nr();
    P.t = function (a) {
        var b = a.b.t(Sl, Zy(this, a)[M](O), a.ab());
        $y(this, a, b);
        return b
    };
    P.ic = function (a) {
        return a
    };

    function az(a, b, c) {
        if (a = a.h ? a.h() : a)
            if (U && !X(Gg)) {
                var d = bz(Y.S(a), b);
                d[r](b);
                hs(c ? Y.add : Y[Cc], a)[id](null, d)
            } else Y.Zf(a, b, c)
    }
    P.Xf = Qr(!0);
    P.lb = function (a, b) {
        b.id && Dy(a, b.id);
        var c = this.ic(b);
        c && c[I] ? cz(a, c[I][zd] ? yt(c[od]) : c[I]) : a.jc = null;
        var d = 0,
            f = this.da(),
            g = this.da(),
            h = !1,
            l = !1,
            c = !1,
            q = Y.S(b);
        pt(q, function (a) {
            h || a != f ? l || a != g ? d |= this.kg(a) : l = !0 : (h = !0, g == f && (l = !0))
        }, this);
        a.ga = d;
        h || (q[r](f), g == f && (l = !0));
        l || q[r](g);
        var v = a.Gf;
        v && q[r][id](q, v);
        if (U && !X(Gg)) {
            var t = bz(q);
            0 < t[s] && (q[r][id](q, t), c = !0)
        }
        h && l && !v && !c || Y.L(b, q[M](O));
        $y(this, a, b);
        return b
    };
    P.ph = function (a) {
        Ly(a) && this.mg(a.h(), !0);
        a.Z() && this.Ec(a, a.H())
    };

    function $y(a, b, c) {
        b.H() || Wy(c, kn, !b.H());
        b.Z() || a.eb(c, 1, !b.Z());
        b.ja & 8 && a.eb(c, 8, !! (b.ga & 8));
        b.ja & 16 && a.eb(c, 16, !! (b.ga & 16));
        b.ja & 64 && a.eb(c, 64, b.isOpen())
    }
    P.oe = function (a, b) {
        Mv(a, !b, !U && !Xt)
    };
    P.mg = function (a, b) {
        az(a, this.da() + bg, b)
    };
    P.Rf = function (a) {
        var b;
        return a.ja & 32 && (b = a.h()) ? cv(b) : !1
    };
    P.Ec = function (a, b) {
        var c;
        if (a.ja & 32 && (c = a.h())) {
            if (!b && a.ga & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.ga & 32 && a.kh()
            }
            cv(c) != b && dv(c, b)
        }
    };
    P.A = function (a, b) {
        Jv(a, b);
        a && Wy(a, kn, !b)
    };
    P.td = function (a, b, c) {
        var d = a.h();
        if (d) {
            var f = this.zd(b);
            f && az(a, f, c);
            this.eb(d, b, c)
        }
    };
    P.eb = function (a, b, c) {
        Yy || (Yy = {
            1: Ql,
            8: Jp,
            16: hl,
            64: hm
        });
        (b = Yy[b]) && Wy(a, b, c)
    };
    P.Oa = function (a, b) {
        var c = this.ic(a);
        if (c && (Nu(c), b))
            if (Zr(b)) $u(c, b);
            else {
                var d = function (a) {
                    if (a) {
                        var b = vu(c);
                        c[p](Zr(a) ? b[Wb](a) : a)
                    }
                };
                Xr(b) ? pt(b, d) : !Yr(b) || uo in b ? d(b) : pt(yt(b), d)
            }
    };
    P.da = Qr("goog-control");

    function Zy(a, b) {
        var c = a.da(),
            d = [c],
            f = a.da();
        f != c && d[r](f);
        c = b.ga;
        for (f = []; c;) {
            var g = c & -c;
            f[r](a.zd(g));
            c &= ~g
        }
        d[r][id](d, f);
        (c = b.Gf) && d[r][id](d, c);
        U && !X(Gg) && d[r][id](d, bz(d));
        return d
    }

    function bz(a, b) {
        var c = [];
        b && (a = a[Ub]([b]));
        pt([], function (d) {
            !tt(d, hs(vt, a)) || b && !vt(d, b) || c[r](d[M](xj))
        });
        return c
    }
    P.zd = function (a) {
        this.a || dz(this);
        return this.a[a]
    };
    P.kg = function (a) {
        if (!this.c) {
            this.a || dz(this);
            var b = this.a,
                c = {}, d;
            for (d in b) c[b[d]] = d;
            this.c = c
        }
        a = ea(this.c[a], 10);
        return ma(a) ? 0 : a
    };

    function dz(a) {
        var b = a.da();
        a.a = {
            1: b + Pf,
            2: b + Uf,
            4: b + Lf,
            8: b + cg,
            16: b + Nf,
            32: b + Rf,
            64: b + ag
        }
    };

    function ez(a, b) {
        if (!a) throw e("Invalid class name " + a);
        if (!as(b)) throw e("Invalid decorator function " + b);
        fz[a] = b
    }
    var gz = {}, fz = {};

    function hz(a, b, c) {
        zy[G](this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = cs(b);
                if (d = gz[d]) break;
                b = b.k ? b.k.constructor : null
            }
            b = d ? as(d.qa) ? d.qa() : new d : null
        }
        this.a = b;
        this.jc = a
    }
    S(hz, zy);
    P = hz[u];
    P.jc = null;
    P.ga = 0;
    P.ja = 39;
    P.wb = 255;
    P.Ed = 0;
    P.la = !0;
    P.Gf = null;
    P.Df = !0;
    P.ne = !1;

    function iz(a, b) {
        a.R && b != a.Df && jz(a, b);
        a.Df = b
    }
    P.t = function () {
        var a = this.a.t(this);
        this.g = a;
        var b = this.a.Gc();
        b && Vy(a, b);
        this.ne || this.a.oe(a, !1);
        this.H() || this.a.A(a, !1)
    };
    P.De = function () {
        return this.a.ic(this.h())
    };
    P.cg = function (a) {
        return this.a.Xf(a)
    };
    P.za = function (a) {
        this.g = a = this.a.lb(this, a);
        var b = this.a.Gc();
        b && Vy(a, b);
        this.ne || this.a.oe(a, !1);
        this.la = a[C][xd] != wo
    };
    P.M = function () {
        hz.k.M[G](this);
        this.a.ph(this);
        if (this.ja & -2 && (this.Df && jz(this, !0), this.ja & 32)) {
            var a = this.h();
            if (a) {
                var b = this.c || (this.c = new Ny);
                Oy(b, a);
                Z(this).l(b, Kn, this.Pa).l(a, um, this.Dj).l(a, Jk, this.kh)
            }
        }
    };

    function jz(a, b) {
        var c = Z(a),
            d = a.h();
        b ? (c.l(d, ko, a.jg).l(d, ho, a.Ge).l(d, lo, a.yd).l(d, jo, a.ig), a.Ad != Tr && c.l(d, Gl, a.Ad), U && c.l(d, Ll, a.Th)) : (c.T(d, ko, a.jg).T(d, ho, a.Ge).T(d, lo, a.yd).T(d, jo, a.ig), a.Ad != Tr && c.T(d, Gl, a.Ad), U && c.T(d, Ll, a.Th))
    }
    P.X = function () {
        hz.k.X[G](this);
        this.c && this.c[fd]();
        this.H() && this.Z() && this.a.Ec(this, !1)
    };
    P.p = function () {
        hz.k.p[G](this);
        this.c && (this.c.z(), delete this.c);
        delete this.a;
        this.Gf = this.jc = null
    };
    P.ab = Pr("jc");
    P.Oa = function (a) {
        this.a.Oa(this.h(), a);
        this.jc = a
    };

    function cz(a, b) {
        a.jc = b
    }
    P.sb = function () {
        var a = this.ab();
        if (!a) return N;
        a = Zr(a) ? a : Xr(a) ? rt(a, gv)[M](N) : ev(a);
        return Vs(a)
    };
    P.$h = function (a) {
        this.Oa(a)
    };
    P.H = Pr("la");
    P.A = function (a, b) {
        if (b || this.la != a && this[A](a ? Lp : ln)) {
            var c = this.h();
            c && this.a.A(c, a);
            this.Z() && this.a.Ec(this, a);
            this.la = a;
            return !0
        }
        return !1
    };
    P.Z = function () {
        return !(this.ga & 1)
    };
    P.Ga = function (a) {
        var b = this.oa;
        b && typeof b.Z == zm && !b.Z() || !kz(this, 1, !a) || (a || (this[Hd](!1), this.La(!1)), this.H() && this.a.Ec(this, a), lz(this, 1, !a))
    };
    P.La = function (a) {
        kz(this, 2, a) && lz(this, 2, a)
    };
    P.setActive = function (a) {
        kz(this, 4, a) && lz(this, 4, a)
    };
    P.isOpen = function () {
        return !!(this.ga & 64)
    };

    function mz(a, b) {
        kz(a, 64, b) && lz(a, 64, b)
    }

    function lz(a, b, c) {
        a.ja & b && c != !! (a.ga & b) && (a.a.td(a, b, c), a.ga = c ? a.ga | b : a.ga & ~b)
    }

    function nz(a, b, c) {
        if (a.R && a.ga & b && !c) throw e(Sh);
        !c && a.ga & b && lz(a, b, !1);
        a.ja = c ? a.ja | b : a.ja & ~b
    }

    function oz(a, b) {
        return !!(a.wb & b) && !! (a.ja & b)
    }

    function kz(a, b, c) {
        return !!(a.ja & b) && !! (a.ga & b) != c && (!(a.Ed & b) || a[A](By(b, c))) && !a.Gb
    }
    P.jg = function (a) {
        !pz(a, this.h()) && (this[A](dm) && this.Z() && oz(this, 2)) && this.La(!0)
    };
    P.ig = function (a) {
        !pz(a, this.h()) && this[A](Sn) && (oz(this, 4) && this[Hd](!1), oz(this, 2) && this.La(!1))
    };
    P.Ad = Tr;

    function pz(a, b) {
        return !!a[Ab] && Uu(b, a[Ab])
    }
    P.Ge = function (a) {
        this.Z() && (oz(this, 2) && this.La(!0), gw(a) && (oz(this, 4) && this[Hd](!0), this.a.Rf(this) && this.h()[Fc]()));
        !this.ne && gw(a) && a[ac]()
    };
    P.yd = function (a) {
        this.Z() && (oz(this, 2) && this.La(!0), this.ga & 4 && (this.Mc(a) && oz(this, 4)) && this[Hd](!1))
    };
    P.Th = function (a) {
        this.Z() && this.Mc(a)
    };
    P.Mc = function (a) {
        if (oz(this, 16)) {
            var b = !(this.ga & 16);
            kz(this, 16, b) && lz(this, 16, b)
        }
        oz(this, 8) && kz(this, 8, !0) && lz(this, 8, !0);
        oz(this, 64) && mz(this, !this.isOpen());
        b = new cw(Hj, this);
        a && (ra(b, a[nb]), b.ctrlKey = a[Pb], b.metaKey = a[dc], b.shiftKey = a[pd], b.ug = a.ug);
        return this[A](b)
    };
    P.Dj = function () {
        oz(this, 32) && kz(this, 32, !0) && lz(this, 32, !0)
    };
    P.kh = function () {
        oz(this, 4) && this[Hd](!1);
        oz(this, 32) && kz(this, 32, !1) && lz(this, 32, !1)
    };
    P.Pa = function (a) {
        return this.H() && this.Z() && this.xd(a) ? (a[ac](), a[Xb](), !0) : !1
    };
    P.xd = function (a) {
        return 13 == a[H] && this.Mc(a)
    };
    if (!as(hz)) throw e("Invalid component class " + hz);
    if (!as(Xy)) throw e("Invalid renderer class " + Xy);
    var qz = cs(hz);
    gz[qz] = Xy;
    ez("goog-control", function () {
        return new hz(null)
    });

    function rz() {
        this.b = []
    }
    S(rz, Xy);
    Ur(rz);

    function sz(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.da() + Sf;
                break;
            case 1:
                c = a.da() + Mf;
                break;
            case 2:
                c = a.da() + Of
            }
            a.b[b] = c
        }
        return c
    }
    P = rz[u];
    P.Gc = Qr("menuitem");
    P.t = function (a) {
        var b = a.b.t(Sl, Zy(this, a)[M](O), tz(this, a.ab(), a.b));
        uz(this, a, b, !! (a.ja & 8) || !! (a.ja & 16));
        $y(this, a, b);
        return b
    };
    P.ic = function (a) {
        return a && a[I]
    };
    P.lb = function (a, b) {
        var c = void 0 != b.firstElementChild ? b.firstElementChild : Tu(b[I], !0),
            d = sz(this, 2);
        c && Y.Ia(c, d) || b[p](tz(this, b[od], a.b));
        Y.Ia(b, Jm) && (nz(a, 16, !0), (c = a.h()) && vz(a.a, a, c), vz(this, a, b));
        return rz.k.lb[G](this, a, b)
    };
    P.Oa = function (a, b) {
        var c = this.ic(a),
            d = wz(this, a) ? c[I] : null;
        rz.k.Oa[G](this, a, b);
        d && !wz(this, a) && c[cc](d, c[I] || null)
    };

    function tz(a, b, c) {
        a = sz(a, 2);
        return c.t(Sl, a, b)
    }

    function vz(a, b, c) {
        c && (Vy(c, fo), uz(a, b, c, !0))
    }

    function wz(a, b) {
        var c = a.ic(b);
        if (c) {
            var c = c[I],
                d = sz(a, 1);
            return !!c && Y.Ia(c, d)
        }
        return !1
    }

    function uz(a, b, c, d) {
        if (d != wz(a, c))
            if (Y.Zf(c, Jm, d), c = a.ic(c), d) a = sz(a, 1), c[cc](b.b.t(Sl, a), c[I] || null);
            else c[rc](c[I])
    }
    P.zd = function (a) {
        switch (a) {
        case 2:
            return sz(this, 0);
        case 16:
        case 8:
            return Km;
        default:
            return rz.k.zd[G](this, a)
        }
    };
    P.kg = function (a) {
        var b = sz(this, 0);
        switch (a) {
        case Km:
            return 16;
        case b:
            return 2;
        default:
            return rz.k.kg[G](this, a)
        }
    };
    P.da = Qr("goog-menuitem");

    function xz(a, b, c, d) {
        hz[G](this, a, d || rz.qa(), c);
        this.Ba(b)
    }
    S(xz, hz);
    P = xz[u];
    P.ma = function () {
        var a = this.bg;
        return null != a ? a : this.sb()
    };
    P.Ba = Or("bg");
    P.sb = function () {
        var a = this.ab();
        return Xr(a) ? (a = rt(a, function (a) {
            var c = Y.S(a);
            return vt(c, Gm) || vt(c, Hm) ? N : gv(a)
        })[M](N), Vs(a)) : xz.k.sb[G](this)
    };
    P.yd = function (a) {
        var b = this.oa;
        if (b) {
            var c = b.W;
            b.W = null;
            if (b = c && $r(a[Ld])) b = new T(a[Ld], a[Md]), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        xz.k.yd[G](this, a)
    };
    P.xd = function (a) {
        return a[H] == this.Uh && this.Mc(a) ? !0 : xz.k.xd[G](this, a)
    };
    P.pk = Pr("Uh");
    ez("goog-menuitem", function () {
        return new xz(null)
    });

    function yz(a, b) {
        var c;
        if (a instanceof yz) this.oc = Wr(b) ? b : a.oc, zz(this, a.Ic), this.Ae = a.Ae, this.wd = a.wd, Az(this, a.ze), this.ye = a.ye, Bz(this, a.a.U()), this.xe = a.xe;
        else if (a && (c = by(ga(a)))) {
            this.oc = !! b;
            zz(this, c[1] || N, !0);
            var d = c[2] || N;
            this.Ae = d ? la(d) : N;
            this.wd = (d = c[3] || N) ? la(d) : N;
            Az(this, c[4]);
            this.ye = (d = c[5] || N) ? la(d) : N;
            Bz(this, c[6] || N, !0);
            this.xe = (c = c[7] || N) ? la(c) : N
        } else this.oc = !! b, this.a = new Cz(null, 0, this.oc)
    }
    P = yz[u];
    P.Ic = N;
    P.Ae = N;
    P.wd = N;
    P.ze = null;
    P.ye = N;
    P.xe = N;
    P.oc = !1;
    P.toString = function () {
        var a = [],
            b = this.Ic;
        b && a[r](Dz(b, Ez), Kg);
        if (b = this.wd) {
            a[r](lg);
            var c = this.Ae;
            c && a[r](Dz(c, Ez), Eh);
            a[r](Ys(b));
            b = this.ze;
            null != b && a[r](Kg, ga(b))
        }
        if (b = this.ye) this.wd && b[Vb](0) != kg && a[r](kg), a[r](Dz(b, b[Vb](0) == kg ? Fz : Gz));
        (b = this.a[mb]()) && a[r](Dh, b);
        (b = this.xe) && a[r](Te, Dz(b, Hz));
        return a[M](N)
    };
    P.U = function () {
        return new yz(this)
    };

    function zz(a, b, c) {
        a.Ic = c ? b ? la(b) : N : b;
        a.Ic && (a.Ic = a.Ic[Mb](/:$/, N))
    }

    function Az(a, b) {
        if (b) {
            b = ia(b);
            if (ma(b) || 0 > b) throw e("Bad port number " + b);
            a.ze = b
        } else a.ze = null
    }

    function Bz(a, b, c) {
        b instanceof Cz ? (a.a = b, Iz(a.a, a.oc)) : (c || (b = Dz(b, Jz)), a.a = new Cz(b, 0, a.oc))
    }

    function Kz() {
        return Ss instanceof yz ? Ss.U() : new yz(Ss, void 0)
    }

    function Dz(a, b) {
        return Zr(a) ? encodeURI(a)[Mb](b, Lz) : null
    }

    function Lz(a) {
        a = a[Tc](0);
        return Ze + (a >> 4 & 15)[mb](16) + (a & 15)[mb](16)
    }
    var Ez = /[#\/\?@]/g,
        Gz = /[\#\?:]/g,
        Fz = /[\#\?]/g,
        Jz = /[\#\?@]/g,
        Hz = /#/g;

    function Cz(a, b, c) {
        this.a = a || null;
        this.b = !! c
    }

    function Mz(a) {
        if (!a.ha && (a.ha = new Jx, a.O = 0, a.a))
            for (var b = a.a[Qb]($e), c = 0; c < b[s]; c++) {
                var d = b[c][y](zh),
                    f = null,
                    g = null;
                0 <= d ? (f = b[c][Zc](0, d), g = b[c][Zc](d + 1)) : f = b[c];
                f = Zs(f);
                f = Nz(a, f);
                a.add(f, g ? Zs(g) : N)
            }
    }
    P = Cz[u];
    P.ha = null;
    P.O = null;
    P.add = function (a, b) {
        Mz(this);
        this.a = null;
        a = Nz(this, a);
        var c = this.ha.S(a);
        c || this.ha.L(a, c = []);
        c[r](b);
        this.O++;
        return this
    };
    P.remove = function (a) {
        Mz(this);
        a = Nz(this, a);
        return Lx(this.ha, a) ? (this.a = null, this.O -= this.ha.S(a)[s], this.ha[Cc](a)) : !1
    };
    bb(P, function () {
        this.ha = this.a = null;
        this.O = 0
    });

    function Oz(a, b) {
        Mz(a);
        b = Nz(a, b);
        return Lx(a.ha, b)
    }
    P.$a = function () {
        Mz(this);
        for (var a = this.ha.Qa(), b = this.ha.$a(), c = [], d = 0; d < b[s]; d++)
            for (var f = a[d], g = 0; g < f[s]; g++) c[r](b[d]);
        return c
    };
    P.Qa = function (a) {
        Mz(this);
        var b = [];
        if (a) Oz(this, a) && (b = xt(b, this.ha.S(Nz(this, a))));
        else {
            a = this.ha.Qa();
            for (var c = 0; c < a[s]; c++) b = xt(b, a[c])
        }
        return b
    };
    P.L = function (a, b) {
        Mz(this);
        this.a = null;
        a = Nz(this, a);
        Oz(this, a) && (this.O -= this.ha.S(a)[s]);
        this.ha.L(a, [b]);
        this.O++;
        return this
    };
    P.S = function (a, b) {
        var c = a ? this.Qa(a) : [];
        return 0 < c[s] ? ga(c[0]) : b
    };

    function Pz(a, b, c) {
        a[Cc](b);
        0 < c[s] && (a.a = null, a.ha.L(Nz(a, b), yt(c)), a.O += c[s])
    }
    P.toString = function () {
        if (this.a) return this.a;
        if (!this.ha) return N;
        for (var a = [], b = this.ha.$a(), c = 0; c < b[s]; c++)
            for (var d = b[c], f = Ys(d), d = this.Qa(d), g = 0; g < d[s]; g++) {
                var h = f;
                d[g] !== N && (h += zh + Ys(d[g]));
                a[r](h)
            }
        return this.a = a[M]($e)
    };
    P.U = function () {
        var a = new Cz;
        a.a = this.a;
        this.ha && (a.ha = this.ha.U(), a.O = this.O);
        return a
    };

    function Nz(a, b) {
        var c = ga(b);
        a.b && (c = c[Kd]());
        return c
    }

    function Iz(a, b) {
        b && !a.b && (Mz(a), a.a = null, Ox(a.ha, function (a, b) {
            var f = b[Kd]();
            b != f && (this[Cc](b), Pz(this, f, a))
        }, a));
        a.b = b
    }
    P.extend = function (a) {
        for (var b = 0; b < arguments[s]; b++) Ox(arguments[b], function (a, b) {
            this.add(b, a)
        }, this)
    };
    var Qz;

    function Rz(a, b) {
        Xr(b) || (b = [b]);
        var c = rt(b, function (a) {
            return Zr(a) ? a : a.al + O + a.bc + Ep + a.bl + O + a.Za + Dp
        });
        Sz(a, c[M](Af))
    }

    function Tz() {
        if (!Wr(Qz))
            if (U) Qz = X(xg);
            else {
                var a = m[Ic](Sl),
                    b = W ? fg : Yt ? Vf : U ? Xf : Xt ? Zf : null;
                Fa(a, hh + (b ? b + dg : N) + Tq);
                a = a[I];
                b = a[C][kt(Sq)];
                Qz = ("undefined" !== typeof b ? b : a[C][sv(a, Sq)] || N) != N
            }
        return Qz
    }

    function Sz(a, b) {
        qv(a, Sq, b)
    };

    function Uz(a, b, c, d, f) {
        wx[G](this);
        this.g = a;
        this.m = b;
        this.o = c;
        this.e = d;
        this.n = Xr(f) ? f : [f]
    }
    S(Uz, wx);
    P = Uz[u];
    P.play = function () {
        if (1 == this.a) return !1;
        this.c();
        this.bb(Wo);
        this.b = is();
        this.a = 1;
        if (Tz()) return qv(this.g, this.o), this.j = Rw(this.fj, void 0, this), !0;
        this.hf(!1);
        return !1
    };
    P.fj = function () {
        Rz(this.g, this.n);
        qv(this.g, this.e);
        this.j = Rw(R(this.hf, this, !1), 1E3 * this.m)
    };
    qa(P, function () {
        1 == this.a && this.hf(!0)
    });
    P.hf = function (a) {
        Sz(this.g, N);
        Sw(this.j);
        qv(this.g, this.e);
        this.f = is();
        this.a = 0;
        a ? this.Kb() : this.bb(om);
        this.d()
    };
    P.p = function () {
        this[lb]();
        Uz.k.p[G](this)
    };

    function Vz(a, b, c, d, f, g, h, l, q) {
        var v = Wz(c),
            t = Iv(a),
            B = Av(a);
        if (B) {
            var z = new pv(B[E], B.top, B[Pd] - B[E], B[J] - B.top),
                B = n.max(t[E], z[E]),
                V = n.min(t[E] + t[w], z[E] + z[w]);
            if (B <= V) {
                var ha = n.max(t.top, z.top),
                    z = n.min(t.top + t[L], z.top + z[L]);
                ha <= z && (Ka(t, B), t.top = ha, ya(t, V - B), eb(t, z - ha))
            }
        }
        B = tu(a);
        ha = tu(c);
        B.B != ha.B && (V = B.B[D], ha = Dv(V, ha.B[kd] || ha.B[sd]), ha = Bt(ha, Bv(V)), U && !hv(B) && (ha = Bt(ha, iv(B))), Ka(t, t[E] + ha.x), t.top += ha.y);
        a = (b & 4 && Cv(a) ? b ^ 2 : b) & -5;
        t = new T(a & 2 ? t[E] + t[w] : t[E], a & 1 ? t.top + t[L] : t.top);
        t = Bt(t, v);
        f && (t.x +=
            (a & 2 ? -1 : 1) * f.x, t.y += (a & 1 ? -1 : 1) * f.y);
        var ba;
        if (h)
            if (q) ba = q;
            else if (ba = Av(c)) ba.top -= v.y, hb(ba, ba[Pd] - v.x), Ua(ba, ba[J] - v.y), Ka(ba, ba[E] - v.x);
        return Xz(t, c, d, g, ba, h, l)
    }

    function Wz(a) {
        var b;
        if (a = a.offsetParent) {
            var c = a[qd] == fi || a[qd] == Lh;
            c && uv(a, Xo) == Up || (b = Bv(a), c || (c = (c = Cv(a)) && Yt ? -a[Sc] : !c || U && X(Ig) || uv(a, No) == rr ? a[Sc] : a.scrollWidth - a[Gb] - a[Sc], b = Bt(b, new T(c, a[jb]))))
        }
        return b || new T
    }

    function Xz(a, b, c, d, f, g, h) {
        a = a.U();
        var l = 0,
            q = (c & 4 && Cv(b) ? c ^ 2 : c) & -5;
        c = Gv(b);
        h = h ? h.U() : c.U();
        if (d || 0 != q) q & 2 ? a.x -= h[w] + (d ? d[Pd] : 0) : d && (a.x += d[E]), q & 1 ? a.y -= h[L] + (d ? d[J] : 0) : d && (a.y += d.top);
        if (g && (f ? (l = a, d = 0, 65 == (g & 65) && (l.x < f[E] || l.x >= f[Pd]) && (g &= -2), 132 == (g & 132) && (l.y < f.top || l.y >= f[J]) && (g &= -5), l.x < f[E] && g & 1 && (l.x = f[E], d |= 1), l.x < f[E] && (l.x + h[w] > f[Pd] && g & 16) && (ya(h, n.max(h[w] - (l.x + h[w] - f[Pd]), 0)), d |= 4), l.x + h[w] > f[Pd] && g & 1 && (l.x = n.max(f[Pd] - h[w], f[E]), d |= 1), g & 2 && (d |= (l.x < f[E] ? 16 : 0) | (l.x + h[w] > f[Pd] ? 32 : 0)),
            l.y < f.top && g & 4 && (l.y = f.top, d |= 2), l.y <= f.top && (l.y + h[L] < f[J] && g & 32) && (eb(h, n.max(h[L] - (f.top - l.y), 0)), l.y = f.top, d |= 8), l.y >= f.top && (l.y + h[L] > f[J] && g & 32) && (eb(h, n.max(h[L] - (l.y + h[L] - f[J]), 0)), d |= 8), l.y + h[L] > f[J] && g & 4 && (l.y = n.max(f[J] - h[L], f.top), d |= 2), g & 8 && (d |= (l.y < f.top ? 64 : 0) | (l.y + h[L] > f[J] ? 128 : 0)), l = d) : l = 256, l & 496)) return l;
        vv(b, a);
        c == h || c && h && c[w] == h[w] && c[L] == h[L] || (f = hv(tu(vu(b))), !U || f && X(Ig) ? Pv(b, h, Mk) : (a = b[C], f ? (f = Qv(b), b = Rv(b), Aa(a, h[w] - b[E] - f[E] - f[Pd] - b[Pd]), Oa(a, h[L] - b.top - f.top - f[J] - b[J])) :
            (Aa(a, h[w]), Oa(a, h[L]))));
        return l
    };

    function Yz() {}
    Yz[u].b = Nr();

    function Zz(a, b, c) {
        this.c = a;
        this.d = b;
        this.C = c
    }
    S(Zz, Yz);
    Zz[u].b = function (a, b, c) {
        Vz(this.c, this.d, a, b, void 0, c, this.C)
    };

    function $z(a, b) {
        this.a = a instanceof T ? a : new T(a, b)
    }
    S($z, Yz);
    $z[u].b = function (a, b, c, d) {
        Vz(xv(a), 0, a, b, this.a, c, null, d)
    };

    function aA(a, b, c, d) {
        Zz[G](this, a, b);
        this.j = c ? 5 : 0;
        this.e = d || void 0
    }
    S(aA, Zz);
    aA[u].f = Or("j");
    aA[u].b = function (a, b, c, d) {
        var f = Vz(this.c, this.d, a, b, null, c, 10, d, this.e);
        if (f & 496) {
            var g = bA(f, this.d);
            b = bA(f, b);
            f = Vz(this.c, g, a, b, null, c, 10, d, this.e);
            f & 496 && (g = bA(f, g), b = bA(f, b), Vz(this.c, g, a, b, null, c, this.j, d, this.e))
        }
    };

    function bA(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };

    function cA(a, b) {
        this.a = a instanceof T ? a : new T(a, b)
    }
    S(cA, Yz);
    cA[u].b = function (a, b, c, d) {
        var f;
        f = vu(a);
        var g = f[D];
        f = f[Nd];
        f = new T(g[Sc] || f[Sc], g[jb] || f[jb]);
        g = this.a.x + f.x;
        f = this.a.y + f.y;
        var h = Wz(a),
            g = g - h.x;
        f -= h.y;
        Xz(new T(g, f), a, b, c, null, null, d)
    };

    function dA(a, b) {
        cA[G](this, a, b)
    }
    S(dA, cA);
    dA[u].c = 0;
    dA[u].f = Or("c");
    dA[u].b = function (a, b, c, d) {
        var f = xv(a),
            f = Av(f),
            g;
        g = tu(a);
        g = Eu(g.B);
        g = new T(this.a.x + g[Sc], this.a.y + g[jb]);
        var h = b,
            l = Xz(g, a, h, c, f, 10, d);
        if (0 != (l & 496)) {
            if (l & 16 || l & 32) h ^= 2;
            if (l & 64 || l & 128) h ^= 1;
            l = Xz(g, a, h, c, f, 10, d);
            0 != (l & 496) && Xz(g, a, b, c, f, this.c, d)
        }
    };

    function eA(a, b) {
        this.m = b || void 0;
        Tw[G](this, a)
    }
    S(eA, Tw);
    eA[u].setPosition = function (a) {
        this.m = a || void 0;
        this.H() && this.rb()
    };
    eA[u].rb = function () {
        if (this.m) {
            var a = !this.H() && this.Fc != mo,
                b = this.h();
            a && (ib(b[C], kn), Jv(b, !0));
            this.m.b(b, 4, this.$d);
            a && Jv(b, !1)
        }
    };

    function fA(a, b, c) {
        this.Ma = c || (a ? tu(wu(a)) : tu());
        eA[G](this, this.Ma.t(Sl, {
            style: Yo
        }));
        this.Fb = new T(1, 1);
        this.o = new Px;
        a && gA(this, a);
        null != b && this.jb(b)
    }
    S(fA, eA);
    var hA = [];
    P = fA[u];
    P.Ca = null;
    xa(P, "goog-tooltip");
    P.uf = 500;
    P.Af = 0;

    function gA(a, b) {
        b = wu(b);
        a.o.add(b);
        pw(b, ko, a.tg, !1, a);
        pw(b, jo, a.Pc, !1, a);
        pw(b, io, a.bi, !1, a);
        pw(b, um, a.ai, !1, a);
        pw(b, Jk, a.Pc, !1, a)
    }
    Xa(P, function (a) {
        if (a) a = wu(a), iA(this, a), this.o[Cc](a);
        else {
            for (var b = this.o.Qa(), c = 0; a = b[c]; c++) iA(this, a);
            this.o[ld]()
        }
    });

    function iA(a, b) {
        ww(b, ko, a.tg, !1, a);
        ww(b, jo, a.Pc, !1, a);
        ww(b, io, a.bi, !1, a);
        ww(b, um, a.ai, !1, a);
        ww(b, Jk, a.Pc, !1, a)
    }
    P.jb = function (a) {
        $u(this.h(), a)
    };
    P.Cc = function (a) {
        var b = this.h();
        b && Qu(b);
        fA.k.Cc[G](this, a);
        a && (b = this.Ma.B[D], b[cc](a, b[wc]))
    };
    P.ua = function () {
        return ev(this.h())
    };

    function jA(a) {
        return a.w ? a.H() ? 4 : 1 : a.W ? 3 : a.H() ? 2 : 0
    }
    P.Ff = function () {
        if (!Tw[u].Ff[G](this)) return !1;
        if (this.a)
            for (var a, b = 0; a = hA[b]; b++) Uu(a.h(), this.a) || a.A(!1);
        vt(hA, this) || hA[r](this);
        a = this.h();
        xa(a, this[zb]);
        kA(this);
        pw(a, ko, this.se, !1, this);
        pw(a, jo, this.re, !1, this);
        lA(this);
        return !0
    };
    P.Nf = function () {
        wt(hA, this);
        for (var a = this.h(), b, c = 0; b = hA[c]; c++) b.a && Uu(a, b.a) && b.A(!1);
        this.Fh && mA(this.Fh);
        ww(a, ko, this.se, !1, this);
        ww(a, jo, this.re, !1, this);
        this.a = void 0;
        0 == jA(this) && (this.Na = !1);
        Tw[u].Nf[G](this)
    };
    P.gg = function (a, b) {
        this.a == a && this.o[hd](this.a) && (this.Na || !this.Jk ? (this.A(!1), this.H() || (this.a = a, this[rd](b || nA(this, 0)), this.A(!0))) : this.a = void 0);
        this.w = void 0
    };

    function oA(a, b) {
        gA(a, b);
        a.Ca = b;
        a.a = b;
        a[rd](nA(a, 0));
        a.A(!0)
    }
    P.Vj = function (a) {
        this.W = void 0;
        a == this.a && (null != this.Ca && (this.Ca == this.h() || this.o[hd](this.Ca)) || this.Dh && this.Dh.Ca || this.A(!1))
    };

    function pA(a, b) {
        var c = iv(a.Ma);
        a.Fb.x = b[Ld] + c.x;
        a.Fb.y = b[Md] + c.y
    }
    P.tg = function (a) {
        var b = qA(this, a[F]);
        this.Ca = b;
        kA(this);
        b != this.a && (this.a = b, rA(this, b), sA(this), pA(this, a))
    };

    function qA(a, b) {
        try {
            for (; b && !a.o[hd](b);) b = b[K];
            return b
        } catch (c) {
            return null
        }
    }
    P.bi = function (a) {
        pA(this, a);
        this.Na = !0
    };
    P.ai = function (a) {
        this.Ca = a = qA(this, a[F]);
        this.Na = !0;
        if (this.a != a) {
            this.a = a;
            var b = nA(this, 1);
            kA(this);
            rA(this, a, b);
            sA(this)
        }
    };

    function nA(a, b) {
        if (0 == b) {
            var c = a.Fb.U();
            return new tA(c)
        }
        return new uA(a.Ca)
    }

    function sA(a) {
        if (a.a)
            for (var b, c = 0; b = hA[c]; c++) Uu(b.h(), a.a) && (b.Dh = a, a.Fh = b)
    }
    P.Pc = function (a) {
        var b = qA(this, a[F]),
            c = qA(this, a[Ab]);
        b != c && (b == this.Ca && (this.Ca = null), lA(this), this.Na = !1, !this.H() || a[Ab] && Uu(this.h(), a[Ab]) ? this.a = void 0 : mA(this))
    };
    P.se = function () {
        var a = this.h();
        this.Ca != a && (kA(this), this.Ca = a)
    };
    P.re = function (a) {
        var b = this.h();
        this.Ca != b || a[Ab] && Uu(b, a[Ab]) || (this.Ca = null, mA(this))
    };

    function rA(a, b, c) {
        a.w || (a.w = Rw(R(a.gg, a, b, c), a.uf))
    }

    function lA(a) {
        a.w && (Sw(a.w), a.w = void 0)
    }

    function mA(a) {
        2 == jA(a) && (a.W = Rw(R(a.Vj, a, a.a), a.Af))
    }

    function kA(a) {
        a.W && (Sw(a.W), a.W = void 0)
    }
    P.p = function () {
        this.A(!1);
        lA(this);
        this[fd]();
        this.h() && Qu(this.h());
        this.Ca = null;
        delete this.Ma;
        fA.k.p[G](this)
    };

    function tA(a, b) {
        $z[G](this, a, b)
    }
    S(tA, $z);
    tA[u].b = function (a, b, c) {
        b = xv(a);
        b = Av(b);
        c = c ? new ov(c.top + 10, c[Pd], c[J], c[E] + 10) : new ov(10, 0, 0, 10);
        Xz(this.a, a, 4, c, b, 9) & 496 && Xz(this.a, a, 4, c, b, 5)
    };

    function uA(a) {
        Zz[G](this, a, 3)
    }
    S(uA, Zz);
    uA[u].b = function (a, b, c) {
        var d = new T(10, 0);
        Vz(this.c, this.d, a, b, d, c, 9) & 496 && Vz(this.c, 2, a, 1, d, c, 5)
    };

    function vA(a, b) {
        a[b] || (a[b] = []);
        return a[b]
    }

    function wA(a, b) {
        return a[b] ? a[b][s] : 0
    };

    function xA(a) {
        this.a = a || []
    }

    function yA(a) {
        this.a = a || []
    }

    function zA(a) {
        this.a = a || []
    }

    function AA(a) {
        this.a = a || []
    }

    function BA(a) {
        this.a = a || []
    }

    function CA(a) {
        this.a = a || []
    }

    function DA(a) {
        this.a = a || []
    }

    function EA(a) {
        a = a.a[0];
        return null != a ? a : N
    }

    function FA(a) {
        a = a.a[2];
        return null != a ? a : !1
    }

    function GA(a) {
        a = a.a[3];
        return null != a ? a : !1
    }

    function HA(a) {
        a = a.a[4];
        return null != a ? a : 0
    }

    function IA(a) {
        a = a.a[5];
        return null != a ? a : 0
    }

    function JA(a) {
        a = a.a[0];
        return null != a ? a : N
    }

    function KA(a) {
        a = a.a[1];
        return null != a ? a : 0
    }

    function LA(a) {
        a = a.a[4];
        return null != a ? a : N
    }

    function MA(a, b) {
        return new zA(vA(a.a, 2)[b])
    }

    function NA(a) {
        a = a.a[0];
        return null != a ? a : N
    }

    function OA(a) {
        a = a.a[0];
        return null != a ? a : 0
    }

    function PA(a) {
        a = a.a[1];
        return null != a ? a : 0
    }
    AA[u].setEnd = function (a) {
        this.a[1] = a
    };

    function QA(a) {
        a = a.a[0];
        return null != a ? a : N
    }

    function RA(a) {
        return wA(a.a, 4)
    }

    function SA(a, b) {
        return new xA(vA(a.a, 4)[b])
    };

    function TA() {
        this.b = [];
        this.a = {};
        this.d = !1;
        this.f = 1;
        this.e = {};
        this.c = null;
        pw(k, Gk, this.Si, !1, this)
    }
    Ur(TA);

    function UA(a, b) {
        if (null == b) return tg;
        switch (Vr(b)) {
        case Xp:
            return Ys(b);
        case Ao:
            return N + b;
        case Lk:
            return b ? tg : pg;
        case qk:
            var c = [],
                d;
            for (d in b) c[r](UA(a, b[d]));
            return c[M](Af);
        case Co:
            c = [];
            for (d in b) c[r]([Ys(d), UA(a, b[d])][M](zh));
            return c[M](Af);
        default:
            return N
        }
    }
    P = TA[u];
    P.log = function (a, b, c) {
        this.b[r]([a, b, c]);
        this.d || (this.d = !0, Rw(this.rh, 0, this))
    };
    P.rh = function () {
        for (var a = 0; a < this.b[s]; a++) {
            var b = this.b[a];
            VA(this, b[0], b[1], b[2])
        }
        this.b = [];
        this.d = !1
    };

    function VA(a, b, c, d) {
        var f = a.c ? [nl, a.c, $e][M](N) : N;
        WA(a, (d || N) + ng + f + [Ys(b), UA(a, c)][M](zh))
    }

    function WA(a, b) {
        var c = new Image,
            d = a.f++;
        a.e[d] = c;
        pa(c, Ga(c, function () {
            delete TA.qa().e[d]
        }));
        c.src = b;
        c = null
    }
    P.ge = function (a, b, c, d, f) {
        XA(this, a, d, f);
        Sw(this.a[a][0]);
        b = Rw(R(this.Kh, this, a, c), b);
        this.a[a][0] = b
    };
    P.Kh = function (a, b) {
        VA(this, a, this.a[a][1], b);
        a in this.a && (Sw(this.a[a][0]), delete this.a[a])
    };

    function XA(a, b, c, d) {
        var f = 0,
            g = null;
        b in a.a && (g = a.a[b], f = g[0], g = g[1]);
        if (Vr(c) == Co) {
            Vr(g) != Co && (g = {});
            for (var h in c) g[h] = YA(h in g ? g[h] : null, c[h], d)
        } else g = YA(g, c, d);
        a.a[b] = [f, g]
    }

    function YA(a, b, c) {
        null != b || (b = 1);
        c == Gj ? (ma(a) && (a = ea(a, 10)), ma(b) && (b = ea(b, 10)), a += b) : a = b;
        return a
    }
    P.Si = function () {
        this.rh();
        for (var a in this.a) 0 != this.a[a] && this.Kh(a)
    };

    function ZA() {}
    S(ZA, Wv);
    Zx("goog.dom.SavedRange");
    Wa(ZA[u], function (a) {
        var b = this.b();
        a || this.z();
        return b
    });

    function $A(a, b, c, d, f) {
        this.b = !! b;
        a && this[rd](a, d);
        this.a = void 0 != f ? f : this.ba || 0;
        this.b && (this.a *= -1);
        this.c = !c
    }
    S($A, Gx);
    P = $A[u];
    P.r = null;
    P.ba = 0;
    P.ee = !1;
    P.setPosition = function (a, b, c) {
        if (this.r = a) this.ba = $r(b) ? b : 1 != this.r[x] ? 0 : this.b ? -1 : 1;
        $r(c) && (this.a = c)
    };
    P.zb = function (a) {
        this.r = a.r;
        this.ba = a.ba;
        this.a = a.a;
        this.b = a.b;
        this.c = a.c
    };
    P.U = function () {
        return new $A(this.r, this.b, !this.c, this.ba, this.a)
    };
    P.Jb = function () {
        var a = this.b ? -1 : 1;
        this.ba == a && (this.ba = -1 * a, this.a += this.ba * (this.b ? -1 : 1))
    };
    P.Ha = function () {
        var a;
        if (this.ee) {
            if (!this.r || this.c && 0 == this.a) throw Fx;
            a = this.r;
            var b = this.b ? -1 : 1;
            if (this.ba == b) {
                var c = this.b ? a[wc] : a[I];
                c ? this[rd](c) : this[rd](a, -1 * b)
            } else(c = this.b ? a[kb] : a[zd]) ? this[rd](c) : this[rd](a[K], -1 * b);
            this.a += this.ba * (this.b ? -1 : 1)
        } else this.ee = !0;
        a = this.r;
        if (!this.r) throw Fx;
        return a
    };
    P.splice = function (a) {
        var b = this.r,
            c = this.b ? 1 : -1;
        this.ba == c && (this.ba = -1 * c, this.a += this.ba * (this.b ? -1 : 1));
        this.b = !this.b;
        $A[u].Ha[G](this);
        this.b = !this.b;
        for (var c = Yr(arguments[0]) ? arguments[0] : arguments, d = c[s] - 1; 0 <= d; d--) Pu(c[d], b);
        Qu(b)
    };

    function aB() {}

    function bB(a) {
        if (a.getSelection) return a.getSelection();
        a = a[Nb];
        var b = a.selection;
        if (b) {
            try {
                var c = b[oc]();
                if (c[ed]) {
                    if (c[ed]()[Nb] != a) return null
                } else if (!c[s] || c[bc](0)[Nb] != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }

    function cB(a) {
        for (var b = [], c = 0, d = a.Dc(); c < d; c++) b[r](a.Mb(c));
        return b
    }

    function dB(a) {
        return a.gc() ? a.Q() : a.Y()
    }
    aB[u].gc = Qr(!1);

    function eB(a, b) {
        $A[G](this, a, b, !0)
    }
    S(eB, $A);

    function fB() {}
    S(fB, aB);

    function gB(a, b, c, d, f) {
        var g;
        a && (this.J = a, this.Cd = b, this.I = c, this.Oc = d, 1 == a[x] && a[qd] != Mh && (a = a[od], (b = a[b]) ? (this.J = b, this.Cd = 0) : (a[s] && (this.J = mt(a)), g = !0)), 1 == c[x] && ((this.I = c[od][d]) ? this.Oc = 0 : this.I = c));
        $A[G](this, f ? this.I : this.J, f, !0);
        if (g) try {
            this.Ha()
        } catch (h) {
            if (h != Fx) throw h;
        }
    }
    S(gB, eB);
    P = gB[u];
    P.J = null;
    P.I = null;
    P.Cd = 0;
    P.Oc = 0;
    P.Q = Pr("J");
    P.Y = Pr(gi);
    P.ud = function () {
        return this.ee && this.r == this.I && (!this.Oc || 1 != this.ba)
    };
    P.Ha = function () {
        if (this.ud()) throw Fx;
        return gB.k.Ha[G](this)
    };
    P.Jb = function () {
        gB.k.Jb[id](this);
        if (Uu(this.r, this.I)) throw Fx;
    };
    P.zb = function (a) {
        this.J = a.J;
        this.I = a.I;
        this.Cd = a.Cd;
        this.Oc = a.Oc;
        this.fb = a.fb;
        gB.k.zb[G](this, a)
    };
    P.U = function () {
        var a = new gB(this.J, this.Cd, this.I, this.Oc, this.fb);
        a.zb(this);
        return a
    };

    function hB() {}

    function iB(a, b) {
        var c = b.Fd();
        try {
            return 0 <= a.ob(c, 0, 0) && 0 >= a.ob(c, 1, 1)
        } catch (d) {
            if (!U) throw d;
            return !1
        }
    }
    hB[u].Va = function () {
        return new gB(this.Q(), this.$(), this.Y(), this.ka())
    };

    function jB(a) {
        this.G = a
    }
    S(jB, hB);

    function kB(a) {
        var b = vu(a)[oc]();
        if (3 == a[x]) b[ob](a, 0), b[jc](a, a[s]);
        else if (lB(a)) {
            for (var c, d = a;
                (c = d[I]) && lB(c);) d = c;
            b[ob](d, 0);
            for (d = a;
                (c = d[wc]) && lB(c);) d = c;
            b[jc](d, 1 == d[x] ? d[od][s] : d[s])
        } else c = a[K], a = ot(c[od], a), b[ob](c, a), b[jc](c, a + 1);
        return b
    }

    function mB(a, b, c, d) {
        var f = vu(a)[oc]();
        f[ob](a, b);
        f[jc](c, d);
        return f
    }
    P = jB[u];
    P.U = function () {
        return new this.constructor(this.G.cloneRange())
    };
    P.Fd = Pr("G");
    P.vg = function () {
        return this.G.commonAncestorContainer
    };
    P.Q = function () {
        return this.G.startContainer
    };
    P.$ = function () {
        return this.G.startOffset
    };
    P.Y = function () {
        return this.G.endContainer
    };
    P.ka = function () {
        return this.G.endOffset
    };
    P.ob = function (a, b, c) {
        return this.G.compareBoundaryPoints(1 == c ? 1 == b ? Q.Range.START_TO_START : Q.Range.START_TO_END : 1 == b ? Q.Range.END_TO_START : Q.Range.END_TO_END, a)
    };
    sa(P, function () {
        return this.G.collapsed
    });
    P.ua = function () {
        return this.G[mb]()
    };
    Sa(P, function (a) {
        var b = Fu(vu(this.Q()));
        this.Dd(b.getSelection(), a)
    });
    P.Dd = function (a) {
        a[ub]();
        a.addRange(this.G)
    };
    za(P, function (a) {
        this.G[Fb](a)
    });

    function nB(a) {
        this.G = a
    }
    S(nB, jB);
    nB[u].Dd = function (a, b) {
        if (!b || this[qb]()) nB.k.Dd[G](this, a, b);
        else a[Fb](this.Y(), this.ka()), a.extend(this.Q(), this.$())
    };

    function oB(a, b) {
        this.G = a;
        this.a = b
    }
    S(oB, hB);
    Zx("goog.dom.browserrange.IeRange");

    function pB(a) {
        var b = vu(a)[D].createTextRange();
        if (1 == a[x]) b.moveToElementText(a), lB(a) && !a[od][s] && b[Fb](!1);
        else {
            for (var c = 0, d = a; d = d[kb];) {
                var f = d[x];
                if (3 == f) c += d[s];
                else if (1 == f) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a[K]);
            b[Fb](!d);
            c && b.move(fl, c);
            b.moveEnd(fl, a[s])
        }
        return b
    }
    P = oB[u];
    P.xb = null;
    P.J = null;
    P.I = null;
    P.Ra = -1;
    P.Xa = -1;
    P.U = function () {
        var a = new oB(this.G.duplicate(), this.a);
        a.xb = this.xb;
        a.J = this.J;
        a.I = this.I;
        return a
    };
    P.Fd = Pr("G");
    P.vg = function () {
        if (!this.xb) {
            var a = this.G[Eb],
                b = this.G.duplicate(),
                c = a[Mb](/ +$/, N);
            (c = a[s] - c[s]) && b.moveEnd(fl, -c);
            c = b[ed]();
            b = b.htmlText[Mb](/(\r\n|\r|\n)+/g, O)[s];
            if (this[qb]() && 0 < b) return this.xb = c;
            for (; b > c.outerHTML[Mb](/(\r\n|\r|\n)+/g, O)[s];) c = c[K];
            for (; 1 == c[od][s] && c[pb] == (3 == c[I][x] ? c[I][Jd] : c[I][pb]) && lB(c[I]);) c = c[I];
            0 == a[s] && (c = qB(this, c));
            this.xb = c
        }
        return this.xb
    };

    function qB(a, b) {
        for (var c = b[od], d = 0, f = c[s]; d < f; d++) {
            var g = c[d];
            if (lB(g)) {
                var h = pB(g),
                    l = h.htmlText != g.outerHTML;
                if (a[qb]() && l ? 0 <= a.ob(h, 1, 1) && 0 >= a.ob(h, 1, 0) : a.G.inRange(h)) return qB(a, g)
            }
        }
        return b
    }
    P.Q = function () {
        this.J || (this.J = rB(this, 1), this[qb]() && (this.I = this.J));
        return this.J
    };
    P.$ = function () {
        0 > this.Ra && (this.Ra = sB(this, 1), this[qb]() && (this.Xa = this.Ra));
        return this.Ra
    };
    P.Y = function () {
        if (this[qb]()) return this.Q();
        this.I || (this.I = rB(this, 0));
        return this.I
    };
    P.ka = function () {
        if (this[qb]()) return this.$();
        0 > this.Xa && (this.Xa = sB(this, 0), this[qb]() && (this.Ra = this.Xa));
        return this.Xa
    };
    P.ob = function (a, b, c) {
        return this.G.compareEndPoints((1 == b ? Mi : Xh) + Wi + (1 == c ? Mi : Xh), a)
    };

    function rB(a, b, c) {
        c = c || a.vg();
        if (!c || !c[I]) return c;
        for (var d = 1 == b, f = 0, g = c[od][s]; f < g; f++) {
            var h = d ? f : g - f - 1,
                l = c[od][h],
                q;
            try {
                q = tB(l)
            } catch (v) {
                continue
            }
            var t = q.Fd();
            if (a[qb]())
                if (!lB(l)) {
                    if (0 == a.ob(t, 1, 1)) {
                        a.Ra = a.Xa = h;
                        break
                    }
                } else {
                    if (iB(q, a)) return rB(a, b, l)
                } else {
                    if (iB(a, q)) {
                        if (!lB(l)) {
                            d ? a.Ra = h : a.Xa = h + 1;
                            break
                        }
                        return rB(a, b, l)
                    }
                    if (0 > a.ob(t, 1, 0) && 0 < a.ob(t, 0, 1)) return rB(a, b, l)
                }
        }
        return c
    }

    function sB(a, b) {
        var c = 1 == b,
            d = c ? a.Q() : a.Y();
        if (1 == d[x]) {
            for (var d = d[od], f = d[s], g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
                var l = d[h];
                if (!lB(l) && 0 == a.G.compareEndPoints((1 == b ? Mi : Xh) + Wi + (1 == b ? Mi : Xh), tB(l).Fd())) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        f = a.G.duplicate();
        g = pB(d);
        f.setEndPoint(c ? Yh : Oi, g);
        f = f[Eb][s];
        return c ? d[s] - f : f
    }
    sa(P, function () {
        return 0 == this.G.compareEndPoints(Ni, this.G)
    });
    P.ua = function () {
        return this.G[Eb]
    };
    Sa(P, function () {
        this.G[Nc]()
    });
    za(P, function (a) {
        this.G[Fb](a);
        a ? (this.I = this.J, this.Xa = this.Ra) : (this.J = this.I, this.Ra = this.Xa)
    });

    function uB(a) {
        this.G = a
    }
    S(uB, jB);
    uB[u].Dd = function (a) {
        a[Fb](this.Q(), this.$());
        this.Y() == this.Q() && this.ka() == this.$() || a.extend(this.Y(), this.ka());
        0 == a[vd] && a.addRange(this.G)
    };

    function vB(a) {
        this.G = a
    }
    S(vB, jB);
    vB[u].ob = function (a, b, c) {
        return X(Fg) ? vB.k.ob[G](this, a, b, c) : this.G.compareBoundaryPoints(1 == c ? 1 == b ? Q.Range.START_TO_START : Q.Range.END_TO_START : 1 == b ? Q.Range.START_TO_END : Q.Range.END_TO_END, a)
    };
    vB[u].Dd = function (a, b) {
        a[ub]();
        b ? a.setBaseAndExtent(this.Y(), this.ka(), this.Q(), this.$()) : a.setBaseAndExtent(this.Q(), this.$(), this.Y(), this.ka())
    };

    function wB(a) {
        return U && !lu(9) ? new oB(a, vu(a[ed]())) : W ? new vB(a) : Yt ? new nB(a) : Xt ? new uB(a) : new jB(a)
    }

    function tB(a) {
        if (U && !lu(9)) {
            var b = new oB(pB(a), vu(a));
            if (lB(a)) {
                for (var c, d = a;
                    (c = d[I]) && lB(c);) d = c;
                b.J = d;
                b.Ra = 0;
                for (d = a;
                    (c = d[wc]) && lB(c);) d = c;
                b.I = d;
                b.Xa = 1 == d[x] ? d[od][s] : d[s];
                b.xb = a
            } else b.J = b.I = b.xb = a[K], b.Ra = ot(b.xb[od], a), b.Xa = b.Ra + 1;
            a = b
        } else a = W ? new vB(kB(a)) : Yt ? new nB(kB(a)) : Xt ? new uB(kB(a)) : new jB(kB(a));
        return a
    }

    function lB(a) {
        return Lu(a) || 3 == a[x]
    };

    function xB() {}
    S(xB, aB);

    function yB(a, b) {
        var c = new xB;
        c.uc = a;
        c.fb = !! b;
        return c
    }

    function zB(a, b, c, d) {
        var f = new xB;
        f.fb = AB(a, b, c, d);
        if (bs(a) && 1 == a[x] && !Lu(a)) {
            var g = a[K];
            b = ot(g[od], a);
            a = g
        }
        bs(c) && 1 == c[x] && !Lu(c) && (g = c[K], d = ot(g[od], c), c = g);
        f.fb ? (f.J = c, f.Ab = d, f.I = a, f.Bb = b) : (f.J = a, f.Ab = b, f.I = c, f.Bb = d);
        return f
    }
    P = xB[u];
    P.uc = null;
    P.J = null;
    P.Ab = null;
    P.I = null;
    P.Bb = null;
    P.fb = !1;
    P.U = function () {
        var a = new xB;
        a.uc = this.uc;
        a.J = this.J;
        a.Ab = this.Ab;
        a.I = this.I;
        a.Bb = this.Bb;
        a.fb = this.fb;
        return a
    };
    P.md = function () {
        return BB(this).Fd()
    };
    P.Dc = Qr(1);
    P.Mb = function () {
        return this
    };

    function BB(a) {
        var b;
        if (!(b = a.uc)) {
            b = a.Q();
            var c = a.$(),
                d = a.Y(),
                f = a.ka();
            if (U && !lu(9)) {
                var g = b,
                    h = c,
                    l = d,
                    q = f,
                    v = !1;
                1 == g[x] && (h = g[od][h], v = !h, g = h || g[wc] || g, h = 0);
                var t = pB(g);
                h && t.move(fl, h);
                if (g == l && h == q) t[Fb](!0);
                else v && t[Fb](!1), v = !1, 1 == l[x] && (l = (h = l[od][q]) || l[wc] || l, q = 0, v = !h), g = pB(l), g[Fb](!v), q && g.moveEnd(fl, q), t.setEndPoint(Yh, g);
                q = new oB(t, vu(b));
                q.J = b;
                q.Ra = c;
                q.I = d;
                q.Xa = f;
                b = q
            } else b = W ? new vB(mB(b, c, d, f)) : Yt ? new nB(mB(b, c, d, f)) : Xt ? new uB(mB(b, c, d, f)) : new jB(mB(b, c, d, f));
            b = a.uc = b
        }
        return b
    }
    P.Je = function () {
        return BB(this).vg()
    };
    P.Q = function () {
        return this.J || (this.J = BB(this).Q())
    };
    P.$ = function () {
        return null != this.Ab ? this.Ab : this.Ab = BB(this).$()
    };
    P.Y = function () {
        return this.I || (this.I = BB(this).Y())
    };
    P.ka = function () {
        return null != this.Bb ? this.Bb : this.Bb = BB(this).ka()
    };
    P.gc = Pr("fb");
    sa(P, function () {
        return BB(this)[qb]()
    });
    P.ua = function () {
        return BB(this).ua()
    };
    P.Va = function () {
        return new gB(this.Q(), this.$(), this.Y(), this.ka())
    };
    Sa(P, function () {
        BB(this)[Nc](this.fb)
    });
    P.Yf = function () {
        return new CB(this)
    };
    za(P, function (a) {
        a = this.gc() ? !a : a;
        this.uc && this.uc[Fb](a);
        a ? (this.I = this.J, this.Bb = this.Ab) : (this.J = this.I, this.Ab = this.Bb);
        this.fb = !1
    });

    function CB(a) {
        this.a = a.gc() ? a.Y() : a.Q();
        this.d = a.gc() ? a.ka() : a.$();
        this.c = dB(a);
        this.e = a.gc() ? a.$() : a.ka()
    }
    S(CB, ZA);
    CB[u].b = function () {
        return zB(this.a, this.d, this.c, this.e)
    };
    CB[u].p = function () {
        CB.k.p[G](this);
        this.c = this.a = null
    };

    function DB() {}
    S(DB, fB);

    function EB(a) {
        var b = new DB;
        b.G = a;
        return b
    }

    function FB(a) {
        for (var b = vu(arguments[0])[D].createControlRange(), c = 0, d = arguments[s]; c < d; c++) b.addElement(arguments[c]);
        return EB(b)
    }
    P = DB[u];
    P.G = null;
    P.Id = null;
    P.Jd = null;
    P.U = function () {
        return FB[id](this, GB(this))
    };
    P.md = function () {
        return this.G || m[D].createControlRange()
    };
    P.Dc = function () {
        return this.G ? this.G[s] : 0
    };
    P.Mb = function (a) {
        a = this.G[bc](a);
        return yB(tB(a), void 0)
    };
    P.Je = function () {
        return Yu[id](null, GB(this))
    };
    P.Q = function () {
        return HB(this)[0]
    };
    P.$ = Qr(0);
    P.Y = function () {
        var a = HB(this),
            b = mt(a);
        return ut(a, function (a) {
            return Uu(a, b)
        })
    };
    P.ka = function () {
        return this.Y()[od][s]
    };

    function GB(a) {
        if (!a.Id && (a.Id = [], a.G))
            for (var b = 0; b < a.G[s]; b++) a.Id[r](a.G[bc](b));
        return a.Id
    }

    function HB(a) {
        a.Jd || (a.Jd = GB(a)[Ub](), a.Jd.sort(function (a, c) {
            return a[yb] - c[yb]
        }));
        return a.Jd
    }
    sa(P, function () {
        return !this.G || !this.G[s]
    });
    P.ua = Qr(N);
    P.Va = function () {
        return new IB(this)
    };
    Sa(P, function () {
        this.G && this.G[Nc]()
    });
    P.Yf = function () {
        return new JB(this)
    };
    za(P, function () {
        this.Jd = this.Id = this.G = null
    });

    function JB(a) {
        this.a = GB(a)
    }
    S(JB, ZA);
    JB[u].b = function () {
        for (var a = (this.a[s] ? vu(this.a[0]) : m)[D].createControlRange(), b = 0, c = this.a[s]; b < c; b++) a.addElement(this.a[b]);
        return EB(a)
    };
    JB[u].p = function () {
        JB.k.p[G](this);
        delete this.a
    };

    function IB(a) {
        a && (this.nc = HB(a), this.J = this.nc[xb](), this.I = mt(this.nc) || this.J);
        $A[G](this, this.J, !1, !0)
    }
    S(IB, eB);
    P = IB[u];
    P.J = null;
    P.I = null;
    P.nc = null;
    P.Q = Pr("J");
    P.Y = Pr(gi);
    P.ud = function () {
        return !this.a && !this.nc[s]
    };
    P.Ha = function () {
        if (this.ud()) throw Fx;
        if (!this.a) {
            var a = this.nc[xb]();
            this[rd](a, 1, 1);
            return a
        }
        return IB.k.Ha[G](this)
    };
    P.zb = function (a) {
        this.nc = a.nc;
        this.J = a.J;
        this.I = a.I;
        IB.k.zb[G](this, a)
    };
    P.U = function () {
        var a = new IB(null);
        a.zb(this);
        return a
    };

    function KB() {
        this.a = [];
        this.b = [];
        this.f = this.c = null
    }
    S(KB, fB);

    function LB(a) {
        var b = new KB;
        b.b = a;
        b.a = rt(a, function (a) {
            return a.md()
        });
        return b
    }
    P = KB[u];
    P.U = function () {
        var a = new KB;
        a.a = yt(this.a);
        return a
    };
    P.md = function () {
        return this.a[0]
    };
    P.Dc = function () {
        return this.a[s]
    };
    P.Mb = function (a) {
        this.b[a] || (this.b[a] = yB(wB(this.a[a]), void 0));
        return this.b[a]
    };
    P.Je = function () {
        if (!this.f) {
            for (var a = [], b = 0, c = this.Dc(); b < c; b++) a[r](this.Mb(b).Je());
            this.f = Yu[id](null, a)
        }
        return this.f
    };

    function MB(a) {
        a.c || (a.c = cB(a), a.c.sort(function (a, c) {
            var d = a.Q(),
                f = a.$(),
                g = c.Q(),
                h = c.$();
            return d == g && f == h ? 0 : AB(d, f, g, h) ? 1 : -1
        }));
        return a.c
    }
    P.Q = function () {
        return MB(this)[0].Q()
    };
    P.$ = function () {
        return MB(this)[0].$()
    };
    P.Y = function () {
        return mt(MB(this)).Y()
    };
    P.ka = function () {
        return mt(MB(this)).ka()
    };
    sa(P, function () {
        return 0 == this.a[s] || 1 == this.a[s] && this.Mb(0)[qb]()
    });
    P.ua = function () {
        return rt(cB(this), function (a) {
            return a.ua()
        })[M](N)
    };
    P.Va = function () {
        return new NB(this)
    };
    Sa(P, function () {
        var a = bB(Fu(vu(U ? this.Je() : this.Q())));
        a[ub]();
        for (var b = 0, c = this.Dc(); b < c; b++) a.addRange(this.Mb(b).md())
    });
    P.Yf = function () {
        return new OB(this)
    };
    za(P, function (a) {
        if (!this[qb]()) {
            var b = a ? this.Mb(0) : this.Mb(this.Dc() - 1);
            this.b = [];
            this.f = this.c = null;
            b[Fb](a);
            this.b = [b];
            this.c = [b];
            this.a = [b.md()]
        }
    });

    function OB(a) {
        this.a = rt(cB(a), function (a) {
            return a.Yf()
        })
    }
    S(OB, ZA);
    OB[u].b = function () {
        var a = rt(this.a, function (a) {
            return a[dd]()
        });
        return LB(a)
    };
    OB[u].p = function () {
        OB.k.p[G](this);
        pt(this.a, function (a) {
            a.z()
        });
        delete this.a
    };

    function NB(a) {
        a && (this.Pb = rt(MB(a), function (a) {
            return Hx(a)
        }));
        eB[G](this, a ? this.Q() : null, !1)
    }
    S(NB, eB);
    P = NB[u];
    P.Pb = null;
    P.ve = 0;
    P.Q = function () {
        return this.Pb[0].Q()
    };
    P.Y = function () {
        return mt(this.Pb).Y()
    };
    P.ud = function () {
        return this.Pb[this.ve].ud()
    };
    P.Ha = function () {
        try {
            var a = this.Pb[this.ve],
                b = a.Ha();
            this[rd](a.r, a.ba, a.a);
            return b
        } catch (c) {
            if (c !== Fx || this.Pb[s] - 1 == this.ve) throw c;
            this.ve++;
            return this.Ha()
        }
    };
    P.zb = function (a) {
        this.Pb = yt(a.Pb);
        NB.k.zb[G](this, a)
    };
    P.U = function () {
        var a = new NB(null);
        a.zb(this);
        return a
    };

    function PB() {
        var a = bB(k);
        return a && QB(a)
    }

    function QB(a) {
        var b, c = !1;
        if (a[oc]) try {
            b = a[oc]()
        } catch (d) {
            return null
        } else if (a[vd]) {
            if (1 < a[vd]) {
                b = new KB;
                for (var c = 0, f = a[vd]; c < f; c++) b.a[r](a.getRangeAt(c));
                return b
            }
            b = a.getRangeAt(0);
            c = AB(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        return b && b.addElement ? EB(b) : yB(wB(b), c)
    }

    function RB(a) {
        return yB(tB(a), void 0)
    }

    function AB(a, b, c, d) {
        if (a == c) return d < b;
        var f;
        if (1 == a[x] && b)
            if (f = a[od][b]) a = f, b = 0;
            else if (Uu(a, c)) return !0;
        if (1 == c[x] && d)
            if (f = c[od][d]) c = f, d = 0;
            else if (Uu(c, a)) return !1;
        return 0 < (Vu(a, c) || b - d)
    };

    function SB(a, b, c) {
        Lw[G](this);
        La(this, a);
        this.c = b || a;
        this.e = c || new pv(NaN, NaN, NaN, NaN);
        this.b = vu(a);
        this.a = new Gw(this);
        a = hs(Xv, this.a);
        this.ld || (this.ld = []);
        this.ld[r](R(a, void 0));
        pw(this.c, [Hq, ho], this.kf, !1, this)
    }
    S(SB, Lw);
    var TB = U || Yt && X("1.9.3");
    P = SB[u];
    fb(P, 0);
    gb(P, 0);
    Ma(P, 0);
    Na(P, 0);
    P.wf = 0;
    P.xf = 0;
    P.ec = 0;
    P.fc = 0;
    P.Bf = !0;
    P.cc = !1;
    P.of = 0;
    P.Ga = Or("Bf");
    P.p = function () {
        SB.k.p[G](this);
        ww(this.c, [Hq, ho], this.kf, !1, this);
        Kw(this.a);
        TB && this.b.releaseCapture();
        La(this, null);
        this.c = null
    };
    P.kf = function (a) {
        var b = a[gd] == ho;
        if (!this.Bf || this.cc || b && !gw(a)) this[A]($l);
        else {
            UB(a);
            if (0 == this.of)
                if (this[A](new VB(Sp, this, a[Ld], a[Md], a))) this.cc = !0, a[ac]();
                else return;
                else a[ac]();
            var b = this.b,
                c = b[Nd],
                d = !TB;
            this.a.l(b, [Gq, io], this.qj, d);
            this.a.l(b, [Fq, lo], this.he, d);
            TB ? (c.setCapture(!1), this.a.l(c, $n, this.he)) : this.a.l(Fu(b), Jk, this.he);
            this.f && this.a.l(this.f, Hp, this.rj, d);
            fb(this, this.wf = a[Ld]);
            gb(this, this.xf = a[Md]);
            Ma(this, a[uc]);
            Na(this, a[vc]);
            this.ec = this[F][ec];
            this.fc = this[F][Ad];
            this.d = iv(tu(this.b));
            is()
        }
    };
    P.he = function (a) {
        Kw(this.a);
        TB && this.b.releaseCapture();
        if (this.cc) {
            UB(a);
            this.cc = !1;
            var b = WB(this, this.ec),
                c = XB(this, this.fc);
            this[A](new VB(cm, this, a[Ld], a[Md], a, b, c))
        } else this[A]($l)
    };

    function UB(a) {
        var b = a[gd];
        b == Hq || b == Gq ? ew(a, a.nb.targetTouches[0], a[nc]) : b != Fq && b != Eq || ew(a, a.nb.a[0], a[nc])
    }
    P.qj = function (a) {
        if (this.Bf) {
            UB(a);
            var b = 1 * (a[Ld] - this[Ld]),
                c = a[Md] - this[Md];
            fb(this, a[Ld]);
            gb(this, a[Md]);
            Ma(this, a[uc]);
            Na(this, a[vc]);
            if (!this.cc) {
                var d = this.wf - this[Ld],
                    f = this.xf - this[Md];
                if (d * d + f * f > this.of)
                    if (this[A](new VB(Sp, this, a[Ld], a[Md], a))) this.cc = !0;
                    else {
                        this.Gb || this.he(a);
                        return
                    }
            }
            c = YB(this, b, c);
            b = c.x;
            c = c.y;
            this.cc && this[A](new VB(Ak, this, a[Ld], a[Md], a, b, c)) && (ZB(this, a, b, c), a[ac]())
        }
    };

    function YB(a, b, c) {
        var d = iv(tu(a.b));
        b += d.x - a.d.x;
        c += d.y - a.d.y;
        a.d = d;
        a.ec += b;
        a.fc += c;
        b = WB(a, a.ec);
        a = XB(a, a.fc);
        return new T(b, a)
    }
    P.rj = function (a) {
        var b = YB(this, 0, 0);
        fb(a, this[Ld]);
        gb(a, this[Md]);
        ZB(this, a, b.x, b.y)
    };

    function ZB(a, b, c, d) {
        Ka(a[F][C], c + gp);
        a[F][C].top = d + gp;
        a[A](new VB(Vl, a, b[Ld], b[Md], b, c, d))
    }

    function WB(a, b) {
        var c = a.e,
            d = ma(c[E]) ? null : c[E],
            c = ma(c[w]) ? 0 : c[w];
        return n.min(null != d ? d + c : aa, n.max(null != d ? d : -aa, b))
    }

    function XB(a, b) {
        var c = a.e,
            d = ma(c.top) ? null : c.top,
            c = ma(c[L]) ? 0 : c[L];
        return n.min(null != d ? d + c : aa, n.max(null != d ? d : -aa, b))
    }

    function VB(a, b, c, d, f, g, h) {
        cw[G](this, a);
        fb(this, c);
        gb(this, d);
        this.a = f;
        Ka(this, Wr(g) ? g : b.ec);
        this.top = Wr(h) ? h : b.fc
    }
    S(VB, cw);

    function $B() {
        Lw[G](this);
        this.b = [];
        this.j = [];
        this.W = {};
        this.m = new Gw(this);
        this.Eb = this.Db = !1;
        this.K = !0
    }
    S($B, Lw);
    P = $B[u];
    P.vc = function (a, b, c, d) {
        a.b = b;
        a.a = d;
        this.b[r](a)
    };
    P.pi = function (a) {
        this.F = At(arguments, 0)
    };
    P.p = function () {
        this.m.z();
        for (var a = 0, b = this.b[s]; a < b; a++) {
            var c = this.b[a];
            c.b = void 0;
            c.a = void 0
        }
        ua(this.b, 0);
        ua(this.j, 0);
        this.W = null;
        aC(this);
        $B.k.p[G](this)
    };

    function bC(a, b) {
        for (var c = 0, d = a.b[s]; c < d; c++) {
            var f = a.b[c];
            f.Ac = Iv(f)
        }
        c = 0;
        for (d = a.j[s]; c < d; c++) f = a.j[c], f != b && (f.Ac = Iv(f))
    }
    P.oi = function (a) {
        var b = cs(a[nc]);
        this.a = this.W[b];
        this.c = this.th(this.a);
        this.Na && Y.add(this.c, this.Na);
        this.c[C].margin = pg;
        wa(this.c[C], Fj);
        ib(this.c[C], kn);
        vu(this.a)[D][p](this.c);
        b = Bv(this.a);
        Fv(this.c, b);
        this.d = new SB(this.c);
        this.d.of = n.pow(0, 2);
        pw(this.d, Sp, this.Gj, !1, this);
        pw(this.d, cm, this.Fj, !1, this);
        pw(this.d, $l, this.yf, !1, this);
        this.d.kf(a)
    };
    P.Gj = function (a) {
        if (this[A](new cC(Dk, 0, a.a, this.a))) {
            this.w = this.a[K];
            this.e = this.ea = Su(this.a);
            this.N = this.w;
            this.F ? Y.add[id](null, xt(this.a, this.F)) : ib(this.a[C], kn);
            var b = Gv(this.c);
            this.c.e = b[w] / 2;
            this.c.d = b[L] / 2;
            ib(this.c[C], N);
            this.K && cb(this.a[C], wo);
            bC(this, this.a);
            cb(this.a[C], N);
            pw(this.d, Vl, this.sj, !1, this);
            this[A](new cC(Yl, 0, a.a, this.a))
        } else a[ac](), this.yf()
    };
    P.sj = function (a) {
        var b = Bv(this.c),
            b = new T(b.x + this.c.e, b.y + this.c.d),
            c;
        t: {
            c = null;
            if (this.a[C][xd] != wo) {
                c = this.a[K];
                var d = Iv(c);
                if (dC(b, d)) break t
            }
            for (var d = 0, f = this.b[s]; d < f; d++) {
                var g = this.b[d];
                if (g != c && dC(b, g.Ac)) {
                    c = g;
                    break t
                }
            }
            c = null
        }
        var h;
        if (c) {
            if (null == c) throw e("getHoverNextItem_ called with null hoverList.");
            var l, q, d = !1,
                f = void 0;
            switch (c.b) {
            case 0:
                h = b.y;
                l = eC;
                q = fC;
                break;
            case 4:
                d = !0;
            case 2:
                h = b.x;
                l = gC;
                q = fC;
                break;
            case 5:
                d = !0;
            case 3:
                h = b.x, l = hC, q = iC
            }
            for (var g = null, v, t = Ru(c), B = 0, z = t[s]; B < z; B++) {
                var V =
                    t[B];
                if (V != this.a) {
                    var ha = l(V.Ac);
                    if (d) {
                        var ba = jC(V, b);
                        Wr(f) || (f = ba);
                        q(h, ha) && (void 0 == v || ba < f || ba == f && (q(ha, v) || ha == v)) && (g = V, v = ha);
                        ba < f && (f = ba)
                    } else q(h, ha) && (void 0 == v || q(ha, v)) && (g = V, v = ha)
                }
            }
            h = null !== g && jC(g, b) > f ? null : g
        } else h = null; if (!this[A](new cC(Ck, 0, a, this.a))) return !1;
        if (c) this.K ? this.a[K] == c && Su(this.a) == h || c[cc](this.a, h) : this.mf(h, b), cb(this.a[C], N), c.a && Y.add(c, c.a);
        else
            for (this.Eb || cb(this.a[C], wo), b = 0, h = this.b[s]; b < h; b++) l = this.b[b], l.a && Y[Cc](l, l.a);
        c != this.N && (this.N = c, bC(this,
            this.a));
        this[A](new cC(Xl, 0, a, this.a));
        return !1
    };
    P.yf = function () {
        aC(this);
        this.d = this.c = this.ea = this.w = this.N = this.a = null;
        for (var a = 0, b = this.b[s]; a < b; a++) this.b[a].Ac = null;
        a = 0;
        for (b = this.j[s]; a < b; a++) this.j[a].Ac = null
    };
    P.Fj = function (a) {
        if (!this[A](new cC(Bk, 0, a, this.a))) return !1;
        this.K || this.Jh();
        aC(this);
        this[A](new cC(Wl, 0, a, this.a));
        this.yf();
        return !0
    };

    function aC(a) {
        Xv(a.d);
        a.c && Qu(a.c);
        a.a && a.a[C][xd] == wo && (a.w[cc](a.a, a.ea), cb(a.a[C], N));
        if (a.F && a.a) Y[Cc][id](null, xt(a.a, a.F));
        else a.a && ib(a.a[C], rr);
        for (var b = 0, c = a.b[s]; b < c; b++) {
            var d = a.b[b];
            d.a && Y[Cc](d, d.a)
        }
    }
    P.ni = function (a) {
        Y.add[id](null, xt(a[nc], this.Ma))
    };
    P.mi = function (a) {
        Y[Cc][id](null, xt(a[nc], this.Ma))
    };
    P.li = function (a) {
        Y.add[id](null, xt(a[nc], this.Ea))
    };
    P.ki = function (a) {
        Y[Cc][id](null, xt(a[nc], this.Ea))
    };

    function dC(a, b) {
        return a.x > b[E] && a.x < b[E] + b[w] && a.y > b.top && a.y < b.top + b[L]
    }
    P.mf = function (a) {
        a && (this.e = a)
    };
    P.Jh = function () {
        this.w[cc](this.a, this.e)
    };

    function jC(a, b) {
        var c = a.Ac;
        return n.abs(b.y - (c.top + (c[L] - 1) / 2))
    }

    function eC(a) {
        return a.top + a[L] - 1
    }

    function gC(a) {
        return a[E] + a[w] - 1
    }

    function hC(a) {
        return a[E] || 0
    }

    function fC(a, b) {
        return a < b
    }

    function iC(a, b) {
        return a > b
    }
    P.th = function (a) {
        var b = a[cd](!0);
        switch (a[qd][Kd]()) {
        case Iq:
            return Gu(fq, null, Gu(hq, null, b));
        case iq:
        case wq:
            return Gu(fq, null, Gu(hq, null, Gu(Iq, null, b)));
        default:
            return b
        }
    };

    function cC(a, b, c, d) {
        cw[G](this, a);
        this.event = c;
        this.a = d
    }
    S(cC, cw);

    function kC(a, b) {
        $B[G](this);
        this.ib = null != a ? a : N;
        this.Ta = null != b ? b : N;
        this.K = !1;
        this.s = null;
        this.f = new Gw(this)
    }
    S(kC, $B);
    P = kC[u];
    P.vc = function (a, b, c, d) {
        kC.k.vc[G](this, a, b, c, d);
        this.f.l(this, Dk, this.Rh)
    };
    P.Rh = function (a) {
        this.d.ec = a.event[Ld];
        this.d.fc = a.event[Md]
    };
    P.Jh = function () {
        this.s && (1 == this.s ? Pu(this.a, this.e) : Ou(this.a, this.e));
        lC(this, !1)
    };
    P.mf = function (a, b) {
        lC(this, !1);
        kC.k.mf[G](this, a, b);
        lC(this, !0, b)
    };

    function lC(a, b, c) {
        null != a.e && (b && c ? (b = Iv(a.e), c = Bt(new T(b[E] + b[w] / 2, b.top + b[L] / 2), c), b = 0 == a.w.b, a.s = 0 > c.y && b || 0 > c.x && !b ? 1 : 2, 1 == a.s ? Y.add(a.e, a.Ta) : Y.add(a.e, a.ib)) : (Y[Cc](a.e, a.Ta), Y[Cc](a.e, a.ib), a.s = null))
    }
    P.p = function () {
        this.f.z();
        kC.k.p[G](this)
    };

    function mC() {}
    Ur(mC);
    P = mC[u];
    P.Zh = Nr();

    function nC(a, b) {
        a && $a(a, b ? 0 : -1)
    }
    P.t = function (a) {
        return a.b.t(Sl, oC(this, a)[M](O))
    };
    P.sg = function (a) {
        return a[qd] == Uh
    };

    function pC(a, b, c) {
        c.id && Dy(b, c.id);
        var d = a.da(),
            f = !1,
            g = Y.S(c);
        g && pt(g, function (a) {
            a == d ? f = !0 : a && (a == d + Pf ? b.Ga(!1) : a == d + Tf ? qC(b, on) : a == d + eg && qC(b, pr))
        }, a);
        f || Y.add(c, d);
        rC(a, b, c);
        return c
    }

    function rC(a, b, c) {
        if (c)
            for (var d = c[I], f; d && d[K] == c;) {
                f = d[zd];
                if (1 == d[x]) {
                    var g = a.hg(d);
                    g && (g.g = d, b.Z() || g.Ga(!1), b.vd(g), Hy(g, d))
                } else d[Jd] && Ws(d[Jd]) != N || c[rc](d);
                d = f
            }
    }
    P.hg = function (a) {
        t: {
            for (var b = Y.S(a), c = 0, d = b[s]; c < d; c++)
                if (a = b[c] in fz ? fz[b[c]]() : null) break t;
            a = null
        }
        return a
    };
    P.ag = function (a) {
        a = a.h();
        Mv(a, !0, Yt);
        U && (a.hideFocus = !0);
        var b = this.Zh();
        b && Vy(a, b)
    };
    P.da = Qr("goog-container");

    function oC(a, b) {
        var c = a.da(),
            d = [c, b.rc == on ? c + Tf : c + eg];
        b.Z() || d[r](c + Pf);
        return d
    };

    function sC() {}
    S(sC, Xy);
    Ur(sC);
    sC[u].t = function (a) {
        return a.b.t(Sl, this.da())
    };
    sC[u].lb = function (a, b) {
        b.id && Dy(a, b.id);
        if (b[qd] == ei) {
            var c = b;
            b = this.t(a);
            Ou(b, c);
            Qu(c)
        } else Y.add(b, this.da());
        return b
    };
    sC[u].Oa = Nr();
    sC[u].da = Qr(Im);

    function tC(a, b) {
        hz[G](this, null, a || sC.qa(), b);
        nz(this, 1, !1);
        nz(this, 2, !1);
        nz(this, 4, !1);
        nz(this, 32, !1);
        this.ga = 1
    }
    S(tC, hz);
    tC[u].M = function () {
        tC.k.M[G](this);
        var a = this.h();
        Vy(a, Kp)
    };
    ez(Im, function () {
        return new tC
    });

    function uC() {}
    S(uC, mC);
    Ur(uC);
    P = uC[u];
    P.Zh = Qr("menu");
    P.sg = function (a) {
        return a[qd] == Yi || uC.k.sg[G](this, a)
    };
    P.hg = function (a) {
        return a[qd] == ei ? new tC : uC.k.hg[G](this, a)
    };
    P.Hd = function (a, b) {
        return Uu(a.h(), b)
    };
    P.da = Qr(Em);
    P.ag = function (a) {
        uC.k.ag[G](this, a);
        a = a.h();
        Wy(a, gn, Xq)
    };

    function vC(a, b, c) {
        zy[G](this, c);
        this.vb = b || mC.qa();
        this.rc = a || pr
    }
    S(vC, zy);
    P = vC[u];
    P.Jc = null;
    P.Bd = null;
    P.vb = null;
    P.rc = null;
    P.la = !0;
    P.sc = !0;
    P.pc = !0;
    P.Wa = -1;
    P.sa = null;
    P.Lc = !1;
    P.yb = null;

    function wC(a) {
        return a.Jc || a.h()
    }

    function xC(a, b) {
        if (a.pc) {
            var c = wC(a),
                d = a.R;
            a.Jc = b;
            var f = wC(a);
            d && (a.Jc = c, yC(a, !1), a.Jc = b, Oy(zC(a), f), yC(a, !0))
        } else throw e("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function zC(a) {
        return a.Bd || (a.Bd = new Ny(wC(a)))
    }
    P.t = function () {
        this.g = this.vb.t(this)
    };
    P.De = function () {
        return this.h()
    };
    P.cg = function (a) {
        return this.vb.sg(a)
    };
    P.za = function (a) {
        this.g = pC(this.vb, this, a);
        a[C][xd] == wo && (this.la = !1)
    };
    P.M = function () {
        vC.k.M[G](this);
        Iy(this, function (a) {
            a.R && AC(this, a)
        }, this);
        var a = this.h();
        this.vb.ag(this);
        this.A(this.la, !0);
        Z(this).l(this, dm, this.$f).l(this, mn, this.jd).l(this, br, this.Uf).l(this, Go, this.ck).l(this, xl, this.ak).l(a, ho, this.Zj).l(vu(a), lo, this.bk).l(a, [ho, lo, ko, jo, Gl], this.$j);
        this.pc && yC(this, !0)
    };

    function yC(a, b) {
        var c = Z(a),
            d = wC(a);
        b ? c.l(d, um, a.Xh).l(d, Jk, a.He).l(zC(a), Kn, a.Pa) : c.T(d, um, a.Xh).T(d, Jk, a.He).T(zC(a), Kn, a.Pa)
    }
    P.X = function () {
        this.mc(-1);
        this.sa && mz(this.sa, !1);
        this.Lc = !1;
        vC.k.X[G](this)
    };
    P.p = function () {
        vC.k.p[G](this);
        this.Bd && (this.Bd.z(), this.Bd = null);
        this.vb = this.sa = this.yb = this.Jc = null
    };
    P.$f = Qr(!0);
    P.jd = function (a) {
        var b = My(this, a[F]);
        if (-1 < b && b != this.Wa) {
            var c = BC(this);
            c && c.La(!1);
            this.Wa = b;
            c = BC(this);
            this.Lc && c[Hd](!0);
            this.sa && c != this.sa && (c.ja & 64 ? mz(c, !0) : mz(this.sa, !1))
        }
        b = this.h();
        null != a[F].h() && Wy(b, Jj, a[F].h().id)
    };
    P.Uf = function (a) {
        a[F] == BC(this) && (this.Wa = -1);
        this.h()[ud](pk)
    };
    P.ck = function (a) {
        (a = a[F]) && (a != this.sa && a.oa == this) && (this.sa && mz(this.sa, !1), this.sa = a)
    };
    P.ak = function (a) {
        a[F] == this.sa && (this.sa = null)
    };
    P.Zj = function (a) {
        this.sc && (this.Lc = !0);
        var b = wC(this);
        b && cv(b) ? b[Fc]() : a[ac]()
    };
    P.bk = function () {
        this.Lc = !1
    };
    P.$j = function (a) {
        var b;
        t: {
            b = a[F];
            if (this.yb)
                for (var c = this.h(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.yb) {
                        b = this.yb[d];
                        break t
                    }
                    b = b[K]
                }
            b = null
        }
        if (b) switch (a[gd]) {
        case ho:
            b.Ge(a);
            break;
        case lo:
            b.yd(a);
            break;
        case ko:
            b.jg(a);
            break;
        case jo:
            b.ig(a);
            break;
        case Gl:
            b.Ad(a)
        }
    };
    P.Xh = Nr();
    P.He = function () {
        this.mc(-1);
        this.Lc = !1;
        this.sa && mz(this.sa, !1)
    };
    P.Pa = function (a) {
        return this.Z() && this.H() && (0 != Jy(this) || this.Jc) && this.lg(a) ? (a[ac](), a[Xb](), !0) : !1
    };
    P.lg = function (a) {
        var b = BC(this);
        if (b && typeof b.Pa == zm && b.Pa(a) || this.sa && this.sa != b && typeof this.sa.Pa == zm && this.sa.Pa(a)) return !0;
        if (a[pd] || a[Pb] || a[dc] || a[nb]) return !1;
        switch (a[H]) {
        case 27:
            if (this.pc) wC(this).blur();
            else return !1;
            break;
        case 36:
            CC(this);
            break;
        case 35:
            DC(this);
            break;
        case 38:
            if (this.rc == pr) EC(this);
            else return !1;
            break;
        case 37:
            if (this.rc == on) Ly(this) ? FC(this) : EC(this);
            else return !1;
            break;
        case 40:
            if (this.rc == pr) FC(this);
            else return !1;
            break;
        case 39:
            if (this.rc == on) Ly(this) ? EC(this) : FC(this);
            else return !1;
            break;
        default:
            return !1
        }
        return !0
    };

    function AC(a, b) {
        var c = b.h(),
            c = c.id || (c.id = Cy(b));
        a.yb || (a.yb = {});
        a.yb[c] = b
    }
    P.vd = function (a, b) {
        vC.k.vd[G](this, a, b)
    };
    P.pg = function (a, b, c) {
        a.Ed |= 2;
        a.Ed |= 64;
        nz(a, 32, !1);
        iz(a, !1);
        vC.k.pg[G](this, a, b, c);
        a.R && this.R && AC(this, a);
        b <= this.Wa && this.Wa++
    };
    P.removeChild = function (a, b) {
        if (a = Zr(a) ? this.va && a ? (a in this.va ? this.va[a] : void 0) || null : null : a) {
            var c = My(this, a); - 1 != c && (c == this.Wa ? a.La(!1) : c < this.Wa && this.Wa--);
            var d = a.h();
            d && (d.id && this.yb) && (c = this.yb, d = d.id, d in c && delete c[d])
        }
        a = vC.k[rc][G](this, a, b);
        iz(a, !0);
        return a
    };

    function qC(a, b) {
        if (a.h()) throw e(Sh);
        a.rc = b
    }
    P.H = Pr("la");
    P.A = function (a, b) {
        if (b || this.la != a && this[A](a ? Lp : ln)) {
            this.la = a;
            var c = this.h();
            c && (Jv(c, a), this.pc && nC(wC(this), this.sc && this.la), b || this[A](this.la ? Vj : Uj));
            return !0
        }
        return !1
    };
    P.Z = Pr(Fp);
    P.Ga = function (a) {
        this.sc != a && this[A](a ? bm : Pl) && (a ? (this.sc = !0, Iy(this, function (a) {
            a.di ? delete a.di : a.Ga(!0)
        })) : (Iy(this, function (a) {
            a.Z() ? a.Ga(!1) : a.di = !0
        }), this.Lc = this.sc = !1), this.pc && nC(wC(this), a && this.la))
    };

    function GC(a, b) {
        b != a.pc && a.R && yC(a, b);
        a.pc = b;
        a.sc && a.la && nC(wC(a), b)
    }
    P.mc = function (a) {
        (a = Ky(this, a)) ? a.La(!0) : -1 < this.Wa && BC(this).La(!1)
    };
    P.La = function (a) {
        this.mc(My(this, a))
    };

    function BC(a) {
        return Ky(a, a.Wa)
    }

    function CC(a) {
        HC(a, function (a, c) {
            return (a + 1) % c
        }, Jy(a) - 1)
    }

    function DC(a) {
        HC(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    }

    function FC(a) {
        HC(a, function (a, c) {
            return (a + 1) % c
        }, a.Wa)
    }

    function EC(a) {
        HC(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.Wa)
    }

    function HC(a, b, c) {
        c = 0 > c ? My(a, a.sa) : c;
        var d = Jy(a);
        c = b[G](a, c, d);
        for (var f = 0; f <= d;) {
            var g = Ky(a, c);
            if (g && a.hi(g)) {
                a.mc(c);
                break
            }
            f++;
            c = b[G](a, c, d)
        }
    }
    P.hi = function (a) {
        return a.H() && a.Z() && !! (a.ja & 2)
    };

    function IC() {}
    S(IC, Xy);
    Ur(IC);
    IC[u].da = Qr(Fm);

    function JC(a, b, c) {
        hz[G](this, a, c || IC.qa(), b);
        nz(this, 1, !1);
        nz(this, 2, !1);
        nz(this, 4, !1);
        nz(this, 32, !1);
        this.ga = 1
    }
    S(JC, hz);
    ez(Fm, function () {
        return new JC(null)
    });
    ez(Im, function () {
        return new tC
    });

    function KC(a, b) {
        vC[G](this, pr, b || uC.qa(), a);
        GC(this, !1)
    }
    S(KC, vC);
    P = KC[u];
    P.Pf = !0;
    P.da = function () {
        return this.vb.da()
    };
    P.Hd = function (a) {
        if (this.vb.Hd(this, a)) return !0;
        for (var b = 0, c = Jy(this); b < c; b++) {
            var d = Ky(this, b);
            if (typeof d.Hd == zm && d.Hd(a)) return !0
        }
        return !1
    };
    P.setPosition = function (a, b) {
        var c = this.H();
        c || Jv(this.h(), !0);
        Fv(this.h(), a, b);
        c || Jv(this.h(), !1)
    };
    P.A = function (a, b, c) {
        (b = KC.k.A[G](this, a, b)) && (a && this.R && this.Pf) && wC(this)[Fc]();
        a && c && $r(c[Ld]) ? this.W = new T(c[Ld], c[Md]) : this.W = null;
        return b
    };
    P.$f = function (a) {
        this.Pf && wC(this)[Fc]();
        return KC.k.$f[G](this, a)
    };
    P.hi = function (a) {
        return a.Z() && a.H() && !! (a.ja & 2)
    };
    P.za = function (a) {
        for (var b = this.vb, c = yu(this.b.B, Sl, b.da() + Of, a), d = c[s], f = 0; f < d; f++) rC(b, this, c[f]);
        KC.k.za[G](this, a)
    };
    P.lg = function (a) {
        var b = KC.k.lg[G](this, a);
        b || Iy(this, function (c) {
            !b && (c.pk && c.Uh == a[H]) && (this.Z() && this.La(c), b = c.Pa(a))
        }, this);
        return b
    };
    P.mc = function (a) {
        KC.k.mc[G](this, a);
        if (a = Ky(this, a)) {
            var b = a.h();
            a = this.h();
            var c = Bv(b),
                d = Bv(a),
                f = Rv(a),
                g = c.x - d.x - f[E],
                c = c.y - d.y - f.top,
                d = a[Rc] - b[Fd],
                f = a[Sc],
                h = a[jb],
                f = f + n.min(g, n.max(g - (a[Gb] - b[Tb]), 0)),
                h = h + n.min(c, n.max(c - d, 0)),
                b = new T(f, h);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    };

    function LC(a, b) {
        KC[G](this, a, b);
        this.Pf = !0;
        GC(this, !0);
        this.A(!1, !0);
        this.a = new Jx
    }
    S(LC, KC);
    P = LC[u];
    P.xa = null;
    P.za = function (a) {
        LC.k.za[G](this, a);
        if (a = a[Hc](wm) || a.htmlFor) a = this.b.h(a), a && Lx(this.a, cs(a)) || (a = this.Ne(a, 1, void 0, void 0, void 0), this.R && this.Rc(a))
    };
    P.M = function () {
        LC.k.M[G](this);
        Ox(this.a, this.Rc, this);
        var a = Z(this);
        a.l(this, Hj, this.Ef);
        a.l(this.b.B, ho, this.qh, !0);
        W && a.l(this.b.B, Gl, this.qh, !0)
    };
    P.Ne = function (a, b, c, d, f) {
        if (!a) return null;
        b = {
            g: a,
            zf: b,
            gh: c,
            Of: d ? Gl : ho,
            $d: f
        };
        this.a.L(cs(a), b);
        return b
    };
    P.Rc = function (a) {
        Z(this).l(a.g, a.Of, this.Fe)
    };
    P.Oe = function () {
        if (this.R)
            for (var a = this.a.$a(), b = 0; b < a[s]; b++) this.pe(this.a.S(a[b]));
        this.a[ld]()
    };
    Xa(P, function (a) {
        if (!a || !Lx(this.a, cs(a))) throw e("Menu not attached to provided element, unable to detach.");
        a = cs(a);
        this.R && this.pe(this.a.S(a));
        this.a[Cc](a)
    });
    P.pe = function (a) {
        Z(this).T(a.g, a.Of, this.Fe)
    };
    P.ke = function (a, b, c) {
        b = Wr(a.zf) ? new aA(a.g, a.zf, !0) : new dA(b, c);
        b.f && b.f(5);
        var d = a.gh;
        c = a.$d;
        var f = a.g;
        a = this.H();
        this.H() || is();
        this.xa = f || null;
        this[A](Fk) && (d = "undefined" != typeof d ? d : 4, a || ib(this.h()[C], kn), Jv(this.h(), !0), b.b(this.h(), d, c), a || ib(this.h()[C], rr), this.mc(-1), this.A(!0))
    };
    P.dc = function () {
        this.H() && (this.A(!1), this.H() || (is(), this.xa = null))
    };
    P.Ef = function () {
        this.dc()
    };
    P.Fe = function (a) {
        for (var b = this.a.$a(), c = 0; c < b[s]; c++) {
            var d = this.a.S(b[c]);
            if (d.g == a[nc]) {
                this.ke(d, a[Ld], a[Md]);
                a[ac]();
                a[Xb]();
                break
            }
        }
    };
    P.qh = function (a) {
        this.H() && !this.Hd(a[F]) && this.dc()
    };
    P.He = function (a) {
        LC.k.He[G](this, a);
        this.dc()
    };
    P.p = function () {
        LC.k.p[G](this);
        this.a && (this.a[ld](), delete this.a)
    };

    function MC(a, b) {
        eA[G](this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.d = 0;
        this.A(!0);
        this.A(!1);
        Y.add(this.h(), Bp);
        Y.add(this.c, Ap)
    }
    S(MC, eA);
    var NC = {
        de: 1,
        bh: -1,
        dh: 0
    };
    MC[u].setData = function (a) {
        $u(this.c, a)
    };
    MC[u].n = function () {
        Sw(this.d);
        1 == this.a ? uw(this.b, om, R(this.n, this)) : 0 == this.a && (this.d = Rw(R(this.j, this, -1), 200))
    };
    MC[u].j = function (a) {
        if (this.a != a && (this.a != NC.dh || !(this.H() && a == NC.de || !this.H() && a == NC.bh))) {
            var b = this.H();
            this.A(!0);
            var c = -n[Ob](Gv(this.c)[w]);
            Cv(this.h()) && (c = -c);
            var d = a == NC.de ? c : 0,
                c = a == NC.de ? 0 : c;
            this.A(b);
            if (Tz()) {
                b = 0.2;
                if (this.a != NC.dh) {
                    var f = ea(tv(this.c, Tn), 10);
                    this.e();
                    b *= (c - f) / (c - d);
                    d = f
                }
                this.a = a;
                this.b = new Uz(this.c, b, {
                    left: d + gp
                }, {
                    left: c + gp
                }, Un + b + Dp);
                this.b[ad]();
                uw(this.b, om, R(this.e, this));
                a == NC.bh ? uw(this.b, om, R(this.A, this, !1)) : this.A(!0)
            } else qv(this.c, Tn, c + gp), this.A(a == NC.de ? !0 : !1)
        }
    };
    MC[u].e = function () {
        0 != this.a && (this.b[lb](), Rw(R(Bw, this, this.b)), this.a = 0, this.b = null)
    };

    function OC() {
        var a = PB();
        return null != a && !a[qb]() && 0 < a.ua()[s]
    };

    function PC(a, b, c) {
        LC[G](this, b, c);
        this.n = new Jx;
        this.m = new Jx;
        this.o = a || 5;
        this.f = null;
        this.s = !1;
        this.j = oa(this.o);
        this.K = oa(this.o);
        this.F = TA.qa();
        this.w = this.d = this.e = null
    }
    S(PC, LC);
    var QC = N,
        RC = N;
    P = PC[u];
    P.t = function () {
        PC.k.t[G](this);
        for (var a = 0; a < this.o; ++a) this.vd(new xz(N), !0)
    };
    P.pa = function (a) {
        PC.k.pa[G](this, a);
        Y.add(this.h(), dk)
    };
    P.Hf = function (a) {
        a = this.m.S(cs(a));
        for (var b = 0; b < wA(a.a, 2) && b < this.o; ++b) {
            var c = Ky(this, b);
            c.Oa(NA(MA(a, b)));
            c.Ba(b);
            c.A(!0, !0)
        }
        for (; b < this.o; ++b) Ky(this, b).A(!1)
    };

    function SC(a, b) {
        var c = a.n.S(cs(b));
        return null != c ? c : null
    }
    P.Oe = function () {
        PC.k.Oe[G](this);
        null != this.e && this.e[fd]();
        null != this.d && this.d[fd]();
        this.m[ld]();
        this.n[ld]()
    };
    Xa(P, function (a) {
        PC.k[fd][G](this, a);
        this.m[Cc](cs(a));
        this.n[Cc](cs(a))
    });
    P.A = function (a, b) {
        var c = this.xa;
        a && null != c ? (TC(this, c), this.F.ge(jk, 2E3, this.w, 1, Gj)) : null != this.f && UC(this.f, 0, 0);
        null != c && (a ? this.pd(c) : this.Vf(c));
        var c = PC.k.A[G](this, a, b),
            d;
        if (d = a) d = null != this.h();
        d && Mv(this.h(), !1);
        return c
    };
    P.dc = function () {
        PC.k.dc[G](this);
        if (this.s)
            for (var a = 0; a < this.j[s]; a++) {
                var b = this.j[a];
                Sw(b.d);
                b.e();
                b.j(-1);
                b.e();
                b.A(!1)
            }
    };
    P.pd = function (a) {
        Y.add(a, Lq);
        null === this.e || null === this.d ? va(a, RC) : (this.e[fd](a), gA(this.d, a))
    };
    P.Vf = function (a) {
        Y[Cc](a, Lq);
        null === this.e || null === this.d ? va(a, QC) : (this.d[fd](a), gA(this.e, a))
    };
    P.Pa = function (a) {
        if (a[pd] || a[Pb] || a[nb] || 36 == a[H] || 35 == a[H]) return !1;
        var b = PC.k.Pa[G](this, a);
        if (!b && (37 == a[H] || 39 == a[H])) {
            for (var c = cs(this.xa), d = this.a.$a(), f = 0; f < d[s] && d[f] != c; ++f);
            d = Cv(this.xa[K][K]);
            c = null;
            if (!d && 37 == a[H] || d && 39 == a[H]) c = !1;
            if (!d && 39 == a[H] || d && 37 == a[H]) c = !0;
            if (this.Qf(c) && (d = this.xa, (d = c ? Su(d) : void 0 != d.previousElementSibling ? d.previousElementSibling : Tu(d[kb], !1)) && d != this.xa)) return this.dc(), this.Gh(c), this.ke(this.a.S(cs(d)), 0, 0), VC(this), a[ac](), a[Xb](), !0
        }
        return b
    };
    P.ke = function (a, b, c) {
        Cv((a.g || this.xa)[K][K]) ? qv(this.h(), Ol, Cp) : qv(this.h(), Ol, N);
        if (this.s)
            for (var d = 0; d < this.j[s]; d++) WC(this, d), this.j[d].setData(ig);
        this.Hf(a.g);
        PC.k.ke[G](this, a, b, c)
    };

    function XC(a, b, c) {
        !a.s || b >= a.o || c == N || (a.j[b].setData(c), WC(a, b))
    }

    function WC(a, b) {
        var c = a.j[b];
        Vz(Ky(a, b).h(), 6, c.h(), 4, new T(1, 0))
    }
    P.jd = function (a) {
        PC.k.jd[G](this, a);
        var b = this.xa;
        null != b && (this.F.ge(hk, 2E3, this.w, 1, Gj), TC(this, b), a = this.Zd(a[F]), -1 != a && (Sw(this.K[a]), this.K[a] = Rw(R(this.F.ge, this.F, ik, 2E3, this.w, 1, Gj), 300), this.s && (b = this.j[a], Cv(this.xa[K][K]) ? (Y.add(b.h(), Cp), qv(b.h(), Ol, Cp)) : (Y[Cc](b.h(), Cp), qv(b.h(), Ol, N)), WC(this, a), Sw(b.d), 0 == b.a ? b.d = Rw(R(b.j, b, 1), 300) : b.j(1))))
    };
    P.Uf = function (a) {
        PC.k.Uf[G](this, a);
        a = this.Zd(a[F]); - 1 != a && (Sw(this.K[a]), this.s && this.j[a].n())
    };
    P.Zd = function (a) {
        return My(this, a)
    };
    P.Qf = Qr(!0);
    P.Gh = Nr();
    P.Ne = function (a, b, c, d, f) {
        if (!a) return null;
        b = {
            g: a,
            zf: b,
            gh: c,
            Of: d ? Gl : ll,
            $d: f
        };
        this.a.L(cs(a), b);
        return b
    };
    P.Rc = function (a) {
        PC.k.Rc[G](this, a);
        Z(this).l(a.g, ko, this.Qh);
        Z(this).l(a.g, jo, this.Ee);
        Z(this).l(a.g, Gl, this.Oh);
        Z(this).l(a.g, io, this.Ph)
    };
    P.pe = function (a) {
        PC.k.pe[G](this, a);
        Z(this).T(a.g, ko, this.Qh);
        Z(this).T(a.g, jo, this.Ee);
        Z(this).T(a.g, Gl, this.Oh);
        Z(this).T(a.g, io, this.Ph)
    };

    function TC(a, b) {
        if (null != a.f) {
            var c = a.m.S(cs(b)),
                d = a.f.g && (a.f.g[Zb] || ev(a.f.g));
            if (0 < LA(c)[s] && 0 < wA(c.a, 3)) {
                var f = d[y](LA(c));
                if (0 <= f) {
                    for (var d = [], g = 0; g < wA(c.a, 3); ++g) d[r]({
                        sd: f + OA(new AA(vA(c.a, 3)[g])),
                        Lf: f + PA(new AA(vA(c.a, 3)[g]))
                    });
                    UC(a.f, 0, 0, void 0, d)
                } else f = d[y](JA(c)), 0 <= f && UC(a.f, f, f + JA(c)[s])
            }
        }
    }

    function YC(a, b) {
        b ? Ix(a.a.Va(!1), function (a) {
            this.b.rf(a.g) == N && (Y.add(a.g, Oq), this.b.hb(a.g, xj));
            return !0
        }, a) : Ix(a.a.Va(!1), function (a) {
            Y.Ia(a.g, Oq) && (Y[Cc](a.g, Oq), this.b.hb(a.g, N));
            return !0
        }, a)
    }
    P.Qh = function (a) {
        OC() || (Y.add(a[F], Pq), TC(this, a[F]), YC(this, !0), this.F.ge(gk, 2E3, this.w, 1, Gj))
    };
    P.Ee = function (a) {
        Y[Cc](a[F], Pq);
        null != this.f && !this.H() && UC(this.f, 0, 0);
        YC(this, !1)
    };
    P.Ph = function (a) {
        OC() && this.Ee(a)
    };
    P.Oh = function (a) {
        OC() || (this.Ee(a), RB(a[F])[Nc]())
    };

    function VC(a) {
        Ix(a.a.Va(!1), function (a) {
            Y[Cc](a.g, Pq);
            return !0
        }, a)
    }
    P.Ef = function (a) {
        a && (a[nc] && a[nc].xa) && (a.b = a[nc].xa);
        PC.k.Ef[G](this, a)
    };
    P.Fe = function (a) {
        OC() ? VC(this) : PC.k.Fe[G](this, a)
    };

    function ZC() {
        kC[G](this, dn, en);
        this.Fb = TA.qa();
        this.ta = this.n = this.o = this.D = null
    }
    S(ZC, kC);
    P = ZC[u];
    P.vc = function (a, b, c, d) {
        this.f.l(m[D], Nn, function (a) {
            16 == a[H] && $C(this, !1)
        });
        this.f.l(m[D], Ln, function (a) {
            16 == a[H] && $C(this, !0)
        });
        ZC.k.vc[G](this, a, b, c, d);
        this.f.l(this, Yl, this.jk);
        this.f.l(this, Xl, this.ik);
        this.f.l(this, Bk, this.gk);
        this.f.l(this, Wl, this.hk)
    };

    function $C(a, b) {
        for (var c = 0, d = a.b[s]; c < d; c++)
            for (var f = Ru(a.b[c]), g = 0, h = f[s]; g < h; ++g) {
                var l = f[g],
                    q = Y.Ia(l, Lq) || Y.Ia(l, Pq);
                b ? (Y.add(l, cn), null === a.o || null === a.n ? va(l, RC) : (a.o[fd](l), gA(a.n, l), q && oA(a.n, l))) : (Y[Cc](l, cn), null !== a.o && null !== a.n ? (gA(a.o, l), a.n[fd](l), q && oA(a.o, l)) : q || va(l, QC))
            }
    }
    P.Rh = function (a) {
        a.event[pd] || a[ac]()
    };
    P.jk = function () {
        this.Fb.log(jr, {
            action: Sp
        }, this.ta)
    };
    P.ik = function () {
        var a = bB(k);
        if (a)
            if (a.empty) try {
                a.empty()
            } catch (b) {} else try {
                a[ub]()
            } catch (c) {}
    };
    P.gk = function () {
        this.d && (this.D = {
            action: cm,
            dx: this.d[Ld] - this.d.wf,
            dy: this.d[Md] - this.d.xf
        }, this.a && ev(this.a) && (this.D.text = ev(this.a)))
    };
    P.hk = function () {
        this.D && (this.Fb.log(jr, this.D, this.ta), this.D = null)
    };
    P.th = function (a) {
        var b = Gu(Qp);
        $u(b, ev(a));
        b[C].margin = Ff;
        b[C].padding = zg;
        wa(b[C], pp);
        b[C].whiteSpace = yo;
        a = Gu(Qp);
        a[p](b);
        return a
    };

    function aD(a, b, c) {
        this.ea = this.N = this.c = null;
        PC[G](this, a, b, c)
    }
    S(aD, PC);
    P = aD[u];
    P.Gh = Or("c");
    P.A = function (a, b) {
        this.N = this.xa;
        var c = aD.k.A[G](this, a, b);
        this.c = null;
        a ? this.ea = this.sb() : null != this.ea && this.ea != this.sb() && this[A](new cw(Hj, this));
        return c
    };
    P.sb = function () {
        if (null != this.N) {
            var a = ev(this.N);
            if (null != a) return a
        }
        return N
    };
    P.pd = function (a) {
        aD.k.pd[G](this, a);
        Y.add(a, Kq);
        a.contentEditable = !0;
        xC(this, a);
        wC(this)[Fc]();
        dv(wC(this), !0);
        null === this.d || oA(this.d, a);
        Z(this).l(a, Ln, this.Bh);
        Z(this).l(a, jo, this.qe);
        Z(this).l(a, ko, this.qe);
        if (null != this.c) {
            var b = RB(a);
            a = this.c ? b.$() : b.ka();
            b = dB(b);
            zB(b, a, b, a)[Nc]()
        }
    };
    P.Vf = function (a) {
        aD.k.Vf[G](this, a);
        Y[Cc](a, Kq);
        a.contentEditable = !1;
        wC(this) && dv(wC(this), !1);
        null != this.e && gA(this.e, a);
        Z(this).T(a, Ln, this.Bh);
        Z(this).T(a, jo, this.qe);
        Z(this).T(a, ko, this.qe)
    };
    P.qe = function () {
        var a = PB();
        null == a || a.Q() == a.Y() && a.$() == a.ka() || this.A(a.Q() == a.Y())
    };
    P.Bh = function (a) {
        if (13 == a[H] || 3 == a[H]) return null === BC(this) ? (this.dc(), a[Xb](), a[ac](), !0) : !1;
        null === BC(this) || !Nw(a) && 37 != a[H] && 39 != a[H] || (this.xa[Fc](), this.La(null));
        return !1
    };
    P.Qf = function (a) {
        var b = PB();
        if (b.Q() == b.Y() && b.$() == b.ka()) {
            var c = b.gc() ? b.$() : b.ka(),
                b = RB(dB(b));
            if (!a && c == b.$() || a && c == b.ka()) return !0
        }
        return !1
    };

    function bD(a, b, c) {
        PC[G](this, a, b, c);
        this.c = null
    }
    S(bD, PC);
    P = bD[u];
    P.pa = function (a) {
        bD.k.pa[G](this, a);
        this.c = new cD(N);
        this.vd(this.c, !0)
    };
    P.Hf = function (a) {
        bD.k.Hf[G](this, a);
        Ha(dD(this.c.h()), this.b.rf(a))
    };
    P.A = function (a, b) {
        var c = bD.k.A[G](this, a, b),
            d;
        if (d = a) d = null != this.h();
        d && (wC(this) != dD(this.c.h()) && wC(this) != eD(this.c.h()) || this.c.La(!0));
        return c
    };
    P.jd = function (a) {
        bD.k.jd[G](this, a);
        a[F] == this.c ? xC(this, dD(this.c.h())) : xC(this, this.h());
        wC(this)[Fc]();
        $a(wC(this), 0)
    };
    P.Zd = function (a) {
        return a == this.c ? -1 : bD.k.Zd[G](this, a)
    };
    P.Pa = function (a) {
        return 9 == a[H] ? (this.c.ga & 2 ? (wC(this) == dD(this.c.h()) ? xC(this, eD(this.c.h())) : xC(this, dD(this.c.h())), wC(this)[Fc](), $a(wC(this), 0)) : this.c.La(!0), a[ac](), a[Xb](), !0) : bD.k.Pa[G](this, a)
    };
    P.Qf = function () {
        return null === BC(this) || !(BC(this) instanceof cD)
    };
    P.pd = function (a) {
        bD.k.pd[G](this, a);
        null === this.d || oA(this.d, a)
    };

    function cD(a, b, c) {
        hz[G](this, a, c || fD.qa(), b);
        nz(this, 4, !1)
    }
    S(cD, hz);
    P = cD[u];
    P.Ge = function (a) {
        a[F] == eD(this.h()) && this.dg()
    };
    P.dg = function () {
        this[A](Hj)
    };
    P.M = function () {
        cD.k.M[G](this);
        Z(this).l(eD(this.h()), ll, this.dg)
    };
    P.X = function () {
        Z(this).T(eD(this.h()), ll, this.dg);
        cD.k.X[G](this)
    };
    P.sb = function () {
        return dD(this.h())[Zb]
    };

    function fD() {}
    S(fD, Xy);
    Ur(fD);
    var gD = N;
    fD[u].t = function (a) {
        var b = a.b.t(En, {
            value: a.ab(),
            id: bk,
            type: sq
        }),
            c = a.b.t(En, {
                value: gD,
                id: ak,
                "class": N,
                type: Yk
            });
        return a.b.t(Sl, {
            id: Zj
        }, b, c)
    };

    function dD(a) {
        return a[I]
    }

    function eD(a) {
        return a[I][zd]
    };

    function hD() {
        var a = new Cz(ol);
        this.a = Tr;
        this.b = a || new Cz;
        Oz(this.b, ml) || this.b.L(ml, sr)
    }

    function iD(a, b, c, d, f, g) {
        var h = a.b.U();
        h.L(Np, b);
        h.L(zq, c);
        h.L(nn, d);
        h.L(lp, N);
        h.L(Fp, tg);
        b = og;
        if (g) {
            c = g.$a();
            d = 0;
            for (var l; l = c[d]; d++) Pz(h, l, g.Qa(l))
        }
        h = h[mb]();
        c = bi;
        2E3 <= h[s] ? c = Di : h[s] && (b += Dh + h, h = N);
        g = b;
        a = R(f || a.a, a);
        f = c;
        b = new jy;
        my[r](b);
        a && b.l(Bl, a);
        vw(b, np, b.Hj, !0, void 0, void 0);
        b[zc](g, f, h, void 0)
    };

    function jD(a, b, c, d, f, g, h, l, q) {
        zy[G](this, b);
        this.m = a;
        this.d = sk;
        this.c = N;
        this.N = new hD;
        this.e = c ? null : void 0;
        this.W = !! d && mx && !U;
        this.w = null != l ? l : 0;
        this.a = this.W ? new aD : new bD;
        if (0 < this.w)
            for (a = this.a, a.s = !0, b = 0; b < a.o; b++) d = Gu(Sl, Em, N), c = Gu(Sl, null, d), d = new MC(c, d), a.j[b] = d, m[D][p](c);
        this.a.pa(f);
        this.o = g || null;
        this.K = null != h ? h : -1;
        this.n = TA.qa();
        this.f = new Jx;
        this.s = this.j = null;
        (this.F = q || null) && pw(this.F, Hj, this.Ki, !1, this)
    }
    S(jD, zy);

    function kD(a) {
        a.j = tn;
        a.a.w = a.j
    }

    function lD(a, b) {
        b && (a.m = b);
        if (a.m) {
            var c = 0 != xu(Yj)[s];
            a.b.Kd(a.g);
            a.a.Oe();
            for (var d = new CA(a.m), f = N, g = 0, h = 0, l = oa(21), q = 0; q < l[s]; q++) l[q] = 0;
            for (var v = N, q = 0; q < RA(d); q++) mD(d, q) && (v += O), v += EA(SA(d, q));
            for (q = 0; q < RA(d); q++) {
                mD(d, q) ? a.b[p](a.g, a.b[Wb](O)) : a.c != On && a.c != Xn || a.b[p](a.g, Ku(a.b.B, ox));
                var t;
                t = EA(SA(d, q));
                if (/^[\s\xa0]*$/ [wb](t)) {
                    t = a.b;
                    var B;
                    B = EA(SA(d, q))[Mb](/(\r\n|\r|\n)/g, dh);
                    t = Ku(t.B, B)
                } else {
                    t = a.b.t(Qp, null, a.b[Wb](EA(SA(d, q))));
                    FA(SA(d, q)) && Y.add(t, pn);
                    GA(SA(d, q)) && Y.add(t, rk);
                    B = HA(SA(d,
                        q));
                    0 <= a.K && B < a.K && (h++, Y.add(t, ck));
                    g += B;
                    1E3 == B ? l[l[s] - 1]++ : l[n[Rb]((B - 0) / 50)]++;
                    var z = nD(SA(d, q), d);
                    if (null != z) {
                        null != z.a[4] && 0 < LA(z)[s] ? f = LA(z) : (new yA(z.a)).a[4] = f;
                        Lx(a.f, a.d + hg + a.c + hg + JA(z)) && (B = a.f.S(a.d + hg + a.c + hg + JA(z)), B != NA(MA(z, 0)) && (a.b.hb(t, B), Y.add(t, Yj), oD(a, !0)));
                        null != a.s && v != a.s && (a.b.hb(t, 0 == q ? a.s : N), Y.add(t, Yj), oD(a, !0));
                        null != a.a.e ? gA(a.a.e, t) : va(t, QC);
                        var V = a.a;
                        B = t;
                        var ha = q;
                        V.n.L(cs(B), ha);
                        V.m.L(cs(B), z);
                        z = V;
                        V = new ov(-2, 1, -2, 1);
                        B && Lx(z.a, cs(B)) || (B = z.Ne(B, 5, 4, !1, V), z.R && z.Rc(B))
                    }
                }
                a.b[p](a.g,
                    t)
            }
            d = {
                confSum: g,
                numLowConf: h,
                numPhrases: RA(d)
            };
            for (f = 0; f < l[s]; f++) 0 != l[f] && (d[Zk + f] = l[f]);
            XA(a.n, Jq, d);
            if (Wr(a.e)) {
                l = a.g;
                null != a.e && (Z(a).T(a.e, Wl, a.Qe), a.e.z());
                a.e = new ZC;
                a.e.ta = a.j;
                null !== a.a.e && null !== a.a.d && (a.e.o = a.a.e, a.e.n = a.a.d);
                a.e.Na = Nq;
                a.e.Eb = !0;
                a.e.pi(Mq);
                d = a.Aa();
                null !== d && Ex[wb](d) ? a.e.vc(l, 5) : a.e.vc(l, 4);
                l = a.e;
                if (!l.Db) {
                    d = 0;
                    for (f = l.b[s]; d < f; d++)
                        for (g = Ru(l.b[d]), h = 0, q = g[s]; h < q; ++h) t = v = g[h], B = cs(t), l.W[B] = v, l.Ma && (l.m.l(v, ko, l.ni), l.m.l(v, jo, l.mi)), l.Ea && (l.m.l(t, ko, l.li), l.m.l(t, jo,
                            l.ki)), l.j[r](v), l.m.l(t, [ho, Hq], l.oi);
                    l.Db = !0
                }
                Z(a).l(a.e, Wl, a.Qe)
            }(l = 0 != xu(Yj)[s]) || oD(a, !1);
            (l || c) && a[A](Hj)
        }
    }

    function nD(a, b) {
        for (var c = null, d = 0, f = wA(b.a, 5); d < f && null == c; d++)
            for (var g = new yA(vA(b.a, 5)[d]), h = 0; h < wA(a.a, 1); h++)
                if (KA(g) == vA(a.a, 1)[h]) {
                    c = g;
                    break
                }
        return c
    }

    function pD(a) {
        var b = [];
        if (a.g && a.g[od])
            for (var c = 0; c < a.g[od][s]; ++c) b[c] = a.b.rf(a.g[od][c]);
        return b[M](N)
    }

    function qD(a, b) {
        for (var c = 0; c < RA(a); c++)
            for (var d = SA(a, c), f = 0; f < wA(d.a, 1); f++)
                if (vA(d.a, 1)[f] == b) {
                    for (var d = a, g = -1, f = RA(d), h = c; 0 <= h; h--)
                        if (0 == IA(SA(d, h))) {
                            g = h;
                            break
                        }
                    for (h = c + 1; h <= RA(d); h++)
                        if (0 == IA(SA(d, h))) {
                            f = h;
                            break
                        }
                    var l = f;
                    if (d) {
                        f = c + 1;
                        h = c;
                        for (c = EA(SA(d, c))[s]; 64 > c && (f != l || h != g);) f < l && (c += EA(SA(d, f++))[s] + 1), 64 > c && h > g && (c += EA(SA(d, --h))[s] + 1);
                        c = [];
                        c[r](EA(SA(d, h)));
                        for (g = h + 1; g < f; g++) mD(d, g) && c[r](O), c[r](EA(SA(d, g)));
                        d = c[M](N)
                    } else d = N;
                    return d
                }
    }

    function mD(a, b) {
        var c;
        if (c = 0 != b)
            if (c = FA(SA(a, b)))
                if (c = !GA(SA(a, b - 1))) {
                    c = EA(SA(a, b - 1));
                    var d = c[s] - 1;
                    c = !(0 <= d && c[y](Rd, d) == d)
                }
        return c
    }
    P = jD[u];
    P.ad = Pr("d");
    P.Aa = Pr("c");
    P.t = function () {
        this.za(this.b[Ic](Qp))
    };
    P.za = function (a) {
        this.g = a;
        lD(this)
    };
    P.M = function () {
        jD.k.M[G](this);
        Z(this).l(this.a, Hj, this.uh);
        null != this.o && Z(this).l(this.o, ll, this.vh);
        Iw(Z(this), this.a, Lp, this.Qj);
        Z(this).l(this.a, Lp, this.Pj)
    };
    P.X = function () {
        Z(this).T(this.a, Hj, this.uh);
        Wr(this.e) && Z(this).T(this.e, Wl, this.Qe);
        null != this.o && Z(this).T(this.o, ll, this.vh)
    };
    P.p = function () {
        jD.k.p[G](this);
        this.a.z();
        this.e.z()
    };
    P.Qe = function (a) {
        a = a.a[K];
        null != a && rD(a);
        this[A](Hj)
    };
    P.uh = function (a) {
        if (a[gd] != ln || a[F] == this.a) {
            var b = a.b;
            null == b && null != a[nc] && (b = a[nc].xa);
            var c = a[F].sb();
            if (null != b && null != a[F]) {
                var d = b,
                    f = this.a.m.S(cs(d));
                this.b.hb(d, c);
                c == NA(MA(f, 0)) ? (Y[Cc](d, Yj), 0 == xu(Yj)[s] && oD(this, !1)) : (Y.add(d, Yj), oD(this, !0));
                null != this.f && this.f.L(this.d + hg + this.c + hg + JA(f), c);
                d = this.a.m.S(cs(b));
                a[F] instanceof xz && $r(a[F].ma()) && (f = MA(d, a[F].ma()).a[2], null != f && f ? Y.add(b, pn) : Y[Cc](b, pn), f = MA(d, a[F].ma()).a[3], null != f && f ? Y.add(b, rk) : Y[Cc](b, rk), rD(b[K]));
                null != this.f &&
                    this.f.L(this.d + hg + this.c + hg + JA(d), c);
                var g = NA(MA(d, 0)),
                    f = new CA(this.m),
                    h = KA(d),
                    l = My(this.a, a[F]),
                    c = {
                        sl: this.d,
                        tl: this.c,
                        utrans: c,
                        gtrans: g,
                        index: l,
                        ophrase: JA(d),
                        osentence: LA(d),
                        tsentence: qD(f, h)
                    }, b = SC(this.a, b);
                null != b && (c.confidence = HA(SA(f, b)));
                if (a[F] instanceof cD || -1 == l) c.manual = 1;
                for (var q in c) Zr(c[q]) && 64 < c[q][s] && (c.tr = 1, c[q] = c[q][Od](0, 64));
                this.n.log(ir, c, this.j);
                this[A](Hj)
            }
        }
    };
    P.Qj = Nr();
    P.vh = function () {
        this.f[ld]();
        this.s = null;
        lD(this);
        this.n.log(wl, void 0, this.j)
    };
    P.Pj = function () {
        if (0 < this.w) {
            var a = this.a.m.S(cs(this.a.xa)),
                b = new Cz;
            if (1 == this.w && 1 < wA(a.a, 2)) {
                for (var c = [], d = 0, f = wA(a.a, 2); d < f; d++) c[r](NA(MA(a, d)));
                Pz(b, lp, c);
                iD(this.N, this.c, this.d, wu(nn)[Zb], R(this.hj, this), b)
            } else
                for (d = 0, f = wA(a.a, 2); d < f; d++) c = NA(MA(a, d)), b.L(lp, c), iD(this.N, this.c, this.d, wu(nn)[Zb], R(this.ij, this, d), b)
        }
        a = new CA(this.m);
        b = SC(this.a, this.a.xa);
        d = {};
        null != b && (d.confidence = HA(SA(a, b)));
        this.n.log(So, d, this.j)
    };

    function sD(a) {
        if (!wy(a) || 0 != xy(a)[y](ij)) return null;
        var b;
        var c = xy(a);
        a = {
            "class": Qq,
            url: ga(a.d)
        };
        try {
            b = $x(c)
        } catch (d) {
            throw b = TA.qa(), a.js = c, a.error = d[fc], b.log(Jn, a), d;
        }
        return Xr(b) ? b : null
    }
    P.hj = function (a) {
        a = sD(a[F]);
        if (null != a) {
            a = new DA(a);
            for (var b = 0; b < wA(a.a, 0); b++) {
                var c = tD(this, new CA(vA(a.a, 0)[b]));
                XC(this.a, b, c)
            }
        }
    };
    P.ij = function (a, b) {
        var c = sD(b[F]);
        null != c && (c = tD(this, new CA(c)), XC(this.a, a, c))
    };

    function tD(a, b) {
        if (1 == a.w || 1 < RA(b)) {
            for (var c = QA(new BA(vA(b.a, 0)[0])), d = 1, f = wA(b.a, 0); d < f; d++) c += O + QA(new BA(vA(b.a, 0)[d]));
            return c
        }
        if (1 == RA(b)) {
            var c = [],
                d = SA(b, 0),
                g = nD(d, b);
            if (null == g) return ig;
            d = 0;
            for (f = n.min(a.w, wA(g.a, 2)); d < f; d++) c[r](NA(MA(g, d)));
            return c[M](Bf)
        }
        return ig
    }

    function oD(a, b) {
        null != a.o && Jv(a.o, b);
        null != a.F && (b && a.F.reset(), Jv(a.F.h(), b))
    }

    function rD(a) {
        for (var b = a[od], c = {}, d = null, f = -1, g = [], h = 0; h < b[s]; h++) {
            var l = b[h];
            1 == l[x] ? (c[h] = !0, d && (!Y.Ia(d, rk) && Y.Ia(l, pn)) && (0 <= f ? c[f] = !0 : g[r](l)), d = l, f = -1) : ev(l) == O && (f = h)
        }
        for (h = b[s] - 1; 0 <= h; h--) c[h] || a[rc](b[h]);
        for (h = 0; h < g[s]; h++) a[cc](m[Wb](O), g[h])
    }
    P.Ki = function () {
        var a = {};
        a.sl = this.d;
        a.tl = this.c;
        for (var b = [], c = 1, d = new CA(this.m), f = Ru(this.g), g = 0; g < f[s]; g++) {
            var h = SC(this.a, f[g]),
                l = this.a.m.S(cs(f[g]));
            if (null != h) {
                for (var h = ev(f[g]), q = 0; q < wA(l.a, 2) && h != NA(MA(l, q)); q++);
                q == wA(l.a, 2) && (q = -1);
                if (0 != q) {
                    a[zn + c] = q;
                    a[lr + c] = h;
                    a[fn + c] = NA(MA(l, 0));
                    a[Ho + c] = JA(l);
                    h = LA(l);
                    l = qD(d, KA(l));
                    if (0 == b[s] || h != b[b[s] - 1]) b[r](h), a[Lo + c] = h, a[Yq + c] = l;
                    c++
                }
            }
        }
        this.n.log(Op, a, this.j)
    };

    function uD() {
        this.g = null;
        this.a = Gu(Uh, an, m[Wb](N));
        this.g && (Ou(this.a, this.g), vD(this))
    }

    function UC(a, b, c, d, f) {
        var g = d || bn;
        d = a.g && (a.g[Zb] || ev(a.g));
        vD(a);
        Nu(a.a);
        if (b != c || f) {
            if (0 < b) {
                var h = d[Zc](0, b);
                wD(a.a, h, 0, f)
            }
            b < c && (h = d[Zc](b, c), g = Gu(Ii, g), wD(g, h, b, f), a.a[p](g));
            c < d[s] && (h = d[Zc](c), wD(a.a, h, c, f))
        }
    }

    function vD(a) {
        var b;
        b = a.g;
        var c = vu(b),
            d = U && b[Xc];
        d && hv(tu(c)) && d[w] != sk && d[L] != sk && !d.Tj ? (c = Sv(b, d[w], ur, Vo), b = Sv(b, d[L], jn, To), b = new Ct(c, b)) : (d = Nv(b), c = Qv(b), b = Rv(b), b = new Ct(d[w] - b[E] - c[E] - c[Pd] - b[Pd], d[L] - b.top - c.top - c[J] - b[J]));
        Ov(a.a, b);
        b = Bv(a.g);
        Fv(a.a, b.x, b.y);
        b = Qv(a.g);
        qv(a.a, Po, b[E] + gp);
        qv(a.a, Qo, b[Pd] + gp);
        a.a.dir = a.g.dir
    }

    function wD(a, b, c, d) {
        d = d || [];
        for (var f = 0, g; g = d[f]; f++)
            if (!(0 > g.sd - c)) {
                if (g.sd - c >= b[s]) break;
                if (0 < g.sd - c) {
                    var h = b[Zc](0, g.sd - c);
                    xD(a, h)
                }
                var l = g[zb] || bn,
                    h = b[Zc](g.sd - c, g.Lf - c),
                    l = Gu(Ii, l);
                xD(l, h);
                a[p](l);
                b = b[Zc](g.Lf - c);
                c = g.Lf
            }
        b && xD(a, b)
    }

    function xD(a, b) {
        for (var c = b[Mb](/(\r\n|\r|\n)/g, Rd)[Qb](Rd), d = 0, f = c[s]; d < f; d++) {
            if (0 < d) {
                var g = Gu(Mh);
                a[p](g)
            }
            g = m[Wb](ga(c[d]));
            a[p](g)
        }
    };

    function yD(a) {
        for (var b = {}, c = 0; c < a[s]; ++c) b[a[c]] = !0;
        return b
    }

    function zD(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }

    function AD(a, b) {
        if (a.c) return b || Tr;
        a.a[r](0);
        var c = a.a[s] - 1;
        return R(function () {
            this.a[c]++;
            b && b[id](null, arguments);
            BD(this)
        }, a)
    }
    zD[u].Za = function (a) {
        return this.c ? a : R(function () {
            if (this.c) a[id](null, arguments);
            else {
                var b = arguments;
                this.b[r](function () {
                    a[id](null, b)
                })
            }
        }, this)
    };
    zD[u].Vb = function () {
        this.a[0] = 1;
        BD(this)
    };

    function BD(a) {
        for (var b = 0; b < a.a[s]; ++b)
            if (0 == a.a[b]) return;
        a.c = !0;
        for (b = 0; b < a.b[s]; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c[G]()
        }
        a.b = [];
        a.a = []
    }

    function CD(a) {
        this.c = a;
        this.b = this.a = !1
    }

    function DD(a, b) {
        return R(function () {
            b && b[id](null, arguments);
            this.b ? this.a || (this.c[G](), this.a = !0) : this.a = !0
        }, a)
    }
    CD[u].Vb = function () {
        this.b || (this.b = !0, this.a && this.c[G]())
    };

    function ED(a, b, c, d) {
        this.a = b;
        this.f = a;
        this.j = c || 0;
        this.O = d || 0;
        this.b = this.c = !1
    }
    ED[u].go = function () {
        this.c || this.e()
    };
    ED[u].e = function () {
        (this.c = (this.b = !! this.f[G]()) || 0 >= --this.O) ? (this.a[G](null, this.b), this.d = 0) : this.d = k[Lb](R(this.e, this), this.j)
    };
    Ba(ED[u], function () {
        this.d && k[Cb](this.d);
        this.c = !0;
        this.a[G](null, this.b)
    });

    function FD(a, b) {
        return function () {
            a[A](b)
        }
    }

    function GD(a) {
        a = Ws(a)[Kd]()[Mb](xj, Cf);
        if (a == Cr) return Ar;
        if (a == Dr) return Br;
        var b = a[y](Cf);
        a = 0 <= b ? a[Zc](0, b) : a;
        return a == zr ? Ar : a
    }

    function HD(a) {
        var b = [],
            c;
        for (c in a)
            if (a[c] !== ka[u][c]) {
                var d = Ys(c);
                if (Vr(a[c]) == qk)
                    for (var f = 0; f < a[c][s]; ++f) b[r](d + zh + Ys(a[c][f]));
                else b[r](d + zh + Ys(a[c]))
            }
        return b[M]($e)
    }

    function ID(a, b) {
        var c = b || {};
        c.nca = a;
        c.client = As;
        ss && (c.logld = mr + ss);
        var d = new Image;
        d.src = lg + Is + ng + HD(c);
        pa(d, function () {
            pa(d, null)
        })
    }

    function JD(a, b) {
        if ((U || Xt) && k[$b][kc] != m.domain) {
            KD = KD ? KD + 1 : 1;
            var c = im + KD + xj + is()[mb](36);
            k[c] = function () {
                k[c] = void 0;
                a.src = Hn;
                b && k[Lb](function () {
                    b()
                }, 0)
            };
            a.src = In + m.domain + kf + c + lf
        } else b && b()
    }
    var KD;

    function LD() {
        var a = {};
        try {
            for (var b in ka[u]) {
                var c = ka[u][b];
                delete ka[u][b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }

    function MD(a) {
        for (var b in a) ka[u][b] = a[b]
    }

    function ND(a) {
        for (var b in a)
            if (a[b] !== ka[u][b]) return !1;
        return !0
    }

    function OD(a, b) {
        return a != sk && a != Ar && a == b
    };
    var PD, QD, RD;
    (function () {
        function a(a, c, g) {
            var h = oa[u][Kb][G](arguments);
            h[Dd](0, 2);
            h = Pn + a[mb](16) + wn + c[mb](16) + (h[s] ? Cf + h[M](xj) : N);
            b ? b[r](h) : ID(h)
        }
        var b = null,
            c = null;
        PD = function (b, c, g) {
            for (var h in g) g[h] !== ka[u][h] && (c[h] = as(g[h]) ? g[h] : hs(a, b, ia(g[h])))
        };
        QD = function () {
            b && RD();
            b = [];
            c = pw(k, cr, function () {
                RD()
            })
        };
        RD = function () {
            c && (yw(c), c = null);
            b && b[s] && ID(b[M](N));
            b = null
        }
    })();

    function SD(a) {
        return th + a.id + Je
    }

    function TD(a) {
        return a.zh + fh + a.id + Ce + a.yh
    }

    function UD(a) {
        return gh + a.dir + Oe + a.xj + se + (a.yj ? ph + a.zj + He : N) + Ug + qs.vk + Xg
    }

    function VD(a) {
        var b = eh + a.fk + je + a.method + Ne + (a.dir == Cp ? wp : Tn) + Qe + qs.uk + $d + qs.Yg + Ie;
        a = a.Hb;
        for (var c = a[s], d = 0; d < c; d++) b += rh + a[d] + Zd;
        return b + Vg
    }

    function WD() {
        return jh
    }

    function XD(a) {
        return ih + a.zk + Wg
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/

    function YD(a, b) {
        this.c = [];
        this.f = a;
        this.e = b || null
    }
    P = YD[u];
    P.$b = !1;
    P.kd = !1;
    P.qf = !1;
    P.cj = !1;
    P.Cf = !1;
    P.nf = 0;
    Ba(P, function (a) {
        if (this.$b) this.b instanceof YD && this.b[Hb]();
        else {
            if (this.a) {
                var b = this.a;
                delete this.a;
                if (a) b[Hb](a);
                else b.nf--, 0 >= b.nf && b[Hb]()
            }
            this.f ? this.f[G](this.e, this) : this.Cf = !0;
            this.$b || (a = new ZD, $D(this), aE(this, !1, a))
        }
    });
    P.ah = function (a, b) {
        this.qf = !1;
        aE(this, a, b)
    };

    function aE(a, b, c) {
        a.$b = !0;
        a.b = c;
        a.kd = !b;
        bE(a)
    }

    function $D(a) {
        if (a.$b) {
            if (!a.Cf) throw new cE;
            a.Cf = !1
        }
    }
    P.If = function (a) {
        $D(this);
        aE(this, !0, a)
    };

    function dE(a) {
        return st(a.c, function (a) {
            return as(a[1])
        })
    }

    function bE(a) {
        a.d && (a.$b && dE(a)) && (Q[Cb](a.d), delete a.d);
        a.a && (a.a.nf--, delete a.a);
        for (var b = a.b, c = !1, d = !1; a.c[s] && !a.qf;) {
            var f = a.c[xb](),
                g = f[0],
                h = f[1],
                f = f[2];
            if (g = a.kd ? h : g) try {
                var l = g[G](f || a.e, b);
                Wr(l) && (a.kd = a.kd && (l == b || l instanceof e), a.b = b = l);
                b instanceof YD && (d = !0, a.qf = !0)
            } catch (q) {
                b = q, a.kd = !0, dE(a) || (c = !0)
            }
        }
        a.b = b;
        d && (d = b, l = R(a.ah, a, !0), g = R(a.ah, a, !1), d.c[r]([l, g, void 0]), d.$b && bE(d), b.cj = !0);
        c && (a.d = Q[Lb](px(b), 0))
    }

    function cE() {
        Ts[G](this)
    }
    S(cE, Ts);
    cE[u].message = "Deferred has already fired";
    cE[u].name = "AlreadyCalledError";

    function ZD() {
        Ts[G](this)
    }
    S(ZD, Ts);
    ZD[u].message = "Deferred was canceled";
    ZD[u].name = "CanceledError";

    function eE(a, b) {
        var c = b || {}, d = c[Nb] || m,
            f = m[Ic](Gi),
            g = {
                ji: f,
                Ib: void 0
            }, h = new YD(fE, g),
            l = null,
            q = null != c.timeout ? c.timeout : 5E3;
        0 < q && (l = k[Lb](function () {
            gE(f, !0);
            var b = new hE(1, Vi + a);
            $D(h);
            aE(h, !1, b)
        }, q), g.Ib = l);
        pa(f, ta(f, function () {
            f[Ac] && f[Ac] != Zn && f[Ac] != Bl || (gE(f, c.Cj || !1, l), h.If(null))
        }));
        Ga(f, function () {
            gE(f, !0, l);
            var b = new hE(0, $h + a);
            $D(h);
            aE(h, !1, b)
        });
        Au(f, {
            type: tq,
            charset: Zi,
            src: a
        });
        iE(d)[p](f);
        return h
    }

    function iE(a) {
        var b = a[Id](di);
        return b && 0 != b[s] ? b[0] : a[Nd]
    }

    function fE() {
        if (this && this.ji) {
            var a = this.ji;
            a && a[qd] == Gi && gE(a, !0, this.Ib)
        }
    }

    function gE(a, b, c) {
        null != c && Q[Cb](c);
        pa(a, Tr);
        Ga(a, Tr);
        ta(a, Tr);
        b && k[Lb](function () {
            Qu(a)
        }, 0)
    }

    function hE(a, b) {
        var c = li + a + pf;
        b && (c += Lg + b);
        Ts[G](this, c);
        this.code = a
    }
    S(hE, Ts);

    function jE(a, b) {
        this.b = new yz(a);
        this.a = b ? b : al;
        this.Ib = 5E3
    }
    var kE = 0;
    Pa(jE[u], function (a, b, c, d) {
        a = a || null;
        d = d || xj + (kE++)[mb](36) + is()[mb](36);
        Q._callbacks_ || (Q._callbacks_ = {});
        var f = this.b.U();
        if (a)
            for (var g in a)
                if (!a[gc] || a[gc](g)) {
                    var h = f,
                        l = g,
                        q = a[g];
                    Xr(q) || (q = [ga(q)]);
                    Pz(h.a, l, q)
                }
        b && (Q._callbacks_[d] = lE(d, b), b = this.a, g = zj + d, Xr(g) || (g = [ga(g)]), Pz(f.a, b, g));
        b = eE(f[mb](), {
            timeout: this.Ib,
            Cj: !0
        });
        b.c[r]([null, mE(d, a, c), void 0]);
        b.$b && bE(b);
        return {
            fa: d,
            jh: b
        }
    });
    Ba(jE[u], function (a) {
        a && (a.jh && a.jh[Hb](), a.fa && nE(a.fa, !1))
    });

    function mE(a, b, c) {
        return function () {
            nE(a, !1);
            c && c(b)
        }
    }

    function lE(a, b) {
        return function (c) {
            nE(a, !0);
            b[id](void 0, arguments)
        }
    }

    function nE(a, b) {
        Q._callbacks_[a] && (b ? delete Q._callbacks_[a] : Q._callbacks_[a] = Tr)
    };
    var oE = !1,
        pE = N;

    function qE(a) {
        a = a[xc](/[\d]+/g);
        ua(a, 3);
        return a[M](hg)
    }
    if (ca[tb] && ca[tb][s]) {
        var rE = ca[tb]["Shockwave Flash"];
        rE && (oE = !0, rE.description && (pE = qE(rE.description)));
        ca[tb]["Shockwave Flash 2.0"] && (oE = !0, pE = "2.0.0.11")
    } else if (ca.mimeTypes && ca.mimeTypes[s]) {
        var sE = ca.mimeTypes["application/x-shockwave-flash"];
        (oE = sE && sE.enabledPlugin) && (pE = qE(sE.enabledPlugin.description))
    } else try {
        var tE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            oE = !0,
            pE = qE(tE.GetVariable("$version"))
    } catch (uE) {
        try {
            tE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), oE = !0,
            pE = "6.0.21"
        } catch (vE) {
            try {
                tE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), oE = !0, pE = qE(tE.GetVariable("$version"))
            } catch (wE) {}
        }
    }
    var xE = pE;

    function yE(a, b) {
        this.yc = new yz(a);
        if (b)
            for (var c in b) b[c] !== ka[u][c] && this.yc.a.L(c, b[c])
    }
    S(yE, Wv);
    db(yE[u], Qr(!0));
    Ta(yE[u], function () {
        return this[yd]()
    });
    Pa(yE[u], Qr(null));
    Ba(yE[u], Nr());

    function zE(a, b, c, d) {
        yE[G](this, a, b);
        this.b = null == d || !! d;
        this.a = new jE(this.yc[mb](), c)
    }
    S(zE, yE);
    db(zE[u], Pr("b"));
    Pa(zE[u], function (a, b) {
        this.a.Ib = -1;
        return this.a[zc](a, b)
    });
    Ba(zE[u], function (a) {
        this.a[Hb](a)
    });

    function AE(a, b, c) {
        yE[G](this, N, c);
        this.m = a;
        this.n = b;
        this.o = HD(c);
        this.b = {};
        Q._fhr_callback_ || (Q._fhr_callback_ = {});
        this.m = a;
        this.e = 0 <= jt(xE, Jg)
    }
    S(AE, yE);
    PD(9740, AE[u], {
        Ij: 1,
        ie: 2
    });
    var BE = 0;

    function CE() {
        return gi + (BE++)[mb](36) + is()[mb](36)
    }

    function DE(a) {
        if (a.e) {
            if (!a.f) {
                a.f = Gu(Sl, {
                    style: Zo
                });
                m[D][p](a.f);
                a.fa = im + CE();
                var b = a.fa,
                    c = a.m;
                Fa(a.f, U ? sh + b + ke + b + ue + c + xe : sh + b + ke + b + ve + c + Re)
            }
            a.a || (a.a = U ? k[a.fa] : m[a.fa])
        }
    }
    P = AE[u];
    db(P, function () {
        return this.e && k[$b][Kc] != mm
    });
    Ta(P, function () {
        DE(this);
        return this.e && this.a && this.a[Pc] && this.a[Pc]()
    });
    Pa(P, function (a, b) {
        DE(this);
        if (!this.a || !this.a[zc]) return this.Ij(), null;
        var c = dl + CE();
        Q._fhr_callback_[c] = b;
        var d = this.a[zc](this.n, Aj + c, this.o, HD(a));
        if (0 > d) return this.ie(), delete Q._fhr_callback_[c], null;
        var f = CE();
        this.b[f] = {
            If: c,
            gd: d
        };
        return f
    });
    Ba(P, function (a) {
        DE(this);
        var b = this.b[a];
        b && (this.a[Hb](b.gd), delete Q._fhr_callback_[b.If], delete this.b[a])
    });
    P.p = function () {
        AE.k.p[G](this);
        for (var a in this.b)
            if (this.b[a] !== ka[u][a]) {
                var b = this.b[a];
                this.a[Hb](b.gd);
                delete Q._fhr_callback_[b.gd]
            }
        this.f && (Qu(this.f), this.a = this.b = this.f = null)
    };

    function EE(a, b) {
        yE[G](this, a, b);
        this.b = {};
        this.a = this.e = 0;
        Yt || (k.XMLHttpRequest && xr in new XMLHttpRequest && (this.a = 1), !this.a && (k.XDomainRequest && k[$b][Kc] != mm) && (this.a = 2, this.yc.a.L($q, k[$b][Yc])))
    }
    S(EE, yE);
    PD(17170, EE[u], {
        sh: 1,
        ie: 2
    });
    db(EE[u], function () {
        return !!this.a
    });
    Pa(EE[u], function (a, b) {
        var c = LD(),
            d = ++this.e,
            f = {};
        1 == this.a ? (f.Nb = new jy, pw(f.Nb, Bl, R(function () {
            f.od || (wy(f.Nb) ? b(xy(f.Nb)) : (this.ie(), b(null)), FE(this, d))
        }, this)), pw(f.Nb, xq, R(function () {
            f.od || (this.sh(), FE(this, d))
        }, this)), f.Nb[zc](this.yc[mb](), Di, HD(a), {
            "Content-Type": mk
        })) : (f.cb = new XDomainRequest, f.cb.timeout = 2E4, pa(f.cb, R(function () {
            f.od || (b(f.cb.responseText), FE(this, d))
        }, this)), Ga(f.cb, R(function () {
            f.od || (this.ie(), b(null), FE(this, d))
        }, this)), f.cb.ontimeout = R(function () {
            f.od || (this.sh(),
                b(null), FE(this, d))
        }, this), f.cb[vb](Di, this.yc[mb]()), f.cb[zc](HD(a)));
        this.b[d] = f;
        MD(c);
        return d
    });
    Ba(EE[u], function (a) {
        var b = this.b[a];
        b && (b.od = !0, b.cb && b.cb[Jb](), FE(this, a))
    });

    function FE(a, b) {
        var c = a.b[b];
        c && (c.Nb ? (c.Nb.z(), c.Nb = null) : c.cb && (c.cb = null), delete a.b[b])
    }
    EE[u].p = function () {
        EE.k.p[G](this);
        for (var a in this.b) this[Hb](a)
    };

    function GE(a, b, c) {
        c = c ? {
            client: c
        } : {
            anno: 3,
            client: As,
            format: qn,
            v: ug
        };
        c.key = b;
        a && (c.ssl = 1);
        zs && (c.scid = zs);
        ss && (c.logld = mr + ss);
        a = a ? vn : sn;
        this.a = null;
        this.f = !0;
        this.b = {
            hd: R(this.D, this),
            Mg: 300
        };
        this.d = new zE(a + Fs, {
            client: As
        }, dl);
        this.e = new zE(a + Rs, {
            client: As
        }, dl);
        a = [{
            wa: new EE(a + Bs + og, c),
            hd: R(this.j, this),
            d: 30720,
            C: 4294967295,
            j: -1,
            Yc: 0,
            c: !1
        }, {
            wa: new AE(a + Es, Uq, c),
            Lg: 100,
            hd: R(this.j, this),
            d: 30720,
            C: 4294967295,
            j: -1,
            Yc: 0,
            c: !1
        }, {
            wa: new zE(a + Bs + og, c, dl, U && 7 >= ju),
            hd: R(this.s, this),
            d: 1900,
            C: 4294967295,
            j: -1,
            Yc: 3,
            c: !0
        }];
        this.C = new HE(a);
        this.c = !1;
        for (b = 0; b < a[s]; ++b) this.c = this.c || a[b].wa[yd]();
        this.c || this.o()
    }
    S(GE, Wv);
    PD(7361, GE[u], {
        n: function () {
            ID(lq)
        },
        o: function () {
            ID(rq)
        }
    });

    function IE(a, b) {
        if (!a.f) return b;
        var c;
        if (Vr(b) != qk) c = [
            [b, 200]
        ];
        else if (Vr(b[0]) != qk)
            if (2 == b[s]) c = [
                [b[0], 200, b[1]],
                [b[1], 200, b[1]]
            ];
            else {
                c = [];
                for (var d = 0; d < b[s]; ++d) c[d] = [b[d], 200]
            } else
                for (c = [], d = 0; d < b[s]; ++d) c[d] = [b[d][0], 200, b[d][1]];
        return c
    }
    GE[u].j = function (a) {
        var b = this;
        return function (c) {
            if (c) try {
                var d = c[y](Qd);
                0 <= d && (c = c[Od](0, d));
                var f = eval(mf + c + pf)
            } catch (g) {
                f = null, b.n()
            }
            f ? a(IE(b, f), 200) : a([], 500)
        }
    };
    GE[u].s = function (a) {
        var b = this;
        return function (c) {
            c ? a(IE(b, c), 200) : a([], 500)
        }
    };
    GE[u].D = function (a) {
        return function (b) {
            if (b) try {
                var c = eval(mf + b + pf)
            } catch (d) {
                c = null
            }
            a(c && c[1] || void 0)
        }
    };

    function HE(a) {
        this.b = a
    }
    HE[u].start = function (a) {
        this.a = a;
        this.n = 0;
        JE(this)
    };

    function JE(a) {
        if (a.n >= a.b[s]) a.a(null);
        else {
            var b = a.b[a.n++];
            b.Lg ? (new ED(R(b.wa[Pc], b.wa), R(function (a) {
                a ? this.a(b) : JE(this)
            }, a), 30, b.Lg)).go() : b.wa[Pc]() ? a.a(b) : JE(a)
        }
    }
    P = GE[u];
    P.$g = function (a) {
        this.m || (this.m = !0, this.C[Dc](R(function (b) {
            b && (this.a = b, this.b.wa = b.wa);
            a()
        }, this)))
    };
    db(P, Pr("c"));
    Ta(P, function () {
        return null !== this.a && null !== this.a.wa && this.a.wa[Pc]()
    });
    ab(P, function (a, b, c, d, f, g, h) {
        a = this.a.hd(a);
        b = {
            q: b,
            sl: c,
            tl: d
        };
        b.tc = f;
        g && (b.ctt = 1);
        h && (b.dom = 1);
        return this.a.wa[zc](b, a)
    });
    P.p = function () {
        GE.k.p[G](this);
        this.a && (this.a.wa.z(), this.a.wa = null);
        this.b.wa = null;
        this.d.z();
        this.d = null;
        this.e.z();
        this.e = null
    };

    function KE() {}
    S(KE, Xy);
    Ur(KE);
    P = KE[u];
    P.Gc = Qr(Yk);
    P.eb = function (a, b, c) {
        switch (b) {
        case 8:
        case 16:
            Wy(a, ap, c);
            break;
        default:
        case 64:
        case 1:
            KE.k.eb[G](this, a, b, c)
        }
    };
    P.t = function (a) {
        var b = KE.k.t[G](this, a),
            c = a.f;
        b && c && va(b, c);
        (c = a.ma()) && this.Ba(b, c);
        a.ja & 16 && this.eb(b, 16, !! (a.ga & 16));
        return b
    };
    P.lb = function (a, b) {
        b = KE.k.lb[G](this, a, b);
        var c = this.ma(b);
        a.e = c;
        a.f = b.title;
        a.ja & 16 && this.eb(b, 16, !! (a.ga & 16));
        return b
    };
    P.ma = Tr;
    P.Ba = Tr;
    P.da = Qr("goog-button");

    function LE() {}
    S(LE, KE);
    Ur(LE);
    P = LE[u];
    P.Gc = Nr();
    P.t = function (a) {
        iz(a, !1);
        a.wb &= -256;
        nz(a, 32, !1);
        return a.b.t(Yk, {
            "class": Zy(this, a)[M](O),
            disabled: !a.Z(),
            title: a.f || N,
            value: a.ma() || N
        }, a.sb() || N)
    };
    P.Xf = function (a) {
        return a[qd] == Nh || a[qd] == ji && (a[gd] == Yk || a[gd] == Zp || a[gd] == sp)
    };
    P.lb = function (a, b) {
        iz(a, !1);
        a.wb &= -256;
        nz(a, 32, !1);
        b.disabled && Y.add(b, this.zd(1));
        return LE.k.lb[G](this, a, b)
    };
    P.ph = function (a) {
        Z(a).l(a.h(), ll, a.Mc)
    };
    P.oe = Tr;
    P.mg = Tr;
    P.Rf = function (a) {
        return a.Z()
    };
    P.Ec = Tr;
    P.td = function (a, b, c) {
        LE.k.td[G](this, a, b, c);
        (a = a.h()) && 1 == b && Ia(a, c)
    };
    P.ma = function (a) {
        return a[Zb]
    };
    P.Ba = function (a, b) {
        a && Ha(a, b)
    };
    P.eb = Tr;

    function ME(a, b, c) {
        hz[G](this, a, b || LE.qa(), c)
    }
    S(ME, hz);
    P = ME[u];
    P.ma = Pr(Zl);
    P.Ba = function (a) {
        this.e = a;
        this.a.Ba(this.h(), a)
    };
    P.p = function () {
        ME.k.p[G](this);
        delete this.e;
        delete this.f
    };
    P.M = function () {
        ME.k.M[G](this);
        if (this.ja & 32) {
            var a = this.h();
            a && Z(this).l(a, Nn, this.xd)
        }
    };
    P.xd = function (a) {
        return 13 == a[H] && a[gd] == Kn || 32 == a[H] && a[gd] == Nn ? this.Mc(a) : 32 == a[H]
    };
    ez("goog-button", function () {
        return new ME(null)
    });

    function NE() {}
    S(NE, Xy);
    Ur(NE);
    P = NE[u];
    P.Gc = Nr();
    P.lb = function (a, b) {
        iz(a, !1);
        a.wb &= -256;
        nz(a, 32, !1);
        NE.k.lb[G](this, a, b);
        a.Oa(b[Zb]);
        return b
    };
    P.t = function (a) {
        iz(a, !1);
        a.wb &= -256;
        nz(a, 32, !1);
        return a.b.t(vq, {
            "class": Zy(this, a)[M](O),
            disabled: !a.Z()
        }, a.ab() || N)
    };
    P.Xf = function (a) {
        return a[qd] == Qi
    };
    P.mg = Tr;
    P.Rf = function (a) {
        return a.Z()
    };
    P.Ec = Tr;
    P.td = function (a, b, c) {
        NE.k.td[G](this, a, b, c);
        (a = a.h()) && 1 == b && Ia(a, c)
    };
    P.eb = Tr;
    P.Oa = function (a, b) {
        a && Ha(a, b)
    };
    P.da = Qr("goog-textarea");

    function OE(a, b, c) {
        hz[G](this, a, b || NE.qa(), c);
        iz(this, !1);
        this.ne = !0;
        (b = this.h()) && this.a.oe(b, !0);
        a || (this.jc = N)
    }
    S(OE, hz);
    var PE = Yt || W;
    P = OE[u];
    P.Nc = !1;
    P.Rb = 0;
    P.Yh = 0;
    P.qg = 0;
    P.Hh = !1;
    P.ue = !1;
    P.Tf = !1;
    P.Sf = !1;

    function QE(a) {
        return a.d.top + a.d[J] + a.j.top + a.j[J]
    }

    function RE(a) {
        var b = a.qg,
            c = a.h();
        b && (c && a.ue) && (b -= QE(a));
        return b
    }

    function SE(a) {
        a.qg = 50;
        TE(a)
    }

    function UE(a) {
        var b = a.Yh,
            c = a.h();
        b && (c && a.ue) && (b -= QE(a));
        return b
    }

    function VE(a) {
        a.Yh = 50;
        TE(a)
    }
    P.Ba = function (a) {
        this.Oa(ga(a))
    };
    P.ma = function () {
        return this.h()[Zb]
    };
    P.Oa = function (a) {
        OE.k.Oa[G](this, a);
        TE(this)
    };
    P.Ga = function (a) {
        OE.k.Ga[G](this, a);
        Ia(this.h(), !a)
    };

    function TE(a) {
        a.h() && a.we()
    }
    P.M = function () {
        OE.k.M[G](this);
        var a = this.h();
        qv(a, {
            overflowY: kn,
            overflowX: sk,
            boxSizing: Mk,
            MsBoxSizing: Mk,
            WebkitBoxSizing: Mk,
            MozBoxSizing: Mk
        });
        this.d = Qv(a);
        this.j = Rv(a);
        Z(this).l(a, Hp, this.we).l(a, um, this.we).l(a, Nn, this.we).l(a, lo, this.Uj);
        TE(this)
    };

    function WE(a) {
        if (!a.Hh) {
            var b = a.h()[cd](!1);
            qv(b, {
                position: Fj,
                height: sk,
                top: Jf,
                margin: pg,
                padding: Bg,
                border: Cg,
                overflow: kn
            });
            a.b.B[D][p](b);
            var c = b[Lc];
            b[C].padding = Ag;
            var d = b[Lc];
            a.Tf = d > c;
            b[C].borderWidth = Ag;
            a.Sf = b[Lc] > d;
            eb(b[C], zg);
            100 != b[Fd] && (a.ue = !0);
            Qu(b);
            a.Hh = !0
        }
        var b = a.h(),
            c = a.h()[Lc],
            f = a.h(),
            d = f[Fd] - f[Rc];
        if (!a.Tf) var g = a.d,
        d = d - (g.top + g[J]);
        a.Sf || (f = Rv(f), d -= f.top + f[J]);
        c = c + (0 < d ? d : 0);
        a.ue ? c -= QE(a) : (a.Tf || (d = a.d, c += d.top + d[J]), a.Sf || (a = Rv(b), c += a.top + a[J]));
        return c
    }

    function XE(a, b) {
        a.Rb != b && (a.Rb = b, eb(a.h()[C], b + gp))
    }

    function YE(a) {
        a = a.h();
        eb(a[C], sk);
        var b = a[Zb][xc](/\n/g) || [];
        a.rows = b[s] + 1
    }
    P.we = function () {
        if (!this.Nc) {
            var a = !1;
            this.Nc = !0;
            var b = this.h(),
                c = this.Rb;
            if (b[Lc]) {
                var d = !1,
                    f = !1,
                    g = WE(this),
                    h = b[Fd],
                    l = RE(this),
                    q = UE(this);
                l && g < l ? (XE(this, l), d = !0) : q && g > q ? (XE(this, q), b[C].overflowY = N, f = !0) : h != g ? XE(this, g) : this.Rb || (this.Rb = g);
                d || (f || !PE) || (a = !0)
            } else YE(this);
            this.Nc = !1;
            a && (a = this.h(), this.Nc || (this.Nc = !0, (d = a[Lc]) ? (f = WE(this), b = RE(this), g = UE(this), b && f <= b || g && f >= g || (g = this.d, a[C].paddingBottom = g[J] + 1 + gp, WE(this) == f && (a[C].paddingBottom = g[J] + d + gp, a.scrollTop = 0, d = WE(this) - d, d >= b ? XE(this,
                d) : XE(this, b)), a[C].paddingBottom = g[J] + gp)) : YE(this), this.Nc = !1));
            c != this.Rb && this[A](tp)
        }
    };
    P.Uj = function () {
        var a = this.h(),
            b = a[Fd];
        a.filters && a.filters[s] && (a = a.filters[bc](Vh)) && (b -= a.offX);
        b != this.Rb && (this.Rb = this.qg = b)
    };

    function ZE(a) {
        zy[G](this);
        a = a || {};
        this.id = a.id || Cy(this);
        this.pf = a.pf || N;
        this.ce = a.ce || null;
        this.te = a.te || null;
        this.Xd = a.Xd || !1;
        xa(this, a[zb] || null);
        this.c = null
    }
    S(ZE, zy);
    ZE[u].Bc = Or("c");
    ZE[u].Xb = function () {
        if (!this.R) throw e("Activity must be rendered before it can be resumed.");
        if (!this.c) throw e("Acitivity must have a tooltip instance to be resumed");
    };
    ZE[u].Kb = Nr();
    ZE[u].z = function () {
        this.Gb || (ZE.k.z[G](this), delete this.te)
    };

    function $E() {
        Lw[G](this);
        this.b = yl + aF++;
        this.c = [];
        bF[this.b] = this
    }
    var cF;
    S($E, Lw);
    var bF = {}, aF = 0;

    function dF(a, b) {
        var c = tu(a);
        Ox(b, function (b, f) {
            var g = c.t(En, {
                type: kn,
                name: f,
                value: b
            });
            a[p](g)
        })
    }
    P = $E[u];
    P.aa = null;
    P.ra = null;
    P.hc = null;
    P.Kj = 0;
    P.ub = !1;
    P.xk = null;
    P.kk = null;
    P.qc = null;
    Pa(P, function (a, b, c, d) {
        if (this.ub) throw e(mj);
        a = new yz(a);
        b = b ? b[Cd]() : bi;
        c && (c = n[Rb](2147483648 * n[Ec]())[mb](36) + n.abs(n[Rb](2147483648 * n[Ec]()) ^ is())[mb](36), a.a.L(Er, c));
        cF || (cF = Gu(xm), cF.acceptCharset = kr, c = cF[C], wa(c, Fj), ib(c, kn), c.top = Ka(c, Gf), ya(c, eb(c, Ag)), c.overflow = kn, m[D][p](cF));
        this.aa = cF;
        b == bi && dF(this.aa, a.a);
        d && dF(this.aa, d);
        this.aa.action = a[mb]();
        this.aa.method = b;
        eF(this)
    });

    function fF(a, b) {
        if (a.ub) throw e(mj);
        var c = new yz(b.action);
        a.xk = c;
        a.aa = b;
        a.aa.action = c[mb]();
        eF(a)
    }
    P.abort = function () {
        this.ub && (Bw(gF(this)), this.ub = !1, this[A](Dj), hF(this))
    };
    P.p = function () {
        this.ub && this[Jb]();
        $E.k.p[G](this);
        this.ra && iF(this);
        jF(this);
        delete this.d;
        this.aa = null;
        delete bF[this.b]
    };

    function eF(a) {
        a.ub = !0;
        a.hc = a.b + xj + (a.Kj++)[mb](36);
        var b = {
            name: a.hc,
            id: a.hc
        };
        U && 7 > ju && (b.src = Gn);
        a.ra = tu(a.aa).t(xn, b);
        b = a.ra[C];
        ib(b, kn);
        ya(b, eb(b, Ag));
        cb(b, wo);
        W ? b.marginTop = b.marginLeft = Gf : (wa(b, Fj), b.top = Ka(b, Gf));
        if (U) {
            La(a.aa, a.hc || N);
            tu(a.aa).B[D][p](a.ra);
            pw(a.ra, op, a.Jf, !1, a);
            try {
                a.a = !1, a.aa.submit()
            } catch (c) {
                ww(a.ra, op, a.Jf, !1, a), kF(a)
            }
        } else {
            tu(a.aa).B[D][p](a.ra);
            var b = a.hc + Bj,
                d = Zu(a.ra),
                f = ch + b + Ud + b + Ch;
            m.Jj && (f = kh + $s(m.Jj) + De + f);
            Xt ? Fa(d[Nd], f) : d[pc](f);
            pw(d[Sb](b), Yn, a.me, !1, a);
            for (var g =
                a.aa[Id](vq), f = 0, h = g[s]; f < h; f++) {
                var l = g[f][Zb];
                gv(g[f]) != l && ($u(g[f], l), Ha(g[f], l))
            }
            g = d.importNode(a.aa, !0);
            La(g, b);
            g.action = a.aa.action;
            d[D][p](g);
            for (var l = a.aa[Id](Ip), q = g[Id](Ip), f = 0, h = l[s]; f < h; f++)
                for (var v = l[f][Id](Io), t = q[f][Id](Io), B = 0, z = v[s]; B < z; B++) t[B].selected = v[B].selected;
            l = a.aa[Id](En);
            q = g[Id](En);
            f = 0;
            for (h = l[s]; f < h; f++)
                if (l[f][gd] == lm && l[f][Zb] != q[f][Zb]) {
                    La(a.aa, b);
                    g = a.aa;
                    break
                }
            try {
                a.a = !1, g.submit(), d[lc](), Yt && Rw(a.wh, 250, a)
            } catch (V) {
                try {
                    var ha;
                    var ba = Sr(wr);
                    if (Zr(V)) ha = {
                        message: V,
                        name: aj,
                        lineNumber: yi,
                        fileName: ba,
                        stack: yi
                    };
                    else {
                        var md, Qc, f = !1;
                        try {
                            md = V.lineNumber || V.line || yi
                        } catch (nd) {
                            md = yi, f = !0
                        }
                        try {
                            Qc = V.fileName || V.filename || V.sourceURL || Q.$googDebugFname || ba
                        } catch (eH) {
                            Qc = yi, f = !0
                        }
                        ha = !f && V.lineNumber && V.fileName && V[Yb] ? V : {
                            message: V[fc],
                            name: V[wd],
                            lineNumber: md,
                            fileName: Qc,
                            stack: V[Yb] || yi
                        }
                    }
                    $s(ha[fc]);
                    $s(ha[Yb] + Kf);
                    $s(Rx(void 0) + Kf)
                } catch (fH) {}
                ww(d[Sb](b), Yn, a.me, !1, a);
                d[lc]();
                kF(a)
            }
        }
    }
    P.Jf = function () {
        if (this.ra[Ac] == Bl) {
            ww(this.ra, op, this.Jf, !1, this);
            var a;
            try {
                if (a = Zu(this.ra), U && a[$b] == Ej && !ca.onLine) {
                    kF(this);
                    return
                }
            } catch (b) {
                kF(this);
                return
            }
            lF(this, a)
        }
    };
    P.me = function () {
        Xt && (this.ra ? Zu(gF(this)) : null)[$b] == Ej || (ww(gF(this), Yn, this.me, !1, this), lF(this, this.ra ? Zu(gF(this)) : null))
    };

    function lF(a, b) {
        a.ub = !1;
        var c;
        try {
            var d = b[D];
            a.kk = d.textContent || d[pb]
        } catch (f) {
            c = 1
        }
        c || typeof a.d != zm || (d = a.d(b)) && (c = 4);
        c ? kF(a) : (a[A](Bl), a[A](aq), hF(a))
    }

    function kF(a) {
        a.a || (a.ub = !1, a[A](Bl), a[A](em), hF(a), a.a = !0)
    }

    function hF(a) {
        iF(a);
        jF(a);
        a[A](np)
    }

    function iF(a) {
        var b = a.ra;
        b && (ta(b, null), pa(b, null), Ga(b, null), a.c[r](b));
        a.qc && (Sw(a.qc), a.qc = null);
        Yt || Xt ? a.qc = Rw(a.Sh, 2E3, a) : a.Sh();
        a.ra = null;
        a.hc = null
    }
    P.Sh = function () {
        this.qc && (Sw(this.qc), this.qc = null);
        for (; 0 != this.c[s];) {
            var a = this.c.pop();
            Qu(a)
        }
    };

    function jF(a) {
        a.aa && a.aa == cF && Nu(a.aa);
        a.aa = null
    }

    function gF(a) {
        return a.ra ? U ? a.ra : Zu(a.ra)[Sb](a.hc + Bj) : null
    }
    P.wh = function () {
        if (this.ub) {
            var a = this.ra ? Zu(gF(this)) : null;
            a && !Zv(a, Ul) ? (ww(gF(this), Yn, this.me, !1, this), kF(this)) : Rw(this.wh, 250, this)
        }
    };

    function mF(a, b) {
        zy[G](this);
        this.j = a || N;
        this.c = null;
        this.f = [];
        this.a = null;
        this.m = b || bi;
        this.d = this.e = null
    }
    S(mF, zy);
    P = mF[u];
    P.t = function () {
        var a = {
            fk: this.j,
            method: this.m,
            Hb: this.f,
            dir: Ex[wb](ts) ? Cp : bo
        };
        this.za(lv(VD, a))
    };
    P.za = function (a) {
        this.g = a;
        this.a = Ey(this, Lj);
        a = Ey(this, Qj);
        this.d = new ME(N);
        Hy(this.d, a);
        a = Ey(this, Kj);
        this.c = new ME(N);
        Hy(this.c, a);
        Ey(this, ym)
    };
    P.M = function () {
        var a = Z(this);
        a.l(this.d, Hj, R(this.Yj, this));
        a.l(this.c, Hj, R(this[A], this, cl))
    };
    P.Yj = function () {
        var a = !0;
        this.e && (a = this.e());
        a && (a = new $E, pw(a, aq, function () {
            this[A](bq)
        }), pw(a, em, function () {
            this[A](jm)
        }), fF(a, this.a));
        this[A]($p)
    };

    function nF(a, b) {
        for (var c in b) a.a[c] && Ha(a.a[c], b[c])
    }

    function oF(a, b) {
        return a.a[b] ? a.a[b][Zb] : N
    }
    P.p = function () {
        this.d = this.a = this.c = null;
        mF.k.p[G](this)
    };

    function pF(a, b) {
        a.e = b
    };

    function qF(a, b, c) {
        ZE[G](this, a);
        this.d = null;
        this.m = b || [];
        this.f = new uD;
        this.j = this.a = null;
        this.e = new GE(!0 == c, this.m.key || N, rF);
        this.e.f = !1
    }
    S(qF, ZE);
    var rF = 1 == vs ? "te-lib-alt" : "te-alt";
    P = qF[u];
    P.Bc = function (a) {
        qF.k.Bc[G](this, a);
        this.e.$g(R(this.Xb, this))
    };
    P.Xb = function () {
        qF.k.Xb[G](this);
        var a = this.c.F,
            b = this.c.n;
        if (a && b) {
            $u(this.j, a);
            var c = this.f;
            c.g = b;
            Ou(c.a, c.g);
            vD(c);
            Jv(this.f.a, !0);
            b = this.c.ad();
            c = this.c.Aa();
            if (this.e[Pc]() && b && c) {
                var d = this.c.ua(),
                    f = R(this.$i, this);
                this.e && this.e[jd](f, [d], b, c, 0, !1);
                nF(this.a, {
                    gtrans: a,
                    text: this.c.ua(),
                    hl: ts,
                    langpair: b + Fr + c
                });
                nF(this.a, this.c.Qc);
                nF(this.a, {
                    client: rF
                })
            }
            this[A](np)
        }
    };
    P.t = function () {
        this.za(lv(XD, {
            zk: qs.Xg
        }))
    };
    P.za = function (a) {
        this.g = a;
        this.j = Ey(this, ek);
        var b = Ey(this, Mj);
        this.a = new mF(Os, Di);
        this.a.f = this.m;
        pF(this.a, R(function () {
            nF(this.a, {
                utrans: pD(this.d)
            });
            return oF(this.a, lr) != oF(this.a, fn)
        }, this));
        this.a.pa(b);
        gD = qs.Vi;
        QC = qs.Xg;
        RC = qs.Ui;
        this.d = new jD(void 0, void 0, !0, !0, a);
        this.d.a.f = this.f;
        kD(this.d);
        this.d.n.c = rF;
        Hy(this.d, this.j)
    };
    P.M = function () {
        qF.k.M[G](this);
        var a = Z(this);
        a.l(this.a, cl, R(function () {
            var a = this.d;
            a.f[ld]();
            a.s = null;
            lD(a);
            this[A](cl)
        }, this));
        a.l(this.a, $p, R(function () {
            var a = pD(this.d);
            this.c.F = a && Ws(a);
            this[A]($p);
            a = qs.Tg;
            $u(this.c.e.h(), a)
        }, this))
    };
    P.$i = function (a) {
        a && lD(this.d, a)
    };
    P.Kb = function () {
        Jv(this.f.a, !1)
    };
    P.p = function () {
        this.d && this.d.z();
        this.j = this.c = this.f = this.d = null;
        this.e && this.e.z();
        this.e = null;
        this.a && this.a.z();
        this.a = null;
        qF.k.p[G](this)
    };

    function sF(a, b) {
        ZE[G](this, a);
        this.e = !1;
        this.f = b || [];
        this.d = null
    }
    S(sF, ZE);
    P = sF[u];
    P.Bc = function (a) {
        sF.k.Bc[G](this, a);
        Z(this).l(this.d.h(), Ln, R(this.c.fd, this.c, !1));
        this.e = this.c.nd;
        this.Xb()
    };
    P.Xb = function () {
        sF.k.Xb[G](this);
        this.d.Oa(this.c.F);
        var a = this.c.ad(),
            b = this.c.Aa();
        a && b && (nF(this.a, {
            gtrans: this.c.F,
            text: this.c.ua(),
            hl: ts,
            langpair: a + Fr + b
        }), nF(this.a, this.c.Qc));
        this[A](np);
        this.d.h()[Fc]()
    };
    P.Kb = function () {
        this.c.fd(this.e)
    };
    P.t = function () {
        this.za(lv(WD))
    };
    P.za = function (a) {
        this.g = a;
        a = Ey(this, Jl);
        this.d = new OE(N);
        Hy(this.d, a);
        VE(this.d);
        SE(this.d);
        a = Ey(this, Mj);
        this.a = new mF(Os, Di);
        this.a.f = this.f;
        pF(this.a, R(function () {
            nF(this.a, {
                utrans: Ws(this.d.ma())
            });
            return oF(this.a, lr) != oF(this.a, fn)
        }, this));
        this.a.pa(a)
    };
    P.M = function () {
        sF.k.M[G](this);
        var a = Z(this);
        a.l(this.a, cl, R(function () {
            this[A](cl)
        }, this));
        a.l(this.a, $p, R(function () {
            var a = this.d.ma();
            this.c.F = a && Ws(a);
            this[A]($p);
            a = qs.Tg;
            $u(this.c.e.h(), a)
        }, this))
    };
    P.p = function () {
        this.d && this.d.z();
        this.d = null;
        this.a && this.a.z();
        this.a = null;
        sF.k.p[G](this)
    };

    function tF(a) {
        Lw[G](this);
        this.e = a;
        this.f = {};
        this.c = new Gw(this);
        this.d = null
    }
    S(tF, Lw);
    tF[u].xh = Nr();
    Xa(tF[u], Nr());
    tF[u].p = function () {
        this.c.z();
        this.c = null
    };

    function uF(a, b, c) {
        if (b = a.e.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Ka[s]; ++d) b.Ka[d] && a.Lh(b.Ka[d], c)
        }
    }
    tF[u].Lh = function (a, b) {
        qv(a, wk, b ? We : N);
        qv(a, zl, b ? Ue : N)
    };

    function vF() {
        zy[G](this);
        this.a = null
    }
    S(vF, zy);
    P = vF[u];
    P.t = function () {
        this.za(this.b.t(Sl, {
            "class": Vp
        }))
    };
    P.za = function (a) {
        this.g = a;
        cb(a[C], wo)
    };

    function wF(a) {
        var b, c = b;
        b = R(function () {
            $u(this.h(), N);
            c && c()
        }, a);
        b = R(a.tk, a, 750, b);
        xF(a, b)
    }
    bb(P, function () {
        this.a && (this.a[lb](!0), this.a = null);
        $u(this.h(), N);
        this.A(!1)
    });

    function xF(a, b) {
        a.a = new Dx(a.h(), 750);
        Iw(Z(a), a.a, Hk, R(function () {
            cb(this.h()[C], Ik)
        }, a));
        Iw(Z(a), a.a, om, R(function () {
            this.a = null;
            k[Lb](b, 2E3)
        }, a));
        a.a[ad]()
    }
    P.tk = function (a, b) {
        this.H() && (this.a = new Cx(this.h(), a), Iw(Z(this), this.a, om, R(function () {
            b && b()
        }, this)), this.a[ad]())
    };
    P.A = function (a) {
        cb(this.h()[C], a ? Ik : wo);
        this.h()[C].opacity = a ? tg : pg
    };
    P.H = function () {
        return this.h()[C][xd] !== wo && this.h()[C].opacity !== pg
    };

    function yF(a) {
        fA[G](this);
        a = a || {};
        this.K = {};
        this.Eb = {};
        this.s = null;
        this.Od = !1;
        this.Db = this.b = this.D = null;
        this.N = {};
        this.j = new Gw(this);
        this.n = this.c = this.e = this.Ta = this.d = this.F = this.ta = this.Qc = null;
        this.bd = !0;
        this.ib = [];
        this.ri = a.pb || !1
    }
    S(yF, fA);
    P = yF[u];
    P.pa = function () {
        this.bd = !1;
        var a = Kz();
        a.a.L(Hl, Qs);
        var b = Ex[wb](ts) ? Cp : bo;
        this.Cc(lv(UD, {
            xj: Ms,
            Gk: Ks,
            Hk: Ds,
            yj: this.ri,
            zj: a[mb](),
            dir: b
        }));
        xa(this, this[zb] + Wd);
        if (a = !! (this.h() && this.s && this.Ta && this.e.h() && this.D && this.n)) this.j.l(k, tp, R(this.rb, this)), this.j.l(this, ln, R(this.Aj, this)), this.ib[s] && (a = this.ff[id](this, this.ib), this.ib = []);
        return a
    };
    P.ff = function (a) {
        for (var b = [], c = 0; c < arguments[s]; ++c) {
            var d = arguments[c];
            if (d)
                if (this.s || d.te) {
                    var f;
                    f = d;
                    var g = Gu(Qp, {
                        "class": f[zb] || Nj
                    });
                    $u(g, f.pf || N);
                    f = g;
                    b[r](f);
                    Mu(d.te || this.s, f);
                    d.Bc && d.Kb && (g = R(this.ek, this, d), this.j.l(f, ll, g), d.ce && this.j.l(this.D, d.ce, g));
                    d.id = d.id || Cy(d);
                    this.K[d.id] && this.Eh(d);
                    this.K[d.id] = d;
                    this.Eb[d.id] = f
                } else this.ib[r](d)
        }
        return b
    };
    P.Eh = function (a) {
        for (var b = 0; b < arguments[s]; ++b) {
            var c = Zr(arguments[b]) || arguments[b] instanceof ga ? arguments[b] : arguments[b].id,
                d = this.K[c],
                f = this.Eb[c];
            d && f && (this.b && this.b.id === c && this.Kf(), this.j.T(d, [$p, cl]), d.z(), this.N[c] && delete this.N[c], delete this.K[c], delete this.Eb[c], Qu(f))
        }
    };
    P.ek = function (a) {
        if (this.D) {
            a != this.b && this.b && (this.e[ld](), this.b.Kb[G](this.b), this.b.h() && cb(this.b.h()[C], wo), zF(this, !1), this.b = null);
            zF(this, !0);
            this.e[ld]();
            this.b = a;
            var b = null,
                c = null;
            this.N[a.id] ? (b = this.N[a.id], c = a.Xb) : (a.pa(), b = a.h(), c = a.Bc, this.j.l(a, [$p, cl], R(this.Kf, this)), a.Xd && (this.N[a.id] = b));
            Mu(this.D, b);
            c[G](a, this);
            a = new Dx(b, 100);
            Iw(this.j, a, om, R(this.rb, this, !0, !0));
            a[ad]()
        }
    };
    P.Kf = function () {
        if (this.b)
            if (this.e[ld](), this.b.Kb[G](this.b), this.b.h()) {
                var a = new Cx(this.b.h(), 100);
                Iw(this.j, a, om, R(function () {
                    Qu(this.b.h());
                    this.b = null;
                    zF(this, !1);
                    ev(this.e.h()) && (wF(this.e), this.rb(!0, !0))
                }, this));
                a[ad]()
            } else zF(this, !1), this.b = null
    };
    P.gg = function (a, b) {
        this.Db = a;
        yF.k.gg[G](this, a, b);
        cb(this.h()[C], Ik)
    };
    P.tg = function (a) {
        if (!this.bd) {
            var b = qA(this, a[F]);
            this.Ca = b;
            kA(this);
            b != this.a ? (this.a = b, rA(this, b), sA(this), pA(this, a)) : rA(this, b)
        }
    };
    P.Aj = function () {
        this.e[ld]();
        this.Od && this.Kf()
    };
    P.p = function () {
        for (var a in this.K) this.Eh(a);
        this.j && this.j.z();
        this.j = null;
        this.e && this.e.z();
        this.n = this.Ta = this.Db = this.D = this.s = this.e = null;
        yF.k.p[G](this)
    };

    function zF(a, b) {
        a.Od = b;
        a.bd = b;
        if (a.bd) {
            var c = a.h();
            a.ta = new T(c[ec], c[Ad])
        } else a.ta && ((a.m || null).a = a.ta, vv(a.h(), a.ta), a.ta = null);
        cb(a.s[C], b ? wo : Cn);
        cb(a.Ta[C], b ? Cn : wo)
    }
    P.fd = function (a) {
        if (this.H()) {
            a = (this.nd = a) ? this.f.l : this.f.T;
            var b = vu(this.h());
            a[G](this.f, b, ho, this.Wf, !0)
        } else yF.k.fd[G](this, a)
    };
    P.Cc = function (a) {
        yF.k.Cc[G](this, a);
        if (a) {
            this.s = zu(Oj, a);
            var b = zu(Vp, a);
            b && (this.e = new vF, Hy(this.e, b));
            this.Ta = zu(Tp, a);
            this.D = zu(Pj, a);
            this.n = zu(Ko, a)
        }
    };
    P.rb = function (a, b) {
        var c;
        c = Bv(m[D]).y;
        if (this.m) {
            (this.m || null).a.y += c;
            yF.k.rb[G](this);
            var d = ea(this.h()[C][E], 10),
                f = ea(this.h()[C].top, 10) - (a ? 0 : c);
            if (b) var g = this.$d || null || {}, f = f - (g.top || 10),
            d = d - (g[E] || 10);
            f -= c;
            (this.m || null).a.y = f;
            (this.m || null).a.x = d;
            c = new T(d, f);
            vv(this.h(), c)
        }
    };
    P.A = function (a) {
        yF.k.A[G](this, a)
    };
    P.ae = Or("d");
    P.Fa = Or("c");
    P.jb = function (a) {
        a = a ? Ws(a) : N;
        this.n ? $u(this.n, a) : yF.k.jb[G](this, a)
    };
    P.ad = Pr("d");
    P.Aa = Pr("c");
    P.ua = function () {
        return this.n ? ev(this.n) : yF.k.ua[G](this)
    };

    function AF(a) {
        return function (b) {
            this.bd || a[G](this, b)
        }
    }
    P.Pc = AF(fA[u].Pc);
    P.se = AF(fA[u].se);
    P.re = AF(fA[u].re);

    function BF(a, b) {
        tF[G](this, a);
        b = b || {};
        this.a = {
            Wb: b.Wb || 1,
            Hb: b.Hb,
            pb: b.pb
        };
        this.b = null;
        this.b = new yF({
            pb: this.a.pb
        });
        this.b.Af = 300;
        this.b.uf = 1E3;
        this.b.fd(!0);
        this.c.l(this.b, Lp, R(this.uj, this));
        this.c.l(this.b, ln, R(this.tj, this));
        var c = new qF({
            id: fk,
            pf: qs.jj,
            Xd: !0
        }, this.a.Hb);
        this.b.ff(c);
        this.c.l(c, $p, R(this.ih, this));
        this.a.Wb && (c = new sF({
            id: Il,
            ce: Ll,
            Xd: !0
        }, this.a.Hb), this.b.ff(c), this.c.l(c, $p, R(this.ih, this)));
        this.b.pa()
    }
    S(BF, tF);
    P = BF[u];
    P.Qb = function (a) {
        this.s = a;
        if (this.s == Zl || this.s == Cj) this.b.Af = 600, this.b.uf = 600
    };
    P.xh = function (a, b) {
        b && (b.c = a, gA(this.b, b))
    };
    Xa(P, function (a) {
        a && this.b[fd](a)
    });
    P.uj = function () {
        var a = this.b.Db;
        if (a && void 0 !== a.c) {
            var b = a.c,
                a = this.e.c[b];
            uF(this, this.d, !1);
            this.d = b;
            uF(this, b);
            this.b.Qc = this.f;
            this.b.ae(a.vj);
            this.b.Fa(a.wj);
            b = a.V;
            this.b.F = b && Ws(b);
            this.b.jb(a[Eb])
        }
    };
    P.tj = function () {
        uF(this, this.d, !1)
    };
    P.ih = function () {
        this.e.c[this.d].Bj[A](fr)
    };
    P.p = function () {
        this.b.z();
        this.b = null;
        BF.k.p[G](this)
    };
    P.Lh = function (a, b) {
        Y[b ? Rj : qp](a, Xm)
    };

    function CF(a) {
        a = a || {};
        this.a = Jt(a);
        this.a.Wb = a.Wb;
        this.a.Ue = !! a.Ue;
        this.a.pb = !! a.pb;
        this.a.aj = ea(a.aj, 10) || 300;
        this.a.Hb = a.Hb;
        this.a.bj = a.bj;
        this.d = 0;
        this.c = {};
        this.e = new Gw(this);
        this.b = new BF(this, this.a)
    }
    S(CF, Wv);
    CF[u].Qb = function (a) {
        this.b.Qb && this.b.Qb(a)
    };

    function DF(a, b, c, d, f, g) {
        c = a.c[++a.d] = {
            id: a.d[mb](),
            Bj: g,
            text: c,
            Ik: f || c,
            V: d,
            vj: a.f,
            wj: a.j,
            Ka: b
        };
        for (d = 0; d < b[s]; ++d) b[d] && a.b.xh(c.id, b[d]);
        return c.id
    }

    function EF(a, b) {
        var c = a.c[b];
        if (c) {
            for (var d = 0; d < c.Ka[s]; ++d) c.Ka[d] && a.b[fd](c.Ka[d]);
            delete a.c[b]
        }
    }
    CF[u].p = function () {
        for (var a in this.c) EF(this, a);
        this.e.z();
        this.e = null;
        this.b.z();
        this.b = null
    };

    function FF(a, b) {
        this.a = new $A(a, !1, b, 1, 1);
        this.c = U ? [] : null;
        this.b = [];
        for (var c = a; c = c[K];) GF(this, c, !0);
        this.b[r](!1);
        this.b.reverse();
        for (c = 1; c < this.b[s]; ++c) null == this.b[c] && (this.b[c] = this.b[c - 1]);
        this.d = !1
    }
    PD(52754, FF, {
        gj: 1
    });

    function GF(a, b, c) {
        var d = (b[C] && b[C].whiteSpace || N)[Zc](0, 3);
        d == $o || !d && b[qd] == Ei ? a.b[r](!0) : d && d != $o ? a.b[r](!1) : c ? a.b[r](null) : a.b[r](a.b[a.b[s] - 1])
    }
    FF[u].r = function () {
        return this.a.r
    };

    function HF(a) {
        try {
            a.c && (0 < a.c[s] && -1 == a.a.ba) && a.c.length--; - 1 == a.a.ba && a.b.length--;
            if (a.c && 0 < a.c[s] && 1 != a.a.ba && !a.a.r[zd]) a.a[rd](a.c[a.c[s] - 1], -1, a.a.a - 1);
            else a.a.Ha(), a.c && 1 == a.a.ba && a.c[r](a.a.r);
            1 == a.a.ba && a.a.ee && GF(a, a.a.r)
        } catch (b) {
            b != Fx && a.gj(b), a.d = !0
        }
    };

    function IF(a, b, c, d, f, g) {
        Lw[G](this);
        this.a = [];
        for (var h = 0; h < a[s]; ++h) this.a[r](uo in a[h] ? JF(a[h]) : a[h]), KF(a[h].r);
        this.e = b;
        this.Zc = d || 0;
        this.qi = f || 0;
        this.f = c;
        this.s = g || null;
        this.m = this.n = this.D = !1;
        this.b = [];
        this.d = [];
        this.c = [];
        this.j = [];
        new Gw(this)
    }
    var JF;
    S(IF, Lw);
    var LF = "_gt_" + n[Ec]()[mb](36)[Od](2),
        MF = "_gtn_" + n[Ec]()[mb](36)[Od](2);

    function NF(a) {
        if (!a) return !1;
        if (3 != a[x] || !U) return LF in a && !! a[LF];
        if (!a[K]) return !0;
        if (!(MF in a[K])) return !1;
        var b = a[K][MF];
        if (!b || !b[a[Jd]]) return !1;
        for (var b = b[a[Jd]], c = 0; c < b[s]; ++c)
            if (b[c] == a) return !0;
        return !1
    }
    (function () {
        function a(a) {
            va(m, a)
        }
        var b = {};
        JF = function (c, d) {
            if (c[qd] == Ri) return {
                r: c,
                parent: c[K],
                jb: a,
                cd: !0,
                Kg: !0,
                bf: !0
            };
            3 == c[x] ? d = vo : d || (d = nr);
            b[d] || (b[d] = function (a, b) {
                !U && b[Wc] && b[Wc](d, a);
                Zr(a) && (b[d] = a)
            });
            var f = {
                r: c,
                parent: c[K],
                jb: b[d]
            };
            3 != c[x] && (f.cd = !0);
            3 != c[x] && d != nr && (f.bf = !0);
            return f
        }
    })();

    function OF(a, b) {
        if (!a) return N;
        if (a[qd] == Ri) return ga(m.title);
        3 == a[x] ? b = vo : b || (b = nr);
        return !U && a[Hc] && a[Hc](b) ? ga(a[Hc](b)) : Zr(a[b]) ? ga(a[b]) : N
    }
    IF[u].ab = Pr(Zl);
    (function () {
        function a(a, c, d, f) {
            f = f[I] && 3 == f[I][x] ? f[I][Jd] : ev(f);
            f = {
                P: d,
                V: ft(f)
            };
            a[r](f);
            c[d] ? c[d].tf = f : c[d] = {
                start: f,
                tf: f
            };
            return f
        }
        IF[u].Qg = function (b) {
            var c = Wr(void 0) ? void 0 : this.w;
            if (c) {
                this.D = !0;
                this.o = c;
                delete this.w;
                Wr(void 0) && (this.m = void 0);
                this.c = [];
                var d = m[Ic](Sl);
                Jv(d, !1);
                Fa(d, 0 <= c[y](mh) ? c : bh + c + Rg);
                m[D][p](d);
                for (var f, c = [], g = d[I]; g; g = g[zd])
                    if (g[qd] == gi) f = {
                        Gg: ev(g),
                        Rd: g.innerHTML,
                        ca: []
                    }, this.c[r](f);
                    else if (g[qd] == Jh) {
                    f || (f = {
                        Gg: N,
                        Rd: N,
                        ca: []
                    }, this.c[r](f));
                    if (1 == this.a[s]) a(f.ca, c,
                        0, g);
                    else {
                        f = f.ca;
                        for (var h = 0, l = [], q = g[I]; q; q = q[zd]) q.attributes && q.attributes.i ? (h = ea(q.attributes.i[Jd], 10), !ma(h) && (0 <= h && h < this.a[s]) && (this.a[h].cd && l[h] ? l[h].V += q[I] && 3 == q[I][x] ? q[I][Jd] : ev(q) : l[h] = a(f, c, h, q))) : 3 == q[x] && f[r]({
                            P: -1,
                            V: ft(q[Jd])
                        }); - 1 == f[0].P && (1 == f[s] ? f[0].P = 0 : (f[1].V = f[0].V + f[1].V, f[xb]()))
                    }
                    f = void 0
                }
                for (h = 0; h < this.c[s] - 1; ++h) f = this.c[h], g = Xs(f.ca[f.ca[s] - 1].V), g = g[Tc](g[s] - 1), 12288 <= g && 12351 >= g || 65280 <= g && 65519 >= g || (f.ca[f.ca[s] - 1].V += O);
                Qu(d);
                for (h = 0; h < this.a[s]; ++h)
                    if (d = c[h]) g =
                        this.f[h], f = g[Zc](0, g[s] - g[Mb](/^[\s\xa0]+/, N)[s]), g = g[Zc](Xs(g)[s]), f == O && (f = N), g == O && (g = N), f && (d[Dc].V = f + d[Dc].V[Mb](/^[\s\xa0]+/, N)), g && (d.tf.V = Xs(d.tf.V) + g);
                1 != this.c[s] || this.c[0].Rd || (this.c[0].Rd = this.e);
                b && (b[pc][this.e] = this.c);
                PF(this)
            }
        }
    })();

    function QF(a, b, c) {
        return b && (b.gb[a.e] || b[pc][a.e] || !! c && (a.e in b.gb || a.e in b[pc]))
    }

    function RF(a, b) {
        b && (b.gb[a.e] = void 0, b[pc][a.e] = void 0)
    }

    function PF(a, b) {
        QF(a, b) && (a.c = b[pc][a.e], a.c || (a.c = b.gb[a.e], b[pc][a.e] = a.c), a.D = !0);
        if (a.D && (!a.n && !a.m) && (a.n = !0, SF(a.a), a.a[s]))
            if (a.d = [], a.b = [], 1 == a.a[s] && a.a[0].bf) {
                for (var c = [], d = 0; d < a.c[s]; ++d)
                    for (var f = a.c[d], g = 0; g < f.ca[s]; ++g) c[r](f.ca[g].V);
                a.a[0].jb(c[M](O), a.a[0].r)
            } else {
                d = null;
                for (g = 0; g < a.a[s]; ++g)
                    if (a.a[g].r) {
                        d = a.a[g].r;
                        break
                    }
                if (d) {
                    var c = [],
                        h = [],
                        d = new FF(d, !0);
                    HF(d);
                    var f = a.a[a.a[s] - 1].r,
                        l = 0,
                        g = !1;
                    do {
                        HF(d);
                        var q = d.r();
                        if (!q) break;
                        for (var v = d.a.a, t = d.a.ba; l < a.a[s] && !a.a[l].r;)++l;
                        if (q ==
                            a.a[l].r || !g && 1 == t && q[kb]) {
                            var t = TF(q),
                                B = a.b[s];
                            a.b[r]({
                                r: t
                            });
                            q == a.a[l].r ? (c[B] = a.a[l].cd ? v - 1 : v, a.d[l] = B, Ou(t, q), g = !0, ++l) : (c[B] = v, Ou(t, q))
                        } else g = !1
                    } while (q != f);
                    for (g = 0; g < a.a[s]; ++g)
                        if (h[g] = [], a.a[g].r && Wr(a.d[g]))
                            for (d = 0; d < a.b[s]; ++d)
                                if (!(c[d] > c[a.d[g]])) {
                                    if (c[d] == c[a.d[g]]) {
                                        if (a.b[d].r[K] != a.b[a.d[g]].r[K]) continue
                                    } else {
                                        f = c[a.d[g]] - c[d];
                                        for (l = a.b[a.d[g]].r[K]; f-- && l && l != a.b[d].r[K];) l = l[K];
                                        if (l != a.b[d].r[K]) continue
                                    }
                                    h[g][r](d)
                                }
                    q = -1;
                    for (d = a.c[s] - 1; 0 <= d; --d)
                        for (f = a.c[d], g = f.ca[s] - 1; 0 <= g; --g) {
                            var z =
                                f.ca[g];
                            if (!(0 > z.P) && a.a[z.P] && a.a[z.P].r)
                                if (0 > q) z.Ud = yD(h[z.P]), q = h[z.P][h[z.P][s] - 1];
                                else
                                    for (l = h[z.P][s] - 1; 0 <= l; --l)
                                        if (h[z.P][l] <= q) {
                                            z.Ud = yD(h[z.P][Kb](0, l + 1));
                                            q = h[z.P][l];
                                            break
                                        }
                        }
                    for (d = l = 0; d < a.c[s]; ++d) {
                        f = a.c[d];
                        q = f.Gg;
                        if (!q) {
                            q = a.a[s];
                            v = -1;
                            for (g = 0; g < f.ca[s]; ++g) h = f.ca[g].P, 0 > h || !a.a[z.P].r || (h > v && (v = h), h < q && (q = h));
                            h = [];
                            for (g = q; g <= v; ++g) a.f[g] && h[r](a.f[g] || N);
                            q = h[M](N)
                        }
                        h = [];
                        for (g = 0; g < f.ca[s]; ++g)
                            if (z = f.ca[g], h[r](z.V), 0 > z.P) {
                                v = a.d[f.ca[g - 1].P];
                                if (Wr(v)) var V = c[v];
                                if (g < f.ca[s] - 1 && (v = a.d[f.ca[g +
                                    1].P], Wr(v))) var ha = c[v];
                                if (Wr(V) || Wr(ha)) t: if (t = !Wr(V) || ha < V, v = f.ca[t ? g + 1 : g - 1], a.a[v.P].r) {
                                    B = z.V;
                                    z.V = N;
                                    if (/^ +$/ [wb](B)) {
                                        var ba = t ? v.V[Tc](0) : v.V[Tc](v.V[s] - 1);
                                        if (3584 <= ba && 3711 >= ba || 12288 <= ba && 12351 >= ba || 12352 <= ba && 12543 >= ba || 12784 <= ba && 12799 >= ba || 19968 <= ba && 40959 >= ba || 65280 <= ba && 65519 >= ba) break t
                                    }
                                    v.V = t ? B + v.V : v.V + B
                                }
                            }
                        t = [];
                        for (g = 0; g < f.ca[s] && !(l >= a.b[s]); ++g)
                            if (z = f.ca[g], z.Ud && !(0 > z.P) && a.a[z.P].r && z.V)
                                if (l == a.d[z.P] || l in z.Ud && (!(l + 1 in z.Ud) || l + 1 != a.d[z.P])) {
                                    if (a.b[l] && a.b[l].r) {
                                        v = TF(a.b[l].r);
                                        t[r](v);
                                        for (var B = a.b[l].r, ba = c[a.d[z.P]] - c[l], md = v, Qc = a.a[z.P].r[K], nd = md; Qc && ba--;) nd = Qc[cd](!1), nd[p](md), Qc = Qc[K], md = nd;
                                        B[p](nd);
                                        B = a.a[z.P].r;
                                        a.a[z.P].cd ? a.a[z.P].Kg || v[p](B) : (B = a.a[z.P].r[cd](!1), B.id && (B.id = N), v[p](B));
                                        a.a[z.P].jb(z.V, B)
                                    }
                                } else ++l, --g;
                        if (a.s) 3 != a.s.a.Wb && a.j[r](DF(a.s, t, q, h[M](N), f.Rd, a));
                        else
                            for (g = 0; g < t[s]; ++g) va(t[g], q)
                    }
                    for (g = 0; g < a.a[s]; ++g) a.a[g].r && !a.a[g].cd && Qu(a.a[g].r);
                    for (d = g = 0; d < a.b[s]; ++d)
                        if (v = a.b[d].r) {
                            for (; g < a.a[s] && d > a.d[g];) g++;
                            (g >= a.a[s] || d != a.d[g]) && !v[I] &&
                                (Qu(v), a.b[d].r = null)
                        }
                }
            }
    }
    Wa(IF[u], function () {
        if (this.n) {
            this.n = !1;
            if (0 < this.j[s]) {
                for (var a = 0; a < this.j[s]; ++a) EF(this.s, this.j[a]);
                this.j = []
            }
            SF(this.b);
            if (1 == this.a[s] && this.a[0].bf) this.a[0].jb(this.f[0], this.a[0].r);
            else {
                for (var b = a = 0; b < this.b[s]; ++b) {
                    var c = this.b[b].r;
                    if (c) {
                        for (; a < this.a[s] && b > this.d[a];) {
                            var d = a++;
                            this.a[d].r && (UF(this.a[d].r, this.a[d][sc]), this.a[d].r = null)
                        }
                        if (a < this.a[s] && b == this.d[a] && this.a[a].r) {
                            this.a[a].Kg || (Nu(c), c[p](this.a[a].r));
                            this.a[a].jb(this.f[a], this.a[a].r);
                            a++;
                            var d = void 0,
                                f = c[K];
                            if (f &&
                                11 != f[x])
                                if (c.removeNode) c.removeNode(!1);
                                else {
                                    for (; d = c[I];) f[cc](d, c);
                                    Qu(c)
                                }
                        } else Qu(c)
                    }
                }
                this.b = []
            }
        }
    });
    IF[u].p = function () {
        IF.k.p[G](this);
        this[dd]();
        for (var a = 0; a < this.a[s]; ++a) this.a[a].r && UF(this.a[a].r, this.a[a][sc]);
        this.a = null
    };

    function KF(a) {
        if (a)
            if (3 == a[x] && U) {
                MF in a[K] && a[K][MF] || (a[K][MF] = {});
                var b = a[K][MF];
                b[a[Jd]] || (b[a[Jd]] = []);
                for (var b = b[a[Jd]], c = 0; c < b[s]; ++c)
                    if (b[c] == a) return;
                b[r](a)
            } else a[LF] = 1
    }

    function UF(a, b) {
        if (!a || 3 == a[x] && U) {
            var c = a[K] || b;
            if (c && MF in c) {
                var d = c[MF];
                if (d && a && d[a[Jd]]) {
                    var f = d[a[Jd]];
                    if (f)
                        for (var g = 0; g < f[s]; ++g)
                            if (f[g] == a) {
                                f[Dd](g, 1);
                                break
                            }
                    0 == f[s] && delete d[a[Jd]]
                }
                d && ND(d) && (X(Ig) ? delete c[MF] : c[MF] = N)
            }
        } else LF in a && (X(Ig) ? delete a[LF] : a[LF] = N)
    }

    function SF(a) {
        for (var b = 0; b < a[s]; ++b) try {
            a[b].r && !a[b].r[K] && (a[b].r = null)
        } catch (c) {
            a[b].r = null
        }
        for (b = a[s] - 1; 0 <= b && !a[b].r; --b);
        ua(a, b + 1)
    }

    function TF(a) {
        a = a[qc] ? a[qc][Ic](vm) : m[Ic](vm);
        KF(a);
        return a
    };

    function VF(a, b) {
        this.m = a || null;
        this.s = b || ls.qa();
        this.d = this.e = this.o = null;
        this.f = this.c = !1;
        this.j = null;
        this.a = [];
        this.b = 0
    }

    function WF() {}

    function XF() {}

    function YF(a, b) {
        a.c || (a.o = b)
    }

    function ZF(a, b) {
        a.d = b
    }

    function $F(a, b) {
        a.c || (a.c = !0, a.n = b, a.b++, a.j = a.o, a.C())
    }
    qa(VF[u], function () {
        this.b++;
        this.c = !1;
        this.a = []
    });

    function aG(a) {
        if (!a.c) return null;
        for (var b = !1, c = 0; c < a.a[s]; ++c)
            if (a.a[c][F] === a) {
                a.a[c].vf = !1;
                a.a[c].mh = a.b + 1;
                b = !0;
                break
            }
        b || a.a[r]({
            target: a,
            vf: !1,
            mh: a.b + 1
        });
        return R(a.C, a, a, a.b + 1)
    }

    function bG(a) {
        if (!a.c) return !0;
        for (var b = 0; b < a.a[s]; ++b)
            if (a.a[b][F] === a && a.a[b].mh == a.b) return a.a[b].vf;
        return !0
    }
    VF[u].C = function (a, b) {
        if (this.c) {
            if (a)
                for (var c = 0; c < this.a[s]; ++c)
                    if (this.a[c][F] === a) {
                        this.a[c].vf = !0;
                        break
                    }
            this.f || this.s.add(R(this.D, this, b || this.b))
        }
    };
    VF[u].D = function (a) {
        if (this.b != a) return !1;
        a = this.j;
        if (a == XF) return this[lb](), this.e && this.e[G](this.m, this, this.n), !1;
        this.f = !0;
        var b;
        try {
            if (b = a[G](this.m, this, this.n), !b) throw e();
        } catch (c) {
            this[lb]();
            if (this.d) this.d[G](this.m, c, this, this.n);
            else throw c;
            return !1
        } finally {
            this.f = !1
        }
        b != WF && (this.j = b, this.b++, this.C());
        return !1
    };

    function cG(a, b, c, d, f) {
        b = b || {};
        this.w = f || [];
        this.f = [];
        this.m = [];
        dG(this, a || m[Nd], !Wr(b.Pg) || !! b.Pg);
        this.j = c || IF;
        this.s = b.Hi;
        this.c = this.a = this.e = this.Vc = null;
        this.C = !! b.Tc;
        this.Gb = !! b.Ii;
        this.D = this.C ? 27 : 13;
        this.o = !0;
        this.n = [];
        this.d = new VF(this, d)
    }
    PD(5762, cG, {
        Nj: 1
    });

    function eG(a, b, c, d) {
        a.d.c || (b = {
            oh: b,
            nh: c,
            Ka: [],
            lh: [],
            kc: [],
            je: 0,
            size: 0,
            qb: !0
        }, a.Vc = null, YF(a.d, a.b), a.d.e = d, ZF(a.d, R(function (a) {
            this.Nj(a);
            d()
        }, a)), $F(a.d, b))
    }

    function fG(a, b) {
        return 0 < a.Ka[s] ? new b(a.Ka, a.kc[M](N), a.lh, a.je, a[Db]) : null
    }

    function gG(a, b) {
        if (!a.c) return a.Vc = fG(b, a.j), !0;
        if (!b.qb && 0 < b.Ka[s]) return a.Vc = fG(b, a.j), !0;
        b.qb = a.c.Hg;
        var c;
        t: {
            c = a.c;
            var d = a.D;
            if (b[Db] > b.nh || b.je > b.oh) c = !1;
            else {
                var f = c[Db],
                    g = c[Eb][s];
                if (0 != b.Ka[s] && (f += 1 == b.Ka[s] ? b[Db] + d + d : b[Db] + d, g += b.je, f > b.nh || g > b.oh)) {
                    c = !1;
                    break t
                }
                b.size = f;
                b.je = g;
                b.Ka[r](c.r);
                b.lh[r](c[Eb]);
                d = b.Ka[s] - 1;
                if (0 == d) b.kc[r](c.$e);
                else 1 == d && (b.kc[0] = ah + b.kc[0] + Pg), b.kc[r]($g + d + Bh), b.kc[r](c.$e), b.kc[r](Pg);
                c = !0
            }
        }
        if (c) return a.c = null, !1;
        a.Vc = fG(b, a.j);
        return !0
    }

    function hG(a, b, c) {
        var d = OF(b, c);
        d && Ws(Us(d)) && a.n[r]({
            r: b,
            Fi: c,
            text: d
        })
    }
    cG[u].b = function (a, b) {
        if (this.c && gG(this, b)) return XF;
        if (!this.a) {
            this.o = !! this.f[s];
            if (!this.f[s]) {
                var c = this.n[xb]();
                if (c) return this.c = {
                    Hg: !1,
                    r: JF(c.r, c.Fi),
                    text: c[Eb],
                    $e: $s(c[Eb]),
                    size: this.C ? Ys(c[Eb])[s] : c[Eb][s]
                }, b.qb = !1, gG(this, b), XF
            }
            c = this.f[xb]() || this.m[xb]();
            if (!c) return this.c = null, gG(this, b), XF;
            this.e = [c.Ei];
            this.a = new FF(c.Di)
        }
        HF(this.a);
        if (this.a.d) return this.a = null, b.qb = !1, this.b;
        var c = this.a.r(),
            d = this.a.a.ba;
        if (-1 == d) {
            iG(this);
            if (!c || 3 != c[x] && !jG[c[qd]]) b.qb = !1;
            return this.b
        }
        var f = !NF(c) && (c[x] == su && kG(this) || !Y.Ia(c, xo) && (Y.Ia(c, Uq) || kG(this)));
        this.e[r](f);
        d = 1 == d;
        if (((f = !! c && (3 == c[x] && Zr(c[Jd]) || c[qd] == Ri && Zr(c[Zb]) || c[qd] == Qi && Y.Ia(c, Uq) || c[qd] == ji && (lG[c[gd]] || Y.Ia(c, Uq)))) || d) && this.o && !mG(c)) return dG(this, c, kG(this), !0), this.a.a.Jb(), iG(this), this.b;
        if (d && kG(this) && (this.Gb && hG(this, c, yq), hG(this, c, Xj), this.a.b[this.a.b[s] - 1]))
            for (var g = c[I]; g;) {
                if (3 == g[x]) {
                    var h = g[Jd][Qb](Rd);
                    if (2 < h[s] || 2 == h[s] && Ws(h[0]) != N && Ws(h[1]) != N) {
                        g.nodeValue = h[0];
                        for (var l = 1; l < h[s]; ++l) {
                            var q =
                                vu(c)[Ic](vm);
                            this.w[r](q);
                            Pu(q, g);
                            g = q;
                            Pu(vu(c)[Wb](Rd + h[l]), g);
                            g = g[zd]
                        }
                    }
                }
                g = g[zd]
            }
        if (f) {
            this.a.a.Jb();
            if (kG(this)) {
                var v = OF(c);
                if (Ws(Us(v)) && (this.c = {
                    Hg: !0,
                    r: JF(c),
                    text: v,
                    $e: $s(v),
                    size: this.C ? Ys(v)[s] : v[s]
                }, gG(this, b))) return iG(this), XF
            }
            iG(this);
            return this.b
        }
        if (d) {
            if (nG(c) || !c[I]) return b.qb = b.qb && !! oG[c[qd]], this.a.a.Jb(), iG(this), this.b;
            if (c[qd] == hi) {
                try {
                    if (!(v = !c.src[xc](/https?:\/\//))) var t = by(c.src)[3] || null,
                    v = (t && la(t)) == k[$b][kc];
                    if (v) {
                        var B = c[Bd][Nb][Nd];
                        B && dG(this, B, kG(this))
                    }
                } catch (z) {}
                b.qb = !1;
                this.a.a.Jb();
                iG(this);
                return this.b
            }
            kG(this) && c && (3 == c[x] || jG[c[qd]]) ? this.s && (c[qd] == Fh && c[Yc]) && this.s(c) : b.qb = !1;
            return this.b
        }
        this.a.a.Jb();
        iG(this);
        return this.b
    };

    function nG(a) {
        return NF(a) || 3 != a[x] && (!a[qd] || pG[a[qd]] || oG[a[qd]] || Y.Ia(a, Mp))
    }

    function mG(a) {
        if (3 == a[x]) return !0;
        if (1 != a[x]) return !1;
        if (!a[Tb] || !a[Fd]) {
            var b = vu(a),
                c = null;
            return (c = b[sd] && b[sd][hc] ? b[sd][hc](a, null) : a[Xc]) && c[xd] != wo && c.visibility != kn
        }
        return !0
    }
    var jG = yD([Fh, "ABBR", "ACRONYM", Jh, "BASEFONT", "BDO", "BIG", "CITE", "CODE", "DFN", "EM", "FONT", gi, ji, "NOBR", "KBD", "LABEL", "Q", "S", "SMALL", Ii, "STRIKE", "STRONG", "SUB", "SUP", Qi, "TT", "U", "VAR"]),
        pG = yD([Gh, Hh, Kh, ai, "FRAMESET", ei, ni, pi, wi, xi, ji, Qi, Ri]),
        oG = yD([Mh, ii, "MAP", Ai, Ci, Gi, Ji, bj]),
        lG = yD([Zp, Yk]);

    function dG(a, b, c, d) {
        (d ? a.m : a.f)[r]({
            Di: b,
            Ei: !Wr(c) || c
        })
    }

    function kG(a) {
        return a.e[a.e[s] - 1]
    }

    function iG(a) {
        a.e.pop()
    };

    function qG(a, b) {
        this.d = a;
        this.m = !! b;
        this.b = this.C = 0;
        this.e = this.c = -1;
        this.f = this.j = this.a = 0
    }
    var rG = yD([hg, Af, ";", Kg, "\\?", "!"]),
        sG = yD([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function tG(a, b, c) {
        a.m && (b -= 9);
        for (var d = N, f = 0, g = a.C; g < a.d[s]; ++g) {
            var h = a.d[Vb](g),
                l = h[Tc](0);
            f++;
            a.a += a.m ? 127 >= l ? 32 >= l || sG[l] ? 3 : 1 : 2047 >= l || 55296 <= l && 56319 >= l || 56320 <= l && 57343 >= l ? 6 : 9 : 1;
            l = a.a >= b;
            rG[h] ? (a.e = g, a.j = a.a, l = l || f > c) : h == O && (a.c = g, a.f = a.a, l = l || f > c);
            if (l) return 0 <= a.e ? (d = a.d[Zc](a.b, a.e + 1), a.a -= a.j, a.b = a.e + 1, a.e >= a.c ? (a.c = -1, a.f = 0) : a.f -= a.j, a.e = -1, a.j = 0) : 0 <= a.c ? (d = a.d[Zc](a.b, a.c + 1), a.a -= a.f, a.b = a.c + 1, a.c = -1, a.f = 0) : (d = a.d[Zc](a.b, g + 1), a.a = 0, a.b = g + 1, a.e = a.c = -1, a.f = a.j = 0), a.C = g + 1, d
        }
        a.b < a.d[s] &&
            (d = a.d[Zc](a.b), a.b = a.d[s]);
        return d
    };

    function uG(a, b, c, d, f, g, h, l, q, v, t) {
        Lw[G](this);
        this.ea = q ? q.a : a;
        this.e = b;
        this.W = c || null;
        this.Od = d ? R(this.Bi, this) : Tr;
        this.Eb = !! g;
        this.j = q ? [q] : [];
        this.D = [];
        this.Ea = [];
        this.Ta = this.s = this.b = !1;
        this.n = l || {
            gb: {},
            write: {}
        };
        this.Fb = !l;
        this.ib = h || ls.qa();
        this.N = [];
        this.ta = this.w = !1;
        v && (this.d = v);
        t && (this.c = t);
        this.Ma = this.m = 0.5;
        this.Na = 0.01;
        this.o = new ms(this.m);
        pw(k, Jk, this.Eg, !0, this);
        pw(k, um, this.Fg, !0, this);
        this.Qc = new Gw(this)
    }
    S(uG, Lw);
    PD(3046, uG, {
        Gi: 1,
        Rj: 2,
        Ti: 3,
        Sj: 4
    });
    P = uG[u];
    ab(P, function (a, b, c, d) {
        if (d || a != this.d || b != this.c) vG(this), this.Fb && (this.n = {
            gb: {},
            write: {}
        });
        else if (this.b) return;
        this.b = !0;
        this.d = a;
        this.c = b;
        this.W && (d = this.W, a && (d.f = a), b && (d.j = b));
        a = ND(this.j) ? null : this.j[0];
        this.a = {
            We: c || Tr,
            cf: 0,
            kb: this.e.a.C,
            Yb: 0,
            df: 0,
            Tc: this.e.a.c,
            Dg: this.e.a.j,
            zc: this.e.a.c ? this.e.a.d - this.e.a.wa.yc.U()[mb]()[s] : this.e.a.d,
            Ja: 0,
            $c: 0,
            Yc: this.e.a.Yc,
            na: a,
            zg: 0,
            Ag: 0,
            Te: [][Ub](this.ea),
            Uc: [],
            Wc: null,
            Ye: [],
            xc: this.ib
        };
        this.K = Ex[wb](this.c) ? Wq : Vq;
        c = [][Ub](this.ea);
        for (a = 0; a < c[s]; ++a) Y.add(c[a],
            this.K);
        this.f = new VF(this, this.ib);
        YF(this.f, this.Cg);
        this.f.d = this.Gi;
        $F(this.f)
    });
    Wa(P, function () {
        vG(this);
        k[Lb](R(function () {
            for (var a = 0; a < this.N[s]; ++a) Qu(this.N[a]);
            this.N = []
        }, this), 0)
    });
    P.p = function () {
        uG.k.p[G](this);
        this[dd]();
        ww(k, Jk, this.Eg, !0, this);
        ww(k, um, this.Fg, !0, this)
    };
    P.Bi = function (a) {
        var b = Ws(a[Yc]);
        0 == b[y](Fn) || 0 <= b[y](Te) || (this.Ea[r](a[Yc]), this.D[r](a), Va(a, b + Ye + this.d + kg + this.c))
    };

    function wG(a, b, c) {
        var d = a.a,
            f = new VF(a, d.xc);
        d.Uc[r](f);
        xG(a);
        YF(f, c || a.Ah);
        f.e = d.Wc;
        ZF(f, R(function (a) {
            this.s ? this.Sj(a) : this.Rj(a);
            d.Wc && d.Wc()
        }, a));
        $F(f, b || {
            ia: [],
            ya: [],
            xc: d.xc
        })
    }
    P.Fg = function () {
        this.w = !1;
        this.F = 0;
        ns(this.o, this.m)
    };
    P.Eg = function (a) {
        a[F] == k && (this.w = !0, this.F = 0, ns(this.o, 0.01))
    };
    P.Cg = function (a) {
        var b = this.a,
            c = aG(a),
            d = 0;
        b.Wc = function () {
            ++d == b.Uc[s] && c()
        };
        wG(this);
        return this.Xj
    };
    P.Xj = function (a) {
        if (!this.b) return XF;
        if (!bG(a)) return WF;
        a = this.a.xc;
        for (var b = 0; b < this.j[s]; ++b) a.add(R(this.Lj, this, this.j[b]));
        return this.Mj
    };
    P.Wg = function () {
        if (this.F && !this.w) {
            var a = (new Date)[Ed]() - this.F,
                b = this.m;
            900 > a && 0.01 < b ? b = n.max(0.9 * b, 0.01) : 1100 < a && 0.5 > b && (b = n.min(1.5 * b, 0.5));
            this.m = b;
            this.ta ? this.Na = 0.01 : this.Ma = this.m
        }
        this.s = this.b = !0;
        this.F = (new Date)[Ed]();
        this.Db != (a = m[D][pb] || m[D].textContent || m[D].innerHTML) ? (this.Db = a, this.ta = !1, this.m = this.Ma, a = this.a, a.We = Tr, a.Te = [][Ub](this.ea), a.na = null, a.zg = 0, a.Ag = 0, a.Uc = [], a.Wc = null, a.xc = this.o, this.f = new VF(this, this.o), YF(this.f, this.Cg)) : (this.ta = !0, this.m = this.Na, this.f = new VF(this,
            this.o), YF(this.f, this.Wg));
        this.w || ns(this.o, this.m);
        this.f.d = this.Ti;
        $F(this.f);
        return XF
    };
    P.Mj = function () {
        if (!this.b) return XF;
        this.s = this.b = !1;
        this.a.We(100, !0);
        if (this.Eb && 0 < this.a.kb) return this.Wg;
        this.a = null;
        return XF
    };

    function xG(a, b) {
        var c = a.a;
        if (0 == c.Ja && (c.Ja = ND(a.n.gb) ? 860 : c.zc, !b || b <= c.zc)) {
            c.$c = c.Ja;
            return
        }
        do {
            var d = c.Ja;
            c.Ja < c.zc && (c.Ja *= 6, c.Ja > c.zc && (c.Ja = c.zc))
        } while (d != c.Ja && b && c.Ja < b);
        c.$c = c.Ja
    }

    function yG(a, b) {
        var c = a.a;
        if (!c.fe) {
            if (0 == c.Te[s]) return a.Zb;
            c.fe = new cG(c.Te[xb](), {
                Tc: c.Tc,
                Hi: a.Od,
                Pg: !0,
                Ii: !! a.W
            }, function () {
                var b = oa[u][Kb][G](arguments);
                return new IF(b[xb](), b[xb](), b[xb](), b[xb](), b[xb](), a.W)
            }, c.xc, a.N)
        }
        c.fh = !0;
        eG(c.fe, c.kb, c.zc, aG(b));
        return a.Ah
    }
    P.Ah = function (a, b) {
        if (!this.b) return XF;
        var c = this.a;
        if (!c.na) {
            if (!c.fh) return yG(this, a);
            if (!bG(a)) return WF;
            c.fh = !1;
            c.na = c.fe.Vc || null;
            if (!c.na) return c.fe = null, yG(this, a);
            this.j[r](c.na);
            this.Qc.l(c.na, fr, R(this.kj, this));
            if (QF(c.na, this.n, !0)) return c.Yb += c.na.Zc, c.kb -= c.na.Zc, c.na = null, yG(this, a);
            this.n[pc][c.na.ab()] = null
        }
        0 < b.ya[s] && ns(this.o, 0.5);
        if (0 < c.Dg && b.ya[s] >= c.Dg) return this.Zb;
        var d = c.Tc ? c.na.qi : c.na.ab()[s];
        if (d > c.Ja) {
            if (0 < b.ya[s]) return this.Zb;
            xG(this, d);
            for (var d = c.na.ab(), f = new qG(d,
                    c.Tc), g = N; g = tG(f, c.Ja, c.kb);)
                if (b.ia[r]({
                    Sd: [g],
                    dd: !0,
                    ed: !1
                }), c.Yb += g[s], c.kb -= g[s], 0 >= c.kb) {
                    b.Fk = d[Zc](f.b);
                    break
                } else xG(this);
            b.ya[r](c.na);
            c.na = null;
            return this.Zb
        }
        if (d > c.$c) return this.Zb;
        b.ya[r](c.na);
        c.$c -= d + c.Yc;
        c.Yb += c.na.Zc;
        c.kb -= c.na.Zc;
        c.na = null;
        return yG(this, a)
    };
    P.kj = function (a) {
        this[A](new cw(fr, a[F]))
    };
    P.Zb = function (a, b) {
        function c(a, b, c) {
            a.tb = b;
            a.Ek = c;
            d.Ag++;
            l++;
            l == h && q()
        }
        if (!this.b) return XF;
        var d = this.a;
        if (0 == b.ya[s]) return XF;
        wG(this);
        if (0 == b.ia[s]) {
            for (var f = [], g = 0; g < b.ya[s]; ++g) f[r](b.ya[g].ab());
            b.ia[r]({
                Sd: f,
                dd: !0,
                ed: !1
            })
        }
        for (var h = 0, l = 0, q = Tr, g = 0; g < b.ia[s]; ++g) b.ia[g].dd && (h++, b.ia[g].gd = this.e[jd](R(c, this, b.ia[g]), b.ia[g].Sd, b.ia[g].Sg || this.d, this.c, ++d.zg, this.Ta, this.s), d.Ye[r](b.ia[g].gd));
        if (0 == h) return XF;
        q = aG(a);
        return this.Ri
    };
    P.Lj = function (a) {
        if (this.b) {
            QF(a, this.n) ? PF(a, this.n) : a.Qg(this.n);
            var b = this.a;
            b.df += a.Zc;
            a = n.min(n[Rb](100 * b.df / b.Yb), 100);
            b.cf != a && (b.cf = a, b.We(b.cf, !1))
        }
    };
    P.Ri = function (a, b) {
        if (!this.b) return XF;
        if (!bG(a)) return WF;
        if (1 < b.ya[s]) {
            if (!b.ia[0].ed) {
                for (var c = [], d = [], f = 0; f < b.ia[0].tb[s] && f < b.ya[s]; ++f) {
                    var g = b.ia[0].tb[f];
                    g && g[0] && 200 == g[1] || (c[r](b.ya[f]), d[r](b.ia[0].Sd[f]))
                }
                0 < c[s] && wG(this, {
                    ia: [{
                        Sg: am,
                        Sd: d,
                        dd: !0,
                        ed: !0
                    }],
                    ya: c
                }, this.Zb)
            }
        } else {
            d = !1;
            for (f = 0; f < b.ia[s]; ++f) c = b.ia[f], c.ed || c.tb && c.tb[0] ? c.dd = !1 : (c.Sg = am, c.ed = !0, d = c.dd = !0);
            if (d) return this.Zb
        }
        this[A](np);
        if (1 < b.ya[s])
            for (f = 0; f < b.ia[0].tb[s] && f < b.ya[s]; ++f)(g = b.ia[0].tb[f]) && 200 == g[1] && (c = g[0],
                d = (g = g[2]) && g == this.c, g = b.ya[f], g.w = c, Wr(d) && (g.m = d));
        else {
            for (var d = !0, h = [], f = 0; f < b.ia[s]; ++f) c = b.ia[f], c.tb && c.tb[0] && (g = c.tb[0], c = g[0], h[r](c), g = g[2], d = d && g && g == this.c);
            c = h[M](N);
            f = b.ya[0];
            f.w = c;
            Wr(d) && (f.m = d);
            b.ya[0].Qg(this.n)
        }
        return XF
    };

    function vG(a) {
        if (a.b) {
            a.f[lb]();
            for (var b = a.a, c = 0; c < b.Uc[s]; ++c) b.Uc[c][lb]();
            for (c = 0; c < b.Ye[s]; ++c) a.e.a.wa[Hb](b.Ye[c]);
            a.b = !1;
            a.s = !1;
            a.a = null
        }
        if (a.j[s]) {
            for (c = 0; c < a.j[s]; ++c) a.j[c].z();
            a.j = []
        }
        if (a.D[s]) {
            for (c = 0; c < a.D[s]; ++c) Va(a.D[c], a.Ea[c]);
            a.D = [];
            a.Ea = []
        }
        if (a.K) {
            b = [][Ub](a.ea);
            for (c = 0; c < b[s]; ++c) Y[Cc](b[c], a.K);
            a.K = null
        }
    };

    function zG(a, b) {
        this.c = a;
        this.d = b;
        this.a = a
    }
    zG[u].b = 0;
    zG[u].reset = function () {
        this.a = this.c;
        this.b = 0
    };
    zG[u].ma = Pr(Cj);

    function AG(a) {
        a.a = n.min(a.d, 2 * a.a);
        a.b++
    };

    function BG(a, b, c, d, f) {
        this.m = b || null;
        this.C = !! c;
        this.j = !1;
        this.a = new GE(a || !1, f || N);
        this.o = new ms(1);
        this.e = {
            gb: {},
            write: {}
        };
        this.b = null;
        this.n = new Gw(this);
        a = new zD;
        b = new CD(R(this.a.$g, this.a, AD(a)));
        this.Qd = DD(b, a.Za(R(this.Qd, this)));
        this.Ze = DD(b, a.Za(R(this.Ze, this)));
        this.Pd = DD(b, a.Za(R(this.Pd, this)));
        this.Wd = DD(b, a.Za(R(this.Wd, this)));
        Wa(this, DD(b, a.Za(R(this[dd], this))));
        b.Vb();
        a.Vb()
    }
    S(BG, Wv);
    PD(14097, BG[u], {
        f: function () {
            ID(this.a[yd]() ? jq : kq)
        }
    });
    P = BG[u];
    Ta(P, function () {
        return this.a[yd]()
    });
    P.Qd = function (a, b) {
        if (this.a[Pc]()) {
            var c = this.a,
                d = {
                    alpha: !0
                };
            b && (d.hl = b);
            c.d[zc](d, a)
        } else this.f(), a(null)
    };
    P.Ze = function (a) {
        if (this.a[Pc]()) {
            var b = this.a,
                c = N;
            zs && (c = zs[Qb](Cf)[1]);
            b.e[zc]({
                cid: c
            }, a)
        } else this.f(), a(null)
    };
    P.Pd = function (a) {
        var b = m[Nd].lang;
        if (b) a(b);
        else if (this.a[Pc]()) {
            var c = new $A(m[D], !1, !1, 1, 1),
                b = [];
            try {
                for (var d = 0, f = this.a.b.Mg; b[s] + d < f;) {
                    var g = c.Ha();
                    if (1 == c.ba && nG(g)) c.Jb();
                    else if (3 == g[x]) {
                        var h = Ws(Us(g[Jd]));
                        h && (b[r](h), d += h[s])
                    }
                }
            } catch (l) {
                if (l != Fx) throw l;
            }
            f = this.a;
            b = b[M](O);
            a = f.b.hd(a);
            b = {
                q: b[Zc](0, f.b.Mg),
                sl: sk,
                tl: am
            };
            f.b.wa[zc](b, a)
        } else this.f(), a(null, !0)
    };
    P.Wd = function (a, b, c, d, f) {
        QD();
        if (!a || OD(a, b)) a = sk;
        if (f || a != this.d || b != this.c) this.e = {
            gb: {},
            write: {}
        };
        this.d = a;
        this.c = b;
        this.a[Pc]() ? (d = d || m[Nd], this.b && this.b.z(), R(function (a, b, d) {
            b && (this.e.gb = this.e[pc], this.e.write = {});
            c(a, b, d)
        }, this), this.b = new uG(d, this.a, this.m, this.C, 0, !0, this.o, this.e), this.b.Ta = this.j, this.b[jd](a, b, c, f), this.n.l(this.b, fr, R(this.Ci, this))) : (this.f(), c(0, !1, !0))
    };
    P.Ci = function (a) {
        if (zs) {
            var b = a[F];
            a = new zG(200, 2E3);
            var c = b.o;
            is();
            this.Rg(b, function () {
                c || (c = b.o);
                if (!b.o || b.o == c) return !1;
                is();
                return !0
            }, a)
        }
    };
    P.Rg = function (a, b, c) {
        if (!b || !b()) {
            this.e && RF(a, this.e);
            var d = new uG(null, this.a, this.m, this.C, 0, !0, this.o, this.e, a, this.d, this.c);
            d[jd](this.d, this.c);
            this.n.l(d, np, R(function () {
                b && b() || a[dd]()
            }, this));
            c && 7 > c.b && (d = c.ma(), AG(c), Rw(R(this.Rg, this, a, b, c), d, this))
        }
    };
    P.yk = function () {
        return !!this.b && this.b.b
    };
    P.eh = Or("j");
    Wa(P, function () {
        QD();
        this.a[Pc]() && this.b && this.b[dd]()
    });
    P.p = function () {
        RD();
        BG.k.p[G](this);
        this.a.z();
        this.b = this.a = null;
        this.e = {
            gb: {},
            write: {}
        }
    };
    P.Qb = Or(Dp);

    function CG(a) {
        zy[G](this, a);
        this.j = new Gw(this)
    }
    S(CG, zy);
    P = CG[u];
    P.t = function () {
        this.g = this.b[Ic](Ip);
        xa(this.g, Mm)
    };
    P.M = function () {
        CG.k.M[G](this);
        this.Wh()
    };
    P.Wh = function () {
        pw(this.g, el, FD(this, el));
        this[A](Yn)
    };
    P.X = function () {
        CG.k.X[G](this);
        this.j.z();
        this.j = null
    };

    function DG(a, b) {
        a.g[K] != b && (a.g[K][rc](a.g), b[p](a.g))
    }
    P.Gd = function (a) {
        this.b.Kd(this.g);
        for (var b in a)
            if (a[b] !== ka[u][b]) {
                var c = this.b.t(Io, {
                    value: b
                });
                this.b.hb(c, a[b]);
                this.g[p](c)
            }
        this.g.selectedIndex = 0
    };
    P.ma = function () {
        return this.g[Zb]
    };
    P.Ba = function (a) {
        if (this.g[Zb] != a)
            for (var b = 0, c; c = this.g.options[bc](b); ++b)
                if (c[Zb] == a) {
                    this.g.selectedIndex = b;
                    break
                }
    };
    P.ua = function (a) {
        if ("undefined" == Vr(a)) return this.g.options[bc](this.g.selectedIndex)[Eb];
        for (var b = 0, c; c = this.g.options[bc](b); ++b)
            if (c[Zb] == a) return c[Eb]
    };
    P.Ga = function (a) {
        Ia(this.g, !a)
    };

    function EG(a) {
        CG[G](this, a)
    }
    S(EG, CG);
    EG[u].Lb = function (a) {
        this.Gd[G](this, a)
    };

    function FG(a, b) {
        CG[G](this, b);
        this.a = a && Jt(a) || {};
        this.a.lf = this.a.lf || 11;
        this.a.Yd = !1 != this.a.Yd;
        this.a.Ya || (this.a.Ya = Hs)
    }
    S(FG, CG);
    P = FG[u];
    P.Ce = function () {
        throw e("Not implemented.");
    };
    P.t = function () {
        this.Ce();
        this.m = this.g;
        this.d = Gu(xn, {
            frameBorder: 0,
            "class": Qm
        });
        ib(this.d[C], rr);
        Jv(this.d, !1);
        m[D][p](this.d)
    };
    P.Wh = function () {
        var a = Ex[wb](ts) ? Cp : bo,
            b = this.a.Ya,
            c = $(this, eo);
        this.j.l(this.d, Yn, this.Oj);
        JD(this.d, R(function () {
            var d = Zu(this.d);
            d[pc](lh + b + Ge + a + ie + c + fe);
            d[lc]()
        }, this))
    };
    P.Oj = function () {
        this.c = new uu(Zu(this.d));
        this.s = this.c.h($(this, eo));
        this.j.l(this.m, ll, this.gf);
        U ? this.j.l(this.d, Jk, this.le) : this.j.l(this.d[Bd] || Zu(this.d)[kd] || Zu(this.d)[sd], Jk, this.le);
        this[A](Yn)
    };
    P.X = function () {
        FG.k.X[G](this);
        Qu(this.d);
        this.m = this.F = this.f = this.s = this.c = this.d = null
    };
    P.Vg = function (a) {
        this.e != a[nc][Zb] && (this.Ba(a[nc][Zb]), this[A](el));
        this.le()
    };
    P.gf = function () {
        GG(this);
        (this.d[Bd] || Zu(this.d)[kd] || Zu(this.d)[sd])[Fc]();
        this.K = !0
    };
    P.le = function () {
        this.K && (this.K = !1, GG(this, !1), Fu(vu(this.m))[Fc]())
    };
    P.eg = Nr();
    P.fg = Nr();

    function GG(a, b) {
        if ("undefined" == typeof b || b) {
            a.fg();
            var c = Dv(a.m, k),
                d = c.y + a.m[Fd],
                f = c.y - a.n[L],
                g = c.x,
                h = c.x + a.m[Tb] - a.n[w];
            if (U && !X(Hg)) var l = m[D],
            d = d - l[Ad], f = f - l[Ad], g = g - l[ec], h = h - l[ec];
            else l = Du(m), d -= l.y, f -= l.y, g -= l.x, h -= l.x;
            l = Cu(k);
            c.y = c.y <= l[L] - a.n[L] ? d : f;
            c.y > l[L] - a.n[L] && (c.y = l[L] - a.n[L]);
            0 > c.y && (c.y = 0);
            Ex[wb](ts) ? c.x = 0 <= h ? h : g : c.x = g <= l[w] - a.n[w] ? g : h;
            c.x > l[w] - a.n[w] && (c.x = l[w] - a.n[w]);
            0 > c.x && (c.x = 0);
            vv(a.d, c);
            Jv(a.d, !0);
            HG(a)
        } else a.eg(), Jv(a.d, !1)
    }
    P.ma = Pr(Zl);
    P.Gd = function (a) {
        this.c.Kd(this.s);
        Jv(this.d, !0);
        this.N = a;
        this.f = [];
        for (var b in a)
            if (a[b] !== ka[u][b])
                if (a[b] == Df) {
                    var c = {
                        ac: this.c.t(Sl, {
                            className: Wm,
                            value: b
                        }),
                        Qi: !0
                    };
                    this.f[r](c)
                } else {
                    c = {
                        ac: this.c.t(Cj, {
                            className: Vm,
                            href: Hn,
                            value: b
                        })
                    };
                    this.f[r](c);
                    var d = this.c.t(Sl, {
                        style: tr
                    });
                    this.c[p](c.ac, d);
                    this.a.Yd && this.c[p](d, this.c.t(Qp, {
                        className: An
                    }, Lr));
                    this.c[p](d, this.c.t(Qp, {
                        className: sq
                    }, a[b]));
                    this.j.l(c.ac, ll, this.Vg)
                }
        a = this.f[s] - 1;
        a = n[Ib]((a - a % this.a.lf) / this.a.lf) + 1;
        this.F = this.c.t(fq, {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
        });
        c = this.c.t(hq);
        b = this.c.t(Iq, {
            valign: Bq
        });
        xa(this.s, Sm);
        this.c[p](this.s, this.F);
        this.c[p](this.F, c);
        this.c[p](c, b);
        for (d = c = 0; c < a; ++c) {
            var f = this.c.t(iq);
            this.c[p](b, f);
            for (var g = 0; 11 > g && d < this.f[s]; ++g, ++d) this.c[p](f, this.f[d].ac);
            c != a - 1 && (f = this.c.t(iq, {
                "class": Tm
            }, Ir), this.c[p](b, f))
        }
        this.e = null;
        this.Ba(this.f[0].ac[Zb]);
        HG(this);
        Jv(this.d, !1)
    };
    P.ua = function (a) {
        a = "undefined" == Vr(a) ? this.e : a;
        return this.N[a]
    };
    P.Mf = Nr();
    P.Ba = function (a) {
        if (this.e != a) {
            this.ua(a) && (this.e = a, this.Mf());
            for (var b = 0; b < this.f[s]; ++b) {
                var c = this.f[b];
                c.Qi || xa(c.ac, c.ac[Zb] == a && this.a.Yd ? Vm : Um)
            }
        }
    };

    function HG(a) {
        Ov(a.s, Nv(a.F));
        Ov(a.d, Nv(a.s));
        a.n = Nv(a.d)
    }

    function IG(a, b) {
        FG[G](this, a, b)
    }
    S(IG, FG);
    P = IG[u];
    P.Ce = function () {
        this.g = this.b[Ic](Cj);
        xa(this.g, Rm);
        Va(this.g, Hn);
        this.o = this.b.t(Qp);
        this.g[p](this.o);
        this.w = this.b.t(yn, {
            src: Ks,
            style: uk + Ds + tf,
            width: 14,
            height: 14
        });
        this.g[p](this.w)
    };
    P.eg = function () {
        qv(this.w, yk, Hf)
    };
    P.fg = function () {
        qv(this.w, yk, sg)
    };
    P.X = function () {
        IG.k.X[G](this);
        this.w = this.o = null
    };
    P.Mf = function () {
        this.b.hb(this.o, this.ua(this.e) || N)
    };
    P.Lb = function (a) {
        this.Gd[G](this, a)
    };

    function JG(a, b) {
        FG[G](this, a, b)
    }
    S(JG, FG);
    P = JG[u];
    P.Ce = function () {
        this.g = this.b[Ic](Cj);
        xa(this.g, Rm);
        Va(this.g, Hn);
        this.o = this.b.t(Qp);
        this.g[p](this.o);
        this.g[p](this.b.t(yn, {
            src: Ks,
            width: 1,
            height: 1
        }));
        this.g[p](this.b.t(Qp, {
            style: Nk
        }, Kr));
        this.g[p](this.b.t(yn, {
            src: Ks,
            width: 1,
            height: 1
        }));
        this.w = this.b.t(Qp, {
            style: Al
        }, Mr);
        this.g[p](this.w)
    };
    P.eg = function () {
        qv(this.w, zl, Ve)
    };
    P.fg = function () {
        qv(this.w, zl, Xe)
    };
    P.X = function () {
        JG.k.X[G](this);
        this.w = this.o = null
    };
    P.Mf = function () {
        this.b.hb(this.o, this.ua(this.e) || N)
    };
    P.Lb = function (a) {
        this.Gd[G](this, a)
    };

    function KG(a, b) {
        FG[G](this, a, b);
        this.a.Yd = !1
    }
    S(KG, FG);
    KG[u].Ce = function () {
        this.g = this.b[Ic](Sl);
        xa(this.g, Lm);
        var a = this.b.t(Sl, {
            style: vk + Cs + rf
        });
        this.g[p](a);
        this.o = this.b[Ic](Yk);
        a[p](this.o)
    };
    KG[u].$h = function (a) {
        Fa(this.o, N);
        this.o[p](this.b[Wb](a + Jr))
    };
    KG[u].X = function () {
        KG.k.X[G](this);
        this.o = null
    };
    KG[u].Vg = function (a) {
        this.Ba(a[nc][Zb]);
        this[A](el);
        this.le()
    };

    function LG(a, b) {
        zy[G](this, b);
        this.f = new Gw(this);
        this.a = a && Jt(a) || {};
        this.a.Ya || (this.a.Ya = Hs);
        this.a.Xe = !1;
        qv(this.b.B[D], Xo, pp);
        hx || qv(this.b.B[D], go, yg);
        qv(this.b.B[Nd], jn, yg);
        qv(this.b.B[D], Bq, rg);
        U && (k._bannerquirkfixleft = -ea(pg + this.b.B[D].leftMargin, 10), k._bannerquirkfixtop = -ea(pg + this.b.B[D].topMargin, 10) - 40)
    }
    S(LG, zy);
    P = LG[u];
    P.pa = function () {
        var a = this.b.B[D][I];
        Gy(this, a[K], a)
    };
    P.t = function () {
        this.g = this.b[Ic](Sl);
        this.la = !1;
        Jv(this.g, !1);
        Y.add(this.g, Mp);
        var a = $(this, Dl);
        Fa(this.g, nh + a + ee)
    };
    P.M = function () {
        LG.k.M[G](this);
        var a = Kz();
        a.a.L(Hl, Qs);
        var b = Ex[wb](ts) ? Cp : bo,
            c = this.a.Ya,
            d = $(this, dp),
            f = $(this, Cl),
            g = $(this, bp),
            h = $(this, cp),
            l = $(this, bl),
            q = $(this, pm),
            v = $(this, up),
            t = $(this, gm),
            B = $(this, fm),
            z = $(this, xl),
            V = $(this, so),
            ha = this.a.pb,
            ba = a[mb](),
            md, Qc, nd, a = [];
        this.a.Xe && a[r](SD({
            id: $(this, ep)
        }));
        a[r](SD({
            id: $(this, fp)
        }));
        md = qs.Zi[id](null, a);
        a = [];
        this.a.Xe && a[r](SD({
            id: $(this, qm)
        }));
        a[r](SD({
            id: $(this, rm)
        }));
        Qc = qs.Xi[id](null, a);
        this.a.Se && (nd = this.a.Se);
        this.j = this.b.h($(this, Dl));
        this.f.l(this.j,
            Yn, this.dj);
        JD(this.j, R(function () {
            var a = Zu(this.j);
            a[pc](lh + c + Ee + b + Se + Ls + be + qs.Ug + ze + (nd ? yh + Ks + we + nd + ae + nd + me + Ds + vf : N) + xh + d + ne + md + Zg + f + Me + qs.Og + Sg + V + Be + g + oe + qs.Yi + ef + h + Ae + Gs + Ke + l + ye + qs.Yg + Tg + q + qe + Qc + Zg + v + ye + qs.Wi + Tg + t + pe + B + de + (ha ? oh + ba + He : N) + wh + z + ce + qs.Zg + Pe + Ks + re + qs.Zg + me + Ds + uf);
            a[lc]()
        }, this))
    };
    P.dj = function () {
        this.c = new uu(Zu(this.j));
        Fa(this.c.h($(this, fm)), qs.Ji);
        if (this.a.Ya == Hs) {
            var a = gr + Cs + pf;
            qv(this.c.B[D], xk, a);
            for (var b = this.c.B[Id](Yk), c = 0; c < b[s]; ++c) qv(b[c][K], xk, a), qv(b[c][K], zk, rp), qv(b[c][K], yk, qg)
        }
        this.a.Xe && (this.e = new IG(this.a, this.c));
        this.d = new IG(this.a, this.c);
        this.m = new KG(this.a, this.c);
        this.f.l(this.c.h($(this, Cl)), ll, FD(this, rl));
        this.f.l(this.c.h($(this, bl)), ll, FD(this, pl));
        this.f.l(this.c.h($(this, up)), ll, FD(this, ul));
        this.f.l(this.c.h($(this, xl)), ll, FD(this,
            ql));
        this.w = this.c.h($(this, so));
        this.f.l(this.w, ll, FD(this, sl));
        this.e && this.f.l(this.e, el, FD(this, il));
        this.f.l(this.d, el, FD(this, jl));
        this.f.l(this.m, el, this.Li);
        a = new zD(R(this.Mi, this));
        this.e && this.f.l(this.e, Yn, AD(a));
        this.f.l(this.d, Yn, AD(a));
        this.f.l(this.m, Yn, AD(a));
        a.Vb();
        this.e && this.e.pa(this.c.h($(this, ep)));
        this.d.pa(this.c.h($(this, fp)));
        this.m.pa(this.c.h(Jo))
    };
    P.Mi = function () {
        this.m.$h(qs.nk);
        this.m.Gd({
            manage_site: qs.mk,
            s1: Df,
            turn_off_site: qs.ok,
            s2: Df,
            learn_more: qs.lk
        });
        this[A](Yn)
    };
    P.Li = function () {
        switch (this.m.ma()) {
        case co:
            var a = mg,
                a = zs ? a + (cq + zs) : a + (Sj + m[$b][Yc]);
            k[vb](a, yj);
            break;
        case Rn:
            k[vb](Ps, yj);
            break;
        case Zq:
            this[A](tl)
        }
    };
    P.X = function () {
        this.A(!1);
        LG.k.X[G](this);
        this.f.z();
        this.f = null;
        this.e && (this.e.z(), this.e = null);
        this.d.z();
        this.d = null;
        this.m.z();
        this.m = null;
        Qu(this.j);
        this.Xc = this.c = null
    };
    P.ad = function () {
        return this.e ? this.e.ma() : N
    };
    P.Aa = function () {
        return this.d.ma()
    };
    P.ae = function (a) {
        this.e && this.e.Ba(a);
        this.F && this.F[a] && this.c.hb(this.w, qs.Wj(this.F[a]))
    };
    P.Fa = function (a) {
        this.d.Ba(a)
    };
    P.Qb = Or(Dp);

    function MG(a, b, c, d) {
        if (a.Xc != b) {
            a.Xc = b;
            if (0 == b) {
                a.e && DG(a.e, a.c.h($(a, ep)));
                if (a.o) {
                    var f = a.Aa();
                    a.d.Lb(a.o);
                    a.Fa(f)
                }
                DG(a.d, a.c.h($(a, fp)))
            } else 2 == b && (a.e && DG(a.e, a.c.h($(a, qm))), a.n && (f = a.Aa(), a.d.Lb(a.n), a.Fa(f)), DG(a.d, a.c.h($(a, rm))));
            f = {};
            f[-1] = a.c.h($(a, gm));
            f[0] = a.c.h($(a, dp));
            f[1] = a.c.h($(a, bp));
            f[2] = a.c.h($(a, pm));
            for (var g in f) f[g] !== ka[u][g] && Jv(f[g], g == b)
        }
        c && a.A(!0);
        cb(a.w[K][K][C], d ? Ik : wo)
    }
    P.H = Pr("la");
    P.A = function (a) {
        if (this.la != a) {
            this.la = a;
            if (U) var b = ea(pg + this.b.B[D].leftMargin, 10),
            c = ea(pg + this.b.B[D].topMargin, 10);
            var d = this.b.B[Vc] == Oh;
            a ? (qv(this.b.B[D], Bq, Dg), Jv(this.g, !0), U && (X(Hg) ? (k._bannerquirkfixleft = k._bannerquirkfixtop = 0, d && (this.b.B[D].topMargin = c + 40)) : d ? (this.b.B[D].topMargin = c + 40, k._bannerquirkfixleft = k._bannerquirkfixtop = 0) : (k._bannerquirkfixleft = -b, k._bannerquirkfixtop = -c - 40))) : (qv(this.b.B[D], Bq, rg), Jv(this.g, !1), d && 40 <= c && (this.b.B[D].topMargin = c - 40))
        }
    };
    P.jf = function (a) {
        this.c.hb(this.c.h($(this, cp)), a)
    };
    P.af = function (a, b) {
        this.o = a;
        this.n = b;
        this.d.Lb(a)
    };

    function NG(a, b) {
        zy[G](this, b);
        this.a = a && Jt(a) || {};
        this.c = new Gw(this)
    }
    S(NG, zy);
    var OG = {
        xl: 0,
        ol: 1,
        rl: 2
    };
    P = NG[u];
    P.t = function () {
        this.g = this.b[Ic](Sl);
        Y.add(this.g, Mp);
        Y.add(this.g, Nm);
        this.g.dir = Ex[wb](ts) ? Cp : bo;
        Jv(this.g, !1);
        if (2 == this.a.Ub) Fa(this.g, TD({
            id: $(this, gq),
            zh: N,
            yh: N
        }));
        else {
            var a = U && !X(Hg),
                a = qs.Ej(vh + (a ? uh + Ns + jf : qh + Ns + te) + qs.Ug + Qg || N);
            Fa(this.g, TD({
                id: $(this, gq),
                zh: N,
                yh: 1 == this.a.Ub ? df + a : a
            }))
        }
    };
    P.M = function () {
        NG.k.M[G](this);
        this.d = 2 == this.a.Ub ? new JG(null, this.b) : new EG(this.b);
        this.c.l(this.d, el, FD(this, jl));
        this.c.l(this.d, Yn, this.Oi);
        var a = this.b.h($(this, gq));
        if (2 == this.a.Ub) {
            var b = this.b.t(yn, {
                src: Ks,
                "class": Om
            });
            b[C].backgroundImage = gr + Ds + pf;
            b[C].backgroundPosition = If;
            var c = this.b.t(Qp, {
                style: qr
            });
            a[p](b);
            a[p](c);
            this.d.pa(c);
            a[C].whiteSpace = yo;
            xa(a, Pm)
        } else this.d.pa(a), 1 == this.a.Ub && cb(a[C], Bn)
    };
    P.Oi = function () {
        if (2 == this.a.Ub) {
            var a = this.d,
                b = this.b.h($(this, gq));
            a.j.T(a.m, ll, a.gf);
            a.m = b;
            a.j.l(a.m, ll, a.gf)
        }
        this[A](Yn)
    };
    P.X = function () {
        NG.k.X[G](this);
        this.c.z();
        this.c = null;
        this.d.z();
        this.d = null
    };
    P.Aa = function () {
        return this.d.ma()
    };
    P.Fa = function (a) {
        a == N ? this.o && this.d.Lb(this.o) : this.n && this.d.Lb(this.n);
        this.d.Ba(a)
    };
    P.A = function (a) {
        Jv(this.g, a)
    };
    P.Ga = function (a) {
        this.d.Ga(a)
    };
    P.af = function (a, b) {
        this.o = a;
        this.n = b
    };

    function PG(a, b) {
        zy[G](this, b);
        this.a = a && Jt(a) || {};
        this.a.Ya || (this.a.Ya = Hs);
        this.c = new Gw(this)
    }
    S(PG, zy);
    var QG = {
        vl: 1,
        wl: 2,
        el: 3,
        dl: 4
    };
    P = PG[u];
    P.t = function () {
        this.g = this.b[Ic](Sl);
        this.la = !1;
        Jv(this.g, !1);
        var a = $(this, Dl);
        Fa(this.g, nh + a + ge)
    };
    P.M = function () {
        PG.k.M[G](this);
        var a = Ex[wb](ts) ? Cp : bo,
            b = this.a.Ya,
            c = $(this, Uq),
            d;
        this.g.id = $(this, tm);
        var f = this.g.id,
            g, h, l, q;
        xa(this.g, this.g[zb] + Td);
        switch (this.a.Sc) {
        case 2:
            d = Dm;
            g = 0;
            h = 20;
            break;
        case 3:
            d = Cm;
            l = 0;
            h = 20;
            break;
        case 4:
            d = Cm;
            l = 0;
            q = 20;
            break;
        default:
            d = Dm, g = 0, q = 20
        }
        Kv(jg + (g || 0 == g ? Cq + g + jp + g + yf : Dq) + (q || 0 == q ? Vn + q + hp + q + zf : Wn) + (l || 0 == l ? Wk + l + kp + l + Qf + f + gf : Xk) + (h || 0 == h ? xp + h + ip + h + Qf + f + hf : yp) + Hr || N, this.g);
        this.j = this.b.h($(this, Dl));
        this.c.l(this.j, Yn, this.Pi);
        JD(this.j, R(function () {
            var f = Zu(this.j);
            f[pc](lh + b + Fe + d + le + a + Le + c + he + Ks + me + Ds + wf + qs.Og + Yg);
            f[lc]()
        }, this))
    };
    P.Pi = function () {
        this.d = (new uu(Zu(this.j))).h($(this, Uq));
        this.c.l(this.d, ll, FD(this, vl));
        Jv(this.g, !0);
        var a = Nv(this.d);
        Jv(this.g, !1);
        Ov(this.j, a);
        Ov(this.g, a);
        this[A](Yn)
    };
    P.X = function () {
        PG.k.X[G](this);
        this.c.z();
        this.c = null;
        Qu(this.j);
        this.d = this.j = null
    };
    P.H = Pr("la");
    P.A = function (a) {
        this.la = a;
        Jv(this.g, a)
    };

    function RG(a, b) {
        Vr(a) == Xp && (b = a, a = {});
        Vr(b) == Xp && (b = wu(ga(b)));
        this.f = b;
        this.j = new Gw(this);
        this.Na = k[$b][Kc] == rn ? !! zs : !1;
        var c = ka(a);
        this.e = sk;
        var d;
        !(d = k[sc] != k) && (d = !k.external || !k.external.googleToolbarVersion || 6.2 > fa(k.external.googleToolbarVersion)) && (d = !k.gtbExternal || !k.gtbExternal.isTranslateEnabled || !k.gtbExternal.isTranslateEnabled()) && (d = ca.appVersion && ca.appVersion[xc](/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), d = !(d && (d[2] && d[3]) && 4001 <= 1E3 * ia(d[2]) + ia(d[3])));
        this.a = {
            Md: d,
            xg: !1,
            Pe: null,
            Ld: null,
            Re: [],
            yg: [],
            si: !1,
            wc: !1,
            Jg: N,
            Td: !1,
            Bg: !1,
            Ve: N,
            Ub: 0
        };
        d = k[$b][Kc] == un;
        this.ta = {
            Ya: Hs,
            Se: d ? qs.Ig : null,
            pb: this.Na
        };
        this.a.Td = d;
        this.W = {
            Ya: Hs,
            Sc: null
        };
        c && (tk in c && (this.a.Md = this.a.Md && da(c.autoDisplay)), qo in c && (this.a.wc = da(c.multilanguagePage)), Bm in c && (this.a.Bg = da(c.gaTrack)), Qn in c && (this.a.Ub = c.layout), c.pageLanguage && (this.a.Nd = GD(c.pageLanguage)), hr in c && (this.a.Td = !! c.useSecureConnection, this.ta.Se = this.a.Td ? qs.Ig : null), c.includedLanguages && (this.a.Re = c.includedLanguages[Qb](Af)),
            c.excludedLanguages && (this.a.yg = c.excludedLanguages[Qb](Af)), this.a.Nd && (this.e = this.a.Nd), c.key && (this.a.Jg = c.key), c.gaId && (this.a.Ve = c.gaId), this.W.Sc = ia(c.floatPosition) || this.W.Sc);
        SG(this) && (this.a.xg = !0);
        this.n = {};
        if ((c = m.cookie[xc](/(^|; )googtransopt=(.*?)(;|$)/)) && c[2])
            for (this.n = {}, c = Zs(c[2])[Qb](Fr), d = 0; d < c[s]; ++d) {
                var f = c[d][Qb](zh);
                f[0] && (this.n[f[0]] = f[1])
            }
        this.ea = new CF({
            Wb: 1,
            Ue: !0,
            pb: this.Na,
            Bk: Os,
            Hb: [ml, $q, Gp]
        });
        this.ea.b.f = {
            client: As,
            u: k[$b][Yc],
            scid: zs
        };
        this.m = new BG(this.a.Td,
            this.ea, void 0, 0, this.a.Jg);
        this.s = !1;
        this.Ea = !this.a.Md && !this.W.Sc && !this.f;
        this.j.l(k, cr, this.z);
        this.D = new zD(R(this.yi, this));
        this.w = new zD(R(this.zi, this));
        this.K = new CD(R(this.Ai, this));
        this.b = new LG(this.ta);
        this.m.Qd(AD(this.D, R(this.wi, this)), ts);
        k[$b][Kc] == rn && zs && this.m.Ze(AD(this.D, R(this.xi, this)));
        this.f ? (this.d = new NG(this.a), this.j.l(this.d, Yn, AD(this.D)), this.j.l(this.d, jl, DD(this.K, this.w.Za(R(this.vi, this)))), this.d.pa(this.f)) : this.W.Sc && (this.C = new PG(this.W), this.j.l(this.C,
            Yn, AD(this.D)), this.j.l(this.C, vl, DD(this.K, this.w.Za(R(this.ui, this)))), this.C.pa());
        !this.a.Nd && this.a.si && this.m.Pd(AD(this.D, R(this.ti, this)));
        this.D.Vb()
    }
    S(RG, Wv);

    function SG(a) {
        function b(a, b) {
            var c = Zs(a)[xc](wj);
            if (c) {
                if (c[3]) return b.a.Pe = c[2], b.a.Ld = c[3], !0;
                if (c[6]) return b.a.Pe = c[5], b.a.Ld = c[6], !0
            }
            return !1
        }
        var c = {
            url: function () {
                var a = k[$b][Yc][xc](/#.*googtrans(.*)/);
                return a && a[1]
            },
            cookie: function () {
                var a = m.cookie[xc](/(^|; )googtrans=(.*?)(;|$)/);
                return a && a[2]
            }
        }, d;
        for (d in c)
            if (c[d] !== ka[u][d]) {
                var f = c[d]();
                if (f && b(f, a)) return d
            }
        return N
    }

    function TG(a, b) {
        for (var c = k[$b][kc][Qb](hg); 2 < c[s];) c[xb]();
        var c = Mg + c[M](hg),
            d;
        null != b ? d = a + zh + b : (d = new Date, d.setTime(d[Ed]() - 1), d = a + Ah + d.toGMTString());
        d += Ng;
        m.cookie = d;
        try {
            m.cookie = d + c
        } catch (f) {}
    }

    function UG(a, b) {
        var c = null;
        Wr(b) && (c = Wr(a) ? kg + a + kg + b : kg + b);
        TG(Ym, c)
    }
    P = RG[u];
    P.wi = function (a) {
        this.c = GD(ts);
        this.F = a || {};
        this.o = {};
        this.N = {};
        a = !this.a.Re[s];
        var b = yD(this.a.Re),
            c = yD(this.a.yg);
        this.o[ts] = N;
        this.N[ts] = N;
        for (var d in this.F.tl) this.F.tl[d] === ka[u][d] || (!(a || d in b) || d in c) || (this.N[d] = this.F.tl[d], d == this.a.Nd && !this.a.wc) || (this.o[d] = this.F.tl[d]);
        this.o[ts] || delete this.o[ts];
        this.N[ts] || delete this.N[ts];
        this.Ma = Jt(this.F.sl)
    };
    P.xi = function (a) {
        a = a || {};
        a = a.us || $q;
        this.ea.Qb(a);
        this.b.Qb(a);
        this.m.Qb(a)
    };
    P.ti = function (a) {
        a && (this.e = GD(a))
    };
    P.yi = function () {
        delete this.D;
        if (this.F) {
            this.e = this.e || this.a.Pe;
            this.c = this.a.Ld || this.c;
            var a = this.a.xg || this.a.Md && this.e != this.c && !(this.e in us) && this.n.os != tg && this.n[Bo + this.e] != tg;
            this.e == Br && (this.e = Ar);
            this.Ma[this.e] || (a = !1, this.e = sk);
            if (!this.o[this.c])
                if (a = !1, this.o.en) this.c = am;
                else
                    for (var b in this.o)
                        if (this.o[b] !== ka[u][b]) {
                            this.c = b;
                            break
                        }
            if (this.d) {
                var c = this.o,
                    d = {
                        "": qs.Ni
                    };
                for (b in c) c[b] !== ka[u][b] && (d[b] = c[b]);
                this.d.af(d, this.N);
                this.d.Fa(N)
            }
            if (!rs._cnad && a)
                if (this.a.Ld) DD(this.K,
                    this.w.Za(R(this.Vd, this, !0, !0)))[G]();
                else this.s = !0, DD(this.K, this.w.Za(R(this.Vd, this)))[G](), ID(mq, {
                    sl: this.e
                });
                else this.C && this.C.A(!0), this.d && this.d.A(!0);
            k.google[jd].TranslateService && this.Ga(!1);
            this.K.Vb()
        }
    };
    P.zi = function () {
        var a = this.b,
            b = this.Ma;
        a.e && a.e.Lb(b);
        a.F = b;
        this.b.af(this.o, this.N);
        this.b.ae(this.e);
        this.b.Fa(this.c);
        this.j.l(this.b, rl, this.mj);
        this.j.l(this.b, pl, this.lj);
        this.j.l(this.b, ul, this.ef);
        this.j.l(this.b, ql, this.be);
        this.j.l(this.b, sl, this.nj);
        this.j.l(this.b, tl, this.oj);
        this.j.l(this.b, il, this.hh);
        this.j.l(this.b, jl, this.hh);
        this.d && this.d.A(!0)
    };
    P.Ai = function () {
        this.j.l(this.b, Yn, AD(this.w));
        this.b.pa();
        this.w.Vb()
    };
    P.p = function () {
        this.m[dd]();
        RG.k.p[G](this);
        this.m.z();
        this.j.z();
        this.j = null;
        this.b && this.b.z();
        this.b = null;
        this.C && this.C.z();
        this.C = null;
        this.d && this.d.z();
        this.f = this.d = null
    };
    P.mj = function () {
        !this.b.H() || !this.a.wc && OD(this.e, this.b.Aa()) || (this.s && ID(qq, {
            sl: this.e
        }), VG(this, !1), this.d && this.d.Fa(this.b.Aa()))
    };
    P.lj = function () {
        this.b.H() && (WG(this), MG(this.b, 0), this.d && this.d.Fa(N))
    };
    P.ef = function () {
        this.b.H() && (WG(this), MG(this.b, 0));
        this.d && this.d.Fa(N)
    };
    P.be = function () {
        this.b.H() && (this.s && (this.s = !1, ID(nq, {
            sl: this.e
        })), WG(this), this.b.A(!1), this.d && this.d.Fa(N), this.C && this.C.A(!0))
    };
    P.nj = function () {
        if (this.b.H() && (this.n[Bo + this.e] = tg, ID(pq, {
            sl: this.e
        }), this.s = !1, this.be(), this.Ea)) {
            var a = this.onTurnOffLanguageClick;
            try {
                Vr(a) == zm && a[id](this, [])
            } catch (b) {}
        }
    };
    P.oj = function () {
        if (this.b.H()) {
            this.s = !1;
            this.n.os = tg;
            var a = null;
            if (this.n) {
                var a = [],
                    b;
                for (b in this.n) this.n[b] !== ka[u][b] && a[r](b + zh + this.n[b]);
                a = a[M](Fr)
            }
            TG(Zm, a);
            this.be()
        }
    };
    P.hh = function () {
        this.b.H() && (!this.a.wc && OD(this.e, this.b.Aa()) ? this.ef() : (this.e = this.b.ad() || this.e, this.c = this.b.Aa(), 2 == this.b.Xc && (this.d && this.d.Fa(this.b.Aa()), VG(this))))
    };
    P.Vd = function (a, b) {
        this.b.H() || (this.C && this.C.A(!1), a ? VG(this, b) : MG(this.b, 0, !0, this.s || this.Ea))
    };
    P.Ak = function (a, b) {
        DD(this.K, this.w.Za(R(this.Vd, this, a, b)))[G]()
    };
    P.ui = function () {
        this.Vd(2 == this.b.Xc)
    };
    P.vi = function () {
        this.d.Aa() ? !this.a.wc && OD(this.e, this.b.Aa()) ? this.ef() : (this.c = this.d.Aa(), this.b.Fa(this.c), VG(this)) : this.d.Fa(this.c)
    };

    function VG(a, b) {
        if (k.google[jd].TranslateService) try {
            k.google[jd].TranslateService.getInstance()[dd]()
        } catch (c) {}
        UG(a.e, a.c);
        a.s = !1;
        !b && a.e in us && ID(oq, {
            sl: a.e
        });
        a.b.jf(0);
        MG(a.b, 1, !0);
        a.m.eh( !! b);
        k[Lb](R(a.m.Wd, a.m, a.a.wc ? sk : a.e, a.c, R(a.ej, a), void 0, void 0), 0);
        if (a.a.Bg && k._gaq && k._gat) try {
            a.a.Ve ? k._gat._getTracker(a.a.Ve)._trackEvent(ci, Xi, a.c) : k._gat._getTrackerByName()._trackEvent(ci, Xi, a.c)
        } catch (d) {}
    }
    P.ej = function (a, b, c) {
        Vr(this.Ta) == zm && this.Ta();
        this.b.H() && 1 == this.b.Xc && (c ? (WG(this), MG(this.b, -1, !0)) : (this.b.jf(a), b && (this.d && this.d.Fa(this.c), this.b.ae(this.e), MG(this.b, 2))))
    };

    function WG(a) {
        UG();
        k[Lb](R(a.m[dd], a.m, null), 0)
    }
    P.Ga = function (a) {
        a || this.be();
        this.d && this.d.Ga(a);
        this.C && this.C.A(a)
    };

    function XG(a) {
        if (a && (a = ga(a), a = a[Qb](hg), a[s])) {
            for (var b = k, c = 0; c < a[s]; ++c) {
                var d = a[c];
                if (!(d && d in b)) return;
                b = b[d]
            }
            return b
        }
    };
    var YG = XG("google.translate.m");
    if (YG)
        for (var ZG in qs)
            if (qs[ZG] !== ka[u][qs[ZG]] && qs[ZG]) {
                var $G = qs[ZG]();
                qs[ZG] = YG[$G] ? YG[$G] : ps
            }
    if (1 == vs) {
        var aH = null,
            bH = function (a) {
                if (!aH) {
                    var b = k[$b][Kc] == un,
                        c;
                    a && (hr in a && (b = !! a.useSecureConnection), Kn in a && (c = a.key));
                    a = 0;
                    Zt && (a = 3);
                    aH = new BG(b, new CF({
                        Wb: a,
                        Ue: !0
                    }), void 0, 0, c);
                    aH.constructor = Tr;
                    Ta(aH, aH[Pc]);
                    aH.getSupportedLanguages = aH.Qd;
                    aH.getPageLanguage = aH.Pd;
                    aH.setClickThrough = aH.eh;
                    aH.translatePage = aH.Wd;
                    Wa(aH, aH[dd]);
                    aH.isTranslating = aH.yk
                }
                return aH
            };
        bH.getInstance = function () {
            return aH
        };
        js("google.translate.TranslateService", bH);
        ID("te_li")
    } else {
        var cH = null,
            dH = function (a, b) {
                cH ||
                    (cH = new RG(a, b), cH.constructor = Tr);
                return cH
            };
        dH.getInstance = function () {
            return cH
        };
        js("google.translate.TranslateElement", dH);
        RG[u].dispose = RG[u].z;
        RG[u].showBanner = RG[u].Ak;
        RG[u].setEnabled = RG[u].Ga;
        js("google.translate.TranslateElement.FloatPosition", QG);
        QG.TOP_LEFT = 1;
        QG.TOP_RIGHT = 2;
        QG.BOTTOM_RIGHT = 3;
        QG.BOTTOM_LEFT = 4;
        js("google.translate.TranslateElement.InlineLayout", OG);
        OG.VERTICAL = 0;
        OG.HORIZONTAL = 1;
        OG.SIMPLE = 2
    }
    (function () {
        for (var a in ka[u]) {
            Dt = function (a, b, c) {
                for (var h in a) a[h] !== ka[u][h] && b[G](c, a[h], h, a)
            };
            break
        }
        var b = is(),
            c = XG(rs._cuc);
        c && Vr(c) == zm && (1 == vs ? c() : function f() {
            var a = m[Ac];
            "undefined" == Vr(a) || a == Bl || 2E4 <= is() - b ? c() : k[Lb](f, 500)
        }())
    })();
})()