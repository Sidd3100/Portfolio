import React from "react";
import { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

import Alert from "./Alert";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty",
        status: "warning"
      });
      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null
        });
      }, 4000);
    } else {
      try {
        await addDoc(collection(db, "messages"), { ...data });
        setData({ firstName: "", lastName: "", email: "", message: "" });
        setAlert({
          isAlert: true,
          message: "Thanks for contacting me",
          status: "success"
        });
        setTimeout(() => {
          setAlert({
            isAlert: false,
            message: "",
            status: null
          });
        }, 4000);
      } catch (err) {
        setAlert({
          isAlert: true,
          message: `Error: ${err.message}`,
          status: "danger"
        });
        setTimeout(() => {
          setAlert({
            isAlert: false,
            message: "",
            status: null
          });
        }, 4000);
      }
    }
  };

  return (
    <>
      <section id="contact" className="flex items-center justify-center flex-col gap-12 my-12 ">
        <AnimatePresence>
          {alert.isAlert && (
            <Alert status={alert.status} message={alert.message} />
          )}
        </AnimatePresence>
        <div className="w-full flex items-center justify-center py-24">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-around w-52"
          >
            <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">Contact Me</p>
            <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-center justify-start gap-4">
          <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input value={data.firstName} onChange={handleTextChange} name="firstName" type="text" placeholder="First Name" className="text-white w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none" />
              <input value={data.lastName} onChange={handleTextChange} name="lastName" type="text" placeholder="Last Name" className="text-white w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none" />
            </div>

            <input value={data.email} onChange={handleTextChange} name="email" type="email" placeholder="Email" className="text-white w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none" />
            <textarea value={data.message} onChange={handleTextChange} name="message" id="" cols="0" rows="10" placeholder="Message Here..." className="text-white w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none"></textarea>
            <div className="w-full flex items-center justify-center lg:justify-end">
              <button onClick={sendMessage} className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
