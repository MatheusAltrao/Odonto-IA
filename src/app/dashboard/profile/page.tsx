import { authOptions } from '@/lib/auth';
import { prismaClient } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import EditProfile from './components/EditProfile';

const Profile = async () => {
  const session = await getServerSession(authOptions);

  const user = await prismaClient.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });

  return <EditProfile user={user} />;
};

export default Profile;
