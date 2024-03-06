function fromJsonString(jsonString) {
    var json = JSON.parse(jsonString);
    var result = {};
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            if (typeof json[key] === 'object' && json[key] !== null) {
                result[key] = fromJsonString(JSON.stringify(json[key]));
            }
            else {
                result[key] = json[key];
            }
        }
    }
    return result;
}
var exampleString = "{\n    \"person\": {\n      \"name\": \"John Doe\",\n      \"age\": 30,\n      \"address\": {\n        \"city\": \"Anytown\",\n        \"country\": \"USA\"\n      },\n      \"contacts\": [\n        {\"type\": \"email\", \"value\": \"john.doe@example.com\"},\n        {\"type\": \"phone\", \"value\": \"+1 123-456-7890\"}\n      ]\n    }\n  }";
var tsobject = fromJsonString(exampleString);
console.log(tsobject.person.name);
