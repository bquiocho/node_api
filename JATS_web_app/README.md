# JATS API

A [Sails](http://sailsjs.org) application for JATS Database; to get/create user actions.

## Development tools
- [Atom](https://atom.io/)
- [SourceTree/git](https://www.sourcetreeapp.com/)
- [NodeJS](https://nodejs.org/en/)

## Install process

### Development (local)

1. Get `git clone https://guest:guest@forge.tietronix.com/scmrepos/git/aegistcon/aegistcon.git`
2. Install [NodeJS](https://nodejs.org/en/)
3. Run in project folder `npm install`
4. Start app `node app.js`

### Development (Ubuntu server)

1. Follow production and set `NODE_ENV` in */etc/init/aegisconsole.conf* to 'development'

### Production (Ubuntu server)

1. Run `sudo ./setup/aegis_install.sh`
2. Set PostgreSQL password in *config/connections.js*
3. See additional ssl/etc setup links at bottom of *setup/aegis_install.sh*
4. `npm install sails-postgresql`
5. Edit *env/production.js* as needed
6. Start app `sudo start aegisconsole`

## Update process

### Versions

1. Edit *api/services/ServerVersion.js*
2. Client versions handled are at the top in an array
and current version for download is the single variable.
3. Server version is in the function getShorthandSting
4. Client version in builds are updated via the *Server/Server.cs* in the aegis C# code.

### Development (access to tieforge)

1. `git pull`

### Production

1. Create patch with latest commits
2. Check patch for issues `git apply --check some_patch.patch`
3. Signoff on patch `git am --signoff < some_patch.patch`

### Handling Model Changes

If the machine is using non-disk storage, the model structure may need to be
updated. This can be done by changing *config/models.js* **migrate** variable.
```
  migrate: 'safe', //safe,alter,drop
```
Change to *drop* if you want to wipe data as well (for non-production) or *alter* for production (make sure to backup and test *alter* on a development
machine) Run the server once... `node app.js` then restart with **migrate** set to *safe*.

## Help
Helpful tabs to have open

- [Packages](https://www.npmjs.com/)
- [Managing packages](https://docs.npmjs.com/)
- [Sails Docs](http://sailsjs.org/documentation/concepts/)
- [Sails Ref](http://sailsjs.org/documentation/reference/)
- [Database Queries](https://github.com/balderdashy/waterline-docs)
- [Templating Views](https://mozilla.github.io/nunjucks/templating.html)
- [Async Calls](https://github.com/caolan/async)
