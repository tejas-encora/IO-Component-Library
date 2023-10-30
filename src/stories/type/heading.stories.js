import IODisplayLarge from '@/components/Type/IODisplayLarge.vue'
import IODisplayMedium from '@/components/Type/IODisplayMedium.vue'
import IODisplaySmall from '@/components/Type/IODisplaySmall.vue'
import IOHeadlineLarge from '@/components/Type/IOHeadlineLarge.vue'
import IOHeadlineMedium from '@/components/Type/IOHeadlineMedium.vue'
import IOHeadlineSmall from '@/components/Type/IOHeadlineSmall.vue'
import IOSubHeadlineLarge from '@/components/Type/IOSubHeadlineLarge.vue'
import IOSubHeadlineMedium from '@/components/Type/IOSubHeadlineMedium.vue'
import IOSubHeadlineSmall from '@/components/Type/IOSubHeadlineSmall.vue'
/**
 * 
 * 
 */
export default {
    title: 'UI/Atoms/Type/Headings',
    component: IODisplayLarge,
    tags: ['autodocs'],
    render: (args) => ({
        components: { IODisplayLarge },
        template: '<IODisplayLarge>IO Display Large</IODisplayLarge>',
    }),
};
export const DisplayLarge = {
    render: () => ({
        components: { IODisplayLarge },
        template: '<IODisplayLarge>IO Display Large</IODisplayLarge>',
    })
}
export const DisplayMedium = {
    render: () => ({
        components: { IODisplayMedium },
        template: '<IODisplayMedium>IO Display Medium</IODisplayMedium>',
    })
}
export const DisplaySmall = {
    render: () => ({
        components: { IODisplaySmall },
        template: '<IODisplaySmall>IO Display Small</IODisplaySmall>',
    })
}
export const HeadlineLarge = {
    render: () => ({
        components: { IOHeadlineLarge },
        template: '<IOHeadlineLarge>IO Headline Large</IOHeadlineLarge>',
    })
}
export const HeadlineMedium = {
    render: () => ({
        components: { IOHeadlineMedium },
        template: '<IOHeadlineMedium>IO Headline Medium</IOHeadlineMedium>',
    })
}
export const HeadlineSmall = {
    render: () => ({
        components: { IOHeadlineSmall },
        template: '<IOHeadlineSmall>IO Headline Small</IOHeadlineSmall>',
    })
}
export const SubHeadlineLarge = {
    render: () => ({
        components: { IOSubHeadlineLarge },
        template: '<IOSubHeadlineLarge>IO Sub Headline Large</IOSubHeadlineLarge>',
    })
}
export const SubHeadlineMedium = {
    render: () => ({
        components: { IOSubHeadlineMedium },
        template: '<IOSubHeadlineMedium>IO Sub Headline Medium</IOSubHeadlineMedium>',
    })
}
export const SubHeadlineSmall = {
    render: () => ({
        components: { IOSubHeadlineSmall },
        template: '<IOSubHeadlineSmall>IO Sub Headline Small</IOSubHeadlineSmall>',
    })
}



