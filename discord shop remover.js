// ==UserScript==
// @name         Discord shop remover
// @version      1.0
// @description  Removes discord shop from the webpage
// @author       s1csty9
// @match        https://discord.com/*
// @homepageURL  https://github.com/s1csty9/tampermonkey-scripts
// ==/UserScript==

(function() {
    'use strict';

    function removeSpecificDataListItems() {

        let allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            let dataListItemId = element.getAttribute('data-list-item-id');
            if (dataListItemId && /^private-channels-uid_\d+___shop$/.test(dataListItemId)) {
                element.remove();
            }
        });

        setTimeout(removeSpecificDataListItems, 1000);
    }

    removeSpecificDataListItems();
})();
