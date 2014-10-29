#Detect
Device OS and Browser detection.

##Installation
Installation is simple via bower.

```
bower install detect --save
```
##Configure with Require.js
Add the following configuration to your require.js config file.

```
...
'detect': 'bower_components/detect/dist/detect'
...
```
##Bring detect in via Require.js

```
define([ 
	'$', 
	'detect'
], 
function($) {
	...
});
```

Bringing in `detect` parses the User Agent string, and populates a number of properties related to the device. Additionally, `detect` adds relevant classes to the HTML element, allowing you to target fixes via CSS.

Detect runs automatically on your page if included (either via require.js or as a `<script>`).

###`$.os`

####Platform
type: **boolean**
- `$.os.desktop`
- `$.os.mobile`
- `$.os.tablet`

####OS Name
type: **boolean**
- `$.os.ios`
- `$.os.android`
- `$.os.windowsphone`
- `$.os.blackberry`
- `$.os.bb10`
- `$.os.rimtabletos`
- `$.os.kindle`

####OS Version
type: **number**
- `$.os.major`
- `$.os.minor`
- `$.os.patch`
type: **string**
- `$.os.version` (full version string)

###`$.retina`
type: **boolean**

###`$.browser`

####Browser Name
type: **boolean**
- `$.browser.safari`
- `$.browser.chrome`
- `$.browser.firefox`
- `$.browser.opera`
- `$.browser.ie`
- `$.browser.silk`
- `$.browser.webview`

####Browser Version
type: **number**
- `$.browser.major`
- `$.browser.minor`
- `$.browser.patch`
type: **string**
- `$.browser.version` (full version string)

###`$.orientation`
`detect` also handles binding to `orientationchange`, and updates the CSS classes and properties 
appripriately if that event is triggered.

type: **boolean**
- `$.orientation.landscape`
- `$.orientation.portrait`

You can then target a particular OS and Browser:

```
if ($.os.android && $.os.major < 4 && $.browser.chrome) {
	// do stuff specific to android less than version 4 on chrome
}
```

