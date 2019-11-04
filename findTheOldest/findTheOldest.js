let findTheOldest = function(people) {
   return people.reduce((oldest,current) => getAge(oldest) > getAge(current) ? oldest : current)
}

function getAge(person){
  if (!person.yearOfDeath){
    return (new Date().getFullYear())-person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

module.exports = findTheOldest
