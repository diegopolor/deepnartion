export const resizeEvent = (callback: ()=> void )=> {
    window.addEventListener("resize", callback);
}

export const scrollEvent = (callback: (e: Window & typeof globalThis)=> void) => {
    window.addEventListener('scroll',()=> callback(window), false)
}

export const domLoadedEvent = (callback: ()=> void) => {
    window.addEventListener('DOMContentLoaded', callback)
}
