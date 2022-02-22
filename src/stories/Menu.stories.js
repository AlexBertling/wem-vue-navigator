import Menu from '../components/Menu.vue';

export default {
    title: 'WEM/Menu',
    component: "Menu",
    argTypes: {
        preventRouting: {type: "boolean"},
        orientation: {
            options: ["horizontal", "vertical"],
            control: {type: "radio"}
        },
        items: [],
        menuClick: {
            action: "menuClick"
        }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Menu },
    template: '<Menu v-bind="$props"></Menu>'
  });

export const Horizontal = Template.bind({});
Horizontal.args = {
    preventRouting: true,
    orientation: "horizontal",
    items: ["Home", "News", "Contact", "About"]
}

export const Vertical = Template.bind({});
Vertical.args = {
    preventRouting: true,
    orientation: "vertical",
    items: ["Home", "News", "Contact", "About"]
}