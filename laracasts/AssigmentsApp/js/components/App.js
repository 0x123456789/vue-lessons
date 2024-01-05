import Assigments from "./Assigments.js"
import Panel from "./Panel.js"

export default {    
        components: {
            Assigments, Panel
        },
        template:`
            <assigments></assigments>
            
            <panel>
                <template v-slot:heading>
                    It's a Header
                </template>
                Hi from defautl slot
                <template #footer>
                    It's a footer slot
                </template>
            </panel>
        `
}