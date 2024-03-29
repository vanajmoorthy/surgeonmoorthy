import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { GraphQLClient } from "graphql-request";
import { vfmPlugin } from "vue-final-modal";

const app = createApp(App);

app.use(router);
app.use(vfmPlugin);

const graphcmsClient = new GraphQLClient(
	"https://api-ap-south-1.graphcms.com/v2/cl4med4f27li301xo0sjf37md/master"
);

app.mixin({
	beforeCreate() {
		this.$graphcms = graphcmsClient;
	},
});

app.mount("#app");
