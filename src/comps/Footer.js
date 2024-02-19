import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
      <footer>
        <div class="footerall">
            <img src="public/creoshiftlogo.jpg" alt="Footer Logo"/>
        
        <div class="footer-links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="social-icons">
            <Link href="https://www.Facebook.com" class="Facebook-icon" img src="public/facebooklogo.png"Link/>
            < Link href="https://www.Whatsup.com" class="whats-up-icon" img src="/whatsuplogo.png"Link/>
            < link href="https://www.Instagram.com" class="Instagram-icon"img src="joseph/public/instagramlogo.jpg" Link/>
        </div>
        </div>
    </footer>
    
  )
}

export default Footer