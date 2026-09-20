import type { ReactNode } from 'react';

export function Header({ children }: Readonly<{ children: ReactNode; }>) {
  return <h2 className='text-center text-xl underline m-3 scroll-m-3' id={children?.toString().replace(/ /g, "-")}>{children}</h2>;
}
