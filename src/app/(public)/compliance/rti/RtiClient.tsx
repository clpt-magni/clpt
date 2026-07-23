"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Info, 
  UserPlus, 
  UserCheck, 
  Mail, 
  Phone,
  FileText,
  ExternalLink,
  Scale
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const RTI_OFFICERS = [
  {
    name: "Dr. Rama Rao Nadendla",
    designation: "Principal / First Appellate Authority",
    mobile: "+91 9440101685",
    email: "principalclpt@gmail.com"
  },
  {
    name: "Dr. K. Vijay Kumar",
    designation: "Public Information Officer",
    mobile: "+91 8008825820",
    email: "vijaykumar.kolli1@gmail.com"
  }
];

export default function RTIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Right to Information"
        breadcrumbs={[
          { label: "Compliance", href: "/compliance/pci-approval" },
          { label: "RTI" }
        ]}
        description="Statutory declaration and transparency framework as mandated by the Right to Information Act, 2005."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-full font-black text-xs uppercase tracking-widest border border-slate-100">
                    Transparency in Governance
                </div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">RTI Act, 2005</h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    "To achieve transparency in administration, The Right to Information Act, 2005 was enacted. 
                    It is necessary for citizens to know how and why a particular decision is taken. 
                    The purpose of this Act is to bring in transparency in administration and to bring 
                    about transformation in administrative machinery making it more open and free."
                  </p>
                </div>
              </div>

              <Card className="border-none bg-primary/5 rounded-[2.5rem] p-10 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 text-primary/10">
                    <Scale size={120} />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-black text-primary-dark uppercase">Statutory Declaration</h3>
                    <div className="space-y-4 text-slate-600 font-bold leading-relaxed">
                       <p>
                         Citizens can seek information regarding the activities of the institute by submitting 
                         a written request with details including Name, address, contact telephone number 
                         and particulars of the information sought. 
                       </p>
                       <p>
                         Under the Act, the reason for seeking information **need not be given**. 
                         Requests should be addressed to the Public Information Officer along with 
                         the required fee of **Rs.10/-**.
                       </p>
                       <p className="text-sm text-slate-500 italic">
                         * Copies of documents will be charged according to the rates fixed by the State Information Commission, Andhra Pradesh.
                       </p>
                    </div>
                 </div>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <div className="p-8 bg-primary-dark text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                  <FileText size={48} className="text-secondary mb-6" />
                  <h4 className="text-xl font-black uppercase mb-2">Legal Text</h4>
                  <p className="text-white/60 text-sm font-medium mb-8">
                    View the full Right to Information Act, 2005 (No. 22 of 2005) documentation.
                  </p>
                  <Link 
                    href="/documents/compliance/rti/rti-act.pdf" 
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-2xl hover:bg-secondary hover:text-primary-dark transition-all group"
                  >
                     <span className="font-black text-xs uppercase tracking-widest">Download RTI Act</span>
                     <ExternalLink size={18} />
                  </Link>
               </div>

               <div className="p-8 border-2 border-dashed border-slate-100 rounded-[2.5rem] flex items-start gap-4">
                  <Info className="text-primary shrink-0" size={24} />
                  <p className="text-xs text-slate-400 font-bold leading-relaxed">
                    Declaration under Section 4(1)(B) of the RTI Act 2005 is strictly maintained on the institutional website for public access.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Officers Table */}
      <section className="py-24 bg-slate-50 relative">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
               <h3 className="text-3xl font-black text-primary uppercase tracking-tight">Designated Officers</h3>
               <p className="text-slate-500 font-medium italic">Entities responsible for processing information requests under the RTI framework.</p>
            </div>

            <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
               <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-primary-dark">
                      <TableRow className="border-none hover:bg-transparent">
                        <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest">Officer Name</TableHead>
                        <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest">Designation</TableHead>
                        <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest text-right">Contact Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {RTI_OFFICERS.map((off, idx) => (
                        <TableRow key={idx} className="border-slate-100 hover:bg-slate-50 transition-colors">
                          <TableCell className="py-10 px-10">
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center font-black text-lg">
                                   {off.name.split(' ').pop()?.[0]}
                                </div>
                                <span className="font-black text-slate-700 text-lg">{off.name}</span>
                             </div>
                          </TableCell>
                          <TableCell className="py-10 px-10">
                             <div className="space-y-1">
                                <span className="px-3 py-1 bg-secondary/10 text-primary-dark rounded-full text-[10px] font-black uppercase tracking-widest">
                                   Statutory Post
                                </span>
                                <p className="font-bold text-slate-500 mt-2">{off.designation}</p>
                             </div>
                          </TableCell>
                          <TableCell className="py-10 px-10 text-right space-y-3">
                             <div className="flex items-center justify-end gap-3 text-slate-600 font-black text-sm">
                                <span>{off.mobile}</span>
                                <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-primary transition-colors">
                                   <Phone size={14} />
                                </div>
                             </div>
                             <div className="flex items-center justify-end gap-3 text-primary font-black text-sm hover:text-primary-dark transition-colors">
                                <span>{off.email}</span>
                                <div className="p-2 bg-primary/5 rounded-lg">
                                   <Mail size={14} />
                                </div>
                             </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
               </CardContent>
            </Card>
         </div>
      </section>
    </div>
  );
}
