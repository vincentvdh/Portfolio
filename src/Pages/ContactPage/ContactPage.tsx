import React, { useRef, useState } from 'react';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';



const ContactPage = () => {
    const form: any = useRef();
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_wutka7j', 'template_88fgseo', form.current, 'UCQDA6y9C8sH6zNJO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <main>
                <h1> ContactPage</h1>
                <div className={styles.page}>
                    <div >
                        <form ref={form} onSubmit={sendEmail} className={styles.form}>
                            <input type="text" placeholder='Volledige naam' name='user_name' required />
                            <input type="email" placeholder='Email' name='user_email' required />
                            <input type="text" placeholder='Onderwerp' name='subject' required />
                            <textarea name="message" placeholder='Boodschap' cols={50} rows={20}></textarea>
                            <button type='submit'>Verstuur boodschap</button>
                        </form>
                    </div>
                    <div>
                        <p>API</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage