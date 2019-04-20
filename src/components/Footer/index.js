import React from 'react'


const Footer = () => {
    const year = (new Date()).getFullYear().toString();

    return <footer>
        <p>Material UI React &copy; {year}, All rights reserved.</p>
    </footer>
}

 
export default Footer
