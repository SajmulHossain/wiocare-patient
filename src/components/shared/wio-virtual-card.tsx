"use client";

import { memo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import Image from "next/image";
import {
  RiBankCardLine,
  RiDownloadCloud2Line,
  RiLoader4Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { CustomQRCode } from "@/components/common/custom-qr-code";
import { toast } from "sonner";
import wiocareVector from "@/assets/images/logos/wiocare-vector.png";

export interface WioVirtualCardProps {
  wioId: string;
  name: string;
  bloodGroup: string;
  address: string;
}

// ──────────────────────────────────────────────────────────
// Extracted as stable top-level components so that parent
// re-renders (flip / download state changes) do NOT cause
// React to unmount & remount the QR <canvas>. This was the
// root cause of the QR code vanishing during download.
// ──────────────────────────────────────────────────────────

const CardFront = memo(
  ({ wioId, name }: Pick<WioVirtualCardProps, "wioId" | "name">) => (
    <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-[#11A89D] to-[#0A8894] p-6 text-white overflow-hidden flex flex-col shadow-xl">
      {/* Background Logo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center scale-150">
        <Image
          src={wiocareVector}
          alt="WioCare Background"
          className="object-contain w-3/4 h-3/4"
        />
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-wider">
            VIRTUAL WIO CARD
          </h2>
        </div>
        <div className="p-2 bg-[#06303B]/60 rounded-xl backdrop-blur-md">
          <RiBankCardLine className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="relative z-10 mt-auto mb-6">
        <p className="text-xs text-white/80 tracking-widest mt-1 uppercase">
          UNIFIED MEMBER ID
        </p>
        <p className="text-3xl font-bold tracking-[0.25em] drop-shadow-md">
          {wioId}
        </p>
      </div>

      <div className="relative z-10">
        <p className="text-xs text-white/80 tracking-widest uppercase mb-1">
          CARDHOLDER
        </p>
        <p className="text-xl font-bold tracking-wide uppercase">{name}</p>
      </div>
    </div>
  ),
);
CardFront.displayName = "CardFront";

const CardBack = memo(
  ({ wioId, name, bloodGroup, address }: WioVirtualCardProps) => (
    <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-[#11A89D] to-[#0A8894] p-6 text-white overflow-hidden flex shadow-xl items-center">
      {/* Background Logo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center scale-150">
        <Image
          src={wiocareVector}
          alt="WioCare Background"
          className="object-contain w-3/4 h-3/4"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center gap-6">
        <div>
          <p className="text-xs text-white/80 tracking-widest uppercase mb-1">
            BLOOD GROUP
          </p>
          <p className="text-3xl font-bold">{bloodGroup}</p>
        </div>
        <div>
          <p className="text-xs text-white/80 tracking-widest uppercase mb-1">
            ADDRESS
          </p>
          <p className="text-md font-medium leading-snug pr-4">{address}</p>
        </div>
      </div>

      <div className="relative z-10 shrink-0 rounded-xl bg-white/20 shadow-lg">
        {/* Render the shared QR Code Component here, ensuring no internal download button */}
        <CustomQRCode
          data={`WioCare Member: ${wioId} | ${name} | ${bloodGroup}`}
          width={80}
          height={80}
          allowDownload={false}
          className="p-0 rounded-none bg-transparent"
        />
      </div>
    </div>
  ),
);
CardBack.displayName = "CardBack";

export const WioVirtualCard = ({
  wioId,
  name,
  bloodGroup,
  address,
}: WioVirtualCardProps) => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Download the card by rasterizing the hidden high-res DOM nodes
  const downloadCard = async () => {
    if (!exportRef.current) return;
    try {
      setIsDownloading(true);

      const dataUrl = await toPng(exportRef.current, {
        quality: 1.0,
        pixelRatio: 3,
        // cacheBust is intentionally omitted so it doesn't corrupt Base64 data URLs
      });

      const link = document.createElement("a");
      link.download = `wio-virtual-card-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Virtual card downloaded successfully!");
    } catch (err) {
      console.error("Failed to generate card image", err);
      toast.error("Failed to download card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      {/* 1. INTERACTIVE UI (3D Flipping Card) */}
      <button
        type="button"
        className="relative w-full aspect-[1.586/1] cursor-pointer group perspective-[1000px] block text-left"
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        tabIndex={0}
        aria-label="Flip virtual card"
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <CardFront wioId={wioId} name={name} />
          </div>
          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <CardBack
              wioId={wioId}
              name={name}
              bloodGroup={bloodGroup}
              address={address}
            />
          </div>
        </div>
      </button>

      <p className="text-xs text-muted-foreground animate-pulse">
        Click card to flip
      </p>

      <Button
        onClick={downloadCard}
        disabled={isDownloading}
        className="w-full gap-2 rounded-full shadow-lg hover:shadow-primary/20 transition-all"
      >
        {isDownloading ? (
          <RiLoader4Line className="w-5 h-5 animate-spin" />
        ) : (
          <RiDownloadCloud2Line className="w-5 h-5" />
        )}
        Download Pixel-Perfect Card
      </Button>

      {/* 2. HIDDEN EXPORT UI */}
      {/* We position this far off-screen. We render both the front and the back side-by-side.
          We use exact pixel widths (1200px total, 560px per card) to ensure html-to-image renders crisply without mobile responsive stacking. */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div
          ref={exportRef}
          className="flex flex-col gap-6 p-8 bg-transparent w-156"
        >
          {/* Top: Front */}
          <div className="w-140 h-88.25">
            <CardFront wioId={wioId} name={name} />
          </div>
          {/* Bottom: Back */}
          <div className="w-140 h-88.25">
            <CardBack
              wioId={wioId}
              name={name}
              bloodGroup={bloodGroup}
              address={address}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
