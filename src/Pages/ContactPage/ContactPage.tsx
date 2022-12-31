import { useRef, } from 'react';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';
import QuotesAPI from '../../Components/API/QuotesAPI/QuotesAPI';

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
                <h1> Contact pagina</h1>
                <div className={styles.page}>
                    <div >
                        <h3>Neem zeker contact op met mij <br /> indien u nog vragen heeft of opmerkingen.</h3>
                        <form ref={form} onSubmit={sendEmail} className={styles.form}>
                            <input type="text" placeholder='Volledige naam' name='user_name' required />
                            <input type="email" placeholder='Email' name='user_email' required />
                            <input type="text" placeholder='Onderwerp' name='subject' required />
                            <textarea name="message" placeholder='Boodschap' cols={50} rows={20}></textarea>
                            <button type='submit'>Verstuur boodschap</button>
                        </form>
                    </div>
                    <div>
                        <QuotesAPI />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage