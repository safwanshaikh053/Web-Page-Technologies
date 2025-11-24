class Person {
  pname = "Safwan";
  pcontact = 12345;
  paddress = "Mumbai";

  personDetails() {
    return `Name:${this.pname} Contact no:${this.pcontact} Address:${this.paddress}`;
  }
}
let personObj= new Person();
console.log(personObj.personDetails());
