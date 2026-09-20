import { useEffect, useState } from 'react';

export default function TableOfContents() {
    const [headings, setHeadings] = useState<header[]>([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll<HTMLElement>('h2, h3'));
        const newHeadings: header[] = headingElements.map(
            (heading) => ({ id: heading.id, title: heading.innerText, isChild: heading.nodeName === 'H3' })
        );
        setHeadings(newHeadings);
    }, []);

    return (
        <nav aria-label='Table of contents' className='h-screen sticky top-0 py-1 px-2 float-right'>
            <ul className='list-disc list-inside'>
                {headings.map((heading) => <HeaderLink key={heading.id} heading={heading} />)}
            </ul>
        </nav>
    )
}

function HeaderLink({ heading }: Readonly<{ heading: header }>) {
    return (
        <li className={heading.isChild ? "indent-4" : ""}>
            <a href={`#${heading.id}`} className='hover:underline' >
                {heading.title}
            </a>
        </li >
    );
}

interface header {
    id: string
    title: string
    isChild: boolean
}