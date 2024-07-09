
import websiteImg2 from '../assets/food-ecommerce.jpg';

import websiteImg3 from '../assets/weather.jpg';
import websiteImg4 from '../assets/calculator.jpg';
import websiteImg5 from '../assets/to-do.jpg';
import websiteImg6 from '../assets/connect.jpeg';

export default function Projects() {

    const config = {
        projects : [
            
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, Built with HTML, CSS, JAVASCRIPT',
                link: 'https://github.com/Barkavirajan/Restaurant'
            },
          
            {
                image: websiteImg4,
                description: 'Web-based applications for a calculator implemented with HTML, css & Javascript',
                link: 'https://github.com/Barkavirajan/Calculator'
            },
            {
                image: websiteImg5,
                description: 'Web-based applications for a to-do list implemented with HTML, css & Javascript',
                link: 'https://github.com/Barkavirajan/TO-DO'

            },
            {
                image: websiteImg6,
                description: 'Web-based applications for a connect implemented with HTML, css & Javascript',
                link: 'https://github.com/Barkavirajan/Connect'

            },
            {
                image: websiteImg3,
                description: 'An Arduino-based weather station utilizing the DHT11 temperature and humidity sensor for precise environmental monitoring.',
                link: 'https://github.com/Barkavirajan/Arduino-Weather-Station-and-theDHT11-Temperature-Humidity-sensor'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
