"use client";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Component() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    router.push("/products");
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="flex max-w-md w-full bg-slate-300 p-5 flex-col gap-4 rounded-md">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        {/* <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div> */}
        <Button type="button" isProcessing={isLoading} onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
export default Component;
