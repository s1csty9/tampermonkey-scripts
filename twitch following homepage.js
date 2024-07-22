// ==UserScript==
// @name         Twitch following homepage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects the twitch homepage to following page
// @author       s1csty9
// @match        *://www.twitch.tv/*
// @run-at       document-start
// @homepageURL  https://github.com/s1csty9/tampermonkey-scripts
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href !== 'https://www.twitch.tv/directory/following') {
        window.location.replace('https://www.twitch.tv/directory/following');
    }
})();
