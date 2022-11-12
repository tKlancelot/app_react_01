import React, { useEffect, useState } from 'react';

const ContactForm = () => {

    const [state,setState] = useState({
        prenom: '',
        nom: '',
        email: '',
        errors : ''
    })

    // const validationFormulaire = () => {
    //     if(state.prenom.length < 4){
    //         alert('prenom trop court');
    //         // setState({...state,errors : 'tu peux pas t\'appeler jean'})
    //     }
    // }

    const handleSubmit = (event) => {
        // event.preventDefault();

        // const myForm = event.target;
        // const formData = new FormData(myForm);
        
        // fetch("/", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //     body: new URLSearchParams(formData).toString(),
        // })
        //     .then(() => console.log("Form successfully submitted"))
        //     .catch((error) => alert(error));
    };

    const controleSaisie = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        switch(name){
            case 'firstname':
                setState({...state,prenom : value});
                console.log(state.prenom);
                break;
            case 'lastname':
                setState({...state,nom : value});
                console.log(state.nom);
                break;
            case 'email':
                setState({...state,email : value});
                console.log(state.email);
                break;
            default:
                console.log('default');
        }
    }

    // document.querySelector("form").addEventListener("submit", handleSubmit);

    const logInputs = () => {
        const inputs = document.querySelectorAll('.input-group input,.input-group textarea')
        inputs.forEach((i) => {
            if(i.getAttribute("required") !== null){
                i.previousElementSibling.classList.add('star') ;
            }
        })
    }

    useEffect(() => {
        logInputs();
    },[])

    return (
        <div className='contact-form'>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact"/>
                <div className="group-duo">
                    <div className="input-group">
                        <label>Prénom</label>
                        <input type="text" name="firstname" required placeholder='Prénom' onChange={controleSaisie}/>
                    </div>
                    <div className="input-group">
                        <label>Nom</label>
                        <input type="text" name="lastname" required placeholder='Nom' onChange={controleSaisie}/>
                    </div>
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" name="email" required placeholder='Email' onChange={controleSaisie}/>
                </div>
                <div className="input-group">
                    <label>Message</label>
                    <textarea name="message" required placeholder='Décrivez en quelques-mots votre projet'></textarea>
                </div>
                <div className="input-group">
                    {state.errors && 
                        <p>{state.errors}</p>
                    }
                    <button type="submit">Send</button>
                </div>
            </form>
            
        </div>
    );
};

export default ContactForm;