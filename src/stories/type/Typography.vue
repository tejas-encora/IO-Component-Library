<template>
    <h2>Typography</h2>
    <div class="wrap">
        <h3>Body Text</h3>
        <dl>
            <dt>Body Large</dt>
            <dd>
                <IOBody class="body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo
                    sit amet vulputate luctus,
                    risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus.
                    Curabitur
                    dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus
                    ultrices
                    tincidunt. Nunc id cursus ipsum.</IOBody>
            </dd>
            <dt>Body Base</dt>
            <dd>
                <IOBody class="body-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo
                    sit amet vulputate luctus,
                    risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus.
                    Curabitur
                    dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus
                    ultrices
                    tincidunt. Nunc id cursus ipsum.</IOBody>
            </dd>
            <dt>Body Small</dt>
            <dd>
                <IOBody class="body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, justo
                    sit amet vulputate luctus,
                    risus urna sodales orci, at auctor dolor ex eu purus. Vivamus nec sapien a risus auctor cursus.
                    Curabitur
                    dignissim arcu nec libero sollicitudin, eget dapibus mi facilisis. Nullam nec ligula quis lectus
                    ultrices
                    tincidunt. Nunc id cursus ipsum.</IOBody>
            </dd>
        </dl>
    </div>

    <div class="wrap">
        <h3>Text Link</h3>
        <IOLink class="link-large">Text Link Large</IOLink><br /><br />
        <IOLink class="link-base">Text Link Base</IOLink><br /><br />
        <IOLink class="link-small">Text Link Small</IOLink>
    </div>
    <div class="wrap">
        <IOCaption>Caption</IOCaption>
    </div>
    <div class="wrap">
        <h3>Headings</h3>
        <IODisplayLarge>Display Large</IODisplayLarge>
        <IODisplayMedium>Display Medium</IODisplayMedium>
        <IODisplaySmall>Display Small</IODisplaySmall>
        <IOHeadlineLarge>Headline Large</IOHeadlineLarge>
        <IOHeadlineMedium>Headline Medium</IOHeadlineMedium>
        <IOHeadlineSmall>Headline Small</IOHeadlineSmall>
        <IOSubHeadlineLarge>Sub Headline Large</IOSubHeadlineLarge>
        <IOSubHeadlineMedium>Sub Headline Medium</IOSubHeadlineMedium>
        <IOSubHeadlineSmall>Sub Headline Small</IOSubHeadlineSmall>
    </div>
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
import IOBody from '@/components/Type/IOBody.vue'
import IOLink from '@/components/Type/IOLink.vue'
import IOCaption from '@/components/Type/IOCaption.vue'
import '@/assets/theme.css'
</script>

<style scoped>
h1,
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
body {
    font-family: '';
}
.wrap {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px 0;
    padding: 10px
}

h3 {
    margin-top: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}

.wrap h3:not(:first-child) {
    border: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 10px 0;
}
</style>
