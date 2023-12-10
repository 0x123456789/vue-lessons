import Assigment from './Assigment.js'

export default {
    components: { Assigment },
    template:
    `
    <section v-show="assigments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>{{ assigments.length }}</span>
        </h2>

        <div class="flex gap-2">
            <button v-for="tag in tags" @click="currentTag=tag" 
                class="border rounded text-xs px-1 py-px"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }">
                {{tag}}
            </button>
        </div>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assigment 
                v-for="a in filtered"
                :key="a.id"
                :assigment="a"
            ></assigment>
        </ul>
    </section>
    `,

    data() {
        return {
            currentTag: 'all'
        }
    },

    props: {
        assigments: Array,
        title: String
    },
    computed: {
        filtered() {
            if (this.currentTag === 'all') {
                return this.assigments;
            } else {
                return this.assigments.filter(a => a.tag === this.currentTag);
            }
        },

        tags() {
            return ['all', ... new Set(this.assigments.map(a => a.tag))];
        }
    }
    
}

