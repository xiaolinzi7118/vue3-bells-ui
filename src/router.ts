import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from "./markdown/intro.md";
import install from "./markdown/install.md";
import getStarted from './markdown/get-started.md'
import { h } from 'vue'
import InputDemo from './components/InputDemo.vue'
import ToastDemo from './components/ToastDemo.vue'


const md = (string) => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "installed", component: md(install) },
                { path: "get-started", component: md(getStarted) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "input", component: InputDemo },
                { path: "toast", component: ToastDemo },
            ],
        }
    ]
})
router.afterEach(() => {
    console.log("路由切换了");
});