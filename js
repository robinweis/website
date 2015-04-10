var addElements = function() {
    //add the logo...
    $('.content').prepend('<a id="logoghost"><img src="http://2.bp.blogspot.com/-YN6Plc1WmxQ/VSDzQ6Swy2I/AAAAAAAATjo/rNKcF82-j2w/s1600/logo9.png"></a>');
    $('#logoghost').css("position", "absolute");
    $('#logoghost').css("z-index", "10000");
    //$('.content').prepend('<a id="bloglink"><img src="http://i.imgur.com/iTfBUHp.png"></a>');
    //$('#bloglink').css("position", "absolute");
    //$('#bloglink').css("right", "50px");
    //$('#bloglink').css("z-index", "10000");
    
    if (window.location == "http://www.robinwe.is/" || window.location == "http://www.robinwe.is/?m=1" || window.location == "http://www.robinwe.is/?m=0") {
        var distanceFromTop = 0;
        $('.main-outer').first().append('<div id="bubble" class="bubble"></div>');
        //$('.main-outer').css({"top": distanceFromTop});
    	for (var i = 0; i < aboutMe.length; i++) {
    		$('.main-outer').first().append('<div id="' + idName(i) + '">' + innerHTML(i) + '</div>');
    		var currentElement = document.getElementById(idName(i));
    		currentElement.className = className(i);
    		currentElement.style.left = setLeft((beginTime(i))) + "%";
    		currentElement.style.width = setWidth(beginTime(i), endTime(i)) + "%";
    		if (aboutMe[i][5]) {
    			distanceFromTop += alignHeight;
    		}
    		currentElement.style.top = distanceFromTop + "px";
    		if (isOverflowed(currentElement)) {
    		    //clear the text if it's overflowed
    		    currentElement.innerHTML = "";
    		}
    		if (endTime(i) == today) {
    		    //draw an arrow to the right > 
    		    $('#' + idName(i)).append('<div class="present" id="' + idName(i) + '">&raquo;&nbsp;</div>');
    		    //ADD A CHECK FOR THAT IF THERE IS OVERLAP CLEAR THE TEXT
    		}
    	}
    	//add something here to automatically add 2016 and 2017 JUST IN CASE YOU FORGET heh
    }
};

var websiteText;
websiteText = "<h4>robinwe.is</h4>";
websiteText += "<div id='duration'><i>Mar 2015 - present</i></div>";
websiteText += "Hi. I'm Robin, and this is the website I've dedicated to sharing and presenting my analytics and self-tracking data. Enjoy!";

function addDefaultText() {
    $("#bubble").html(websiteText);
}

