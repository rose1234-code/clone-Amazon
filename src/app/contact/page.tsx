"use client";

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { ToastContainer, toast } from 'react-toastify';

import  { useEffect, useRef, useState } from 'react';
// envoie du formulaire par e-mail sans back-end
import emailjs from '@emailjs/browser';
// recupere les infos utilisateur connecte sur clerck
import { useUser } from '@clerk/nextjs';




export default function Page() {


    const { isLoaded, isSignedIn, user } = useUser();


    // etat du chargement . false le button est actif et true le form  est en cour d'envoie
    const [loading,setLoading]=useState(false)

    //reference: permettre a nextjs d'acceder directement au formulaire
    const form = useRef <HTMLFormElement>(null);

    const [payload,setPayload]=useState({
        name:'',
        surName: "",
        email:'',
        subject:"",
    })

     useEffect(()=>{
        if(isLoaded && isSignedIn && user){
            console.log('user is',user)
            setPayload((prev)=>({
                ...prev,
                name:user.fullName || "",
                email:user.primaryEmailAddress?.emailAddress || "",
            }));
        }
    },[ isLoaded,isSignedIn,user])

    const submitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // Désactive le bouton
        // Change le texte en “Envoi…”
        setLoading(true)

        console.log("Form submit :",payload)
        // Sécurité : si le formulaire n’existe pas, on stoppe
        if(!form.current){
            toast.error("Form not found")
            return
        }
        // envoie d'emailjs
        emailjs.sendForm('service_jarga9s', 'template_fc6o8yp', form.current, {publicKey: '3NyGuxfzXu02Ykb-K',}).then(
            () => {
                console.log('SUCCESS!');
                toast.success("Message sent successfully")
                form.current?.reset()
            },
            (error) => {
                console.log('FAILED...', error.text);
                toast.error("Failed to send message.please try again")
            },
            // finally indiqu'a la fin active le button quoi qu'il arrive
            ).finally(() => setLoading(false));
    }


 

  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form ref={form} onSubmit={submitForm} className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <ToastContainer position='top-right' />
        <h1 className="text-2xl font-semibold text-center">Contact</h1>

        <input  required value={payload.name} onChange={(e)=>setPayload({ ...payload,name:e.target.value})} type="text" name="lastName" placeholder="Nom" className="w-full px-4 py-2 border rounded-md outline-none"/>

        <input  required value={payload.email} onChange={(e)=>setPayload({ ...payload,email:e.target.value})} type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md outline-none"/>

        <textarea  required value={payload.subject} onChange={(e)=>setPayload({ ...payload,subject:e.target.value})} name="message" placeholder="Message" className="w-full h-28 px-4 py-2 border rounded-md outline-none resize-none"/>

        <button disabled={loading} type="submit" className={` ${loading ? 'bg-gray-400 cursor-not-allowed':'bg-amber-600 hover:bg-amber-700'}   w-full text-white py-2 rounded-md transition`}>
          Envoyer
        </button>

      </form>
    </div>
    <Footer/>

    </>
  );
}
