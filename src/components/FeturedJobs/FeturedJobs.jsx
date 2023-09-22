import { useEffect, useState } from "react";
import Job from "../job/job";


const FeturedJobs = () => {
    const [jobs, setjobs] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data));
    }, [])


    return (
        <div className="m-1">
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl mx-auto gap-5 my-10">
                {
                    jobs.slice(0, dataLength).map(jobs => <Job key={jobs.id} jobs={jobs}></Job>)
                }
            </div>
            <div className="text-center">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)}
                        className="p-3 text-black rounded-xl cursor-pointer bg-gradient-to-r from-[#4258ea] to-[#e641c5] hover:from-[#253bca] hover:to-[#b634b0]">Show All Jobs</button>
                </div>
            </div>
        </div>

    );
};

export default FeturedJobs;