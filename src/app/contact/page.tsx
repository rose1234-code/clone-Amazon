'use client'

import React, {useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
// notification succes/erreur
import { ToastContainer, toast } from 'react-toastify';

import  { useRef } from 'react';
// envoie du formulaire par e-mail sans back-end
import emailjs from '@emailjs/browser';
// recupere les infos utilisateur connecte sur clerck
import { useUser } from '@clerk/nextjs';
import NavBar from '@/components/NavBar';




export default function Contact() {

    // recuperation des infos clerck:
    // isSignedIn → utilisateur connecté ?
    // user → données de l’utilisateur
    // isLoaded → Clerk est prêt
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


    // si les donnes utilisateurs clerck sont prets et qu'il est connecte et les donnees disponible alors,on met autommatiquement son nom et email dans le payload
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
    <div className='min-h-screen space-y-8 flex flex-col'>
        <div>
                    <NavBar/>
        </div>
        
        <div className='bg-gray-100  rounded-2xl flex items-center justify-center  relative  h-screen'>

           
            <div className='flex items-center justify-between  cursor-pointer '>
                
                <form ref={form} onSubmit={submitForm} className='shadow bg-white rounded-2xl space-y-5 px-5 py-3'>

                    <ToastContainer position='top-right' />

                    <div className='flex items-center gap-4 '>
                        <div className=' text-lg '>
                            <label htmlFor="" className='block dark:text-black text-lg my-2'>FirstName</label>
                            {/* value={payload.name} :La valeur affichée dans l’input vient de :payload.name
                                👉 React contrôle ce champ
                                👉 L’utilisateur ne peut pas taper sans passer par React 

                                setPayload({ ...payload, name: e.target.value }) Copie l’ancien état (...payload)
                                Met à jour uniquement name
                                👉 Respect de l’immutabilité React
                                👉 Les autres champs du formulaire restent inchangés*/}
                            <input name='firstName' required value={payload.name} onChange={(e)=>setPayload({ ...payload,name:e.target.value})} type="text" className='px-4 text-md py-2 dark:text-black border border-gray-100 outline-none rounded-md bg-gray-100'  placeholder='Enter your first name'/>
                        </div>
                        <div className=''>
                            <label htmlFor="" className='block dark:text-black text-lg my-2'>Last Name</label>
                            <input name='lastName' required value={payload.surName} onChange={(e)=>setPayload({ ...payload,surName:e.target.value})} type="text" className='px-4 border text- dark:text-black border-gray-100 outline-none py-2 rounded-md bg-gray-100'  placeholder='Enter your last name'/>
                        </div>
                    </div>
            
                    <div className=' '>
                        <label htmlFor="" className='block dark:text-black text-lg my-2'>Email</label>
                        <input name='email' required value={payload.email} onChange={(e)=>setPayload({ ...payload,email:e.target.value})} type="text" className=' w-full px-4 border text-md dark:text-black border-gray-100 outline-none py-2 rounded-md bg-gray-100'  placeholder='Enter your  email'/>
                    </div>

                     <div className=''>
                        <label htmlFor="" className='block dark:text-black text-lg my-2'>How can we help you ?</label>
                        <textarea name='massage' required value={payload.subject} onChange={(e)=>setPayload({ ...payload,subject:e.target.value})} className='border border-gray-200 px-3 py-2 text-md dark:text-black outline-none bg-gray-100 w-full rounded-md h-[100px] ' id=""></textarea>
                    </div>
                    <button  disabled={loading} className={` ${loading ? 'bg-gray-400 cursor-not-allowed':'bg-amber-600 hover:bg-amber-700'}  shadow  float-right flex items-center gap-2 rounded-md px-3 py-1 text-lg text-white`}>Sent Message
                        <FaLongArrowAltRight color='black' className='border bg-white rounded-md w-[30px] p-1 h-[30px]' />
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}
            