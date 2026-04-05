"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Microscope, 
  ShieldCheck, 
  FileSearch, 
  FlaskConical, 
  Search,
  CheckCircle2,
  Table as TableIcon,
  Info
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const INSTRUMENTS = [
  { name: "HPTLC", model: "AETRON" },
  { name: "Particle Size Analyzer (Zetasizer)", model: "Malven Panalytical (HORIBA SZ-100)" },
  { name: "Electronic balance", model: "Essae DS852G" },
  { name: "Cyclomixer", model: "REMI CM 101" },
  { name: "UV Chamber", model: "JSGW" },
  { name: "Dissolution Test apparatus", model: "DISSO 2000" },
  { name: "Centrifuge", model: "REMI, FM-LC-4859" },
  { name: "Karl-Fischer Titrator", model: "LAB INDIA, KAFI" },
  { name: "Flame Photometer", model: "ELICO CL 378" },
  { name: "High Performance Liquid Chromatography (Isocratic)", model: "LC 20AT, SHIMADZU" },
  { name: "High Performance Liquid Chromatography (Prominence – i series)", model: "SHIMADZU LC 2030C 3D Plus" },
  { name: "Analytical Balance (1 mg sensitivity)", model: "SHIMADZU ATX 224" },
  { name: "Analytical Balance", model: "ESSAE  LF 225DR" },
  { name: "Cooling Centrifuge", model: "REMI EQUIPMENTS Pvt. Ltd.,  C-24BL" },
  { name: "Nephelometer", model: "SYSTRONICS" },
  { name: "Heating Mantle", model: "JSGW" },
  { name: "Micropipette (100-1000 µl)", model: "CYBERPET P.0" },
  { name: "Micropipette (5-50 µl)", model: "REVOMEX" },
  { name: "Analytical Column (C18)", model: "AGILENT TC-C18" },
  { name: "Analytical Column (C18)", model: "Phenomenex" },
  { name: "Analytical Column (C18)", model: "Analytical Technologies Ltd." },
  { name: "Analytical Column (C18)", model: "Phenomenex Cellulose 3 " },
  { name: "Analytical Column (C18)", model: "Phenomenex Amylose 1" },
  { name: "Fluorimeter", model: "PHOTOFLUROMETER-152, SYSTRONICS" },
  { name: "Humidity Controlled Oven", model: "REMI INST-LTD RH-6S" },
  { name: "Conductivity Meter", model: "ELICO LTD, CM180" },
  { name: "Rotary Flash Evaporator", model: "ROTALAB INDIA" },
  { name: "UV-Visible Spectrophotometer (Double Beam)", model: "LAB INDIA DOUBLE BEAM  UV 3092" },
  { name: "Hot Air Oven", model: "KEMI" },
  { name: "Freeze Drier", model: "ILSHIN LAB CO, LTD FD 5508" },
  { name: "Ultra Probe Sonicator", model: "OSCAR ULTRASONICS PVT. LTD., PROS, PR-250 MP" },
  { name: "FT-IR", model: "ALPHA-T BRUKER" },
  { name: "Hydraulic Pellet Press", model: "KIMAYA ENGINEERS" },
  { name: "Muffle Furnace", model: "KEMI " },
  { name: "Powder Density Tester", model: "Campbell Electronics, PD100" },
  { name: "Analytical Column (CN)", model: "INERTSIL" },
  { name: "Turbo Evaporator", model: "ZYMARK TURBOVAP L.V" },
  { name: "Water Bath Shaker", model: "REMI EQUIP.PVT. LTD." },
  { name: "Brookfield Viscometer", model: "BROOKFIELD ENGINEERING LABORATORIES" },
  { name: "Water Bath Sonicator", model: "Loba Life" },
  { name: "Tablet Friability Tester", model: "Lab India, FT1020" },
  { name: "Tablet Disintegration Tester", model: "Lab India, DT1000" },
  { name: "Automatic Hardness Tester", model: "Lab India, TH1050S" },
  { name: "Vacuum Filtration Unit", model: "Borosil" },
  { name: "Desiccator", model: "Borosil" },
  { name: "High Performance Liquid Chromatography  (gradient)", model: "AGILENT LC 1220 INFINITY" },
  { name: "Differential Scanning Calorimeter", model: "TA Instruments Q20" },
  { name: "Melting Point Test Apparatus", model: "LAB INDIA/MEPA" },
  { name: "Auto Titrator", model: "LAB INDIA/TITRA" },
  { name: "pH Meter", model: "LAB INDIA/PHAN" },
  { name: "Refrigerator", model: "Panasonic" },
  { name: "Refrigerator", model: "Godrej" },
  { name: "Hamilton Syringe", model: "Hamilton company Pvt. Ltd." },
  { name: "Fume Hood", model: "Modern lab interior" },
  { name: "Analytical Weights", model: "Keroy Mark" },
  { name: "Gas chromatography", model: "Shimadzu" },
];

