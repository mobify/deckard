define([
    '$',
    'ua'
], function($, ua) {
    var MOBILE = 'mobile';
    var TABLET = 'tablet';
    var DESKTOP = 'desktop';
    var PORTRAIT = 'portrait';
    var LANDSCAPE = 'landscape';

    var $body = $('body');

    var detect = function(ua) {
        var os = this.os = {};
        var browser = this.browser = {};
        var classes = [];
        var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        var osx = !!ua.match(/\(Macintosh\; Intel /);
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        var windowsphone = ua.match(/Windows Phone ([\d.]+)/);
        var kindle = ua.match(/Kindle\/([\d.]+)/);
        var silk = ua.match(/Silk\/([\d._]+)/);
        var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
        var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
        var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
        var playbook = ua.match(/PlayBook/);
        var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
        var firefox = ua.match(/Firefox\/([\d.]+)/);
        var ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
        var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
        var safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

        browser.webkit = !!webkit;

        if (browser.webkit) {
            browser.version = webkit[1];
        }

        if (android) {
            os.android = true;
            os.version = android[2];
            classes.push('android');
        }
        if (iphone && !ipod) {
            os.ios = os.iphone = true;
            os.version = iphone[2].replace(/_/g, '.');
            classes.push('ios iphone');
        }
        if (ipad) {
            os.ios = os.ipad = true;
            os.version = ipad[2].replace(/_/g, '.');
            classes.push('ios ipad');
        }
        if (ipod) {
            os.ios = os.ipod = true;
            os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            classes.push('ios ipod');
        }
        if (windowsphone) {
            os.windowsphone = true;
            os.version = windowsphone[1];
            classes.push('windows');
        }
        if (blackberry) {
            os.blackberry = true;
            os.version = blackberry[2];
            classes.push('blackberry');
        }
        if (bb10) {
            os.bb10 = true;
            os.version = bb10[2];
            classes.push('blackberry bb10');
        }
        if (rimtabletos) {
            os.rimtabletos = true;
            os.version = rimtabletos[2];
            classes.push('blackberry');
        }
        if (playbook) {
            browser.playbook = true;
            classes.push('playbook');
        }
        if (kindle) {
            os.kindle = true;
            os.version = kindle[1];
            classes.push('kindle');
        }
        if (silk) {
            browser.silk = true;
            browser.version = silk[1];
            classes.push('silk');
        }
        if (!silk && os.android && ua.match(/Kindle Fire/)) {
            browser.silk = true;
            classes.push('silk');
        }
        if (chrome) {
            browser.chrome = true;
            browser.version = chrome[1];
            classes.push('chrome');
        }
        if (firefox) {
            browser.firefox = true;
            browser.version = firefox[1];
            classes.push('firefox');
        }
        if (ie) {
            browser.ie = true;
            browser.version = ie[1];
            classes.push('ie');
        }
        if (safari && (osx || os.ios)) {
            browser.safari = true;
            classes.push('safari');
            if (osx) {
                browser.version = safari[1];
            }
        }
        if (webview) {
            browser.webview = true;
            classes.push('webview');
        }

        os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
        (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));

        os.mobile = !!(!os.tablet && !os.ipod && (android || iphone || blackberry || bb10 ||
        (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
        (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));

        classes.push(os.tablet ? TABLET : os.mobile ? MOBILE : DESKTOP);

        $body.addClass(classes.join(' '));
    };

    var orientation = function() {
        var isLandscape = (window.innerHeight / window.innerWidth) < 1;

        if (isLandscape) {
            $body.removeClass(PORTRAIT).addClass(LANDSCAPE);
            $.orientation = LANDSCAPE;
        } else {
            $body.removeClass(LANDSCAPE).addClass(PORTRAIT);
            $.orientation = PORTRAIT;
        }
    };

    $(window).on('orientationchange', orientation);

    detect.call($, ua);

    orientation();

    $.__detect = detect;
});
