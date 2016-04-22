var bio = {
    "name" : "Sajid Zaman",
    "role" : "Programmer",
    "contacts" : {
        "mobile": "+8801726429751",
        "email": "zsajid014@gmail.com",
        "github": "https://github.com/sajid-619",
        "facebook": "https://www.facebook.com/Sajid Zaman",
        "location": "Bashundhara R/A Dhaka Bangladesh"
    },
    "welcomeMessage": "Welcome to my Live Resume!",

    "skills" : [
         " C++ ", " Python"
    ],
    "bioPic": "images/me.jpg"

 }  


 var education = {
    "schools": [
         {
             "name": "Independent University Bangladesh",
             "location": "Bashundhara R/A, Dhaka",
             "degree": "Bachelor Of Science",
             "majors": ["CSC"],
             "dates": "Current", 
             "url": "http://www.iub.edu.bd"
         },
        
        
    ],
   "onlineCourses": [
     {
       "title": "Introduction to Computer Science and Programming using Python",
       "school" : "edX",
       "dates": 2016,
       "url": "https://courses.edx.org/certificates/5af35db273914c1d99d5244b9726c674"
     },

     {
       "title": "Introduction to C++",
       "school" : "edX",
       "dates": 2015,
       "url": "https://courses.edx.org/certificates/48f13d3cbb26457d984148370a2a570d"
     },

     {
       "title": "Introduction to HTML, CSS and JavaScript for Web Development",
       "school" : "edX",
       "dates": 2016,
       "url": "https://courses.edx.org/certificates/0cefeaf1620547e48de759047c3813af"
     },

     {
       "title": "Introduction to Computational Thinking and Data Science",
       "school" : "edX",
       "dates": 2016,
       "url": "http://www.edX.org"
     },
     
    
        	
display: function() {
for (edu in education.schools) {
$('#education').append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
var formattedNameAndDegree = formattedName + formattedDegree;
$(".education-entry:last").append(formattedNameAndDegree);
var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
$(".education-entry:last").append(formattedDate);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
$(".education-entry:last").append(formattedLocation);
if (education.schools[edu].majors.length > 0) {
for (major in education.schools[edu].majors) {
var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
$(".education-entry:last").append(formattedMajor);
}
}
}
//online classes
$('#education').append(HTMLonlineClasses)
for (online in education.onlineCourses) {
$('#education').append(HTMLschoolStart);
var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
var formattedTitleAndSchool = formattedTitle + formattedSchool;
$(".education-entry:last").append(formattedTitleAndSchool);
var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
$(".education-entry:last").append(formattedDate);
var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
$(".education-entry:last").append(formattedURL);
}
}
}

education.display();



function inName(nameString){
var nameArray = nameString.split(" ");
var lastName = nameArray[1].toUpperCase();
var firstName = nameArray[0].toLowerCase();
firstName = firstName[0].toUpperCase() + firstName.slice(1);
return firstName + " " + lastName;
};

$("#main").append(internationalizeButton);


$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;

if(bio.skills.length > 0) {

$("#header").append(HTMLskillsStart)

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
$("#skills").append( formattedSkill);
}

