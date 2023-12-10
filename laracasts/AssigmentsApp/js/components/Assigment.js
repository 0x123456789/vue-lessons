export default {
    template: `
        <li>
            <label class="p-2">
                {{assigment.name}}
                <input type="checkbox" v-model="assigment.completed">
            </label>
        </li>
    `,
    props: {
        assigment: Object
    }
}
