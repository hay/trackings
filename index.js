// I'm too lazy to add a Babel transpiler, just doing old style ES5 here
(function(root) {
    function GoogleAnalytics(id) {
        this.id = id;
        this._setup();
    }

    GoogleAnalytics.prototype._setup = function() {
        window.ga = function() {
            ga.q.push(arguments)
        };

        ga.q = [];
        ga.l = +new Date;
        ga('create', this.id, 'auto');
        ga('send', 'pageview');

        var script = document.createElement('script');
        script.setAttribute('src', 'https://www.google-analytics.com/analytics.js');
        script.setAttribute('async', '');
        script.setAttribute('defer', '');

        document.head.appendChild(script);
    };

    function Matomo(opts) {
        this.trackerUrl = opts.trackerUrl;
        this.siteId = opts.siteId;
        this._setup();
    }

    Matomo.prototype._setup = function() {
        if (!('_paq' in window)) {
            window._paq = [];
        }

        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);

        _paq.push(['setTrackerUrl', this.trackerUrl + 'piwik.php']);
        _paq.push(['setSiteId', this.siteId]);

        var d = document,
            g = d.createElement('script'),
            s = d.getElementsByTagName('script')[0];

        g.type = 'text/javascript';
        g.async = true;
        g.defer = true;
        g.src = this.trackerUrl + 'piwik.js';
        s.parentNode.insertBefore(g, s);
    }

    var trackings = {
        GoogleAnalytics : GoogleAnalytics,
        Matomo : Matomo
    };

    // Export for CommonJS, AMD or regular global
    if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = trackings;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return trackings;
        });
    } else {
        root.trackings = trackings;
    }
})(this);