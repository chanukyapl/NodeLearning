const express = require("express");
const fs = require("fs");

//setting up the express router
const app = express();

app.use(express.json());
app.listen(8000, () => {
  console.log("listening on port 8000");

})
app.route('/add/:id/:name/:age/:gender/:email')
  .post( (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    const id = request.body.id;
    const name = request.body.name;
    const age = request.body.age;
    const gender = request.body.gender;
    const email = request.body.email;

    fs.writeFile('./post.json', { "id": id, "name": name, "age": age, "gender": gender, "email": email, }, null, (a) => {
      response.send(200);
    })
  })
  .get(function addget(request, response){
    console.log(request.params.id);
    console.log(request.body);
    const id = request.params.id;
    const name = request.params.name;
    const age = request.params.age;
    const gender = request.params.gender;
    const email = request.params.email;
    console.log( { "id": id, "name": name, "age": age, "gender": gender, "email": email });
    let data={ "id": id, "name": name, "age": age, "gender": gender, "email": email };
    fs.writeFile('./post.json', JSON.stringify(data),  (a) => {
      response.send(200);
    })
  });

app.get(/(\/view\/){1}[0-9]*$/g, (request, response) => {
  console.log(request.params.id);
  let id = request.params.length;
  let file = fs.readFileSync('./get.json', 'utf8');
  let filejson = JSON.parse(file);
  let vales = filejson.filter((val, key) => {
    console.log(id);
    if (val.id === parseInt(id)) {
      console.log(val);
      return val;
    }
  });
  response.status(200).json(vales);
});

app.get('/', (request, response) => {
  console.log(request.params);
  console.log(request.body);
});
//write the code for routes here

module.exports = app;
