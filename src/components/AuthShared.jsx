import { useState } from "react";
import {
  Plane,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Briefcase,
  Phone,
  ChevronDown,
  ShieldCheck,
  ArrowLeft,
  Check,
  Upload,
} from "lucide-react";

export const LOGIN_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80";
export const SIGNUP_IMAGE =
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1400&q=80";

export const GENDERS = ["Male", "Female", "Other"];
export const COUNTRIES = ["India", "United States", "United Kingdom", "UAE", "Singapore"];
export const COMPANY_TYPES = ["Travel Agency", "Tour Operator", "Corporate Reseller", "Freelance Agent"];
export const PROOF_TYPES = ["Aadhaar Card", "Voter ID", "Passport", "Driving License"];
export const AGENT_STEPS = ["Ownership Details", "Company Information", "Communication Details"];

function Field({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
      {children}
    </div>
  );
}

export function TextInput({ icon, type = "text", placeholder, value, onChange, prefix }) {
  return (
    <Field icon={icon}>
      {prefix && (
        <span className="absolute left-9 top-1/2 -translate-y-1/2 text-sm text-slate-500 border-r border-slate-200 pr-2">
          {prefix}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-slate-200 bg-white py-3 ${
          prefix ? "pl-20" : "pl-10"
        } pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10`}
      />
    </Field>
  );
}

export function PasswordInput({ placeholder, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <Field icon={Lock}>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-900"
      >
        {show ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
      </button>
    </Field>
  );
}

export function SelectInput({ icon: Icon, value, onChange, options, placeholder }) {
  return (
    <Field icon={Icon}>
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-9 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
      >
        <option value="" className="text-slate-400">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-slate-900">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </Field>
  );
}

export function FileInput({ icon: Icon, label }) {
  const [name, setName] = useState("");
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-500 transition hover:border-slate-900/50 hover:bg-slate-100">
      <Icon className="h-4.5 w-4.5 shrink-0 text-slate-400" />
      <span className="truncate">{name || label}</span>
      <Upload className="ml-auto h-4 w-4 shrink-0 text-slate-400" />
      <input
        type="file"
        className="hidden"
        onChange={(e) => setName(e.target.files[0]?.name || "")}
      />
    </label>
  );
}

export function Label({ children, required }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-slate-700">
      {children}
      {required && <span className="ml-0.5 text-slate-900">*</span>}
    </label>
  );
}

export function RoleToggle({ role, setRole }) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-100 p-1">
      {[
        { key: "user", label: "User", icon: User },
        { key: "agent", label: "Agent", icon: Briefcase },
      ].map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => setRole(key)}
          className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition ${
            role === key
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
}

export function ImagePanel({ mode }) {
  const image = mode === "login" ? LOGIN_IMAGE : SIGNUP_IMAGE;
  return (
    <div className="relative hidden overflow-hidden lg:block">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
            <Plane className="h-5 w-5 -rotate-45 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Cliqkar</p>
            <p className="text-xs tracking-wide text-slate-300">Travel Beyond</p>
          </div>
        </div>

        <div>
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-slate-200 backdrop-blur">
            Travel without limits
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {mode === "login" ? (
              <>Welcome back to the sky.</>
            ) : (
              <>
                Your journey starts <br /> with Cliqkar.
              </>
            )}
          </h2>
          <p className="mt-3 max-w-sm text-sm text-slate-300">
            {mode === "login"
              ? "Sign in to manage your bookings, boarding passes and rewards in one place."
              : "Create your account and unlock a seamless travel experience designed around you."}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MobileBrand() {
  return (
    <div className="mb-8 flex items-center gap-3 lg:hidden">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
        <Plane className="h-5 w-5 -rotate-45 text-slate-900" />
      </div>
      <div>
        <p className="text-base font-semibold text-slate-900">Cliqkar</p>
        <p className="text-xs text-slate-500">Travel Beyond</p>
      </div>
    </div>
  );
}

export function BackToHome({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-6 flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-900"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to home
    </button>
  );
}

export function AccessBadge() {
  return (
    <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-900">
      <ShieldCheck className="h-3.5 w-3.5" />
      Private member access
    </div>
  );
}

export function Stepper({ step }) {
  return (
    <div className="mb-8 flex items-center">
      {AGENT_STEPS.map((label, i) => {
        const index = i + 1;
        const done = index < step;
        const active = index === step;
        return (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-2">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  done
                    ? "bg-slate-900 text-white"
                    : active
                    ? "border-2 border-slate-900 text-slate-900"
                    : "border border-slate-300 text-slate-400"
                }`}
              >
                {done ? <Check className="h-3.5 w-3.5" /> : index}
              </div>
              <span
                className={`hidden text-xs font-medium sm:block ${
                  active || done ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>
            {index !== AGENT_STEPS.length && (
              <div className={`mx-2 h-px flex-1 ${done ? "bg-slate-900" : "bg-slate-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function AuthShell({ mode, children }) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 lg:grid-cols-2">
        <ImagePanel mode={mode} />
        <div className="p-6 sm:p-10 lg:p-12">
          <MobileBrand />
          {children}
        </div>
      </div>
    </div>
  );
}