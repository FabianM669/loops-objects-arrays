var mainArray =[

	{

		"firstName":"Amanda",
		"lastName":"Harris",
		"age":42,
		"gender":"female",
		"children":[

			{
				"name":"Ben",
				"age":18,
				"gender":"male"
			},

			{
				"name":"Lisa",
				"age":15,
				"gender":"female"
			}
		]
	},

	{
		"firstName":"Brian",
		"lastName":"Hall",
		"age":36,
		"gender":"male",
		"children":[

			{
				"name":"Erica",
				"age":11,
				"gender":"female"
			},

			{
				"name":"Jenny",
				"age":8,
				"gender":"female"
			}
		]
	},

	{
		"firstName:":"Terrence",
		"lastName": "Hall",
		"age":49,
		"gender":"male",
		"children":[

			{
				"name":"David",
				"age":17,
				"gender":"male"
			},

			{
				"name":"Alex",
				"age":23,
				"gender":"female"
			},

			{
				"name":"Joe",
				"age":25,
				"gender":"male"
			}
		]
	},

	{
		"firstName":"Alyssa",
		"lastName":"Ingram",
		"age":28,
		"gender":"female",
		"children":[

			{
				"name":"Jamie",
				"age":3,
				"gender":"female"
			},

			{
				"name":"Lori",
				"age":2,
				"gender":"female"
			}
		]

	}

];

var i = 0;
var children;

while(i < mainArray.length){
	children = mainArray[i].children
	children[children.length] = {

		name: "newChild",
		age: 5,
		gender: "male"
	}

	
	i++;
}

var i = 0;

for(; i < mainArray.length; i++){
	if(mainArray[i].gender === "male"){

		mainArray[i].age += 5;
	}
	console.log(mainArray[i].age);
}



var i= 0;
var totalAge = 0;
for(; i < mainArray.length; i++){
	totalAge += mainArray[i].age;
}

console.log("totalAge: " + Math.floor(totalAge/mainArray.length) );


var i = 0;
var ci = 0;
var maleTotalAge = 0;
var maleChildCount = 0;
var femaleTotalAge = 0;
var femaleChildCount = 0;

for(; i < mainArray.length; i++){

		mainArray[i].children
		for(ci=0; ci < mainArray[i].children.length; ci++){
			var thisChild = mainArray[i].children[ci];
			console.log(thisChild.name + " ("+ thisChild.age + "," + thisChild.gender + ")");
				if(thisChild.gender === "male"){

					maleTotalAge += thisChild.age;
					maleChildCount++;
				}	

				if((thisChild.gender ==="female") && (thisChild.age < 12)){
				
					femaleTotalAge += thisChild.age;
					femaleChildCount++;

				}
		}
	}		


console.log("average male child age: " + Math.floor(maleTotalAge/maleChildCount));
console.log("average female child age: " + Math.floor(femaleTotalAge/femaleChildCount));



