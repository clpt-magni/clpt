"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { checkFacultyByPhone, saveFacultyProfile } from "./actions";
import {
  Loader2, Phone, User, Building, Mail, MapPin,
  CheckCircle2, ChevronRight, Briefcase, GraduationCap, ArrowRight, Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function DynamicList({ items, onChange, label, placeholder }: { items: string[], onChange: (items: string[]) => void, label: string, placeholder?: string }) {
  const handleAdd = () => onChange([...items, ""]);
  const handleRemove = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    onChange(newItems);
  };
  const handleChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">{label}</label>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-medium text-slate-800 transition-all hover:bg-slate-100/50"
            placeholder={placeholder}
          />
          <button type="button" onClick={() => handleRemove(index)} className="px-4 text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 rounded-2xl transition-colors font-bold text-xl">
            &times;
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAdd} className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 bg-primary/5 px-4 py-2 rounded-xl transition-colors">
        + Add Item
      </button>
    </div>
  );
}

function ComplexObjectList({ title, fields, items, onChange, emptyItem }: { title: string, fields: { key: string, label: string, type: string, options?: string[] }[], items: any[], onChange: (items: any[]) => void, emptyItem: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempItem, setTempItem] = useState<any>(emptyItem);

  const openModal = () => {
    setTempItem(emptyItem);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    onChange([...items, tempItem]);
    setIsModalOpen(false);
  };

  const handleRemove = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    onChange(newItems);
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">{title}</label>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="truncate text-sm font-semibold text-slate-700">
              {Object.values(item)[0] as string} {/* Show first field as title */}
            </div>
            <button type="button" onClick={() => handleRemove(index)} className="text-red-400 hover:text-red-600 font-bold ml-4">
              &times;
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={openModal} className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 bg-primary/5 px-4 py-2 rounded-xl transition-colors">
        + Add {title}
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-black text-slate-800">Add {title}</h3>
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">&times;</button>
              </div>
              <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
                {fields.map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{f.label}</label>
                    {f.type === "select" ? (
                      <select 
                        value={tempItem[f.key] || ""} 
                        onChange={(e) => setTempItem({...tempItem, [f.key]: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-medium text-slate-800"
                      >
                        <option value="">Select...</option>
                        {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    ) : (
                      <input 
                        type={f.type} 
                        value={tempItem[f.key] || ""} 
                        onChange={(e) => setTempItem({...tempItem, [f.key]: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-medium text-slate-800"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <Button type="button" onClick={handleSave} className="w-full h-12 rounded-xl font-bold">
                  Save Item
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FacultyUpdatePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phoneQuery, setPhoneQuery] = useState("");
  const [passwordQuery, setPasswordQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Faculty Data State
  const [existingId, setExistingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    prefix: "Mr.",
    name: "",
    designation: "Assistant Professor",
    department: "Pharmaceutics",
    email: "",
    phone: "",
    officeLocation: "",
    teachingExperience: "",
    industryExperience: "",
    pciRegistration: "",
    dateOfJoining: "",
    specializations: [] as string[],
    subjectsUG: [] as string[],
    subjectsPG: [] as string[],
    innovativeTeaching: [] as string[],
    booksPublished: "",
    bookChapters: "",
    patentsGranted: "",
    patentsPublished: "",
    phdGuided: "",
    citations: "",
    hIndex: "",
    i10Index: "",
    googleScholar: "",
    orcid: "",
    researchGate: "",
    linkedIn: "",
    conferences: [] as string[],
    awards: [] as string[],
    memberships: [] as string[],
    password: "Clptf@2026",
    imageBase64: "",
    qualifications: [] as { degree: string, institution: string, year: string }[],
    publications: [] as { title: string, journal: string, year: string, impactFactor: string, link: string }[],
    patents: [] as { title: string, appNumber: string, status: string, year: string }[],
    grants: [] as { title: string, agency: string, amount: string, status: string }[],
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageBase64: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneQuery || !passwordQuery) {
      setErrorMsg("Please enter both phone number and password.");
      return;
    }

    setErrorMsg("");
    setLoading(true);
    try {
      const faculty = await checkFacultyByPhone(phoneQuery);
      if (faculty) {
        // Password Security Check
        const savedPassword = faculty.password || "Clptf@2026";
        if (passwordQuery !== savedPassword) {
          setErrorMsg("Incorrect password. Access denied.");
          setLoading(false);
          return;
        }

        setExistingId(faculty._id);
        setFormData({
          prefix: faculty.prefix || "Mr.",
          name: faculty.name || "",
          designation: faculty.designation || "Assistant Professor",
          department: faculty.department || "Pharmaceutics",
          email: faculty.email || "",
          phone: faculty.phone || phoneQuery,
          officeLocation: faculty.officeLocation || "",
          dateOfJoining: faculty.dateOfJoining || "",
          teachingExperience: faculty.teachingExperience?.toString() || "",
          industryExperience: faculty.industryExperience?.toString() || "",
          pciRegistration: faculty.pciRegistration || "",
          specializations: faculty.specializations || [],
          subjectsUG: faculty.subjectsUG || [],
          subjectsPG: faculty.subjectsPG || [],
          innovativeTeaching: faculty.innovativeTeaching?.map((block: any) => block.children?.[0]?.text || "").filter(Boolean) || [],
          booksPublished: faculty.booksPublished?.toString() || "",
          bookChapters: faculty.bookChapters?.toString() || "",
          patentsGranted: faculty.patentsGranted?.toString() || "",
          patentsPublished: faculty.patentsPublished?.toString() || "",
          phdGuided: faculty.phdGuided?.toString() || "",
          citations: faculty.citations?.toString() || "",
          hIndex: faculty.hIndex?.toString() || "",
          i10Index: faculty.i10Index?.toString() || "",
          googleScholar: faculty.socialLinks?.googleScholar || "",
          orcid: faculty.socialLinks?.orcid || "",
          researchGate: faculty.socialLinks?.researchGate || "",
          linkedIn: faculty.socialLinks?.linkedIn || "",
          conferences: faculty.conferences || [],
          awards: faculty.awards || [],
          memberships: faculty.memberships || [],
          password: savedPassword,
          imageBase64: "", // Don't fetch the existing image base64, we only set if user uploads a new one
          qualifications: faculty.qualifications || [],
          publications: faculty.publications || [],
          patents: faculty.patents || [],
          grants: faculty.grants || [],
        });
      } else {
        if (passwordQuery !== "Clptf@2026") {
          setErrorMsg("New registrations must use the default college password.");
          setLoading(false);
          return;
        }
        // For new profiles, set the entered password as their new default
        setExistingId(null);
        setFormData(prev => ({ ...prev, phone: phoneQuery, password: "Clptf@2026" }));
      }
      setStep(2);
    } catch (error) {
      console.error(error);
      setErrorMsg("Error communicating with database.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await saveFacultyProfile(formData, existingId || undefined);
      if (res.success) {
        setStep(3);
      } else {
        alert("Failed to save profile: " + res.error);
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-medium text-slate-800 transition-all hover:bg-slate-100/50";
  const labelClassName = "block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Faculty Services Portal"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faculty Services", href: "/faculty" },
          { label: "Profile Manager" }
        ]}
        description="Securely manage and update your institutional academic profile."
      />

      <section className="py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -ml-40 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                className="max-w-xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-[2rem] flex items-center justify-center mb-8 border border-primary/10 shadow-inner">
                  <Phone size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                  Identity Verification
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                  To securely access your profile or register as new faculty, please verify your registered mobile number.
                </p>
                <form onSubmit={handlePhoneSubmit} className="space-y-8">
                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl text-sm font-semibold border border-red-100 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                      {errorMsg}
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className={labelClassName}>
                        Mobile Number
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                          +91
                        </div>
                        <input
                          type="tel"
                          required
                          value={phoneQuery}
                          onChange={(e) => setPhoneQuery(e.target.value)}
                          placeholder="Enter 10-digit number"
                          className={`${inputClassName} pl-14 text-lg tracking-wide`}
                          maxLength={10}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClassName}>
                        Account Password
                      </label>
                      <input
                        type="password"
                        required
                        value={passwordQuery}
                        onChange={(e) => setPasswordQuery(e.target.value)}
                        placeholder="Enter your password"
                        className={`${inputClassName} text-lg tracking-wide`}
                      />
                    </div>
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-16 text-sm font-black uppercase tracking-widest rounded-2xl group hover:shadow-lg hover:shadow-primary/20 transition-all mt-4">
                    {loading ? <Loader2 className="animate-spin" /> : "Verify & Proceed"}
                    {!loading && <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
              >
                {/* Header Section */}
                <div className="bg-slate-900 px-12 py-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mt-10 -mr-10 pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white rounded-full font-black text-[10px] uppercase tracking-widest border border-white/10 mb-4">
                        {existingId ? "Profile Maintenance" : "New Registration"}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                        {existingId ? "Update Academic Profile" : "Create Academic Profile"}
                      </h2>
                    </div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md text-white rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                      <User size={32} />
                    </div>
                  </div>
                </div>

                <div className="p-12">
                  <form onSubmit={handleFormSubmit} className="space-y-12">

                    {/* Section 1: Personal Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><User size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Personal Information</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <label className={labelClassName}>Prefix</label>
                          <select
                            value={formData.prefix}
                            onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                            className={inputClassName}
                          >
                            <option>Dr.</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                            <option>Prof.</option>
                          </select>
                        </div>
                        <div className="md:col-span-3">
                          <label className={labelClassName}>Full Name (As per records)</label>
                          <input
                            type="text" required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputClassName}
                            placeholder="e.g., Ramesh Kumar"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Department & Designation */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Building size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Professional Placement</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClassName}>Designation / Role</label>
                          <select
                            required
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className={inputClassName}
                          >
                            <option value="">Select Designation</option>
                            <option value="Head of Department (HOD)">Head of Department (HOD)</option>
                            <option value="Professor">Professor</option>
                            <option value="Associate Professor">Associate Professor</option>
                            <option value="Assistant Professor">Assistant Professor</option>
                            <option value="Senior Lecturer">Senior Lecturer</option>
                            <option value="Lecturer">Lecturer</option>
                            <option value="Professor Emeritus">Professor Emeritus</option>
                            <option value="Adjunct Professor">Adjunct Professor</option>
                            <option value="Visiting Faculty">Visiting Faculty</option>
                            <option value="Guest Lecturer">Guest Lecturer</option>
                            <option value="Research Scientist">Research Scientist</option>
                            <option value="Postdoctoral Fellow">Postdoctoral Fellow</option>
                            <option value="Research Associate">Research Associate</option>
                            <option value="Research Scholar / Ph.D. Candidate">Research Scholar / Ph.D. Candidate</option>
                            <option value="Teaching Assistant (TA)">Teaching Assistant (TA)</option>
                            <option value="Librarian">Librarian</option>
                            <option value="Assistant Librarian">Assistant Librarian</option>
                            <option value="Placement Officer">Placement Officer</option>
                            <option value="Laboratory Technician">Laboratory Technician</option>
                            <option value="System Administrator">System Administrator</option>
                            <option value="Adjunct Faculty">Adjunct Faculty</option>
                            <option value="Principal and Dean">Principal and Dean</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClassName}>Core Department</label>
                          <select
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className={inputClassName}
                          >
                            <option>Pharmaceutics</option>
                            <option>Pharmaceutical Chemistry</option>
                            <option>Pharmacology</option>
                            <option>Pharmacognosy</option>
                            <option>Pharmaceutical Analysis</option>
                            <option>Pharmacy Practice</option>
                            <option>Regulatory Affairs</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Contact Details & Security */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Mail size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Contact & Security</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClassName}>Institutional Email</label>
                          <input
                            type="email" required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>Mobile Number</label>
                          <input
                            type="tel" required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>Account Password</label>
                          <input
                            type="text" required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>Office Location (Cabin/Room)</label>
                          <input
                            type="text"
                            value={formData.officeLocation}
                            onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                            placeholder="e.g., Ground Floor, Room 102"
                            className={inputClassName}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Experience & Credentials */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><GraduationCap size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Experience & Credentials</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6">
                          <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {formData.imageBase64 ? (
                              <img src={formData.imageBase64} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                              <User size={32} className="text-slate-400" />
                            )}
                          </div>
                          <div className="flex-grow w-full">
                            <label className={labelClassName}>Profile Image</label>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                            />
                            <p className="text-xs text-slate-400 mt-2">Leave empty to keep your existing photo. Recommended ratio 1:1.</p>
                          </div>
                        </div>

                        <div>
                          <label className={labelClassName}>Teaching Exp. (Yrs)</label>
                          <input
                            type="number"
                            value={formData.teachingExperience}
                            onChange={(e) => setFormData({ ...formData, teachingExperience: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>Industry Exp. (Yrs)</label>
                          <input
                            type="number"
                            value={formData.industryExperience}
                            onChange={(e) => setFormData({ ...formData, industryExperience: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>Date of Joining</label>
                          <input
                            type="date"
                            value={formData.dateOfJoining}
                            onChange={(e) => setFormData({ ...formData, dateOfJoining: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>PCI Registration No.</label>
                          <input
                            type="text"
                            value={formData.pciRegistration}
                            onChange={(e) => setFormData({ ...formData, pciRegistration: e.target.value })}
                            className={inputClassName}
                          />
                        </div>
                        <div className="md:col-span-4 mt-4 border-t border-slate-100 pt-6">
                          <ComplexObjectList 
                            title="Education & Qualifications"
                            items={formData.qualifications}
                            onChange={(items) => setFormData({...formData, qualifications: items})}
                            emptyItem={{ degree: "", institution: "", year: "" }}
                            fields={[
                              { key: "degree", label: "Degree (e.g., Ph.D.)", type: "text" },
                              { key: "institution", label: "Institution/University", type: "text" },
                              { key: "year", label: "Year of Passing", type: "text" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Academic Operations */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Briefcase size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Academic Operations</h3>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <DynamicList
                            label="Specializations"
                            items={formData.specializations}
                            onChange={(items) => setFormData({ ...formData, specializations: items })}
                            placeholder="e.g., Clinical Pharmacy, Pharmacology"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <DynamicList
                              label="Subjects Taught (UG)"
                              items={formData.subjectsUG}
                              onChange={(items) => setFormData({ ...formData, subjectsUG: items })}
                            />
                          </div>
                          <div>
                            <DynamicList
                              label="Subjects Taught (PG)"
                              items={formData.subjectsPG}
                              onChange={(items) => setFormData({ ...formData, subjectsPG: items })}
                            />
                          </div>
                        </div>
                        <div className="pt-4">
                          <DynamicList
                            label="Innovative Teaching Methods"
                            items={formData.innovativeTeaching}
                            onChange={(items) => setFormData({ ...formData, innovativeTeaching: items })}
                            placeholder="e.g., Flipped Classroom, Project-based learning"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 6: Research Metrics */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><CheckCircle2 size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">Research & Achievements</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        <div>
                          <label className={labelClassName}>Books Published</label>
                          <input type="number" value={formData.booksPublished} onChange={(e) => setFormData({ ...formData, booksPublished: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>Book Chapters</label>
                          <input type="number" value={formData.bookChapters} onChange={(e) => setFormData({ ...formData, bookChapters: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>Patents Granted</label>
                          <input type="number" value={formData.patentsGranted} onChange={(e) => setFormData({ ...formData, patentsGranted: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>Ph.D. Guided</label>
                          <input type="number" value={formData.phdGuided} onChange={(e) => setFormData({ ...formData, phdGuided: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>Citations</label>
                          <input type="number" value={formData.citations} onChange={(e) => setFormData({ ...formData, citations: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>h-Index</label>
                          <input type="number" value={formData.hIndex} onChange={(e) => setFormData({ ...formData, hIndex: e.target.value })} className={inputClassName} />
                        </div>
                        <div>
                          <label className={labelClassName}>i10-Index</label>
                          <input type="number" value={formData.i10Index} onChange={(e) => setFormData({ ...formData, i10Index: e.target.value })} className={inputClassName} />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <DynamicList
                            label="Conferences"
                            items={formData.conferences}
                            onChange={(items) => setFormData({ ...formData, conferences: items })}
                          />
                        </div>
                        <div>
                          <DynamicList
                            label="Awards & Honors"
                            items={formData.awards}
                            onChange={(items) => setFormData({ ...formData, awards: items })}
                          />
                        </div>
                        <div>
                          <DynamicList
                            label="Professional Memberships"
                            items={formData.memberships}
                            onChange={(items) => setFormData({ ...formData, memberships: items })}
                          />
                        </div>
                      </div>

                      <div className="space-y-8 mt-10 pt-8 border-t border-slate-100">
                        <ComplexObjectList 
                          title="Publications"
                          items={formData.publications}
                          onChange={(items) => setFormData({...formData, publications: items})}
                          emptyItem={{ title: "", journal: "", year: "", impactFactor: "", link: "" }}
                          fields={[
                            { key: "title", label: "Paper Title", type: "text" },
                            { key: "journal", label: "Journal Name", type: "text" },
                            { key: "year", label: "Year", type: "text" },
                            { key: "impactFactor", label: "Impact Factor", type: "text" },
                            { key: "link", label: "DOI / Link", type: "url" },
                          ]}
                        />
                        <ComplexObjectList 
                          title="Patents & Copyrights"
                          items={formData.patents}
                          onChange={(items) => setFormData({...formData, patents: items})}
                          emptyItem={{ title: "", appNumber: "", status: "Filed", year: "" }}
                          fields={[
                            { key: "title", label: "Title", type: "text" },
                            { key: "appNumber", label: "Application Number", type: "text" },
                            { key: "status", label: "Status", type: "select", options: ["Filed", "Granted", "Published"] },
                            { key: "year", label: "Year", type: "text" },
                          ]}
                        />
                        <ComplexObjectList 
                          title="Grants & Funded Projects"
                          items={formData.grants}
                          onChange={(items) => setFormData({...formData, grants: items})}
                          emptyItem={{ title: "", agency: "", amount: "", status: "Ongoing" }}
                          fields={[
                            { key: "title", label: "Project Title", type: "text" },
                            { key: "agency", label: "Funding Agency", type: "text" },
                            { key: "amount", label: "Amount Granted", type: "text" },
                            { key: "status", label: "Status", type: "select", options: ["Ongoing", "Completed"] },
                          ]}
                        />
                      </div>
                    </div>

                    {/* Section 7: External Links */}
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><User size={16} /></div>
                        <h3 className="text-xl font-black text-slate-800">External Profiles</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClassName}>Google Scholar URL</label>
                          <input type="url" value={formData.googleScholar} onChange={(e) => setFormData({ ...formData, googleScholar: e.target.value })} className={inputClassName} placeholder="https://scholar.google.com/..." />
                        </div>
                        <div>
                          <label className={labelClassName}>ORCID iD URL</label>
                          <input type="url" value={formData.orcid} onChange={(e) => setFormData({ ...formData, orcid: e.target.value })} className={inputClassName} placeholder="https://orcid.org/..." />
                        </div>
                        <div>
                          <label className={labelClassName}>ResearchGate URL</label>
                          <input type="url" value={formData.researchGate} onChange={(e) => setFormData({ ...formData, researchGate: e.target.value })} className={inputClassName} placeholder="https://www.researchgate.net/..." />
                        </div>
                        <div>
                          <label className={labelClassName}>LinkedIn URL</label>
                          <input type="url" value={formData.linkedIn} onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })} className={inputClassName} placeholder="https://linkedin.com/in/..." />
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex flex-col-reverse md:flex-row gap-4">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full md:w-1/3 h-16 rounded-2xl font-black uppercase tracking-widest text-xs border-slate-200 text-slate-500 hover:bg-slate-50">
                        Back to Search
                      </Button>
                      <Button type="submit" disabled={loading} className="w-full md:w-2/3 h-16 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                        {loading ? <Loader2 className="animate-spin" /> : (
                          <span className="flex items-center justify-center gap-2">
                            <Save size={18} /> {existingId ? "Commit Changes to Database" : "Create Official Profile"}
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto bg-white p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 text-center"
              >
                <div className="w-28 h-28 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-50" />
                  <CheckCircle2 size={48} strokeWidth={2} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Database Updated!</h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                  The institutional faculty registry has been successfully synchronized. The changes are now live and visible on the main website.
                </p>
                <Button onClick={() => setStep(1)} className="h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                  Process Another Record
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
