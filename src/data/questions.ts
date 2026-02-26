export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the primary document that governs the conduct of civil servants in Nigeria?",
    options: ["The Nigerian Constitution", "The Public Officers Ethics Act", "The Civil Service Rules", "The National Policy on Public Service"],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "Who is the current Head of the Civil Service of the Federation (as of 2025)?",
    options: ["Folashade Yemi-Esan", "Boss Mustapha", "George Akume", "Hadiza Bala Usman"],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "What is the past tense of 'teach'?",
    options: ["Teached", "Taught", "Taughted", "Teaching"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Choose the word that is closest in meaning to 'Reluctant':",
    options: ["Willing", "Hesitant", "Ready", "Eager"],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "What is the value of 24 ÷ 6 + 3 × 2?",
    options: ["7", "10", "12", "6"],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "If 3x = 21, what is x?",
    options: ["5", "6", "7", "9"],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "What is the purpose of performance appraisal in the civil service?",
    options: ["To punish workers", "To promote political loyalty", "To assess and improve efficiency", "To reduce salaries"],
    correctAnswer: 2
  },
  {
    id: 8,
    text: "The Head of Service in Nigeria is:",
    options: ["The Chief of Staff", "The head of all ministries", "The most senior civil servant in the public service", "A minister"],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "Which principle discourages civil servants from accepting expensive gifts?",
    options: ["Transparency", "Accountability", "Conflict of interest", "Meritocracy"],
    correctAnswer: 2
  },
  {
    id: 10,
    text: "Who appoints the Head of the Civil Service of the Federation?",
    options: ["The President", "The National Assembly", "The Federal Civil Service Commission", "The Senate"],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "What does ICT stand for?",
    options: ["Information and Communication Technology", "Integrated Communication Tools", "International Computer Training", "Internal Control Technique"],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Which of the following is a core value of public service in Nigeria?",
    options: ["Profitability", "Efficiency", "Favoritism", "Secrecy"],
    correctAnswer: 1
  },
  {
    id: 13,
    text: "What is the minimum age for appointment into the Nigerian civil service?",
    options: ["18 years", "21 years", "25 years", "30 years"],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "The power to remove a civil servant from office is vested in the:",
    options: ["President", "Head of the Civil Service", "Federal Civil Service Commission", "Minister"],
    correctAnswer: 2
  },
  {
    id: 15,
    text: "Which organ is responsible for policy formulation in Nigeria?",
    options: ["The Judiciary", "The Executive", "The Legislature", "The Press"],
    correctAnswer: 1
  },
  {
    id: 16,
    text: "What is the purpose of the Federal Character Commission?",
    options: ["To promote national unity", "To ensure fair representation in public service", "To manage federal roads", "To oversee elections"],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Which of the following is a type of communication?",
    options: ["Verbal", "Non-verbal", "Written", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 18,
    text: "The process of selecting the best candidate for a job is called:",
    options: ["Recruitment", "Training", "Promotion", "Retirement"],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "What is the main role of a civil servant?",
    options: ["Policy implementation", "Policy formulation", "Law-making", "Judicial decision"],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "The principle of 'stare decisis' means:",
    options: ["Let the decision stand", "Make a new decision", "Change the law", "Follow the rules"],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "Which of the following is an example of non-verbal communication?",
    options: ["Speech", "Writing", "Body language", "Reading"],
    correctAnswer: 2
  },
  {
    id: 22,
    text: "What is the purpose of a probationary period in employment?",
    options: ["To assess the employee's performance", "To train the employee", "To promote the employee", "To terminate the employee"],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "Who is the chief accounting officer of a ministry?",
    options: ["The Minister", "The Permanent Secretary", "The Director of Finance", "The Accountant General"],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "Which of the following is a disciplinary measure?",
    options: ["Promotion", "Demotion", "Salary increase", "Leave allowance"],
    correctAnswer: 1
  },
  {
    id: 25,
    text: "What does 'MDGs' stand for?",
    options: ["Millennium Development Goals", "Major Development Goals", "Minimum Development Guidelines", "Management Development Goals"],
    correctAnswer: 0
  },
  {
    id: 26,
    text: "Which principle ensures that civil servants are accountable to the public?",
    options: ["Transparency", "Accountability", "Efficiency", "Effectiveness"],
    correctAnswer: 1
  },
  {
    id: 27,
    text: "What is the primary role of the Federal Civil Service Commission?",
    options: ["Policy formulation", "Policy implementation", "Recruitment and discipline", "Budgeting"],
    correctAnswer: 2
  },
  {
    id: 28,
    text: "Which of the following is a type of public service?",
    options: ["Teaching", "Nursing", "Civil service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 29,
    text: "What is the purpose of the Nigerian Constitution?",
    options: ["To establish laws", "To protect citizens' rights", "To govern the country", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 30,
    text: "Which of the following is an example of a public good?",
    options: ["Private car", "Public park", "Mobile phone", "Laptop"],
    correctAnswer: 1
  },
  {
    id: 31,
    text: "What is the main function of the National Assembly?",
    options: ["Law-making", "Policy implementation", "Judicial decision", "Budget approval"],
    correctAnswer: 0
  },
  {
    id: 32,
    text: "Who is responsible for presenting the national budget?",
    options: ["The President", "The Minister of Finance", "The National Assembly", "The Federal Civil Service Commission"],
    correctAnswer: 0
  },
  {
    id: 33,
    text: "What is the purpose of the Public Complaints Commission?",
    options: ["To investigate public complaints", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 34,
    text: "Which of the following is a type of leadership style?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 35,
    text: "What is the main role of the Independent National Electoral Commission (INEC)?",
    options: ["To conduct elections", "To make laws", "To implement policies", "To oversee the judiciary"],
    correctAnswer: 0
  },
  {
    id: 36,
    text: "Which of the following is a fundamental principle of good governance?",
    options: ["Transparency", "Accountability", "Participation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 37,
    text: "What is the purpose of the National Planning Commission?",
    options: ["To formulate national development plans", "To implement policies", "To oversee elections", "To make laws"],
    correctAnswer: 0
  },
  {
    id: 38,
    text: "Which of the following is a type of economic system?",
    options: ["Capitalism", "Socialism", "Mixed economy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 39,
    text: "What is the main role of the Economic and Financial Crimes Commission (EFCC)?",
    options: ["To combat corruption", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 40,
    text: "Which of the following is a principle of management?",
    options: ["Planning", "Organizing", "Staffing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 41,
    text: "What is the purpose of the National Youth Service Corps (NYSC)?",
    options: ["To promote national unity", "To provide employment", "To develop skills", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 42,
    text: "Which of the following is a type of communication barrier?",
    options: ["Language", "Cultural", "Physical", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 43,
    text: "What is the main role of the National Human Rights Commission?",
    options: ["To protect human rights", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 44,
    text: "Which of the following is a fundamental principle of the Nigerian Constitution?",
    options: ["Federalism", "Democracy", "Human dignity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 45,
    text: "What is the purpose of the Federal Road Safety Commission?",
    options: ["To ensure road safety", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 46,
    text: "What is the main role of the National Population Commission?",
    options: ["To conduct censuses", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 47,
    text: "Which of the following is a type of sampling method?",
    options: ["Random sampling", "Stratified sampling", "Cluster sampling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 48,
    text: "What is the purpose of the Nigerian Institute of Management?",
    options: ["To promote management development", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 49,
    text: "Which of the following is a principle of ethics?",
    options: ["Honesty", "Integrity", "Fairness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 50,
    text: "What is the main role of the National Assembly Service Commission?",
    options: ["To oversee the National Assembly", "To implement policies", "To make laws", "To conduct elections"],
    correctAnswer: 0
  },
  {
    id: 51,
    text: "Which of the following is a type of conflict resolution?",
    options: ["Negotiation", "Mediation", "Arbitration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 52,
    text: "What is the purpose of the Public Service Rules?",
    options: ["To govern civil servants", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 53,
    text: "Which of the following is a type of decision-making style?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 54,
    text: "What is the main role of the Federal Character Commission?",
    options: ["To ensure fair representation", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 55,
    text: "Which of the following is a principle of accountability?",
    options: ["Transparency", "Answerability", "Enforcement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 56,
    text: "What is the purpose of the National Bureau of Statistics?",
    options: ["To collect data", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 57,
    text: "Which of the following is a type of research design?",
    options: ["Experimental", "Quasi-experimental", "Survey", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 58,
    text: "What is the main role of the Nigerian Customs Service?",
    options: ["To collect revenue", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 59,
    text: "Which of the following is a principle of good governance?",
    options: ["Participation", "Transparency", "Accountability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 60,
    text: "What is the purpose of the National Orientation Agency?",
    options: ["To promote national unity", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 61,
    text: "Which of the following is a type of communication channel?",
    options: ["Formal", "Informal", "Verbal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 62,
    text: "What is the main role of the Nigerian Immigration Service?",
    options: ["To regulate migration", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 63,
    text: "Which of the following is a principle of management?",
    options: ["Planning", "Organizing", "Controlling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 64,
    text: "What is the purpose of the Federal Fire Service?",
    options: ["To prevent fires", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 65,
    text: "Which of the following is a type of leadership style?",
    options: ["Transformational", "Transactional", "Laissez-faire", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 66,
    text: "What is the main role of the National Emergency Management Agency?",
    options: ["To manage disasters", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 67,
    text: "Which of the following is a principle of ethics?",
    options: ["Respect", "Fairness", "Responsibility", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 68,
    text: "What is the purpose of the Nigerian Police Force?",
    options: ["To maintain law and order", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 69,
    text: "Which of the following is a type of crime?",
    options: ["Violent crime", "Property crime", "White-collar crime", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 70,
    text: "What is the main role of the Economic and Financial Crimes Commission?",
    options: ["To combat corruption", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 71,
    text: "Which of the following is a principle of accountability?",
    options: ["Transparency", "Answerability", "Enforcement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 72,
    text: "What is the purpose of the National Assembly?",
    options: ["To make laws", "To implement policies", "To oversee elections", "To manage the economy"],
    correctAnswer: 0
  },
  {
    id: 73,
    text: "Which of the following is a type of government revenue?",
    options: ["Taxation", "Grants", "Loans", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 74,
    text: "What is the main role of the Federal Ministry of Finance?",
    options: ["To manage the economy", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 75,
    text: "Which of the following is a principle of budgeting?",
    options: ["Transparency", "Accountability", "Participation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 76,
    text: "What is the purpose of the National Planning Commission?",
    options: ["To formulate national development plans", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 77,
    text: "Which of the following is a type of economic system?",
    options: ["Capitalism", "Socialism", "Mixed economy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 78,
    text: "What is the main role of the Central Bank of Nigeria?",
    options: ["To regulate the money supply", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 79,
    text: "Which of the following is a principle of monetary policy?",
    options: ["Price stability", "Economic growth", "Full employment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 80,
    text: "What is the purpose of the Nigerian Stock Exchange?",
    options: ["To facilitate trade in securities", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 81,
    text: "Which of the following is a type of financial instrument?",
    options: ["Stocks", "Bonds", "Treasury bills", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 82,
    text: "What is the main role of the Securities and Exchange Commission?",
    options: ["To regulate the capital market", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 83,
    text: "Which of the following is a principle of corporate governance?",
    options: ["Transparency", "Accountability", "Fairness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 84,
    text: "What is the purpose of the National Insurance Commission?",
    options: ["To regulate the insurance industry", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 85,
    text: "Which of the following is a type of insurance?",
    options: ["Life insurance", "Health insurance", "Property insurance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 86,
    text: "What is the main role of the Pension Commission?",
    options: ["To regulate pension schemes", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 87,
    text: "Which of the following is a principle of pension management?",
    options: ["Security", "Sustainability", "Transparency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 88,
    text: "What is the purpose of the National Health Insurance Scheme?",
    options: ["To provide health insurance", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 89,
    text: "Which of the following is a type of healthcare financing?",
    options: ["Out-of-pocket payment", "Health insurance", "Community-based financing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 90,
    text: "What is the main role of the Federal Ministry of Health?",
    options: ["To formulate health policies", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 91,
    text: "Which of the following is a principle of healthcare management?",
    options: ["Quality", "Accessibility", "Equity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 92,
    text: "What is the purpose of the National Primary Health Care Development Agency?",
    options: ["To develop primary healthcare", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 93,
    text: "Which of the following is a type of healthcare service?",
    options: ["Preventive care", "Curative care", "Rehabilitative care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 94,
    text: "What is the main role of the Nigerian Medical Association?",
    options: ["To promote medical professionalism", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 95,
    text: "Which of the following is a principle of medical ethics?",
    options: ["Autonomy", "Beneficence", "Non-maleficence", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 96,
    text: "What is the purpose of the National Agency for Food and Drug Administration and Control?",
    options: ["To regulate food and drugs", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 97,
    text: "Which of the following is a type of environmental health hazard?",
    options: ["Air pollution", "Water pollution", "Noise pollution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 98,
    text: "What is the main role of the Federal Environmental Protection Agency?",
    options: ["protect the environment", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  },
  {
    id: 99,
    text: "Which of the following is a principle of sustainable development?",
    options: ["Environmental protection", "Social equity", "Economic growth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 100,
    text: "What is the purpose of the National Environmental Standards and Regulations Enforcement Agency?",
    options: ["To enforce environmental regulations", "To implement policies", "To make laws", "To oversee elections"],
    correctAnswer: 0
  }
];
