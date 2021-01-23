const chalk = require('chalk');
const readLineSync= require('readline-sync');

function milesToKm(miles)
{
  const km = miles*1.60934;
  return km;
}
function footToYard(foot)
{
  const yard = foot/3;
  return yard;
}

function unitConversion()
{
  console.log(chalk.yellowBright.bold("------UNIT CONVERTER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] MILES TO KM \n\n[2] FOOT TO YARD\n\n\[3] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));

  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----MILES TO KM CONVERTER----\n\n"));
        const mile = readLineSync.question(chalk.yellowBright.bold("Enter the miles?\n"));
        const kilometer = milesToKm(mile);
        console.log(chalk.red("Miles to Km is: ",kilometer +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----FOOT TO YARD CONVERTER----\n\n"));
        const foots = readLineSync.question(chalk.yellowBright.bold("Enter the foot ?\n"));
        const yards = footToYard(foots);
        console.log(chalk.red("Foot to yard is: ",yards+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
  
}

unitConversion();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));