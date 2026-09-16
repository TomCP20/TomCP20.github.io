import type { ReactNode } from 'react';

export function Link({ to, children }: Readonly<{ to: string; children: ReactNode; }>) {
  return <a href={to} className='hover:underline text-blue-600 visited:text-purple-600'>{children}</a>;
}
