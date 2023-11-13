import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type ProfileFormEntry = {
	email?: string | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	profilePicture?: FormDataEntryValue | undefined;
	about: string | undefined;
	city: string | undefined;
	country: string | undefined;
	phoneNumber: string | undefined;
	birthday: string | undefined;
	isEmployer: boolean;
	[key: string]: string | boolean | FormDataEntryValue | undefined;
};

export type Job = {
	jobTitle: string | undefined;
	jobType: string | undefined;
	jobDescription: string | undefined;
	jobResponsibilities: string | undefined;
	jobRequirements: string | undefined;
	workAddress?: string | undefined;
	latitude?: string | undefined;
	longitude?: string | undefined;
	skills: string | undefined;
	expirationDate: string | undefined;
	showPayRate: string | undefined;
	payType?: string | undefined;
	salary?: FormDataEntryValue | undefined;
	hourlyRate?: FormDataEntryValue | undefined;
};

export type JobFilters = {
	searchQuery: string | undefined;
	jobTypes: string[] | undefined;
};