function addListeners() {
    //this is responsible for the scrolling logo on the main page
    $('#logoghost').on('click', function(){
            window.location = "http://www.robinwe.is";
        });
	$(".me, .college, .hs, .work").bind({
	    click: function(event) {
	      switch(event.target.id) {
	          case "logoghost":
	              window.open('robinwe.is');
	              break;
	          case "52weeks":
	              window.open('https://52weeksrw.blogspot.com', '_blank');
	              break;
	          default:
	              //
	      }  
	    },
	    mouseover: function(event) {
	        var string;
            switch(event.target.id) {
                case "cry":
                    string = "<h4>cry</h4>";
                    string += "<div id='duration'><i>Feb 2014 - present</i></div>";
                    string += "Logging tears to smash stigmas! And accidentally conditioning myself to check the time every time I start crying. Between Feb 2014 and Feb 2015, I cried 271 times on 145 unique days. More than half of the sessions were related to relationships/breakups, and 20% occurred in public. I was particularly prone to crying at doctors' offices, during therapy, at airports, and on public transportation.";
                    $("#bubble").html(string);
                    break;
                case "ghostship":
                    string = "<h4>master/ghostship</h4>";
                    string += "<div id='duration'><i>Nov 2013 - present</i></div>";
                    string += "Inspired by a study where college freshman were asked to write about their top 3 romantic interests and closest friends every week for a year, I use MASTER to log a monthly status report for 11 friend/relationship groups, 10 family groups, and 9 facets of my lifestyle/identity to see how relationships and sentiments change over time. 40 other entries have been retired to GHOSTSHIP, where they are updated only as needed.";
                    $("#bubble").html(string);
                    break;
                case "sorry":
                    string = "<h4>sorry</h4>";
                    string += "<div id='duration'><i>Aug 2013 - Jun 2014</i></div>";
                    string += 'One time a boyfriend told me that I apologized too often, so I took that as a challenge to see if he was right. He wrote a script to query our IM logs, while I searched for intances of "sorry" and "sry" in our text conversations. Turns out <i>he</i> apologized more often—266 apologies to my 189. I was more likely to apologize about miscommunications, whereas he was more likely to apologize for his behavior.';
                    $("#bubble").html(string);
                    break;
                case "okc":
                    string = "<h4>okanalytics</h4>";
                    string += "<div id='duration'><i>Jul 2012 - Jul 2013</i></div>";
                    string += "I retroactively tracked the interactions I had on OkCupid during my first year of membership to see how my activity lined up with the myths of online dating. I received 539 first messages and sent 106. About half of my outgoing messages received responses, whereas I only responded to 30% of the messages I received. The messages I sent were wordier than the messages people sent me.";
                    $("#bubble").html(string);
                    break;
                case "wrk":
                    string = "<h4>work</h4>";
                    string += "<div id='duration'><i>Jan 2015 - present</i></div>";
                    string += "Relatively new at my job and in need of a New Year's Resolution, I began tracking how I spend my time at work. This spreadsheet was the design inspiration for a mobile tracking app that I currently sort of have in development. More info coming soon.";
                    $("#bubble").html(string);
                    break;
                case "dream":
                    string = "<h4>dream</h4>";
                    string += "<div id='duration'><i>Apr 2013 - Jul 2014</i></div>";
                    string += "I don't believe that dreams have any meaningful (or at least consistent) relationship with reality, but I like them because they're weird and interesting. The journal consists of amusingly unfiltered half-asleep voice recordings taken immediately after waking up.";
                    $("#bubble").html(string);
                    break;
                case "happy":
                    string = "<h4>happy</h4>";
                    string += "<div id='duration'><i>Jan 2013 - present</i></div>";
                    string += "This log began as a piece of lined paper taped to the wall next to my bed meant to contain one thing that made me happy everyday, but it has since blossomed into a daily journal where I write about pretty much everything. Every day. Since 2013.";
                    $("#bubble").html(string);
                    break;
                case "spaghettinest":
                    string = "<h4>spaghetti nest</h4>";
                    string += "<div id='duration'><i>Oct 2012 - present</i></div>";
                    string += "After becoming a fan of The Moth in high school, I started to think about which of my own stories were worth sharing. Then one day I decided it would be fun to publish a book, so I started writing a memoir. The present draft is ~60,000 words. At least <i>I</i> think my life is interesing.";
                    $("#bubble").html(string);
                    break;
                case "52weeks":
                    string = "<h4>52 weeks</h4>";
                    string += "<div id='duration'><i>Sep 2012 - Nov 2013</i></div>";
                    string += "I wrote down 52 challenges (try a new food, face a fear, etc) on a deck of cards, drew one at random each week, and documented my performance on a public blog. The project took longer to plan than to execute because I was trying to maximize the likelihood of follow-through, but it was wildly effective.";
                    $("#bubble").html(string);
                    break;
                case "maestro":
                    string = "<h4>maestro</h4>";
                    string += "<div id='duration'><i>Dec 2013 - Jan 2015</i></div>";
                    string += "This is the Google doc I shared with my friend and then later boyfriend, Jesse, to help us super-communicate throughout our long-distance relationship. It consisted of many sub-sheets, the most important being LIST, where we kept track of conversations.";
                    $("#bubble").html(string);
                    break;
                case "website":
                    $("#bubble").html(websiteText);
                    break;
                case "date":
                    string = "<h4>date</h4>";
                    string += "<div id='duration'><i>Aug 2012 - present</i></div>";
                    string += "One day I joke-threatened to use a Google calendar to keep track of all the time I spent with a guy I met online, and then I actually followed through. The ability to know exactly how many minutes we'd spent together was so intoxicating that I decided to do it for everyone else too. They say it takes 10,000 hours to become an expert in something, and I'm about 37% of the way to expertise in dating. (if you don't count Relationships it's closer to 8%, but whatever)";
                    $("#bubble").html(string);
                    break;
                case "texts":
                    string = "<h4>texts & memos</h4>";
                    string += "<div id='duration'><i>Jun 2012 - present</i></div>";
                    string += "I use SMS Backup+ on Android to back up all my texts through gmail. I've yet to learn a super great way to query them, but it's been a helpful archive when writing memoir chapters. I also use the Memo app as an on-the-fly mobile journal for one-off ideas, sentiments, reminders, etc, but I don't have a good way of automating it (yet). I began logging both of these things as soon as I got my first smart phone.";
                    $("#bubble").html(string);
                    break;
                //case "memo":
                    //string = "<h4>memo</h4>"
                    //string += "<div id='duration'><i>Jun 2012 - present</i></div>";
                    //string += "My on-the-fly mobile journal for when thoughts are spinning too quickly and I can't sustain them in my head space. Still looking for a good way to back up these up with automation."
                    //$("#bubble").html(string);
                    //break;
                case "journal":
                    string = "<h4>journey of a bird</h4>";
                    string += "<div id='duration'><i>Dec 2005 - present</i></div>";
                    string += "While at first just an outlet for middle school angst+, my journal has been one of the longest-term constants in my life. I've written ~125 entries totaling 42,000 words, averaging 336 words/entry and about 1 entry/month. I've yet to find something that can rival the effectiveness of pencil (NOT PEN) on paper.";
                    $("#bubble").html(string);
                    break;

                //

                case "mcm":
                    string = "<h4>software developer</h4>";
                    string += "<div id='duration'><i>Sep 2014 - present</i></div>";
                    string += "Writing software for an industrial supply company. Would you believe that I'd pretty much never programmed before starting here? Without the knowledge gained from this position, this website probably wouldn't exist.";
                    $("#bubble").html(string);
                    break;
                case "cia":
                    string = "<h4>program coordinator</h4>";
                    string += "<div id='duration'><i>Jun 2013 - Sep 2013</i></div>";
                    string += "Scored myself an internship at an innovation awards agency. People would send in their products and we'd get to evaluate them. Was a pretty cool way to spend a summer.";
                    $("#bubble").html(string);
                    break;
                case "cradle":
                    string = "<h4>community service aide</h4>";
                    string += "<div id='duration'><i>Jun 2011 - Jun 2012</i></div>";
                    string += "Helping out with administrative tasks at an adoption agency. I had to walk by a nursery with real live babies every time I wanted to use the bathroom. Witnessing adoptive parents hold their child for the first time was really something special.";
                    $("#bubble").html(string);
                    break;
                case "tutor":
                    string = "<h4>tutor</h4>";
                    string += "<div id='duration'><i>Sep 2012 - May 2013</i></div>";
                    string += "Teaching D1 athletes how to do their statistics homework.";
                    $("#bubble").html(string);
                    break;
                case "vmi":
                    string = "<h4>clerk</h4>";
                    string += "<div id='duration'><i>Jul 2009 - Aug 2009</i></div>";
                    string += "Filing stuff at a metal warehouse. Fun to spend the summer working at the same place as my dad :)";
                    $("#bubble").html(string);
                    break;
                case "bakerssquare":
                    string = "<h4>hostess/cashier</h4>";
                    string += "<div id='duration'><i>Jul 2008 - Aug 2008</i></div>";
                    string += "My first real job, working at a pie shop back when I didn't like pies. It was short-lived; one day I showed up to work and the manager was standing outside locked doors handing out final paychecks. My first and only lay-off.";
                    $("#bubble").html(string);
                    break;
                case "nuscs":
                    string = "<h4>administrative assistant</h4>";
                    string += "<div id='duration'><i>Jan 2011 - Jun 2011</i></div>";
                    string += "I honestly don't remember anything about this job other than that it was my first in college and that I tried to read astronomy research on the commute to work.";
                    $("#bubble").html(string);
                    break;
                case "ymca":
                    string = "<h4>accounting clerk</h4>";
                    string += "<div id='duration'><i>Jun 2012 - Jun 2013</i></div>";
                    string += "Helping with some of the administrative accounting tasks in a tiny financial department. One of my desks was in a little window nook, and the other one was inside a file closet. Yay, non-profits!";
                    $("#bubble").html(string);
                    break;
                case "pegasus":
                    string = "<h4>assistant referee</h4>";
                    string += "<div id='duration'><i>Apr 2007 - Jun 2010</i></div>";
                    string += "Running soccer sidelines for cold hard cash. Parents who get overly invested in their kids' soccer games really suck :(";
                    $("#bubble").html(string);
                    break;
                case "nuim":
                    string = "<h4>referee</h4>";
                    string += "<div id='duration'><i>Mar 2011 - Jun 2013</i></div>";
                    string += "Finally gaining the courage to be the center ref in soccer and learning how to officiate volleyball and floor hockey.";
                    $("#bubble").html(string);
                    break;

                //

                case "finkel":
                    string = "<h4>research assistant</h4>";
                    string += "<div id='duration'><i>Sep 2013 - Jun 2014</i></div>";
                    string += "Doing research in the Self Control and Relationships Lab was basically my favorite thing ever. We got to observe freshman on blind dates and teach our confederates how to flirt. Super good times.";
                    $("#bubble").html(string);
                    break;
                case "psych":
                    string = "<h4>research assistant</h4>";
                    string += "<div id='duration'><i>Jan 2013 - Jun 2013</i></div>";
                    string += "Helping with research in the Cognition and Motivation Lab. Mostly I sat in a room with a video camera and was instructed not to smile or be nice to people in order to induce and observe anxiety.";
                    $("#bubble").html(string);
                    break;
                case "math":
                    string = "<h4>teaching assistant</h4>";
                    string += "<div id='duration'><i>Sep 2009 - Jun 2010</i></div>";
                    string += "Teaching high school freshmen how to do algebra, which sometimes involved using the numbers on the football players' jerseys for in-class demos.";
                    $("#bubble").html(string);
                    break;
                case "dhs":
                    string = "<h4>deerfield high school</h4>";
                    string += "<div id='duration'><i>Sep 2006 - Jun 2010</i></div>";
                    string += "Nearly straight-A student, but still not in the top 10% of my graduation class. Go Warriors!";
                    $("#bubble").html(string);
                    break;
                case "nu":
                    string = "<h4>northwestern university</h4>";
                    string += "<div id='duration'><i>Sep 2010 - Jun 2014</i></div>";
                    string += "Meow meow meow meow meow go kitty 'Cats! Though I graduated with a BA in Psychology and Economics, I spent a good portion of undergrad studying Statistics. I was also one class away from completing a minor in Environmental Policy, but decided to finish my Business minor instead.";
                    $("#bubble").html(string);
                    break;
                case "caruso":
                    $("#carusofade").mouseover();
                    string = "<h4>caruso middle school</h4>";
                    string += "<div id='duration'><i>Sep 2005 - Jun 2006</i></div>";
                    string += "We'll begin this timeline journey in 8th grade, because that felt like the first time I had the responsibility to make consequential decisions in my life. Go Bluejays!";
                    $("#bubble").html(string);
                    break;
                case "carusofade":
                    $("#caruso").mouseover();
                    alert('test');
                    break;
                //

                case "sai":
                    string = "<h4>sigma alpha iota</h4>";
                    string += "<div id='duration'><i>Apr 2011 - Jun 2014</i></div>";
                    string += "International Music Fraternity—for women! Grateful for the opportunity I had to step outside my comfort zone and learn to sing in the all-members choir (Alto II), I gained the courage to spend a hot second in Ladies in Red, our no-audition a capella group. I also spent a year-long stint as Treasurer, and helped out here and there with crafty things. Love and roses!~";
                    $("#bubble").html(string);
                    break;
                case "goodkarma":
                    string = "<h4>good karma cafe</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2009</i></div>";
                    string += "The open mic night where all the cool angsty artsy kids and I hung out. I never performed anything, but I always had a lot of fun. Good Karma is also where I met my first ever boyfriend. We lasted a whole three weeks.";
                    $("#bubble").html(string);
                    break;
                case "actuary":
                    string = "<h4>actuary club</h4>";
                    string += "<div id='duration'><i>Jan 2011 - Mar 2013</i></div>";
                    string += "Boastful leader and co-founder of the Northwestern University Actuary Club. We had like 60 people on the mailing list but it fell apart after I decided I didn't want to be an actuary. Even still, the occasional alumnus who went off to Allstate will try to recruit in our Facebook group.";
                    $("#bubble").html(string);
                    break;
                case "earthworks":
                    string = "<h4>earthworks</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2010</i></div>";
                    string += "The environmental club. Cleaning up trash and cutting down invasive trees n stuff. Managed to become a co-president alongside three of my close friends. They're all doing a much better job of saving the world than I am, these days.";
                    $("#bubble").html(string);
                    break;
                case "numb":
                    string = "<h4>marching band</h4>";
                    string += "<div id='duration'><i>Sep 2010 - Jun 2014</i></div>";
                    string += "Cymbal player extraordinaire. Favorite memories include College Gameday (2013), winning the Gator Bowl (2013), a gnarly drum battle against Michigan (2012), an upset against Iowa (2010), and performances at Wrigley Field, Soldier Field, The United Center, and Millennium Park.";
                    $("#bubble").html(string);
                    break;
                case "dhsmb":
                    string = "<h4>marching band</h4>";
                    string += "<div id='duration'><i>Sep 2008 - Jun 2010</i></div>";
                    string += "Peer pressured into joining marching band by some of the upperclassmen, I found myself playing snare for two years. I gained some confidence when I had my first ever solo in the Homecoming game senior year.";
                    $("#bubble").html(string);
                    break;
                case "reach":
                    string = "<h4>reach</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2008</i></div>";
                    string += "The anti-drug club. I much prefer my current, less judgmental sentiment. Also, I won a DARE contest in elementary school with a plagiarised poster. Oops.";
                    $("#bubble").html(string);
                    break;
                case "volleyball":
                    string = "<h4>volleyball</h4>";
                    string += "<div id='duration'><i>Sep 2005 - Nov 2006</i></div>";
                    string += "One day I decided I wanted to play volleyball, so I tried out for the middle school team and wasn't half bad! I went on to play Club for a season and stopped playing after I made the B-team in high school. I still like to play for fun :)";
                    $("#bubble").html(string);
                    break;
                case "track":
                    string = "<h4>track</h4>";
                    string += "<div id='duration'><i>Jan 2007 - Jun 2007</i></div>";
                    string += "I attempted a season on the track team in defiance of soccer, which I'd gotten somewhat tired of. I hated track and the feeling of running aimlessly, but I was randomly good at triple jump, for which I competed on the JV and Varsity level.";
                    $("#bubble").html(string);
                    break;
                case "soccer":
                    string = "<h4>soccer</h4>";
                    string += "<div id='duration'><i>Sep 2000 - Jun 2010</i></div>";
                    string += "Preceeded by many years of AYSO, I spent 10 years playing for Pegasus Soccer Club, and a total of 4 years on various co-ed/JV/Varsity school teams. I spent most of my time as an outside mid, but also played in the goal for a long while. These days I enjoy a good pick-up game or rec league.";
                    $("#bubble").html(string);
                    break;
                case "percussion":
                    string = "<h4>percussion</h4>";
                    string += "<div id='duration'><i>Jan 2001 - Jun 2010</i></div>";
                    string += "A couple years in pit band, wind ensemble, orchestra winds, etc. One time I got to play in Disneyworld! Despite 9 or so years of playing, I never really learned how to read music.";
                    $("#bubble").html(string);
                   }
	        }
	});
}

