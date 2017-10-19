var points = 0;
var questions = 5;
questions -= 1;
var questionsLeft = '[' + questions + ' questions left]';
var quest1 = prompt('How many fingers on one hand?');
var answer1 = parseInt(quest1);


if (answer1 === 5 || quest1 === 'five') {
    points += 1;
    alert(' Well done!You earned ' + points + ' point ' + questionsLeft);
} else {
    alert(' Sorry. You still have ' + points);
}
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var quest2 = prompt('What is B12?');

if (quest2 === 'vitamin' || quest2 === 'VITAMIN') {
    points += 1;
    alert(' Well done!You earned ' + points + ' points ' + questionsLeft);
} else {
    alert(' Sorry. You still have ' + points);
}
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var quest3 = prompt('Who is Bill Clinton?');
if (quest3.toUpperCase() === 'president of usa'.toUpperCase()) {
    points += 1;

    alert(' Well done!You earned ' + points + ' points ' + questionsLeft);
} else {
    alert(' Sorry. You still have ' + points);
}
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var quest4 = prompt('Is 1kg of feather equals 1kg of metal?');
if (quest4.toUpperCase() === 'yes'.toUpperCase()) {
    points += 1;

    alert(' Well done!You earned ' + points + ' points ' + questionsLeft);
} else {
    alert(' Sorry. You still have ' + points);
}
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';

var quest5 = prompt('Do you like a coffe?');
if (quest5.toUpperCase() === 'yes'.toUpperCase() || quest5.toUpperCase() === 'no'.toUpperCase()) {
    points += 1;

    alert(' Well done!You earned ' + points + ' points ' + questionsLeft);
} else {
    alert(' Sorry. You still have ' + points);
}
alert('All done!Ready for message?');
var message = 'You have ' + points + ' points';
alert(message);

if (points === 5) {
    alert('Congratulation you have got gold!');
} else if (points === 3 || points === 4) {
    alert('Congratulation you have got silver!');
} else {
    alert('Sorry try egain');
}