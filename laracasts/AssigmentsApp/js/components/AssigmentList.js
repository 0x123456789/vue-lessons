import Assigment from './Assigment.js'
import AssigmentTags from './AssigmentTags.js';

export default {
    components: { Assigment, AssigmentTags },
    template:
    `
    <section v-show="assigments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>{{ assigments.length }}</span>
        </h2>

        <assigment-tags
                :initial-tags="assigments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag= $event"
        ></assigment-tags>


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
        }
    }
    
}

