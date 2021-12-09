<template>
    <div>
        <Header text="Header">
            <Menu
                orientation="horizontal"
                :items="nav1"
                @menuClick="_handleMenu1Click"
            ></Menu>
        </Header>
        <Main :styleMode="styleMode">
            <Menu
                slot="left"
                orientation="vertical"
                :items="nav2"
                @menuClick="_handleMenu2Click"
            ></Menu>
            <div slot="center">{{ content }}</div>
            <ul slot="right">
                <li v-for="r in references" :key="r">{{r}}</li>
            </ul>
        </Main>
        <Footer :items="footerItems"></Footer>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

export default {
    name: "Navigator",
    components: {
        Header,
        Menu,
        Main,
        Footer,
    },
    props: {
        styleMode: { type: String, default: "grid" },
        dataUrl: { type: String },
        footerItems: {
            type: Array,
            default: () => ["Sitemap", "Home", "News", "Contact", "About"],
        },
    },
    data: function () {
        return {
            data: {},
            nav1: [],
            nav2: [],
            nav1Selected: "",
            nav2Selected: "",
            content: "",
            references: "",
        };
    },
    created() {
        fetch(this.dataUrl)
            .then((data) => data.json())
            .then((json) => {
                this.nav1 = Object.keys(json);
                this.nav2 = [];
                this.data = json;
        });
    },
    methods: {
        _handleMenu1Click: function (item) {
            console.log(item);
            this.nav1Selected = item;
            this.nav2 = Object.keys(this.data[item]);
            this.nav2Selected = null;
            this.content = "";
            this.references = [];
        },
        _handleMenu2Click: function (item) {
            console.log(item);
            this.nav2Selected = item;
            this.content = this.data[this.nav1Selected][this.nav2Selected].content;
            this.references = this.data[this.nav1Selected][this.nav2Selected].references;
        },
    },
};
</script> 

<style scoped></style>
