var biography = 
{
    "bio": [
        {
            "name": inName("Glenn Cameron"),
            "role": "Tinkerer",
            "picture_url": "images/fry.jpg",
            "welcome_message": "Welcome bitches!",
            "skills": [
                "Internet marketing",
                "Web development",
                "Awesomeness",
                "Inventions"
            ],
            "contacts": [
                {
                    "email": "glenn@glenncameronjr.com",
                    "mobile": "424.234.8852",
                    "twitter": "@glenncameronjr",
                    "location": "Sunnyvale, California"

                }
            ]
        }
    ]
}

function displayBio() {
    
    for (x in biography.bio) {

        var formattedRole = HTMLheaderRole.replace("%data%", biography.bio[x].role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", biography.bio[x].name);
        $("#header").prepend(formattedName);

        var bioPic = HTMLbioPic.replace("%data%", "images/glenn.jpg");
        $("#header").append(bioPic);

        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", "Welcome to my resumish website");
        $("#header").append(formattedWelcome);

        $("#header").append(HTMLskillsStart);
        for(skill in biography.bio[x].skills) {
            var formattedSkill = HTMLskills.replace("%data%", biography.bio[x].skills[skill]);
            $("#skills").append(formattedSkill);
            
        }

        for(contact in biography.bio[x].contacts) {
            var formattedMobile = HTMLmobile.replace("%data%", biography.bio[x].contacts[contact].mobile);
            $("#topContacts").append(formattedMobile);
            $("#footerContacts").append(formattedMobile);

            var formattedEmail = HTMLemail.replace("%data%", biography.bio[x].contacts[contact].email);
            $("#topContacts").append(formattedEmail);
            $("#footerContacts").append(formattedEmail);

            var formattedTwitter = HTMLtwitter.replace("%data%", biography.bio[x].contacts[contact].twitter);
            $("#topContacts").append(formattedTwitter);
            $("#footerContacts").append(formattedTwitter);

            var formattedLocation = HTMLlocation.replace("%data%", biography.bio[x].contacts[contact].location);
            $("#topContacts").append(formattedLocation);
            $("#footerContacts").append(formattedLocation);

        }




    }
    
}

displayBio();
/*
if (biography.bio[0].length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.bio.skills[1]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.bio.skills[2]);
    
    $("#skills").append(formattedSkill);
}
*/

var projects = 
{
    "projects": [
        {
            "title": "Samsung Developer Conference i",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs first international developer conference",
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/400/200/"
            ]
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs second international developer conference",
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/400/200/"
            ]
        }
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
            "online": "True",
            "location": "Melbourne, Florida"
        },
        {
            "school": "Univesity of Florida",
            "city": "Gainesville",
            "degree": "BA",
            "major": "Biology",
            "graduated": "2011",
            "online": "False",
            "location": "Gainesville, Florida"
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
            "location": "San Jose, California",
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
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/400/200/"
            ]
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs second international developer conference",
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/400/200/"
            ]
        }
    ]
}

/*
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
*/



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
        $(".project-entry:last").append(formattedProjectTitle);

        //var formattedProjectLocation = HTMLprojectLocationreplace("%data%", projects.projects[project].location);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        console.log(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
        $(".project-entry:last").append(formattedProjectDescription);
        //var formattedProjectImage= HTMLprojectImage.replace("%data%", projects.projects[project].image);
        //$(".project-entry:last").append(formattedProjectFull);
        
        if(projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }



       // var formattedProjectFull = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;

       //$(".project-entry:last").append(formattedProjectFull);
    }
}

displayProjects();

/*
function locationizer(work_obj) {
    var locationArray = [];

    for(var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;        
}

locationizer(work);
*/


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

