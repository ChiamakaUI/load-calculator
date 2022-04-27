import Loader from "./script.js";

const rootElement = document.querySelector(".tracker__entries");
const addBtn = document.querySelector(".tracker_add");

new Loader(rootElement, addBtn);
