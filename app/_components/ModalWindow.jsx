"use client";

import { useEffect, useRef } from "react";
import useOnClickOutside from "@/app/hooks/useOnClickOutside";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalWindow({ trigger, setTrigger, title, children }) {
	const windowBox = useRef(null);
	useOnClickOutside(windowBox, () => setTrigger(false));

	useEffect(() => {
		if (trigger) {
			document.getElementsByTagName("html")[0].style.overflowY = "hidden";
		} else {
			document.getElementsByTagName("html")[0].style.overflowY = "auto";
		}
	}, [trigger]);

	return (
		<AnimatePresence>
			{trigger && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<div
						className={
							"fixed top-0 left-0 bottom-0 right-0 bg-black/25 flex-middle"
						}>
						<div
							ref={windowBox}
							className={
								"md:px-8 md:py-8 bg-white rounded-2xl px-36 py-14 flex-middle flex-col gap-7 max-w-[676px]"
							}>
							<div
								className={
									"flex-middle flex-col gap-2 max-w-[225px]"
								}>
								<h6
									className={
										"text-black-100 text-2xl font-semibold text-center"
									}>
									{title}
								</h6>
								<p
									className={
										"text-black/40 text-sm text-center"
									}>
									{children[0]}
								</p>
							</div>
							{children.slice(1)}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
