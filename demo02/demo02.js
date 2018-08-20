Vue.component('todo-item', {
	template: '<li>This is a todo</li>'
})

Vue.component('todo-item2', {
	props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
	el: "#app",
	data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})