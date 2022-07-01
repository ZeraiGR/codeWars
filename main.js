document.addEventListener('DOMContentLoaded', function () {
	
	let person = {
		name: 'Kirill',
		age: 21,
		alive: true,
		hobbies: ['coding', 'sport', 'learning'],
		education: {
			school: {
				name: 'Gimnazia #1',
				duration: 11,
				status: 'Immidiatle'
			},
			university: {
				name: 'SWSU',
				duration: 4,
				status: 'High'
			}
		},
		teachers: {
			teacherOne: {
				name: 'Anna',
				age: 45,
				place: 'Gimnazia #1'
			},
			teacherTwo: {
				name: 'Alena',
				age: 46,
				place: 'Gimnazia #2'
			}
		}
		// ...
	};

	let person2 = {...person, teachers: {...person.teachers}};
	person.teachers.teacherThree = {
				name: 'Oleg',
				age: 34,
				place: 'MGU'};

	console.log(person2.teachers);





});
