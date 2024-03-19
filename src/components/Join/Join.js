import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef()
    const [mail, setMail] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_07tf5vh', 'template_z45ladj', form.current, 'JKZC1P6R8y6KQHoYO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setTimeout(() => {
            setMail('Thank You ❤️')
        }, 500)
    };

    return (
        <div className='Join' id='join-us'>

            <dir className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>Ready To</span>
                    <span>Level Up</span>
                </div>
                <div>
                    <span>Your Body</span>
                    <span className='stroke-text'>With Us?</span>
                </div>
            </dir>

            <div className='right-j'>

                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your Email address' value={mail} onChange={(e) => setMail(e.target.value)} />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>

        </div>
    )
}

export default Join