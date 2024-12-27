const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

const APP_URL={
    GITHUB:"https://www.github.com/adityajoshi12",
    INSTAGRAM: "https://www.instagram.com/joshiaditya12",
    YOUTUBE: "https://www.youtube.com/@adityajoshi12",
    TWITTER: "https://twitter.com/adityaajoshi12",
    COURSE: "https://courses.bytelearn.in"
    
}  

const SVG={
    TROPHY: "trophy",
    BULB:"buld",
    GRAPH:"graph"
}
const UDEMY_COURSE=[
    {
        name:"Building Enterprise Ready Blockchain Network",
        url:"https://courses.bytelearn.in/courses/Building-Enterprises-Ready-Hyperledger-Fabric-Networks-651a3f0ce4b05be61a8c93b5-651a3f0ce4b05be61a8c93b5",
        img:`${process.env.PUBLIC_URL}/enterprise-ready-blockchain.jpg`,
        rating:"4.9",
        enrollments:"100+",
    },
    {
        name:"Learn to Deploy Hyperledger Fabric v2.2 on Multihost",
        url:"https://www.udemy.com/course/learn-to-deploy-hyperledger-fabric-v22-on-multihost",
        img:`${process.env.PUBLIC_URL}/multi-host-hyperledger-fabric-2.2.png`,
        rating:"4.8",
        enrollments:"4000+",
    }
    ,
    {
        name: "Hyperledger Fabric v2.X on Kubernetes",
        rating:"4.8",
        img:`${process.env.PUBLIC_URL}/hyperledger-kubernetes.jpg`,
        enrollments:"3500+",
        url:"https://www.udemy.com/course/hyperledger-fabric-on-kubernetes-complete-guide"
    },
    {
        name: "Master Class On Hyperledger Besu - Ethereum Client",
        rating:"4.4",
        img:`${process.env.PUBLIC_URL}/hyperledger-besu.png`,
        enrollments:"1400+",
        url:"https://www.udemy.com/course/hyperledger-besu-master-class/"
    },
    {
        name: `Certified Blockchain Developer Certification - ${new Date().getFullYear()}`,
        rating:"4.8",
        img:`${process.env.PUBLIC_URL}/certified-blockchain-developer-certification.jpg`,
        enrollments:"1500+",
        url:"https://www.udemy.com/course/certified-blockchain-developer-certification/"
    }
]
export {openInNewTab, APP_URL, SVG, UDEMY_COURSE}
