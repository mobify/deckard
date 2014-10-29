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

Bringing in `detect` parses the User Agent string, and populates a number of properties related to the device. Detect runs automatically on your page if required in via require.js.

##`$.os`

###Platform
- `$.os.desktop`
- `$.os.mobile`
- `$.os.tablet`

###OS Name
- `$.os.ios`
- `$.os.android`
- `$.os.windowsphone`
- `$.os.blackberry`
- `$.os.bb10`
- `$.os.rimtabletos`
- `$.os.kindle`

###OS Version
- `$.os.major`
- `$.os.minor`
- `$.os.patch`
- `$.os.version` (full version string)

##`$.browser`

###Browser Name
- `$.browser.safari`
- `$.browser.chrome`
- `$.browser.firefox`
- `$.browser.opera`
- `$.browser.ie`
- `$.browser.silk`
- `$.browser.webview`

###Browser Version
- `$.os.major`
- `$.os.minor`
- `$.os.patch`
- `$.os.version` (full version string)

You can then target a particular OS and Browser:

```
if ($.os.android && $.os.major < 4 && $.browser.chrome) {
	// do stuff specific to android less than version 4 on chrome
}
```