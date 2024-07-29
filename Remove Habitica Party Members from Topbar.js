// ==UserScript==
// @name         Remove Habitica Party Members from Topbar
// @version      1.0
// @description  Removes party members from habitica topbar
// @author       s1csty9
// @match        https://habitica.com/*
// @grant        none
// @run-at       document-start
// @homepageURL  https://github.com/s1csty9/tampermonkey-scripts
// ==/UserScript==


(function() {
    'use strict';

    function removeTargetDivs() {
        let allDivs = document.getElementsByTagName('div');
        let regex = /party-members|no-party/;
        let elementsRemoved = false;

        for (let div of allDivs) {
            if (regex.test(div.className)) {
                div.remove();
                elementsRemoved = true;
            }
        }

        return elementsRemoved;
    }

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (removeTargetDivs()) {
                    observer.disconnect(); 
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    removeTargetDivs();
})();
