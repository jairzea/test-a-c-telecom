import { createApp } from 'vue'
import ElementPlus from "element-plus";
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import "./assets/css/main.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, 
  faShare, faUsers, faVideo, faPerson, faUsersRectangle,
  faPhotoFilm, faUserPlus, faHeadSideVirus, faBrain, faPaperclip, faScrewdriverWrench, faList
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faUser, faComments } from "@fortawesome/free-regular-svg-icons";


const app = createApp(App);

app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

library.add(
  faFacebookSquare,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faDownload,
  faShare,
  faUsers,
  faEye,
  faVideo,
  faPerson,
  faUsersRectangle,
  faPhotoFilm,
  faUserPlus,
  faUser,
  faHeadSideVirus,
  faBrain,
  faPaperclip,
  faScrewdriverWrench,
  faList,
  faComments
);
app.component("font-awesome-icon", FontAwesomeIcon);


app.use(router);
app.use(store);
app.mount("#app");
