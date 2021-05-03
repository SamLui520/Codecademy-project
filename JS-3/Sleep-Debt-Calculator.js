let getSleepHours = day => {
    switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 5.2;
      break;
    case 'Wednesday':
      return 7.5;
      break;
    case 'Thursday':
      return 9;
      break;
    case 'Friday':
      return 6.8;
      break;
    case 'Saturday':
      return 10;
      break;
    case 'Sunday':
      return 6;
      break;
    default:
      return 'Wrong Day';
    }
  }
  function getActualSleepHours() {
    let count = 0;
    count += (getSleepHours('Monday') + getSleepHours('Tuesday') +   getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')); 
    return count;
  };
  let getIdealSleepHours = idealHours => idealHours * 7;
  let calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours(8);
      if (actualSleepHours === idealSleepHours) {
      console.log('the user got the perfect amount of sleep');
      } else if (actualSleepHours > idealSleepHours) {
      console.log('the user got more sleep than needed');
      } else {
      console.log('the user should get some rest');
      console.log('You got ' + (idealSleepHours - actualSleepHours) +   ' hour(s) less sleep than you needed this week. Get some rest.');
  }
  };
  console.log(getSleepHours('Tuesday'));
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours(8));
  calculateSleepDebt();