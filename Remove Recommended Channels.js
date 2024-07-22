// ==UserScript==
// @name         Remove Recommended Channels
// @version      1.0
// @description  Removes Recommended Channels and "viewers also watch" channels from twitch's page and sidebar
// @author       s1csty9
// @match        *://www.twitch.tv/*
// @grant        none
// @homepageURL  https://github.com/s1csty9/tampermonkey-scripts
// ==/UserScript==

(function() {
    'use strict';

    function removeElementByClass() {
        var elements = document.querySelectorAll('.Layout-sc-1xcs6mc-0.cwtKyw.find-me');
        elements.forEach(function(element) {
            element.remove();
            console.log('Element with class removed');
        });
    }

    function removeElementByAriaLabel() {
        var elements = document.querySelectorAll('[aria-label="Recommended Channels"]');
        elements.forEach(function(element) {
            element.remove();
            console.log('Element with aria-label removed');
        });
    }

    function removeElementByPartialAriaLabel() {
        var elements = document.querySelectorAll('[aria-label]');
        elements.forEach(function(element) {
            if (/also watch/i.test(element.getAttribute('aria-label'))) {
                element.remove();
                console.log('Element with partial aria-label removed');
            }
        });
    }

    function observeDOMChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                removeElementByClass();
                removeElementByAriaLabel();
                removeElementByPartialAriaLabel();
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.addEventListener('load', function() {
        removeElementByClass();
        removeElementByAriaLabel();
        removeElementByPartialAriaLabel();
        observeDOMChanges();
    });
})();
