import IOBody from '@/components/Type/IOBody.vue'
import IOLink from '@/components/Type/IOLink.vue'
import IOCaption from '@/components/Type/IOCaption.vue'

export default {
    title: 'UI/Atoms/Type/Body',
    component: IOBody,
    tags: ['autodocs'],
    docs: {
        type: "auto",
    },
    render: (args) => ({
        components: { IOBody },
        setup() {
            return { args };
        },
        template: '<IOBody v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus, risus urna sodales orci, at auctor dolor ex eu purus.</IOBody>',
    }),
    args: {
        class: 'body-medium',
    },
    argTypes: {
        class: {
            control: {
                type:'select',
            },
            options: ['body-large', 'body-medium','body-small'],
        }
    }
};
export const Base = {
    render: (args) => ({
        components: IOBody,
        setup() {
            return { args };
        },
        template: '<IOBody v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus, risus urna sodales orci, at auctor dolor ex eu purus.</IOBody>',
    }),
}
export const Large = {
    render: () => ({
        components: { IOBody },
        template: '<IOBody class="body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus, risus urna sodales orci, at auctor dolor ex eu purus.</IOBody>',
    })
}
export const Small = {
    render: () => ({
        components: { IOBody },
        template: '<IOBody class="body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus, risus urna sodales orci, at auctor dolor ex eu purus.</IOBody>',
    })
}
export const TextLinkLarge = {
    render: () => ({
        components: { IOLink },
        template: '<IOLink class="link-large">I\'m a large text link</IOLink>',
    })
}
export const TextLinkBase = {
    render: () => ({
        components: { IOLink },
        template: '<IOLink class="link-base">I\'m a text link</IOLink>',
    })
}
export const TextLinkSmall = {
    render: () => ({
        components: { IOLink },
        template: '<IOLink class="link-small">I\'m a small text link</IOLink>',
    })
}
export const Caption = {
    render: () => ({
        components: { IOLink },
        template: '<IOCaption class="io-caption">I\'m a caption</IOLink>',
    })
}