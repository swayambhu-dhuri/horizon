"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";
const SideBar = ({ user }: SiderbarProps) => {
	const pathname = usePathname();

	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href="/"
					className="flex mb-12 cursor-pointer items-center gap-2"
				>
					<Image
						src="/icons/logo.svg"
						width={34}
						height={34}
						alt="horizon-logo"
						className="size-[24px] max-xl:size-14"
					/>
					<h1 className="sidebar-logo">Horizon</h1>
				</Link>
				{sidebarLinks.map(({ route, label, imgURL }) => {
					const isActive =
						pathname === route || pathname.startsWith(`${route}/`);
					return (
						<Link
							href={route}
							key={label}
							className={cn("sidebar-link", {
								"bg-bank-gradient": isActive,
							})}
						>
							<div className="relative size-6">
								<Image
									src={imgURL}
									alt={label}
									className={cn({
										"brightness-[3] invert-0": isActive,
									})}
									fill
								/>
							</div>
							<p
								className={cn("sidebar-label", {
									"!text-white": isActive,
								})}
							>
								{label}
							</p>
						</Link>
					);
				})}
				<PlaidLink user={user} />
			</nav>

			<Footer user={user} />
		</section>
	);
};

export default SideBar;
