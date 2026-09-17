import type { ReactNode } from 'react';

export function Link({ to, children }: Readonly<{ to: string; children: ReactNode; }>) {
  return <a href={to} className='rounded-lg bg-gray-300 hover:bg-gray-400 mx-1 py-1 px-4'>{children}</a>;
}
