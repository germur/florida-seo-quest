// src/pages/Contact.tsx
import React, { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header"; // ✅ añade el header para mostrar el navbar

type Status = "idle" | "loading" | "success" | "error";

const services = ["Strategic SEO", "Digital Storytelling", "SEO Automation", "Personal Branding"];
const budgets = ["Not sure yet", "Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: services[0],
    budget: budgets[0],
    message: "",
    botField: "",
  });

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return form.name.trim().length > 1 && emailOk && form.message.trim().length > 2;
  }, [form]);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    if (!isValid) {
      setErrorMsg("Please complete name, a valid email and a short project description.");
      return;
    }
    try {
      setStatus("loading");
      const payload: Record<string, string> = {
        "form-name": "contact",
        "bot-field": form.botField,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        budget: form.budget,
        message: form.message,
      };
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: services[0],
        budget: budgets[0],
        message: "",
        botField: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again.");
      console.error("Contact form error:", err);
    }
  };

  return (
    <main className="min-h-screen"> {/* ✅ igual que en Home para consistencia */}
      <SEO page="contact" />
      <Header /> {/* ✅ navbar visible */}

      {/* Hero */}
      <section className="pt-24 md:pt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
              Tell us about your project
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl">
              Share context, goals and timeline. We’ll reply in 24–48h with next steps and a quick call slot.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• English/Spanish available</li>
              <li>• Florida-based focus (statewide and national too)</li>
              <li>• Strategic SEO + storytelling + automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form card */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="border border-border rounded-2xl bg-card p-6 md:p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left quick notes */}
                <div className="space-y-4">
                  <div className="rounded-xl bg-secondary/30 border border-border p-4">
                    <h3 className="font-semibold text-primary mb-2">What will happen next?</h3>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                      <li>We’ll read your context and goals.</li>
                      <li>We’ll email you back with 2–3 time slots.</li>
                      <li>Quick call (15–20min) to confirm fit and scope.</li>
                    </ol>
                  </div>

                  <div className="rounded-xl bg-secondary/30 border border-border p-4">
                    <h3 className="font-semibold text-primary mb-2">Prefer to talk?</h3>
                    <p className="text-sm text-muted-foreground">
                      Call or WhatsApp:{" "}
                      <a className="text-primary underline" href="tel:+573046807443">
                        +57 304 680 7443
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href="/case-studies"
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
                    >
                      View case studies
                    </a>
                    <a
                      href="tel:+573046807443"
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 transition"
                    >
                      Book a call
                    </a>
                  </div>
                </div>

                {/* Form */}
                <div>
                  {status === "success" ? (
                    <div className="rounded-lg border border-teal/30 bg-teal/10 p-4 text-sm">
                      <div className="font-semibold text-teal">Thanks! We’ll get back to you within 24–48h.</div>
                      <div className="text-muted-foreground mt-1">
                        You’ll receive a confirmation in your inbox shortly.
                      </div>
                    </div>
                  ) : null}

                  {status === "error" && errorMsg ? (
                    <div className="rounded-lg border border-red-300 bg-red-50 p-3 mb-4 text-red-700 text-sm">
                      {errorMsg}
                    </div>
                  ) : null}

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" value={form.botField} onChange={onChange("botField")} />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Full name</label>
                        <input
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={onChange("name")}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Email</label>
                        <input
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange("email")}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Phone (optional)</label>
                        <input
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={onChange("phone")}
                          placeholder="+1 305 ..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Company (optional)</label>
                        <input
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={onChange("company")}
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Service interest</label>
                        <select
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          name="service"
                          value={form.service}
                          onChange={onChange("service")}
                        >
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Budget (optional)</label>
                        <select
                          className="w-full h-11 px-3 rounded-md border border-border bg-background"
                          name="budget"
                          value={form.budget}
                          onChange={onChange("budget")}
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Project details</label>
                      <textarea
                        className="w-full min-h-[140px] px-3 py-2 rounded-md border border-border bg-background"
                        name="message"
                        placeholder="What do you need? Goals, timeline, examples…"
                        value={form.message}
                        onChange={onChange("message")}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading" || !isValid}
                        className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
                      >
                        {status === "loading" ? "Sending…" : "Send message"}
                      </button>
                      <a
                        href="/case-studies"
                        className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
                      >
                        View case studies
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
