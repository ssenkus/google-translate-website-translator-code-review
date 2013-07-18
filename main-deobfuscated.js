(function () {
    var c = document,
        d = "length",
        e = " translation",
        h = " using Google Translate?",
        l = "Google has automatically translated this page to: ",
        m = "Powered by ",
        n = "Translate",
        p = "Translate everything to ",
        q = "Translate this page to: ",
        r = "Translated to: ",
        s = "Turn off ",
        t = "Turn off for: ",
        u = "View this page in: ",
        v = "var ",
        x = this;

    function y(a, w) {
        var f = a.split("."),
            b = this;
		f[0] in b || !b.execScript || b.execScript("var "+ f[0]);
        for (var g; f["length"] && (g = f.shift());) f[d] || void 0 === w ? b = b[g] ? b[g] : b[g] = {} : b[g] = w;
    }
    Math.random();
	
    var z = {
        0: "Translate",
        1: "Cancel",
        2: "Close",
        3: function (a) {
            return "Google has automatically translated this page to: " + a
        },
        4: function (a) {
            return "Translated to: " + a
        },
        5: "Error: The server could not complete your request. Try again later.",
        6: "Learn more",
        7: function (a) {
			return "Powered by " + a
        },
        8: "Translate",
        9: "Translation in progress",
        10: function (a) {
            return "Translate this page to: " + (a + " using Google Translate?")
        },
        11: function (a) {
            return "View this page in: " + a
        },
        12: "Show original",
        13: "The content of this local file will be sent to Google for translation using a secure connection.",
        14: "The content of this secure page will be sent to Google for translation using a secure connection.",
        15: "The content of this intranet page will be sent to Google for translation using a secure connection.",
        16: "Select Language",
        17: function (a) {
            return "Turn off " + (a + " translation")
        },
        18: function (a) {
            return "Turn off for: " + a
        },
        19: "Always hide",
        20: "Original text:",
        21: "Contribute a better translation",
        22: "Contribute",
        23: "Translate all",
        24: "Restore all",
        25: "Cancel all",
        26: "Translate sections to my language",
        27: function (a) {
            return "Translate everything to " + a
        },
        28: "Show original languages",
        29: "Options",
        30: "Turn off translation for this site",
        31: null,
        32: "Show alternative translations",
        33: "Click on words above to get alternative translations",
        34: "Use",
        35: "Drag with shift key to reorder",
        36: "Click for alternative translations",
        37: "Hold down the shift key, click, and drag the words above to reorder.",
        38: "Thank you for contributing your translation suggestion to Google Translate.",
        39: "Manage translation for this site",
        40: "Click a word for alternative translations, or double-click to edit directly",
        41: "Original text",
        42: "Translate",
        43: "Translate",
        44: "Your correction has been submitted."
    };
	
	// has there been a google.translate object namespace (created in element.js)
    var A = window.google && google.translate && google.translate._const;
    if (A) {
        var B;
        "Turn off for: ": {
		// Version checking
		// C is an array that stores an object containing info about the script
            for (var C = [], D = ["15,0.01,20130630"], E = 0; E < D["length"]; ++E) {
                var F = D[E].split(","),
                    G = F[0];
                if (G) {
                    var H = Number(F[1]);
                    if (H && !(0.1 < H || 0 > H)) {
                        var I = Number(F[2]),
                            J = new Date,
                            K = 1E4 * J.getFullYear() + 100 * (J.getMonth() + 1) + J.getDate();
                        !I || I < K || C.push({
                            version: G,
                            a: H,
                            b: I
                        })
                    }
                }
            }
			
//							 N is set to a random number, either one created before or a new vale														
            for (var L = 0, M = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/), N = Number(M && M[1]) || Math.random(), E = 0; E < C["length"]; ++E) {
                var O = C[E],
                    L = L + O.a;
                if (1 <= L) break;
                if (N < L) {
                    B = O.version;
                    break t
                }
            }
            B = "16"
        }
		
		
		// URL for next script to load
        var P = "/translate_static/js/element/%s/element_main.js".replace("%s",
            B);
        if ("0" == B) {
		
			
            var Q = " translate_static js element %s element_main.js".split(" ");
            Q[Q["length"] - 1] = "main.js";
            P = Q.join("/").replace("%s", B)
        }
		
		
		var R = ("https:" == window.location.protocol ? "https://" : "http://") + A._pah + P, // URL for element_main.js
            S = document.createElement("script");
        S.type = "text/javascript";
        S.charset = "UTF-8";
        S.src = R;
		
		// either find the <head> or make one
        var T = c.getElementsByTagName("head")[0];
		T || (T = c.body.parentNode.appendChild(c.createElement("head")));
		// then add the element_main.js file
        T.appendChild(S);
		
		
        y("google.translate.m", z);
        y("google.translate.v", B)
    };
})()