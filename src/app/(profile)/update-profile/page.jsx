import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

const UpdateProfilePage = async () => {
  // Get session from server-side
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <UpdateProfileForm user={session.user} />;
};

export default UpdateProfilePage;
