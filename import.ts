interface DynamicObject {
    [key: string]: any;
}

function fromJSON(jsonString: string): DynamicObject {
  const result: DynamicObject = {}
  const json = JSON.parse(jsonString)

  for(const key in json) {
      if(json.hasOwnProperty(key)) {
          if(typeof json[key] === 'object' && json[key] !== null) {
              result[key] = fromJSON(JSON.stringify(json[key]));
          } else {
              result[key] = json[key];
          }
      }
  }

  return result;
}

function fromXML(xmlString: string): DynamicObject {
  const result: DynamicObject = {}
  

  
  return result;
}

function fromYAML(yamlString: string): DynamicObject {
  const result: DynamicObject = {}
  

  
  return result;
}

function fromCSV(csvString: string): DynamicObject {
  const result: DynamicObject = {}
  

  
  return result;
}

const exampleString = `{
    "person": {
      "name": "John Doe",
      "age": 30,
      "address": {
        "city": "Anytown",
        "country": "USA"
      },
      "contacts": [
        {"type": "email", "value": "john.doe@example.com"},
        {"type": "phone", "value": "+1 123-456-7890"}
      ]
    }
  }`

const tsobject = fromJSON(exampleString)
console.log(tsobject.person.name)
