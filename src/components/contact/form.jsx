"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "The contact form is not configured yet, please email me directly instead."
      );
      return;
    }

    const toastId = toast.loading("Sending your message, please wait...");
    emailjs
      .send(
        serviceId,
        templateId,
        params,
        {
          publicKey,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            { id: toastId }
          );
        },
        () => {
          toast.error(
            "There was an error while sending your message, please try later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const params = {
      to_name: "Ilija",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(params);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least three characters long!",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address!",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <motion.textarea
          variants={item}
          rows={4}
          placeholder="Message"
          {...register("message", {
            required: "Message is required!",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long!",
            },
            maxLength: {
              value: 1000,
              message: "Message must not exceed 1000 characters!",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-none"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}

        <motion.input
          variants={item}
          type="submit"
          value="Cast your message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        />
      </motion.form>
    </>
  );
}
