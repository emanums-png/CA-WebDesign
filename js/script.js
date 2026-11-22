//EM - Did you know, index.html

const facts = ["36% of young people in Europe say they are in constant online contact with their friends (WHO Europe, 2024).",
 "Nearly one third (31%) of adults globally, approximately 1.8 billion people, did not meet the recommended level of physical activity in 2022 (WHO, 2024).",
 "Adults need 7 to 9 hours of sleep per night (HSE)."
];

let currentFact = 0;

const didYouKnowText = document.getElementById("fact-text");
const didYouKnowButton = document.getElementById("fact-btn");

function showNextFact(){
	currentFact++;
	currentFact = currentFact % facts.length;
	didYouKnowText.textContent = facts[currentFact];
}

if (didYouKnowButton) {
	didYouKnowButton.addEventListener("click", showNextFact);
}