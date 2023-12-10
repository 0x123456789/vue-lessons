export default {
  mounted() {
    alert("hello");
  },
  template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-200': color == 'blue',
                'bg-green-200': color == 'green',
            }"
        >

            <slot />
        </button>
    `,

  props: {
    color: String,
  },
};
