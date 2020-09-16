// Quiz Question
//allow changing based on color > 100%

//no color - work

// load question - Work

// all question should be answer - assign id to each options  -> ignore

// click button > identify which one not answer > 

//Submit > Are you sure you wan to submit ? Ok  or Cancel > if OK > Count > show  popup (OK) > End (Home page). If Cancel


// Replace below section at ease
// Enhancement : categorise the questions for test
	
	//Prepare quiz questions
	let myQuestions = [
		// a0-q1 *** Pre-course Test ***
		{
			question: "The term intravenous means",
			answers: {
				a: 'Around a vien',
				b: 'Beneath a vien',
				c: 'Within a vein'
			},
			correctAnswer: 'c'
		},
		// a1-q2
		{
			question: "Extra-ceillular means?",
			answers: {
				a: 'Benath a cell',
				b: 'Outside a cell',
				c: 'Within a cell'
			},
			correctAnswer: 'b'
		},
		// a2-q3
		{
			question: "Which of the following terms means between the ribs?",
			answers: {
				a: 'infracostal',
				b: 'Intercostal',
				c: 'Intracostal'
			},
			correctAnswer: 'b'
		},
		// a3-q4
		{
			question: "Before death is best expressed by the term:",
			answers: {
				a: 'Antemortem',
				b: 'Postmortem',
				c: 'Premorbid'
			},
			correctAnswer: 'a'
		},
		// a4-q5
		{
			question: "The pre-operative period refers to the",
			answers: {
				a: 'Time period during the operation',
				b: 'Time period before the operation',
				c: 'Recovery period after the operation'
			},
			correctAnswer: 'b'
		},
		// a5-q6
		{
			question: "A preparation used to counteract a poison is called an",
			answers: {
				a: 'Antidote',
				b: 'Anti-emetic',
				c: 'Antipyretic'
			},
			correctAnswer: 'a'
		},
		// a6-q7
		{
			question: "Monomorphic means having",
			answers: {
				a: 'A single form or shape',
				b: 'An unusual form or shape',
				c: 'Many forms or shapes'
			},
			correctAnswer: 'a'
		},
		// a7-q8
		{
			question: "How many letters are found in a word described as a tetragram?",
			answers: {
				a: 'Two',
				b: 'Three',
				c: 'Four'
			},
			correctAnswer: 'c'
		},
		// a8-q9
		{
			question: "Multicellar means?",
			answers: {
				a: 'One-called',
				b: 'Few-called',
				c: 'Many-celled'
			},
			correctAnswer: 'c'
		},
		//a9-q10
		{
			question: "A person suffering from polyuria would pass",
			answers: {
				a: 'Urine tinged with blood',
				b: 'A small amount of urine',
				c: 'A large quantity of urine'
			},
			correctAnswer: 'c'
		},
		// a10-q11
		{
			question: "Hemiplegia describes a condition in which there is a paralysis of",
			answers: {
				a: 'One half of the body',
				b: 'Both sides of the body',
				c: 'The upper half of the body'
			},
			correctAnswer: 'a'
		},
		// a11-q12
		{
			question: "Rapid heart-rate is also known as",
			answers: {
				a: 'Arrhythmia',
				b: 'Bradycardia',
				c: 'Trachycardia'
			},
			correctAnswer: 'c'
		},
		// a12-q13
		{
			question: "Hemiplegia refers to a condition that affects the",
			answers: {
				a: 'Head',
				b: 'Liver',
				c: 'Gall-bladder'
			},
			correctAnswer: 'b'
		},
		// a13-q14
		{
			question: "The basic unit of living things is the",
			answers: {
				a: 'Cell',
				b: 'Organ',
				c: 'Tissue'
			},
			correctAnswer: 'a'
		},
		// a14-q15
		{
			question: "The spleen is an organ that",
			answers: {
				a: 'Excretes wasters',
				b: 'Filters blood',
				c: 'Breaks down food'
			},
			correctAnswer: 'b'
		},
		// a15-q16
		{
			question: "Anemia is characterized by ________ red blood cells",
			answers: {
				a: 'Too much',
				b: 'Too few',
				c: 'Too old'
			},
			correctAnswer: 'b'
		},
		// a16-q17 *** Pre-fixes and Suffixes ***
		{
			question: "The term 'pre' means",
			answers: {
				a: 'Behind',
				b: 'Beside',
				c: 'In front of'
			},
			correctAnswer: 'c'
		},
		// a17-q18 
		{
			question: "The prefix 'em' in the word Empyema means",
			answers: {
				a: 'Between',
				b: 'Under',
				c: 'in'
			},
			correctAnswer: 'c'
		},
		// a18-q19
		{
			question: "The prefix 'an-'' means",
			answers: {
				a: 'Absence',
				b: 'Away from',
				c: 'Toward'
			},
			correctAnswer: 'a'
		},
		// a19-q20
		{
			question: "The prefix 'de-'is means",
			answers: {
				a: 'Break down',
				b: 'Backward',
				c: 'Through'
			},
			correctAnswer: 'a'
		},
		// a20-q21
		{
			question: "Which of the following terms best describes below the tongue",
			answers: {
				a: 'Hyperlingual',
				b: 'Interlingual',
				c: 'Sublingual'
			},
			correctAnswer: 'c'
		},
		// a21-q22
		{
			question: "Which of the following terms describes a fast heart rate",
			answers: {
				a: 'Bradcardia',
				b: 'Tachycardia',
				c: 'Acardia'
			},
			correctAnswer: 'b'
		},
		// a22-q23
		{
			question: "The prefix in the word 'endocardium' is",
			answers: {
				a: 'Endo',
				b: 'cardi',
				c: 'ium'
			},
			correctAnswer: 'a'
		},

		// a23-q24
		{
			question: "Which of the following meaning for the prefix 'para' is incorrect?",
			answers: {
				a: 'Around',
				b: 'Beside',
				c: 'Within'
			},
			correctAnswer: 'a'
		},

		// a24-q25 *** Introduction to the Body ***
		{
			question: "The human body can be divided into ____ planes of section",
			answers: {
				a: '1',
				b: '2',
				c: '3'
			},
			correctAnswer: 'c'
		},

		// a25-q26
		{
			question: "The anterior part of the body is the ____ of the body",
			answers: {
				a: 'Back',
				b: 'Front',
				c: 'Side'
			},
			correctAnswer: 'b'
		},

		// a26-q27
		{
			question: "The sagittal plane cuts the body into",
			answers: {
				a: 'Cephalic and caudal portions',
				b: 'Right and left portions',
				c: 'Ventral and dorsal portions'
			},
			correctAnswer: 'b'
		},

		// a27-q28
		{
			question: "The head end of the body is knowns as the ____ end.",
			answers: {
				a: 'Caudal',
				b: 'Cephalic',
				c: 'Inferior'
			},
			correctAnswer: 'b'
		},

		// a28-q29
		{
			question: "In the supine position, the body is",
			answers: {
				a: 'Lying face down and flat',
				b: 'Lying flat on the back',
				c: 'Standing upright'
			},
			correctAnswer: 'b'
		},

		// a29-q30
		{
			question: "The forearm is the region between the",
			answers: {
				a: 'Elbow and wrist',
				b: 'Shoulder and elbow',
				c: 'Wrist and the fingers'
			},
			correctAnswer: 'a'
		},

		// a30-q31  *** Body Systems ***
		{
			question: "The root word 'cran' refers to the",
			answers: {
				a: 'Head',
				b: 'Skull',
				c: 'Face'
			},
			correctAnswer: 'b'
		},

		// a31-q32
		{
			question: "'Oste' means",
			answers: {
				a: 'Bone',
				b: 'Joint',
				c: 'Cartilage'
			},
			correctAnswer: 'a'
		},

		// a32-q33
		{
			question: "The root word for joint is",
			answers: {
				a: 'Arthr',
				b: 'Osteo',
				c: 'Jo'
			},
			correctAnswer: 'a'
		},

		// a33-q34
		{
			question: "The medical root word for muscle is",
			answers: {
				a: 'Athr',
				b: 'Cle',
				c: 'My'
			},
			correctAnswer: 'c'
		},

		// a34-q35
		{
			question: "Muscles are joined to be borne by",
			answers: {
				a: 'Ligaments',
				b: 'Tendons',
				c: 'Joints'
			},
			correctAnswer: 'b'
		},

		// a35-q36
		{
			question: "Which of the following is not a root word for brain",
			answers: {
				a: 'Cerebr',
				b: 'Encephal',
				c: 'Psych'
			},
			correctAnswer: 'c'
		},

		// a36-q37
		{
			question: "The membranes that surround the brain and spinal cord are known as ",
			answers: {
				a: 'Meninges',
				b: 'Perineum',
				c: 'Pleurae'
			},
			correctAnswer: 'a'
		},

		// a37-q38
		{
			question: "A neurologist is a specialist",
			answers: {
				a: 'Skeletal system',
				b: 'nervous system',
				c: 'Muscular system'
			},
			correctAnswer: 'b'
		},

		// a38-q39
		{
			question: "Coronary is term used to describe the",
			answers: {
				a: 'Blood vessels of the heart',
				b: 'Blood vessels of the brain',
				c: 'Study of the heart'
			},
			correctAnswer: 'a'
		},

		// a39-q40
		{
			question: "The ventricles refers to",
			answers: {
				a: 'Layers of heart muscle',
				b: 'Veins of the heart',
				c: 'Chambers of the heart'
			},
			correctAnswer: 'c'
		},

		// a40-q41
		{
			question: "The root word 'emia' is used to describe",
			answers: {
				a: 'A blood condition',
				b: 'Blood vessels',
				c: 'The outer layer of the heart'
			},
			correctAnswer: 'a'
		},

		// a41-q42
		{
			question: "A thrombus is a",
			answers: {
				a: 'Red blood cell',
				b: 'Blood clot',
				c: 'Fatty deposit in a blood vessel'
			},
			correctAnswer: 'b'
		},

		// a42-q43
		{
			question: "The root word 'proct' is used to describe the",
			answers: {
				a: 'Prostate',
				b: 'Rectum',
				c: 'Bladder'
			},
			correctAnswer: 'b'
		},

		// a43-q44
		{
			question: "One of the early symptons of pregnancy is",
			answers: {
				a: 'Hyperemesis',
				b: 'Hypoglycemia',
				c: 'Polyuria'
			},
			correctAnswer: 'a'
		},

		// a44-q45
		{
			question: "In medical terminology, kidney diseases are also known as ____ diseases",
			answers: {
				a: 'Adrenal',
				b: 'Chronic',
				c: 'Renal'
			},
			correctAnswer: 'c'
		},

		// a45-q46
		{
			question: "The surgical removal of the womb is known as",
			answers: {
				a: 'Hysterectomy',
				b: 'Oophorectomy',
				c: 'Hysterostomy'
			},
			correctAnswer: 'a'
		},

		// a46-q47
		{
			question: "The period of pregnancy before the birth of the baby is known as the ____ period",
			answers: {
				a: 'Prenatal',
				b: 'Paranatal',
				c: 'Postnatal'
			},
			correctAnswer: 'a'
		},

		// a47-q48
		{
			question: "A laceration is a ____ on the skin",
			answers: {
				a: 'Pimple',
				b: 'Bruise',
				c: 'Cut'
			},
			correctAnswer: 'c'
		},

		// a48-q49 *** Enlarging your vocabulary ***
		{
			question: "A symptom is something that",
			answers: {
				a: 'Is felt by the surgeon',
				b: 'Is picked up by the doctor',
				c: 'A patient complains about'
			},
			correctAnswer: 'c'
		},

		// a49-q50
		{
			question: "An ophthalmoscope is used to look at the",
			answers: {
				a: 'Eyes',
				b: 'Ears',
				c: 'Nose'
			},
			correctAnswer: 'a'
		},
		// a50-q51
		{
			question: "An example of an invasive test is",
			answers: {
				a: 'ultrasound',
				b: 'Blood test',
				c: 'Urine test'
			},
			correctAnswer: 'b'
		},

		// a51-q52
		{
			question: "A barium enema is used to outline the",
			answers: {
				a: 'Stomach',
				b: 'Lungs',
				c: 'Intestine'
			},
			correctAnswer: 'c'
		},

		// a52-q53
		{
			question: "Pap smears are used as a",
			answers: {
				a: 'Screening test for cervical cancer',
				b: 'Lipstick for dry lips',
				c: 'Paste for dry skin'
			},
			correctAnswer: 'a'
		},

		// a53-q54
		{
			question: "A disease in which there is no known cause is known as",
			answers: {
				a: 'Infectious',
				b: 'Latrogenic',
				c: 'Idiopathic'
			},
			correctAnswer: 'c'
		},

		// a54-q55
		{
			question: "A fast-growing cancerous tumour is also known as a ____ tumour",
			answers: {
				a: 'Benign',
				b: 'Dysfunctional',
				c: 'Malignant'
			},
			correctAnswer: 'c'
		},

		// a55-q56
		{
			question: "A bronchial carcinoma is a tumor found in the",
			answers: {
				a: 'lungs',
				b: 'nose',
				c: 'Breast'
			},
			correctAnswer: 'a'
		},

		// a56-q57
		{
			question: "Remission of a cancer is the period when cancer symptons",
			answers: {
				a: 'Decrease',
				b: 'Increase',
				c: 'remain the same'
			},
			correctAnswer: 'a'
		},

		// a57-q58
		{
			question: "The body system that secretes hormones that are carried by blood to other organ:",
			answers: {
				a: 'integumentary',
				b: 'Musculoskeletal',
				c: 'Endocrine'
			},
			correctAnswer: 'c'
		},

		// a58-q59
		{
			question: "____ refers to the operation that removes the stomach: ",
			answers: {
				a: 'Gastroscopy',
				b: 'Gastrectomy',
				c: 'Gastroenterology'
			},
			correctAnswer: 'b'
		},

		// a59-q60
		{
			question: "The abbreviation of treatment / therapy / Prescription",
			answers: {
				a: 'ENT',
				b: 'b.i.d',
				c: 'Rx'
			},
			correctAnswer: 'c'
		}

	];

