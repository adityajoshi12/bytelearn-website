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
const UDEMY_COURSE=[
    {
        name:"Building Enterprise Ready Blockchain Network",
        url:"https://courses.bytelearn.in/courses/Building-Enterprises-Ready-Hyperledger-Fabric-Networks-651a3f0ce4b05be61a8c93b5-651a3f0ce4b05be61a8c93b5",
        img:`${process.env.PUBLIC_URL}/enterprise-ready-blockchain.jpg`,
        rating:"4.5",
        enrollments:"10",
    },
    {
        name:"Learn to Deploy Hyperledger Fabric v2.2 on Multihost",
        url:"https://www.udemy.com/course/learn-to-deploy-hyperledger-fabric-v22-on-multihost",
        img:"https://camo.githubusercontent.com/c1d69dca324523226bb1d59d3f87b9e1404f8f9a20d637206777d7f7c934efc3/68747470733a2f2f696d672d632e7564656d7963646e2e636f6d2f636f757273652f323430783133352f333734313534305f643331665f342e6a7067",
        rating:"4.5",
        enrollments:"2000",
    }
    ,
    {
        name: "Hyperledger Fabric v2.X on Kubernetes",
        rating:"4.8",
        img:"https://camo.githubusercontent.com/26de2bea2c69602977fd8755c89e2e98a99111ecf965bbd9d9d86ae039c36298/68747470733a2f2f696d672d632e7564656d7963646e2e636f6d2f636f757273652f323430783133352f333937303932305f366631365f342e6a7067",
        enrollments:"3000",
        url:"https://www.udemy.com/course/hyperledger-fabric-on-kubernetes-complete-guide"
    },
    {
        name: "Master Class On Hyperledger Besu",
        rating:"4.2",
        img:"https://camo.githubusercontent.com/19683ea2d04d1504149757b54d3ea177d4916231ed483e5e3b8d3a036b55afdd/68747470733a2f2f696d672d632e7564656d7963646e2e636f6d2f636f757273652f323430783133352f333831353533325f316564635f322e6a7067",
        enrollments:"1000",
        url:"https://www.udemy.com/course/hyperledger-besu-master-class/"
    },
    {
        name: "Certified Blockchain Developer Certification - 2023",
        rating:"4.1",
        img:"https://camo.githubusercontent.com/21e374bfb2588156ef8fa731bee12d79d8cb7cfc4d6d38a536a5405c40c8c2db/68747470733a2f2f696d672d632e7564656d7963646e2e636f6d2f636f757273652f323430783133352f333831343437365f653363372e6a7067",
        enrollments:"1000",
        url:"https://www.udemy.com/course/certified-blockchain-developer-certification/"
    }
]
export {openInNewTab, APP_URL, SVG, UDEMY_COURSE}
