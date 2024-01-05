import Assigment from './Assigment.js'
import AssigmentTags from './AssigmentTags.js';

export default {
    components: { Assigment, AssigmentTags },
    template:
    `
    <section v-show="assigments.length" class="w-70 bg-gray-100 p-4 border border-gray-600 rounded-lg">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>{{ assigments.length }}</span>
            </h2>

            <button v-show="canToggle" @click="$emit('toggle')" class="text-black">x</button>
        </div>

        <assigment-tags
                    :initial-tags="assigments.map(a => a.tag)"
                    v-model="currentTag"
        ></assigment-tags>


        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assigment 
                    v-for="a in filtered"
                    :key="a.id"
                    :assigment="a"
                ></assigment>
        </ul>

        <slot></slot>
    </section>
    `,

    data() {
        return {
            currentTag: 'all'
        }
    },

    props: {
        assigments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
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

