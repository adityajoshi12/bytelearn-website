const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

const APP_URL={
    GITHUB:"https://www.github.com/adityajoshi12",
    INSTAGRAM: "https://www.instagram.com/joshiaditya12",
    YOUTUBE: "https://www.youtube.com/@adityajoshi12",
    TWITTER: "https://twitter.com/adityaajoshi12",
    
}  

const SVG={
    TROPHY: "trophy",
    BULB:"buld",
    GRAPH:"graph"
}
export {openInNewTab, APP_URL, SVG}
