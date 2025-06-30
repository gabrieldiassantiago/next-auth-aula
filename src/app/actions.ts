    "use server"

import { signIn } from "@/lib/auth"


  async function handleRegister() {
    await signIn("github",{callbackUrl: "/dashboard"})
  }

  export { handleRegister }