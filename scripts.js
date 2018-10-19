/*
 * Scripts.js v1.0
 * Copyright (c) 2018 Onur Kerimov
 * http://github.com/onurkerimov
 * Licensed under the MIT license
 */

(function() {

    window.Scripts = {}

    Scripts.timeout = 1000
    Scripts.fn = {}

    Scripts.add = function(type, callback) {
        if (!callback) { var callback = console.log }
        Scripts.fn[type] = function(el) {
            if (el.type === type) {
                if (el.src) {
                    Scripts.fileRead(el.src, callback)
                } else {
                    callback(el.innerHTML)
                }
            }
        }
    }

    Scripts.run = function() {
        var head = document.getElementsByTagName('HEAD')[0]
        var script = head.querySelectorAll('script')
        Array.from(script).forEach(function(el) {
            Object.keys(Scripts.fn).forEach(function(key) {
                Scripts.fn[key](el)
            })
        })
    }

    Scripts.fileRead = function(path, callback) {

        var content
        var timeout = Scripts.timeout

        new Promise(function(resolve, reject) {

            var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.request")

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    content = request.responseText
                    resolve()
                }
            }

            setTimeout(reject, timeout)

            request.open("GET", path, true);
            request.send();

        }).then(function() {

            callback(content)

        }).catch(function() {

            console.error('The file in the path ' + path + ' is either not present or takes too long to respond.')
        })
    }
})();