// #################################################################################################
function start(){

	let quizContainer = document.getElementById('quiz');
	let resultsContainer = document.getElementById('results');
	let submitButton = document.getElementById('submit');
	let finishButton = document.getElementById('finish');

	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);	

	// when user clicks submit, show results - change to submit and show popup 
	submitButton.onclick = function(){
		showResults(myQuestions, quizContainer, resultsContainer);
	}
	finishButton.onclick = function(){
		window.location.href = "index.html";
	}
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	showQuestions(questions, quizContainer)
}

function showQuestions(questions, quizContainer){
	// need a place to store the output and the answer choices
	let output= [];
	let answers;
	let qno = 1;
	//question number

	// for each question...
	for(let i=0; i<questions.length; i++){
		// 1 question 3 ans
		//
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...??
		//assign a,b,or c to 

		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
			   '<label>'
				+ '<input type="radio" class="radio" name="question'+i+'" value="'+letter+'">'
				+ ' ' + questions[i].answers[letter]
			+ '</label>'
			+ '<br/>'
			);

		}
		// add this question and its 3 possible answers to the output
		qno=i+1;
		output.push(
			'<div class="question"><label>' + qno + '. ' + questions[i].question + '</label></div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
			+ '<br/>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){
	// gather answer containers from our quiz
	let response = confirm("Are you sure you want to submit?");
	if (!response){
		return;
	}
	
	let answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	let userAnswer = '';
	let numCorrect = 0;
	let numWrong = 0;

	
	// for each question...
	for(let i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;

			answerContainers[i].style.color = 'green';
		}
		else{
			numWrong++;
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total - Change to show no of question answered
	// resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

	alert('Your score is' + ' ' + numCorrect + ' out of ' + questions.length);


	// disable the submit button
	document.getElementById("submit").disabled = true;
	document.getElementById("finish").disabled = false;

}




