'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Github, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
}

export default function Login ({ onBack }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            TaskFlow Platform
          </h2>
          <p className="text-lg text-gray-400">
            Only login via email is supported in your region.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Phone number / email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="block w-full pl-10 pr-10 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-transparent checked:bg-purple-600 checked:border-purple-600 focus:ring-offset-[#030014] focus:ring-2 focus:ring-purple-500 transition-colors"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember_me" className="text-gray-400">
                I confirm that I have read, consent and agree to SaasFlow's{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Use</a>
                {' '}and{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Log in
          </button>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Sign up
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#030014] text-gray-400">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full py-3 px-4 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button
              type="button"
              className="w-full py-3 px-4 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5 text-white" />
              GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};