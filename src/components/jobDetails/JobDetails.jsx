import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from 'react-icons/Ai';
import { MdOutlineSubtitles } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/Ai';
import { AiOutlineMail } from 'react-icons/Ai';
import { GrLocation } from 'react-icons/Gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const IdInt = parseInt(id);
    const job = jobs.find(job => job.id === IdInt)


    const notify = () => toast("You have applied Succesfully");
    return (
        <div>
             <ToastContainer />
            <h1 className="text-5xl text-center bg-slate-400 p-20">Job Details</h1>
            <div className="max-w-7xl mx-auto lg:flex gap-6 mt-20">
                <div className="lg:w-3/5 m-4 " >
                    <p> <span className=" font-semibold">Job Description : </span>{job.job_description}</p>
                    <p className="my-5"> <span className=" font-semibold ">Job Responsibility : </span>{job.job_responsibility}</p>
                    <p><span className="font-semibold">Educational Requirements : </span> <br />{job.educational_requirements}</p>
                    <p className="my-5"><span className="font-semibold">Experiences : </span>{job.experiences}</p>
                </div>
                <div className="lg:w-2/5 m-4   text-lg">
                    <div className="bg-blue-50 p-5">
                        <h1 className=" text-2xl font-semibold mb-3">Job Details</h1>
                        <hr />
                        <p className="my-4 flex items-center gap-2"> <AiOutlineDollarCircle></AiOutlineDollarCircle> <p><span className="font-semibold"> Salary :</span> {job.salary} (Per Month)</p></p>
                        <p className="my-4 flex items-center gap-2"><MdOutlineSubtitles></MdOutlineSubtitles> <p><span className="font-semibold">Job Title :</span> {job.job_title}</p></p>
                        <h1 className=" text-2xl font-semibold mb-3">Contact Information</h1> <hr />
                        <p className="my-4 flex items-center gap-2"><AiOutlinePhone></AiOutlinePhone> <span className="font-semibold">Phone :</span> {job.contact_information.phone}</p>
                        <p className="my-4 flex items-center gap-2"><AiOutlineMail></AiOutlineMail> <span className="font-semibold">Email :</span> {job.contact_information.email}</p>
                        <p className="my-4 flex items-center gap-2"><GrLocation></GrLocation> <p><span className="font-semibold">Email:</span> {job.contact_information.address}</p></p>

                    </div>
                    <div className="text-center">
                        <button onClick={notify} className="w-full p-3 text-black rounded-xl cursor-pointer bg-gradient-to-r from-[#4258ea] to-[#e641c5] hover:from-[#253bca] hover:to-[#b634b0] mt-4">Apply Now</button>
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;