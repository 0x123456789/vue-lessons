import AssigmentList from "./AssigmentList.js"
import Create from "./Create.js"

export default {
    components: { 
        AssigmentList,
        Create
    },
    template:`
        <section class="space-y-6"> 
            <assigment-list :assigments="filters.inProgress" title="In Progress"></assigment-list>
            <assigment-list :assigments="filters.completed" title="Completed"></assigment-list>
            
            <create @add="add"></create>
        </section>
    `,
    data() {
        return {
            assigments: [
                {id: 1, name: "Math", completed: false, tag: 'math'},
                {id: 2, name: "English", completed: false, tag: 'english'},
                {id: 3, name: "Philosophy", completed: false, tag: 'other'},
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assigments.filter(assigment => ! assigment.completed),
                completed: this.assigments.filter(assigment => assigment.completed)
            }
        }
    },
    methods: {
        add(name) {
            this.assigments.push({
                name: name,
                id: this.assigments.length + 1,
                completed: false,
                tag: 'other'
            })
        }
    },



}