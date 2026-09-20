import { useEffect, useState } from 'react';

export default function TableOfContents() {
    const { headings } = useHeadingsData();
    return (
        <nav aria-label='Table of contents' className='h-screen sticky top-0 py-1 px-2 float-right'>
            <ul className='list-disc list-inside'>
                {headings.map((heading) => <HeaderLink heading={heading} />)}
            </ul>
        </nav>
    )
}

function HeaderLink({ heading }: Readonly<{ heading: header }>) {
    return (
        <li key={heading.id} className={heading.isChild ? "indent-4" : ""}>
            <a href={`#${heading.id}`} className='hover:underline' >
                {heading.title}
            </a>
        </li >
    );
}


function useHeadingsData() {
    const [headings, setHeadings] = useState<header[]>([]);

    useEffect(() => {
        const newHeadings: header[] = [];

        const headingElements = Array.from(
            document.querySelectorAll<HTMLElement>('h2, h3')
        );

        headingElements.forEach((heading) => {
            newHeadings.push({ id: heading.id, title: heading.innerText, isChild: heading.nodeName === 'H3' });
        });
        setHeadings(newHeadings);
    }, []);

    return { headings };
};

interface header {
    id: string
    title: string
    isChild: boolean
}