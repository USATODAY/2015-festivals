#music-festivals

USA TODAY's music festival interactive

##Development

The requirements for this project are Node.js, Bower and Grunt. 

To install node with Hombrew:
`brew install node`

Or head over to the [Node website](http://nodejs.org/) and install from there.
Once Node is installed, install Grunt with
`npm install -g grunt-cli`

and install Bower with 
`npm install -g bower`

Once those dependencies are set up, from this repository run 
```
npm install
``` 
then run 
```
grunt
```
to run a development server.

To build deployable files, run
```
grunt build
```

If you have USA TODAY's FTP credentials stored locally, run
```
grunt deploy
```
to directly upload new JS, CSS, and JSON assetts to the production CDN.


###Live version:
http://www.usatoday.com/pages/interactives/2015-music-festivals/

##Editing content
Artist info is powered by a Google doc. The data from which is processed by a Python script located in the data_tools directory and accessed through a Fabric command.

To use the data_tools, set up a Python virtual environment and run
```
pip install requirements.txt
```

To download and process a new set of data, simply run

```
fab udpater
```

This command assumes you have USA TODAY's google credentials stored as environment variables in your shell as $GOOGLE_USER and $GOOGLE_PASS

If you'd like to upload the new data to the live server, run 
```
fab upload
```

This command requires USA TODAY's FTP credentials stored as $FTP_USER, $FTP_SERVER and $FTP_PASS

Copy and hed are currently hard coded into the `AppView.js` file on lines 52 and 53 and can be updated directly there. Social language is located in the `shareModel.js` file.


