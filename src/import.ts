interface DynamicObject {
    [key: string]: any;
}

function fromJSON(jsonString: string): DynamicObject {
  var result: DynamicObject = {}
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
  var result: DynamicObject = {}
  
  const lines = csvString.split('\n').map(line => line.trim());
  const headers = lines.shift()?.split(',').map(header => header.trim()) || [];

  const temp = lines.map(line => {
    const values = line.split(',').map(value => value.trim());
    const obj: DynamicObject = {}
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj;
  });
  result = temp
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

const exampleCsv = `Name, Age, City
John Doe, 30, New York
Jane Smith, 25, Los Angeles`;

const csvObject = fromCSV(exampleCsv);
console.log(csvObject);

const tsobject = fromJSON(exampleString);
console.log(tsobject.person.name);
