import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import IOButtonFilledLarge from '@/components/Buttons/IOButtonFilledLarge.vue'
// import IOButtonOutlineLarge from '@/components/Buttons/IOButtonOutlineLarge.vue'
// import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'UI/Atoms/Button',
    component: IOButtonFilledLarge,
    tags: ['autodocs'],
    // decorators: [withDesign],
};
export const Primary = {
    render: (args, { argTypes }) => ({
        components: { IOButtonFilledLarge },
        props: Object.keys(argTypes),
        template: '<IOButtonFilledLarge v-bind="$props" />',
    }),
    args: {
        label: true,
        label: 'Click me',
    },
};

// Primary.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/Yl9Art7nRZkjYr3Ocexr5G/ioUI-V2?type=design&node-id=50716-11372&mode=dev'
//     }
// }

//export const Large = (args) => <IOButtonFilledLarge {...args}>{label}</IOButtonFilledLarge>
// export const Large = (args) => ({
//     components: { IOButtonFilledLarge },
//     template: '<IOButtonFilledLarge {...args} />'
// });
// Large.args = {
//     children: 'Click me',
//     disabled: false
// }
