import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import { Horizontal } from './Menu.stories';

export default {
    title: 'WEM/Header',
    argTypes: {
        text: String,
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

const TemplateEmpty = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Header },
    template: '<Header v-bind="$props"></Header>'
  });

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    text: "Header"
}

const TemplateWithMenu = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Header, Menu },
    template: '<Header v-bind="$props"><Menu v-bind="$props"></Menu></Header>'
  });

export const WithMenu = TemplateWithMenu.bind({});
WithMenu.args = {
    text: "Header",
    ...Horizontal.args
}