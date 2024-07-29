// ==UserScript==
// @name         Make Discord Ping Badges Grey
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes Ping Badges on Discord Grey
// @author       s1csty9
// @match        https://discord.com/*
// @grant        none
// @homepageURL  https://github.com/s1csty9/tampermonkey-scripts
// ==/UserScript==

(function() {
    'use strict';

    function updateBackgroundColor() {
        const elements = document.querySelectorAll('[class^="numberBadge"]');

        elements.forEach(element => {
            element.style.backgroundColor = 'grey';
        });
    }

    updateBackgroundColor();

    const observer = new MutationObserver(updateBackgroundColor);
    observer.observe(document.body, { childList: true, subtree: true });
})();
