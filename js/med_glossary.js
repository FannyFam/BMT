// Glossary in separate js file. Ease of changing

let medGlossary = [
	{
		term: "A-",definition: "No, not, without",grouping:"Prefix"
	},
	{
		term: "An-",definition: "No, not, without",grouping:"Prefix"
	},
	{
		term: "Ab-",definition: "Away from",grouping:"Prefix"
	},
	{
		term: "Ad-",definition: "Toward, near",grouping:"Prefix"
	},
	{
		term: "Ana-",definition: "Up, apart",grouping:"Prefix"
	},		
	{
		term: "ALT",definition: "Alanine amino transferase",grouping:"Prefix"
	},
	{
		term: "Ante-",definition: "Before, forward",grouping:"Prefix"
	},
	{
		term: "Anti-",definition: "Against",grouping:"Prefix"
	},
	{
		term: "Bi-",definition: "Two, both",grouping:"Prefix"
	},
	{
		term: "Brady-",definition: "Slow",grouping:"Prefix"
	},
	{
		term: "Con-",definition: "With, together",grouping:"Prefix"
	},
	{
		term: "Dia-",definition: "Through, complete",grouping:"Prefix"
	},
	{
		term: "Dys-",definition: "Bad, painful, diffcult",grouping:"Prefix"
	},	
	{
		term: "Ec-",definition: "Out, outside",grouping:"Prefix"
	},			
	{
		term: "Endo-",definition: "Within, in, inner",grouping:"Prefix"
	},			
	{
		term: "Epi-",definition: "Above, upon",grouping:"Prefix"
	},			
	{
		term: "Ex-",definition: "Out",grouping:"Prefix"
	},				
	{
		term: "Extra-",definition: "Outside of",grouping:"Prefix"
	},
	{
		term: "Hyer-",definition: "Excessive, above",grouping:"Prefix"
	},
	{
		term: "Hypo-",definition: "Deficient, below",grouping:"Prefix"
	},
	{
		term: "In-",definition: "In, into",grouping:"Prefix"
	},
	{
		term: "Inter-",definition: "Between",grouping: "Prefix"
	},
	{
		term: "Mal",definition: "Bad",grouping: "Prefix"
	},
	{
		term: "Meta-",definition: "Beyond",grouping: "Prefix"
	},
	{
		term: "Neo-",definition: "New",grouping: "Prefix"
	},
	{
		term: "Para-",definition: "Near, along the side of",grouping: "Prefix"
	},
	{
		term: "Peri-",definition: "Surrounding",grouping: "Prefix"
	},
	{
		term: "Poly-",definition: "Many, much",grouping: "Prefix"
	},
	{
		term: "Post-",definition: "After, behind",grouping: "Prefix"
	},
	{
		term: "Pre-",definition: "Before",grouping: "Prefix"
	},
	{
		term: "Pro-",definition: "Before, forward",grouping: "Prefix"
	},
	{
		term: "Pros-",definition: "before, forward",grouping: "Prefix"
	},
	{
		term: "Re-",definition: "Back, behind",grouping: "Prefix"
	},
	{
		term: "Retro-",definition: "Back, behind",grouping: "Prefix"
	},
	{
		term: "Sub-",definition: "Beneath, less than",grouping: "Prefix"
	},
	{
		term: "Syn-",definition: "With, regular",grouping: "Prefix"
	},
	{
		term: "Tachy-",definition: "Fast",grouping: "Prefix"
	},
	{
		term: "Trans-",definition: "Across, through",grouping: "Prefix"
	},
	{
		term: "Tri-",definition: "Three",grouping: "Prefix"
	},
	{
		term: "Ulra-",definition: "Beyond",grouping: "Prefix"
	},
	{
		term: "Uni-",definition: "One",grouping: "Prefix"
	},
	{
		term: "..al",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..algia",definition: "Pain",grouping: "Suffix"
	},
	{
		term: "..ar",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..ary",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..ation",definition: "Process, condition",grouping: "Suffix"
	},
	{
		term: "..centesis",definition: "Surgical procedure to remove fluid",grouping: "Suffix"
	},
	{
		term: "..cision",definition: "Process of cutting",grouping: "Suffix"
	},
	{
		term: "..crine",definition: "Secretion",grouping: "Suffix"
	},
	{
		term: "..cyte",definition: "Cell",grouping: "Suffix"
	},
	{
		term: "..eal",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..emia",definition: "Blood condition",grouping: "Suffix"
	},
	{
		term: "..ectomy",definition: "To remove, cut out",grouping: "Suffix"
	},
	{
		term: "..gen",definition: "To produce",grouping: "Suffix"
	},
	{
		term: "..graphy",definition: "Process of recording",grouping: "Suffix"
	},
	{
		term: "..gram",definition: "Record",grouping: "Suffix"
	},
	{
		term: "..ia",definition: "Condition, disease",grouping: "Suffix"
	},
	{
		term: "..ic",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..ine",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..ism",definition: "Condition, process",grouping: "Suffix"
	},
	{
		term: "..ist",definition: "A specialist",grouping: "Suffix"
	},
	{
		term: "..itis",definition: "inflammation",grouping: "Suffix"
	},
	{
		term: "..lapse",definition: "To fall, slide",grouping: "Suffix"
	},
	{
		term: "..logist",definition: "Specialist in the study of",grouping: "Suffix"
	},
	{
		term: "..logy",definition: "Study of",grouping: "Suffix"
	},
	{
		term: "..lysis",definition: "Separation, breakdown, destruction",grouping: "Suffix"
	},
	{
		term: "..megaly",definition: "Enlargement",grouping: "Suffix"
	},
	{
		term: "..mission",definition: "To send",grouping: "Suffix"
	},
	{
		term: "..moterm",definition: "Death",grouping: "Suffix"
	},
	{
		term: "..oma",definition: "Mass or tumor",grouping: "Suffix"
	},
	{
		term: "..opsy",definition: "To view",grouping: "Suffix"
	},
	{
		term: "..osis",definition: "Abnormal condition",grouping: "Suffix"
	},
	{
		term: "..ous",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..partum",definition: "Birth",grouping: "Suffix"
	},
	{
		term: "..pathy",definition: "Disease",grouping: "Suffix"
	},
	{
		term: "..plasm",definition: "Formation",grouping: "Suffix"
	},
	{
		term: "..plasty",definition: "Surgical repair",grouping: "Suffix"
	},
	{
		term: "..pnea",definition: "Breathing",grouping: "Suffix"
	},
	{
		term: "..rrhea",definition: "Flow, discharge",grouping: "Suffix"
	},
	{
		term: "..rrhage",definition: "Bursting forth of blood",grouping: "Suffix"
	},
	{
		term: "..rrhagia",definition: "Bursting forth of blood",grouping: "Suffix"
	},
	{
		term: "..sclerosis",definition: "Hardening",grouping: "Suffix"
	},
	{
		term: "..scope",definition: "Instrument to visually examine",grouping: "Suffix"
	},
	{
		term: "..scopy",definition: "Process of viewing",grouping: "Suffix"
	},
	{
		term: "..section",definition: "To cut",grouping: "Suffix"
	},
	{
		term: "..sis",definition: "State of",grouping: "Suffix"
	},
	{
		term: "..stasis",definition: "Stop, control",grouping: "Suffix"
	},
	{
		term: "..stomy",definition: "Opening",grouping: "Suffix"
	},
	{
		term: "..tension",definition: "Pressure",grouping: "Suffix"
	},
	{
		term: "..therapy",definition: "Treatment",grouping: "Suffix"
	},
	{
		term: "..thesis",definition: "To put, place",grouping: "Suffix"
	},
	{
		term: "..tic",definition: "Pertaining to",grouping: "Suffix"
	},
	{
		term: "..tomy",definition: "Incision, to cut into, process of cutting",grouping: "Suffix"
	},
	{
		term: "..um",definition: "Structure",grouping: "Suffix"
	},
	{
		term: "..uria",definition: "Condition of urine",grouping: "Suffix"
	},
	{
		term: "..y",definition: "Process, condition",grouping: "Suffix"
	},
	{
		term: "gastr/o",definition: "Stomach",grouping: "Combining Form"
	},
	{
		term: "gen/o",definition: "To product, to begin",grouping: "Combining Form"
	},
	{
		term: "ger/o",definition: "Old age",grouping: "Combining Form"
	},
	{
		term: "glyc/o",definition: "Sugar, glucose",grouping: "Combining Form"
	},
	{
		term: "gnos/o",definition: "Knowledge",grouping: "Combining Form"
	},
	{
		term: "gynec/o",definition: "Woman",grouping: "Combining Form"
	},
	{
		term: "hem/o",definition: "Blood",grouping: "Combining Form"
	},
	{
		term: "hemat/o",definition: "Blood",grouping: "Combining Form"
	},
	{
		term: "hepat/o",definition: "Liver",grouping: "Combining Form"
	},
	{
		term: "hyster/o",definition: "Uterus",grouping: "Combining Form"
	},
	{
		term: "iatr/o",definition: "Treatment",grouping: "Combining Form"
	},
	{
		term: "inguin/o",definition: "Groin",grouping: "Combining Form"
	},
	{
		term: "isch/o",definition: "To hold back",grouping: "Combining Form"
	},
	{
		term: "lapar/o",definition: "Abdomen",grouping: "Combining Form"
	},
	{
		term: "laryng/o",definition: "Larynx (voice box)",grouping: "Combining Form"
	},
	{
		term: "later/o",definition: "Side",grouping: "Combining Form"
	},
	{
		term: "leuk/o",definition: "White",grouping: "Combining Form"
	},
	{
		term: "lumb/o",definition: "Loin(waist)",grouping: "Combining Form"
	},
	{
		term: "lymph/o",definition: "Lymph",grouping: "Combining Form"
	},
	{
		term: "mamm/o",definition: "Breast (use with -ary, -graphy, -gram, plasty)",grouping: "Combining Form"
	},
	{
		term: "mast/o",definition: "Breast (use with -ectomy, -itis)",grouping: "Combining Form"
	},
	{
		term: "mediastin/o",definition: "Mediastinum (space between lungs)",grouping: "Combining Form"
	},
	{
		term: "men/o",definition: "Menstruation",grouping: "Combining Form"
	},
	{
		term: "mening/o",definition: "Meninges (membranes surrounding brain and spinal cord)",grouping: "Combining Form"
	},
	{
		term: "my/o",definition: "Muscle",grouping: "Combining Form"
	},
	{
		term: "myel/o",definition: "Spinal cord or bone marrow",grouping: "Combining Form"
	},
	{
		term: "nat/o",definition: "Birth",grouping: "Combining Form"
	},
	{
		term: "necr/o",definition: "Death (of cells)",grouping: "Combining Form"
	},
	{
		term: "nephr/o",definition: "Kidney",grouping: "Combining Form"
	},
	{
		term: "neur/o",definition: "Nerve",grouping: "Combining Form"
	},
	{
		term: "norm/o",definition: "Rule, order",grouping: "Combining Form"
	},
	{
		term: "obstretr/o",definition: "Midwife",grouping: "Combining Form"
	},
	{
		term: "onc/o",definition: "Tumor",grouping: "Combining Form"
	},
	{
		term: "oophor/o",definition: "Ovary",grouping: "Combining Form"
	},
	{
		term: "ophthalm/o",definition: "Eye",grouping: "Combining Form"
	},
	{
		term: "opt/o",definition: "eye",grouping: "Combining Form"
	},
	{
		term: "orth/o",definition: "Straight",grouping: "Combining Form"
	},
	{
		term: "oste/o",definition: "Bone",grouping: "Combining Form"
	},
	{
		term: "ot/o",definition: "Ear",grouping: "Combining Form"
	},
	{
		term: "path/o",definition: "Disease",grouping: "Combining Form"
	},
	{
		term: "ped/o",definition: "Child",grouping: "Combining Form"
	},
	{
		term: "pelv/o",definition: "Pelvis (hip bone)",grouping: "Combining Form"
	},
	{
		term: "peritone/o",definition: "Peritoneum (membrane covering abdomen)",grouping: "Combining Form"
	},
	{
		term: "pharyng/o",definition: "Pharynx (throat)",grouping: "Combining Form"
	},
	{
		term: "plas/o",definition: "Formation, growth, development",grouping: "Combining Form"
	},
	{
		term: "pleur/o",definition: "Pleura (membrane covering lungs)",grouping: "Combining Form"
	},
	{
		term: "pneumon/o",definition: "Lung",grouping: "Combining Form"
	},
	{
		term: "psycho/o",definition: "Mind",grouping: "Combining Form"
	},
	{
		term: "pulmon/o",definition: "Lung",grouping: "Combining Form"
	},
	{
		term: "radio/o",definition: "X-rays",grouping: "Combining Form"
	},
	{
		term: "rect/o",definition: "Rectum",grouping: "Combining Form"
	},
	{
		term: "ren/o",definition: "Kidney",grouping: "Combining Form"
	},
	{
		term: "rheumat/o",definition: "Flow, fluid",grouping: "Combining Form"
	},
	{
		term: "rhin/o",definition: "Nose",grouping: "Combining Form"
	},
	{
		term: "salphing/o",definition: "Fallopin (uterine) tubes",grouping: "Combining Form"
	},
	{
		term: "sarc/o",definition: "Flesh",grouping: "Combining Form"
	},
	{
		term: "scapula",definition: "Scapula (shoulder blade)",grouping: "Combining Form"
	},
	{
		term: "septic/o",definition: "Pertaining to infection",grouping: "Combining Form"
	},
	{
		term: "son/o",definition: "Sound",grouping: "Combining Form"
	},
	{
		term: "spin/o",definition: "Spine (backbone)",grouping: "Combining Form"
	},
	{
		term: "thorac/o",definition: "Chest",grouping: "Combining Form"
	},
	{
		term: "thromb/o",definition: "Clotting",grouping: "Combining Form"
	},
	{
		term: "thyroid/o",definition: "Thyroid gland",grouping: "Combining Form"
	},
	{
		term: "tonsil/o",definition: "Tonsils",grouping: "Combining Form"
	},
	{
		term: "top/o",definition: "To put, place, position",grouping: "Combining Form"
	},
	{
		term: "troph/o",definition: "Development, nourishment",grouping: "Combining Form"
	},
	{
		term: "ur/o",definition: "Urine or urea (waste material); urinary tract",grouping: "Combining Form"
	},
	{
		term: "urethr/o",definition: "Urethra (tube leading from bladder to outside of body)",grouping: "Combining Form"
	},
	{
		term: "uter/o",definition: "Uterus (womb)",grouping: "Combining Form"
	},
	{
		term: "vascul/o",definition: "Blood vessel",grouping: "Combining Form"
	},
	{
		term: "ven/o",definition: "Vein",grouping: "Combining Form"
	},
	{
		term: "vertebr/o",definition: "Vertebra (backbone)",grouping: "Combining Form"
	},
	{
		term: "i/m",definition: "Intramuscular injection",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "i/v",definition: "Intravenous injection",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "sc",definition: "Subcutaneous injection",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "SR tab / cap",definition: "Slow - release tablet / capsule",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "bd, bid",definition: "Twice a day",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "tds, tid",definition: "Three times a day",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "qds, qid",definition: "Four times a day",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "om",definition: "In the morning",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "on",definition: "At night",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "prn, ad lib",definition: "When necessary",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "stat",definition: "Immediately",grouping: "Abbreviations in Drug Usage"
	},
	{
		term: "LOW",definition: "Loss of weight",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "LOA",definition: "Loss of appetite",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "LMP",definition: "Last menstrual period",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "BP, PR, RR",definition: "Blood pressure, pulse rate, respiratory rate",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "GC",definition: "General condition",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "A/E",definition: "Air entry",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "Rx, S2",definition: "Treatment",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "Ix",definition: "Investigation",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "Mx",definition: "Management",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "NBM",definition: "Nil by mouth",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "RIB",definition: "Rest in bed",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "CRIB",definition: "Complete rest in bed",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "ECT",definition: "Electro-convulsive treatment",grouping: "Abbreviations in Medical Reports"
	},
	{
		term: "IHD",definition: "Ischemic heart disease",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "CAD",definition: "Coronary artery disease",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "CHD",definition: "Coronary heart disease, congential heart disease",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "AMI",definition: "Acute myocardial infarction",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "NSTEMI",definition: "Non-ST elevated myocardial infarct",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "PID",definition: "Prolapsed Intervertebral Disc. Pelvic Inflammatory Disease",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "MVP",definition: "Mitral valve prolapse",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "VSD",definition: "Ventricular septal defect",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "CVA",definition: "Cerebrovascular accident",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "URTI",definition: "upper respiratory tract infection. Eg. Influenza",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "COLD",definition: "Chronic obstructive lung disease",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "PUO",definition: "Pyrexia of unknown origin",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "AIDS",definition: "Acquired immunodeficiency syndrome",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "UTI",definition: "Urinary tract infection",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "BPH",definition: "Benign prostatic hypertrophy",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "OA",definition: "Osteroarthritis",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "RA",definition: "Rheumatoid arthritis",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "DVT",definition: "Deep vein thrombosis",grouping: "Abbreviations in Diagnosis"
	},
	{
		term: "CXR",definition: "Chest x-ray",grouping: "Abbreviations in Ix"
	},
	{
		term: "AXR",definition: "Abdominal x-ray",grouping: "Abbreviations in Ix"
	},
	{
		term: "SXR",definition: "Skull x-ray",grouping: "Abbreviations in Ix"
	},
	{
		term: "KUB",definition: "X-ray showing the kidneys, ureters, bladder",grouping: "Abbreviations in Ix"
	},
	{
		term: "OGD",definition: "Oesophago-gastro-duodenoscopy",grouping: "Abbreviations in Ix"
	},
	{
		term: "CTAP",definition: "Computer Tomogram of Abdomen and Pelvis",grouping: "Abbreviations in Ix"
	},
	{
		term: "MRI",definition: "Magnetic Resonance Imaging",grouping: "Abbreviations in Ix"
	},
	{
		term: "US",definition: "Ultrasound Imaging",grouping: "Abbreviations in Ix"
	},
	{
		term: "ERCP",definition: "Endoscopic retrograde cholangio pancreaticography",grouping: "Abbreviations in Ix"
	},
	{
		term: "FBC",definition: "Full blood count",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "Hb",definition: "Hemoglobin",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "U/E",definition: "Blood test for urea and electrolytes",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "Urine FEME",definition: "Urine: Full exam, microscopic exam",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "Ig",definition: "Immunoglobulin, antibody",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "LP",definition: "Lumbar puncture",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "CSF",definition: "Cerebro-spinal fluid",grouping: "Abbreviations in Lab Tests"
	},
	{
		term: "CABG",definition: "Coronary artery bypass graft",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "THBSO",definition: "Total hysterectomy, bilateral salphingo-oophorectomy",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "TURP",definition: "Transurethral resection of prostate",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "D & C",definition: "Dilation and curettage",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "IVF",definition: "In-vitro fertilisation",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "THR",definition: "Total Hip Replacement",grouping: "Abbreviations in Operative/Procedural"
	},
	{
		term: "TKR",definition: "Total Knee Replacement",grouping: "Abbreviations in Operative/Procedural"
	}
];


