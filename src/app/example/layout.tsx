import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Example Page',
  description: 'Example page for the Next.js template',
};

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
