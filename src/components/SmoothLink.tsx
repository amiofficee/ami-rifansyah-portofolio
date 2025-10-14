'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type SmoothLinkProps = {
	id: string;
	className?: string;
	children: React.ReactNode;
	onNavigate?: () => void;
};

function scrollToId(targetId: string) {
	const element = document.getElementById(targetId);
	if (!element) return;
	const headerOffset = 96; // ~6rem header
	const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
	const scrollTop = Math.max(elementTop - headerOffset, 0);
	window.scrollTo({ top: scrollTop, behavior: 'smooth' });
}

export default function SmoothLink({ id, className, children, onNavigate }: SmoothLinkProps) {
	const pathname = usePathname();
	const router = useRouter();
	const isHome = pathname === '/';
	const href = `/${'#'}${id}`;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (isHome) {
			e.preventDefault();
			scrollToId(id);
			onNavigate?.();
			return;
		}
		// Navigate to home with hash without auto scroll; Home will handle smooth scroll
		e.preventDefault();
		onNavigate?.();
		router.push(href, { scroll: false });
	};

	return (
		<Link href={href} className={className} onClick={handleClick}>
			{children}
		</Link>
	);
} 