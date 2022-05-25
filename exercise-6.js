const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
}

const getKeys = (obj) => {
  return Object.keys(obj);
}

const keys = getKeys(person)
console.log(keys)