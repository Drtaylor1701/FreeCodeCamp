<<<<<<< HEAD
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  var returnValue = "";
  for(var i=0; i < contacts.length; i++){
    if(name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === true){
      returnValue = contacts[i][prop];
      break;
    } else if(name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === false) {
      returnValue = "No such property";
      break;
    } else {
      returnValue = "No such contact";
    }
  }
    return returnValue;
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
=======
/*


We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    //console.log(contacts[0]);
    let contact = [0];

    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName == name && prop in contacts[i]) {
        //console.log(prop in contacts[i]);
        console.log(contacts[i][prop]);
        return contacts[i][prop];
      } else if (contacts[i].firstName == name) {
        return "No such property";
      } else {
        return "No such contact";
      }
      //console.log(contacts[i].firstName);
    }


    // Only change code above this line
  }
  
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
>>>>>>> 6cba5324c60ad52591b218f8b2cf98dc03c585d2
