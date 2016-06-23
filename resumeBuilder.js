//popup welcome message
function popupMessage(){
	alert("Welcome to Boya Chen's Resume Page")
}
popupMessage();

// bio info
var bio = {
	"name": "Boya Chen",
	"role": "System Engineer",
	"contacts": { 
		"mobile":"617-817-7576",
		"email":"boya.chen@utexas.edu",
		"github":"boyachen1013",
		"location":"Bay Area, United States"
	},
	"welcomeMessage":"Welcome to Boya Chen's resume page!",
	"skills": ["Python","HTML","CSS","Stata","R Programming"],
	"bioPic": "images/doraemon.jpg"
}

if (bio.skills.length > 0) {
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic)
	$("#header").prepend(formattedBiopic);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	$("#header").append(HTMLskillsStart);
	for (var skill = 0; skill < bio.skills.length; skill++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);		
	};

}


// education info
var education = {
	"schools" : [
	{
		"name": "The University of Texas at Austin",
		"location": "Austin, TX, United States",
		"degree": "Master Arts in Economics",
		"majors": "Economics",
		"dates": "May,2015",
		"url":"http://www.utexas.edu/"
	},

	{
		"name":"Northeastern University",
		"location": "Boston, MA, United States",
		"degree": "Combined degree in Economics and Business Administration in Finance",
		"majors": ["Economics", "Finance"],
		"dates": "Dec,2013",
		"url":"http://www.northeastern.edu/"
	}
	],
	"onlineCourse": 
	{
		"name":"Udacity",
		"location": "San Francisco, CA, United States",
		"degree": "Candidate for Intro to Programming Nanodegree",
		"dates": "June,2016",
		"url":"http://www.udacity.com"
	}
};

education.display = function(){
	for ( var school = 0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchooldate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);	
		$(".education-entry:last").append(formattedSchoolname + formattedSchooldegree);
		$(".education-entry:last").append(formattedSchoollocation);
		$(".education-entry:last").append(formattedSchooldate);
		$(".education-entry:last").append(formattedSchoolmajor);
	}

	$("#education").append(HTMLschoolStart);
	var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourse.name);
	var formattedOnlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourse.degree);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse.dates);
	var formattedOnlineurl = HTMLonlineURL.replace("%data%", education.onlineCourse.url);
	$(".education-entry:last").append(HTMLonlineClasses);
	$(".education-entry:last").append(formattedOnlinetitle + formattedOnlineschool);
	$(".education-entry:last").append(formattedOnlineDates);
	$(".education-entry:last").append(formattedOnlineurl);
}
education.display();

// Work Experience 
var work = {
	"jobs":[
	{
		"workEmployer":"AT&T",
		"workTitle":"System Engineer",
		"workDates":"Jan.2016 - June.2016",
		"workLocation":"San Ramon, CA, United States",
		"workDescription": "Worked with documentation development, testing, project management and budget planning"
	},
	{
		"workEmployer":"Bank of Hawaii",
		"workTitle":"Fraud Specialist",
		"workDates":"Aug.2015 - Dec.2015",
		"workLocation":"Honolulu, HI, United States",
		"workDescription": "Performed multiple operational tasks and projects to meet division objectives and to mitigate" +
		"risks under fast-pace environment, while maintaining high accuracy in all functions and meeting dealines."
	}
	]
}


work.display = function(){
	for (var job = 0; job < work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
		var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
		var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
		var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation);
		var formattedWorkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
		$(".work-entry:last").append(formattedWorkemployer + formattedWorktitle);
		$(".work-entry:last").append(formattedWorkdates);
		$(".work-entry:last").append(formattedWorklocation);
		$(".work-entry:last").append(formattedWorkdescription);
	}
}

work.display();


//project contents 
var projects = {
	"projects": [
	{
		"projectTitle":"fill-in-blank game",
		"projectDates":"May,2016",
		"projectDescription":"This project is building a fill-in-the-blank quiz via Python. The user is asked to fill in " +
		"difficulty levels and each blank appropriately.The quiz will prompt a user with a sentence containing several blanks.",
		"projectImages": "images/python_game.jpg"
	},
	{
		"projectTitle":"movie-website",
		"projectDates":"May,2016",
		"projectDescription":"The movie trailer website project consists of server-side code to store a list of movie" + 
		"titles, along with respective box imagry and movie trailer website. The data served as a web page allowing" + 
		"visitors to review the movies and watch the trailers.",
		"projectImages": "images/movie_web_project.jpg"
	}
	]
}

projects.display = function() {
	
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjecttitle = HTMLprojectTitle.replace("%data%",projects.projects[project].projectTitle);
		$(".project-entry:last").append(formattedProjecttitle);
		var formattedProjectdates = HTMLprojectDates.replace("%data%", projects.projects[project].projectDates);
		$(".project-entry:last").append(formattedProjectdates);
		var formattedProjectdescription = HTMLprojectDescription.replace("%data%", projects.projects[project].projectDescription);
		$(".project-entry:last").append(formattedProjectdescription);	
		var formattedProjectimage =  HTMLprojectImage.replace("%data%", projects.projects[project].projectImages);
		$(".project-entry:last").append(formattedProjectimage);
	}	
}

projects.display();

//internationalize name button
function inName(){
	var intName = bio.name.split(" ");
	var lastName =  intName[1].toUpperCase();
	var firstName = intName[0].slice(0,1).toUpperCase() + intName[0].slice(1).toLowerCase();
	var newName = firstName +" " + lastName;
	return newName;
}
//inName();
$("#main").append(internationalizeButton);

//map
function locationizer (work){
	var locationArray = [];
	for (job in work.jobs){
		var newLocation = work.jobs[job].workLocation;
		locationArray.push(newLocation);
	}
	return locationArray;
}
locationizer(work);

$("#mapDiv").append(googleMap);
