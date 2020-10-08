var people = [
  {
    firstname: 'John',
    lastname: 'Doe',
    addresses: [
      '111 Main St.',
      '222 Third St.'
    ]
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    addresses: [
      '333 Main St.',
      '444 Third St.'
    ],
    greet: function() {
      return "Hello!"
    }
  }
]

console.log(people[1].greet())
//"Hello!"

//If you ever see an 'unexpected ___' error,
//it's often due to a missing closing comma, bracket, etc.
//Common when making complicated JSON-like data structures such as this.