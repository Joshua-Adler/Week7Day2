//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
	pizza: ["Deep Dish", "South Side Thin Crust"],
	tacos: "Anything not from Taco bell",
	burgers: "Portillos Burgers",
	ice_cream: ["Chocolate", "Vanilla", "Oreo"],
	shakes: [{
		oberwise: "Chocolate",
		dunkin: "Vanilla",
		culvers: "All of them",
		mcDonalds: "Sham-rock-shake",
		cupids_candies: "Chocolate Malt"
	}]
}

function favoriteFood(person) {
	for (key in person) {
		if (typeof person[key] == 'string') {
			console.log(person[key]);
		} else {
			favoriteFood(person[key]);
		}
	}
}

favoriteFood(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	printInfo = () => {
		console.log(`(${this.name} is ${this.age} years old)`);
	}

	incrementAge = () => {
		this.age++;
	}
}

p1 = new Person('Jimmiliybob', 70);
p2 = new Person('Richard', 28);
p1.printInfo();
p2.printInfo();
// Don't ding me, it's less effort to copy-paste twice than to make a for loop
p2.incrementAge();
p2.incrementAge();
p2.incrementAge();
p2.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

	Create a Promised based function that will check a string to determine if it's length is greater than 10.
	If the length is greater than ten console log "Big word".
	If the length of the string is less than 10 console log "Small Number"
*/

function isBig(str) {
	return new Promise( (resolve, reject) => {
		resolve(str.length < 10 ? 'Small Number' : 'Big Word');
	});
}

let str = 'AccordingtoallknownlawsofaviationthereisnowayabeeshouldbeabletoflyItswingsaretoosmalltogetitsfatlittlebodyoffthegroundThebeeofcoursefliesanywaybecausebeesdontcarewhathumansthinkisimpossibleYellowblackYellowblackYellowblackYellowblackOohblackandyellowLetsshakeitupalittleBarryBreakfastisreadyOomingHangonasecondHelloBarryAdamOanyoubelievethisishappeningIcantIllpickyouupLookingsharpUsethestairsYourfatherpaidgoodmoneyforthoseSorryImexcitedHeresthegraduateWereveryproudofyousonAperfectreportcardallBsVeryproudMaIgotathinggoinghereYougotlintonyourfuzzOwThatsmeWavetousWellbeinrowByeBarryItoldyoustopflyinginthehouseHeyAdamHeyBarryIsthatfuzzgelAlittleSpecialdaygraduationNeverthoughtIdmakeitThreedaysgradeschoolthreedayshighschoolThosewereawkwardThreedayscollegeImgladItookadayandhitchhikedaroundthehiveYoudidcomebackdifferentHiBarryArtiegrowingamustacheLooksgoodHearaboutFrankieYeahYougoingtothefuneralNoImnotgoingEverybodyknowsstingsomeoneyoudieDontwasteitonasquirrelSuchahotheadIguesshecouldhavejustgottenoutofthewayIlovethisincorporatinganamusementparkintoourdayThatswhywedontneedvacationsBoyquiteabitofpompunderthecircumstancesWellAdamtodaywearemenWeareBeemenAmenHallelujahStudentsfacultydistinguishedbeespleasewelcomeDeanBuzzwellWelcomeNewHiveOitygraduatingclassofThatconcludesourceremoniesAndbeginsyourcareeratHonexIndustriesWillwepickourjobtodayIhearditsjustorientationHeadsupHerewegoKeepyourhandsandantennasinsidethetramatalltimesWonderwhatitllbelikeAlittlescaryWelcometoHonexadivisionofHonescoandapartoftheHexagonGroupThisisitWowWowWeknowthatyouasabeehaveworkedyourwholelifetogettothepointwhereyoucanworkforyourwholelifeHoneybeginswhenourvaliantPollenJocksbringthenectartothehiveOurtopsecretformulaisautomaticallycolorcorrectedscentadjustedandbubblecontouredintothissoothingsweetsyrupwithitsdistinctivegoldenglowyouknowasHoneyThatgirlwashotShesmycousinSheisYeswereallcousinsRightYourerightAtHonexweconstantlystrivetoimproveeveryaspectofbeeexistenceThesebeesarestresstestinganewhelmettechnologyWhatdoyouthinkhemakesNotenoughHerewehaveourlatestadvancementtheKrelmanWhatdoesthatdoOatchesthatlittlestrandofhoneythathangsafteryoupouritSavesusmil';

isBig(str).then((out) => {
	console.log(out);
});