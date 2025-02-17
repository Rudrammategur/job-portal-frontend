export default function JobCard({ job }) {
    return (
      <div className="border p-4 my-2">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p>{job.location}</p>
      </div>
    );
  }
  