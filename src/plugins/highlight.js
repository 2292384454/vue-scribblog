// src/plugins/highlight.js
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'

const Highlight = {
    install(app) {
        app.directive("highlight", {
            mounted(el) {
                const codeBlocks = el.querySelectorAll("pre code");
                for (const block of codeBlocks) {
                    hljs.highlightBlock(block);
                }
            },
            updated(el) {
                const codeBlocks = el.querySelectorAll("pre code");
                for (const block of codeBlocks) {
                    hljs.highlightBlock(block);
                }
            },
        });
    },
};

export default Highlight;