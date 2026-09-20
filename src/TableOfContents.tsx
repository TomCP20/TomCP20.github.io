import { useEffect, useState } from 'react';

export default function TableOfContents() {
    const { nestedHeadings } = useHeadingsData();
    console.log(nestedHeadings)
    return (
        <nav aria-label='Table of contents' className='h-screen sticky top-0 py-1 px-2 float-right'>
            <Headings headings={nestedHeadings} />
        </nav>
    )
}

function Headings({ headings }: Readonly<{ headings: outerHeader[] }>) {
    return (
        <ul className='list-disc list-inside'>
            {headings.map((heading) => (
                <li key={heading.id}>
                    <HeaderLink heading={heading} />
                    {heading.items && (
                        <ul className='list-disc list-inside indent-4'>
                            {heading.items.map((child) => (
                                <li key={child.id}>
                                    <HeaderLink heading={child} />
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

function HeaderLink({ heading }: Readonly<{ heading: innerHeader | outerHeader }>) {
    return <a
        href={`#${heading.id}`}
        onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth'
            });
        }}
        className='hover:underline'
    >{heading.title}</a>;
}

function useHeadingsData() {
    const [nestedHeadings, setNestedHeadings] = useState<outerHeader[]>([]);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll<HTMLElement>('h2, h3')
        );

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
};

function getNestedHeadings(headingElements: HTMLElement[]) {
    const nestedHeadings: outerHeader[] = [];

    headingElements.forEach((heading) => {
        const { innerText: title, id } = heading;

        if (heading.nodeName === 'H2') {
            nestedHeadings.push({ id, title, items: [] });
        } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });

    return nestedHeadings;
};

interface innerHeader {
    id: string
    title: string
}

interface outerHeader {
    id: string
    title: string
    items: innerHeader[]
}