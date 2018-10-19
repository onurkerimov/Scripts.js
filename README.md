
# Scripts.js
With scripts.js, you can include any text file in your document, by adding it in the `<head>` as a `<script>`. The plugin this this vith XMLHttpRequest calls.

## Usage
You can access the following `'content of my block'` string via javascript, by calling `document.querySelector('script[type="myblock"]').innerHTML`,
```html
<script type="myblock">
	content of my block
</script>
```
However, you cannot access the content of the following file, `file.py`
```js
<script type="python" src="./file/file.py"></script>
```
With this script you can access both by writing:
```js
Scripts.add('myblock', function(txt) {
    console.log(txt)
})
Scripts.add('python', function(txt) {
    console.log(txt)
})
Scripts.run()
```
or without including files as a `<script>` in the head, just use their absolute or relative paths in your javascript. For absolute path, `file://` prefix is required.
```js
Scripts.add('./path-to-file/file.extension', function(txt) {
    console.log(txt)
})
```

## API
### `Scripts.add( type[string] , callback[function] )`
### `Scripts.run( void )`
### `Scripts.fileRead( path[string] , callback[function] )`

## License
Licensed by the MIT License.
