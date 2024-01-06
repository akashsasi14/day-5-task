var resumeData = {
    name: "Akash sasi N",
    email: "sasiakash807",
    contact: 6379289584,
    adress: {
      street: "4/10 high school road",
      city: "tenkasi",
      distric: "tenkasi"
    },
    
    experience: [
      {
        company: "Boston Harbor Consulting",
        date_start: "2020-01-01",
        date_end: "2023-12-31",
        description: "Engaged in developing conversational AI systems and improving user interactions."
      }
      
    ],
    education: [
      {
        degree: "Electrical and Electronics Engineering",
        institution: "National Engineering college",
        date_start: "2018-06-08",
        date_end: "2021-05-30",
        location: "kovilpatti"
      }
    ],
    skills: [
      "c++",
      "Python",
      "Machine Learning",
      "JavaScript"
    ]
  };
  var resumeJSON = JSON.stringify(resumeData, null, 2);
  console.log(resumeJSON);
  for (const key in resumeData) {
    console.log(`${key}:`);
  
    if (Array.isArray(resumeData[key])) {
      for (const item of resumeData[key]) {
        console.log(`- Item:`);
        for (const innerKey in item) {
          console.log(`  ${innerKey}: ${item[innerKey]}`);
        }
      }
    } else if (typeof resumeData[key] === 'object') {
      for (const innerKey in resumeData[key]) {
        console.log(`  ${innerKey}: ${resumeData[key][innerKey]}`);
      }
    } else {
      console.log(`  ${resumeData[key]}`);
    }
  }