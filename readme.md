# Project Name : Basic Medical Terminology for Health IT - Pilot

Purpose : To provide 'e-quiz' for IT personnel supporting Singapore health institutions after attending 1 day course on basic medical terminology. 

For the initial pilot run, the scope covers the basic functionality of quiz and medical terms commonly encountered by health IT during their project or support operation. 

The solution should be ease of deploying to the clinicians and supporting staff. 

## Approach

Version : 0.1
Duration : 2 weeks

1. Use case

2. Research
    - Research on online quiz games and past projects
    - Google, youtube, Udemy, seek ideas and guidance from developers

3. Features : 
    - 'Must Have' and some 'Should Have' features. 

4. Draft basic structure of the program. 

5. Development
    - Start with HTML (use of bootstrap if possible)
    - JS (Lot of stuff covered in unit 1. Start with basic functions )

6. Data preparation, Test, Bug-fix

7. Basic styling

8. Preparation for commit
    - 'Touch-up'
    - Add comments
    - Final testing

9. Document technical details

10. Document technical challenges

11. Document the Improvement 
    - Better preparation for next project 
    - Enhancement in upcoming version

12 Presentation and sharing of project

### Use case
* Take the quiz after the training, at campus or remotely (virtual training)
* Attempt the set of questions designed by the education staff or trainer
* Quick search of medical terms anytime except quiz

### Features
* Quiz
    - Set of questions 
    - Allow ease of updating the questions

* Glossary / Learn More
    - Content for health IT
        - Introduction to Medical terminology & image (next version)
        - Introduction to Human  & image (next version)
        - Body System & image (next version)
        - Enlarging you medical vocabulary & image (next version)
        - Combining Forms and  their meaning (Start with prefix, suffix, combining forms and abbreviation. No image in this version)
    - Allow users to have quick search of the terms at work

Important : The design and solution should be user-friendly, ease of enhancement, avoid complexity to increase the adoption (including UI and image). 

### Specifications
* Cover page : index.html [jumbotron, button]

* Navigation [nav]
    - Home [nav-link]
    - Glossary, quick accessible from any page except quiz [nav-link]
    - Support staff contacts : popup to assist the candidate from any page [nav-link,modal]

* Self-defined style : main.css.

* Glossary : med_glossary.html, med_glossary.js
    - [Glossary] and [Learn More] have the same content in this version
    - Ease of updating / replacing the content (store in js instead of html)
    - Ease of search due to large volume of data will be loaded subequently
    - Load the table/content from js to browser [dataTable, Table.insertRow]

* Candidate details : login.html, login.js
    - Capture the basic information of health IT : Name, email, domain (identity of institution/company/agency) and ID for subsequent enhancement/authentication) [form]
    - Input validation
    - Provide instruction of quiz
    - Start the quiz after instruction is read

* Quiz / Assessment : quiz.html, quiz.js
    - Ease of updating / replacing the content (store in js instead of html)
    - Load the quiz to browser
    - Multiple choice format
    - Match the answer
    - Display the score
    - Display correct / wrong answer after the quiz is completed


### Sharing on technical challenges
* Remove "should have", "can have" features that cannot be achieved during this timeframe
* Huge amount of time on 'trial & error'. Bootstrap template/reference codes still need time for 'trial & error' and remove codes
* The codes 'break" during clean-up
* Unable to recollect the codes used after rounds
* "MVP" need to leverage on codes/templates (eg bootstrap) available. Unable to go through every single line of codes in the  templates or build from scratch.
* Free high-resolution images are not easily available

### Reference
* Reference : Academic medical centre course material
* (https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* (https://www.w3schools.com/bootstrap4/default.asp)
* (https://www.sporcle.com/games/mrsiriustab/trust-me-i-know-doctor-stuff?t=medicalterminology)
* Glossary - datatables : sbadminbootstrap tempate (https://startbootstrap.com/templates/sb-admin/)


## Upcoming versions : 

* Expands to different user groups (by specialty or by dept) of clinicians and supporting staff (non clinicians) of 1 cluster
* Expands to different clusters in country eg. Singapore
* Expands to different types of training
* Expands to different types of game / quiz format & design for patients in the institutions to play & learn to reduce stress

Quiz
* Different sets of questions for different user groups eg cart system or category
    - Pre-course and Afer-course questions
    - Selectable (by areas of learning), randomly generate, replaceable, can be handled by staff of Education without IT
* Question bar : 'flagged' question, "1-click" to the question
* Count down timer
* Real time scoring
* Selectable quiz format
* Instruction : replaceable with pdf or links, can be handled by staff of Education without IT
* Prevent users from pressing [back]

Learn More / Glossary
* Expands from Glossary to Library with images and category
    - Includes API
* Differentiate resources between Glossary and Learn More / Library

Others
* On-line certification : generate, display, download and email, ease of changing design by training support staff
* Reporting
* Dashboard
* Registration
* Authentication of candidate details
* Mobile apps
* Chatbox for collaboration
* User friendly and moderm UI to improve the image of Healthcare institutions
* Resources contribute by registed institution / healthcare staff


## Versioning

| Date | Description | Updated by | Version | 
|:--------:|:--------:|:----------------:|:--------:|
| 17 Jul | Creation of version 0 | Fanny Fam | 0.1 |


## Authors

* Fanny Fam - [Fanny Fam](https://github.com/FannyFam)



