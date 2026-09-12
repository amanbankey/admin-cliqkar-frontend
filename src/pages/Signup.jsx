import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  User,
  Phone,
  Globe,
  Building2,
  Briefcase,
  MapPin,
  CreditCard,
  FileText,
  Hash,
  ShieldCheck,
} from "lucide-react";
import {
  AuthShell,
  BackToHome,
  AccessBadge,
  RoleToggle,
  TextInput,
  PasswordInput,
  SelectInput,
  FileInput,
  Label,
  Stepper,
  GENDERS,
  COUNTRIES,
  COMPANY_TYPES,
  PROOF_TYPES,
} from "../components/AuthShared";

function AdminSignupForm() {
  return (
    <div className="space-y-4">
      {/* <div>
        <Label required>Full name</Label>
        <TextInput icon={User} placeholder="Enter your full name" />
      </div> */}

      <div className="grid grid-cols-1 gap-4  ">
        
        {/* <div>
          <Label required>Gender</Label>
          <SelectInput icon={User} options={GENDERS} placeholder="Select gender" />
        </div> */}
          <div>
        <Label required>Email address</Label>
        <TextInput icon={Mail} type="email" placeholder="Enter your email" />
      </div>
      
      {/* <div>
          <Label required>Phone number</Label>
          <TextInput icon={Phone} prefix="+91" placeholder="Phone number" />
        </div> */}
      </div>

    

      <div className="grid grid-cols-1 gap-4 ">
        <div>
          <Label required>Password</Label>
          <PasswordInput placeholder="Create password" />
        </div>
        {/* <div>
          <Label required>Confirm password</Label>
          <PasswordInput placeholder="Confirm password" />
        </div> */}
      </div>

      {/* <div>
        <Label required>Country</Label>
        <SelectInput icon={Globe} options={COUNTRIES} placeholder="Select country" />
      </div> */}

      <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
        Create account
      </button>
    </div>
  );
}

function AgentStepOne() {
  return (
    <div className="space-y-4">
      <div>
        <Label required>Full name</Label>
        <TextInput icon={User} placeholder="First name" />
      </div>

      <div className="grid grid-cols-1 gap-4 2">

       <div>
        <Label required>Email address</Label>
        <TextInput icon={Mail} type="email" placeholder="Email address" />
      </div>
              {/* <div>
          <Label required>Phone number</Label>
          <TextInput icon={Phone} prefix="+91" placeholder="10-digit phone number" />
        </div> */}
      </div>

     

      <div className="grid grid-cols-1 gap-4  ">
        <div>
          <Label required>Password</Label>
          <PasswordInput placeholder="Password" />
        </div>
        {/* <div>
          <Label required>Confirm password</Label>
          <PasswordInput placeholder="Confirm password" />
        </div> */}
      </div>

      {/* <div>
        <Label required>Country</Label>
        <SelectInput icon={Globe} options={COUNTRIES} placeholder="Select country" />
      </div> */}
    </div>
  );
}

function AgentStepTwo() {
  const [gst, setGst] = useState(false);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Company name</Label>
          <TextInput icon={Building2} placeholder="Company name" />
        </div>
        <div>
          <Label required>Type of company</Label>
          <SelectInput icon={Briefcase} options={COMPANY_TYPES} placeholder="Select company type" />
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={gst}
          onChange={() => setGst((g) => !g)}
          className="h-4 w-4 rounded border-slate-300 accent-slate-900"
        />
        Registered for GST?
      </label>
    </div>
  );
}

function AgentStepThree() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Office address</Label>
          <TextInput icon={MapPin} placeholder="Office address" />
        </div>
        <div>
          <Label required>Country</Label>
          <SelectInput icon={Globe} options={COUNTRIES} placeholder="Select country" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>State</Label>
          <TextInput icon={MapPin} placeholder="State" />
        </div>
        <div>
          <Label required>City / district</Label>
          <TextInput icon={Building2} placeholder="City / district" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Mobile number</Label>
          <TextInput icon={Phone} placeholder="Mobile number" />
        </div>
        <div>
          <Label>Alternative mobile number</Label>
          <TextInput icon={Phone} placeholder="Alternative mobile number" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>PAN number</Label>
          <TextInput icon={CreditCard} placeholder="PAN number" />
        </div>
        <div>
          <Label required>Upload PAN card</Label>
          <FileInput icon={CreditCard} label="Choose file" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Address proof type</Label>
          <SelectInput icon={FileText} options={PROOF_TYPES} placeholder="Select address proof type" />
        </div>
        <div>
          <Label required>Upload address proof (front)</Label>
          <FileInput icon={FileText} label="Choose file" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Upload address proof (back)</Label>
          <FileInput icon={FileText} label="Choose file" />
        </div>
        <div>
          <Label required>Upload office address proof</Label>
          <FileInput icon={FileText} label="Choose file" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>Pincode</Label>
          <TextInput icon={Hash} placeholder="Pincode" />
        </div>
        <div>
          <Label>Website</Label>
          <TextInput icon={Globe} placeholder="Website URL" />
        </div>
      </div>
    </div>
  );
}

function AgentSignupForm() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Stepper step={step} />
      {step === 1 && <AgentStepOne />}
      {step === 2 && <AgentStepTwo />}
      {step === 3 && <AgentStepThree />}

      <div className="mt-6 flex gap-3">
        {step > 1 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => step < 3 && setStep((s) => s + 1)}
          className="flex-1 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  return (
    <AuthShell mode="signup">
      <BackToHome onClick={() => navigate("/")} />
      <AccessBadge />

      <h1 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">Create your account</h1>
      <p className="mb-6 mt-1 text-sm text-slate-500">Sign up with your email</p>

      {/* <RoleToggle role={role} setRole={setRole} /> */}

       <AdminSignupForm /> 

      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-3.5 w-3.5 text-slate-900" />
        Your information is protected securely
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="font-semibold text-slate-900 hover:text-slate-900"
        >
          Log in
        </button>
      </p>
    </AuthShell>
  );
}