import React from 'react'
import './Header.css'
import { Link} from 'react-scroll'

const Header = ({ setShowScreen }) => {
  return (
    <>
    <header class="flex primary-header" >

<div class="flex logo">
  <h1 animate__heartBeat >Rajiv Gupta</h1>

  <div class='linedis'>
  </div>
  <div>
    <h3 class="line">Frontend Developer</h3>
  </div>
</div>


<div class="right">
  <input type="checkbox" id="check" />
  <label for="check" class="checkBtn">
    <i class="fa-solid fa-bars"></i>
  </label>
  <ul class="flex primary-navigation">
    <li>
      <a href="#Home" onClick={() => setShowScreen("")}>Home</a>
    </li>
    <li>
      <a onClick={() => setShowScreen("Skills")} href="#Skill">Skills</a>
    </li>
    <li>
      <a  onClick={() => setShowScreen("Projects")} href="#Project">Projects</a>
    </li>
    <li>
      <a  onClick={() => setShowScreen("about")} href="#About">About</a>
    </li>
    <li>
      <a  onClick={() => setShowScreen("contact")} href="#Contact">Contact</a>
    </li>
  </ul>
</div>
</header>
    </>
  )
}

export default Header
