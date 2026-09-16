import type { ReactNode } from 'react';
import { Link } from './Link';
import { IconList, type iconName } from './Icons';

export default function Project({ title, image, repoTo, pageTo, icons, children }: Readonly<{ title: string; image: string; repoTo: string; pageTo: string; icons: iconName[]; children: ReactNode; }>) {
  return (
    <div className='w-[50%] m-auto p-1'>
      <h3 className='text-center text-lg m-4'>{title}</h3>
      <img src={image} className='bg-black mx-auto my-8' />
      <div>
        {children}
      </div>
      <br />
      <IconList names={icons} />
      <div className='text-center m-4'>
        <Link to={repoTo}>Repo</Link> <Link to={pageTo}>Page</Link>
      </div>
    </div>);
}
