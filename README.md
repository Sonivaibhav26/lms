# library management system 

at present frontend is not wired with backend and require works

to start the app ```npm install``` and then ```npm start```

following api have been devloped and can be tested using anf ARC client like postman 

```POST  /api/register``` 
  
  (for registering admin user) requires 
  
  * req.body.username;
  * req.body.name;
  * req.body.password;
  * req.body.email;
  * req.body.contactNo;
  
  
```POST  /api/login```  (for sign in) requires
  
  * req.body.username;
  * req.body.password;
  

```POST  /api/user```  (for creating normal user) requries
  
  * req.body.username;
  * req.body.name;
  * req.body.email;
  * req.body.contactNo;

```DELETE  /api/user/:id```  (for deleting user) requries 
* req.params.id;

```POST  /api/book```  (for creating books) requries
  
  * req.body.name;
  * req.body.author;
  

```DELETE  /api/book/:id```  (for deleting book) requries 
   * req.params.id;

```GET  /api/book/:id```  (for changeing  book status) requries

 * req.params.id;
