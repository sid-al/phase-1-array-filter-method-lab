// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  
  function findMatching( array, driverLook) {
      return array.filter(function(driverNames){
          return driverNames.toLowercase()  === driverLook.toLowercase();
      })
  }




//   describe('fuzzyMatch()', function () {
//     const drivers = [];

//     beforeEach(function () {
//       drivers.length = 0;

//       drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
//     });

//     it('returns a driver if beginning provided letters match', function () {
//       expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
//     });
//   });

  function fuzzyMatch (array, nameIntials){
      return array.filter(fuzzName => fuzzName.toLowercase().indexOf(nameIntials.toLowercase())===0) 
  }
  
  function matchName(array, driverName){
      return array.filter((log) => log.name === driverName);
  }
  