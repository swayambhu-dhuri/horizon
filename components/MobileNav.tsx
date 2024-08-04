"use client";
import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
	const pathname = usePathname();

	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
				<SheetTrigger>
					<Image
						src="/icons/hamburger.svg"
						alt="menu"
						width={30}
						height={30}
					/>
				</SheetTrigger>
				<SheetContent side="left" className="border-none bg-white">
					<Link
						href="/"
						className="flex cursor-pointer items-center gap-2"
					>
						<Image
							src="/icons/logo.svg"
							width={34}
							height={34}
							alt="horizon-logo"
						/>
						<h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
							Horizon
						</h1>
					</Link>
					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="flex h-full flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map(
									({ route, label, imgURL }) => {
										const isActive =
											pathname === route ||
											pathname.startsWith(`${route}/`);
										return (
											<SheetClose asChild key={route}>
												<Link
													href={route}
													key={label}
													className={cn(
														"mobilenav-sheet_close w-full",
														{
															"bg-bank-gradient":
																isActive,
														},
													)}
												>
													<Image
														src={imgURL}
														alt={label}
														className={cn({
															"brightness-[3] invert-0":
																isActive,
														})}
														width={20}
														height={20}
													/>
													<p
														className={cn(
															"text-16 font-semibold text-black-2",
															{
																"text-white":
																	isActive,
															},
														)}
													>
														{label}
													</p>
												</Link>
											</SheetClose>
										);
									},
								)}
								USER
							</nav>
						</SheetClose>
						FOOTER
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
