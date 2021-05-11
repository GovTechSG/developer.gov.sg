import Vue from "vue";
import Vuex from "vuex";
import { Editor } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow
} from "tiptap-extensions";

Vue.use(Vuex);

const extensions = [
  new Blockquote(),
  new BulletList(),
  new CodeBlock(),
  new HardBreak(),
  new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
  new HorizontalRule(),
  new ListItem(),
  new OrderedList(),
  new TodoItem(),
  new TodoList(),
  new Link(),
  new Bold(),
  new Code(),
  new Italic(),
  new Strike(),
  new Underline(),
  new History(),
  new Image(),
  new Table({
    resizable: true
  }),
  new TableHeader(),
  new TableCell(),
  new TableRow()
];

const pageEditor = {
  namespaced: true,
  state: {
    editor: null
  },
  mutations: {
    setContent({ editor }, content) {
      editor.setContent(content);
    },
    destroyEditor({ editor }) {
      editor.destroy();
    },
    initializeEditor(state, content) {
      if (content == null) {
        // don't use !content to allow 0, "" etc.
        state.editor = new Editor({
          extensions,
          content: `<h1>This is a page builder.</h1>
<p>You can compose <em>rich</em> <strong>content</strong> here.</p>`
        });
      } else {
        state.editor = new Editor({
          extensions,
          content: content
        });
      }
    }
  },
  actions: {
    initializeEditor({ commit }, content) {
      commit("initializeEditor", content);
    },
    setEditorContent({ commit }, content) {
      commit("setContent", content);
    },
    destroyEditor({ commit }) {
      commit("destroyEditor");
    }
  },
  getters: {}
};

export default new Vuex.Store({
  modules: {
    pageEditor
  }
});
