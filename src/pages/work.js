import { useState } from 'react';
import styles from '@/styles/work.module.css'
import Image from 'next/image';

function Work () {

    const imageStyle = {
        height: '100%',
        width: 'inherit',
    };

    const [Projects] = useState([
        {
            name: 'JESS FORD CARE',
            images: ['jess-ford-01.png', 'jess-ford-02.png', 'jess-ford-03.png', 'jess-ford-04.png', 'jess-ford-05.png'],
            tags: ['Design', 'Dev'],
            copy: 'Booking site for full-spectrum doula, Jess Ford, emphasizing an aggressively minimal UI and stripped-down animation to simplify the UX for a wide range of ages. Built with React, animated with GSAP, and powered by Calendly.',
            link: 'https://jessford.care'
        },
        {
            name: 'R3F-KEROSENE',
            images: ['r3f-kerosene-01.png', 'r3f-kerosene-02.png', 'r3f-kerosene-03.png', 'r3f-kerosene-04.png', 'r3f-kerosene-05.png'],
            tags: ['3D', 'Design', 'Dev'],
            copy: 'A quick-start framework for creating immersive 3D experiences with React and three.js. This project is aimed at onboarding 3D designers to real-time 3D apps with its simple setup and manipulatable structure.',
            link: 'https://r3f-kerosene.vercel.app/'
        },
        {
            name: 'R3F-IMMERSIVE',
            images: ['r3f-immersive-01.png', 'r3f-immersive-02.png', 'r3f-immersive-03.png', 'r3f-immersive-04.png'],
            tags: ['3D', 'AR', 'Design', 'Dev'],
            copy: 'A framework for creating immersive VR/AR experiences using React.js, three.js, and WebXR. The demo is only visible via mobile VR browsers (I recommend Mozilla XR Viewer) or VR headset. A testament to the current limitations of WebXR.',
            link: 'https://r3f-immersive.vercel.app/',
        },
        {
            name: 'LGS STUDIO',
            images: ['lgs-01.png', 'lgs-02.png', 'lgs-03.png', 'lgs-04.png', 'lgs-techsheet.png', 'lithic-sconce.gif', 'lgs-packaging.png'],
            tags: ['3D', 'Design', 'Fabrication'],
            copy: 'I worked as visual designer for LA-based ceramic studio, LGS, rendering client projects, delivering wiring technical sheets, and designing custom tooling. Client work included lighting for Nicole Hollis, and packaging for a collaboration with Seth Rogens homegoods brand, HousePlant.',
            link: 'https://www.lgsstudio.com'
        },
        {
            name: 'MULTNOMAH DRUG',
            images: ['garageshot.png', 'product-page.png', 'hero-shot.png', 'packaging.png', 'vote.gif'],
            tags: ['Design', 'Dev', 'Apparel'],
            copy: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency. The masks featured a single layer of technical fabric, laser-cut and sewn with minimal processing for rapid production.',
            link: 'https://www.instagram.com/multnomahdrug/',
        },
        {
            name: 'KLYXX CREATIVE',
            images: ['klyxx-01.png', 'klyxx-02.png', 'klyxx-03.png', 'klyxx-04.png'],
            tags: ['Design', 'Dev'],
            copy: 'As Senior Designer at Klyxx, I led a small team of designers through a multitude of client work including apps, landing pages, and promotional. Clients included Made Renovation, KPMG, Elfster, etc.',
            link: 'https://www.klyxx.co/'
        }
    ])

    return (
        <div className={styles.work} >
            {Projects.map((project, index) => (
                    <div className={styles.case} key={index}>
                        <div className={styles.header}>
                            <div className={styles.count}>0{index +1}</div>
                            <div className={styles.title}>{project.name}</div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.gallery}>
                                <div className={styles.images}>
                                    {project.images.map((img, i) => (
                                        <Image className={styles.galleryImg} src={'/images/' + img} key={i} alt={project.name + ' ' + i} width={600} height={800} ></Image>
                                    ))}
                                </div> 
                            </div>
                            <div className={styles.details}>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, index) => (
                                        <div className={styles.tag} key={index}>{tag}</div>
                                    ))}
                                </div>
                                <div className={styles.copy}>{project.copy}</div>
                                <div><a className={styles.link} href={project.link} target="_blank" rel="noopener noreferrer">view live case →</a></div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Work;