//Look through the Array
//Each item is inserted into each row

function loadGlossary(dataTableBody){
	


	const table = document.getElementById(dataTableBody);
	// console.log(table)
	//Find a <table> element with id="dataTableBody". from med_loadGlossary

	medGlossary.forEach( item =>{
		let row = table.insertRow();
		// console.log(row)
		//Table insertRow() https://www.w3schools.com/jsref/met_table_insertrow.asp
		//create arow in table
		//Create an empty <tr> element and add it to the 1st position of the table:
		
		// set 1st column 'Term'
		let term = row.insertCell(0);
		// console.log(term)
		// Insert new cells (<td> elements) at the 1st position of the "new" <tr> element
		//<td class ='sorting_1">A-</td>
		term.innerHTML = item.term;
		// console.log(term.innerHTML)
		// Add some text to the new cells

		// set 2nd column 'definition'
		let definition = row.insertCell(1);
		// Insert new cells (<td> elements) at 2nd position of the "new" <tr> element:
		definition.innerHTML = item.definition;	
		// Add some text to the new cells
		
		// set 3rd column 'grouping'
		let grouping = row.insertCell(2);
		// Insert new cells (<td> elements) at 3rd position of the "new" <tr> element:
		grouping.innerHTML = item.grouping;	
		// Add some text to the new cells		

	});
}
