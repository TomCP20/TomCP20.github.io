import type { ReactNode } from 'react';
import { Link } from './Link';
import { IconList, type iconName } from './Icons';

export default function Project({ title, image, repoTo, pageTo, icons, children }: Readonly<{ title: string; image: string; repoTo: string; pageTo?: string; icons: iconName[]; children: ReactNode; }>) {
  return (
    <div className='w-[50%] rounded-lg border mx-auto my-3 p-2'>
      <h3 className='text-center text-lg underline m-3'>{title}</h3>
      <img src={image} className='bg-black w-[50%] float-right m-1' />
      <div className='m-1'>
        {children}
      </div>
      <div className='text-center clear-both p-2'>
        <Link to={repoTo}>Repo</Link>{pageTo !== undefined && (<Link to={pageTo}>Page</Link>)}
      </div>
      <IconList names={icons} />
    </div>);
}
