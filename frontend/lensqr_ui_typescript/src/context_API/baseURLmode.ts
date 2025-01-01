const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://lendsqr-fe-test-full-stackserver.vercel.app/api';
const currentBackendAppEnvironmentStatus = `Current Backend Environ is :- ${process.env.NODE_ENV}. Backend URL is :- ${baseURL}`


export const environ = {
    baseURL, 
    currentBackendAppEnvironmentStatus
}