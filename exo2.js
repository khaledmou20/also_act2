var unirest = require("unirest")
 unirest
 .post('http://localhost:3000/authors')
 .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
 .send({"INSPIRE_number":"INSPIRE_1245","affiliation":"Univ","name":'{"first_name":"hammadi","last_name":"mahmoud"}',"title":"Mosta"})
 .then((response) => {
 console.log(response.body)
 });
