"use client";

import React, { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";

interface ResourceGalleryProps {
  sectionKey: string;         // e.g. "seminarHall", "auditorium", etc.
  defaultMainImage: string;   // Fallback static main image path
  defaultGalleryImages?: string[]; // Fallback list of additional images
  mainImageAlt?: string;      // Accessibility alt description for the main image
}

export default function ResourceGallery({
  sectionKey,
  defaultMainImage,
  defaultGalleryImages = [],
  mainImageAlt = "Facility Showcase View",
}: ResourceGalleryProps) {
  const [galleryData, setGalleryData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchGallery = async () => {
      try {
        // Query the single Resources Gallery document
        const query = `*[_type == "resourcesGallery" && _id == "resourcesGallery"][0]`;
        const res = await client.fetch(query, {}, { cache: 'no-store' });
        if (isMounted) {
          setGalleryData(res);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch resources gallery from Sanity:", err);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGallery();
    return () => {
      isMounted = false;
    };
  }, []);

  // Extract the specific facility data from the single document
  const section = galleryData?.[sectionKey];
  const sanityImages = section?.images || [];
  const caption = section?.caption;

  const hasSanityImages = sanityImages.length > 0;

  // First image is the main showcase image
  const mainImageSrc = hasSanityImages ? urlFor(sanityImages[0]).url() : defaultMainImage;

  // Remaining images are shown at the bottom
  const galleryImages = hasSanityImages ? sanityImages.slice(1) : defaultGalleryImages;

  return (
    <div className="space-y-8 w-full">
      {/* 🖼️ Primary Showcase Image */}
      <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
        <img
          src={mainImageSrc}
          alt={mainImageAlt}
          className="w-full h-auto transition-transform duration-1000 group-hover:scale-110 object-cover max-h-[550px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
          <p className="text-white text-lg font-black uppercase tracking-tight">
            {caption || mainImageAlt}
          </p>
        </div>
      </div>

      {/* 🎞️ Bottom Additional Images List */}
      {galleryImages.length > 0 && (
        <div className="pt-4 space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Additional Galleries & Views
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img: any, i: number) => {
              const src = hasSanityImages ? urlFor(img).url() : img;
              return (
                <div
                  key={i}
                  className="rounded-[2rem] overflow-hidden shadow-md border-4 border-white hover:scale-[1.03] hover:shadow-xl transition-all duration-300 group cursor-zoom-in"
                >
                  <img
                    src={src}
                    alt={`${sectionKey} gallery view ${i + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
