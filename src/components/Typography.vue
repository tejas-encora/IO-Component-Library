<template>
    <dl>
        <dt>Body Large</dt>
        <dd class="body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus,
            risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus. Curabitur
            dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus ultrices
            tincidunt. Nunc id cursus ipsum. </dd>
        <dt>Body Medium</dt>
        <dd class="body-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus,
            risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus. Curabitur
            dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus ultrices
            tincidunt. Nunc id cursus ipsum. </dd>
        <dt>Body Small</dt>
        <dd class="body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo sit amet vulputate luctus,
            risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus. Curabitur
            dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus ultrices
            tincidunt. Nunc id cursus ipsum. </dd>
    </dl>
    <IODisplayLarge>Display Large</IODisplayLarge>
    <IODisplayMedium>Display Medium</IODisplayMedium>
    <IODisplaySmall>Display Small</IODisplaySmall>
    <IOHeadlineLarge>Headline Large</IOHeadlineLarge>
    <IOHeadlineMedium>Headline Medium</IOHeadlineMedium>
    <IOHeadlineSmall>Headline Small</IOHeadlineSmall>
    <IOSubHeadlineLarge>Sub Headline Large</IOSubHeadlineLarge>
    <IOSubHeadlineMedium>Sub Headline Medium</IOSubHeadlineMedium>
    <IOSubHeadlineSmall>Sub Headline Small</IOSubHeadlineSmall>
</template>

<script setup>
import IODisplayLarge from '@/components/Type/IODisplayLarge.vue'
import IODisplayMedium from '@/components/Type/IODisplayMedium.vue'
import IODisplaySmall from '@/components/Type/IODisplaySmall.vue'
import IOHeadlineLarge from '@/components/Type/IOHeadlineLarge.vue'
import IOHeadlineMedium from '@/components/Type/IOHeadlineMedium.vue'
import IOHeadlineSmall from '@/components/Type/IOHeadlineSmall.vue'
import IOSubHeadlineLarge from '@/components/Type/IOSubHeadlineLarge.vue'
import IOSubHeadlineMedium from '@/components/Type/IOSubHeadlineMedium.vue'
import IOSubHeadlineSmall from '@/components/Type/IOSubHeadlineSmall.vue'
import '@/assets/theme.css'
</script>

<style scoped>h1,
h2,
h3,
h4,
h5,
h6,
dl {
    font-family: 'Lato', sans-serif;
}
    dd {
        margin-bottom: 15px;
    }
</style>
