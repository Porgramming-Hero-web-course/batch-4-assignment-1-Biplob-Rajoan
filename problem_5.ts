{
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: { Name: string; Age: number } = {
    Name: "Alice",
    Age: 20,
  };
console.log(getProperty(person, "Name")); 

}