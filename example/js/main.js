// Demonstration of the usage of scripts.js

Scripts.timeout = 200 // optional, 1000 milliseconds if not declared

Scripts.add('txt', function(txt) {
    console.log(txt)
})

Scripts.add('python', function(txt) {
    console.log(txt)
})

Scripts.run()