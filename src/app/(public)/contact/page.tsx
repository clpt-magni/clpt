import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-roboto mb-12">
      {/* Page Header */}
      <section className="bg-primary-dark py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold font-poppins mb-2">Contact Us</h1>
          <p className="text-white/70 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary font-poppins mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
               {[
                 { 
                   title: "Our Location", 
                   desc: "Chalapathi Nagar, Lam, Guntur - 522 034, Andhra Pradesh, India.", 
                   icon: MapPin 
                 },
                 { 
                   title: "Phone Numbers", 
                   desc: "Principal: +91 863-2524124, 2524125\nOffice: +91 863-2524126", 
                   icon: Phone 
                 },
                 { 
                   title: "Email Addresses", 
                   desc: "Principal: principalcips@gmail.com\nOffice: officecips@gmail.com", 
                   icon: Mail 
                 }
               ].map((item, i) => (
                 <Card key={i} className="border-none shadow-lg bg-white p-6 hover:shadow-2xl transition-all border-l-4 border-primary group">
                    <CardContent className="p-0 flex items-start gap-6">
                       <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                          <item.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-primary-dark font-poppins mb-2 uppercase tracking-tight">{item.title}</h4>
                          <p className="text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                            {item.desc}
                          </p>
                       </div>
                    </CardContent>
                 </Card>
               ))}
            </div>

            <div className="pt-8">
               <h3 className="text-xl font-bold text-primary-dark font-poppins mb-6 border-b pb-4">Connect with Us</h3>
               <div className="flex gap-4">
                  {/* Facebook */}
                  <a href="#" className="bg-[#1877F2] hover:scale-110 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="#" className="bg-[#000000] hover:scale-110 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all">
                    <svg width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
                  </a>
                  {/* Linkedin */}
                  <a href="#" className="bg-[#0A66C2] hover:scale-110 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                  </a>
                  {/* Youtube */}
                  <a href="#" className="bg-[#FF0000] hover:scale-110 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
               </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary font-poppins mb-8">Find Us on Map</h2>
            <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15302.260846067711!2d80.4072671!3d16.3470817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7536ab430e37%3A0xe7a505b38f8306ee!2sChalapathi%20Institute%20of%20Pharmaceutical%20Sciences!5e0!3m2!1sen!2sin!4v1709736853245!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
