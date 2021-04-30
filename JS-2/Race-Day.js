let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
registeredEarly = true;
let runnerage = 19;
if( runnerage > 18 && registeredEarly === true){
   raceNumber += 1000;
}
if ( runnerage > 18 && registeredEarly === true) {
  console.log('run at 9:30 am');
}else if( runnerage > 18 && registeredEarly === false){
  console.log('Late adults run at 11:00 am');
}else if( runnerage < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}else{
  console.log('runner to see the registration desk');
}