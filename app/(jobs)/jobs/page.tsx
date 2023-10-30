'use client';
import { title } from '@/components/primitives';
import { useEffect, useState } from 'react';
import JobCard from '@/app/(jobs)/jobs/JobCard';
import JobSearchBar from '@/app/(jobs)/jobs/JobSearchBar';
import { Pagination } from '@nextui-org/pagination';
import { Metadata } from 'next';
import Filters from './Filters';

// export const metadata: Metadata = {
//   title: 'Jobs',
//   description: 'Find your next job',
// };

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const jobs = await fetch('/api/jobs');
    const data = await jobs.json();
    setJobs(data);
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <h1 className={title()}>Jobs</h1>

      <div className='my-8'>
        <JobSearchBar />
      </div>

      <div className='flex flex-col md:flex-row gap-8 pt-8'>
        <Filters />
        <div>
          <div className='grid w-full gap-5 md:grid-cols-2 sm:grid-cols-1'>
            {jobs.map((listing: any) => {
              return (
                <JobCard
                  key={listing.jobs.jobid}
                  id={listing.jobs.jobid}
                  position={listing.jobs.jobTitle}
                  company={listing.company.name}
                  companyLogo='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png'
                  companyRating={4.5}
                  postedDate={new Date(
                    listing.jobs.startDate
                  ).toLocaleDateString()}
                  expirationDate={new Date(
                    listing.jobs.endDate
                  ).toLocaleDateString()}
                  location={listing.jobs.address}
                  pay={'$150,000/yr'}
                  jobType={listing.jobs.jobType}
                />
              );
            })}
          </div>
          <div className='flex flex-row items-center justify-center my-52'>
            <Pagination total={5} initialPage={1} />
          </div>
        </div>
      </div>
    </>
  );
}
