
const getFeatureJobs = async() =>{
const fetchJobs =  await fetch('/features.json');
const jobs =  await fetchJobs.json();

return jobs;

}

export default getFeatureJobs