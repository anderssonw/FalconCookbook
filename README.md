# Captain Falcon Cookbook

## Setup

### Requirements

* node >=14
* firebase cli

### Front end setup
```
cd cookbook
npm install
```
For development:
```
npm run serve
```
For build:
```
npm run build
```
### Back end setup
* Your google account need access to the firebase console. DM Gabe#0042 on discord to ask for access.

For development:
```
firebase emulators:start --only functions
```
For deployment:
```
firebase deploy --only functions
```
