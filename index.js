import chalk from 'chalk';
import randomColor from 'randomcolor'; // imports the scripts

// FIXME: Is this broken when the user doesn't pass the hue and luminosity?
// const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

//generates a random color -> e.g.: #56eec7

// console.log('#'.repeat(31)); // repeats the character 31 times, helps instead of typing it out

const color = randomColor({
  hue: process.argv[2], // set as undefined if nothing gets input, still runs without input
  luminosity: process.argv[3], // set as undefined if nothing gets input, still runs without input
});
console.log(
  // hard-coded, not dynamic
  chalk.hex(color).bold(`
###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
`),
);
