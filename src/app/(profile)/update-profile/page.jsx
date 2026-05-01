import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

const UpdateProfilePage = async () => {
  // Get session from server-side
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login");
  }

  return <UpdateProfileForm user={session.user} />;
};

export default UpdateProfilePage;
