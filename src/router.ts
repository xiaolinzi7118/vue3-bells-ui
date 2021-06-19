import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocsDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'


const md = (fileName) => h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: "", component: DocsDemo },
                { path: "intro", component: md('intro') },
                { path: "installed", component: md('install') },
                { path: "get-started", component: md('get-started') },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        }
    ]
})
router.afterEach(() => {
    console.log("路由切换了");
});