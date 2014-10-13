var formattedName = HTMLheaderName.replace("%data%", inName("glenn cameron"));
var formattedRole = HTMLheaderRole.replace("%data%", "Tinkerer");
var bioPic = HTMLbioPic.replace("%data%", "images/glenn.jpg");
var formattedMobile = HTMLmobile.replace("%data%", "424.234.8852");
var formattedEmail = HTMLemail.replace("%data%", "glenn@glenncameronjr.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "@glenncameronjr");
var formattedLocation = HTMLlocation.replace("%data%", "Sunnyvale, CA");
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", "Welcome to my resumish website");

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(bioPic);
$("#header").append(formattedWelcome);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


var  bio = {
        "name": "Glenn",
        "role": "Tinkerer",
        "contacts": {
            "email" : "glenn@glenncameronjr.com",
            "number" : "424.234.8852",
            "Twitter" : "@glenncameronjr"
        },
        "picture_url": "images/fry.jpg",
        "welcome_message": "Welcome bitches!",
        "skills": [
            "Internet marketing",
            "Web development",
            "Awesomeness",
            "Inventions"
        ]
    }


//JSON format

var education = {
    "schools": [
        {
            "school": "Florida Institute of Technology",
            "city": "Melbourne",
            "degree": "MBA",
            "major": "Internet Marketing",
            "graduated": "2013",
            "online": "True"
        },
        {
            "school": "Univesity of Florida",
            "city": "Gainesville",
            "degree": "BA",
            "major": "Biology",
            "graduated": "2011",
            "online": "False"
        }
    ]
}

//work Json data

var work = {
    "jobs": [
        {
            "job": "Marketing & Events",
            "employer": "The Network",
            "title": "CMO",
            "location": "Gainesville, Florida",
            "dates": "2009-2011",
            "desc_1": "An online and offline social network"
        },
        {
            "job": "Publishing",
            "employer": "Bonnier Corporation",
            "title": "Web Editor",
            "location": "Winter Park, Florida",
            "dates": "2012-2013",
            "desc_1": "One of the largest media companies in the world."
        },
        {
            "job": "Developer Marketing",
            "employer": "Samsung",
            "title": "Sr. Digital Marketing Manager",
            "location": "Winter Park, Florida",
            "dates": "2013-Present",
            "desc_1": "Rebranding Samsung as a developer friendly company."
        }
    ]
}
//projects JSON

var projects = 
{
    "projects": [
        {
            "title": "Samsung Developer Conference i",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs first international developer conference",
            "image": "http://lorempixel.com/400/200/"
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs second international developer conference",
            "image": "http://lorempixel.com/400/201/"
        }
    ]
}

var locations = ["38.026332, -122.424909"];

/*
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
*/


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	
	$("#skills").append(formattedSkill);

}
function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", work.jobs[job].desc_1);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDesc;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
}

displayWork();

function displayProjects() {
    for (project in projects.projects) {
         $("#projects").append(HTMLprojectStart);
        

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        //var formattedProjectLocation = HTMLprojectLocationreplace("%data%", projects.projects[project].location);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
        var formattedProjectImage= HTMLprojectImage.replace("%data%", projects.projects[project].image);
        

        var formattedProjectFull = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;

       $(".project-entry:last").append(formattedProjectFull);
    }
}

displayProjects();



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
    });

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

inName("glenn cameron");

$("#mapDiv").append(googleMap);

