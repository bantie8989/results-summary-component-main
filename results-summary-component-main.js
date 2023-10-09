// getting element
const reactionSocre = document.querySelector('.reaction-score');
const memorySocre = document.querySelector('.memory-score');
const verbalSocre = document.querySelector('.verbal-score');
const visualSocre = document.querySelector('.visual-score');

const category = document.querySelector('.catagory');
const average = document.querySelector('.average');
let reaction = document.querySelector('.reaction');
let memory = document.querySelector('.memory');
let verbal = document.querySelector('.verbal');
let visual = document.querySelector('.visual');

// calculate average 
function averagecal() {
  if (scores.length === 0) {
    return NaN;
  }

  var initial = 0;
  var count = 0;
  for (var i = 0; i < scores.length; i++) {
    initial += scores[i].score;
    count++;
  }

  return initial / count;
}

let scores = [    {
  category: "Reaction",
  score: 80
},
{
  category: "Memory",
  score: 50
},
{
  category: "Verbal",
  score: 61
},
{
  category: "Visual",
  score: 72
}
]

// for catagory

average.innerHTML = averagecal();
reactionSocre.innerHTML = scores[0].score;
memorySocre.innerHTML = scores[1].score;
verbalSocre.innerHTML = scores[2].score;
visualSocre.innerHTML = scores[3].score;


// fill to the html scoreinnerText = average();







  