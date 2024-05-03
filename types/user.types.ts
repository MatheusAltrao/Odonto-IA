export type UserProps = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  created_at: Date;
  phone: string | null;
} | null;
