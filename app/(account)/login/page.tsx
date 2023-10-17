import GlowCircle from '@/components/GlowCircle';
import { GithubIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';
import LoginForm from './LoginForm';

export default function Page() {
	return (
		<section>
			<GlowCircle top={20} left={35} percent color='secondary' />
			<div className='text-center'>
				<h2 className={title({ size: 'sm' })}>Login to your account</h2>
			</div>
			<Card className='max-w-lg mx-auto mt-10'>
				<CardBody className='p-12'>
					<LoginForm />
					<div className='mt-6 text-center'>
						<span className='dark:text-default-800'>
							Don&apos;t have an account?{' '}
						</span>
						<Link
							className='font-medium text-primary hover:underline'
							href='/register'
						>
							Register
						</Link>
					</div>
					<div className='relative mt-6'>
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-divider' />
						</div>
						<div className='relative text-center'>
							<span className='px-6 font-medium bg-content1'>
								Or continue with
							</span>
						</div>
					</div>
					<Button className='bg-[rgb(36,41,47)] hover:bg-[rgb(52,60,69)] text-white transition-background rounded-md flex gap-3 py-3 mt-6'>
						<GithubIcon />
						Github
					</Button>
				</CardBody>
			</Card>
		</section>
	);
}