import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import {
  AuthShell,
  BackToHome,
  AccessBadge,
  RoleToggle,
  TextInput,
  PasswordInput,
  Label,
} from "../components/AuthShared";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <AuthShell mode="login">
      <BackToHome onClick={() => navigate("/")} />
      <AccessBadge />

      <h1 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">Sign in</h1>
      <p className="mb-6 mt-1 text-sm text-slate-500">Sign in with your registered email</p>

      {/* <RoleToggle role={role} setRole={setRole} /> */}

      <div className="space-y-4">
        <div>
          <Label>Email address</Label>
          <TextInput
            icon={Mail}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label>Password</Label>
          <PasswordInput
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-500">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember((r) => !r)}
              className="h-4 w-4 rounded border-slate-300 accent-slate-900"
            />
            Remember me
          </label>
          <a href="#" className="font-medium text-slate-9600 hover:text-slate-900">
            Forgot password?
          </a>
        </div>

        <button className="mt-2 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Login
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="font-semibold text-slate-9600 hover:text-slate-900"
        >
          Sign up
        </button>
      </p>
    </AuthShell>
  );
}