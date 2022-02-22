import Main from '../components/Main.vue';
import Menu from '../components/Menu.vue';
import { Vertical } from './Menu.stories';

export default {
    title: 'WEM/Main',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: {type: "radio"}
        },
        items: [],
        menuClick: {
            action: "menuClick"
        },
        content: String,
        references: []
    },
};

const TemplateEmpty = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Main },
    template: '<Main v-bind="$props"></Main>'
  });

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    styleMode: "Grid"
}

const TemplateComplete = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Main, Menu },
    template: `<Main v-bind="$props">
                    <Menu slot="left" v-bind="$props"></Menu>
                    <div slot="center">{{ content }}</div>
                    <ul slot="right">
                        <li v-for="r in references" :key="r">{{r}}</li>
                    </ul>
                </Main>`
  });

export const Complete = TemplateComplete.bind({});
Complete.args = {
    styleMode: "grid",
    content: "This is some example text.",
    references: ["http://www.test.de"],
    ...Vertical.args,
}