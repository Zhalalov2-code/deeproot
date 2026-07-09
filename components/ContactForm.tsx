"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { NeonButton } from "@/components/NeonButton";
import { useSiteContent } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "company" | "message";
type FieldErrors = Partial<Record<Exclude<FieldName, "company">, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues: Record<FieldName, string> = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const content = useSiteContent();
  const { fields, form, button } = content.contact;

  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Honeypot: hidden from users, only bots fill it.
  const [trap, setTrap] = useState("");

  const update = (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = form.required;
    if (!values.email.trim()) next.email = form.required;
    else if (!EMAIL_REGEX.test(values.email.trim())) next.email = form.invalidEmail;
    if (!values.message.trim()) next.message = form.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company_url: trap })
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      setValues(emptyValues);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel flex min-h-[420px] flex-col items-center justify-center rounded-lg p-8 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-cyan drop-shadow-[0_0_20px_rgba(0,213,255,.8)]" />
        <h3 className="mt-6 text-2xl font-semibold text-white">{form.successTitle}</h3>
        <p className="mt-4 max-w-md text-base leading-7 text-slate-300">{form.successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-cyan underline underline-offset-4 transition hover:text-white"
        >
          {form.submitAgain}
        </button>
      </motion.div>
    );
  }

  return (
    <form className="glass-panel rounded-lg p-6 sm:p-9" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={fields.name}
          placeholder={fields.namePlaceholder}
          value={values.name}
          onChange={update("name")}
          error={errors.name}
        />
        <Field
          label={fields.email}
          placeholder={fields.emailPlaceholder}
          type="email"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
        />
      </div>
      <div className="mt-5">
        <Field
          label={fields.company}
          placeholder={fields.companyPlaceholder}
          value={values.company}
          onChange={update("company")}
        />
      </div>
      <label className="mt-5 block text-sm font-semibold text-slate-200">
        {fields.message}
        <textarea
          className={`mt-3 min-h-44 w-full resize-none rounded-md border bg-[#030a18]/80 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:shadow-neon ${
            errors.message ? "border-red-400/70 focus:border-red-400" : "border-neon/25 focus:border-cyan"
          }`}
          placeholder={fields.messagePlaceholder}
          value={values.message}
          onChange={update("message")}
        />
        {errors.message ? <span className="mt-1.5 block text-xs text-red-300">{errors.message}</span> : null}
      </label>

      {/* Honeypot field — visually hidden, off the tab order, ignored by real users. */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(event) => setTrap(event.target.value)}
          />
        </label>
      </div>

      <AnimatePresence>
        {status === "error" ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 rounded-md border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200"
            role="alert"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <span>
              <b className="block font-semibold text-red-100">{form.errorTitle}</b>
              {form.errorText}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <p className="mt-6 text-xs leading-5 text-slate-400">
        {form.privacyNotice}{" "}
        <Link href="/datenschutz" className="text-cyan underline underline-offset-2 transition hover:text-white">
          {form.privacyLink}
        </Link>
        .
      </p>

      <div className="mt-5">
        <NeonButton type="submit" disabled={status === "sending"}>
          {status === "sending" ? form.sending : button}
        </NeonButton>
      </div>
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-200">
      {label}
      <input
        className={`mt-3 h-12 w-full rounded-md border bg-[#030a18]/80 px-4 text-white outline-none transition placeholder:text-slate-500 focus:shadow-neon ${
          error ? "border-red-400/70 focus:border-red-400" : "border-neon/25 focus:border-cyan"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
