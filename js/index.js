var app = new Vue({
	el: '#app',
	data: {
		attrrubute: true,
		attrrubute2: false,
		classA: 'A',
		isB: false,
		isC:true,
		
		someProp:'idName',
		otherProp: 'prop',

		field: 'tag',
		reverse: false,
		users: [{
				name: '快车',
				tag: 1
			},
			{
				name: '出租车',
				tag: 3
			},
			{
				name: '顺风车',
				tag: 2
			},
			{
				name: '专车',
				tag: 0
			}
		]
	},
	/*computed: {
		orderedUsers: function() {
			return _.orderBy(this.users, 'name')
		}
	}*/
})