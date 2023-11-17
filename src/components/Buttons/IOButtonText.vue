 <template>
   <md-text-button :leadingIcon="hasIcon" :size="setSize">
     <slot></slot>
     <i :class="setIcon" slot="icon" v-if="leadingIcon" />
   </md-text-button>
</template>

<script>

export default {
  name: 'IOTextButton',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: "circle-plus"
    },
    class: {
      type: String,
      default: '',
    },
    leadingIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setStatus() {
      return this.status;
    },
    setSize() {
      return this.size;
    },
    setClass() {
      return this.class;
    },
    setIcon() {
      return `fa-light fa-${this.icon}`;
    },
    hasIcon() {
      return this.leadingIcon;
    },
  },
};

</script>