function isOverflowed(element){
    return element.scrollWidth > element.clientWidth;
}

var alignHeight = 17; //height = 14, padding = 3;

var jan = 0/12;
var feb = 1/12;
var mar = 2/12;
var apr = 3/12;
var may = 4/12;
var jun = 5/12;
var jul = 6/12;
var aug = 7/12;
var sep = 8/12;
var oct = 9/12;
var nov = 10/12;
var dec = 11/12;

var getDate = new Date();
var today = getDate.getFullYear() + getDate.getMonth() / 12;

var beginDate = 2005 + sep;
var totalMonths = (today - beginDate) * 12;

var filler = ["", "filler", "filler", may + 1992, jun + 1992, true];

var aboutMe = [
	//["innerHTML", "className", "idName", "startTime", "endTime", new row? (boolean), "hovertext (point to a variable?)"]
	["dream&nbsp;&nbsp;", "me", "dream", apr + 2013, jul + 2014, true],
	["work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "wrk", jan + 2015, today, false],
	["happy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "happy", jan + 2013, today, true],
	["spaghetti nest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "spaghettinest", oct + 2012, today, true],
	["52 weeks&nbsp;&nbsp;", "me", "52weeks", sep + 2012, nov + 2013, true],
	["maestro&nbsp;&nbsp;", "me", "maestro", dec + 2013, jan + 2015, false],
	["date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "date", aug + 2012, today, true],
	["okanalytics&nbsp;&nbsp;", "me", "okc", jul+ 2012, jul + 2013, true],
	["robinwe.is&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "website", mar + 2015, today, false],
	["sorry&nbsp;&nbsp;", "me", "sorry", aug + 2013, jun + 2014, false],
	["texts/memos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "texts", jun + 2012, today, true],
	["journey of a bird&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "journal", dec + 2005, today, true],
	["master/ghostship", "me", "ghostship", nov + 2013, today, true],

	filler,

	["hostess&nbsp;&nbsp;", "work", "bakerssquare", jul + 2008, aug + 2008, false],
	["assistant&nbsp;&nbsp;", "work", "nuscs", jan + 2011, jun + 2011, false],
	["clerk&nbsp;&nbsp;", "work", "ymca", jun + 2012, jun + 2013, false],
	["cry&nbsp;&nbsp;", "me", "cry", feb + 2014, today, false],
	["assistant referee&nbsp;&nbsp;", "work", "pegasus", apr + 2007, jun + 2010, true],
	["referee&nbsp;&nbsp;", "work", "nuim", mar + 2011, jun + 2013, false],
	["developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "work", "mcm", sep + 2014, today, true],
	["program coordinator&nbsp;&nbsp;", "work", "cia", jun + 2013, sep + 2013, false],
	["assistant&nbsp;&nbsp;", "work", "cradle", jun + 2011, jun + 2012, false],
	["tutor&nbsp;&nbsp;", "work", "tutor", sep + 2012, may + 2013, false],
	["clerk&nbsp;&nbsp;", "work", "vmi", jul + 2009, aug + 2009, false],

	filler,

	["ra&nbsp;&nbsp;", "college", "finkel", sep + 2013, jun + 2014, true],
	["ra&nbsp;&nbsp;", "college", "psych", jan + 2013, jun + 2013, false],
	["ta&nbsp;&nbsp;", "hs", "math", sep + 2009, jun + 2010, false],
	["deerfield high school&nbsp;&nbsp;", "hs", "dhs", sep + 2006, jun + 2010, true],
	["northwestern university&nbsp;&nbsp;", "college", "nu", sep + 2010, jun + 2014, false],
	//["", "fade", "carusofade", jun + 2005, oct + 2005, false],
	["&laquo;&nbsp;caruso&nbsp;&nbsp;", "hs", "caruso", sep + 2005, jun + 2006, false],

	filler,

	["sigma alpha iota&nbsp;&nbsp;", "college", "sai", apr + 2011, jun + 2014, true],
	["good karma&nbsp;&nbsp;", "hs", "goodkarma", sep + 2007, jun + 2009, false],
	["actuary club&nbsp;&nbsp;", "college", "actuary", jan + 2011, mar + 2013, true],
	["earthworks&nbsp;&nbsp;", "hs", "earthworks", sep + 2007, jun + 2010, false],
	["marching band&nbsp;&nbsp;", "college", "numb", sep + 2010, jun + 2014, true],
	["marching band&nbsp;&nbsp;", "hs", "dhsmb", sep + 2008, jun + 2010, false],
	["reach&nbsp;&nbsp;", "hs", "reach", sep + 2007, jun + 2008, false],
	["&laquo;&nbsp;volleyball&nbsp;&nbsp;", "hs", "volleyball", sep + 2005, nov + 2006, false],
	//["", "fade", "volleyballfade", jun + 2005, oct + 2005, false],
	["track&nbsp;&nbsp;", "hs", "track", jan + 2007, jun + 2007, false],
	["&laquo;&nbsp;percussion&nbsp;&nbsp;", "hs", "percussion", sep + 2005, jun + 2010, true], // actually started in 3rd grade, not 6th grade
	//["", "fade", "percussionfade", jun + 2005, oct + 2005, false],
	["&laquo;&nbsp;soccer&nbsp;&nbsp;", "hs", "soccer", sep + 2005, jun + 2010, true], //apr 2000 start?
	//["", "fade", "soccerfade", jun + 2005, oct + 2005, false],
	
	filler,
	
	//["&laquo;", "tick", "2005tick", 2005, 2006, true],
	["PAST", "timeline", "2005", 2005, 2006, true],
	["|", "tick", "2006tick", 2006, 2007, false],
	["2006", "timeline", "2006", 2006, 2007, false],
	["|", "tick", "2007tick", 2007, 2008, false],
	["2007", "timeline", "2007", 2007, 2008, false],
	["|", "tick", "2008tick", 2008, 2009, false],
	["2008", "timeline", "2008", 2008, 2009, false],
	["|", "tick", "2009tick", 2009, 2010, false],
	["2009", "timeline", "2009", 2009, 2010, false],
	["|", "tick", "2010tick", 2010, 2011, false],
	["2010", "timeline", "2010", 2010, 2011, false],
	["|", "tick", "2011tick", 2011, 2012, false],
	["2011", "timeline", "2011", 2011, 2012, false],
	["|", "tick", "2012tick", 2012, 2013, false],
	["2012", "timeline", "2012", 2012, 2013, false],
	["|", "tick", "2013tick", 2013, 2014, false],
	["2013", "timeline", "2013", 2013, 2014, false],
	["|", "tick", "2014tick", 2014, 2015, false],
	["2014", "timeline", "2014", 2014, 2015, false],
	["|", "tick", "2015tick", 2015, 2016, false],
	["PRESENT", "timeline", "2015", 2015, 2016, false]
	
	//["&raquo;", "tick", "2016tick", 2016, 2016 + mar, false]
];

var setWidth = function(entryStartTime, entryEndTime) {
	var monthsBetweenStartAndEnd = (entryEndTime - entryStartTime) / (1/12);
	var width = monthsBetweenStartAndEnd / totalMonths;
	return width * 100;
};

var setLeft = function(entryStartTime) {
	var monthsBetweenStartAndEntry = (entryStartTime - beginDate) / (1/12);
	var leftPadding = (monthsBetweenStartAndEntry / totalMonths);
	return leftPadding * 100;
};

var innerHTML = function(index) {
	var myInnerHTML = aboutMe[index][0];
	return myInnerHTML;
};

var className = function(index) {
	var myClassName = aboutMe[index][1];
	return myClassName;
};

var idName = function(index) {
	var myIdName = aboutMe[index][2];
	return myIdName;
};

var beginTime = function(index) {
	var myBeginTime = aboutMe[index][3];
	return myBeginTime;
};

var endTime = function(index) {
	var myEndTime = aboutMe[index][4];
	return myEndTime;
};
