# trackings
> Tracking snippets for Google Analytics and Piwik / Matamo

Instead of adding the Google Analytics and Matamo / Piwik snippets to all your html pages, you can just use this library to include them in your Javascript code.

## Install
Using `npm`:
```
$ npm install --save trackings
```

Using `yarn`:
```
$ yarn add trackings
```

`trackings` can be used as a CommonJS module, AMD (with Require.js) or as a plain old Javacript global.

## Usage

### ES6
```javascript
import { GoogleAnalytics, Matomo } from './trackings.js';

new GoogleAnalytics('UA-xxxxxx-xx'),

new Matomo({
    trackerUrl : '//mysite.com/stats/',
    siteId : 1
});
```

### Old style ES5
```html
<script src="trackings.js"></script>
```

```javascript
new trackings.GoogleAnalytics('UA-xxxxxx-xx'),

new trackings.Matomo({
    trackerUrl : '//mysite.com/stats/',
    siteId : 1
});
```

## API

### GoogleAnalytics(id)
```javascript
new GoogleAnalytics('UA-xxxxxx-xx'),
```

### Matomo({ trackerUrl, siteId })
```javascript
new trackings.Matomo({
    trackerUrl : '//mysite.com/stats/',
    siteId : 1
});
```

## License
MIT &copy; [Hay Kranen](http://www.haykranen.nl)