export default function DrugTestingLabPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstruments = INSTRUMENTS.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Drug Testing Laboratory"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Drug Testing Lab" }
        ]}
        description="Chalapathi Drug Testing Laboratory (Central Instrumentation Lab) is a CDSCO approved facility equipped for sophisticated qualitative and quantitative analysis."
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-3/5 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   CDSCO Approved Facility
                </div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Technical Excellence</h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    "The Chalapathi Drug Testing Laboratory is equipped with high value sophisticated instruments 
                    for qualitative and quantitative analysis of various drugs and pharmaceuticals. 
                    The Central Drugs Standard Control Organization (CDSCO) has approved this laboratory 
                    to test and analyse 36 specific drugs."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <ShieldCheck className="text-primary mt-1" size={32} />
                  <div>
                    <h4 className="text-lg font-black text-primary-dark uppercase">Regulatory Status</h4>
                    <p className="text-sm text-slate-500 font-bold">Approved under CDSCO guidelines for 36 drugs.</p>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <FileSearch className="text-primary mt-1" size={32} />
                  <div>
                    <h4 className="text-lg font-black text-primary-dark uppercase">Analytical Capacity</h4>
                    <p className="text-sm text-slate-500 font-bold">Comprehensive qualitative and quantitative testing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 relative group">
                  <img 
                    src="/images/resources/drug-testing-lab/c1.jpg" 
                    alt="Instrument Lab" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent flex items-end p-8">
                     <p className="text-white font-black uppercase text-sm tracking-widest">Sophisticated Instrumentation</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Equipment Table Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-3">
                <TableIcon className="text-secondary" /> Sophisticated Equipment Registry
              </h3>
              <p className="text-slate-500 font-medium max-w-xl leading-relaxed">
                A complete inventory of the high-value instrumentation available for research and technical analysis.
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                placeholder="Search instruments/models..." 
                className="pl-10 h-12 bg-white border-slate-200 rounded-xl font-bold shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-primary-dark">
                    <TableRow className="border-none hover:bg-transparent">
                      <TableHead className="text-white font-black uppercase py-6 px-10 text-xs tracking-widest">Name of the Instrument</TableHead>
                      <TableHead className="text-white font-black uppercase py-6 px-10 text-xs tracking-widest text-right">Make / Model</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInstruments.map((inst, idx) => (
                      <TableRow key={idx} className="border-slate-100 hover:bg-slate-50 transition-colors">
                        <TableCell className="py-5 px-10">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                            <span className="font-bold text-slate-700">{inst.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="py-5 px-10 text-right font-black text-primary text-sm tracking-tight">
                          {inst.model}
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredInstruments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={2} className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">
                           No instruments found matching your search.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-start gap-4">
             <Info className="text-primary shrink-0" size={24} />
             <p className="text-sm text-slate-600 font-medium italic">
               Note: The instrumentation laboratory is the most expensive and advanced facility at the institution, 
               representing a significant investment in pharmaceutical research and quality control excellence.
             </p>
          </div>
        </div>
      </section>

      {/* Additional Visuals Area */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[3rem] overflow-hidden shadow-xl">
                 <img src="/images/resources/drug-testing-lab/c2.jpg" alt="Lab View 2" className="w-full h-auto" />
              </div>
              <div className="rounded-[3rem] overflow-hidden shadow-xl">
                 <img src="/images/resources/drug-testing-lab/c3.jpg" alt="Lab View 3" className="w-full h-auto" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
