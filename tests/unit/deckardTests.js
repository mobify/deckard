define([
    '$',
    'src/js/deckard'
], function($) {
    var $html = $('html');

    var UA = {
        Android_1_5: 'Mozilla/5.0 (Linux; U; Android 1.5; de-; HTC Magic Build/PLAT-RC33) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        Android_2_1: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Chrome/4.1.249.1025',
        Android_2_3: 'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/GRK39F) AppleWebKit/533.1 (KTHML, like Gecko) Version/4.0 Mobile Safari/533.1',
        Android_4_1_1: 'Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03O) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
        Android_4_1_1_Tablet: 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
        Android_4_0_3_native: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        Android_4_3: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 4 Build/JWR66Y) AppleWebKit/537.36 (KTHML, like Gecko) Chrome/29.0.1547.59 Mobile Safari/537.36',

        iOS_3_0_iPhone: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/1A542a Safari/419.3',
        iOS_4_0_iPhone: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
        iOS_3_1_1_iPod: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C145',
        iOS_3_2_iPad: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10',
        iOS_3_2_iPad_2: 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',
        iOS_4_2_iPad: 'Mozilla/5.0 (iPad; U; CPU OS 4_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C134 Safari/6533.18.5',
        iOS_4_3_iPhone_Simulator: 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
        iOS_5_0_iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
        iOS_5_1_iPad_webView: 'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/98176',
        iOS_6_0_iPad_mini: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A406 Safari/8536.25',
        iOS_6_1_iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B143 Safari/8536.25',
        iOS_7_0_iPhone: 'Mozilla 5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KTHML, like Gecko) Version/7.0 Mobile/11A449d Safari/9537.53',
        iOS_7_0_iPhone_Chrome: 'Mozilla 5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/536.26 (KHTM, like Gecko) CriOS/28.0.1500.17 Mobile/11A4449d Safari/8536.25',
        iOS_8_0_iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
        iOS_8_0_iPad: 'Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',

        BlackBerry_6_0_0_141: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+',
        PlayBook_1_0_0: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+',
        PlayBook_2_1_0: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
        BB10: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',

        Opera_11_51: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.7.1; U; en) Presto/2.9.168 Version/11.51',
        Opera_Mobile_Simulator: 'Opera/9.80 (Macintosh; Intel Mac OS X; Opera Mobi/[BUILD_NR]; U; en) Presto/2.7.81 Version/11.00',

        Kindle: 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)',
        Silk_1_0: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        Silk_1_0_accel: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.328_10008910) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',

        Safari_OSX_7_0_1: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.73.11 (KHTML, like Gecko) Version/7.0.1 Safari/537.73.11',
        Safari_OSX_7_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71',
        Safari_OSX_6_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25',

        Chrome_Android_18_0: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
        Chrome_iOS_19_0: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
        Chrome_OSX_24_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17',

        Firefox_13_Tablet: 'Mozilla/5.0 (Android; Tablet; rv:13.0) Gecko/13.0 Firefox/13.0',
        Firefox_13_Phone: 'Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0',
        Firefox_6_0_2: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:6.0.2) Gecko/20100101 Firefox/6.0.2',
        Firefox_Mobile_Simulator: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:2.1.1) Gecko/ Firefox/4.0.2pre Fennec/4.0.1',

        Windows_IE_9: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        Windows_IE_9_Compat: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)',
        Windows_IE_10: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
        Windows_IE_11: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
        Windows_RT_Surface: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)',
        Windows_Phone_8: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)'
    };

    var detect = function(ua, callback) {
        var detect = $.__deckard.detect(ua);
        var orientation =  $.__deckard.orientation();
        $.__deckard.addClasses(detect, orientation.orientation);

        callback.call(null, detect.os, detect.browser);
    };

    var hasClasses = function(classes) {
        classes = classes.split(' ');

        for (var i = 0; i < classes.length; i++) {
            assert.isTrue($html.hasClass(classes[i]));
        }
    };

    describe('Deckard tests', function() {
        beforeEach(function() {
            $html.removeAttr('class');
        });

        describe('Operating Systems/Devices', function() {
            describe('Android', function() {
                it('1.5', function(done) {
                    detect(UA.Android_1_5, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.equal('1.5', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android mobile');

                        done();
                    });
                });

                it('2.1', function(done) {
                    detect(UA.Android_2_1, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.equal('2.1', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android mobile');

                        done();
                    })
                });

                it('2.3.7', function(done) {
                    detect(UA.Android_2_3, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.equal('2.3.7', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android mobile');

                        done();
                    })
                });

                it('4.1.1', function(done) {
                    detect(UA.Android_4_1_1, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.isFalse(!!os.ios);
                        assert.equal('4.1.1', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!os.iphone);
                        assert.isTrue(browser.chrome);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android mobile');

                        done();
                    })
                });

                it('4.1.1 tablet', function(done) {
                    detect(UA.Android_4_1_1_Tablet, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.equal('4.1.1', os.version);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.chrome);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android tablet');

                        done();
                    })
                });

                it('4.0.3 native browser', function(done) {
                    detect(UA.Android_4_0_3_native, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.isFalse(!!os.ios);
                        assert.equal('4.0.3', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!os.iphone);
                        assert.isTrue(browser.androidBrowser);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android android-browser mobile');

                        done();
                    })
                });

                it('4.3', function(done) {
                    detect(UA.Android_4_3, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.isFalse(!!os.ios);
                        assert.equal('4.3', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(!!os.iphone);
                        assert.isTrue(browser.chrome);
                        assert.isFalse(!!browser.safari);

                        hasClasses('webkit android mobile');

                        done();
                    })
                });
            });

            describe('iOS', function() {
                it('iOS 3.0 iPhone', function(done) {
                    detect(UA.iOS_3_0_iPhone, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.iphone);
                        assert.isTrue(browser.webkit);
                        assert.equal('3.0', os.version);
                        assert.equal('420.1', browser.version);
                        assert.isTrue(os.mobile);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!os.android);
                        assert.isFalse(!!browser.ie);
                        assert.isFalse(!!browser.firefox);
                        assert.isFalse(!!browser.silk);
                        assert.isFalse(!!browser.chrome);
                        assert.isFalse(!!browser.playbook);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });

                it('iOS 3.1.1 iPod', function(done) {
                    detect(UA.iOS_3_1_1_iPod, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isUndefined(os.iphone);
                        assert.isTrue(os.ipod);
                        assert.equal('3.1.1', os.version);
                        assert.isFalse(!!os.mobile);
                        assert.isTrue(browser.safari);

                        //hasClasses('webkit ios ipod');

                        done();
                    })
                });
                it('iOS 3.2 iPad', function(done) {
                    detect(UA.iOS_3_2_iPad, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.ipad);
                        assert.isFalse(!!os.iphone);
                        assert.equal('3.2', os.version);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });
                it('iOS 3.2 iPad 2', function(done) {
                    detect(UA.iOS_3_2_iPad_2, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.ipad);
                        assert.ok(!os.iphone);
                        assert.equal('3.2', os.version);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });
                it('iOS 4.0 iPhone', function(done) {
                    detect(UA.iOS_4_0_iPhone, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.iphone);
                        assert.ok(!os.ipad);
                        assert.equal('4.0', os.version);
                        assert.isTrue(os.mobile);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });
                it('iOS 4.2 iPad', function(done) {
                    detect(UA.iOS_4_2_iPad, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.ipad);
                        assert.equal('4.2', os.version);
                        assert.isFalse(os.mobile);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });
                it('iOS 4.3 iPhone simulator', function(done) {
                    detect(UA.iOS_4_3_iPhone_Simulator, function(os, browser) {
                        assert.isTrue(os.ios);
                        assert.isTrue(os.iphone);
                        assert.equal('4.3', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });
                it('iOS 5.0 iPhone', function(done) {
                    detect(UA.iOS_5_0_iPhone, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.iphone);
                        assert.equal('5.0', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });

                it('iOS 5.1 iPad', function(done) {
                    detect(UA.iOS_5_1_iPad_webView, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.ipad);
                        assert.equal('5.1', os.version);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });

                it('iOS 6.1 iPhone', function(done) {
                    detect(UA.iOS_6_1_iPhone, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.iphone);
                        assert.equal('6.1', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.isFalse(!!browser.firefox);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });

                it('iOS 6.0 iPad mini', function(done) {
                    detect(UA.iOS_6_0_iPad_mini, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.ipad);
                        assert.equal('6.0', os.version);
                        assert.isFalse(os.mobile);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.safari);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });

                it('iOS 7.0 iPhone', function(done) {
                    detect(UA.iOS_7_0_iPhone, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.iphone);
                        assert.equal('7.0', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.isFalse(!!browser.firefox);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });

                it('iOS 7.0 iPhone chrome', function(done) {
                    detect(UA.iOS_7_0_iPhone_Chrome, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.iphone);
                        assert.equal('7.0', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isFalse(!!browser.safari);
                        assert.isTrue(browser.chrome);
                        assert.isFalse(!!browser.firefox);

                        hasClasses('webkit ios iphone chrome mobile');

                        done();
                    })
                });

                it('iOS 8.0 iPhone', function(done) {
                    detect(UA.iOS_8_0_iPhone, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.iphone);
                        assert.equal('8.0', os.version);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.isFalse(!!browser.firefox);

                        hasClasses('webkit ios iphone safari mobile');

                        done();
                    })
                });

                it('iOS 8.0 iPad', function(done) {
                    detect(UA.iOS_8_0_iPad, function(os, browser) {
                        assert.ok(os.ios);
                        assert.ok(os.ipad);
                        assert.equal('8.0', os.version);
                        assert.isFalse(os.mobile);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.isFalse(!!browser.firefox);

                        hasClasses('webkit ios ipad safari tablet');

                        done();
                    })
                });
            });

            describe('Blackberry', function() {
                it('6.0.0.141', function(done) {
                    detect(UA.BlackBerry_6_0_0_141, function(os, browser) {
                        assert.isTrue(os.blackberry);
                        assert.isTrue(browser.webkit);
                        assert.equal('6.0.0.141', os.version);

                        hasClasses('webkit blackberry mobile');

                        done();
                    });
                });

                it('1.0.0', function(done) {
                    detect(UA.PlayBook_1_0_0, function(os, browser) {
                        assert.isTrue(os.rimtabletos);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(os.tablet);
                        assert.equal('1.0.0', os.version);

                        hasClasses('webkit blackberry tablet');

                        done();
                    })
                });

                it('2.1.0', function(done) {
                    detect(UA.PlayBook_2_1_0, function(os, browser) {
                        assert.isTrue(os.rimtabletos);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(os.tablet);
                        assert.equal('2.1.0', os.version);

                        hasClasses('webkit blackberry tablet');

                        done();
                    })
                });

                it('10.0.0.1337', function(done) {
                    detect(UA.BB10, function(os, browser) {
                        assert.isTrue(os.bb10);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(os.mobile);
                        assert.equal('10.0.0.1337', os.version);

                        hasClasses('webkit blackberry bb10 mobile');

                        done();
                    })
                });
            });

            describe('Kindle', function() {
                it('3.0', function(done) {
                    detect(UA.Kindle, function(os, browser) {
                        assert.isTrue(os.kindle);
                        assert.isTrue(browser.webkit);
                        assert.equal('3.0', os.version);

                        hasClasses('webkit kindle tablet');

                        done();
                    })
                });

                it('2.3.4 Silk', function(done) {
                    detect(UA.Silk_1_0, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.silk);
                        assert.equal('2.3.4', os.version);

                        hasClasses('webkit android silk mobile');

                        done();
                    })
                });

                it('1.0.13.328_10008910 Silk', function(done) {
                    detect(UA.Silk_1_0_accel, function(os, browser) {
                        assert.ok(!os.android);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.silk);
                        assert.equal('1.0.13.328_10008910', browser.version);

                        hasClasses('webkit silk desktop');

                        done();
                    })
                });
            });
        });

        describe('Browsers', function() {
            describe('safari on OSX', function() {
                it('7.0.1', function(done) {
                    detect(UA.Safari_OSX_7_0_1, function(os, browser) {
                        assert.isUndefined(os.osx);
                        assert.ok(!os.ipad);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.equal('7.0.1', browser.version);

                        hasClasses('webkit safari desktop');

                        done();
                    });
                });

                it('7.0', function(done) {
                    detect(UA.Safari_OSX_7_0, function(os, browser) {
                        assert.ok(!os.ipad);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.equal('7.0', browser.version);

                        hasClasses('webkit safari desktop');

                        done();
                    });
                });

                it('6.0', function(done) {
                    detect(UA.Safari_OSX_6_0, function(os, browser) {
                        assert.ok(!os.ipad);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.safari);
                        assert.isFalse(!!browser.chrome);
                        assert.equal('6.0', browser.version);

                        hasClasses('webkit safari desktop');

                        done();
                    });
                });
            });

            describe('Firefox', function() {
                it('6.0.2', function(done) {
                    detect(UA.Firefox_6_0_2, function(os, browser) {
                        assert.isFalse(browser.webkit);
                        assert.equal('6.0.2', browser.version);
                        assert.isTrue(browser.firefox);

                        hasClasses('firefox desktop');

                        done();
                    })
                });

                it('13 Tablet', function(done) {
                    detect(UA.Firefox_13_Tablet, function(os, browser) {
                        assert.isTrue(browser.firefox);
                        assert.isFalse(browser.webkit);
                        assert.isTrue(os.android);
                        assert.isFalse(os.mobile);
                        assert.isTrue(os.tablet);

                        hasClasses('firefox tablet');

                        done();
                    })
                });

                it('12 Phone', function(done) {
                    detect(UA.Firefox_13_Phone, function(os, browser) {
                        assert.isTrue(browser.firefox);
                        assert.isFalse(browser.webkit);
                        assert.isTrue(os.android);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);

                        hasClasses('android firefox mobile');

                        done();
                    })
                });
            });

            describe('Chrome', function() {
                it('18 Android', function(done) {
                    detect(UA.Chrome_Android_18_0, function(os, browser) {
                        assert.isTrue(os.android);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.chrome);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.equal('18.0.1025.133', browser.version);

                        hasClasses('webkit android chrome mobile');

                        done();
                    })
                });

                it('19 iOS', function(done) {
                    detect(UA.Chrome_iOS_19_0, function(os, browser) {
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(os.ios);
                        assert.isTrue(browser.webkit);
                        assert.isTrue(browser.chrome);
                        assert.equal('19.0.1084.60', browser.version);

                        hasClasses('webkit ios iphone chrome mobile');

                        done();
                    })
                });

                it('24 OSX', function(done) {
                    detect(UA.Chrome_OSX_24_0, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.chrome);

                        hasClasses('webkit chrome desktop');

                        done();
                    })
                });
            });

            describe('IE', function() {
                it('11', function(done) {
                    detect(UA.Windows_IE_11, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('11', browser.version);

                        hasClasses('ie desktop');

                        done();
                    })

                });

                it('10', function(done) {
                    detect(UA.Windows_IE_10, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('10.0', browser.version);

                        hasClasses('ie desktop');

                        done();
                    })
                });

                it('9', function(done) {
                    detect(UA.Windows_IE_9, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('9.0', browser.version);

                        hasClasses('ie desktop');

                        done();
                    })
                });

                it('9 Compat mode', function(done) {
                    detect(UA.Windows_IE_9_Compat, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('7.0', browser.version);

                        hasClasses('ie desktop');

                        done();
                    })
                });

                it('10 Surface', function(done) {
                    detect(UA.Windows_RT_Surface, function(os, browser) {
                        assert.isFalse(os.mobile);
                        assert.isTrue(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('10.0', browser.version);

                        hasClasses('ie tablet');

                        done();
                    })
                });

                it('8 Phone', function(done) {
                    detect(UA.Windows_Phone_8, function(os, browser) {
                        assert.isTrue(os.windowsphone);
                        assert.isTrue(os.mobile);
                        assert.isFalse(os.tablet);
                        assert.isTrue(browser.ie);
                        assert.equal('10.0', browser.version);

                        hasClasses('windows ie mobile');

                        done();
                    })
                });
            });

            describe('Modern browsers', function() {
                it('is a modern browser', function(done) {
                    detect(UA.iOS_8_0_iPhone, function(os, browser) {
                        assert.isTrue(browser.isModern);

                        hasClasses('webkit ios iphone safari mobile is-modern-browser');

                        done();
                    });
                });
            });
        });
    });
});
