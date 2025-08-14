

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialog";

async function Images() {
  const mockUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwWHLS2azimg7TzUg_fsDJiRJi_8XGewLqw&s", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkeJvjWUx1278jiQeqYhQ3-IhSJV0foIQGQ&s",
  "https://9mxaynuqyy.ufs.sh/f/uTkyN0qzM5jPcKTfITnWvN4pS7IDVQCdxFzt8Rg0KLslwBa1",
  "https://9mxaynuqyy.ufs.sh/f/uTkyN0qzM5jPPXprFv1w1n7rkIzCps2YvZHdgcBEoOFt3qjm",
];


  const images = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div>
      <div className="flex justify-end p-4">
        <UploadDialog />
      </div>
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-64 flex-col">
          <div className="relative aspect-video bg-zinc-800 flex items-center justify-center border border-gray-400">
  <img
    src={image.url}
    alt={`Image ${image.id}`}
    className="max-h-full max-w-full object-contain object-center"
  />
</div>

          <div className="text-center">{image.id}</div>
        </div>
      ))}
    </div>
    </div>
  );
}






export default function HomePage() {
  return (
    <main> 
      <SignedOut> 
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above to Continue!
        </div>
      </SignedOut> 
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">
          Welcome Back!
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
