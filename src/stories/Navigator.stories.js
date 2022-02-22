import Navigator from '../components/Navigator';

export default {
    title: 'WEM/Navigator',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        },
        dataUrl: String
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Navigator },
    template: '<Navigator v-bind="$props"></Navigator>'
  });

export const Grid = Template.bind({});
Grid.args = {
    styleMode: "grid",
    dataUrl: "/navigator.json"
}

export const Flex = Template.bind({});
Flex.args = {
    styleMode: "flex",
    dataUrl: "/navigator.json"
}