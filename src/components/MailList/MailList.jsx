import React from 'react';
import './MailList.css';

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='mailTitle'>Subscribe for more deals!</h1>
            <div className='mailDesc'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</div>
            <div className='mailInputContainer'>
                <input type='text' placeholder='Input your email here'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;