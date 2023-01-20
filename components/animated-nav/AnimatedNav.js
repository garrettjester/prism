import styles from "./AnimatedNav.module.scss";
import { useEffect, useState } from "react";
import { ServicesDropdown, AnimatedDropdown } from "./dropdowns";

import { BlogIcon, CaseStudyIcon, AboutIcon, TeamIcon } from "../icons";


const companyOptions = [
  { title: "About", icon: <AboutIcon />, href: "/company/about" },
  { title: "Team", icon: <TeamIcon />, href: "/company/team" },
];


const resourceOptions = [
  { title: 'Blog', icon: <BlogIcon/>, href: "/blog"},
  { title: 'Case Studies', icon: <CaseStudyIcon/>, href: "/resources/case-studies"}
]


export default function AnimatedNav() {

  var background;
  var nav;

  useEffect(() => {
    const triggers = document.querySelectorAll(`.${styles.popover}`);
    background = document.querySelector(`.${styles.dropdownBackground}`);
    nav = document.querySelector(`.${styles.animatedNav}`);
    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  }, [])
  

  const handleEnter = ({target}) => {
    target.classList.add(styles.triggerEnter)
    setTimeout(() => target.classList.add(styles.triggerEnterActive), 30)
    background.classList.add(styles.open) 
    
    const dropdown = target.querySelector(`.${styles.dropdown}`)
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  const handleLeave = ({target}) => {
    target.classList.remove(styles.triggerEnter);
    target.classList.remove(styles.triggerEnterActive);
    background.classList.remove(styles.open);
  }

  // active={key==active}

  return (
    <nav className={styles.animatedNav}>
      <div className={styles.brandingBox}></div>
      <div className={styles.dropdownBackground}>
      <span className={styles.arrow}></span>
      </div>{/*Render Children*/}
      <ul className={styles.cool}>
        <li id="services" className={styles.popover}>
          <a href="#">Services</a>
          <div className={styles.dropdown}>
            <ServicesDropdown/>
          </div>
        </li>
        <li id="company" className={styles.popover}>
          <a href="#">Company</a>
          <div className={styles.dropdown}>
            <AnimatedDropdown options={companyOptions}/>
          </div>
        </li>
        <li id="resources" className={styles.popover}>
          <a href="#">Resources</a>
          <div className={styles.dropdown}>
            <AnimatedDropdown options={resourceOptions}/>
          </div>
        </li>
      </ul>
    </nav>
  )
}