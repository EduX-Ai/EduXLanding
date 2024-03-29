import {
	Discord,
	Github,
	Instagram,
	Opencollective,
	Twitch,
	Twitter
} from '@sd/assets/svgs/brands';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import Logo from '../../public/eLogo.png';

function FooterLink(props: PropsWithChildren<{ link: string; blank?: boolean }>) {
	return (
		<Link
			href={props.link}
			target={props.blank ? '_blank' : ''}
			className="text-gray-300 duration-300 hover:text-white hover:opacity-50"
			rel="noreferrer"
			{...props}
		>
			{props.children}
		</Link>
	);
}

export function Footer() {
	return (
		<footer id="footer" className="relative z-50 w-screen overflow-hidden pt-3 backdrop-blur">
			<Image
				alt="footer gradient"
				className="absolute bottom-0 left-0 z-[-1]"
				quality={100}
				width={0}
				height={0}
				src="/images/footergradient.webp"
				style={{ width: '100%', height: '400px' }}
				sizes="100vw"
			/>
			<div className="min-h-64 m-auto grid max-w-[100rem] grid-cols-2 gap-6 p-8 pb-20 pt-10 text-white sm:grid-cols-2 lg:grid-cols-6">
				<div className="col-span-2">
					<Image alt="Spacedrive logo" src={Logo} className="mb-5 h-10 w-10" />

					<h1 className="mb-1 text-xl font-bold">EduX</h1>
					<p className="text-sm text-gray-350 opacity-50">
						&copy; Copyright {new Date().getFullYear()} EduX AI Technology Inc.
					</p>
					<div className="mb-10 mt-12 flex flex-row space-x-3">
						<FooterLink link="https://x.com/EduX">
							<Twitter className="h-6 w-6" />
						</FooterLink>
						<FooterLink aria-label="discord" link="https://discord.gg/edux">
							<Discord className="h-6 w-6" />
						</FooterLink>
						<FooterLink
							aria-label="instagram"
							link="https://instagram.com/EduX"
						>
							<Instagram className="h-6 w-6" />
						</FooterLink>
						<FooterLink aria-label="github" link="https://github.com/AhmedIbreljic/EduX">
							<Github className="h-6 w-6" />
						</FooterLink>
						<FooterLink
							aria-label="open collective"
							link="https://opencollective.com/EduX"
						>
							<Opencollective className="h-6 w-6" />
						</FooterLink>
						<FooterLink
							aria-label="twitch stream"
							link="https://twitch.tv/AhmedIbreljicEduX"
						>
							<Twitch className="h-6 w-6" />
						</FooterLink>
					</div>
				</div>

				<div className="col-span-1 flex flex-col space-y-2">
					<h1 className="mb-1 text-xs font-bold uppercase ">About</h1>

					<FooterLink link="/team">Team</FooterLink>
					<FooterLink link="/docs/product/resources/faq">FAQ</FooterLink>
					<FooterLink link="/careers">Careers</FooterLink>
					<FooterLink link="/docs/changelog/beta/0.1.0">Changelog</FooterLink>
					<FooterLink link="/blog">Blog</FooterLink>
				</div>
				<div className="col-span-1 flex flex-col space-y-2">
					<h1 className="mb-1 text-xs font-bold uppercase">Partners</h1>
					<div className="col-span-1 flex flex-col space-y-2">
						<FooterLink link="https://spacedrive.com/api/releases/desktop/stable/darwin/aarch64">
							EduXMind
						</FooterLink>
						<FooterLink link="https://spacedrive.com/api/releases/desktop/stable/darwin/x86_64">
							EduXGPT
						</FooterLink>
						<FooterLink link="https://spacedrive.com/api/releases/desktop/stable/windows/x86_64">
							EduXZero
						</FooterLink>
						<FooterLink link="https://spacedrive.com/api/releases/desktop/stable/linux/x86_64">
							EduXAssist
						</FooterLink>
					</div>
					<div className="pointer-events-none col-span-1 flex flex-col space-y-2 opacity-50">
						<FooterLink link="#">EduXBase</FooterLink>
					</div>
				</div>
				<div className="col-span-1 flex flex-col space-y-2">
					<h1 className="mb-1 text-xs font-bold uppercase ">Agreements</h1>
					<FooterLink link="/docs/product/getting-started/introduction">
						Documentation
					</FooterLink>
					<FooterLink
						blank
						link="https://github.com/spacedriveapp/spacedrive/blob/main/CONTRIBUTING.md"
					>
						Contribute
					</FooterLink>
					<div className="pointer-events-none opacity-50">
						<FooterLink link="#">Extensions</FooterLink>
					</div>
					<div className="pointer-events-none opacity-50">
						<FooterLink link="#">Discussions</FooterLink>
					</div>
				</div>
				<div className="col-span-1 flex flex-col space-y-2">
					<h1 className="mb-1 text-xs font-bold uppercase ">Org</h1>
					<FooterLink blank link="https://opencollective.com/EduX">
						Open Collective
					</FooterLink>
					<FooterLink
						blank
						link="https://github.com/spacedriveapp/spacedrive/blob/main/LICENSE"
					>
						License
					</FooterLink>
					<div>
						<FooterLink link="/docs/company/legal/privacy">Privacy Policy</FooterLink>
					</div>
					<div>
						<FooterLink link="/docs/company/legal/terms">Terms</FooterLink>
					</div>
				</div>
			</div>
			<div className="absolute top-0 flex h-1 w-full flex-row items-center justify-center opacity-100">
				<div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/10"></div>
				<div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/10"></div>
			</div>
		</footer>
	);
}
