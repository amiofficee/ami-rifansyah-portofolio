'use client';

import { useEffect } from 'react';

function scrollToId(targetId: string) {
	const element = document.getElementById(targetId);
	if (!element) return;
	const headerOffset = 96; // ~6rem header
	const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
	const scrollTop = Math.max(elementTop - headerOffset, 0);
	window.scrollTo({ top: scrollTop, behavior: 'smooth' });
}

export default function HashScrollHandler() {
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const initialHash = window.location.hash;
		if (initialHash && initialHash.length > 1) {
			// delay to ensure content rendered
			setTimeout(() => scrollToId(initialHash.slice(1)), 0);
		}

		const onHashChange = () => {
			const h = window.location.hash;
			if (h && h.length > 1) scrollToId(h.slice(1));
		};

		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);

	return null;
} 