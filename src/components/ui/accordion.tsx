"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  type?: "single" | "multiple";
  className?: string;
  children: React.ReactNode;
  defaultValue?: string | string[];
}

const AccordionContext = React.createContext<{
  activeItems: string[];
  toggleItem: (value: string) => void;
}>({
  activeItems: [],
  toggleItem: () => {},
});

export function Accordion({ 
  type = "single", 
  className, 
  children,
  defaultValue = [] 
}: AccordionProps) {
  const [activeItems, setActiveItems] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  );

  const toggleItem = (value: string) => {
    if (type === "single") {
      setActiveItems(prev => prev.includes(value) ? [] : [value]);
    } else {
      setActiveItems(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value) 
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ 
  value, 
  className, 
  children 
}: { 
  value: string; 
  className?: string; 
  children: React.ReactNode 
}) {
  return (
    <div className={cn("border-b border-slate-100 last:border-0", className)}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({ 
  value, 
  className, 
  children 
}: { 
  value?: string; 
  className?: string; 
  children: React.ReactNode 
}) {
  const { activeItems, toggleItem } = React.useContext(AccordionContext);
  const isOpen = activeItems.includes(value!);

  return (
    <button
      type="button"
      onClick={() => toggleItem(value!)}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({ 
  value, 
  className, 
  children 
}: { 
  value?: string; 
  className?: string; 
  children: React.ReactNode 
}) {
  const { activeItems } = React.useContext(AccordionContext);
  const isOpen = activeItems.includes(value!);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
