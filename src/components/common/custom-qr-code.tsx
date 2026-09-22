"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeStyling, { type Options } from "qr-code-styling";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RiDownloadCloud2Line } from "@remixicon/react";
import wiocareLogo from "@/assets/images/logos/wiocare-fav.png";
import type { StaticImageData } from "next/image";

export interface CustomQRCodeProps {
  /** The data to encode in the QR code (e.g., a URL) */
  data: string;
  /** Width of the QR code in pixels. Default is 300 */
  width?: number;
  /** Height of the QR code in pixels. Default is 300 */
  height?: number;
  /** Optional image (e.g. a logo) to render in the center */
  image?: string | StaticImageData;
  /** Allow users to download the generated QR code */
  allowDownload?: boolean;
}

// The baseline configuration defined by the user
const baseConfig: Options = {
  type: "canvas",
  shape: "square",
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  imageOptions: {
    saveAsBlob: true,
    hideBackgroundDots: true,
    imageSize: 0.3,
    margin: 3,
  },
  dotsOptions: {
    type: "dots",
    color: "#6a1a4c",
    roundSize: true,
    gradient: {
      type: "linear",
      rotation: 1.7453292519943295,
      colorStops: [
        { offset: 0, color: "#2db5e5" },
        { offset: 1, color: "#1e97c4" },
      ],
    },
  },
  backgroundOptions: {
    round: 0,
    color: "#ffffff",
    gradient: undefined,
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#2fa0bc",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#2db5e5" },
        { offset: 1, color: "#1e97c4" },
      ],
    },
  },
  cornersDotOptions: {
    type: "classy-rounded",
    color: "#2db5e5",
  },
};

export const CustomQRCode = ({
  data,
  width = 300,
  height = 300,
  image = wiocareLogo,
  allowDownload = true,
}: CustomQRCodeProps) => {
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const mainImage = typeof image === "string" ? image : image.src;
  useEffect(() => {
    // Only instantiate on client-side
    const qrCodeInstance = new QRCodeStyling({
      ...baseConfig,
      width,
      height,
      data,
      image: mainImage,
    });
    setQrCode(qrCodeInstance);
  }, [width, height, data, mainImage]);

  useEffect(() => {
    if (ref.current && qrCode) {
      ref.current.innerHTML = "";
      qrCode.append(ref.current);
    }
  }, [qrCode]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update({
      width,
      height,
      data,
      image: mainImage,
    });
  }, [width, height, data, mainImage, qrCode]);

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: "png",
      name: "wiocare-qr-code",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Container for the QR Code Canvas */}
      <div
        ref={ref}
        className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border p-4"
        style={{ minWidth: width, minHeight: height }}
      >
        {!qrCode && (
          <Skeleton style={{ width, height }} className="rounded-xl" />
        )}
      </div>

      {allowDownload && (
        <Button onClick={onDownloadClick} variant="outline" className="gap-2">
          <RiDownloadCloud2Line className="w-4 h-4" />
          <span className="shimmer shimmer-color-primary">Download QR</span>
        </Button>
      )}
    </div>
  );
};
