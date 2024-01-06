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
  for (var key in resumeData) {
    if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      for (var i = 0; i < resumeData[key].length; i++) {
        console.log(`- Item ${i + 1}:`);
        for (var innerKey in resumeData[key][i]) {
          console.log(`  ${innerKey}: ${resumeData[key][i][innerKey]}`);
        }
      }
    } else if (typeof resumeData[key] === 'object') {
      console.log(`${key}:`);
      for (var innerKey in resumeData[key]) {
        console.log(`${innerKey}: ${resumeData[key][innerKey]}`);
      }
    } else {
      console.log(`${key}: ${resumeData[key]}`);
    }
  }