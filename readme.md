#project name: image processing API
#tools used: nodeJS , express, prettier, eslint, sharp, jasmine and typescript.

> to run the project 
  * npm i - to download the dependencies in the project
  * npm run start - to start the server
  // the server runs at port 3030
  * npm run build- to transpile the files from typescript to JS 
  * npm run lint - for code quality 
  * npm run fix - for auto fixing using lint 
  * npm run test - to start jasmine unit testing
  * npm run prettier - for code formatting

> request queries 
  * name of the image 
  * width of the image
  * height of the image

> here's a working endpoint 
   http://localhost:3030/img?name=fjord&width=300&height=400

   * you can exchang the name with any of these names in the array 
     >['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']

>##ImpNote: > I provided an empty folder called processed inside the images folder for the processed images to be added to and if we got a request for an image that was processed with the same width and height before , it won't be processed again and no duplication would occur.
     

