import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogle = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta Google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant={"outline"}
        className="gap-2"
        onClick={handleLoginWithGoogle}
      >
        <Image
          src="/icons/google.svg"
          alt="Google Icon"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
