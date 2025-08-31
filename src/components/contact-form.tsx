"use client";

import React, { useState } from "react";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "Design",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          type: form.type,
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", type: "Design", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Let’s build something meaningful together. Whether it’s an idea, project, or collaboration, I’m just a message away.

        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              
              <div className="flex flex-wrap items-start gap-3 sm:gap-5">
                <PhoneIcon className="h-5 w-5 text-white shrink-0" />
                <Typography variant="h6" color="white" className="mb-2 max-w-full break-words text-sm sm:text-base">
                  Indianapolis, US
                </Typography>
              </div>
              
              <div className="flex my-2 flex-wrap items-start gap-3 sm:gap-5">
                <EnvelopeIcon className="h-5 w-5 text-white shrink-0" />
                <Typography variant="h6" color="white" className="mb-2 max-w-full break-all sm:break-normal text-sm sm:text-base">
                  <a href="mailto:sharmarajesh98@outlook.com" className="underline decoration-transparent hover:decoration-inherit">sharmarajesh98@outlook.com</a>
                </Typography>
              </div>

              <div className="flex my-2 flex-wrap items-start gap-3 sm:gap-5">
                <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-white shrink-0" />

                <a
                  href="https://www.linkedin.com/in/rajeshsharma98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-wrap max-w-full"
                >
                  <i className="fa-brands fa-linkedin text-white text-xl" />
                  <Typography variant="h6" color="white" className="mb-2 max-w-full break-words text-sm sm:text-base">
                    LinkedIn
                  </Typography>
                </a>
              </div>


            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Rajesh"
                    value={form.firstName}
                    onChange={update("firstName")}
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Sharma"
                    value={form.lastName}
                    onChange={update("lastName")}
                    required
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="eg. sharmarajesh98@outlook.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    checked={form.type === "Design"}
                    onChange={() => setForm((p) => ({ ...p, type: "Design" }))}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Development"
                    checked={form.type === "Development"}
                    onChange={() => setForm((p) => ({ ...p, type: "Development" }))}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Collab"
                    checked={form.type === "Collab"}
                    onChange={() => setForm((p) => ({ ...p, type: "Collab" }))}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Other"
                    checked={form.type === "Other"}
                    onChange={() => setForm((p) => ({ ...p, type: "Other" }))}
                  />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Message"
                  placeholder="How can I help you?"
                  name="message"
                  value={form.message}
                  onChange={update("message")}
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex flex-col items-end gap-3">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </Button>

                  {status === "success" && (
                    <Typography variant="small" className="text-green-600 text-right">
                      Thanks! Your message has been sent. Check your inbox for a confirmation.
                    </Typography>
                  )}
                  {status === "error" && (
                    <Typography variant="small" className="text-red-600 text-right">
                      {errorMsg || "We couldn't send your message. Please try again."}
                    </Typography>
                  )}
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
