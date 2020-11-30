# ClearPortalCache

Easily clear your Dynamics portal cache without going to /_services/about. Just click the icon in your extensions!
Everyone who worked in Dynamics portals, knows it is a struggle to clear the server-side cache. You always have to go the page "/_services/about" and click on the button "Clear cache". This simple Chrome extensions loads this page and clicks on the button automatically in the background.

## Release notes
### 1.0.0
- Initial release

### 1.0.1
- Include check if the user has access to the form at "/_services/about"

### 1.0.2
- Removed `debugger;` statement in "ClearCache.js"