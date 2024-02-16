const INFO = {
	main: {
		title: "Reactfolio by Chaygois",
		name: "Tharindu N.",
		email: "chayannygois18@gmail.com",
	},

	socials: {
		github: "https://github.com/Chaygois",
		linkedin: "https://www.linkedin.com/in/chayanny-gois-770611210/",
		instagram: "https://instagram.com/codechayg",
	},

	homepage: {
		title: "Software quality assurance analyst",
		description:"Welcome to my world of development and quality! I am passionate about technology, recently graduated in Systems Analysis and Development, with a burning passion for seeking excellence in each line of code. At 22 years old, I bring a diverse background, having delved into the challenging waters of Software Quality (QA), explored the intricacies of backend development and even collaborated on frontend projects. My journey is a constant search for improvement and innovation, always ready for the next challenges that the world of technology may offer.",
	},

	about: {
		title: "I’m Chay G. I live in , where I design the future.",
		description:
		"Hello, I'm Chay G. I live in Fortaleza- CE BR, where I shape the future as a Quality Assurance (QA) professional.Over the years, I have contributed to a variety of projects and am proud of the progress I have made. Many of these projects are open source, available for other professionals to explore and contribute to. If you're interested in any of the projects I've worked on, feel free to check out the code and suggest improvements or enhancements. Collaborating with others is a great way to learn and evolve, and I m always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Todo List App",
			description:
				"Todo List is a task management app that includes a built-in clock, giving you the feel of a physical notebook. It allows you to add, edit, complete and delete tasks..",
			logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			linkText: "View Project",
			link: "https://github.com/Chaygois/todolistt",
		},

		{
			title: "PURE TailwindCSS Responsive Facebook and Dark Mode",
			description:
				"Facebook Home page (Responsive) DarkMode using only TailwindCSS",
			logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
			linkText: "View Project",
			link: "https://github.com/Chaygois/facebook-tailwind-responsive",
		},

		{
			title: "CRUD CAR API with node JS",
			description:
				"Car API",
			logo: "https://www.stickersdevs.com.br/wp-content/uploads/2022/01/nodejs-logo-adesivo-sticker.png",
			linkText: "View Project",
			link: "https://github.com/Chaygois/API-CARROCRUD",
		},
		{
			title: "Web-Test-Automation",
			description:
				"Web project with tests in selenium web driver.",
			logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAkFBMVEUAtAD///8AsgCO1I9gwGEArgAAsAAArQCk3KP39/jq9+r3/Pes36zF6MX9//2f2p/Z8Nne8t5lx2WC0IJAvkC24rbx+vFryWuY2Jjj9OPM68wouSg4vDiI0oi55LlQwlBbxVtzzHN5zXkvui9LwEsbtxvS7dJdxV2U1pPI6ch2yHf++v7A5r93zXZEv0S447eha/c4AAAMEUlEQVR4nO2daXuCvBKGaTyJvrjgUnetW7XtObbv//93x60KZDIziRQMl8/XSshdQpYnkyH457//KYcq//snrWCkgnKo2nxJK6iIomuVkapheeFUQ2MrDZxY6mylgQsAtrLAVdvlhVMjiK0ccOIdZCsJXL28cNUJzFYGODU3sJUBbmZiKwGcGpQXTu6NbN7DibWZzXu4KcLmO5zS1zmlgZN9jM1vODFE2fyG2+JsXsPJcXnhVI1g8xgONBbKAhe0ygsnQWOhHHAGY6EUcCZjoRxwBmOhDHBGY6EEcGZjoQRwZmPBfzjEWIipHvoIhxkLN7Wr1aZ/cKixcFWoAjH3Dw41Fq5t8vBDUfEOTqLGwq+mwkc4wli46OcI5R0cZSyc1T0xeQdHGQsn9c4BGr7BkcbCUZE8/9gzONpYOOitevm1X3AMY+HlZVe9/twrOIax8DK+BUR5BQdHLCQ1iNH4BMcxFlrb2AUewbGMhVkcxic4hrGwTLD4AycZxsIqGV3pDRzHWKikIke9gWMYCw2ZusYXOIax0KymL/IEjmEstNPPzRc4hrEQApHafsDRxkIduqw4OMG/LcNYmEKlFQan1nPufRnGwjtYVlFwxyF5wLsxw1jowiUVBHeeA49ZxzVoY6FnKKcYOLE412qnd9+aaGMhMpVS0JP7rddeG3jToo2FN2MZhcDJzrVm2pQpJdpYQJ5+EXCJcynpyW5alLGAvbcFwKV6vxVGRxoLaI9bAFx6urE03580FhKugqb84fQAyZmpArSxYLz0fH3ecND83vTvJ40F5KGfrs8ZTvWAOg7g35LGAvq6BrnDCXhBDXZ5pLFAdbS5wxkaGrDSJI0FaojMG87c0HSPgDIW9Cs05QqnPvnPgTIWoGedVq5wC6y2n4k3iDIWIFdBU55wCp/ff8frSxgLoKugKVc44i2KjVqUsQC6CpryhBMrvMYvr781UYSx8MNcw+faoUAjeOKBXCpFGAsGV0FTvkMBNS5fXiWB/8rkKmjKeRBXFbzep06QMBaMroKmvOeWEhnqjmpXRRU3Fsyugqb8VwUR8ewifLrM8ZR+lf96TnJCSYziuYEXFbASl0BqD66YPu5FRRhE7nS4q6CpEGuvyooqBIS7CpqKMWWrb05sC8uaFuQ4V1kh2ClRroKmonZ5gExPlEhXQVNh+3OcsJKEaFdBU3E7q3JnxcZwFTQVuCduRcdxFTQVueGvGBGGF7FcBU2FRjOoDo11Es9V0FRsqAbhqlzFcxU0FRyHwqNjugqaig6yEYyzK1xXQS+86Agimo7tKuhlFw0XBIThF7mn33wAOJzuzWWAu+gR4AJkj3HnMDG56iHgtkY6K1dB00PAia0hIMPOVdDLfQS4QExBOktXQS/2IeACsYHgLF0FvdTHgAM3y4lYBUahznAirjtrcSzuNc1m7SroZTrACaFk8NNdV0ZRrdGoRaPe6l1Ipe58+3+SbPaugl6kLZyQ2+9GW++7W53+/EfeA5iMF3JwFfQSreCEXDSwuWDrqxe484nYnrmLq6AXaAGntjXGQaj2PHBtULfgSidXQS+PDadmbDeuuZCOndTHuQA3V0EvjgmntlZG43jlhqe6x6sdXQVNTDhqV01XOHRqWWp4eHMdXQVNLDgxZXodCXV+XBqX2A4drjKUxYBTrHQIgN6cRvfsJkwMOMnJHgar5dY2sxINd98271uR3+gg4ZR1V5LUYFPcvJyC4+X7QfWeG4xWeQKOm2AL0b6wlknA8RJs4aoV1i5xOOiDKbbKaCrlIhyOlYSK0DRHmpRQOOWyLZ/SqkATA4UznzkcN9aL7WEusd0sVp//Itts/SJHcQxOmIbv2lbeJlZCKKUWEQwYPuwMRcJL0ya0GBUqqAB8dxqPdwqDgyPlRyYDQMhZOjDIeWctGyFwcKtEYzmVSER1NQr++BsCBwYbtIj6qu3X9bdj6xfu9P6elIUVisJB/n1E3lQuf19VO8vwAPTei/pfu91u0uxHvYW4yyg8lWmGAweCH041z6/eh0XVlOr2tdV+uF/fYRQGKBzYn7DuJY9Ld/52r5BL42xh930HnhkOPrnAq7GYjobs4H/VQ/f8W5G7D2qG+4ZuxS6Xe2hDzmmjN3J8erZw39mOXGrByqFa/8g49gs+VpTtfEqxw4GdvBgEDs6KkMkOxeUOM1Zy97MGDk4t0lsaHIZ2VsaiWvHRjrLfaMWmX6a7fKosplX2dmg3wwBuafZPGjPHbZxY6Q52qO2zw6ZfX8h9xtHrXbMj+52Vo17t7og1S+KsW32/3roCcr83kFLL7i7Yeo5hD4VvvakDICvxLaSO1UiErsR5Icj1ZsW2ibIyTYOyClBEPRTq/OxNrUllxgc0/tfCxmoq5EHbD4Mp8zLLCC5QFoPsYZjtD3mxKKYsBvufm+8khNyAZ7VsGiYKJ6xf+69vxhgIN8rOLH2lmkJegIURijvOvE8DJPVGhTJIcIgBfacqMNAP+I+O2Ahx2uQJ52jrBBMLGZZ/Clia9NiPjtrl4fcpcbVGZjzwCI9xaQtUgL8wofbnXM+XtnqmKkCNYWR+UYH8j2xzhtw25n21AtBY6yBOgpZwbWwZpU9xm9mlL3Df8Af7CGitge5yia72+8yeHPxS8zTR/8XQHjuxytZTNXC9Dk6Qjdi4BBAdFer/KeA054a4vdancHfZebFfVLoIo7TYeaX/hnbd01fUmf0lM7BNBI79SvrUA7AcIB16/Qwhc4LJjrdUWze8ZuK/LIApB7m+1pP2MMdxi0hZJT5dAjcSFYFW94eCcUlt1dxnGt82Mc5CLvqMT5CkKx+HAyar/RqhSJs/d/4A7lg7texbPr94Tw/0Jy5i9ij25wqEkpuK1fH82Ma4+xI8qczfuSTgYjThttDG7QbasQ9H8brLO467KDmbNzlNNLbV7GoMpcWbO993UOkAOO3tSTPiWhVn1yst3gTs/lNYB8DXEZ6IoJE5HC9jfjZHzIQK5ogPeO25M4Pj1Tmz83NCIidGrnAfGcGN8oU7SG1MT++6YMvqyfECVLM9+WjKJLf8/QHrO9kPCmdatl+9xiyiU4+iY33+AC6oguva6+SZSO7I1ZhXmazhAMfjJda5QVGOc2pVoCuzlbhawDaW6ecoHBQs93fR67S1d+jg/7XYfAAd+FuzBGxQ5vrFQRTceQt0x78/tGJ7GV7hICetsCd3OXnPjwIBm+XtxAvUo/BGZAdRewXX57Bmrg/BOcjt71C+WK6ZZS3+iZAJK7gG3OaI1V5AUQzsD0dZCt98TD6GCh18Ao8E8VcWzDCRDYteG/TJpeowoM4Qw8kxEvMJcD98kl1AWaI6CFxVb2LhN4anDFPH+Ak6+EDeJ9UdC5eQLCyCCAyyqUdTA58wfdkp2WHAUQRrYjNkGO7yiNo7jLqjY9xJ8qrDjOjTZDc0Ej81RBHMkS5TBcelol2ADQ6HngtsTUbdqZKXQwBSLEZIPsfULo4hAOTNtNMsfo/NWicRMcJxdlQH4/bua7Ib4w5Renpjyuw/WALt/dAioquFaHsUzwTH+FwfV9pRBGPWzl0S7zD7F6u4/Wt7xMQEp+ySoiL60huT2Xce1Jbi3Nilmg61TQLL1HRGuAwOPZ4FlI5/ciJsT3btDvzGv2YCFwSuW8UpraHSnROMD6weHdJb2mdaBrSHXxPJTyeblNWpNSzG2XUjPCbjQpSTtBPUIhu4w2zKKiQRUGieVbjSWaybiVWBuK9bGWMzJuH2UtskQyAWq/LjjocHxNjEhUa/m7Tjo9E2g3E2TOuTWsdA0ZSE1lZrI4a1t3VqmyEjA5Fa2LWLveVJG1YOoo09XoU1UxI2mS3a73/zvQK1bdiEaLQi9mFhNWOOeLvF36X0V2rNnW2O8SjgtOSCUXB/9rdZ74+7p3Q1xjX7M0xq00Dfvcna8diXXQSRUh/RzliRTn8duJ3OEnJpyL7YaXTdE2fa7vIcE3duu5XGVycctF5arXp9EI53zcbncKbuSt8pZDAc7dthvfVb6L7We73vqL/TFpY4pRk4rruklJdsAxn4qr+lykupd5f5KAlz/0RPOF/1hPNVTzhf9YTzVU84X/WE81VPOF/1hPNVTzhf9YTzVU84X3WAC4lD6P5qNvg/qJqbnYseZx8AAAAASUVORK5CYII=",
			linkText: "View Project",
			link: "https://github.com/Chaygois/Web-Test-Automation",
		},

		{
			title: "Performance Testing Course with k6",
			description:
				"The project is a course titled Performance Testing with k6, covering fundamental concepts and practical applications of the k6 tool for assessing APIs and web services. Topics include an introduction to performance testing, as well as specific tests like Smoke Test, Load Test, Stress Test, Spike Test, and guidance on setting up checks and thresholds with k6.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/K6-logo.svg",
			linkText: "View Project",
			link: "https://github.com",

			
		},
		{
			title: "Api-Node-com-Testes-SOLID ",
			description:
				".",
			logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
			linkText: "View Project",
			link: "https://github.com/Chaygois/Api-Node-com-Testes-SOLID",

			
		}
		
	],
};

export default INFO;
