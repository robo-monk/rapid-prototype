import { browser } from "$app/environment";
import { writable } from "svelte/store"

const foo = writable<string>(browser ? localStorage.getItem("foo") || "" : "")

foo.subscribe(value => {
    if (browser) localStorage.setItem("ucid", value)
})

export default foo;
