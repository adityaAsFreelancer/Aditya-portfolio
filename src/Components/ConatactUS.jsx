import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactSection = () => {
    useEffect(() => {
        emailjs.init("zkxIlWDsjmZvvJg79");
      }, []);
  const {register,handleSubmit,formState: { errors, isSubmitting },reset,} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send('service_47thhx7','template_20u1l1x',{name: data.name,email: data.email, message: data.message,},'zkxIlWDsjmZvvJg79');
      toast.success('Message sent successfully!')
      reset();
    } catch (error) {
      toast.error('Failed to send message, please try again.')
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 bg-gray-800 p-8 rounded-xl shadow-md text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name')}
              autoComplete='false'
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email')}
               autoComplete='false'
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              {...register('message')}
              autoComplete='false'
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <p className="text-red-400 text-sm mt-1">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
