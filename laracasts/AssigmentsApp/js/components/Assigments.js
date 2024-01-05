import AssigmentList from "./AssigmentList.js"
import Create from "./Create.js"

export default {
    components: { 
        AssigmentList,
        Create
    },
    template:`
        <section class="flex gap-8"> 
            <assigment-list :assigments="filters.inProgress" title="In Progress">
                <create @add="add"></create>
            </assigment-list>
            <assigment-list 
                v-if="showCompleted"
                :assigments="filters.completed" 
                title="Completed"
                can-toggle
                @toggle="showCompleted = !showCompleted"
            ></assigment-list>
            

        </section>
    `,
    data() {
        return {
            assigments: [
                {id: 1, name: "Math", completed: false, tag: 'math'},
                {id: 2, name: "English", completed: false, tag: 'english'},
                {id: 3, name: "Philosophy", completed: false, tag: 'other'},
            ],
            showCompleted: true
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