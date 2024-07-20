// ==UserScript==
// @name         FIX DISCORD PINGS
// @version      1.0
// @description  A tampermonkey recreation of the classic chrome extension that changes the putrid yellow that makes me want to bleach my throat into a much nicer light greyish blue.
// @author       s1csty9
// @match        *://discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    function addCustomCSS() {
        GM_addStyle(`
            :root {
                --background-mentioned: #333541 !important;
            }
        `);
    }

    window.addEventListener('load', addCustomCSS);
})();
