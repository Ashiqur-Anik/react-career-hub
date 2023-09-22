/* eslint-disable react/prop-types */
import { CiLocationOn } from 'react-icons/Ci';
import { LuCircleDollarSign } from 'react-icons/Lu';
import { Link } from 'react-router-dom';

const Job = ({ jobs }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = jobs;
    return (
        <div className="bg-slate-200 rounded-2xl p-6">
            <div>
                <img src={logo} alt="" />
                <h2 className="text-2xl font-semibold  my-3">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex my-3" >
                    <button className="mr-10 border-solid border-2 border-indigo-500 py-1 px-2 rounded-lg hover:bg-black hover:text-white">{remote_or_onsite}</button>
                    <button className="border-solid border-2 border-indigo-500 py-1 px-2 rounded-lg hover:bg-black hover:text-white">{job_type}</button>
                </div>
                <div className="flex my-4 gap-8 ">
                    <p className='flex items-center gap-1'><CiLocationOn></CiLocationOn>{location}</p>
                    <p className='flex items-center gap-1'><LuCircleDollarSign></LuCircleDollarSign>Salary:{salary}</p>
                </div>
                <Link to={`/job/${id}`}><button className="p-3 text-black rounded-xl cursor-pointer bg-gradient-to-r from-[#4258ea] to-[#e641c5] hover:from-[#253bca] hover:to-[#b634b0]">View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;