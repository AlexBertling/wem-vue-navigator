import Footer from '../components/Footer.vue';

export default {
    title: 'WEM/Footer',
    component: "Footer",
    argTypes: {
        items: []
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Footer },
    template: '<Footer v-bind="$props"></Footer>'
  });

export const Empty = Template.bind({});
Empty.args = {
    items: []
}

export const Complete = Template.bind({});
Complete.args = {
    items: ["Sitemap", "Home", "News", "Contact", "About"]
}